# DGO ECM — Implementation Execution Guide

> **This document carries no commands.** It is background and rationale: why each decision was
> taken, what the evidence was, and what the alternatives cost. The five **Procedure** blocks
> that used to be buried in it — 3% of 1,925 lines — are now §0 of
> [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md), with the rest of that domain's steps.
>
> The three documents that carry steps are
> [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md),
> [`governance/GOVERNANCE-TENANT-RUNBOOK.md`](./governance/GOVERNANCE-TENANT-RUNBOOK.md) and
> [`NOTIFICATION-TENANT-RUNBOOK.md`](./NOTIFICATION-TENANT-RUNBOOK.md). If you are here to
> execute, go to one of those.


**Document status:** Operational. This is the instruction set for taking the platform from its
current state to a working deployment. It is self-contained: every list GUID, column name, site
URL, request shape, response shape, rate limit, threshold and verification command needed to
execute it is reproduced here.

**Repository:** `dgoeaa/ECM_DOCS_DEV`
**Branch:** `claude/sharepoint-lists-gap-bqo7j7`
**Guide revision:** 2026-08-23

**Two roles execute this guide.**

| Role | Means | Does |
|---|---|---|
| **Operator** | Tenant access — Power Automate, SharePoint site settings, the mailbox | Phases 1–7 |
| **Repository owner** | `dgoeaa` GitHub org admin | Phase 0 only |

**Read before starting:** [§0.3 Two delivery routes](#03-two-delivery-routes-do-not-mix-them). Applying
the older patch-track artifacts on top of a pasted package will silently undo the fixes.

---

## Table of contents

- [0 · Before you start](#0--before-you-start)
- [1 · Reference data](#1--reference-data)
- [2 · Phase 0 — Repository access and the dry run](#2--phase-0--repository-access-and-the-dry-run)
- [3 · Phase 1 — SharePoint preparation](#3--phase-1--sharepoint-preparation)
- [4 · Phase 2 — Decisions taken before any paste](#4--phase-2--decisions-taken-before-any-paste)
- [5 · Phase 3 — Paste the seven portal flows](#5--phase-3--paste-the-seven-portal-flows)
- [6 · Phase 4 — Paste the seven internal flows](#6--phase-4--paste-the-seven-internal-flows)
- [7 · Phase 5 — Capture endpoint URLs and configure the portal](#7--phase-5--capture-endpoint-urls-and-configure-the-portal)
- [8 · Phase 6 — End-to-end verification](#8--phase-6--end-to-end-verification)
- [9 · Phase 7 — Security actions](#9--phase-7--security-actions)
- [10 · Deferred work and what unblocks it](#10--deferred-work-and-what-unblocks-it)
- [11 · Command reference](#11--command-reference)
- [12 · Troubleshooting](#12--troubleshooting)
- [13 · Sign-off record](#13--sign-off-record)

---

## 0 · Before you start

### 0.1 What you need in hand

| Requirement | Why | Verify you have it |
|---|---|---|
| Power Automate maker access to the environment holding the `Portal_*` and `DGO_*` flows | Every paste is a designer edit | Open any `Portal_*` flow and click **Edit** without an error |
| SharePoint **Manage Lists** on `NEDMS`, `Global_Digital_Documents_Centre`, `DGO_ECM_GOVERNANCE` | Phase 1 adds column indexes | Open a list → **Settings** → the **Indexed columns** link is present |
| A SharePoint connection in the environment | 102 of 105 connector actions bind to it | Power Automate → **Data** → **Connections** shows a SharePoint connection you own |
| An Office 365 Outlook connection for the sending mailbox | Three mail actions | Same page shows the Outlook connection for the mailbox chosen in §4.2 |
| Node.js ≥ 22 and the repository cloned | Every verification command | `node --version` prints v22 or higher |
| PowerShell 5.1 or later | The export and patch scripts | `$PSVersionTable.PSVersion` prints 5.1 or higher |

### 0.2 Confirm the repository is at the right revision

```bash
git clone https://github.com/dgoeaa/ECM_DOCS_DEV.git
cd ECM_DOCS_DEV
git checkout claude/sharepoint-lists-gap-bqo7j7
npm install
npm test
```

`npm test` must report every script passing. `test:smoke` requires Playwright browsers; if it is the
only failure and the message is `Cannot find package '@playwright/test'`, that is expected in an
environment without them and does not block this guide.

Then confirm the flow packages are intact:

```bash
npm run designerpaste        # must read: 14 package(s), 0 failure(s)
npm run responsecontract     # must read: 0 failure(s)
npm run triggers             # must read: 0 field read(s) the contract does not define
npm run test:dynamicops      # must read: 19 DYNAMIC_ACTIONS discriminator(s), in sync
```

If any of these fails, **stop**. The packages on disk do not match the specification and pasting
them will deploy something that has not been checked.

### 0.3 Two delivery routes — do not mix them

Two mechanisms exist in this repository for changing a deployed flow.

| Route | Mechanism | Files | Status |
|---|---|---|---|
| **Paste track** | Replace the whole flow body from a modern-designer clipboard package | `docs/deployment/sharepoint/flows/designer-paste/` (7) and `docs/deployment/internal/flows/designer-paste/` (7) | **Current. Use this.** |
| **Patch track** | Edit a deployed flow in place with `update-flow-definition.ps1` and a placement file | `docs/deployment/sharepoint/remediation/*.json` | Superseded for every flow a package covers |

**The paste track supersedes the patch track for all fourteen flows listed in this guide.** The
placement files remain in the repository because they are the only route for a flow with no package
and because they record the reasoning behind each change. Applying one on top of a pasted package
will reintroduce defects the package fixes.

The patch track is still used once, in Phase 0, for its dry run — that run sends nothing and exists
only to prove tenant connectivity.

### 0.4 The order is not arbitrary

Later steps depend on earlier ones in ways that are not obvious:

- **Indexes before traffic.** A list that crosses 5,000 items with an unindexed filter column stops
  answering. Adding the index afterwards requires the list to be under the threshold again.
- **Decisions before pasting.** The CORS origin and the mail connection are set inside each flow. A
  decision taken after pasting means opening all fourteen flows a second time.
- **`DGO_OTP` before every other internal flow.** Every internal package resolves its caller against
  `DGO_UserDirectory`. With that list empty, every internal endpoint answers `401`.
- **`VERIFY` and `VERIFY_CONFIRM` before `SUBMISSION`, `STATUS` and `WRITEBACK`.** Those three
  consume a verification proof. Without the pair working, no proof exists to consume.

---

## 1 · Reference data

Everything in this section is reproduced from the authoritative files in the repository. Where this
guide and one of those files disagree, the file wins and the disagreement is a defect in this guide.

| Subject | Authoritative file |
|---|---|
| Portal request/response contracts | `docs/deployment/sharepoint/portal-data-contract.json` (status: **AUTHORITATIVE**) |
| Portal list GUIDs, sites, columns | `docs/deployment/sharepoint/portal-field-spec.json` |
| Internal list GUIDs, columns, provenance | `docs/deployment/internal/internal-field-evidence.json` |
| Build standard (the ten checks) | `docs/deployment/sharepoint/flow-standard.json` |
| `DYNAMIC_ACTIONS` discriminators | `docs/deployment/internal/dynamic-operations.json` (generated) |
| Decisions D1–D14 | `docs/deployment/sharepoint/DECISIONS.md` |
| Open items | `docs/deployment/sharepoint/OPEN_ITEMS.md` |

### 1.1 Portal lists — thirteen, across three sites

| List | GUID | Site |
|---|---|---|
| Portal Registry | `4c49f66a-23cd-4e1f-8ce7-ec1bb40eb667` | `https://nitdanigeria.sharepoint.com/sites/NEDMS` |
| Portal Attachments | `ecf2ba9b-968f-4fbc-ac9c-7b5e36d5099e` | `https://nitdanigeria.sharepoint.com/sites/NEDMS` |
| Portal Status Timeline | `5b486a5e-0ce7-46d7-a159-d84c77f3d1fd` | `https://nitdanigeria.sharepoint.com/sites/NEDMS` |
| Portal Upload Tickets | `d777f3cd-0696-426e-8096-ffc860e7c0d4` | `https://nitdanigeria.sharepoint.com/sites/NEDMS` |
| Portal Rate Limits | `d6b97198-489c-4bd7-8647-1133c55efdf9` | `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre` |
| Portal OTP Codes | `3f85213c-1fdc-4be0-8c0c-e28aa77fbe56` | `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre` |
| Portal Verification Proofs | `f5c9698e-4b6c-4ec7-97ee-dc540efab8a9` | `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre` |
| Portal Support Cases | `b984645b-8e3a-457f-a305-b95650fd3f23` | `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre` |
| Portal Sequence Counters | `d95409a4-2b48-4d34-9f60-da5d27db862d` | `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre` |
| Portal Audit Events | `f59026cc-9fd7-4322-b681-73c599b852c6` | `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre` |
| Portal Flow Telemetry | `726c210d-09d5-45d9-952d-7a506b644b13` | `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre` |
| Portal Outbox Receipts | `88a81ca1-319a-45f5-8409-f91a24538ffa` | `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre` |
| DGO_AccessScopes | `f2ffd2fa-901e-4f28-8f28-957da0fe05e4` | `https://nitdanigeria.sharepoint.com/sites/DGO_ECM_GOVERNANCE` |

### 1.2 Portal list columns — internal names

These are the internal names the flows write. SharePoint internal names are not display names; do
not substitute a display name for one of these.

| List | Columns |
|---|---|
| **Portal Registry** | `ReferenceId`, `SenderEmail`, `Status`, `Subject`, `Category`, `CorrespondenceType`, `Channel`, `SenderName`, `SenderPhone`, `SenderOrganisation`, `SenderOrganisationType`, `EventDate`, `Description`, `AttachmentCount`, `SubmittedAtUtc`, `UpdatedAtUtc`, `AcknowledgedAtUtc`, `ClosedAtUtc`, `StatusLabel`, `ActionRequired`, `VerifiedSubmission`, `SourceIp`, `LocalId` |
| **Portal Attachments** | `SubmissionRef`, `DeclaredName`, `StoredName`, `DeclaredSizeBytes`, `DeclaredSha256`, `AttachmentLink`, `CreatedAtUtc`, `Status` |
| **Portal Status Timeline** | `SubmissionRef`, `AtUtc`, `Status`, `Label`, `Actor`, `Note` |
| **Portal Upload Tickets** | `SubmissionRef`, `DeclaredName`, `StoredName`, `DeclaredSizeBytes`, `DeclaredSha256`, `ExpiresAtUtc`, `CreatedAtUtc`, `Redeemed`, `Status` |
| **Portal Rate Limits** | `WindowStartUtc`, `UpdatedAtUtc`, `RequestCount` (bucket key is in `Title`) |
| **Portal OTP Codes** | `OTP_Code`, `Expires_At`, `Email`, `Attempts`, `Consumed`, `SourceIp`, `CreatedAtUtc` |
| **Portal Verification Proofs** | `Email`, `Purpose`, `ExpiresAtUtc`, `CreatedAtUtc`, `Consumed` (proof value is in `Title`) |
| **Portal Support Cases** | `Name`, `Email`, `Topic`, `AboutReference`, `Message`, `Status`, `SubmittedAtUtc`, `SourceIp` (case reference is in `Title`) |
| **Portal Sequence Counters** | `CurrentSequence`, `LastIssuedAt`, `LastReferenceId`, `LockToken`, `ModifiedByFlowRun`, `Prefix`, `Year` |
| **Portal Audit Events** | `Flow`, `EventType`, `AtUtc`, `Reference`, `SourceIp`, `Detail` |
| **Portal Flow Telemetry** | `Flow`, `RunId`, `StartedAtUtc`, `CompletedAtUtc`, `Outcome`, `DurationMs`, `ErrorMessage` |
| **Portal Outbox Receipts** | `MessageType`, `RecipientEmail`, `Reference`, `SentAtUtc`, `Status`, `Attempts`, `LastError` |

### 1.3 Internal lists — eleven, all on `DGO_ECM_GOVERNANCE` or the activity-tracking site

The tenant carries **34** lists whose title begins `DGO_`, across two sites, with `_2` and `_02`
duplicates. Only the eleven below are `adopted: true`. Targeting a duplicate writes to a list
nothing reads.

| List | GUID | Site |
|---|---|---|
| Global Tracking Queue | `ee82725a-c408-45e2-a8e8-facf7a092047` | `https://nitdanigeria.sharepoint.com/sites/NITDADGO-EAAACTIVITYTRACKING` |
| DGO DIGITAL OPS | `1f1cb303-3fd2-43c8-8f24-c409b6c2fde3` | `https://nitdanigeria.sharepoint.com/sites/NITDADGO-EAAACTIVITYTRACKING` |
| Task_Comments | `1932d687-e77a-4929-9047-a1f544c68a0b` | `https://nitdanigeria.sharepoint.com/sites/NITDADGO-EAAACTIVITYTRACKING` |
| Organizational_Categories_Matrix | `f64c8b65-c921-46e9-8814-a8cef61f6016` | `https://nitdanigeria.sharepoint.com/sites/NITDADGO-EAAACTIVITYTRACKING` |
| Organizaitonal_Departments_Information | `8aab9c4e-001f-4e32-862c-8a50e750f04e` | `https://nitdanigeria.sharepoint.com/sites/NITDADGO-EAAACTIVITYTRACKING` |
| OTP_Transactions | `9421d473-8906-43b7-a41f-a213046683c1` | `https://nitdanigeria.sharepoint.com/sites/NITDADGO-EAAACTIVITYTRACKING` |
| DGO_UserDirectory | `3d591f5b-3f2f-409c-983a-a77b5c174834` | `https://nitdanigeria.sharepoint.com/sites/DGO_ECM_GOVERNANCE` |
| DGO_RoleCatalogue | `f675598b-271d-4200-8d75-2597aad4057f` | `https://nitdanigeria.sharepoint.com/sites/DGO_ECM_GOVERNANCE` |
| DGO_AuditLog | `be0c7af1-b21d-4efe-8c30-53fc55598d95` | `https://nitdanigeria.sharepoint.com/sites/DGO_ECM_GOVERNANCE` |
| DGO_UserRoleHistory | `9fe1872f-3ae0-4b5f-96fc-5d3331c1d07c` | `https://nitdanigeria.sharepoint.com/sites/DGO_ECM_GOVERNANCE` |
| NITDA_Central_Registry | `f553959f-d55b-4591-aa87-d61fb6f9eda9` | `https://nitdanigeria.sharepoint.com/sites/NEDMS` |

> **Known defect in a related file.** `sharepoint-provisioning-spec.json` gives `TargetSite` as
> `NITDADGO-EAAACTIVITYTRACKING` for all ten governance lists. The adopted copies of
> `DGO_UserDirectory`, `DGO_RoleCatalogue`, `DGO_AuditLog` and `DGO_UserRoleHistory` are on
> `DGO_ECM_GOVERNANCE`. Provisioning from that spec targets the dead duplicates. Use the table above.

### 1.4 Internal list columns

| List | Columns |
|---|---|
| **Global Tracking Queue** (32) | `Acknowledge_x0020_Task`, `AcknowledgedBy`, `Acknowledgement_x0020_Due_x0020_`, `ActivityTrackingID`, `AssgnedTpUserDSU`, `Assigned`, `AssignedBy`, `AssignedTo`, `AssignedToUserTitle`, `AttachmentLink`, `Classification`, `Comments`, `Description`, `DraftResponse`, `DueDate`, `GDSUROUT`, `GTQGrouping`, `HDSUTitltetxt`, `LinktoDoc`, `OData__x0033_rdAssigned`, `ParentTask`, `Priority`, `Progress`, `RefID`, `RefIDD`, `RefIDDN`, `Reference_ID`, `RoutedToDSU`, `StartDate`, `TaskType`, `TaskTypeChoice`, `Title` |
| **DGO DIGITAL OPS** (17) | `AppFlter`, `Assigned`, `AssignedTo`, `AssignmentStatus`, `BodyExtract`, `CC_x0027_dTo`, `Category0`, `Marked_Item`, `OverallStatus`, `RefIDD`, `RoutedToDSU`, `RoutedToHDSUTitle`, `Routed_x0020_To`, `StartDate`, `Status`, `TextExtraxt`, `Title` |
| **DGO_UserDirectory** (14) | `AccessScope`, `Department`, `Directorate`, `DisabledReason`, `Email`, `FullName`, `JobTitle`, `Persona`, `Phone`, `PilotCohort`, `Role`, `Status`, `Title`, `UserId` |
| **DGO_RoleCatalogue** (10) | `Active`, `AllowedRoutesJson`, `CanAssignRoles`, `CanManageSettings`, `CanViewAudit`, `PermissionsJson`, `Persona`, `RoleId`, `Title`, `Version` |
| **OTP_Transactions** (4) | `Expires_At`, `Is_Verified`, `OTP_Code`, `Title` |
| **Task_Comments** (4) | `Created`, `Description`, `RefIDD`, `Title` |
| **Organizational_Categories_Matrix** (6) | `Category`, `DSU_KEY`, `Priority`, `Subcategory`, `Timeline`, `Title` |
| **Organizaitonal_Departments_Information** (6) | `DSU_Email`, `DSU_HeadEmail`, `DSU_HeadPersonalEmail`, `DSU_HeadTitle`, `DSU_KEY`, `Title` |
| **DGO_AuditLog** (1) | `Title` |
| **DGO_UserRoleHistory** (1) | `Title` |
| **NITDA_Central_Registry** (1) | `Title` |

> **`Global Tracking Queue` has no `Status` column.** `core/domain.js` resolves a task's status from
> `Progress`. A status change on a task writes `Progress`. A status change on a *reference* writes
> `DGO DIGITAL OPS/Status`. These are different lists and different columns; they are not
> interchangeable.

### 1.5 Rate limits, as built

A fixed 60-minute window per endpoint per source IP. The bucket key is written to
`Portal Rate Limits/Title` as `<ENDPOINT>_IP:<X-Forwarded-For>`. A caller with no `X-Forwarded-For`
buckets as `unknown`, which throttles harder, never softer.

| Endpoint | Requests per hour per IP | Bucket key prefix |
|---|---:|---|
| SUBMISSION | 20 | `SUBMISSION_IP:` |
| UPLOAD | 60 | `UPLOAD_IP:` |
| SUPPORT | 10 | `SUPPORT_IP:` |
| VERIFY | 5 | `VERIFY_IP:` |
| VERIFY_CONFIRM | 5 | `VERIFY_CONFIRM_IP:` |
| STATUS | 30 | `STATUS_IP:` |
| WRITEBACK | 20 | `WRITEBACK_IP:` |

A refusal is `429` **through the standard response path**, not an early terminate — the refusal is
recorded in `Portal Flow Telemetry` like any other outcome.

**This is a fixed window, not a sliding one (D8).** A caller can spend its allowance at the end of
one window and again at the start of the next. This is an accepted trade-off, recorded, and is not
a defect to raise.

### 1.6 Endpoint contracts

The portal posts a **flat** JSON body and reads a **flat** JSON response. There is no envelope in
either direction on the portal side.

#### SUBMISSION — `POST`, JSON

Register a correspondence, mint its reference, issue one upload ticket per declared attachment.

| Request field | Type | Required | Note |
|---|---|---|---|
| `localId` | string | yes | Client correlation id. Lets a retry be recognised as the same submission. |
| `channel` | string | yes | |
| `correspondenceType` | string | yes | |
| `subject` | string | yes | |
| `category` | string | yes | One of the eight correspondence types. A value outside the set must be rejected. |
| `sender.name` | string | yes | |
| `sender.organisation` | string | no | |
| `sender.organisationType` | string | no | |
| `senderEmail` | string | yes | Stored lowercased and trimmed. STATUS matches on it. |
| `senderPhone` | string | no | |
| `eventDate` | string | no | Empty string unless the correspondence type carries one. |
| `description` | string | yes | |
| `submittedAt` | iso8601 | yes | |
| `attachments[]` | array | no | Count only on the registry row; each element becomes a ticket. |
| `attachments[].name` | string | yes | |
| `attachments[].size` | number | yes | |
| `attachments[].sha256` | string | yes | Declared so UPLOAD can verify against it. |
| `verification` | string | no | The single-use proof from VERIFY_CONFIRM, when the wizard holds one. |

| Response field | Type | Required |
|---|---|---|
| `referenceId` | string | **yes** — without it the citizen cannot track the submission |
| `uploads[]` | array | when attachments were declared. **An empty array when attachments were declared means the attachments are silently never sent.** |
| `uploads[].ticket` | string | yes |
| `uploads[].name` | string | yes |
| `error` | string | on 403, value `verification_required` |

| Status | Meaning |
|---|---|
| `200` | accepted |
| `403` + `error=verification_required` | the wizard asks for a code |
| other 4xx/5xx | queued for retry by the client |

#### UPLOAD — `PUT`, raw bytes

Redeem one single-use ticket with the raw file.

| Request | Type | Required | Note |
|---|---|---|---|
| `Content-Type` | header | yes | |
| `X-Upload-Ticket` | header | yes | The ticket from SUBMISSION. Single use — the flow sets `Redeemed` and refuses a second attempt. |
| body | bytes | yes | **Raw, never base64.** |

| Response field | Type | Required | Note |
|---|---|---|---|
| `stored` | boolean | yes | **Must be truthful.** `200 {stored:false}` means the bytes were not filed. |
| `attachmentLink` | string | when stored | |
| `reason` | string | when not stored | `core.js upload()` also accepts `error` as a fallback key; `reason` is the specified name. |

#### SUPPORT — `POST`, JSON

Raise a helpdesk case. Never enters the registry.

| Request field | Type | Required | Note |
|---|---|---|---|
| `name` | string | yes | |
| `email` | string | yes | |
| `topic` | string | yes | The topic's label, not an internal key. |
| `aboutReference` | string | no | A tracking id, **unverified**. Empty string when blank. |
| `message` | string | yes | |

| Response field | Type | Required | Note |
|---|---|---|---|
| `caseRef` | string | yes | **The reference the citizen is given must be this one.** A locally generated reference exists in no system of record. |

#### VERIFY — `POST`, JSON

Mail a one-time code to an address.

| Request field | Type | Required | Note |
|---|---|---|---|
| `email` | string | yes | Stored lowercased and trimmed. VERIFY_CONFIRM matches on it. |

| Response field | Type | Required | Note |
|---|---|---|---|
| `sent` | boolean | yes | **Must be present and truthful.** The client tests `=== true`, so an absent field reads as failure. |
| `expiresAt` | iso8601 | yes | |

#### VERIFY_CONFIRM — `POST`, JSON

Exchange a code for a single-use proof.

| Request field | Type | Required | Note |
|---|---|---|---|
| `email` | string | yes | Must match the address VERIFY was called with. |
| `code` | string | yes | Six digits. **The flow compares it to the stored code** — the lookup filter is not a comparison. |

| Response field | Type | Required | Note |
|---|---|---|---|
| `verification` | string | yes | **The proof. Absent means a correct code was refused.** |
| `expiresAt` | iso8601 | yes | |

> **How each half is selected.** Neither call sends an `action` field. The flow routes on the
> presence of `code`: a request carrying one is a verify, a request without one is a generate. An
> explicit `action` still wins when a caller supplies one.

#### STATUS — `POST`, JSON

Read one submission back, in the public projection only.

| Request field | Type | Required | Note |
|---|---|---|---|
| `referenceId` | string | yes | Trimmed and uppercased before matching. |
| `email` | string | when no proof is held | **Structurally absent** from the body when a proof is held — omitted, not blank. |
| `verification` | string | when a proof is held | Redeemed and consumed by this call. |

Response projection — this is a **closed allow-list**:

| Field | Type | Source column |
|---|---|---|
| `record.referenceId` | string | `Portal Registry/ReferenceId` |
| `record.status` | string | `Portal Registry/Status` |
| `record.statusLabel` | string | `Portal Registry/StatusLabel` |
| `record.category` | string | `Portal Registry/Category` |
| `record.subject` | string | `Portal Registry/Subject` |
| `record.receivedAt` | iso8601 | `Portal Registry/SubmittedAtUtc` |
| `record.acknowledgedAt` | iso8601 | `Portal Registry/AcknowledgedAtUtc` |
| `record.updatedAt` | iso8601 | `Portal Registry/UpdatedAtUtc` |
| `record.closedAt` | iso8601 | `Portal Registry/ClosedAtUtc` |
| `record.actionRequired` | boolean | `Portal Registry/ActionRequired` |
| `record.timeline[].at` | iso8601 | `Portal Status Timeline/AtUtc` |
| `record.timeline[].status` | string | `Portal Status Timeline/Status` |
| `record.timeline[].label` | string | `Portal Status Timeline/Label` |
| `record.timeline[].note` | string | `Portal Status Timeline/Note` |

**Excluded from the projection, deliberately:** `description`, attachments, assigned officer,
handling unit, internal notes, `SenderName`, `SenderPhone`, `SenderOrganisation` and every other
sender field, `SourceIp`, `LocalId`, `VerifiedSubmission`.

| Status | Meaning |
|---|---|
| `200` | record returned |
| `403` + `error=verification_required` | the email check is demanded |
| `404` | **byte-identical denial** — the same response whether the reference does not exist or is not yours |
| `429` | rate limited |

#### WRITEBACK — `POST`, JSON

A verified citizen responds, adds a note, or withdraws. Appends to the timeline; **only withdrawal
changes status**.

| Request field | Type | Required | Note |
|---|---|---|---|
| `referenceId` | string | yes | |
| `verification` | string | yes | A proof identifies the submitter. **There is no other authentication.** |
| `action` | string | yes | One of `respond`, `note`, `withdraw` |
| `body` | string | yes | |

| Response field | Type | Required | Note |
|---|---|---|---|
| `ok` | boolean | yes | |
| `queued` | boolean | no | The flow's own signal that it accepted the write but has not finished applying it. **Not** a client-side retry queue. |
| `reason` | string | when not ok | |

| Status | Meaning |
|---|---|
| `200` | accepted |
| `401`/`403` | the proof is missing, invalid, expired, or already consumed |
| `404` | byte-identical denial, matching STATUS's INT-006 |
| `429` | rate limited |

> **WRITEBACK is never queued in the portal's outbox.** The proof is single-use, so a queued retry
> would carry one already spent. A failed call is reported to the citizen immediately and a fresh
> attempt mints a fresh proof.

### 1.7 The internal platform's response shape is different

The internal flows answer the **envelope**, because `core/contracts.js` `assertEnvelope()` returns
`response.data ?? response`:

```json
{
  "ok": true,
  "status": { "http": 200, "code": "OK", "message": "Success" },
  "request": { "requestId": "…", "trackingId": "", "action": "fetchAll", "operation": "read", "source": "portal" },
  "timing": { "receivedAtUtc": "…", "completedAtUtc": "…", "durationMs": 0 },
  "data": { },
  "errors": [],
  "meta": { "ts": "…", "runId": "…", "flowName": "…", "contractVersion": "2026-08-21.1" }
}
```

The internal client also **nests its request**:

```json
{ "action": "<contract action>", "payload": { }, "userEmail": "…", "requestId": "…", "timestamp": "…" }
```

Only `action`, `userEmail`, `requestId` and `timestamp` are top-level, and `action` is the
endpoint's fixed contract action — `dynamicGlobalAction`, `otpGenerate`, `fetchAll` — never the
caller's own discriminator. One call site differs: `modules/single-assignment.js` sends
`flatPayload: true` and puts the caller's fields alongside the envelope keys.

**Do not normalise the two response shapes to one.** `npm run test:responsecontract` checks each
package against its own client and fails if either is changed to match the other.

---

## 2 · Phase 0 — Repository access and the dry run

### 2.1 Grant write access and land the pending commit  *(open item 1)*

**Owner:** a `dgoeaa` GitHub organisation owner. Nobody else can do this.

Commit `ba7c94a` carries the `Portal_Verify` export that proves visit 1 landed. Pushing it was
refused with HTTP 403: the account `kanihamza` has no write access to `dgoeaa/ECM_DOCS_DEV`.

This is not cosmetic. Every repository-side measurement under-reports by **eight operations** until
it lands, so any later comparison starts from a wrong baseline.

**The steps are §0.1 of [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md)**, which is the
only document that carries them. Everything here is the reasoning behind them.

**Alternative if access will not be granted.** The single file
`docs/reference/flow-contracts/deployed/Portal_Verify__86897b2f-9770-4efa-8486-2642f24bb947__full_definition.json`
is what matters. Anyone with write access can commit that file directly. The commit itself is not
required — only the file.

**Verification — this is the acceptance test**

```bash
npm run wiring
```

Must read **8/59**, not 0/59.

### 2.2 Prove tenant connectivity with the dry run  *(open item 2)*

**Owner:** operator.

`update-flow-definition.ps1` has never run against the tenant. The entire patch track depends on it,
and although the paste track supersedes it for these fourteen flows, this run is the cheapest
possible proof that your credentials, environment id and flow ids are all correct — before you spend
an hour pasting.

**It sends nothing.** Without `-Apply` the script reads a flow definition and prints what it found.

**The steps are §0.2 of [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md)**, which is the
only document that carries them. Everything here is the reasoning behind them.

**Verification**

The script prints the flow's display name and its action count without error. If it prints an
authentication failure, stop and resolve that before Phase 1 — every later phase needs the same
credentials.

---

## 3 · Phase 1 — SharePoint preparation

### 3.1 Index three hot-path columns  *(open item 23 — highest risk in this guide)*

**Owner:** operator. Roughly ten minutes. Do it before any traffic.

Three lists are queried on `Title` with an equality filter on the hot path:

| List | Filtered on | Frequency | Growth |
|---|---|---|---|
| Portal Rate Limits | `Title` | **every request to every endpoint** | one row per source IP per endpoint |
| Portal Verification Proofs | `Title` | every proof presentation | one row per verification |
| Portal Support Cases | `Title` | every case, for collision detection | one row per case |

**Why this is urgent and not an optimisation.** SharePoint's 5,000-item list view threshold makes an
unindexed equality filter **fail**, not slow. The query returns an error, the flow's catch scope
fires, and the endpoint answers `500`. `Portal Rate Limits` is read on every request to every
endpoint, so the first list to cross the threshold **stops every endpoint at once**. Adding the
index after the list has crossed 5,000 items is materially harder — SharePoint may refuse to index a
list already over the threshold, requiring items to be deleted first.

`Portal Registry/ReferenceId` is already indexed, which shows the estate knows the pattern.

**Procedure — repeat for each of the three lists**

1. Open the list in SharePoint:
   - Portal Rate Limits — `https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre`
   - Portal Verification Proofs — same site
   - Portal Support Cases — same site
2. **Settings** (gear) → **List settings**.
3. Under **Columns**, click **Indexed columns**.
4. **Create a new index**.
5. **Primary column for this index** → `Title`.
6. **Create**.

**Verification**

Return to **Indexed columns** on each list. `Title` must be listed. Record the three confirmations in
§13.

### 3.2 Seed the role catalogue  *(Wave 0 — required before any internal flow works)*

**Owner:** operator.

Every internal package resolves its caller through the identity gate:

1. `Compose_<tag>_Caller` — the address from the request body.
2. `Get_<tag>_Directory_User` — `DGO_UserDirectory` filtered on `Email` **and** `Status eq 'active'`.
3. `Compose_<tag>_Role` — the `Role` column off that row.
4. `Get_<tag>_Role_Permissions` — `DGO_RoleCatalogue` on `RoleId`, `Active eq 1`.
5. `Compose_<tag>_Permitted` — the permission is in `PermissionsJson`, or `AllowedRoutesJson` is `["*"]`.

**With `DGO_RoleCatalogue` and `DGO_UserDirectory` empty, every internal endpoint answers `401`.**
This is correct behaviour, not a fault — but it means the internal platform does nothing until both
lists are populated.

**The steps are §0.3 of [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md)**, which is the
only document that carries them. Everything here is the reasoning behind them.

### 3.3 Populate the user directory

**Owner:** operator.

One row per officer in `DGO_UserDirectory` (`3d591f5b-3f2f-409c-983a-a77b5c174834`, on
`DGO_ECM_GOVERNANCE`).

| Column | Required | Note |
|---|---|---|
| `Email` | **yes** | The gate filters on this. Lowercase and trimmed. |
| `Status` | **yes** | Must be exactly `active` — the gate filters `Status eq 'active'`. Any other value denies the caller. |
| `Role` | **yes** | Must match a `RoleId` in `DGO_RoleCatalogue`. A role with no matching catalogue row denies every permission. |
| `FullName` | recommended | Read by `normalizeUser` |
| `Title` | recommended | |
| `Department`, `Directorate`, `JobTitle`, `Phone`, `Persona`, `AccessScope`, `UserId`, `PilotCohort` | optional | |
| `DisabledReason` | optional | Set when `Status` is not `active` |

**Verification**

Populate one row for yourself first, then verify the whole chain at the end of Phase 4 (§6.3) rather
than now — the flow that reads it is not pasted yet.

> **Until this is done the platform fails open.** `core/state.js` seeds a bootstrap administrator, so
> every browser is a System Administrator. The identity gate in the internal packages is what closes
> that, and it only closes it once these two lists have rows.

---

## 4 · Phase 2 — Decisions taken before any paste

Both of these are set **inside** each flow. Taking them after pasting means opening all fourteen
flows a second time.

### 4.1 Decide the portal's CORS origin  *(open item 8)*

**Owner:** operator. **Decision required — this guide cannot supply the value.**

Every portal package ships `Access-Control-Allow-Origin: https://your-host` in its `Response_*`
action. Until that is the portal's real origin, **a browser refuses every response** — the request
succeeds, the flow runs, the row is written, and the page sees a network error. This is the single
most likely cause of "nothing works" after a correct deployment.

**What to decide:** the exact scheme and host the static portal is served from, with no trailing
slash and no path. Examples of the correct form: `https://portal.nitda.gov.ng`,
`https://nitdanigeria.github.io`. If the portal is served from more than one origin, you must decide
one — the header takes a single origin, and `*` must not be used because these endpoints are
credentialed by their signed URL.

**Record the decision in §13 before pasting.** Every one of the seven portal flows uses the same
value.

### 4.2 Choose the sending mailbox  *(open item 24)*

**Owner:** operator. **Decision required — this guide cannot supply the value.**

Three actions send mail, and all three ship `REPLACE_WITH_OFFICE365_CONNECTION_ID`:

| Action | Package | Sends |
|---|---|---|
| `Send_Otp_Email` | `Portal_VERIFY_ECM_DOCS` **and** `Portal_VERIFY_CONFIRM_ECM_DOCS` | The citizen's one-time code |
| `Send_Support_Acknowledgement` | `Portal_SUPPORT_ECM_DOCS` | The support case acknowledgement |
| `Send_Otp_Mail` | `DGO_OTP` | The officer's one-time code |

Every SharePoint action ships already bound to `3f1943c5955a4cb8b301e8f22f2b590d` — the one
SharePoint connection named in the tenant's own flow records. Only these three mail actions do not,
because the tenant's records carry **three** Office 365 Outlook connections
(`0e5c949a72f64e8db50ec220815a2ff3`, `c0b9e7a5b0854c39a435fd8ce92f48ad`,
`shared-office365-1fb94487-c973-4c56-a1f4-1ac16768a7a7`) and say nothing about which sends what.

**What to decide:** the mailbox whose address citizens and officers see as the sender of a one-time
code. This is a service-identity decision, not a technical one — the address appears in every
verification mail the public receives.

**Record the decision in §13.** You will pick this connection on each of the three actions at paste
time.

> A connection id names a resource in the environment. The credential lives in the connection
> itself, so nothing in this repository or this guide carries a secret.

---

## 5 · Phase 3 — Paste the seven portal flows

### 5.1 The paste procedure — identical for every flow

1. Open the flow in **Power Automate → Edit**. Confirm the designer is the **modern** one. The
   package format is rejected by the classic designer.
2. Select every action **below the trigger** and delete it.
   **The trigger is kept.** Its URL is already published to the portal, and a new trigger is a new
   URL — which would invalidate the configuration in §7 and any URL already in circulation.
3. Click **+ → Paste** (or `Ctrl+V` on the canvas).
4. Paste the entire contents of the package file.
5. **Check the connections.** Every SharePoint action arrives already wired. Nothing to re-pick
   unless the designer flags an action — which means the pasting account cannot use that connection.
   On the three mail actions in §4.2, pick the connection you chose there.
6. **Do not look for a CORS origin to edit — there is none.** This step used to say to find
   `Access-Control-Allow-Origin` in the `Response_*` action and replace `https://your-host`.
   Corrected 2026-08-31: that string appears in **no** generated package. The origin stopped
   being a literal when it moved into the estate — each response reads the rows of
   `Flow Configuration` whose `Title` begins `ALLOWED_ORIGIN` and echoes the caller's own
   `Origin` only when it is listed. An operator hunting for `your-host` finds nothing and has no
   way to tell whether the package is wrong or the instruction is. Listing the origin is open
   item 8 and is done once, in the list, not once per flow.
7. **Save.**

### 5.2 Order, and why

> **The flow ids in this table were corrected on 2026-08-31.** Three of them named a flow that
> exists and is *not* the one the portal calls. The estate holds more than one flow for
> SUBMISSION, UPLOAD and STATUS, and the ids below were written from the 2026-08-19 capture,
> before the `CG_*` renames. The run records of 2026-08-27 say which flow actually serves each
> endpoint, and where the two disagree the run records win: an export proves a flow exists, never
> that it is the one being called. Full derivation in
> [`evidence/2026-08-31-portal-paste-target-resolution.json`](../deployment/sharepoint/evidence/2026-08-31-portal-paste-target-resolution.json).
>
> **Pasting on the old id would have succeeded and changed nothing** — a correct body in a flow
> nothing calls, with every repository check still green.

| # | Package | Target flow (live name) | Flow id | Why here |
|---|---|---|---|---|
| 1 | `Portal_VERIFY_ECM_DOCS` | `CG_Verification_Endpoint` | `86897b2f-9770-4efa-8486-2642f24bb947` | Nothing that consumes a proof works until the pair does |
| 2 | `Portal_VERIFY_CONFIRM_ECM_DOCS` | `CG_Verification_Confirmation_Endpoint` | ⚠️ `5e13db77-c1e1-4ed4-b109-cb5d9d247b49` — **confirm in the tenant first** | The other half of the pair |
| 3 | `Portal_SUBMISSION_ECM_DOCS` | `CG_Submission_Endpoint` | `de9ef13b-ae4c-42b0-9afa-20e71a180759` | Mints references and issues upload tickets |
| 4 | `Portal_UPLOAD_ECM_DOCS` | `CG_Upload_Endpoint` | `df7ddff1-9275-4f23-acf6-e169525f4e2f` | Redeems the tickets SUBMISSION issues |
| 5 | `Portal_STATUS_ECM_DOCS` | `CG_Status_Check_Endpoint` | `badb65d8-f472-407e-8975-c29d77b855d7` | Reads back what SUBMISSION wrote |
| 6 | `Portal_SUPPORT_ECM_DOCS` | `CG_Support_Endpoint` | `1b2c2e53-6c07-46a3-80b2-c43be1ef69db` | Independent of the rest |
| 7 | `Portal_WRITEBACK_ECM_DOCS` | `CG_Writeback_Endpoint` | ⚠️ `21d4bfd3-f595-46fa-81bb-c29dabc12e7a` — **confirm in the tenant first; do not create a second flow** | Needs a record to write back to and a proof to authenticate with |

**Flows that exist and must not be pasted on.** Each of these was named as a target by an earlier
revision of this table. They are still in the environment; the portal does not call them.

| Endpoint | Do not paste on | Because |
|---|---|---|
| SUBMISSION | `Portal_UBMISSION_ECM_DOCS` · `270fb295-b1de-40e2-b36d-889a61a887a0` | A second submission flow, 13 actions, exported 2026-08-19. The run records serve `de9ef13b`. |
| UPLOAD | `Portal_UPLOAD_ECM_DOCS` · `ae4b2a44-…`, `UPLOAD_ECM_DOCS_PORTAL` · `9bd6724c-…`, `Portal_Upload_HTTP` · `39d65c5b-…` | Three further upload-shaped flows. The run records serve `df7ddff1`. |
| STATUS | `Portal_ECM_DOCS_STATUS` · `e21e7b9f-58c3-45be-bd47-6754ce6a895f` | 13 actions against the live flow's 3 — the better-built of the two, and the one nothing calls. |

**Two ids still need a tenant lookup** (rows 2 and 7). Neither `5e13db77` nor `21d4bfd3` has an
export in `docs/reference/flow-contracts/deployed/`, so nothing here can say whether either is a
rename of a flow already captured or a flow this repository has never seen. Export both before
pasting.

The `CG_*` names are renames, not new flows — proven by one id, `df7ddff1`, appearing in the
export set twice: as `ECM_DOCS_INTAKE` on 2026-08-19 and as `CG_Upload_Endpoint` on 2026-08-24.

All files are in `docs/deployment/sharepoint/flows/designer-paste/`, with the suffix
`.designer-paste.json`.

### 5.3 Flow 1 and 2 — `CG_Verification_Endpoint` and `CG_Verification_Confirmation_Endpoint`

> Formerly `Portal_Verify` (`86897b2f-…`) and `Portal_Verify_Confirm` (`3b69aa71-…`). The first is
> a rename in place and its id is unchanged. **The second is not confirmed** — the run records
> serve `5e13db77-…`, which has no export here; see §5.2.

**70 actions each. The two package files are identical apart from the node id.** One file per target
flow, so the set is complete by inspection rather than by reading a note.

Each flow keeps its own trigger URL. The portal calls them separately and treats one configured
without the other as verification being unavailable.

**What is deleted:** everything below the trigger. The deployed bodies read `identifier` and
`otp_code`, write to `OTP_Transactions` on the internal activity-tracking site, and omit `sent`.

**What changes materially**

| Was | Now |
|---|---|
| `identifier` | `email` — the field the portal sends |
| `otp_code` | `code` — the field the portal sends |
| Response omitted `sent` | **`sent` is present and truthful**, from `actions('Send_Otp_Email')?['status']` |
| `OTP_Transactions` on the internal site | `Portal OTP Codes` on GDDC — closes the boundary crossing where a public endpoint wrote into the internal sign-in store |
| No outbox receipt | One `Portal Outbox Receipts` row per code sent, recording that a code was sent and **never the code** |
| Routed on `action`, which the portal never sends | Routes on the presence of `code` |

**Confirm after pasting both:**

- A `POST` of `{"email":"<a real address>"}` to the `Portal_Verify` URL returns `200` with
  `{"sent":true,"expiresAt":"…"}` and a code arrives in that mailbox.
- A row appears in `Portal OTP Codes` with `Email` set, `Consumed` false, `Attempts` 0.
- A row appears in `Portal Outbox Receipts` with `MessageType` naming the verification mail and
  **no code in any column**.
- A `POST` of `{"email":"<same address>","code":"<the code>"}` to the `Portal_Verify_Confirm` URL
  returns `200` with `{"verification":"…","expiresAt":"…"}`.
- A row appears in `Portal Verification Proofs` with `Consumed` false.
- A wrong code returns `401` and increments `Attempts` on the `Portal OTP Codes` row.
- Five wrong codes consume the challenge — `Consumed` becomes true and further attempts fail.
- A sixth verification request from the same IP within the hour returns `429`.

> **Do not claim the code comparison is constant-time.** Workflow Definition Language has no bitwise
> operators, so `equals()` cannot be made constant-time. The protection is the lifecycle: five-minute
> expiry, single use, five-attempt cap, then the challenge is consumed. This is recorded and accepted
> (open item 19, closed as not-achievable). Equally, **do not claim codes are hashed** — they are
> stored in plaintext for the same reason (SC-003).

### 5.4 Flow 3 — `CG_Submission_Endpoint`

**74 actions.** Target id `de9ef13b-ae4c-42b0-9afa-20e71a180759`, exported as
`SUBMISSION_ECM_DOCS_PORTAL`.

> **Not `Portal_UBMISSION_ECM_DOCS`.** That flow (`270fb295-…`, misspelling and all) still exists
> and is not the one the portal calls — see §5.2. The misspelling is why the wrong id looked
> right: a name that odd reads as the one true target.

**What is deleted:** everything below the trigger. The deployed body composes a filename, decodes
base64 and creates a file in a document library — correct for a document deposit, wrong for a
registry write.

**What the package does**

- Rate-limits at 20/hour/IP on `SUBMISSION_IP:`.
- Requires a verification proof when one is configured to be required; answers `403` with
  `error: verification_required` when absent.
- **Consumes the proof only after the record is written**, so a failed write does not burn it.
- Mints the reference through `Portal Sequence Counters` with a lock token, so two concurrent
  submissions cannot take the same number.
- Writes one `Portal Registry` row and one `Portal Status Timeline` row.
- Issues **one `Portal Upload Tickets` row per declared attachment** and returns them as `uploads[]`.

**Confirm after pasting:**

- A submission with no attachments returns `200` with a `referenceId` and creates one `Portal
  Registry` row and one `Portal Status Timeline` row.
- A submission declaring two attachments returns `uploads[]` with **two** elements, each carrying
  `ticket` and `name`, and creates two `Portal Upload Tickets` rows.
- `Portal Sequence Counters/CurrentSequence` has advanced by exactly one per submission.
- The `Portal Registry` row's `SenderEmail` is lowercased and trimmed.

### 5.5 Flow 4 — `CG_Upload_Endpoint`

**52 actions.** Target id `df7ddff1-9275-4f23-acf6-e169525f4e2f`, exported first as
`ECM_DOCS_INTAKE` and then, after the rename and rebuild, as `CG_Upload_Endpoint`.

> **Not `Portal_UPLOAD_ECM_DOCS`.** Three further upload-shaped flows exist and none of them is
> the target — see §5.2.

**What the package does**

- Rate-limits at 60/hour/IP on `UPLOAD_IP:`.
- Reads the ticket from the `X-Upload-Ticket` header, looks it up in `Portal Upload Tickets`, and
  refuses a ticket that is missing, unknown or already `Redeemed`.
- Compares `DeclaredSizeBytes` against `Content-Length` and answers `422` on a mismatch.
- Writes the raw bytes to the document library and creates the `Portal Attachments` row.
- Sets `Redeemed` on the ticket **after** the file is filed.
- Answers `stored: true` only when the file was actually created.

**Confirm after pasting:**

- Redeeming a valid ticket with the matching bytes returns `200 {"stored":true,"attachmentLink":"…"}`
  and creates a row in `Portal Attachments`.
- The same ticket a second time returns `stored:false` with a `reason`, and creates no second row.
- A body whose length differs from `DeclaredSizeBytes` returns `422` and files nothing.
- An absent or unknown `X-Upload-Ticket` returns `stored:false` with a `reason`.

> **The SHA-256 digest is not verified.** `DeclaredSha256` is stored on the ticket and on the
> attachment row, but nothing compares it to the received bytes. See §10.2. **No document, screen or
> report may state that the digest is verified** until that is built.

### 5.6 Flow 5 — `CG_Status_Check_Endpoint`

**59 actions.** Target id `badb65d8-f472-407e-8975-c29d77b855d7`, exported as
`Portal_Status_Enquiry`.

> **Not `Portal_ECM_DOCS_STATUS`.** That flow has 13 actions to this one's 3, so it looks far more
> like the real endpoint — and the portal does not call it. See §5.2.

**What is deleted:** everything below the trigger, including `Scope_Process_Submission` (this flow
is a clone of the submission flow), the `Get_items_Tasks` read against `Global Tracking Queue` — a
boundary violation, an anonymous public endpoint reading the internal task register — and the
bolted-on `Switch` with `Case_load` / `Case_submit`.

**What the package does**

- Rate-limits at 30/hour/IP on `STATUS_IP:`.
- Reads `referenceId` and exactly one of `verification` or `email`. Both, or neither, is `400`.
- Filters `Portal Registry` on the indexed `ReferenceId` **and** the owning `SenderEmail` in one
  query, so a miss and a mismatch are the same empty result and answer the same `404`.
- When a proof is presented, the email comes from the **proof row**, never from the request body.
- Consumes the proof only after the record is found, so a mistyped reference does not burn it.
- Returns the closed allow-list projection in §1.6, with the timeline ordered by `AtUtc`.

**Confirm after pasting:**

- A correct `referenceId` + `email` pair returns `200` with a `record`.
- An unknown `referenceId` returns `404`.
- A real `referenceId` with the wrong `email` returns a `404` **materially identical** to the
  previous one — compare the two response bodies byte for byte.
- The returned `record` contains no `description`, no sender fields, no `SourceIp`, no `LocalId`,
  no `VerifiedSubmission`, no attachments.

### 5.7 Flow 6 — `CG_Support_Endpoint`

**51 actions.** Target id `1b2c2e53-6c07-46a3-80b2-c43be1ef69db`, a rename in place of
`Portal_ECM_DOCS_SUPPORT`; the id is unchanged.

**What is deleted:** everything below the trigger — same clone as STATUS, filing a document instead
of opening a case.

**What the package does**

- Rate-limits at 10/hour/IP on `SUPPORT_IP:`.
- Requires `name`, `email`, `topic`, `message`. Missing any is `400`.
- Mints `CASE-` plus six characters from `ABCDEFGHJKLMNPQRSTUVWXYZ23456789` — no `0`, `O`, `1` or
  `I`, so a citizen reading it aloud to the helpdesk hits no ambiguity — and re-rolls on a collision.
- Stores `aboutReference` exactly as supplied and **does not validate it** against the registry. It
  is an unverified hint; validating it would turn it into a claim of ownership.
- Sends the acknowledgement after the case row exists, and writes the outcome — `sent` or `failed` —
  to `Portal Outbox Receipts` either way. **A failed send does not fail the request**, because the
  case is real once the row exists and a `500` would make the citizen file a duplicate.

**Confirm after pasting:**

- A well-formed case returns `200` with `{"caseRef":"CASE-XXXXXX"}`.
- A row appears in `Portal Support Cases` with `Status = open` and `Title` equal to the returned
  `caseRef`.
- A row appears in `Portal Outbox Receipts` recording the acknowledgement outcome.

### 5.8 Flow 7 — `CG_Writeback_Endpoint`

**62 actions.**

> **Do not create a new flow before checking.** This section used to say the flow does not exist.
> The 2026-08-27 run records show `CG_Writeback_Endpoint` (`21d4bfd3-f595-46fa-81bb-c29dabc12e7a`)
> already serving WRITEBACK. That id has no export here, so this repository cannot say what it
> currently contains — but creating a second flow would mint a second trigger URL and leave the
> live one untouched.

**The steps are §0.4 of [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md)**, which is the
only document that carries them. Everything here is the reasoning behind them.

**What the package does**

- Rate-limits at 20/hour/IP on `WRITEBACK_IP:`.
- Requires `referenceId`, `verification`, `action` and `body`. `action` must be one of `respond`,
  `note`, `withdraw`; anything else is refused.
- **Checks ownership before consuming the proof** — a proof is single-use, so consuming it before
  establishing that the caller owns the reference would burn a valid proof on a denied call.
- Answers the same byte-identical `404` as STATUS when the reference is unknown or the proof does not
  own it.
- Appends a `Portal Status Timeline` row for every accepted action.
- **Only `withdraw` changes `Portal Registry/Status`.** `respond` and `note` append to the timeline
  and touch `UpdatedAtUtc` only.
- Writes one `Portal Audit Events` row on **every** call, carrying the action and the body's
  **length** — never the body itself.

**Confirm after pasting:**

- A `respond` with a valid fresh proof returns `200 {"ok":true}`, appends a `Portal Status Timeline`
  row, and leaves `Portal Registry/Status` unchanged.
- The same proof a second time returns `401` or `403` — it is consumed.
- A `withdraw` changes `Portal Registry/Status` and appends a timeline row.
- An unknown `referenceId` returns `404`; a valid reference with a proof for a different address
  returns the same `404`.
- A `Portal Audit Events` row exists for every one of the above, including the refusals, and no row
  contains the message body.

---

## 6 · Phase 4 — Paste the seven internal flows

All files are in `docs/deployment/internal/flows/designer-paste/`.

The paste procedure is identical to §5.1 with one difference: **there is no CORS origin to set on
the internal flows** unless they are called from a browser on a different origin. If the DGO runtime
is served from a different origin than the flows, set it the same way.

### 6.0-pre Run the preflight — before anything

A package pastes cleanly and then fails on the first real call for reasons the designer cannot
show you: a governance column that was never provisioned, a directory with no active row, a role
catalogue whose permissions do not carry the capability the gate tests for. Each surfaces as a
`401`, a `403` or a rejected write long after the paste, and is attributed to the wrong thing.

**This matters more than it sounds.** The 2026-08-19 provisioning run covered thirteen lists and
**not one** of `DGO_AuditLog`, `DGO_UserDirectory` or `DGO_RoleCatalogue` — the three the
authorisation gate and the audit trail depend on. Their item counts match the workbook's seed
counts exactly, which is suggestive and is not proof.

Sign in to `https://nitdanigeria.sharepoint.com`, open devtools → Console, and paste:

```
scripts/preflight-internal-flows.browser.js
```

It only ever reads. It checks all twelve lists the seven flows touch, all 51 column
requirements, the two indexes, and the three seed conditions the gate depends on — then prints
either `READY TO PASTE` or a table of what blocks it and why. The requirements are read out of
the packages themselves, so it cannot drift from what the flows actually do; `npm test` fails if
it does.

**One thing it cannot check.** A connection is a Power Automate environment resource, not a
SharePoint one. Both are bound in every package — SharePoint
`3f1943c5955a4cb8b301e8f22f2b590d` and Office 365 Outlook `c0b9e7a5b0854c39a435fd8ce92f48ad` —
and they resolve only if you are pasting into the environment those ids belong to. You will see
it immediately on the first paste: every action arrives already bound, with no connection picker
shown. If a picker appears, stop — you are in the wrong environment.

### 6.0 Install the packages; do not paste them

**The clipboard route is superseded.** It broke four flows in this tenant —
`IP_FETCH_ALL_ENDPOINT`, `IP_Single_Assignment_Endpoint`, `IP_OTP_Endpoint` and
`CG_Verification_Endpoint` — each pasted from a package whose every *Set variable* carried a
value, and each arriving with those values gone. That is not an operator error and no amount of
care avoids it; §6.0a explains the mechanism. Use the route with no paste in it:

```bash
# 1. In Power Automate:  ⋯ → Export → Package (.zip)
# 2. Install the package into the flow's own definition:
node scripts/patch-flow-package.mjs --in <exported.zip> --out <ready.zip> --install DGO_FETCH_ALL
# 3. Import ready.zip choosing UPDATE — never "Create as new", which mints a new trigger URL.
```

`--install` writes the flow's variable declarations to the top level and the package's scope
beneath them, in one definition; sets the trigger `Method = POST`; carries the connector
references across; and **refuses to write** if any variable write has lost its value, any
`runAfter` fails to resolve, or any connector host is not in the definition shape. It preserves
the flow id, so the trigger URL does not move and nothing already configured breaks.

All four broken flows were repaired this way on 2026-09-04 and re-exported clean — 0 missing,
0 different, 0 extra against their packages, every value intact.

Two things it does not do. It needs an **existing flow** to install into, so a flow being built
for the first time is created empty in the designer and exported once before its first install.
And it reads the declarations from `<FLOW>.variables.designer-paste.json`, which is why that file
still ships — you do not create them by hand for this route.

### 6.0a Why the paste route fails — and what to do if you use it anyway

#### Create the top-level variables first — before any paste

Power Automate accepts **Initialize variable** only at the top level of a workflow. A clipboard
package is a scope, so the variable declarations cannot travel inside it: pasted there they land
nested and the designer refuses to save the flow. They are shipped beside each package instead.

For each flow, open `docs/deployment/internal/flows/designer-paste/<FLOW>.variables.md` and add
every row as an *Initialize variable* action at the top of the flow, in the order listed, **before**
pasting the scope. Eight are common to all seven flows; `DGO_BULK_ASSIGNMENT` needs a ninth
(`varBulkResults`).

**Each flow has its own variables package.** Hand-typing the declarations seven times over is
sixty-odd chances to mistype a name or a type, and a mistyped one surfaces at run time as
`The variable 'name' is not defined` rather than at paste time. So each flow ships one:

```
docs/deployment/internal/flows/designer-paste/<FLOW>.variables.designer-paste.json
```

It carries **exactly the variables that flow uses** — eight for six of the seven,
nine for `DGO_BULK_ASSIGNMENT`, which alone reads `varBulkResults`. The set is derived from the
flow's own package rather than kept in a list, so it cannot drift from the flow: `npm run
test:forensic` fails if a flow uses a variable its package does not declare, or declares one the
flow never uses.

The distinction that makes this legal is between **pasting** and **saving**. The designer accepts
the paste with the declarations nested inside `Scope_Variables_<FLOW>`; what it refuses is
*saving* a definition that still has them nested. So, per flow:

1. Paste `<FLOW>.variables.designer-paste.json`.
2. Drag every *Initialize variable* action **out** of `Scope_Variables_<FLOW>` to the top level,
   keeping their order.
3. Delete the now-empty `Scope_Variables_<FLOW>` scope.
4. **Only then** paste the flow's own scope package, and save.

Saving between steps 1 and 3 is the one thing that fails, and it fails safely — the designer
refuses the save and the flow stays as it was.

**Getting the order wrong does not fail safely.** Paste the scope in step 4 before the
declarations are at the top level and the designer types each *Set variable*'s Value field
against a variable that does not resolve — so it drops the value and keeps the name. Nothing is
reported. The actions render with an empty Value box, the flow saves, and the endpoint answers
`{"ok":false,"status":{"http":500},"data":{}}` on a run where every list was read correctly,
because `varStatusCode` and `varData` were never written and still hold what they were
initialised to. *Append to array variable* is untyped and keeps its value, so `errors` still
looks right, which is what makes this hard to read from the response alone.

The same paste also anchors the scope to whatever it landed under. A package ships
`runAfter: {}`; a scope that comes back carrying `"runAfter":{"Initialize_variable_varBulkResults":…}`
was pasted into `DGO_BULK_ASSIGNMENT`, not into an empty flow of its own — and there its seven
shared response and telemetry action names collide with the ones already in that flow.

Neither is repairable in place. Delete the scope, put the declarations at the top level, paste
again. To confirm what a paste actually did, copy the scope back out of the designer into a file
and run it against the package it came from:

```bash
node scripts/diagnose-designer-paste.mjs <copied.json>          # what the designer changed
node scripts/diagnose-designer-paste.mjs <copied.json> --fix ready.json   # the package to paste again
```

It names every emptied *Set variable* with the value it should carry, says which flow the scope
was pasted into when the anchor gives that away, and lists the action names that collide there.

The action counts in the table below are the pasted scope only. They do not include these
declarations. A flow missing one fails at run time with `The variable 'name' is not defined`.

The same file now carries a second table — **List columns this package writes**. A SharePoint
column that does not exist rejects the whole item, so those are prerequisites in exactly the same
sense, and two of them are not in the tenant yet:

- **`Portal Flow Telemetry.RunRecordJson`** (Note) is **not** written by the packages as they
  stand, and that is deliberate. The designer validates every `item/<Column>` against the
  connector's operation definition for that list at **save** time, and a column the list does not
  have makes the whole flow unsaveable:
  `WorkflowOperationParametersExtraParameter — 'The API operation does not contain a definition
  for parameter 'item/RunRecordJson'.'` Because it fails at save, no run-time fallback can help.
  The generator therefore strips any write naming a column `portal-field-spec.json` marks
  `PENDING`. Provision the column, flip its `capturedState`, rebuild, and the write reappears —
  [open item 30](./sharepoint/OPEN_ITEMS.md). Nothing is blocked meanwhile.
- **`DGO_AuditLog`'s fourteen columns** are written by `DGO_SINGLE_ASSIGNMENT` and
  `DGO_DYNAMIC_GLOBAL_ACTIONS`. Four of them — `AuditId`, `Event`, `Severity`, `CreatedAt` — are
  **required**, and a row omitting any of them is rejected outright. The browser provisioner does
  not cover the governance estate; confirm that list against the tenant separately.

### 6.0-post First execution — the only thing that closes open item 2

Thirteen flows are verified current against the tenant, action by action and parameter by
parameter. **Not one has been run.** Everything known about this estate is known from
definitions; nothing is known from a response. No further checking closes that — only a call.

**Set `CALLER_EMAILS` first.** It takes a list, and the script resolves the caller itself: it probes `FETCH_ALL` with the first address, uses it for everything else if that endpoint answers `ok`, and moves to the next address on a refusal. So one paste settles which account the estate accepts rather than costing a round-trip per guess. A network failure stops the search at once — that is CORS or an unreachable flow, and no other address would fare differently. An answer that is *not* this estate's envelope is reported as a failure pointing at the configured URL, never as an authorisation refusal.

Each address must satisfy the same gate: Six of the seven internal flows resolve their caller as
`coalesce(triggerBody()?['payload']?['userEmail'], triggerBody()?['userEmail'], '')` and then
require an **active** `DGO_UserDirectory` row for that address, whose role in `DGO_RoleCatalogue`
carries `"*"` in `AllowedRoutesJson` or `user:view` in `PermissionsJson` (`bulk:assign` for the
write tier). A request without it resolves the caller to the empty string, matches no row, and is
refused — six authorisation failures caused entirely by the test. The script refuses to fire a
single call while `CALLER_EMAILS` is empty, and `npm test` fails if that gate is removed.

The console half of this — the acceptance run against the internal platform — is
**§6 of [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md)**, which is the only document
that carries it.

**Not a SharePoint page.** The script needs `window.DGO_CONFIG`, which only the platform sets — and
the telemetry snippet it prints at the *end* of a successful run is the part that goes in a
SharePoint console, which makes the two easy to mix up. Paste it on the wrong page and it now says
so outright rather than reporting six unconfigured endpoints. Everything blocking a run — wrong
page, an unconfigured read endpoint, an empty `CALLER_EMAILS` — is reported in **one pass**, so a
single paste tells you everything that needs fixing instead of one fault per round-trip.

Every request it sends is the exact envelope `core/data-client.js` builds —
`{ action, payload, userEmail, requestId, timestamp }` — with each `action` taken from
`config/endpoints.config.js`, so the run rehearses production rather than approximating it. The
suite reads both files and fails if the script and the contracts drift apart.

It reads the endpoint URLs from the platform's own runtime config (`window.DGO_CONFIG.endpoints`),
so no signed URL passes through this repository, a file, or a message — and it prints none.
`npm test` fails if a future edit gives it a way to.

**By default it calls the three READ endpoints only.** They assign nothing, create no
correspondence and send no mail. Each writes one `Portal Flow Telemetry` row, which is the point.
`INCLUDE_WRITES` adds two calls chosen to be **refused by design** — an assignment carrying no
reference and no assignee, which `Condition_Assign_Input_Valid` answers with a 400, and an unknown
operation on the dynamic endpoint, which `Condition_Dynamic_Operation_Known` answers with a 400.
Neither writes a business row; both exercise a guard. If either guard fails to fire the script
reports that as a failure, not as the expected refusal. `INCLUDE_OTP` sends a real email, to an
address that must itself be an active directory row — the OTP flow will not mail a code to an
unknown user. All three are off, and the suite fails if any is committed as on.

**It settles the CORS question by experiment rather than by comparison.** Whether
`Flow Configuration`'s allowed origin matches this platform has been answered by reading a value
and hoping. It does not need to be: if the browser lets the script read a response body, the
origin matched. If it does not, the fetch fails as a network error and the report says CORS
outright, naming the origin it ran from.

**CORS and acceptance are reported separately, and neither borrows the other's result.** A 401 the
browser could read proves the origin and nothing else. An endpoint that answers with a refusal is
reported as `REFUSED`, not as a pass, and the "every endpoint did its work" line cannot be printed
while any refusal stands — with the directory and role rows to check named underneath it.

Afterwards it prints a second snippet to run **from a SharePoint page** — the platform cannot
read SharePoint cross-origin — which lists the telemetry rows the calls just wrote and says how
many carry a run record. That is `RunRecordJson` confirmed end to end.

### 6.1 Order, and why

| # | Package | Actions | Serves | Why here |
|---|---|---:|---|---|
| 1 | `DGO_OTP` | 63 | `OTP_GENERATE`, `OTP_VERIFY` | Nothing else can authenticate a caller |
| 2 | `DGO_FETCH_ALL` | 47 | `FETCH_ALL` | The boot call — the read spine |
| 3 | `DGO_REFERENCE_DATA` | 41 | `REFERENCE_DATA` | The other half of the read spine |
| 4 | `DGO_GET_DOCS` | 38 | `GET_DOCS` | Narrower read |
| 5 | `DGO_SINGLE_ASSIGNMENT` | 53 | `SINGLE_ASSIGNMENT` | First write |
| 6 | `DGO_BULK_ASSIGNMENT` | 53 | `BULK_ASSIGNMENT`, `BULK_ASSIGNMENT_DIRECT` | Batch of the same write |
| 7 | `DGO_DYNAMIC_GLOBAL_ACTIONS` | 73 | `DYNAMIC_ACTIONS`, `EMAIL`, `DISPATCH_OUTBOUND`, `ARCHIVE_REFERENCE` | The operation switch |
| 8 | `DGO_SCAN_INTAKE` | 77 | `SCAN_INTAKE` | Last: it is the one flow the tenant does not already have, so nothing else waits on it |
| 9 | `DGO_SEND_EMAIL` | 60 | `EMAIL` (the carrier behind `dispatchEmail`) | After the switch that calls it: `DGO_DYNAMIC_GLOBAL_ACTIONS` routes `dispatchEmail` here, so pasting it earlier gives the switch nothing to reach |
| 10 | `DGO_SCHEDULED_SWEEP` | 78 | no contract key — it is the estate's only scheduled trigger | Last of all: it retries from the outbox `DGO_SEND_EMAIL` writes, so it has nothing to sweep until that flow is in service |

`DGO_SEND_EMAIL` and `DGO_SCHEDULED_SWEEP` are pasted like the rest. Two things about the pair:
the sweep is the **only** flow in this estate that fires on a schedule rather than on a request —
ITEM-49 records that as the estate's largest structural gap, and this package is the first thing
to close any of it — and it reads the mail ledger that `DGO_SEND_EMAIL` writes, so the order above
is a dependency and not a preference. Before either carries live traffic, settle **ITEM-53**
(`CG_SEND_EMAIL` accepts anonymous callers — one dropdown, and nothing will announce it because the
endpoint is not wired yet) and **SN-005** (the verification code is mailed to a fixed registry
mailbox rather than to the person who asked for it).

`DGO_SCAN_INTAKE` is pasted like the rest — variables first, then the scope — with **two
differences that matter**. Set its trigger to **PUT**, not POST: the client sends the file with
`PUT` and a Request trigger restricted to POST refuses it. And leave
`triggerAuthenticationType` at **Tenant**: it is an internal counter flow, and it takes the
depositing officer's identity from the tenant-authenticated principal header rather than from
the request body, because its body is the file's raw bytes and there is nothing else to read an
identity from. It answers a flat JSON body rather than the platform envelope, which is correct
for this one flow — `core/scan-intake-service.js` does its own fetch and reads the fields off
the top level.

### 6.2 What every internal package does that the portal set does not

**The caller is resolved, never trusted.** Every package except `DGO_OTP` opens with the identity
gate in §3.2. The role comes from `DGO_UserDirectory`, never from `userEmail` or any claim in the
body.

**`401` and `403` are distinct.** A caller absent from the directory gets `401`. A caller present
whose role lacks the permission gets `403`. The client distinguishes them.

**`user-admin:*` needs `role:assign`, checked separately.** `DGO_DYNAMIC_GLOBAL_ACTIONS` carries a
second gate for the four user-administration operations, because this is a plain HTTP endpoint and a
viewer can post that payload.

### 6.3 Flow 1 — `DGO_OTP`

`requestOtp` and `verifyOtp` on one flow, switching on the normalised action.

**Enumeration is closed.** An address absent from the directory, or not `active`, gets the identical
`200` response shape and a matching delay — otherwise this endpoint tells an anonymous caller who
works at the agency. `sent` is truthful either way.

On `verifyOtp` the role is resolved from `DGO_UserDirectory` and returned in `claims.roles`. That is
the server's statement about the caller, not the caller's about themselves. It comes from the
directory row alone — this flow does **not** read `DGO_RoleCatalogue`. It used to, in an action
whose result nothing consumed, chained so that a blip on that discarded query burned the caller's
single-use code and then answered `500`. The call was removed rather than re-chained.

Both paths are rate limited on the caller's own address, through `Portal Rate Limits`:
`OTP_REQUEST:<email>` caps code requests at five an hour, and `OTP_VERIFY:<email>` caps verify
attempts at ten an hour. The verify counter increments **before** the code is compared, so a wrong
guess costs an attempt — that cap is what stops a six-digit code being enumerated inside its own
five-minute validity window.

**Confirm after pasting — this is also the acceptance test for §3.2 and §3.3:**

- A request for an address **in** the directory with `Status = active` returns `200` with
  `{"sent":true,…}` inside `data`, and a code arrives.
- A request for an address **not** in the directory returns the same shape with `sent` truthful, and
  reveals nothing about whether the address exists.
- A correct code returns `200` with `claims.roles` naming the role from the directory row — not a
  role the caller asked for.
- An eleventh verify attempt for the same address within the hour returns `429` with
  `RATE_LIMITED`, and a sixth code request within the hour does the same. This confirms the caps
  are live. (The previous acceptance test here — emptying `DGO_RoleCatalogue` and expecting the
  verify path to deny — no longer holds and would fail: this flow no longer reads that list.)

### 6.4 Flows 2–4 — the reads

`DGO_FETCH_ALL` reads six lists and returns the boot payload: `docs`, `tasks`, `users`,
`categories`, `departments`, `comments`, plus empty `emails` and `approvals`.

**`users` is returned always, even when empty.** `users: []` means "the directory answered and you
are not in it"; omitting the key means "unchanged". `core/data-loader.js` acts on the difference —
a collection absent from the response leaves existing state untouched.

Columns are returned as **SharePoint internal names** — `RefIDD`, `Reference_ID`, `AssignedTo`,
`Assigned`, `RoutedToDSU`, `CC_x0027_dTo`, `OData__x0033_rdAssigned`. `core/domain.js` normalises
them and accepts every one of those aliases. **Do not rename them to friendly names.**

`DGO_REFERENCE_DATA` returns `users`, `categories`, `departments` with the same projections.
`DGO_GET_DOCS` narrows to one `RefIDD` when `reference` is supplied, and returns the recent set
otherwise.

**Confirm:**

- `FETCH_ALL` from a seeded, active officer returns `200` with all eight collection keys present.
- The same call from an address not in the directory returns `401`.
- An officer whose role lacks the read permission returns `403`.

### 6.5 Flows 5–6 — the assignment pair

`DGO_SINGLE_ASSIGNMENT` serves `assign-one` and `route-task`. **It is idempotent:** if the row's
`AssignedTo` already equals the requested assignee it answers `200` with `changed: false` and writes
nothing. `PendingQueue` re-sends failed governed writes, so a retried assign must not produce two
assignments.

`DGO_BULK_ASSIGNMENT` caps at **50 per call**, matching `AppConfig.maxBulkAssign`. It reports
**per-item outcomes** in `results[]` with `requested` / `assigned` / `failed` counts — never one
aggregate status, because a partial failure the client cannot see is a silent data-loss bug.

**Confirm:**

- Assigning a task returns `changed: true` and updates `Global Tracking Queue/AssignedTo`.
- Repeating the identical assignment returns `changed: false` and writes nothing.
- A bulk call of 60 items processes 50 and reports `requested: 50`.
- A bulk call where one reference does not exist returns `200` with that item marked failed in
  `results[]` and the rest assigned.

### 6.6 Flow 7 — `DGO_DYNAMIC_GLOBAL_ACTIONS`

The operation switch. It recognises the **19** discriminators the client actually sends, derived from
`core/`, `modules/` and `config/` and listed in `docs/deployment/internal/dynamic-operations.json`.

**Four have write bodies:**

| Operation | Writes |
|---|---|
| `update` | `DGO DIGITAL OPS/Marked_Item` — the document flag, set or cleared |
| `update-task` | `Global Tracking Queue` — `Progress`, `Comments`, `DueDate`, `Priority` |
| `transitionstatus` | `DGO DIGITAL OPS/Status` |
| `logauditevent` | `DGO_AuditLog/Title` |

**Fifteen answer `501 NOT_IMPLEMENTED` with `applied: false`** — `dispatch`, `dispatchoutbound`,
`archivereference` and the twelve activity-parity operations. They are recognised, authorised and
audited, then explicitly refused. See §10.1.

**An unrecognised discriminator is `400` with `UNKNOWN_OPERATION`.**

> **Why the flag write arrives as `update`.** `WriteManager.backend()` sends `operation: action`,
> then spreads the payload over it. `flagPayload()` stamps `operation: 'update'`, so the document
> flag reaches the flow as `update` with `flagDocument` / `unflagDocument` in `payload.action`. This
> is not a naming error to correct.

**Confirm:**

- A document flag write sets `DGO DIGITAL OPS/Marked_Item`; an unflag clears it.
- A `transitionstatus` sets `DGO DIGITAL OPS/Status`.
- A `dispatch` returns `501` with `applied: false` and a stated reason — **not** `200`.
- An invented operation name returns `400 UNKNOWN_OPERATION`.
- A `DGO_AuditLog` row exists for every call, including the refusals.

---

## 7 · Phase 5 — Capture endpoint URLs and configure the portal

### 7.1 Record the workflow ids  *(open item 21)*

**Owner:** operator. Roughly ten minutes.

`FLOW_CATALOGUE.json` gives a 32-hex id per endpoint; the exports carry only dashed internal names.
The two schemes have never been joined, and three endpoints have more than one candidate flow with
nothing settling which is live.

**The steps are §0.5 of [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md)**, which is the
only document that carries them. Everything here is the reasoning behind them.

### 7.2 Configure the portal

**Owner:** operator.

```bash
cp document-portal/config.example.js document-portal/config.local.js
```

`config.local.js` is git-ignored, so no URL is ever committed. Fill in all seven:

```js
window.PF_CONFIG = {
  endpoints: {
    SUBMISSION:     "<Portal_UBMISSION_ECM_DOCS trigger URL>",
    UPLOAD:         "<Portal_UPLOAD_ECM_DOCS trigger URL>",
    SUPPORT:        "<Portal_ECM_DOCS_SUPPORT trigger URL>",
    VERIFY:         "<Portal_Verify trigger URL>",
    VERIFY_CONFIRM: "<Portal_Verify_Confirm trigger URL>",
    STATUS:         "<Portal_ECM_DOCS_STATUS trigger URL>",
    WRITEBACK:      "<Portal_ECM_DOCS_WRITEBACK trigger URL>"
  }
};
```

**Behaviour when a slot is left empty**

| Left empty | Result |
|---|---|
| `SUBMISSION` | The whole portal stays in **DEMO MODE** — everything stays local, nothing is transmitted |
| `VERIFY` or `VERIFY_CONFIRM` | Verification reports itself unavailable. **Both are required**; one without the other counts as unavailable, because offering a code the citizen cannot redeem is worse than offering nothing |
| `WRITEBACK` | The write-back UI stays dormant. It also requires both verification halves |
| Any other | That feature reports itself unconfigured |

> **Every URL in this file is delivered to every visitor's browser.** Configure only endpoints whose
> flows are built to be invoked by an anonymous stranger — each must validate its own input,
> rate-limit its own callers, return only what the caller is entitled to see, and be rotated on a
> schedule. All seven packages in this guide are built to that standard; a flow that is not must
> never be listed here.

### 7.3 Verify the wiring from the repository

```bash
npm run wiring
```

---

## 8 · Phase 6 — End-to-end verification

Run this as a citizen would, in a browser, against the deployed portal. Repository tests cannot
prove any of it — they check the artifacts, not the tenant.

### 8.0 Run the probe first

Before working through the journeys by hand, exercise every endpoint from a terminal:

```bash
cp document-portal/config.example.js document-portal/config.local.js   # if not already done
# fill in all seven URLs, then:
npm run verify:endpoints -- --surface portal
```

That call is **read-only by default** — it probes STATUS only. To exercise the rest:

```bash
npm run verify:endpoints -- --surface portal --include-writes
```

**Writes are opt-in because they create real rows in a real register.** Every write probe carries
a `__DGO_PROBE__` marker and a per-run id, so the rows it creates can be found and deleted
afterwards. Search each list's `Title`, `Description` or `Message` column for `__DGO_PROBE__` and
remove what you find before the portal goes live.

**What a pass looks like, per endpoint**

| Endpoint | Probe sends | Pass |
|---|---|---|
| STATUS | `referenceId: __DGO_PROBE__`, `email` | `404` — the uniform denial. A `200` means the register confirms whether a reference exists. |
| SUBMISSION | A complete contract-shaped submission with no attachments | `200` carrying `referenceId` **at the top level** |
| SUPPORT | `name`, `email`, `topic`, `message`, `aboutReference` | `200` carrying `caseRef` at the top level |
| VERIFY | `email` only — **no `action`** | `200` carrying `sent` and `expiresAt` at the top level |
| VERIFY_CONFIRM | `email`, `code: 000000` | `401`, `404` or `410` — a code of six zeros matches no live challenge. A `200` with a `verification` means the flow mints proofs for anyone. |
| WRITEBACK | A well-formed body with an invalid proof | `401`, `403` or `404` — the proof is the only authentication on this endpoint |
| UPLOAD | Raw bytes, no ticket | `401` or `403` — a flow that accepts bytes without a redeemable ticket is one anyone can write into |

**A failure the probe names explicitly:** if a portal endpoint answers with the contract's fields
inside `data`, the probe reports

```
✗ answered the envelope — referenceId is inside 'data', where the portal cannot read it
```

That is not a near miss. It means the flow is answering the internal platform's shape and the
portal will read `undefined` for every field while seeing HTTP 200.

**No secret is printed.** Endpoints are identified by contract key and workflow id; the signature
never reaches the terminal or the JSON report, so a report can be pasted into an issue.

For the internal surface:

```bash
npm run verify:endpoints -- --surface runtime
```

### 8.1 The citizen journey

| # | Step | Expected | If it fails |
|---|---|---|---|
| 1 | Open the portal | The submission wizard renders; no "demo mode" banner | `SUBMISSION` is empty in `config.local.js` |
| 2 | Complete a submission with one attachment | A reference is shown, of the form the sequence counter mints | Check `Portal Registry` for the row; if the row exists but no reference is shown, the response is not reaching the browser — see §12.1 |
| 3 | Check `Portal Attachments` | One row, `Status` filed | If absent, the ticket was issued but not redeemed — check `Portal Upload Tickets/Redeemed` |
| 4 | Track the reference with the submitting email | The record renders with status and timeline | |
| 5 | Track the same reference with a different email | "Not found" — and the response body is byte-identical to an unknown reference | If they differ, the denial is distinguishable and INT-006 is not met |
| 6 | Request a verification code | The code arrives in the mailbox; the page says a code was sent | If the page says it could not be sent but the code arrives, `sent` is not truthful |
| 7 | Enter the code | The proof is held; the verified view opens | If a correct code is refused, see §12.3 |
| 8 | Respond through write-back | The response appears on the timeline; status unchanged | |
| 9 | Withdraw | Status changes; the timeline records it | |
| 10 | Repeat step 8 without re-verifying | Refused — the proof was single-use | If accepted, the proof is not being consumed |
| 11 | Raise a support case | A `CASE-` reference is shown, matching `Portal Support Cases/Title` | If the shown reference is not in the list, the client is generating it locally |
| 12 | Request six verification codes within an hour from one IP | The sixth returns `429` | |

### 8.2 The officer journey

| # | Step | Expected |
|---|---|---|
| 1 | Sign in as an officer with a `DGO_UserDirectory` row, `Status = active` | A code arrives; the role in `claims.roles` matches the directory row |
| 2 | Sign in as an address with no directory row | `401` — and the response reveals nothing about whether the address exists |
| 3 | Load the workspace | `FETCH_ALL` returns all eight collections |
| 4 | Assign a task | `Global Tracking Queue/AssignedTo` updates |
| 5 | Repeat the identical assignment | `changed: false`, nothing written |
| 6 | Flag a document | `DGO DIGITAL OPS/Marked_Item` set |
| 7 | Attempt a dispatch | `501`, `applied: false`, and the UI reports it as not applied — **not** as done |

### 8.3 Telemetry

After the two journeys, `Portal Flow Telemetry` must carry one row per flow run, with `Outcome`,
`DurationMs` and `RunId`. Confirm that:

- Refusals (`429`, `404`, `403`) appear as rows — they run through the standard response path, not
  an early terminate.
- No row's `ErrorMessage` contains a one-time code, a proof value, or a `sig=` token.
- `Portal Audit Events` rows carry the action and the body **length**, never the body.

---

## 9 · Phase 7 — Security actions

### 9.1 Rotate seven live third-party API keys  *(open item 7)*

**Owner:** operator. **These are live now.**

Seven keys were found in the estate: **Google ×4, OpenRouter, OpenAI, Hugging Face.** They are
redacted in the repository, and **redaction is not rotation** — a redacted key in a document is still
a live key at the provider.

**Procedure, per key, in this order**

1. Open the provider console and check usage for signs of misuse.
2. Mint a replacement key.
3. Move the new value into a **Power Automate environment variable** or a **Key Vault reference** —
   not into a flow action, and not into this repository. A key pasted into an action is a key the
   next export carries out again.
4. Update whatever consumes it and confirm it works.
5. **Revoke the old key last.**

**Verification:** the old keys return `401` from their provider.

### 9.2 Decide on the six circulated trigger tokens  *(open item 22)*

**Owner:** security authority. This is a decision, not a task.

Six live `sig=` trigger tokens were circulated in the closure package. They are **bearer
credentials** for all six public endpoints.

**The decision:** whether to regenerate the six trigger URLs.

**What has changed since they were circulated:** all seven portal endpoints now validate their input,
rate-limit their callers, return only the allow-listed projection, and answer a byte-identical denial.
The exposure a leaked token represents is materially smaller than it was — but it is not zero, and
the tokens are still valid.

**If the decision is to rotate:** regenerating a trigger URL changes it, which means repeating §7.1
and §7.2 for every rotated endpoint. Plan it as one pass.

**Regardless of the decision:** do not attach the closure package archive to tickets, and do not
circulate it further.

---

## 10 · Deferred work and what unblocks it

These four items cannot be completed by executing this guide. Each states precisely what is missing
and what would close it.

### 10.1 Fifteen `DYNAMIC_ACTIONS` operations answer `501`  *(open item 25)*

**Blocked on:** column evidence for the lists those operations touch.

`dispatch`, `dispatchoutbound`, `archivereference` and the twelve activity-parity operations
(`activity-{archive,siwes,nysc}` and their nine `:create-queue-record` / `:set-reference-id` /
`:update-activity` steps) are recognised, authorised and audited, then explicitly refused with
`501 NOT_IMPLEMENTED` and `applied: false`.

**Why they are refused rather than implemented.** The lists they write — the dispatch register and
the DGOFASTTRACK queue — have no column evidence in `internal-field-evidence.json`. Every column in
that file was harvested from a deployed flow definition or from a `core/domain.js` normaliser.
Writing a column that is in neither would be a guess, and `npm run designerpaste` refuses to build
one. A `200` with `applied: true` would tell the client the registry changed when it did not, and
`PendingQueue` would stop retrying.

**What closes it**

1. Open each target list in SharePoint → **List settings** → record every column's **internal name**
   (visible in the `Field=` parameter of the column-settings URL).
2. Add them to `docs/deployment/internal/internal-field-evidence.json` under that list's GUID, each
   tagged `tenant`.
3. Write the operation bodies in `scripts/build-internal-designer-paste.mjs` against those columns.
4. `npm run build:internalpaste && npm run designerpaste`
5. Re-paste `DGO_DYNAMIC_GLOBAL_ACTIONS`.

**Done when** no operation answers `501`.

### 10.2 The SHA-256 upload digest is not verified  *(open item 18, INT-002)*

**Blocked on:** a licensing answer, then implementation.

INT-002 requires UPLOAD to verify both size and SHA-256 against the received bytes. **Size is
verified** — the package compares `DeclaredSizeBytes` to `Content-Length` and answers `422` on a
mismatch. **The digest is not.**

**Why.** Workflow Definition Language has no hashing function; a digest cannot be computed in an
expression. Power Automate *can* compute one, through an **`Execute JavaScript Code`** action
(`JavaScriptCode`), and the estate's own `04-portal-upload` design specifies exactly that. But
`JavaScriptCode` appears in **none** of the 57 exported flow definitions and none of the 14 packages.

**So this is unclosed, not unachievable.**

**What closes it**

1. Confirm the environment's licensing permits `Execute JavaScript Code` — it is a premium action and
   its availability depends on the plan.
2. Add the action to `Portal_UPLOAD_ECM_DOCS` between reading the body and filing it, computing the
   SHA-256 of the received bytes.
3. Compare it to the ticket's `DeclaredSha256`; answer `422` on a mismatch, as the size check does.
4. Prove it against a real upload — both a matching and a deliberately corrupted file.

**Until then:** no document, screen, report or statement may claim the digest is verified.

### 10.3 Seventeen of 57 flows have no stated purpose  *(open item 9)*

**Blocked on:** knowledge of the estate that is not in the repository.

`docs/reference/FLOW_CATALOGUE.md` records what each flow *does* — trigger, parameters, lists,
structure — but not why it exists. Seventeen are attributed to no contract key and no portal
endpoint.

**What closes it:** one sentence each, into the contract register, from someone who knows why the
flow was built. **Done when** the catalogue reports zero with no stated purpose.

**Why it matters:** a flow nobody can account for cannot be safely retired, and cannot be safely
kept. Several are candidates for deletion — `Portal_Status_Enquiry` is already marked delete-do-not-
patch — but that call needs someone who knows what depended on them.

### 10.4 The patch-track visits  *(open items 3, 4, 6)*

These are **superseded** for every flow the paste track covers, which is all seven portal flows.
They remain in `OPEN_ITEMS.md` because the placement files record the reasoning behind each change
and because the patch track is the only route for a flow with no package.

**Do not execute them after pasting.** Applying `03-status-registry-read.json`,
`02-submission-registry-write.json` or the `ECM_DOCS_INTAKE` write-back placements on top of a pasted
package will reintroduce the defects the packages fix.

If a flow outside these fourteen needs changing, the patch track is still the route, and
`docs/deployment/sharepoint/remediation/EXECUTION.md` is its procedure.

---

## 11 · Command reference

Every command, what it proves, and what a passing result reads.

### 11.1 Verification

| Command | Proves | Passing output |
|---|---|---|
| `npm test` | Everything below, plus the client-side suites | every script passing |
| `npm run designerpaste` | The 15 packages are structurally valid, target provisioned lists by GUID on the right site, write only evidenced columns, resolve every `runAfter`, read no action a `runAfter` chain does not reach, bind every connector, read caller fields where the client puts them, and carry no credential or prose | `15 package(s), 0 failure(s).` |
| `npm run responsecontract` | Each package answers the shape its own client reads — flat for portal, envelope for internal | `0 failure(s).` |
| `npm run triggers` | Every trigger field the artifacts read is one the contract defines | `0 field read(s) the contract does not define` |
| `npm run test:dynamicops` | The recognised `DYNAMIC_ACTIONS` discriminators match what the client sends | `19 DYNAMIC_ACTIONS discriminator(s), in sync with the client` |
| `npm run flowstandard` | Build-standard conformance across the estate | the 14 packages at 100% |
| `npm run wiring` | Operations, endpoints and boundary crossings, measured from the repository | see §2.1 and §7.3 for the target |
| `npm run test:roles` | The role seed matches `config/rbac.config.js` | all passed |
| `npm run test:datacontract` | The portal data contract is internally consistent and its persistence targets exist | `0 error(s), 0 gap(s), 0 unwritten column(s)` |
| `npm run test:probecontract` | The live-endpoint probes send the contract's field names, omit `action` on the verify pair, and expect a flat portal response | `29 passed, 0 failed` |
| `npm run test:guide` | This guide still describes the packages that exist — paths, action counts, list GUIDs | `0 failure(s).` |

### 11.2 Regeneration

Run these only when changing the builders. They overwrite the packages.

| Command | Does |
|---|---|
| `npm run build:designerpaste` | Rebuilds the seven portal packages |
| `npm run build:internalpaste` | Rebuilds the seven internal packages |
| `npm run dynamicops` | Regenerates `dynamic-operations.json` from the client source |
| `npm run seed:roles` | Regenerates `role-catalogue-seed.json` from `config/rbac.config.js` |
| `npm run visual` | Regenerates the platform atlas dataset |

After any regeneration, `npm run designerpaste && npm run responsecontract` must both pass before the
result is pasted anywhere.

### 11.3 Live endpoint probes

| Command | Does |
|---|---|
| `npm run verify:endpoints` | Probes the read-only endpoints on both surfaces |
| `npm run verify:endpoints -- --surface portal` | Portal only |
| `npm run verify:endpoints -- --surface runtime` | Internal only |
| `npm run verify:endpoints -- --include-writes` | Also probes the mutating endpoints. **Creates real rows.** |
| `npm run verify:endpoints -- --only VERIFY,VERIFY_CONFIRM` | A named subset |
| `npm run verify:endpoints -- --json report.json` | Writes a transcript. Carries no signature. |

Reads the URLs from `document-portal/config.local.js`, which is git-ignored. **Nothing here is safe
to point at a production tenant** while the write probes are enabled.

### 11.4 Tenant scripts

| Script | Does | Sends anything? |
|---|---|---|
| `scripts/update-flow-definition.ps1` | Reads or patches a deployed flow definition | Only with `-Apply` |
| `scripts/export-power-automate-flows.ps1` | Exports flow definitions to the repository | No — reads only |
| `scripts/redact-signed-urls.ps1` | Strips `sig=` tokens from an export before it is committed | No |
| `scripts/setup-sharepoint.ps1` | Provisions lists and columns | Yes |
| `scripts/provision-sharepoint-fields.ps1` | Adds columns to existing lists | Yes |

**Run `redact-signed-urls.ps1` on every export before committing it.** An export carries the trigger
URLs, and a `sig=` token in the repository is a published credential.

---

## 12 · Troubleshooting

### 12.1 The flow runs, the row is written, and the page shows an error

**Cause:** the CORS origin. The browser refused the response.

**Check:** browser devtools → Console. A message naming `Access-Control-Allow-Origin` confirms it.

**Fix:** §4.1. The `Response_*` action of that flow still carries `https://your-host`, or carries an
origin that does not exactly match the page's — scheme, host and port must all match, and there must
be no trailing slash.

### 12.2 Every internal endpoint answers `401`

**Cause:** `DGO_UserDirectory` has no row for the caller, or the row's `Status` is not exactly
`active`, or `DGO_RoleCatalogue` has no row whose `RoleId` matches the directory row's `Role` with
`Active = 1`.

**Check, in order:**

1. Is there a row in `DGO_UserDirectory` with `Email` exactly matching, lowercased and trimmed?
2. Is its `Status` exactly `active` — lowercase, no trailing space?
3. Is there a `DGO_RoleCatalogue` row whose `RoleId` equals that row's `Role`?
4. Is that catalogue row's `Active` set to `1`?

A `403` rather than a `401` means the caller was found but the role lacks the permission — check
`PermissionsJson` and `AllowedRoutesJson` on the catalogue row.

### 12.3 A correct verification code is refused

**Check, in order:**

1. Is `Portal_Verify_Confirm` pasted with the current package? The defect where both halves routed
   to `generate` was fixed on 2026-08-22 — an older body mails a fresh code instead of verifying.
2. Is the `Portal OTP Codes` row's `Consumed` already true? Five wrong attempts consume the
   challenge.
3. Has `Expires_At` passed? The window is five minutes.
4. Does the `email` in the confirm request match the one VERIFY was called with, exactly?

### 12.4 An endpoint answers `500` after working for weeks

**Cause, most likely:** a hot-path list crossed 5,000 items with an unindexed filter column.

**Check:** `Portal Rate Limits` item count. If it is near or over 5,000, §3.1 was skipped or the
index was removed.

**Fix:** index `Title` per §3.1. If SharePoint refuses because the list is already over the
threshold, delete rows whose `WindowStartUtc` is older than a day — they are spent windows and
nothing reads them — until the list is under 5,000, then index.

### 12.5 A submission reports success but the attachments never arrive

**Check:** did the response's `uploads[]` carry one element per declared attachment? An empty array
when attachments were declared means the tickets were not issued, and the client has nothing to
redeem. Check `Portal Upload Tickets` for rows against that `SubmissionRef`.

If tickets exist but `Portal Attachments` is empty, UPLOAD is refusing them — check
`Portal Upload Tickets/Redeemed` and the size comparison in §5.5.

### 12.6 An expression shows as literal text at run time

**Cause:** it was pasted into the dynamic-content box rather than the expression editor.

**Fix:** click **fx** (or the **Expression** tab) and paste there. This applies to every value in the
packages beginning with `@`.

### 12.7 The designer rejects the paste

**Check:**

1. Is this the **modern** designer? The classic designer rejects the clipboard format.
2. Was the **entire** file contents pasted, including the outermost braces?
3. Was a previous partial paste left on the canvas? Delete everything below the trigger and paste
   again.

### 12.8 A pasted action shows a broken-connection badge

**Cause:** the pasting account cannot use the connection the package names, or the connection has
been deleted.

**Fix:** open the action, pick a connection you own. This is expected on the three mail actions
(§4.2) and unexpected on the SharePoint actions — if a SharePoint action is flagged, your account
does not have access to `3f1943c5955a4cb8b301e8f22f2b590d` and you should pick your own SharePoint
connection.

---

## 13 · Sign-off record

Complete this as the guide is executed. The two decisions must be recorded **before** Phase 3.

### Decisions

| Decision | Value | Decided by | Date |
|---|---|---|---|
| §4.1 Portal CORS origin | | | |
| §4.2 Sending mailbox / Office 365 connection | | | |
| §9.2 Rotate the six trigger URLs? | | | |

### Phase completion

| Phase | Item | Acceptance test | Done by | Date |
|---|---|---|---|---|
| 0 | Write access granted, `ba7c94a` landed | `npm run wiring` reads 8/59 | | |
| 0 | Dry run against the tenant | Prints flow name and action count, no error | | |
| 1 | `Portal Rate Limits/Title` indexed | Shown in **Indexed columns** | | |
| 1 | `Portal Verification Proofs/Title` indexed | Shown in **Indexed columns** | | |
| 1 | `Portal Support Cases/Title` indexed | Shown in **Indexed columns** | | |
| 1 | `DGO_RoleCatalogue` seeded | `npm run test:roles` passes; rows present with `Active = 1` | | |
| 1 | `DGO_UserDirectory` populated | One row per officer, `Status = active` | | |
| 3 | `Portal_Verify` pasted | §5.3 confirmations | | |
| 3 | `Portal_Verify_Confirm` pasted | §5.3 confirmations | | |
| 3 | `Portal_UBMISSION_ECM_DOCS` pasted | §5.4 confirmations | | |
| 3 | `Portal_UPLOAD_ECM_DOCS` pasted | §5.5 confirmations | | |
| 3 | `Portal_ECM_DOCS_STATUS` pasted | §5.6 confirmations | | |
| 3 | `Portal_ECM_DOCS_SUPPORT` pasted | §5.7 confirmations | | |
| 3 | `Portal_ECM_DOCS_WRITEBACK` created and pasted | §5.8 confirmations | | |
| 4 | `DGO_OTP` pasted | §6.3 confirmations | | |
| 4 | `DGO_FETCH_ALL` pasted | §6.4 confirmations | | |
| 4 | `DGO_REFERENCE_DATA` pasted | §6.4 confirmations | | |
| 4 | `DGO_GET_DOCS` pasted | §6.4 confirmations | | |
| 4 | `DGO_SINGLE_ASSIGNMENT` pasted | §6.5 confirmations | | |
| 4 | `DGO_BULK_ASSIGNMENT` pasted | §6.5 confirmations | | |
| 4 | `DGO_DYNAMIC_GLOBAL_ACTIONS` pasted | §6.6 confirmations | | |
| 5 | Workflow ids recorded | Seven pairs, ids only | | |
| 5 | `config.local.js` completed | All seven slots filled | | |
| 6 | Citizen journey | All 12 steps in §8.1 | | |
| 6 | Officer journey | All 7 steps in §8.2 | | |
| 6 | Telemetry check | §8.3 — no secret in any row | | |
| 7 | Seven API keys rotated | Old keys return `401` | | |
| 7 | Trigger-token decision taken | Recorded above | | |

### Deferred, with owner

| Item | Blocked on | Owner |
|---|---|---|
| §10.1 Fifteen `DYNAMIC_ACTIONS` operations answer `501` | Column evidence from the tenant | |
| §10.2 SHA-256 upload digest | Licensing answer for `Execute JavaScript Code` | |
| §10.3 Seventeen flows with no stated purpose | Estate knowledge | |

---

## Appendix A — The fourteen flow packages

**Corrected 2026-09-11. The paragraph that stood here was wrong in five ways**, and an executor
following it would have looked for a file that does not exist. It said fifteen files ship; there
are **40**. It named `DGO_VARIABLE_INITIALIZATION.designer-paste.json` as a single shared variable
carrier; no such file exists, and the pattern changed to **one carrier per flow**. It said seven
internal packages read that carrier; there are **17** carriers. It pointed at a `§6` this document
does not have. And the table below listed fourteen of the packages as though that were all of them.

The measured position:

| | Count |
|---|---:|
| Flow packages — a package that targets a flow | **23** |
| Per-flow variable carriers — `*.variables.designer-paste.json` | **17** |
| Files in the two `designer-paste/` directories | **40** |

**The table below covers 14 of the 23 with their target flow, id, action count and response
shape.** Of the remaining 9, three — `DGO_SCAN_INTAKE`, `DGO_SCHEDULED_SWEEP`, `DGO_SEND_EMAIL` —
appeared nowhere in this appendix at all. The other six appear only as a *target flow* in another
package's row, which names the flow they point at and not the package itself. Neither is a
description. All nine are listed here; their action counts and response shapes have not been
measured. **They are not missing from the repository — only from this appendix:**

| Package | Path |
|---|---|
| `DGO_SCAN_INTAKE.designer-paste.json` | `docs/deployment/internal/flows/designer-paste/DGO_SCAN_INTAKE.designer-paste.json` |
| `DGO_SCHEDULED_SWEEP.designer-paste.json` | `docs/deployment/internal/flows/designer-paste/DGO_SCHEDULED_SWEEP.designer-paste.json` |
| `DGO_SEND_EMAIL.designer-paste.json` | `docs/deployment/internal/flows/designer-paste/DGO_SEND_EMAIL.designer-paste.json` |
| `CG_Status_Check_Endpoint.Scope_Global.designer-paste.json` | `docs/deployment/sharepoint/flows/designer-paste/correspondence-gateway/CG_Status_Check_Endpoint.Scope_Global.designer-paste.json` |
| `CG_Submission_Endpoint.Scope_Global.designer-paste.json` | `docs/deployment/sharepoint/flows/designer-paste/correspondence-gateway/CG_Submission_Endpoint.Scope_Global.designer-paste.json` |
| `CG_Support_Endpoint.Scope_Global.designer-paste.json` | `docs/deployment/sharepoint/flows/designer-paste/correspondence-gateway/CG_Support_Endpoint.Scope_Global.designer-paste.json` |
| `CG_Upload_Endpoint.Scope_Global.designer-paste.json` | `docs/deployment/sharepoint/flows/designer-paste/correspondence-gateway/CG_Upload_Endpoint.Scope_Global.designer-paste.json` |
| `CG_Verification_Endpoint.Scope_Global_Verification.designer-paste.json` | `docs/deployment/sharepoint/flows/designer-paste/correspondence-gateway/CG_Verification_Endpoint.Scope_Global_Verification.designer-paste.json` |
| `ECM_DOCS_INTAKE.Scope_Global_Intake.designer-paste.json` | `docs/deployment/sharepoint/flows/designer-paste/correspondence-gateway/ECM_DOCS_INTAKE.Scope_Global_Intake.designer-paste.json` |

Do not read the absence of a row as the absence of a package. `npm run test:guide` now fails if a
package ships and this appendix does not name it.

**Target flow names and ids were corrected on 2026-08-31** — three named a flow that exists and
is not the one the portal calls. See §5.2 and
[`evidence/2026-08-31-portal-paste-target-resolution.json`](../deployment/sharepoint/evidence/2026-08-31-portal-paste-target-resolution.json).

| File | Target flow | Flow id | Actions | Response shape |
|---|---|---|---:|---|
| `sharepoint/flows/designer-paste/Portal_SUBMISSION_ECM_DOCS.designer-paste.json` | `CG_Submission_Endpoint` | `de9ef13b-…` | 74 | flat |
| `sharepoint/flows/designer-paste/Portal_VERIFY_ECM_DOCS.designer-paste.json` | `CG_Verification_Endpoint` | `86897b2f-…` | 70 | flat |
| `sharepoint/flows/designer-paste/Portal_VERIFY_CONFIRM_ECM_DOCS.designer-paste.json` | `CG_Verification_Confirmation_Endpoint` | ⚠️ `5e13db77-…` unconfirmed | 70 | flat |
| `sharepoint/flows/designer-paste/Portal_WRITEBACK_ECM_DOCS.designer-paste.json` | `CG_Writeback_Endpoint` | ⚠️ `21d4bfd3-…` unconfirmed | 62 | flat |
| `sharepoint/flows/designer-paste/Portal_STATUS_ECM_DOCS.designer-paste.json` | `CG_Status_Check_Endpoint` | `badb65d8-…` | 59 | flat |
| `sharepoint/flows/designer-paste/Portal_UPLOAD_ECM_DOCS.designer-paste.json` | `CG_Upload_Endpoint` | `df7ddff1-…` | 48 | flat |
| `sharepoint/flows/designer-paste/Portal_SUPPORT_ECM_DOCS.designer-paste.json` | `CG_Support_Endpoint` | `1b2c2e53-…` | 51 | flat |
| `internal/flows/designer-paste/DGO_DYNAMIC_GLOBAL_ACTIONS.designer-paste.json` | `DGO_DYNAMIC_GLOBAL_ACTIONS` | 73 | envelope |
| `internal/flows/designer-paste/DGO_FETCH_ALL.designer-paste.json` | `DGO_FETCH_ALL` | 47 | envelope |
| `internal/flows/designer-paste/DGO_SINGLE_ASSIGNMENT.designer-paste.json` | `DGO_SINGLE_ASSIGNMENT` | 53 | envelope |
| `internal/flows/designer-paste/DGO_OTP.designer-paste.json` | `DGO_OTP` | 63 | envelope |
| `internal/flows/designer-paste/DGO_BULK_ASSIGNMENT.designer-paste.json` | `DGO_BULK_ASSIGNMENT` | 53 | envelope |
| `internal/flows/designer-paste/DGO_REFERENCE_DATA.designer-paste.json` | `DGO_REFERENCE_DATA` | 41 | envelope |
| `internal/flows/designer-paste/DGO_GET_DOCS.designer-paste.json` | `DGO_GET_DOCS` | 38 | envelope |

All paths are relative to `docs/deployment/`.

## Appendix B — Standing constraints

These hold regardless of what any other document says. Each is recorded with its reason.

Four of these are about handling and are enforced by the secret ratchet, the exposure scan and
the designer-paste redaction checks. **The first three are about speech, and until 2026-08-31
nothing enforced them** — which is why item 19 could rewrite seven documents and miss an eighth,
and why two live over-claims survived until a test went looking. `npm run test:claims` scans
every markdown file outside the verbatim corpus and the audit record, and each of its three
rules is mutation-tested against the sentence it exists to reject.

| Constraint | Reason | Enforced by |
|---|---|---|
| **Do not claim the one-time code comparison is constant-time.** | WDL has no bitwise operators. `equals()` cannot be made constant-time. | `test:claims` |
| **Do not claim one-time codes are hashed.** | Same limitation. They are stored in plaintext; the protection is the lifecycle (SC-003). | `test:claims` |
| **Do not claim the upload SHA-256 is verified.** | It is not computed. See §10.2. | `test:claims` |
| **A `sig=` trigger token is a bearer credential.** | It must never reach the repository, a ticket, an email or a chat message. | `test:secrets`, `test:exposure` |
| **Redaction is not rotation.** | A redacted key in a document is still live at the provider. | judgement — open items 7 and 22 |
| **Audit rows carry the action and the body length, never the body.** | The body may contain anything a citizen typed. | `test:designerpaste` |
| **Outbox receipts never carry the code.** | A receipt proves a code was sent; carrying it would defeat the point of expiry. | `test:designerpaste` |
| **The rate limit is a fixed window, not sliding.** | D8, accepted trade-off. Not a defect to raise. |
| **Portal responses are flat; internal responses are enveloped.** | Two clients, two contracts. Enforced by `npm run test:responsecontract`. |
| **`Global Tracking Queue` has no `Status` column.** | A task's status is `Progress`. A reference's status is `DGO DIGITAL OPS/Status`. |
| **Submissions already in `NITDA_Central_Registry` stay put.** | Standing instruction. Handled after provisioning concludes; nothing is migrated mid-flight. |
