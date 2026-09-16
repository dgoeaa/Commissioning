# PROC-099 — Web - Send Email

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-099 |
| Name | Web - Send Email |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 15 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-131` docs/reference/flow-contracts/deployed/Web - Send Email__e5e2c6a2-52ea-2ba8-b0b3-60f25d43387f__full_definition.json |

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
| STEP-3697 | Compose Trigger Body | Power Automate — Web - Send Email | Automated |
| STEP-3698 | Response | Power Automate — Web - Send Email | Automated |
| STEP-3699 | Compose Response | Power Automate — Web - Send Email | Automated |
| STEP-3700 | Initialize variable | Power Automate — Web - Send Email | Automated |
| STEP-3701 | Condition Check for Attachments | Power Automate — Web - Send Email | Automated |
| STEP-3702 | Send an email (V2) 2 | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3703 | Apply to each | Power Automate — Web - Send Email | Automated |
| STEP-3704 | Compose Attachments | Power Automate — Web - Send Email | Automated |
| STEP-3705 | Append to array variable Attachments | Power Automate — Web - Send Email | Automated |
| STEP-3706 | Send an email (V2) 1 | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3707 | Compose. Acknowledgement | Power Automate — Web - Send Email | Automated |
| STEP-3708 | Compose Response to HTML | Power Automate — Web - Send Email | Automated |
| STEP-3709 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3710 | Response 1 | Power Automate — Web - Send Email | Automated |
| STEP-3711 | Terminate | Power Automate — Web - Send Email | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow e5e2c6a2-52ea-2ba8-b0b3-60f25d43387f |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3698 | output of Compose Response |
| STEP-3701 | trigger field 'attachments' |
| STEP-3702 | output of Compose. Acknowledgement<br>output of Compose Response to HTML |
| STEP-3704 | output of Compose Response to HTML |
| STEP-3705 | output of Compose Attachments |
| STEP-3706 | variable 'varEmailAttachments'<br>output of Compose. Acknowledgement<br>output of Compose Response to HTML |
| STEP-3709 | output of Compose. Acknowledgement |
| STEP-3710 | output of Compose Response to HTML |

## 5.5 Stages and activities

15 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3697 | 1 | Compose Trigger Body | flow root | Power Automate — Web - Send Email | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Initialize variable | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3698 | 2 | Response | flow root | Power Automate — Web - Send Email | Compose Response reaches Succeeded | Compose Response = Succeeded | output of Compose Response | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3699 | 3 | Compose Response | flow root | Power Automate — Web - Send Email | Condition Check for Attachments reaches Succeeded | Condition Check for Attachments = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3700 | 4 | Initialize variable | flow root | Power Automate — Web - Send Email | Compose Trigger Body reaches Succeeded | Compose Trigger Body = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Compose. Acknowledgement | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3701 | 5 | Condition Check for Attachments | flow root | Power Automate — Web - Send Email | Terminate reaches Succeeded | Terminate = Succeeded | trigger field 'attachments' | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@empty(triggerBody()?['attachments'])",false]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Response | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3702 | 6 | Send an email (V2) 2 | Condition Check for Attachments | Microsoft Office 365 Outlook, called by the flow | Entry of Condition Check for Attachments | None declared beyond entry into its container. | output of Compose. Acknowledgement<br>output of Compose Response to HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-131 |
| STEP-3703 | 7 | Apply to each | Condition Check for Attachments · else | Power Automate — Web - Send Email | Entry of Condition Check for Attachments · else | None declared beyond entry into its container. | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Send an email (V2) 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3704 | 8 | Compose Attachments | Apply to each | Power Automate — Web - Send Email | Entry of Apply to each | None declared beyond entry into its container. | output of Compose Response to HTML | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Append to array variable Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3705 | 9 | Append to array variable Attachments | Apply to each | Power Automate — Web - Send Email | Compose Attachments reaches Succeeded | Compose Attachments = Succeeded | output of Compose Attachments | Appends an element to a run-scoped array. | Writes 'varEmailAttachments'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varEmailAttachments'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3706 | 10 | Send an email (V2) 1 | Condition Check for Attachments · else | Microsoft Office 365 Outlook, called by the flow | Apply to each reaches Succeeded | Apply to each = Succeeded | variable 'varEmailAttachments'<br>output of Compose. Acknowledgement<br>output of Compose Response to HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-131 |
| STEP-3707 | 11 | Compose. Acknowledgement | flow root | Power Automate — Web - Send Email | Initialize variable reaches Succeeded | Initialize variable = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Response to HTML | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3708 | 12 | Compose Response to HTML | flow root | Power Automate — Web - Send Email | Compose. Acknowledgement reaches Succeeded | Compose. Acknowledgement = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3709 | 13 | Send an email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Compose Response to HTML reaches Succeeded | Compose Response to HTML = Succeeded | output of Compose. Acknowledgement | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Response 1 | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-131 |
| STEP-3710 | 14 | Response 1 | flow root | Power Automate — Web - Send Email | Send an email (V2) reaches Succeeded | Send an email (V2) = Succeeded | output of Compose Response to HTML | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | Terminate | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |
| STEP-3711 | 15 | Terminate | flow root | Power Automate — Web - Send Email | Response 1 reaches Succeeded | Response 1 = Succeeded | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Succeeded'. | Condition Check for Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-131 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-164 | Condition Check for Attachments | Power Automate — Web - Send Email | `{"and":[{"equals":["@empty(triggerBody()?['attachments'])",false]}]}` | trigger field 'attachments' | true<br>false | true → Send an email (V2) 2<br>false → Apply to each, Send an email (V2) 1 | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 2 response action(s); status codes 200. |
| Successful end state | A Response action returns to the caller. 2 response action(s); status codes 200. |
| Alternative end states | Not evidenced. |
| Failed end states | Not evidenced. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-256 Send an email (V2) 2<br>NOTIF-257 Send an email (V2) 1<br>NOTIF-258 Send an email (V2) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

_No exception path is evidenced in this process. Where the process is a request-triggered workflow, that absence is itself recorded in the gap register._

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3702 Send an email (V2) 2 | Sends a message; delivery is the record. |
| STEP-3706 Send an email (V2) 1 | Sends a message; delivery is the record. |
| STEP-3709 Send an email (V2) | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
