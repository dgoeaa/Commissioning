# PROC-067 — Get Selected Activities and Tasks

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-067 |
| Name | Get Selected Activities and Tasks |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 5 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft SharePoint Online. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-099` docs/reference/flow-contracts/deployed/Get Selected Activities and Tasks__912f4b9f-d1e3-4d1e-a789-8128eb581045__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft SharePoint Online |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-2139 | Activities | Power Automate — Get Selected Activities and Tasks | Automated |
| STEP-2140 | Get Activities | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2141 | Respond to a Power App or flow | Power Automate — Get Selected Activities and Tasks | Automated |
| STEP-2142 | Get Tasks | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2143 | Tasks | Power Automate — Get Selected Activities and Tasks | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 912f4b9f-d1e3-4d1e-a789-8128eb581045 |
| Required system availability | Microsoft Power Automate<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2139 | output of Get Activities |
| STEP-2141 | output of Activities<br>output of Tasks |
| STEP-2143 | output of Get Tasks |

## 5.5 Stages and activities

5 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2139 | 1 | Activities | flow root | Power Automate — Get Selected Activities and Tasks | Get Tasks reaches Succeeded | Get Tasks = Succeeded | output of Get Activities | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Tasks | — | — | — | — | — | Confirmed | No external validation required | SRC-099 |
| STEP-2140 | 2 | Get Activities | flow root | Microsoft SharePoint Online, called by the flow | Flow trigger fires | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Get Tasks | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-099 |
| STEP-2141 | 3 | Respond to a Power App or flow | flow root | Power Automate — Get Selected Activities and Tasks | Tasks reaches Succeeded | Tasks = Succeeded | output of Activities<br>output of Tasks | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-099 |
| STEP-2142 | 4 | Get Tasks | flow root | Microsoft SharePoint Online, called by the flow | Get Activities reaches Succeeded | Get Activities = Succeeded | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Activities | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-099 |
| STEP-2143 | 5 | Tasks | flow root | Power Automate — Get Selected Activities and Tasks | Activities reaches Succeeded | Activities = Succeeded | output of Get Tasks | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Respond to a Power App or flow | — | — | — | — | — | Confirmed | No external validation required | SRC-099 |

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
