# Operator walkthrough — end to end

> **This document carries no commands.** The steps for portal and endpoint commissioning live in
> [`EXECUTION_RUNBOOK.md`](EXECUTION_RUNBOOK.md), which is the only document that carries them.
> This document is orientation for a first-time operator — restates no step. If you are here to execute, go there.
>
> The command-line commissioning path is
> [`CLEAR-THE-LAST-BLOCKER.md`](CLEAR-THE-LAST-BLOCKER.md) — on a phone,
> [`CLEAR-THE-LAST-BLOCKER-TERMUX.md`](CLEAR-THE-LAST-BLOCKER-TERMUX.md).

Every action needed to take this estate from its current state to production, in the order they
can actually be done, with the real values. Companion to
[`EXECUTION_RUNBOOK.md`](./EXECUTION_RUNBOOK.md), which is generated from the register and gives
the dependency logic; this gives the keystrokes.

**Every command and value below was verified against this repository on 2026-08-31 at commit
`8a793d9`.** Nothing here is a sample, a placeholder or an illustration. Where a value does not
exist yet — a trigger URL that only exists after rotation — the step that produces it is named,
and you record the real value then. That is a data-flow dependency, not a placeholder.

> ## ⚠️ This is a reading of 2026-08-31, superseded on status
>
> It names 28 register items. **Ten of them have closed since it was written**: `ITEM-7`,
> `ITEM-8`, `ITEM-18`, `ITEM-22`, `ITEM-34`, `ITEM-35`, `ITEM-38`, `ITEM-39`, `MANUAL-1` and
> `MANUAL-4`. Sessions below that exist only to close one of those are done; the keystrokes are
> kept because they record how, and because a step that is idempotent costs nothing to re-run.
>
> **For what is outstanding, read the generated three, not this one:**
> [`ACTION_PLAN.md`](./ACTION_PLAN.md) for the open items in the order that unblocks the most,
> [`EXECUTION_RUNBOOK.md`](./EXECUTION_RUNBOOK.md) for the dependency logic, and
> [`IMPLEMENTATION_WALKTHROUGH.md`](./IMPLEMENTATION_WALKTHROUGH.md) for each open item end to
> end. All three are generated from
> [`PRODUCTION_READINESS_REGISTER.json`](./PRODUCTION_READINESS_REGISTER.json) and cannot drift
> from it — `npm run test:actions`, `npm run test:runbook` and `npm run test:walkthrough` fail if
> they do. This file is hand-written, which is why it could.
>
> `npm run test:closure` holds the specific claims below to the register.

---

> ## ⚠ Read this before Session 1 — the estate moved on 2026-09-01
>
> This walkthrough was written on 2026-08-31 and **two of its nine sessions are already done**.
> On 2026-09-01 twelve live flows were exported and compared action by action and parameter by
> parameter, and **all fourteen are verified current against the tenant** — every action present,
> every parameter identical, zero differences on every one. The record is
> [`sharepoint/evidence/2026-09-01-paste-state-by-flow.json`](./sharepoint/evidence/2026-09-01-paste-state-by-flow.json),
> key `CLOSED_2026_09_01_03_26`.
>
> | Session | Then | Now |
> |---|---|---|
> | **3** — export the two unconfirmed flows | closes ITEM-35 | ✅ **Done.** ITEM-35 is RESOLVED; all fourteen flows have been exported and compared since. **Skip it.** |
> | **4** — paste the seven portal packages | closes ITEM-12, 11, 3, 4, 6, 17 | ✅ **Done.** All six are applied and are `APPLIED_UNVERIFIED` in the register. **Do not re-paste.** Re-pasting a flow that is already byte-identical to its package can only introduce drift, and it costs the run history. |
> | **1** — SharePoint provisioning | closes ITEM-23, supplies ITEM-8 and ITEM-30 | ⚠ **Partly done.** The index pass ran on 2026-08-31 (3 set, 2 already indexed, 0 failed) and `RunRecordJson` is live. `ALLOWED_ORIGIN_1` now reads `https://activityweb.page.gd`. **Still run it** — it is idempotent, and it is what creates `OTP_Transactions.Attempts`, which Session 2b needs. |
> | **2** — prove the tenant write path | closes ITEM-2 | ⬅ **Still the one that matters, and it is now the whole critical path.** Nine register items are waiting on it and on nothing else. |
>
> **Three items exist that this walkthrough predates entirely**, all in the register at revision
> 1.1.0: **ITEM-38** (the OTP verify hardening was on disk only — an authentication bypass, an
> OData injection and an open mail relay; **RESOLVED 2026-09-04**, deployed as a new flow
> `IP_OTP_VERIFY`, which is why `ITEM-43` is open for the portal still calling the defective
> one), **ITEM-40** (thirteen triggers were never read, and `IP_Get_Docs_Endpoint` answers GET,
> PUT and DELETE — still open) and **ITEM-41** (content approval hides 12,079 of 15,936 rows on
> `Global Tracking Queue` — still open, a decision for the agency). ITEM-38 is inserted below as
> **Session 2b**; that session is done.
>
> Read [`PRODUCTION_READINESS_REGISTER.json`](./PRODUCTION_READINESS_REGISTER.json) for the
> current state of any item. `npm run test:readiness` now fails if that register is older than the
> newest dated evidence, which is the check whose absence let this walkthrough go stale.

---

## How we work this

You hold the access. I hold the checking. Neither half needs the other's.

After each step marked **▶ REPORT**, paste me the output. I check it against the item's recorded
validation criteria, tell you pass or fail, update the tracker, and regenerate anything derived.
Do not summarise the output — paste it whole. A summary loses the line that matters.

**Do not send me trigger URLs.** They carry `sig=` bearer tokens. Appendix B of the execution
guide is explicit that a `sig=` token must never reach the repository, a ticket, an email or a
chat message. Send me counts, flow names, ids and error text — never a URL with a token in it.

---

## Before you start

**Accounts and permissions**

| What | Where | Why |
|---|---|---|
| **Manage Lists** (Site Owner is enough) | All four sites listed in Session 1 | Column and index provisioning |
| Power Automate maker access to the environment | `Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1` | Editing and saving flows |
| Ability to regenerate flow trigger URLs | Same environment | Session 5 rotation |

Tenant admin is **not** needed for provisioning.

**Tools on the machine you work from**

| Tool | Needed for | Check it is there |
|---|---|---|
| A Chromium or Edge browser | Sessions 1, 4 | — |
| Windows PowerShell 5.1 or PowerShell 7 | Sessions 2, 3, 5 | `$PSVersionTable.PSVersion` |
| `Microsoft.PowerApps.PowerShell` module | Sessions 2, 3, 5 | `Get-Module -ListAvailable Microsoft.PowerApps.PowerShell` |
| Node.js 22 or newer | Every verification step | `node --version` |
| A clone of this repository | Every verification step | `git rev-parse --short HEAD` |

**Get the repository — on the right branch.** The default branch does **not** carry this work.
Everything below — the corrected paste targets, the four-site provisioner, the packages with the
action-ordering fix — is on `claude/sharepoint-lists-gap-bqo7j7`. Cloning the default branch and
following this walkthrough would execute against stale artifacts, and nothing would warn you.

```
git clone -b claude/sharepoint-lists-gap-bqo7j7 https://github.com/dgoeaa/ECM_DOCS_DEV.git
cd ECM_DOCS_DEV
git rev-parse --abbrev-ref HEAD
```

The third command must print `claude/sharepoint-lists-gap-bqo7j7`. If it prints anything else,
stop — you are on the wrong tree.

**Install the PowerApps module.** Do this in a **non-elevated** PowerShell, as the account that
will do the tenant work. `-Scope CurrentUser` writes to your own profile and needs no admin
rights; running elevated installs it into the administrator's profile instead, where the scripts
will not find it.

```powershell
Install-Module -Name Microsoft.PowerApps.PowerShell -Scope CurrentUser -AllowClobber
```

**If that fails with `Unable to resolve package source`** — the in-box PowerShellGet on Windows
PowerShell 5.1 is version 1.0.0.1 and needs the NuGet package provider before it can reach the
gallery. Bootstrap it, then open a **new** PowerShell window, because the provider is only picked
up on load:

```powershell
Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force -Scope CurrentUser
```

Confirmed on Windows 11 build 26100 with PowerShellGet 1.0.0.1 on 2026-08-31. TLS is not the
cause on that build: `[Net.ServicePointManager]::SecurityProtocol` reads `SystemDefault`, which
already negotiates TLS 1.2. Before assuming a network block, note that `Test-NetConnection`
proves only that a TCP socket opened — use
`Invoke-WebRequest https://www.powershellgallery.com/api/v2 -UseBasicParsing` to exercise the
actual HTTPS path.

**Then verify, before anything depends on it:**

```powershell
Get-Module -ListAvailable Microsoft.PowerApps.PowerShell | Select-Object Name, Version
Get-Command Add-PowerAppsAccount, Get-Flow, Get-PowerAppEnvironment | Select-Object Name, Source
```

All three cmdlets must resolve to `Microsoft.PowerApps.PowerShell`. A warning about "unapproved
verbs" from `Microsoft.PowerApps.AuthModule` appears on every load and is cosmetic.

**The environment id, used throughout**

```
Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1
```

Read from `workflow_identity.tags.environmentName` in all 58 exported definitions; every one
agrees.

---

## Session 0 — repository baseline · no tenant needed · ~2 minutes

Establish that your clone is sound before you spend tenant time against it.

```bash
git rev-parse --short HEAD
node --version
npm ci
npm test
```

**Expected.** `npm test` runs every Node suite to `test:processdocs` with no `❌`. The final step,
`test:smoke`, needs a browser; if it fails on a missing executable that is the known container
condition, not a defect — see Session 8.

**▶ REPORT** the last 20 lines of `npm test`.

---

## Session 1 — SharePoint provisioning · browser · closes ITEM-23, and supplies ITEM-8 and ITEM-30

No credential leaves your machine. The script runs in the SharePoint session you are already
signed into.

**Sites reached — you need Manage Lists on every one:**

```
https://nitdanigeria.sharepoint.com/sites/DGO_ECM_GOVERNANCE
https://nitdanigeria.sharepoint.com/sites/Global_Digital_Documents_Centre
https://nitdanigeria.sharepoint.com/sites/NEDMS
https://nitdanigeria.sharepoint.com/sites/NITDADGO-EAAACTIVITYTRACKING
```

They share one origin, so one paste reaches all four — but only for sites you can already write
to. **The fourth site is not optional:** `Flow Configuration`, which ITEM-8 needs a column on,
lives on `NITDADGO-EAAACTIVITYTRACKING`.

**Steps**

Provisioning the columns is **§2 of [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md)**,
which is the only document that carries the step. What it changes, and what to check afterwards,
is below.

1. Sign in to `https://nitdanigeria.sharepoint.com` and open any page on any of the four sites.
2. Follow §2 of the portal runbook.
4. It runs in **dry-run** first and prints a table of what it would create. Read it.
5. When the table looks right, edit line 45 of your local copy from `const DRY_RUN = true;` to
   `const DRY_RUN = false;`, then copy and paste the whole file again.

**What it does.** Creates 99 columns across 14 lists it does not already find, and sets the five
indexes declared in `index-targets.json`. It never creates a list, never modifies or re-types a
column that already exists, and is safe to run twice — a second run reports everything present
and creates nothing.

**Done when.** A second run's index pass reports **5 already indexed**, and the column pass
creates nothing.

**▶ REPORT** the full console output of the second (non-dry) run.

---

## Session 2 — prove the tenant write path · PowerShell · closes ITEM-2

Nothing is sent. This establishes that the mechanism the whole patch track depends on works
before anything depends on it.

Open PowerShell in the root of your clone — the directory containing `package.json` — and sign
in:

```powershell
Add-PowerAppsAccount
```

Sign in interactively at the prompt. The token lives only in this PowerShell window.

Then, in that **same** window:

```powershell
.\scripts\update-flow-definition.ps1 `
  -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 `
  -FlowId 86897b2f-9770-4efa-8486-2642f24bb947 `
  -DefinitionPath .\docs\deployment\sharepoint\remediation\patched\Portal_Verify_Confirm.definition.json
```

`86897b2f-…` is `CG_Verification_Endpoint`, a flow confirmed present in the export set. **Without
`-Apply` this sends nothing** — it reads the current definition, writes it beside the definition
file as `.before.json`, and prints what it would send.

**Done when.** It prints the flow name and an action count without error.

**If it throws `No access token`** you are in a different PowerShell window from the one where
`Add-PowerAppsAccount` ran. Re-run both in the same window.

**▶ REPORT** the console output.

---

## Session 2b — patch `Web - OTP Verify` · closes ITEM-38 and ITEM-39 · **do this before real traffic**

The live one-time-code flow carries five defects, all closed in this repository and applied
nowhere: an **authentication bypass** (the lookup ignored the caller's identity, so a code issued
to one person verified anyone), an **OData injection** under it, an ordering fault that would have
made the identity binding fail at runtime on every call, **no attempt cap** against six digits, and
an **open mail relay** on the agency's Office 365 connection.

**Order matters and is not negotiable.** The designer validates every `item/<Column>` against the
connector operation at **save** time and refuses the whole flow with
`WorkflowOperationParametersExtraParameter`. Patch before the column exists and you get a rejected
save and the defective flow still live.

1. **Session 1 first.** `OTP_Transactions.Attempts` is declared in
   [`sharepoint/portal-field-spec.json`](./sharepoint/portal-field-spec.json), so the same
   provisioner run creates it. There is no separate script for it any more.
2. Apply the **complete replacement definition** —
   [`power-automate-flows/otp-verify-patched-definition.json`](./power-automate-flows/otp-verify-patched-definition.json).
   It is a whole workflow definition, not a patch: 59 actions, and the trigger is byte-identical,
   so the flow keeps its URL, id, owners, connections and run history.
   The procedure is [`OTP-VERIFY-SECURITY-PATCH.md`](./power-automate-flows/OTP-VERIFY-SECURITY-PATCH.md);
   it writes your rollback before it writes anything else.
3. **▶ REPORT** the export comparison: `npm run compare:export -- --export <zip> --package <dir>`.

**Done when** a fresh export reports zero differences, a code presented by a caller it was not
issued to is refused, and five wrong guesses return 429.

---

## ~~Session 3 — export the two unconfirmed flows~~ · ✅ DONE 2026-09-01 · SKIP

> ITEM-35 is RESOLVED and every one of the fourteen flows has since been exported and compared.
> Nothing in this session is outstanding. Kept as the record of how the exports were obtained.

Five of seven paste targets are confirmed present in the export set. Two are not, and pasting on
an unconfirmed id is the one failure in this estate that leaves no trace: a correct body lands in
a flow nothing calls, every repository check passes, and the live endpoint keeps serving the old
body.

In the same PowerShell window as Session 2. **First look, without writing anything:**

```powershell
.\scripts\export-power-automate-flows.ps1 -ListOnly
```

This prints every flow the signed-in account can see. Confirm both ids appear:

```
5e13db77-c1e1-4ed4-b109-cb5d9d247b49
21d4bfd3-f595-46fa-81bb-c29dabc12e7a
```

**Then export only those two** — there is no reason to re-export 58 definitions to obtain two:

```powershell
.\scripts\export-power-automate-flows.ps1 `
  -WorkflowId 5e13db77-c1e1-4ed4-b109-cb5d9d247b49,21d4bfd3-f595-46fa-81bb-c29dabc12e7a
```

The script uses `Get-Flow`, the maker cmdlet in `Microsoft.PowerApps.PowerShell` — the module you
already installed. It deliberately does not use `Get-AdminFlow`, which lives in
`Microsoft.PowerApps.Administration.PowerShell` and needs the admin role this path was built to
avoid.

**Expected.** Two rows — `CG_Verification_Confirmation_Endpoint` and `CG_Writeback_Endpoint`.

**If either returns no row, there are two possible reasons and they need different responses.**
`Get-Flow` returns only flows you own or co-own, so a flow owned solely by a colleague is absent
from a healthy environment. Before concluding the flow is gone, have its owner run the same
command, or have yourself added as a co-owner. Only if nobody can see it is the paste target for
that endpoint genuinely unknown — and then stop and report it rather than guessing a substitute.

**Done when.** Both ids appear in `-ListOnly`, and after the targeted export both have a file in
`docs/reference/flow-contracts/deployed/`. That directory holds 58 files today, so expect 60.

If the export prints `Nothing matched`, the ids were not in what this account can see — go back
to the ownership question above rather than passing `-IncludeAll`.

**▶ REPORT** the `Select-Object` output and `ls docs/reference/flow-contracts/deployed/ | wc -l`.

---

## ~~Session 4 — paste the seven portal packages~~ · ✅ DONE 2026-09-01 · DO NOT RE-RUN

> All six items are applied and verified byte-for-byte against their packages. Re-pasting a flow
> that already matches its package cannot improve it and can only introduce drift. **The
> redaction half still matters** — apply it before rotation (Session 5), or every regenerated
> token leaks on its first run. Kept as the record of what was pasted and how.

**Paste in this order.** It is the order the estate's dependencies require: nothing that consumes
a verification proof works until the pair that mints one does, and nothing reads back a
submission until submission writes one.

| # | Paste this file | Onto this flow | Flow id | Actions |
|---|---|---|---|---|
| 1 | `Portal_VERIFY_ECM_DOCS.designer-paste.json` | `CG_Verification_Endpoint` | `86897b2f-9770-4efa-8486-2642f24bb947` | 66 |
| 2 | `Portal_VERIFY_CONFIRM_ECM_DOCS.designer-paste.json` | `CG_Verification_Confirmation_Endpoint` | `5e13db77-c1e1-4ed4-b109-cb5d9d247b49` | 66 |
| 3 | `Portal_SUBMISSION_ECM_DOCS.designer-paste.json` | `CG_Submission_Endpoint` | `de9ef13b-ae4c-42b0-9afa-20e71a180759` | 70 |
| 4 | `Portal_UPLOAD_ECM_DOCS.designer-paste.json` | `CG_Upload_Endpoint` | `df7ddff1-9275-4f23-acf6-e169525f4e2f` | 48 |
| 5 | `Portal_STATUS_ECM_DOCS.designer-paste.json` | `CG_Status_Check_Endpoint` | `badb65d8-f472-407e-8975-c29d77b855d7` | 55 |
| 6 | `Portal_SUPPORT_ECM_DOCS.designer-paste.json` | `CG_Support_Endpoint` | `1b2c2e53-6c07-46a3-80b2-c43be1ef69db` | 47 |
| 7 | `Portal_WRITEBACK_ECM_DOCS.designer-paste.json` | `CG_Writeback_Endpoint` | `21d4bfd3-f595-46fa-81bb-c29dabc12e7a` | 58 |

All seven live in `docs/deployment/sharepoint/flows/designer-paste/`.

**Do not paste on these.** Each was named as a target by an earlier revision of the execution
guide. They still exist and the portal does not call them.

```
Portal_UBMISSION_ECM_DOCS   270fb295-b1de-40e2-b36d-889a61a887a0
Portal_UPLOAD_ECM_DOCS      ae4b2a44-2388-42c7-baaf-86de3d6fa664
UPLOAD_ECM_DOCS_PORTAL      9bd6724c-5a8f-4e74-9d3e-3c1eeaef2d06
Portal_Upload_HTTP          39d65c5b-5539-43de-aec6-52bfcd31bcc1
Portal_ECM_DOCS_STATUS      e21e7b9f-58c3-45be-bd47-6754ce6a895f
```

`Portal_ECM_DOCS_STATUS` is the trap worth naming: it has 13 actions to the live flow's 3, so it
looks far more like the real endpoint than the flow that is actually serving STATUS.

### The procedure, identical for all seven

1. Open the flow — **Power Automate → Edit**. Confirm the **modern** designer; the package format
   is rejected by the classic one.
2. **Declare the variables first.** Open the package's companion
   `<name>.variables.md` and add each **Initialize variable** action at the top of the flow, in
   the order listed. Power Automate accepts `Initialize variable` only at a workflow's top level,
   so these cannot travel inside the scope — pasting without them produces a definition the
   designer will not save.
3. Select every action **below the trigger** and delete it. **Keep the trigger.** A new trigger is
   a new URL, which invalidates any URL already in circulation.
4. Click **+ → Paste**, or `Ctrl+V` on the canvas, and paste the entire package file.
5. **Check the connections.** Every SharePoint and mail action arrives already wired. Nothing to
   re-pick unless the designer flags an action, which means the pasting account cannot use that
   connection.
6. **There is no CORS origin to edit.** The origin is read from `Flow Configuration` rows at run
   time. Listing it is Session 6, done once for the whole estate.
7. **Save.**

**If a save is refused** with `WorkflowOperationParametersExtraParameter`, a column the package
writes does not exist on the list. That means Session 1 did not complete for that list. Report
the exact message — it names the parameter.

**Why this also closes the redaction half of ITEM-22.** The four flows that leak the inbound URL
through `x-ms-igw-external-uri` and `x-ms-igw-raw-target` are STATUS, VERIFY, VERIFY_CONFIRM and
WRITEBACK — all four are in the table above. Every generated package blanks both headers, and
`npm run designerpaste` check 9b fails any package that stops doing so. Pasting performs the
redaction; no separate remediation step is needed.

**▶ REPORT** for each flow: its name, that it saved, and any designer warning.

---

## Session 5 — rotate every trigger token · closes ITEM-22 · **irreversible**

**Do this only after Session 4.** Redaction must precede rotation, or the regenerated tokens leak
by the same route the old ones did.

**This breaks every configured client until Session 6 completes.** Plan it as one continuous
piece of work, not across a break.

For each flow whose trigger URL is disclosed, in Power Automate: open the flow, open the **When
an HTTP request is received** trigger, and regenerate its URL. Record each new URL in a local
file — the values file Session 6 consumes. **That file must not be committed and must not be sent
to me.**

**Scope.** `npm run commission` and `npm run rotation` both count **43 signed URLs across 28
tracked files**, over 39 distinct workflows.

They used to disagree — 55 against 56 — and the disagreement was recorded here as unreconciled.
It is reconciled now, and neither number was right. A trigger signature is 43 base64url
characters, and this corpus glues prose straight onto the end of URLs (`…sig=XXXgetEmailsPOST`),
so both counters were matching greedily and indexing one credential under several strings.
Normalising to the 43 characters that are the credential brings both to the same figure.
**The exposure did not shrink; the count was wrong.** Rotate what the tenant holds, not what any
count says — these are counts of repository occurrences, not of live flows.

**Done when.** A scan of the tenant's flow URLs shares no token with this repository.

**▶ REPORT** the number of flows whose URL you regenerated. **Not the URLs.**

---

## Session 6 — configure both runtimes and list the origin · closes CFG-1, CFG-2, ITEM-8

### 6a — decide where the origin lives (ITEM-34)

`Flow Configuration` was created 2025‑10‑30, carries no description, holds one item unchanged in
over nine months, and is named by none of the 58 exported flows. It is dormant and unowned.
Before provisioning a column on it, decide: keep it, or move the control to
`DGO_EndpointRegistry`, which is adopted and specified.

If you keep it, Session 1 has already provisioned `ConfigValue` on it.

### 6b — list the origin

Add one row to `Flow Configuration` per origin the portal is served from:

| Column | Value |
|---|---|
| `Title` | `ALLOWED_ORIGIN_1` |
| `ConfigValue` | the portal's scheme and host, with no trailing slash |

The control **fails closed**: no rows, an unreadable list, or an unlisted origin yields an empty
header, which a browser rejects. Nothing breaks while it is empty — the portal simply cannot read
any response, which looks like total failure while every flow is behaving correctly.

### 6c — wire the endpoints

Create a values file on your machine — **never in the clone** — with one `KEY=value` line per
endpoint. `#` comments are allowed.

Runtime keys, written to `config/config.local.js`:

```
FETCH_ALL  DYNAMIC_ACTIONS  SINGLE_ASSIGNMENT  BULK_ASSIGNMENT
FETCH_ACTIVITIES  REFERENCE_DATA  GET_DOCS  FETCH_EMAIL_ATTACHMENTS
BULK_ASSIGNMENT_DIRECT  EMAIL  EMAIL_RELATED_TASK  AI_EMAIL_ANALYSIS
AI_DOC_ANALYSIS  AI_CHAT  OTP_GENERATE  OTP_VERIFY  SUBSIDIARY_ACTIONS  SCAN_INTAKE
```

Portal keys, written to `document-portal/config.local.js`:

```
SUBMISSION  UPLOAD  STATUS  SUPPORT  VERIFY  VERIFY_CONFIRM  WRITEBACK
```

The bare key is accepted, as are the `DGO_ENDPOINT_` and `PF_ENDPOINT_` prefixed forms. The four
runtime keys and two portal keys marked as the minimal-pilot set — `FETCH_ALL`,
`DYNAMIC_ACTIONS`, `SINGLE_ASSIGNMENT`, `BULK_ASSIGNMENT`, `SUBMISSION`, `UPLOAD` — are the ones
`npm run commission` will hold you to.

Then:

```bash
npm run setup -- --values ~/dgo-values.txt --force
npm run commission
npm run verify:endpoints
```

**Done when.** `npm run commission` no longer reports `Internal runtime: not configured` or
`Public portal: not configured`.

**A useful intermediate signal:** if the config files exist but carry no URLs, commission reports
`4 required endpoint(s) unwired` rather than `not configured`. Seeing that means the files were
written and the values were not read — check the key names in your values file.

**▶ REPORT** the full `npm run commission` output. It contains no URLs.

---

## Session 7 — verify the estate · closes nothing, proves everything

Run from the clone, after re-exporting so the sweep can see the new bodies:

```bash
npm run wiring
npm run designerpaste
npm run responsecontract
npm run triggers
npm test
```

**Expected after Sessions 4–6:** `npm run wiring` rises from `7/59 required operations, 1/7
endpoints` toward `59/59`. It cannot reach 59/59 until every target flow has been re-exported,
because the sweep measures exports, not the tenant.

Then the citizen-visible checks, each tied to an open item:

| Check | Proves | Item |
|---|---|---|
| Submit with one attachment; look for a row in `Portal Attachments` | attachments are actually sent | ITEM-12 |
| Request a code, then submit it | `sent` is truthful and a proof is minted | ITEM-13, ITEM-26 |
| Track an unknown reference, then a real reference with the wrong email | both return a materially identical 404 | ITEM-11 |
| Assign one correspondence against a known reference | the `RefIDD` index works — expect 200, not 404 | ITEM-31 |
| Flag a document against a known reference | same, on the ops list | ITEM-33 |
| Open the portal in a browser and read any response | the origin is listed | ITEM-8 |

**▶ REPORT** the output of all five commands and the result of each of the six checks.

---

## Session 8 — the manual gates

These are not commands.

| Gate | What it needs | Owner |
|---|---|---|
| ~~**MANUAL-1**~~ | ✅ **RESOLVED 2026-09-08.** The agency approved and supplied the matrix: 45 rows, 16 categories, in [`../reference/approved/category-matrix.csv`](../reference/approved/category-matrix.csv). Nothing to do. | agency |
| **MANUAL-2** | Remove the test rows commissioning wrote to the Correspondence list, and decide whether to reset the reference sequence or record the offset. Clearing rows does not reset the counter. | operator |
| **MANUAL-3** | Run the browser suite against the **deployed** hostname, not localhost. In a container, set `DGO_CHROME_PATH` to an installed browser; the pinned Playwright build and a pre-installed one differ. | operator |
| ~~**MANUAL-4**~~ | ✅ **RESOLVED 2026-09-08.** Decided: identity lives in `DGO_UserDirectory`, not in this repository, and configuration carries role mailboxes only — `npm run test:orgrouting` exits non-zero if a personal address reaches it. The **posture** decision is not this one and is still open as **G-04**. | agency |

---

## What no session here closes

Four items need a person with knowledge or authority, not a keyboard sequence.

| Item | Why no procedure can close it |
|---|---|
| **G-04** | Server-side enforcement must be implemented in each flow. It is development work in Power Automate, not a step. |
| **ITEM-7** | Seven third-party API keys, across seven provider consoles. Revoke the old key **last**, after the replacement is live, with someone watching dependent services. |
| **ITEM-9** | 27 of 58 flows have no stated purpose. It must come from knowledge of the estate; deriving it from trigger and list names would be inventing it. |
| **ITEM-18** | The upload SHA-256. The environment's licensing for an inline-code action is unconfirmed, and the one worked example in this repository fails every upload — it must be written from scratch, not ported. |
| **ITEM-25** | Three columns must be confirmed in the tenant, and a decision taken on whether dispatch and archive persist server-side at all. |

---

## If something fails

Report it rather than working around it. Three failures in particular mean stop:

- **A save refused with `WorkflowOperationParametersExtraParameter`** — a column is missing.
  Session 1 did not finish for that list. The parameter name is in the message.
- **A flow id from Session 3 that returns no row** — the paste target for that endpoint is
  unknown, not merely unexported. Do not guess a substitute.
- **`npm run wiring` falling** rather than rising after a paste — something was pasted onto the
  wrong flow. Stop before pasting anything else.
