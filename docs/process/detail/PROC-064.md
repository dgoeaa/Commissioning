# PROC-064 — Get Docs HTTP

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-064 |
| Name | Get Docs HTTP |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 7 action(s) under 1 trigger(s). |
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
| Sources | `SRC-096` docs/reference/flow-contracts/deployed/Get Docs HTTP__a9439b39-ed2f-6bca-58d7-ebbbc891d998__full_definition.json |

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
| STEP-2110 | Compose | Power Automate — Get Docs HTTP | Automated |
| STEP-2111 | Compose ODataQuery | Power Automate — Get Docs HTTP | Automated |
| STEP-2112 | Send an HTTP request to SharePoint | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2113 | Compose Duration | Power Automate — Get Docs HTTP | Automated |
| STEP-2114 | Compose ItemsCount | Power Automate — Get Docs HTTP | Automated |
| STEP-2115 | Respond to a Power App or flow | Power Automate — Get Docs HTTP | Automated |
| STEP-2116 | Compose itemsJSON | Power Automate — Get Docs HTTP | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow a9439b39-ed2f-6bca-58d7-ebbbc891d998 |
| Required system availability | Microsoft Power Automate<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2112 | output of Compose ODataQuery |
| STEP-2114 | output of Send an HTTP request to SharePoint |
| STEP-2115 | output of Compose itemsJSON |
| STEP-2116 | output of Send an HTTP request to SharePoint |

## 5.5 Stages and activities

7 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2110 | 1 | Compose | flow root | Power Automate — Get Docs HTTP | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose ODataQuery | — | — | — | — | — | Confirmed | No external validation required | SRC-096 |
| STEP-2111 | 2 | Compose ODataQuery | flow root | Power Automate — Get Docs HTTP | Compose reaches Succeeded | Compose = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request to SharePoint | — | — | — | — | — | Confirmed | No external validation required | SRC-096 |
| STEP-2112 | 3 | Send an HTTP request to SharePoint | flow root | Microsoft SharePoint Online, called by the flow | Compose ODataQuery reaches Succeeded | Compose ODataQuery = Succeeded | output of Compose ODataQuery | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose ItemsCount | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-096 |
| STEP-2113 | 4 | Compose Duration | flow root | Power Automate — Get Docs HTTP | Compose ItemsCount reaches Succeeded | Compose ItemsCount = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose itemsJSON | — | — | — | — | — | Confirmed | No external validation required | SRC-096 |
| STEP-2114 | 5 | Compose ItemsCount | flow root | Power Automate — Get Docs HTTP | Send an HTTP request to SharePoint reaches Succeeded | Send an HTTP request to SharePoint = Succeeded | output of Send an HTTP request to SharePoint | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Duration | — | — | — | — | — | Confirmed | No external validation required | SRC-096 |
| STEP-2115 | 6 | Respond to a Power App or flow | flow root | Power Automate — Get Docs HTTP | Compose itemsJSON reaches Succeeded | Compose itemsJSON = Succeeded | output of Compose itemsJSON | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-096 |
| STEP-2116 | 7 | Compose itemsJSON | flow root | Power Automate — Get Docs HTTP | Compose Duration reaches Succeeded | Compose Duration = Succeeded | output of Send an HTTP request to SharePoint | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Respond to a Power App or flow | — | — | — | — | — | Confirmed | No external validation required | SRC-096 |

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
