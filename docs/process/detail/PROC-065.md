# PROC-065 — Get Email Attachments

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-065 |
| Name | Get Email Attachments |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 10 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | Click a button in a Power Apps application to send a email to a specified email address. |
| Business objective | The export carries a workflow-level description: "Click a button in a Power Apps application to send a email to a specified email address.". A Power Automate workflow inherits the description of the template it was created from, and an export does not record whether that text was ever edited, so this is evidence of provenance and is NOT established as a statement of what this workflow does. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. A workflow-level description is present but is REQUIRES AUTHORITATIVE VALIDATION: an export does not distinguish a description someone wrote from the one the source template supplied. Owner and criticality are NOT evidenced: no supplied artifact carries either field. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-097` docs/reference/flow-contracts/deployed/Get Email Attachments__340190e6-0041-5673-8f42-d04d40ffe719__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-2117 | Get email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2118 | Condition | Power Automate — Get Email Attachments | Automated |
| STEP-2119 | Apply to each | Power Automate — Get Email Attachments | Automated |
| STEP-2120 | Get Attachment (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2121 | base64AttachmentContent | Power Automate — Get Email Attachments | Automated |
| STEP-2122 | JSON Attachments | Power Automate — Get Email Attachments | Automated |
| STEP-2123 | Append to array variable | Power Automate — Get Email Attachments | Automated |
| STEP-2124 | Initialize variable | Power Automate — Get Email Attachments | Automated |
| STEP-2125 | Respond to a Power App or flow | Power Automate — Get Email Attachments | Automated |
| STEP-2126 | Attachments Array JSON String | Power Automate — Get Email Attachments | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 340190e6-0041-5673-8f42-d04d40ffe719 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2118 | output of Get email (V2) |
| STEP-2120 | output of Get email (V2) |
| STEP-2121 | output of Get Attachment (V2) |
| STEP-2122 | output of Get Attachment (V2) |
| STEP-2123 | output of JSON Attachments |
| STEP-2125 | output of Attachments Array JSON String |
| STEP-2126 | variable 'varAttachments' |

## 5.5 Stages and activities

10 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2117 | 1 | Get email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Initialize variable reaches Succeeded | Initialize variable = Succeeded | — | Reads one mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2118 | 2 | Condition | flow root | Power Automate — Get Email Attachments | Get email (V2) reaches Succeeded | Get email (V2) = Succeeded | output of Get email (V2) | Evaluates a condition and runs one of two branches. | Condition: {"equals":["@outputs('Get_email_(V2)')?['body/hasAttachments']",true]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Attachments Array JSON String | — | — | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2119 | 3 | Apply to each | Condition | Power Automate — Get Email Attachments | Entry of Condition | None declared beyond entry into its container. | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2120 | 4 | Get Attachment (V2) | Apply to each | Microsoft Office 365 Outlook, called by the flow | Entry of Apply to each | None declared beyond entry into its container. | output of Get email (V2) | Reads an attachment from a mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | base64AttachmentContent | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2121 | 5 | base64AttachmentContent | Apply to each | Power Automate — Get Email Attachments | Get Attachment (V2) reaches Succeeded | Get Attachment (V2) = Succeeded | output of Get Attachment (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | JSON Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2122 | 6 | JSON Attachments | Apply to each | Power Automate — Get Email Attachments | base64AttachmentContent reaches Succeeded | base64AttachmentContent = Succeeded | output of Get Attachment (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Append to array variable | — | — | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2123 | 7 | Append to array variable | Apply to each | Power Automate — Get Email Attachments | JSON Attachments reaches Succeeded | JSON Attachments = Succeeded | output of JSON Attachments | Appends an element to a run-scoped array. | Writes 'varAttachments'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varAttachments'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2124 | 8 | Initialize variable | flow root | Power Automate — Get Email Attachments | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Get email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2125 | 9 | Respond to a Power App or flow | flow root | Power Automate — Get Email Attachments | Attachments Array JSON String reaches Succeeded | Attachments Array JSON String = Succeeded | output of Attachments Array JSON String | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-097 |
| STEP-2126 | 10 | Attachments Array JSON String | flow root | Power Automate — Get Email Attachments | Condition reaches Succeeded | Condition = Succeeded | variable 'varAttachments' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Respond to a Power App or flow | — | — | — | — | — | Confirmed | No external validation required | SRC-097 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-099 | Condition | Power Automate — Get Email Attachments | `{"equals":["@outputs('Get_email_(V2)')?['body/hasAttachments']",true]}` | output of Get email (V2) | true<br>false | true → Apply to each<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 1 response action(s); status codes 200. |
| Successful end state | A Response action returns to the caller. 1 response action(s); status codes 200. |
| Alternative end states | Not evidenced. |
| Failed end states | Not evidenced. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | — |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

_No exception path is evidenced in this process. Where the process is a request-triggered workflow, that absence is itself recorded in the gap register._

## 5.10 Monitoring, audit and performance

_No monitoring control, metric, service-level expectation or audit event is evidenced for this process._

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
