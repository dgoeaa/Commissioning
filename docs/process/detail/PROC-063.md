# PROC-063 — Get Correspondences

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-063 |
| Name | Get Correspondences |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 10 action(s) under 1 trigger(s). |
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
| Sources | `SRC-095` docs/reference/flow-contracts/deployed/Get Correspondences__4d1c9a59-1d81-47ed-9c7c-38172edd5584__full_definition.json |

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
| STEP-2100 | Response | Power Automate — Get Correspondences | Automated |
| STEP-2101 | Initialize variable varResponse | Power Automate — Get Correspondences | Automated |
| STEP-2102 | Initialize variable varstatuscode | Power Automate — Get Correspondences | Automated |
| STEP-2103 | Initialize variable varStatus | Power Automate — Get Correspondences | Automated |
| STEP-2104 | Initialize variable vardocId | Power Automate — Get Correspondences | Automated |
| STEP-2105 | Initialize variable varmessage | Power Automate — Get Correspondences | Automated |
| STEP-2106 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2107 | Get items 1 | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2108 | Select Lean | Power Automate — Get Correspondences | Automated |
| STEP-2109 | Select Extended | Power Automate — Get Correspondences | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 4d1c9a59-1d81-47ed-9c7c-38172edd5584 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2100 | output of Select Extended |
| STEP-2106 | output of Select Extended<br>output of Select Lean |
| STEP-2108 | output of Get items 1 |
| STEP-2109 | output of Get items 1 |

## 5.5 Stages and activities

10 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2100 | 1 | Response | flow root | Power Automate — Get Correspondences | Select Extended reaches Succeeded | Select Extended = Succeeded | output of Select Extended | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | Send an email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-095 |
| STEP-2101 | 2 | Initialize variable varResponse | flow root | Power Automate — Get Correspondences | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varstatuscode | — | — | — | — | — | Confirmed | No external validation required | SRC-095 |
| STEP-2102 | 3 | Initialize variable varstatuscode | flow root | Power Automate — Get Correspondences | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatus | — | — | — | — | — | Confirmed | No external validation required | SRC-095 |
| STEP-2103 | 4 | Initialize variable varStatus | flow root | Power Automate — Get Correspondences | Initialize variable varstatuscode reaches Succeeded | Initialize variable varstatuscode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable vardocId | — | — | — | — | — | Confirmed | No external validation required | SRC-095 |
| STEP-2104 | 5 | Initialize variable vardocId | flow root | Power Automate — Get Correspondences | Initialize variable varStatus reaches Succeeded | Initialize variable varStatus = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varmessage | — | — | — | — | — | Confirmed | No external validation required | SRC-095 |
| STEP-2105 | 6 | Initialize variable varmessage | flow root | Power Automate — Get Correspondences | Initialize variable vardocId reaches Succeeded | Initialize variable vardocId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Get items 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-095 |
| STEP-2106 | 7 | Send an email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Response reaches Succeeded | Response = Succeeded | output of Select Extended<br>output of Select Lean | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-095 |
| STEP-2107 | 8 | Get items 1 | flow root | Microsoft SharePoint Online, called by the flow | Initialize variable varmessage reaches Succeeded | Initialize variable varmessage = Succeeded | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Lean | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-095 |
| STEP-2108 | 9 | Select Lean | flow root | Power Automate — Get Correspondences | Get items 1 reaches Succeeded | Get items 1 = Succeeded | output of Get items 1 | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select Extended | — | — | — | — | — | Confirmed | No external validation required | SRC-095 |
| STEP-2109 | 10 | Select Extended | flow root | Power Automate — Get Correspondences | Select Lean reaches Succeeded | Select Lean = Succeeded | output of Get items 1 | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Response | — | — | — | — | — | Confirmed | No external validation required | SRC-095 |

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
| Notifications issued | NOTIF-220 Send an email (V2) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

_No exception path is evidenced in this process. Where the process is a request-triggered workflow, that absence is itself recorded in the gap register._

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2106 Send an email (V2) | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
