# Exact changes to each existing portal flow

Copy-paste ready. One section per flow. Each names the flow, its id, what to delete, what to
paste, and how to confirm it landed.

The complete replacement bodies are in
[`designer-paste/`](./designer-paste/). Each file is a Power Automate **modern designer clipboard
package** — one scope node, already carrying the standard variable block, `Scope_Global_*`,
`Scope_Catch_*`, `Scope_Finalize_Response_*` and `Scope_Flow_Data_Capture`. All **seven** — one
per target flow, `Portal_Verify` and `Portal_Verify_Confirm` counted separately — score **100%**
on `flow-standard.json`.

---

## How to paste a package

Same six steps for every flow.

1. Open the flow in **Power Automate → Edit**. Confirm the designer is the **modern** one — the
   package format below is rejected by the classic designer.
2. Select every action **below the trigger** and delete it. The trigger itself is kept: its URL is
   already published to the portal, and a new trigger is a new URL.
3. Click **+ → Paste** (or `Ctrl+V` on the canvas).
4. Paste the entire contents of the package file.
5. **Check the connections.** Every connector action ships bound in `allConnectionData`, so the
   SharePoint ones arrive already wired to `3f1943c5955a4cb8b301e8f22f2b590d` — the one SharePoint
   connection the tenant's own flow records name. Nothing to re-pick unless the designer flags an
   action, which means the pasting account cannot use that connection.

   The **three mail actions** are the exception and must be picked by hand:
   `Send_Otp_Email` (VERIFY), `Send_Support_Acknowledgement` (SUPPORT) and `Send_Otp_Mail`
   (`DGO_OTP`). They ship `REPLACE_WITH_OFFICE365_CONNECTION_ID`, because the tenant carries three
   Office 365 Outlook connections and the flow records do not say which one sends this mail. Pick
   the sending mailbox deliberately — it is the From address citizens and officers will see.

   A connection id names a resource in the environment; the credential lives in the connection
   itself, so none of this puts a secret in the repository.
6. **Set the CORS origin.** Every package ships `Access-Control-Allow-Origin: https://your-host`
   in its `Response_*` action. Replace `https://your-host` with the portal's real origin. Until
   this is done no browser can read any response — see open item 8.

Then re-export, redact and sweep per [`../remediation/EXECUTION.md`](../remediation/EXECUTION.md).

---

## 1 · `Portal_ECM_DOCS_STATUS`

```
id      e21e7b9f-58c3-45be-bd47-6754ce6a895f
paste   designer-paste/Portal_STATUS_ECM_DOCS.designer-paste.json
from    52 actions, 44% conformance
to      58 actions, 100% conformance
```

**Delete everything below the trigger.** This flow is a clone of the submission flow — its
`Scope_Process_Submission` composes a filename, decodes base64 and creates a file in the document
library. That is the correct body for SUBMISSION and the wrong body for a status read. There is
nothing here to extend.

Specifically removed by the replacement:

| Deleted | Reason |
|---|---|
| `Scope_Process_Submission` and everything in it | STATUS is a read. `Create_file` and `Update_file_properties` are inherited from the flow this was copied from. |
| `Get_items_Tasks` against `Global Tracking Queue` | Boundary. An anonymous public endpoint must not read the internal task register. |
| The bolted-on `Switch` with `Case_load` / `Case_submit` | It runs after the submission scope has already created a file. |

**Behaviour after the change**

- Reads `referenceId` and exactly one of `verification` or `email`. Both, or neither, is a `400`.
- Looks up `Portal Registry` on `ReferenceId` — indexed and `enforceUnique` — and on the owning
  `SenderEmail`. An unknown reference and a wrong-email pairing return the **same** `404`.
- When a proof is presented the email comes from the **proof row**, never from the request body.
- The proof is consumed only after the record is found, so a mistyped reference does not burn it.
- Returns the contract's allow-listed projection only, with the timeline ordered by `AtUtc`.

**Confirm:** an unknown reference returns `404`; a correct pair returns `200` with a `record`;
`npm run wiring` shows STATUS at 7/7.

---

## 2 · `Portal_ECM_DOCS_SUPPORT`

```
id      1b2c2e53-6c07-46a3-80b2-c43be1ef69db
paste   designer-paste/Portal_SUPPORT_ECM_DOCS.designer-paste.json
from    52 actions, 44% conformance
to      50 actions, 100% conformance
```

**Delete everything below the trigger.** Same clone as STATUS — it runs
`Scope_Process_Submission` and files a document instead of opening a case.

**Behaviour after the change**

- Requires `name`, `email`, `topic`, `message`. Missing any is a `400`.
- Mints `CASE-` plus six characters from `ABCDEFGHJKLMNPQRSTUVWXYZ23456789` — no `0/O/1/I`, so a
  citizen reading it aloud to the helpdesk hits no ambiguity — and re-rolls on a collision.
- `aboutReference` is stored exactly as supplied and is **not** validated against the registry. It
  is an unverified hint; validating it would turn it into a claim of ownership.
- The acknowledgement email is sent after the case row exists, and its outcome — `sent` or
  `failed` — is written to `Portal Outbox Receipts` either way. **A failed send does not fail the
  request**, because the case is real once the row exists and a `500` would make the citizen file
  a duplicate.
- Returns `{ "caseRef": "CASE-XXXXXX" }`.

**Confirm:** a case appears in `Portal Support Cases` with `Status = open`, a receipt row appears
in `Portal Outbox Receipts`, and the reference in the response matches the row's `Title`.

---

## 3 · `Portal_UBMISSION_ECM_DOCS`

```
id      270fb295-b1de-40e2-b36d-889a61a887a0
paste   designer-paste/Portal_SUBMISSION_ECM_DOCS.designer-paste.json
from    52 actions, 44% conformance
to      73 actions, 100% conformance
```

This flow's body does the right *kind* of job, but it files a document rather than registering a
row, and it mints a reference that cannot be unique. Replace it.

**What changes materially**

| Was | Now |
|---|---|
| `concat('NITDA-',yyyy,'-',last 3 digits of ticks())` — 1000 values a year, collision more likely than not after ~37 submissions | Minted from `Portal Sequence Counters` under a lock token, zero-padded to 5 — `NITDA-2026-00001` |
| Reference composed and returned, never stored | Written to `Portal Registry/ReferenceId` **and** `Title` |
| `senderName`, `senderOrganisation`, `senderOrganisationType` read flat | Read from the nested `sender.name` / `sender.organisation` / `sender.organisationType` the portal actually sends |
| `proof` | `verification` — the field name the portal actually sends |
| One inline base64 file | One `Portal Upload Tickets` row per declared attachment, returned as `uploads[]` |

**The lock:** `Claim_Sequence_Counter` writes a token, `Get_Sequence_Counter_Confirm` re-reads it,
and `Condition_Sequence_Lock_Held` proceeds only if the token is still ours. Two flows racing
cannot both mint — the loser gets `409` and the portal retries.

**Confirm:** two submissions produce consecutive references; both appear in `Portal Registry`;
each declared attachment produces a `Portal Upload Tickets` row; the response carries
`referenceId` and one `uploads[]` entry per attachment.

---

## 4 · `Portal_UPLOAD_ECM_DOCS`

```
id      ae4b2a44-2388-42c7-baaf-86de3d6fa664
paste   designer-paste/Portal_UPLOAD_ECM_DOCS.designer-paste.json
from    33 actions, 33% conformance
to      51 actions, 100% conformance
```

Note this flow has **no `Scope_Global`** today — its top level is a bare `Condition` and a
`Response`. Delete both along with everything else below the trigger.

**Behaviour after the change**

- Reads the ticket from the **`X-Upload-Ticket` header**, not from the body.
- Refuses a ticket that is missing (`401`), unknown, already redeemed, or expired (`403`).
- Compares the declared size against `Content-Length` and refuses a mismatch with `422`,
  marking the ticket `refused` so it cannot be presented again.
- Stores the bytes under the ticket's `StoredName`, writes `Portal Attachments`, marks the ticket
  `Redeemed`.
- Answers `{ "stored": true, "attachmentLink": "…" }` — and **`stored:false` when it did not
  store**, which the portal now checks separately from `ok`.

> **INT-002, precisely.** The contract asks UPLOAD to verify the received bytes against the
> declared SHA-256. **The size half is implemented in this package. The digest half is not** — and
> the reason is narrower than "impossible", so state it accurately:
>
> - **WDL expressions alone cannot compute SHA-256.** There is no hashing function and no bitwise
>   operators. That much is the same wall SC-003 hits for hashing one-time codes.
> - **Power Automate can still do it, via an `Execute JavaScript Code` action.** The estate's own
>   design already says so: `docs/deployment/power-automate-flows/04-portal-upload` specifies
>   `Verify_Upload_Checksum` as exactly that.
> - **No deployed flow in this estate uses one.** `JavaScriptCode` appears in none of the 57
>   exported definitions.
>
> So this is an unclosed gap, not an unachievable property. It is left out of the package
> deliberately rather than shipped untested: inline code carries a licensing dependency, and
> hashing raw uploaded bytes inside it needs proving against a real file before an operator points
> it at citizen uploads. `DeclaredSha256` is carried onto the `Portal Attachments` row so the check
> can be made out of band meanwhile. **Do not claim the digest is verified until the action exists.**
> See open item 18.

**Confirm:** a redeemed ticket cannot be redeemed twice; a size mismatch answers `422` and stores
nothing; a good upload produces a `Portal Attachments` row with `Status = stored`.

---

## 5 · `Portal_Verify` and `Portal_Verify_Confirm`

```
ids     86897b2f-9770-4efa-8486-2642f24bb947   (Portal_Verify)
        3b69aa71-ffed-4956-9d20-2aa3021a8da0   (Portal_Verify_Confirm)
paste   designer-paste/Portal_VERIFY_ECM_DOCS.designer-paste.json          → Portal_Verify
        designer-paste/Portal_VERIFY_CONFIRM_ECM_DOCS.designer-paste.json  → Portal_Verify_Confirm
from    57 / 67 actions, 78% / 100% conformance
to      69 actions, 100% conformance
```

**Two flows, two files, one body.** The files are identical apart from the node id; there is one
per target flow so the set is complete by inspection rather than by reading a note. Each flow keeps
its own trigger URL, so `VERIFY` and `VERIFY_CONFIRM` stay separately addressable — the portal
calls them separately and treats one configured without the other as verification being
unavailable.

**How each call knows which half it is.** Not from `action` — `document-portal/js/core.js` sends
none: `verifyRequest` posts `{ email }`, `verifyConfirm` posts `{ email, code }`. The body routes on
the **code**: a request carrying one is a verify, a request without one is a generate. An explicit
`action` still wins when a caller supplies it.

> **This was wrong until 2026-08-22.** The body switched on `action` and defaulted an absent one to
> `generate`, so *both* calls generated: entering a code mailed a fresh code, `verification` came
> back undefined, and no proof was ever minted. Verification could never complete, and `WRITEBACK`
> — which requires a proof on every call — could never be used at all. `npm run designerpaste` now
> fails any portal package whose Switch routes on a field the portal never sends.

**What changes materially**

| Was | Now |
|---|---|
| `identifier` | `email` — the field the portal sends |
| `otp_code` | `code` — the field the portal sends |
| Response omitted `sent` | **`sent` is present and truthful**, taken from the mail action's real outcome |
| `OTP_Transactions` on the internal activity-tracking site | `Portal OTP Codes` on GDDC — closes the boundary crossing where a public endpoint wrote into the internal sign-in store |
| No outbox receipt | One `Portal Outbox Receipts` row per code sent, recording that a code was sent and **never the code** |

> **Open item 13 closes here.** The portal reads `data.sent === true`; a response without the field
> told a citizen "Could not send the code" after a code had been sent. `Set_variable_varData_Verify_Sent`
> now sets `sent` from `actions('Send_Otp_Email')?['status']`, so it is true when and only when the
> mail action succeeded.

**Also unchanged, deliberately:** the code is compared with `equals()`, which is **not**
constant-time and cannot be made so in WDL. The protection is the lifecycle — five-minute expiry,
single use, five-attempt cap, then the challenge is consumed. See open item 19.

**Confirm:** `generate` returns `sent: true` and mails a code; a wrong code increments `Attempts`
and answers `401`; five wrong codes consume the challenge; a right code returns
`verification` and creates a `Portal Verification Proofs` row.

---

## 6 · `Portal_Status_Enquiry` — delete, do not patch

```
id      badb65d8-f472-407e-8975-c29d77b855d7
```

Three `Initialize variable` actions and no body. It scores 0% on the build standard because it has
none of it, and it has none of it because there is nothing there. It is attributed to STATUS
alongside `Portal_ECM_DOCS_STATUS`, which is the flow that actually receives traffic.

**Confirm which of the two the portal's `STATUS` URL points at before deleting either.** That is
open item 21 — ten minutes reading the `workflows/<32-hex>/` segment out of each trigger URL.

---

## 7 · `Portal_ECM_DOCS_WRITEBACK` — new flow

```
id      none yet
paste   designer-paste/Portal_WRITEBACK_ECM_DOCS.designer-paste.json
to      61 actions, 100% conformance
```

Nothing to delete. Create a new flow with an **HTTP request** trigger, paste the package, then:

1. Copy the new trigger URL.
2. Add it to the portal's `config.local.js` as `WRITEBACK`.

`document-portal/config.example.js` already declares the empty slot, and
`PF.intake.writebackAvailable()` keeps the write-back UI hidden until a URL is present — so the
portal is safe to deploy before this flow exists, and lights up when it does.

**Behaviour**

- Every call requires a `verification` proof. There is no unverified path.
- The proof is read but **not consumed** until ownership, action and body have all passed — a
  mistyped reference or a too-short response does not burn it.
- Ownership is the proof's email against `SenderEmail`; a miss and a mismatch answer the same
  `404` STATUS uses.
- `action` outside `respond` / `note` / `withdraw` is `400`, never a silent `200`.
- Body minimums: `respond` ≥ 10, `note` ≥ 5, `withdraw` optional.
- Appends `Portal Status Timeline` with `Actor = Submitter` and the same labels the portal's
  device-only path writes, so the citizen sees one wording either way.
- **Only `withdraw` changes `Portal Registry/Status`.**
- Appends one `Portal Audit Events` row on every call, carrying the action and the body's
  **length** — never the body.

**Confirm:** a response and a note appear on the timeline with `Actor = Submitter` and leave
`Status` unchanged; a withdrawal sets `Status = withdrawn`; the same proof twice answers `401` the
second time; `npm run wiring` reaches **59/59**.

---

## Order

| # | Flow | Why here |
|---|---|---|
| 1 | `Portal_Verify` + `Portal_Verify_Confirm` | Everything else can demand a proof; nothing can issue one until these work. Also closes the `OTP_Transactions` boundary crossing. |
| 2 | `Portal_UBMISSION_ECM_DOCS` | Nothing to read back until the registry has rows. |
| 3 | `Portal_UPLOAD_ECM_DOCS` | Needs the tickets SUBMISSION issues. |
| 4 | `Portal_ECM_DOCS_STATUS` | Needs rows and a timeline to project. |
| 5 | `Portal_ECM_DOCS_SUPPORT` | Independent; any time after 1. |
| 6 | `Portal_ECM_DOCS_WRITEBACK` | Needs a record to write back to, and a proof to authenticate with. |

Re-export, redact and sweep after each — three commands, in `EXECUTION.md`.

---

## Re-measure

```bash
npm run designerpaste   # 6 packages, 0 failures, all 100%
npm run wiring          # 0/59 -> 59/59 as the visits land
npm run flowstandard    # portal median -> 100%
npm run triggers        # 0 unreconciled
```
