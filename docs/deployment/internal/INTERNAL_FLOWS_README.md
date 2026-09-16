# Internal platform — endpoint flows, designer-paste packages

Seven packages in [`flows/designer-paste/`](./flows/designer-paste/), covering the internal
platform's twenty contract keys. Same modern-designer clipboard format as the portal set, same
paste procedure, all at **100%** on `flow-standard.json`.

```bash
npm run designerpaste        # validates all 13 packages, portal and internal
npm run build:internalpaste  # regenerates the seven below
```

An eighth package sits apart from these, in [`flows/inventory/`](./flows/inventory/), because it
serves no contract key and touches no SharePoint list. `DGO_ENDPOINT_INVENTORY` reads the tenant
through the Power Automate Management connector and reports what is actually there — see
[`ENDPOINT_INVENTORY_FLOW.md`](./ENDPOINT_INVENTORY_FLOW.md).

| Package | Actions | Serves |
|---|---|---|
| `DGO_FETCH_ALL` | 50 | `FETCH_ALL` — the boot call |
| `DGO_REFERENCE_DATA` | 44 | `REFERENCE_DATA` |
| `DGO_GET_DOCS` | 41 | `GET_DOCS` |
| `DGO_SINGLE_ASSIGNMENT` | 50 | `SINGLE_ASSIGNMENT` — `assign-one`, `route-task` |
| `DGO_BULK_ASSIGNMENT` | 47 | `BULK_ASSIGNMENT`, `BULK_ASSIGNMENT_DIRECT` |
| `DGO_DYNAMIC_GLOBAL_ACTIONS` | 49 | `DYNAMIC_ACTIONS`, `EMAIL`, `DISPATCH_OUTBOUND`, `ARCHIVE_REFERENCE` — 40 operations |
| `DGO_OTP` | 48 | `OTP_GENERATE`, `OTP_VERIFY` |

---

## What is different from the portal set

**The caller is resolved, never trusted.** Every package except `DGO_OTP` opens with the same
identity gate:

1. `Compose_<tag>_Caller` — the address from the request body.
2. `Get_<tag>_Directory_User` — `DGO_UserDirectory` filtered on `Email` **and** `Status eq 'active'`.
3. `Compose_<tag>_Role` — the `Role` column off that row.
4. `Get_<tag>_Role_Permissions` — `DGO_RoleCatalogue` on `RoleId`, `Active eq 1`.
5. `Compose_<tag>_Permitted` — the permission is in `PermissionsJson`, or `AllowedRoutesJson` is `["*"]`.

The role comes from the directory, never from `userEmail` or any claim in the body. This is
Wave 3.3 of [`FLOW-BUILD-PLAN.md`](../FLOW-BUILD-PLAN.md), and it is what closes the fail-open:
until it runs, `core/state.js` seeds a bootstrap admin and every browser is a System Administrator.

**401 and 403 are distinct.** A caller absent from the directory gets `401`; a caller present but
whose role lacks the permission gets `403`. The client distinguishes them.

**`user-admin:*` needs `role:assign`, checked separately.** `DGO_DYNAMIC_GLOBAL_ACTIONS` carries a
second gate for the four user-administration operations, because this is a plain HTTP endpoint and
a viewer can post that payload.

**An unrecognised operation fails loudly, and an unimplemented one says so.**
`Compose_Dynamic_Known_Operations` holds the **19** discriminators the client actually sends;
anything else is `400 UNKNOWN_OPERATION`. Of those 19, four have a write body — the rest answer
**`501 NOT_IMPLEMENTED` with `applied: false`**. A `200` with `applied: true` would tell the client
the registry changed when it did not, and `PendingQueue` would stop retrying.

The 19 are **derived from the client**, not written by hand — `npm run test:dynamicops` fails when
they drift. This matters more than it sounds: `WriteManager.backend()` sends `operation: action`
and then spreads the payload *over* it, so a payload carrying its own `operation` wins.
`flagPayload()` does exactly that, which is why the document-flag write arrives as `update`, not as
`flag-document`.

---

## How the request body is read

`core/data-client.js` builds every internal request as

```json
{ "action": "<contract.action>", "payload": { … }, "userEmail": "…", "requestId": "…", "timestamp": "…" }
```

The caller's fields are **nested under `payload`**. Only `action`, `userEmail`, `requestId` and
`timestamp` are top-level, and `action` is the endpoint's fixed contract action —
`dynamicGlobalAction`, `otpGenerate`, `fetchAll` — never the caller's own discriminator.

One call site differs: `modules/single-assignment.js` passes `flatPayload: true` and gets
`{ action, ...payload, userEmail, correlationId }`. So every field is read payload-first with a
top-level fallback, and `npm run designerpaste` fails any internal package that reads a caller
field from the top level alone. That check exists because the failure is silent — the flow
answers as though the caller sent nothing, which is indistinguishable from a caller who did.

Two consequences worth stating, because both were wrong before the check existed:

- The document flag's `flagDocument` / `unflagDocument` is at **`payload.action`**. Reading
  `triggerBody()['action']` returns `dynamicGlobalAction` on every call.
- `OTP_VERIFY` receives the code as **`payload.code`** from `core/otp-identity.js` and as
  **`payload.otp`** from `core/otp-service.js`. Both are read.

---

## What the response looks like, and why it differs from the portal's

These seven answer the **envelope** — `ok`, `status{}`, `request{}`, `timing{}`, `data`, `errors`,
`meta{}` — because `core/contracts.js` `assertEnvelope()` returns `response.data ?? response` and
reads exactly those keys. `request.trackingId` is present because `responseMeta()` reads it.

The seven **portal** packages answer the opposite shape: flat, no envelope. `portal-data-contract.json`
is `AUTHORITATIVE` and names every field the portal reads at the top level — `referenceId`, `sent`,
`verification`, `record`, `caseRef`, `stored` — each with the function that reads it, and
`document-portal/js/core.js` `readJson()` unwraps nothing. Both sets still compose
`Compose__Standard_Response_Revised`; only the internal set returns it, and the run record reports
what was actually sent rather than what was composed.

`npm run test:responsecontract` checks each package against its own client, reading the requirement
from `portal-data-contract.json` and `core/contracts.js` rather than restating it.

---

## Where every list GUID and column came from

Nothing here was invented. [`internal-field-evidence.json`](./internal-field-evidence.json) records
**11 lists and 96 columns**, each tagged with its source:

| Source | Meaning |
|---|---|
| `deployed` | Harvested from `item/<col>` writes and `$filter` clauses in the 57 exported flow definitions |
| `normaliser` | The columns `core/domain.js` actually reads back — `normalizeUser`, `normalizeCategory`, `normalizeDepartment`, `normalizeComment` |
| `seed` | `role-catalogue-seed.json`, generated from `config/rbac.config.js` |
| `tenant` | GUID, site and the `adopted` flag from the tenant capture |

`npm run designerpaste` fails a package that writes or filters a column absent from that file, so a
guessed column cannot reach an operator.

### The duplicate-list trap this closes

The tenant carries **34 `DGO_` lists across two sites** — three copies of most, `_2` and `_02`
suffixes and all. Only **11 are `adopted: true`**, and all eleven are on `DGO_ECM_GOVERNANCE`.
The validator refuses any package targeting an unadopted copy.

Two findings worth recording:

- **`sharepoint-provisioning-spec.json` names the wrong site.** Its `TargetSite` for all ten
  governance lists is `NITDADGO-EAAACTIVITYTRACKING`. The adopted copies are on
  `DGO_ECM_GOVERNANCE`. Building from the spec's site would target the dead duplicates.
- **Only one governance GUID appears in any deployed flow** — `DGO_AccessScopes`, once. The
  governance estate is provisioned and almost entirely unused, which is exactly what Wave 0
  and Wave 3 exist to change.

---

## What each package does

### `DGO_FETCH_ALL`

Reads six lists and returns the boot payload: `docs`, `tasks`, `users`, `categories`,
`departments`, `comments`, plus empty `emails` and `approvals`.

**`users` is the important one.** `FLOW-BUILD-PLAN.md` calls extending `FETCH_ALL` to return it
*"the single highest-value change in this document"*, and the package does it — the collection is
returned **always, even when empty**, because `users: []` means "the directory answered and you are
not in it" while omitting the key means "unchanged", and the platform acts on the difference.

Columns are returned as SharePoint internal names — `RefIDD`, `Reference_ID`, `AssignedTo`,
`Assigned`, `RoutedToDSU`, `CC_x0027_dTo`, `OData__x0033_rdAssigned` — because `core/domain.js`
normalises them and accepts every one of those aliases. Do not rename them to friendly names.

### `DGO_REFERENCE_DATA`
`users`, `categories`, `departments`. Same projections, no documents or tasks.

### `DGO_GET_DOCS`
Optional `reference` narrows to one `RefIDD`; absent, it returns the recent set.

### `DGO_SINGLE_ASSIGNMENT`
`assign-one` and `route-task`. **Idempotent:** if the row's `AssignedTo` already equals the
requested assignee it answers `200` with `changed: false` and writes nothing. `PendingQueue`
re-sends failed governed writes, so a retried assign must not produce two assignments.

### `DGO_BULK_ASSIGNMENT`
Caps at 50 per call, matching `AppConfig.maxBulkAssign`. **Reports per-item outcomes** in
`results[]` with a `requested` / `assigned` / `failed` count — never one aggregate status, because a
partial failure the client cannot see is a silent data-loss bug.

### `DGO_DYNAMIC_GLOBAL_ACTIONS`
The operation switch. 40 discriminators across lifecycle, records, registry files, briefs and
meetings, user administration, reminders and dispatch, activity parity, and the four terminal
operations `core/api.js` sends (`dispatchOutbound`, `archiveReference`, `transitionStatus`,
`logAuditEvent`).

### `DGO_OTP`
`requestOtp` and `verifyOtp` on one flow, switching on `action`.

**Enumeration is closed.** An address absent from the directory, or not `active`, gets the
identical `200` response shape and a matching delay — otherwise this endpoint tells an anonymous
caller who works at the agency. `sent` is truthful either way.

On `verifyOtp` the role is resolved from `DGO_UserDirectory` and returned in `claims.roles`. That
is the server's statement about the caller, not the caller's about themselves.

---

## Paste procedure

Identical to the portal set — see
[`../sharepoint/flows/CHANGES_TO_EXISTING_FLOWS.md`](../sharepoint/flows/CHANGES_TO_EXISTING_FLOWS.md).
Trigger stays, everything below it goes, paste, set the CORS origin. SharePoint connections arrive
bound; only `DGO_OTP`'s `Send_Otp_Mail` needs a connection picked.

**Order:** `DGO_OTP` first — nothing else can authenticate a caller until the directory is
populated and the OTP path works. Then `FETCH_ALL` and `REFERENCE_DATA` (the read spine), then the
assignment pair, then `DYNAMIC_GLOBAL_ACTIONS`.

**Before any of it, Wave 0:** `npm run seed:roles`, then `setup-sharepoint.ps1`, then populate
`DGO_UserDirectory` with one row per officer. Every gate in these packages resolves against those
two lists; with them empty, every call answers `401`.

---

## What these packages do not do

Stated so nobody assumes otherwise.

- **They carry write bodies for 4 of the 19 discriminators, and refuse the other 15 explicitly.**

  | Operation | Writes |
  |---|---|
  | `update` | `DGO DIGITAL OPS.Marked_Item` — the document flag, set or cleared |
  | `update-task` | `Global Tracking Queue` — `Progress`, `Comments`, `DueDate`, `Priority` |
  | `transitionstatus` | `DGO DIGITAL OPS.Status` |
  | `logauditevent` | `DGO_AuditLog.Title` |

  The other 15 — `dispatch`, `dispatchoutbound`, `archivereference` and the twelve activity-parity
  operations — answer `501` because the lists they touch (the dispatch register, the DGOFASTTRACK
  queue) have no column evidence. A column absent from `internal-field-evidence.json` was never
  seen in a deployed definition or a client normaliser, and `npm run designerpaste` refuses to
  build a write for it. That check earned its place here: it caught a `Global Tracking Queue.Status`
  write in this very flow — GTQ has no `Status` column, and `core/domain.js` resolves a task's
  status from `Progress`.
- **They do not implement `SCAN_INTAKE`** — a raw-bytes `PUT`, no JSON contract, and
  `DataClient.request()` must not be used for it.
- **They do not implement the AI keys** — `AI_CHAT`, `AI_EMAIL_ANALYSIS`, `AI_DOC_ANALYSIS`.
  Those route to external models and inherit the data-protection position for R-01, which is
  undecided.
- **They do not verify a bearer proof.** Wave 3.3 retrofits that into every flow once
  `DGO_AUTH_ENABLED=true`. The identity gate here resolves the caller from the directory, which is
  the half that closes the fail-open; the signature check is the half that needs the OTP proof
  format settled first.
