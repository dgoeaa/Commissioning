# PROC-090 — WEB Get Docs  HTTP GET

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-090 |
| Name | WEB Get Docs  HTTP GET |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 11 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook, Microsoft SharePoint Online. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-122` docs/reference/flow-contracts/deployed/WEB Get Docs  HTTP GET__d4907f18-4dba-3f06-28de-2ed24f5f7936__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-3269 | Compose Trigger Body | Power Automate — WEB Get Docs  HTTP GET | Automated |
| STEP-3270 | Scope Response | Power Automate — WEB Get Docs  HTTP GET | Automated |
| STEP-3271 | Compose ItemsCount | Power Automate — WEB Get Docs  HTTP GET | Automated |
| STEP-3272 | Compose Response | Power Automate — WEB Get Docs  HTTP GET | Automated |
| STEP-3273 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3274 | Response | Power Automate — WEB Get Docs  HTTP GET | Automated |
| STEP-3275 | Scope Get Docs Activities | Power Automate — WEB Get Docs  HTTP GET | Automated |
| STEP-3276 | Compose ODataQuery | Power Automate — WEB Get Docs  HTTP GET | Automated |
| STEP-3277 | Send an HTTP request to SharePoint | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3278 | Select | Power Automate — WEB Get Docs  HTTP GET | Automated |
| STEP-3279 | Compose ODataQuery V2 | Power Automate — WEB Get Docs  HTTP GET | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow d4907f18-4dba-3f06-28de-2ed24f5f7936 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3271 | output of Select |
| STEP-3272 | output of Select |
| STEP-3273 | output of Compose Response<br>output of Select |
| STEP-3274 | output of Compose Response |
| STEP-3277 | output of Compose ODataQuery |
| STEP-3278 | output of Send an HTTP request to SharePoint |

## 5.5 Stages and activities

11 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3269 | 1 | Compose Trigger Body | flow root | Power Automate — WEB Get Docs  HTTP GET | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Scope Get Docs Activities | — | — | — | — | — | Confirmed | No external validation required | SRC-122 |
| STEP-3270 | 2 | Scope Response | flow root | Power Automate — WEB Get Docs  HTTP GET | Scope Get Docs Activities reaches Succeeded or Failed or Skipped or TimedOut | Scope Get Docs Activities = Succeeded\|Failed\|Skipped\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-122 |
| STEP-3271 | 3 | Compose ItemsCount | Scope Response | Power Automate — WEB Get Docs  HTTP GET | Entry of Scope Response | None declared beyond entry into its container. | output of Select | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Response | — | — | — | — | — | Confirmed | No external validation required | SRC-122 |
| STEP-3272 | 4 | Compose Response | Scope Response | Power Automate — WEB Get Docs  HTTP GET | Compose ItemsCount reaches Succeeded | Compose ItemsCount = Succeeded | output of Select | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | Send an email (V2) (runs when this does not succeed)<br>Response (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-122 |
| STEP-3273 | 5 | Send an email (V2) | Scope Response | Microsoft Office 365 Outlook, called by the flow | Compose Response reaches Succeeded or TimedOut or Failed or Skipped | Compose Response = Succeeded\|TimedOut\|Failed\|Skipped | output of Compose Response<br>output of Select | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-122 |
| STEP-3274 | 6 | Response | Scope Response | Power Automate — WEB Get Docs  HTTP GET | Compose Response reaches Succeeded or TimedOut or Skipped or Failed | Compose Response = Succeeded\|TimedOut\|Skipped\|Failed | output of Compose Response | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-122 |
| STEP-3275 | 7 | Scope Get Docs Activities | flow root | Power Automate — WEB Get Docs  HTTP GET | Compose Trigger Body reaches Succeeded | Compose Trigger Body = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Response (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-122 |
| STEP-3276 | 8 | Compose ODataQuery | Scope Get Docs Activities | Power Automate — WEB Get Docs  HTTP GET | Entry of Scope Get Docs Activities | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose ODataQuery V2 | — | — | — | — | — | Confirmed | No external validation required | SRC-122 |
| STEP-3277 | 9 | Send an HTTP request to SharePoint | Scope Get Docs Activities | Microsoft SharePoint Online, called by the flow | Compose ODataQuery V2 reaches Succeeded | Compose ODataQuery V2 = Succeeded | output of Compose ODataQuery | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-122 |
| STEP-3278 | 10 | Select | Scope Get Docs Activities | Power Automate — WEB Get Docs  HTTP GET | Send an HTTP request to SharePoint reaches Succeeded | Send an HTTP request to SharePoint = Succeeded | output of Send an HTTP request to SharePoint | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-122 |
| STEP-3279 | 11 | Compose ODataQuery V2 | Scope Get Docs Activities | Power Automate — WEB Get Docs  HTTP GET | Compose ODataQuery reaches Succeeded | Compose ODataQuery = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request to SharePoint | — | — | — | — | — | Confirmed | No external validation required | SRC-122 |

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
| Alternative end states | 3 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-238 Send an email (V2) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-228 | Recovery after Scope Get Docs Activities | Scope Get Docs Activities reaches Failed or Skipped or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Response. | Power Automate — WEB Get Docs  HTTP GET | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-229 | Recovery after Compose Response | Compose Response reaches TimedOut or Failed or Skipped | Sends an outbound message. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Send an email (V2). | Power Automate — WEB Get Docs  HTTP GET | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-230 | Recovery after Compose Response | Compose Response reaches TimedOut or Skipped or Failed | Returns the HTTP response to the caller and ends the request. | The caller receives HTTP 200. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Response. | Power Automate — WEB Get Docs  HTTP GET | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3273 Send an email (V2) | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
