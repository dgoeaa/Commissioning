# PROC-057 — ECM_EDM_ARCHIVE

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-057 |
| Name | ECM_EDM_ARCHIVE |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 6 action(s) under 1 trigger(s). |
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
| Sources | `SRC-089` docs/reference/flow-contracts/deployed/ECM_EDM_ARCHIVE__b56ce201-87bf-4c49-9d7d-7a5503cdcf3e__full_definition.json |

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
| STEP-1916 | Scope ARCHIVE UPLOAD Complete No Trigger | Power Automate — ECM_EDM_ARCHIVE | Automated |
| STEP-1917 | Condition FileName Present | Power Automate — ECM_EDM_ARCHIVE | Automated |
| STEP-1918 | Create file | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-1919 | Update file properties | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-1920 | Response Archive Success | Power Automate — ECM_EDM_ARCHIVE | Automated |
| STEP-1921 | Response Archive Bad Request | Power Automate — ECM_EDM_ARCHIVE | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow b56ce201-87bf-4c49-9d7d-7a5503cdcf3e |
| Required system availability | Microsoft Power Automate<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-1917 | trigger field 'fileName' |
| STEP-1918 | trigger field 'fileName'<br>trigger field 'fileContent' |
| STEP-1919 | output of Create file |
| STEP-1920 | output of Update file properties |

## 5.5 Stages and activities

6 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-1916 | 1 | Scope ARCHIVE UPLOAD Complete No Trigger | flow root | Power Automate — ECM_EDM_ARCHIVE | Flow trigger fires | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-089 |
| STEP-1917 | 2 | Condition FileName Present | Scope ARCHIVE UPLOAD Complete No Trigger | Power Automate — ECM_EDM_ARCHIVE | Entry of Scope ARCHIVE UPLOAD Complete No Trigger | None declared beyond entry into its container. | trigger field 'fileName' | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"not":{"equals":["@empty(triggerBody()?['fileName'])",true]}}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-089 |
| STEP-1918 | 3 | Create file | Condition FileName Present | Microsoft SharePoint Online, called by the flow | Entry of Condition FileName Present | None declared beyond entry into its container. | trigger field 'fileName'<br>trigger field 'fileContent' | Writes a file into a document library. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Update file properties | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-089 |
| STEP-1919 | 4 | Update file properties | Condition FileName Present | Microsoft SharePoint Online, called by the flow | Create file reaches Succeeded | Create file = Succeeded | output of Create file | Updates the list metadata attached to a stored file. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Response Archive Success | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-089 |
| STEP-1920 | 5 | Response Archive Success | Condition FileName Present | Power Automate — ECM_EDM_ARCHIVE | Update file properties reaches Succeeded | Update file properties = Succeeded | output of Update file properties | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-089 |
| STEP-1921 | 6 | Response Archive Bad Request | Condition FileName Present · else | Power Automate — ECM_EDM_ARCHIVE | Entry of Condition FileName Present · else | None declared beyond entry into its container. | — | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 400 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-089 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-098 | Condition FileName Present | Power Automate — ECM_EDM_ARCHIVE | `{"and":[{"not":{"equals":["@empty(triggerBody()?['fileName'])",true]}}]}` | trigger field 'fileName' | true<br>false | true → Create file, Update file properties, Response Archive Success<br>false → Response Archive Bad Request | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 2 response action(s); status codes 200, 400. |
| Successful end state | A Response action returns to the caller. 2 response action(s); status codes 200, 400. |
| Alternative end states | Not evidenced. |
| Failed end states | Not evidenced. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | STEP-1918 Create file |
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
