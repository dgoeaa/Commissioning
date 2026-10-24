# PROC-094 — Web - Get Email Attachments

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-094 |
| Name | Web - Get Email Attachments |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 22 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | Click a button in a Power Apps application to send a email to a specified email address. |
| Business objective | The export carries a workflow-level description: "Click a button in a Power Apps application to send a email to a specified email address.". A Power Automate workflow inherits the description of the template it was created from, and an export does not record whether that text was ever edited, so this is evidence of provenance and is NOT established as a statement of what this workflow does. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook, Microsoft Power Automate Management. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. A workflow-level description is present but is REQUIRES AUTHORITATIVE VALIDATION: an export does not distinguish a description someone wrote from the one the source template supplied. Owner and criticality are NOT evidenced: no supplied artifact carries either field. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-126` docs/reference/flow-contracts/deployed/Web - Get Email Attachments__8726fb6f-6c5c-2140-447d-f97cc5a01c38__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-3491 | Get email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3492 | Condition | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3493 | Apply to each | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3494 | Get Attachment (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3495 | base64AttachmentContent | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3496 | JSON Attachments | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3497 | Append to array variable | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3498 | Initialize variable | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3499 | Attachments Array JSON String | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3500 | Compose EmailMessageId | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3501 | Response | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3502 | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3503 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-3504 | Compose Redacted Headers | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3505 | Compose Redacted Queries | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3506 | Compose Flow Run Record | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3507 | Compose Flow Run Record Schema | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3508 | Compose Telemetry Attachments | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3509 | Try | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3510 | Compose Body Get Flow Definition | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3511 | Compose TriggerBody | Power Automate — Web - Get Email Attachments | Automated |
| STEP-3512 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 8726fb6f-6c5c-2140-447d-f97cc5a01c38 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3491 | output of Compose EmailMessageId |
| STEP-3492 | output of Get email (V2) |
| STEP-3494 | output of Get email (V2) |
| STEP-3495 | output of Get Attachment (V2) |
| STEP-3496 | output of Get Attachment (V2) |
| STEP-3497 | output of JSON Attachments |
| STEP-3499 | variable 'varAttachments' |
| STEP-3500 | trigger field 'emailId' |
| STEP-3501 | output of Attachments Array JSON String |
| STEP-3506 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |
| STEP-3508 | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose Body Get Flow Definition<br>output of Compose TriggerBody |
| STEP-3510 | output of Get Flow Definition |
| STEP-3512 | output of Compose Telemetry Attachments |

## 5.5 Stages and activities

22 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3491 | 1 | Get email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Compose EmailMessageId reaches Succeeded | Compose EmailMessageId = Succeeded | output of Compose EmailMessageId | Reads one mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3492 | 2 | Condition | flow root | Power Automate — Web - Get Email Attachments | Get email (V2) reaches Succeeded | Get email (V2) = Succeeded | output of Get email (V2) | Evaluates a condition and runs one of two branches. | Condition: {"equals":["@outputs('Get_email_(V2)')?['body/hasAttachments']",true]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Attachments Array JSON String (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3493 | 3 | Apply to each | Condition | Power Automate — Web - Get Email Attachments | Entry of Condition | None declared beyond entry into its container. | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3494 | 4 | Get Attachment (V2) | Apply to each | Microsoft Office 365 Outlook, called by the flow | Entry of Apply to each | None declared beyond entry into its container. | output of Get email (V2) | Reads an attachment from a mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | base64AttachmentContent | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3495 | 5 | base64AttachmentContent | Apply to each | Power Automate — Web - Get Email Attachments | Get Attachment (V2) reaches Succeeded | Get Attachment (V2) = Succeeded | output of Get Attachment (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | JSON Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3496 | 6 | JSON Attachments | Apply to each | Power Automate — Web - Get Email Attachments | base64AttachmentContent reaches Succeeded | base64AttachmentContent = Succeeded | output of Get Attachment (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Append to array variable | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3497 | 7 | Append to array variable | Apply to each | Power Automate — Web - Get Email Attachments | JSON Attachments reaches Succeeded | JSON Attachments = Succeeded | output of JSON Attachments | Appends an element to a run-scoped array. | Writes 'varAttachments'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varAttachments'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3498 | 8 | Initialize variable | flow root | Power Automate — Web - Get Email Attachments | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Compose EmailMessageId | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3499 | 9 | Attachments Array JSON String | flow root | Power Automate — Web - Get Email Attachments | Condition reaches Succeeded or TimedOut or Skipped or Failed | Condition = Succeeded\|TimedOut\|Skipped\|Failed | variable 'varAttachments' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | Response (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-126 |
| STEP-3500 | 10 | Compose EmailMessageId | flow root | Power Automate — Web - Get Email Attachments | Initialize variable reaches Succeeded | Initialize variable = Succeeded | trigger field 'emailId' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Get email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3501 | 11 | Response | flow root | Power Automate — Web - Get Email Attachments | Attachments Array JSON String reaches Succeeded or TimedOut or Skipped or Failed | Attachments Array JSON String = Succeeded\|TimedOut\|Skipped\|Failed | output of Attachments Array JSON String | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-126 |
| STEP-3502 | 12 | Scope Flow Data Capture | flow root | Power Automate — Web - Get Email Attachments | Response reaches Succeeded or TimedOut or Skipped or Failed | Response = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-126 |
| STEP-3503 | 13 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Try reaches Succeeded | Try = Succeeded | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Headers | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3504 | 14 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Queries | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3505 | 15 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Body Get Flow Definition | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3506 | 16 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Compose TriggerBody reaches Succeeded | Compose TriggerBody = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3507 | 17 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3508 | 18 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose Body Get Flow Definition<br>output of Compose TriggerBody | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3509 | 19 | Try | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Get Flow Definition | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3510 | 20 | Compose Body Get Flow Definition | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose TriggerBody | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3511 | 21 | Compose TriggerBody | Scope Flow Data Capture | Power Automate — Web - Get Email Attachments | Compose Body Get Flow Definition reaches Succeeded | Compose Body Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-126 |
| STEP-3512 | 22 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-126 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-155 | Condition | Power Automate — Web - Get Email Attachments | `{"equals":["@outputs('Get_email_(V2)')?['body/hasAttachments']",true]}` | output of Get email (V2) | true<br>false | true → Apply to each<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 1 response action(s); status codes 200. |
| Successful end state | A Response action returns to the caller. 1 response action(s); status codes 200. |
| Alternative end states | 3 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-246 Send Telemetry Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-237 | Recovery after Condition | Condition reaches TimedOut or Skipped or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Attachments Array JSON String. | Power Automate — Web - Get Email Attachments | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-238 | Recovery after Attachments Array JSON String | Attachments Array JSON String reaches TimedOut or Skipped or Failed | Returns the HTTP response to the caller and ends the request. | The caller receives HTTP 200. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Response. | Power Automate — Web - Get Email Attachments | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-239 | Recovery after Response | Response reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — Web - Get Email Attachments | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3512 Send Telemetry Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
