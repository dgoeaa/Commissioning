# PROC-066 — Get Emails HTTP

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-066 |
| Name | Get Emails HTTP |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 12 action(s) under 1 trigger(s). |
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
| Sources | `SRC-098` docs/reference/flow-contracts/deployed/Get Emails HTTP__e209e8a5-6f31-5664-f40d-85c58c43efbd__full_definition.json |

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
| STEP-2127 | Send an HTTP request Sent Items | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2128 | Parse JSON HTTP Response Sent Items | Power Automate — Get Emails HTTP | Automated |
| STEP-2129 | Select Parse JSON Sent Items | Power Automate — Get Emails HTTP | Automated |
| STEP-2130 | Compose HTTP Request URL 2 | Power Automate — Get Emails HTTP | Automated |
| STEP-2131 | Send an HTTP request Inbox | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2132 | Parse JSON HTTP Response Inbox | Power Automate — Get Emails HTTP | Automated |
| STEP-2133 | Compose URL Query String Sent Items | Power Automate — Get Emails HTTP | Automated |
| STEP-2134 | Compose URL Query String Inbox | Power Automate — Get Emails HTTP | Automated |
| STEP-2135 | Select Parse JSON Inbox | Power Automate — Get Emails HTTP | Automated |
| STEP-2136 | Respond to a Power App or flow | Power Automate — Get Emails HTTP | Automated |
| STEP-2137 | Compose Merge Inbox and Sent Items | Power Automate — Get Emails HTTP | Automated |
| STEP-2138 | Compose JSON Select Output | Power Automate — Get Emails HTTP | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow e209e8a5-6f31-5664-f40d-85c58c43efbd |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2127 | output of Compose URL Query String Sent Items |
| STEP-2128 | output of Send an HTTP request Sent Items |
| STEP-2129 | output of Parse JSON HTTP Response Sent Items |
| STEP-2131 | output of Compose URL Query String Inbox |
| STEP-2132 | output of Send an HTTP request Inbox |
| STEP-2135 | output of Parse JSON HTTP Response Inbox |
| STEP-2136 | output of Compose JSON Select Output |
| STEP-2137 | output of Select Parse JSON Inbox<br>output of Select Parse JSON Sent Items |
| STEP-2138 | output of Select Parse JSON Inbox<br>output of Select Parse JSON Sent Items |

## 5.5 Stages and activities

12 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2127 | 1 | Send an HTTP request Sent Items | flow root | Microsoft Office 365 Outlook, called by the flow | Compose URL Query String Sent Items reaches Succeeded | Compose URL Query String Sent Items = Succeeded | output of Compose URL Query String Sent Items | Calls an external HTTP endpoint. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Parse JSON HTTP Response Sent Items | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2128 | 2 | Parse JSON HTTP Response Sent Items | flow root | Power Automate — Get Emails HTTP | Send an HTTP request Sent Items reaches Succeeded | Send an HTTP request Sent Items = Succeeded | output of Send an HTTP request Sent Items | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select Parse JSON Sent Items | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2129 | 3 | Select Parse JSON Sent Items | flow root | Power Automate — Get Emails HTTP | Parse JSON HTTP Response Sent Items reaches Succeeded | Parse JSON HTTP Response Sent Items = Succeeded | output of Parse JSON HTTP Response Sent Items | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose JSON Select Output (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2130 | 4 | Compose HTTP Request URL 2 | flow root | Power Automate — Get Emails HTTP | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose URL Query String Sent Items<br>Compose URL Query String Inbox | — | — | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2131 | 5 | Send an HTTP request Inbox | flow root | Microsoft Office 365 Outlook, called by the flow | Compose URL Query String Inbox reaches Succeeded | Compose URL Query String Inbox = Succeeded | output of Compose URL Query String Inbox | Calls an external HTTP endpoint. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Parse JSON HTTP Response Inbox | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2132 | 6 | Parse JSON HTTP Response Inbox | flow root | Power Automate — Get Emails HTTP | Send an HTTP request Inbox reaches Succeeded | Send an HTTP request Inbox = Succeeded | output of Send an HTTP request Inbox | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select Parse JSON Inbox | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2133 | 7 | Compose URL Query String Sent Items | flow root | Power Automate — Get Emails HTTP | Compose HTTP Request URL 2 reaches Succeeded | Compose HTTP Request URL 2 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request Sent Items | — | — | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2134 | 8 | Compose URL Query String Inbox | flow root | Power Automate — Get Emails HTTP | Compose HTTP Request URL 2 reaches Succeeded | Compose HTTP Request URL 2 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request Inbox | — | — | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2135 | 9 | Select Parse JSON Inbox | flow root | Power Automate — Get Emails HTTP | Parse JSON HTTP Response Inbox reaches Succeeded | Parse JSON HTTP Response Inbox = Succeeded | output of Parse JSON HTTP Response Inbox | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose JSON Select Output (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2136 | 10 | Respond to a Power App or flow | flow root | Power Automate — Get Emails HTTP | Compose Merge Inbox and Sent Items reaches Succeeded | Compose Merge Inbox and Sent Items = Succeeded | output of Compose JSON Select Output | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2137 | 11 | Compose Merge Inbox and Sent Items | flow root | Power Automate — Get Emails HTTP | Compose JSON Select Output reaches Succeeded | Compose JSON Select Output = Succeeded | output of Select Parse JSON Inbox<br>output of Select Parse JSON Sent Items | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Respond to a Power App or flow | — | — | — | — | — | Confirmed | No external validation required | SRC-098 |
| STEP-2138 | 12 | Compose JSON Select Output | flow root | Power Automate — Get Emails HTTP | Select Parse JSON Inbox reaches Succeeded or Skipped or Failed or TimedOut; Select Parse JSON Sent Items reaches Succeeded or Failed or Skipped or TimedOut | Select Parse JSON Inbox = Succeeded\|Skipped\|Failed\|TimedOut<br>Select Parse JSON Sent Items = Succeeded\|Failed\|Skipped\|TimedOut | output of Select Parse JSON Inbox<br>output of Select Parse JSON Sent Items | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Merge Inbox and Sent Items | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-098 |

## 5.6 Decisions and branches

_No decision point is evidenced in this process._

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 1 response action(s); status codes 200. |
| Successful end state | A Response action returns to the caller. 1 response action(s); status codes 200. |
| Alternative end states | 1 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | — |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-163 | Recovery after Select Parse JSON Inbox, Select Parse JSON Sent Items | Select Parse JSON Inbox reaches Skipped or Failed or TimedOut; Select Parse JSON Sent Items reaches Failed or Skipped or TimedOut | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose JSON Select Output. | Power Automate — Get Emails HTTP | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

_No monitoring control, metric, service-level expectation or audit event is evidenced for this process._

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
