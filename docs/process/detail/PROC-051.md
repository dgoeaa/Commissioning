# PROC-051 — DGO_AI_Assist

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-051 |
| Name | DGO_AI_Assist |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 8 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Performs run-scoped computation only; no connector is called. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-082` docs/reference/flow-contracts/deployed/DGO_AI_Assist__89925df0-276f-da78-1cba-5847cf24c7d9__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-1518 | Compose Full Prompt | Power Automate — DGO_AI_Assist | Automated |
| STEP-1519 | Initialize variable varApiKey | Power Automate — DGO_AI_Assist | Automated |
| STEP-1520 | Initialize variable varApiUrl | Power Automate — DGO_AI_Assist | Automated |
| STEP-1521 | Compose Full Prompt 2 | Power Automate — DGO_AI_Assist | Automated |
| STEP-1522 | Compose JSON Request | Power Automate — DGO_AI_Assist | Automated |
| STEP-1523 | Parse JSON | Power Automate — DGO_AI_Assist | Automated |
| STEP-1524 | Respond to a Power App or flow | Power Automate — DGO_AI_Assist | Automated |
| STEP-1525 | ai response | Power Automate — DGO_AI_Assist | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 89925df0-276f-da78-1cba-5847cf24c7d9 |
| Required system availability | Microsoft Power Automate |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-1518 | variable 'varApiKey'<br>variable 'varApiUrl'<br>output of Compose JSON Request<br>output of Parse JSON |
| STEP-1521 | variable 'varApiKey'<br>variable 'varApiUrl'<br>output of Compose Full Prompt<br>output of Compose JSON Request<br>output of Parse JSON |
| STEP-1524 | output of ai response |

## 5.5 Stages and activities

8 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-1518 | 1 | Compose Full Prompt | flow root | Power Automate — DGO_AI_Assist | Parse JSON reaches Succeeded | Parse JSON = Succeeded | variable 'varApiKey'<br>variable 'varApiUrl'<br>output of Compose JSON Request<br>output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Full Prompt 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-082 |
| STEP-1519 | 2 | Initialize variable varApiKey | flow root | Power Automate — DGO_AI_Assist | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varApiUrl | — | — | — | — | — | Confirmed | No external validation required | SRC-082 |
| STEP-1520 | 3 | Initialize variable varApiUrl | flow root | Power Automate — DGO_AI_Assist | Initialize variable varApiKey reaches Succeeded | Initialize variable varApiKey = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Compose JSON Request | — | — | — | — | — | Confirmed | No external validation required | SRC-082 |
| STEP-1521 | 4 | Compose Full Prompt 2 | flow root | Power Automate — DGO_AI_Assist | Compose Full Prompt reaches Succeeded | Compose Full Prompt = Succeeded | variable 'varApiKey'<br>variable 'varApiUrl'<br>output of Compose Full Prompt<br>output of Compose JSON Request<br>output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | ai response | — | — | — | — | — | Confirmed | No external validation required | SRC-082 |
| STEP-1522 | 5 | Compose JSON Request | flow root | Power Automate — DGO_AI_Assist | Initialize variable varApiUrl reaches Succeeded | Initialize variable varApiUrl = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Parse JSON | — | — | — | — | — | Confirmed | No external validation required | SRC-082 |
| STEP-1523 | 6 | Parse JSON | flow root | Power Automate — DGO_AI_Assist | Compose JSON Request reaches Succeeded | Compose JSON Request = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Full Prompt | — | — | — | — | — | Confirmed | No external validation required | SRC-082 |
| STEP-1524 | 7 | Respond to a Power App or flow | flow root | Power Automate — DGO_AI_Assist | ai response reaches Succeeded | ai response = Succeeded | output of ai response | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-082 |
| STEP-1525 | 8 | ai response | flow root | Power Automate — DGO_AI_Assist | Compose Full Prompt 2 reaches Succeeded | Compose Full Prompt 2 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Respond to a Power App or flow | — | — | — | — | — | Confirmed | No external validation required | SRC-082 |

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
