# Notification estate — full-scope assessment

**Date** 2026-09-09 · **Baseline** `claude/system-remediation-gaps-ahpmsy` at `45a1c7c` · **Scope** both platforms, frontend and backend

> **Sole basis.** Every statement here is derived from this branch. No figure is carried over from
> the September intake documents ([`NOTIFICATION_ESTATE_EVIDENCE_REGISTER_2026-09-02.md`](./NOTIFICATION_ESTATE_EVIDENCE_REGISTER_2026-09-02.md),
> [`NOTIFICATION_ESTATE_EXECUTION_SUMMARY_2026-09-02.md`](./NOTIFICATION_ESTATE_EXECUTION_SUMMARY_2026-09-02.md)),
> whose counts are superseded, and nothing outside this repository is used as evidence or as a
> reference. Where a number appears below, the command that produces it is named, so it can be
> re-derived rather than believed.

> **What this adds to the matrix.** `config/notification-matrix.config.js` answers "is each
> required message sent, and to whom". It is measured per row. This assessment measures the
> estate *across* rows — channels, ledger coverage, connector governance, template wiring,
> single points of failure — which is where the findings below live. Four of them are not
> expressible as a row, which is why none of them was visible before.

---

## 1. The estate in numbers

Every figure from `npm run notifications`, `node scripts/verify-notification-matrix.mjs`, or a
direct read of the named directory.

| Measure | Value |
|---|---:|
| Deployed flow definitions (`docs/reference/flow-contracts/deployed/`) | 77 |
| Live mail actions across those definitions | 106 |
| Flows that send at least one message | 54 |
| Addressed solely to the person concerned | 22 |
| Addressed to a fixed mailbox | 81 |
| Resolved at run time but copying a fixed mailbox | 3 |
| Triggers — Request / Recurrence / OpenApiConnection | 72 / 4 / 1 |
| Mail actions carrying an attachment | 65 |
| Mail actions writing a delivery receipt | 15 |
| Replacement packages — portal / internal | 7 / 10 |
| Mail actions in those packages | 3 / 11 |
| Required notifications in the matrix | 39 |
| … provisioned | 16 |
| Preconditions | 5 |
| Surplus entries | 6 |
| Email templates | 20 |
| Compose tokens under contract | 128 |
| Endpoint contract keys | 19 |

The two lines that matter most sit next to each other: **106 messages leave this estate, and 22
of them are addressed only to the person they concern.**

---

## 2. Channels — what physically exists to carry a message

Five, of which three work, one is unwired, and one is advertised but absent.

| Channel | Carrier | State |
|---|---|---|
| Email — Office 365 Outlook | `shared_office365`, 119 `SendEmailV2` actions | Live. The governed channel. |
| Email — Mail connector | `shared_sendmail`, 1 `SendEmailV3` action | Live, **ungoverned** — see F-02 |
| In-app | `core/notification-center.js` | Live, device-local only |
| Ledger | `Portal Outbox Receipts` list | Live, 15 of 106 sends — see F-01 |
| SMS | none | **Advertised in two places, no connector** — see F-05 |

Connector census across the deployed corpus: `shared_sharepointonline` 835 references,
`shared_office365` 281, `shared_flowmanagement` 54, `shared_office365users` 24,
`shared_onedriveforbusiness` 10, `shared_sendmail` 2. There is no SMS or telephony connector of
any kind.

---

## 3. Frontend — internal platform (DGO R11.6 runtime)

### 3.1 Two notification concepts, deliberately separated

`core/notification-center.js` is a **device-local UI feed**: `localStorage` under its own key, a
200-entry cap, four tones, unread count, dismiss, subscribe. Its own header explains why it is not
`State.notifications` — that array is a governed domain record set (reminders raised against a
task and addressed to an assignee), and mixing an interaction log into it would put UI chatter in
the audit trail and domain records in a dismissable inbox.

The separation is correct and worth preserving. Its consequence is that **nothing in the
notification centre leaves the device.** It is a record that the user was told, not that anyone
was notified.

Three modules write the domain record set: `modules/orchestrator.js`, `modules/fasttrack.js`,
`modules/acknowledgment.js`.

### 3.2 Declared actions against implemented operations

Nine action names in the two governed configs concern notification:

- `config/action-ownership.config.js` — `remind-assignee`, `set-reminder`, `executive-escalate`
- `config/module-boundaries.config.js` — `notify-owner`, `remind-assignee`, `escalate-non-ack`,
  `escalate-priority`, `escalated`, `executive-escalate`

The carrier they route to is `DGO_DYNAMIC_GLOBAL_ACTIONS`. Its switch on
`@outputs('Compose_Dynamic_Operation')` implements **four** cases — `Case_Dynamic_Update_Flag`,
`Case_Dynamic_Update_Task`, `Case_Dynamic_Transition`, `Case_Dynamic_Audit` — with an empty
`default`, and the surrounding condition sets status **501** for anything else.

**None of the four is a notification.** Every declared notify/remind/escalate action therefore
falls to a 501. This is the mechanism behind the four `LOCAL_ONLY` rows and RN-022
`UNIMPLEMENTED`; stated once here as a single cause rather than four symptoms. See F-04.

### 3.3 Clocks the frontend starts

`config/assignment-cascade.config.js` sets `defaultAckDays: 2` and a `dueDays` default of 5, and
aliases both across four field spellings each so a routing row can override them. The cascade
starts these clocks on every assignment.

Until `AUTO_SCHEDULED_SWEEP` existed nothing read them on time — they were evaluated only when a
FastTrack or executive view happened to render. That is now covered (§5.3), and the coverage
depends entirely on one flow.

---

## 4. Frontend — public portal

The portal is anonymous and holds no accounts, so **email is the only channel it has to a
submitter**. There is no in-app fallback, no account inbox, no SMS.

### 4.1 What it promises

Seven statements commit the registry to contacting a citizen. Cited at file and line:

| Promise | Location |
|---|---|
| "A confirmation is on its way to \<email\>" | `document-portal/js/submit.js:611` |
| "a tracking ID is issued to you and to your email address" | `document-portal/index.html:108` |
| "The outcome is … emailed to you" | `document-portal/index.html:111` |
| "Decision issued. Outcome sent to your email address." | `document-portal/js/data.js:58` |
| "Tracking IDs are emailed to the address used at submission" | `document-portal/js/data.js:150` |
| "the tracking ID from your confirmation email" | `document-portal/js/track.js:25` |
| "use the email address the confirmation was sent to" | `document-portal/js/track.js:227` |

`scripts/verify-notification-matrix.mjs` asserts six of these still exist on every run, so a
promise cannot be deleted without the matrix noticing, nor kept without a row holding it.

### 4.2 Statuses a citizen can be moved into

`config/status-vocabulary.config.js` governs seven statuses across four stages: `received`,
`validation`, `review`, `action-required`, `approved`, `declined`, `withdrawn`.

The matrix requires mail for the stage-4 terminal decisions and for `action-required`. `received`
and `validation` are deliberately excluded — a submitter can see them by tracking — and that
judgement is recorded in `tests/notification-matrix.test.mjs` rather than left implicit.

---

## 5. Backend — the deployed flow estate

### 5.1 Where the mail goes

| Recipient | Actions |
|---|---:|
| `dgsRegistry@nitda.gov.ng` | 57 |
| `hkani@nitda.gov.ng` | 17 |
| `dgsregistry@nitda.gov.ng` (lower case, same mailbox) | 6 |
| `dgs@nitda.gov.ng` | 1 |
| **Fixed total** | **81** |
| Resolved at run time | 25 |

63 of the 81 fixed sends — 78% — go to one shared registry mailbox in two spellings.

### 5.2 Dependence on one person's mailbox

17 actions are hard-coded to `hkani@nitda.gov.ng`, and 2 more append it to a dynamically resolved
address. **19 mail actions across 9 flows** depend on one named individual:

`Bulk Assign Direct` (6), `Web - Email Task Created` (5), `Global_Gap_Remediation_Provisioning`
(2, appended), `Deployed Bulk Task Assignment_Create Task`, `Get Correspondences`,
`Portal_UPLOAD_ECM_DOCS`, `UPLOAD_ECM_DOCS_PORTAL`, `Web - Get Tasks GET SWITCH`,
`Web - Task Update` (1 each).

`config/notification-delivery.config.js` already names this address in
`prohibitedFixedPersonalRecipients`, so the policy forbids what the estate does 19 times. See F-06.

### 5.3 The scheduled carriers

Four Recurrence triggers. Only one serves the platform:

| Flow | Sends | Purpose |
|---|---:|---|
| `AUTO_SCHEDULED_SWEEP` | 8 | Acknowledgement overdue, due breached, retry, outbox alert, approved, declined, action-required, support reply |
| `04 - GOV - Audit HTTP Flow Registry Flow Update` | 6 | Registry health — stale and failure alerts, reminders, escalation, recovery |
| `08 - GOV - Discover and Register HTTP Consumers` | 3 | Registry health |
| `06 - GOV - Registry Exception` | 2 | Open registry exceptions (RN-039) |

The three governance flows notify about the registry's own health and address the registry
mailbox. **`AUTO_SCHEDULED_SWEEP` is the entire clock of the platform**, and PRE-2 qualifies nine
matrix rows on its existence — RN-002, RN-003, RN-004, RN-008, RN-013, RN-014, RN-026, RN-027,
RN-035. If it is disabled, those nine go dark with no other symptom. See F-07.

### 5.4 What is attached to outbound mail

65 of 106 mail actions carry an attachment: roughly 30 flow-run records, 13 execution reports, 1
response payload, and the remainder document or report content. Every one of those goes to a fixed
internal mailbox. The volume is a standing obligation on that mailbox and the reason SN-001 and
SN-006 exist.

### 5.5 The delivery ledger, and how little it covers

`Portal Outbox Receipts` is the estate's record that a message was sent. Six flows write to it —
`AUTO_SCHEDULED_SWEEP`, `CG_Support_Endpoint`, `CG_Verification_Endpoint`,
`CG_Verification_Confirmation_Endpoint`, `Global_Gap_Remediation_Provisioning`,
`Portal_Datta_Architecture_Provisioning`.

**48 of the 54 mail-sending flows write no receipt, covering 91 of the 106 mail actions.** For
those 91, the only evidence a message was sent is Power Automate run history, which expires. See
F-01.

---

## 6. Backend — the replacement packages

The paste packages are what the operator deploys next, and they are a different estate from the
one running today:

| Set | Packages | Mail actions | Addressed dynamically |
|---|---:|---:|---:|
| Portal (`docs/deployment/sharepoint/flows/designer-paste`) | 7 | 3 | 3 of 3 |
| Internal (`docs/deployment/internal/flows/designer-paste`) | 10 | 11 | 10 of 11 |

**13 of 14 sends in the replacement packages resolve their recipient at run time**, against 25 of
106 live. The recipient defect is substantially fixed in what is about to be deployed and not in
what is running — which is what PRE-5 tracks, and why the endpoint URL currently decides whether a
citizen's verification code reaches the citizen or the registry.

The two `REGRESSION` rows are the counter-current: RN-009 and RN-025 are messages the deployed
estate sends and the replacement packages do not.

---

## 7. Specifications

### 7.1 The email template library

20 templates — 12 internal, 8 portal — at release `nitda-ecm-ops-email-templates/2.1.1-remediated`,
640 px container, with a 128-token contract in
`docs/deployment/notification-instrument/email-templates/TOKEN_CONTRACT.md`.

The contract is well formed: every dynamic value is read as
`@{coalesce(outputs('Compose_Name'),'<fallback>')}`, so a flow that sets nothing still renders a
complete email and a literal `@{...}` never reaches a recipient.

**No flow definition and no platform module references any template id.** Of the 20 ids, 2 appear
anywhere outside the instrument directory, and both appear in the same file — the `MandatoryTokens`
map in `config/notification-delivery.config.js`. Eight deployed flows compose their HTML inline
instead. See F-03.

### 7.2 Delivery controls

`config/notification-delivery.config.js` fixes the service mailbox, requires idempotency keyed on
`requirementId + entityId + eventVersion + recipient`, and exports `validateNotificationInput()`,
which refuses a send when the recipient is not a valid address, when a template's mandatory tokens
are missing, when a token carries a forbidden fallback (`000000`, `REF-UNSPECIFIED`, `#`,
`(subject not supplied)`, `Designated Officer`), or when the recipient is a prohibited personal
mailbox.

Two things are declared undecided rather than defaulted, which is the right treatment: `retry`
carries `maxAttempts: null` with `decisionRequired: true`, and `recurrence.enabled` is `false`
pending tenant deployment.

The validator is a library. Nothing in the flow estate calls it — it cannot, being client-side
JavaScript — so it governs what the platform composes, not what a flow sends.

### 7.3 Lists carrying notification state

`Portal Outbox Receipts` (delivery ledger), `Portal Flow Telemetry` (run records),
`Portal Audit Events` (audit trail), and `DGO_HTTPFlowRegistryExceptions` (governance exceptions,
with the `AssignedToEmail` column and `Open Exceptions` view that RN-039 rests on).

### 7.4 The tenant evidence gate

`docs/deployment/notification-instrument/tenant-execution/` plus `npm run tenant:validate`. Its
defaults are deliberately unsafe-to-pass — decisions `BLOCKED`, inventory `NOT_CAPTURED`, zero
results. It currently reports all 39 rows without a tenant result, rollback not rehearsed, and
production authorisation not approved. `tests/tenant-notification-evidence.test.mjs` holds the pack
in step with the matrix: one acceptance case per row, count derived from the matrix length.

---

## 8. The matrix as a control

39 rows, each carrying the obligation it rests on and the evidence for its state. The `status` on
each is a claim recomputed from the artifacts on every run; declared and derived disagreeing fails
the build in either direction. Five preconditions sit above the rows because each distorts a whole
class. Six surplus entries carry sends the estate makes that nothing obliges.

Current distribution: 16 provisioned, 9 absent, 6 misaddressed, 4 local-only, 2 regression, 2
unimplemented.

The design is sound and is the reason the findings below could be found at all. Its limit is that
it measures **per row**, so a defect that spans rows — a ledger that covers 15 of 106 sends, a
connector nothing governs, a template library nothing loads — has no row to appear in.

---

## 9. Findings

New to this assessment unless marked. Ordered by consequence.

**F-01 · The delivery ledger covers 15 of 106 sends.** 48 of 54 mail-sending flows write no
receipt. For 91 mail actions the only evidence of delivery is run history, which expires. Any
future claim that a message was sent is unverifiable for 86% of the estate. *Owner: platform
technical owner.*

**F-02 · A second mail connector is outside every connection control.** `shared_sendmail` carries
one `SendEmailV3` in `Web - Email To Task Processing`. The sign-off assertion and the PRE-1 naming
check both read `shared_office365` connections only, so the identity this send authenticates as is
asserted nowhere. *Corrected in part at `45a1c7c`* — the extractor now reads both parameter
schemas and SN-003 states the facts — *but the governance gap is open.* *Owner: governance owner.*

**F-03 · The template library is complete and unwired.** 20 templates and a 128-token contract,
referenced by no flow and no module. Eight flows compose HTML inline instead. Either the library
becomes the source of outbound HTML or it is a design artifact being maintained for nothing.
*Owner: platform technical owner.*

**F-04 · Every declared notification action falls to a 501.** Nine notify/remind/escalate action
names are declared across two governed configs; the carrier implements four operations, none of
them a notification. This is the single cause behind four `LOCAL_ONLY` rows and RN-022. *Owner:
platform technical owner.*

**F-05 · SMS is offered to users and cannot work.** The login experience renders a
"Phone (SMS)" tab (`core/welcome-experience.js`), and the OTP trigger contract advertises
`channel: 'sms'`. There is no SMS connector anywhere in the estate. A user choosing that tab is
choosing a channel that does not exist. RN-033 records the channel as `UNIMPLEMENTED`; what is new
here is that the choice is presented in the UI rather than only in a contract. *Owner: platform
technical owner.*

**F-06 · 19 mail actions depend on one person's mailbox.** Across 9 flows, and
`prohibitedFixedPersonalRecipients` already forbids the address. The estate does not stop working
when that person leaves — it keeps sending, to a mailbox nobody reads. *Owner: agency.*

**F-07 · Nine matrix rows rest on one flow.** `AUTO_SCHEDULED_SWEEP` is the platform's only clock.
PRE-2 asserts its presence, which is the right control; what has no control is its *health* — a
sweep that runs and fails silently satisfies the assertion. *Owner: operational owner.*

**F-08 · 65 of 106 sends carry an attachment to a fixed internal mailbox.** Largely run records
and execution reports. SN-001 and SN-006 hold the open decisions; the aggregate volume is recorded
here because no single entry shows it. *Owner: agency, alongside MANUAL-4.*

**F-09 · 78% of fixed sends concentrate on one mailbox, in two spellings.** 63 of 81. The two
casings are the same mailbox but count separately in every by-address report, which will mislead
anyone reading a census without noticing. *Owner: platform technical owner.*

**F-10 · Nothing in this repository proves a message was delivered.** Every status is derived from
definitions and code. A correctly addressed `SendEmailV2` in a definition is not evidence that
anything arrived. This is the gate the tenant pack exists to close, and it is still
`NOT_CAPTURED`. *Owner: operational owner.*

---

## 10. What is not a gap

Recorded because each looks like a defect and is not, and re-finding them wastes a reviewer's time.

- **A `coalesce` fallback is not a misaddressed send.** `coalesce(X, 'dgsRegistry@…')` reaches one
  recipient — the right person when known, the registry when not. Five sends in `04 - GOV` have
  this shape and are correctly counted as dynamic. Only a *semicolon-joined* literal reaches both,
  and only that is counted as mixed.
- **A fixed recipient is correct for two rows.** Telemetry capture (RN-025) and scan intake
  (RN-029) are addressed to a mailbox by design.
- **The portal's identical 404 is deliberate.** Status read-back returns a byte-identical response
  for unknown reference, wrong address and expired proof, so no template may confirm or deny that a
  reference exists.
- **`received` and `validation` generate no mail on purpose.** A submitter sees them by tracking.
- **The notification centre not leaving the device is by design,** not an incomplete delivery path.

---

## 11. Limits of this assessment

- **Static only.** Derived from definitions, configuration and source on one branch. No flow was
  run, no mailbox inspected, no message traced. Where this says a flow sends to an address, it
  means the definition says so.
- **The deployed corpus is a snapshot.** `docs/reference/flow-contracts/deployed/` is what was
  exported from the tenant, not a live read. A flow changed or disabled since its export is
  invisible here.
- **Coverage of the four artifact sets only.** The deployed exports, the portal and internal paste
  packages, and the gateway fragments. A message sent by something outside those — a manually
  built flow, a mail rule, a third-party integration — is outside this assessment and outside the
  matrix.
- **No claim about tenant state.** Connection identity is read from package manifests, which is the
  tenant naming its own connections; everything else about the tenant remains uncaptured.
