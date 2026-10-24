# PROC-074 — Instant OpenRouter AI Chat

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-074 |
| Name | Instant OpenRouter AI Chat |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 23 action(s) under 1 trigger(s). |
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
| Sources | `SRC-106` docs/reference/flow-contracts/deployed/Instant OpenRouter AI Chat__98fb5275-474b-4926-a60e-1657098abf0d__full_definition.json |

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
| STEP-2398 | Compose Prompt | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2399 | HTTP | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2400 | Parse JSON | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2401 | Compose Response | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2402 | Initialize variable varPrompt | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2403 | Initialize variable varModelID | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2404 | Initialize variable varSelectedModel | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2405 | Initialize variable varText | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2406 | Set variable 4 | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2407 | Set variable 5 | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2408 | Set variable | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2409 | Compose Model ID | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2410 | Send an email (V2) 4 | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2411 | Apply to each Parse JSON choices | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2412 | Compose message | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2413 | Append to string variable varText | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2414 | Compose content 2 | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2415 | Append to string variable varContent | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2416 | Compose HTML Response Template | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2417 | Initialize variable varContent | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2418 | Apply to each  content | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2419 | Compose content | Power Automate — Instant OpenRouter AI Chat | Automated |
| STEP-2420 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 98fb5275-474b-4926-a60e-1657098abf0d |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2399 | variable 'varSelectedModel'<br>variable 'varPrompt' |
| STEP-2400 | output of HTTP |
| STEP-2401 | output of Parse JSON |
| STEP-2407 | variable 'varModelID' |
| STEP-2408 | output of Compose Prompt |
| STEP-2410 | output of HTTP |
| STEP-2413 | output of Compose message |
| STEP-2415 | output of Compose content 2 |
| STEP-2416 | variable 'varText'<br>variable 'varContent' |

## 5.5 Stages and activities

23 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2398 | 1 | Compose Prompt | flow root | Power Automate — Instant OpenRouter AI Chat | Initialize variable varContent reaches Succeeded | Initialize variable varContent = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Model ID | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2399 | 2 | HTTP | flow root | Power Automate — Instant OpenRouter AI Chat | Set variable reaches Succeeded | Set variable = Succeeded | variable 'varSelectedModel'<br>variable 'varPrompt' | Calls an external HTTP endpoint directly, without a connector. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2400 | 3 | Parse JSON | flow root | Power Automate — Instant OpenRouter AI Chat | HTTP reaches Succeeded | HTTP = Succeeded | output of HTTP | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Response | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2401 | 4 | Compose Response | flow root | Power Automate — Instant OpenRouter AI Chat | Parse JSON reaches Succeeded | Parse JSON = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Apply to each Parse JSON choices | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2402 | 5 | Initialize variable varPrompt | flow root | Power Automate — Instant OpenRouter AI Chat | Initialize variable varSelectedModel reaches Succeeded | Initialize variable varSelectedModel = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varText | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2403 | 6 | Initialize variable varModelID | flow root | Power Automate — Instant OpenRouter AI Chat | Send an email (V2) reaches Succeeded | Send an email (V2) = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varSelectedModel | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2404 | 7 | Initialize variable varSelectedModel | flow root | Power Automate — Instant OpenRouter AI Chat | Initialize variable varModelID reaches Succeeded | Initialize variable varModelID = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varPrompt | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2405 | 8 | Initialize variable varText | flow root | Power Automate — Instant OpenRouter AI Chat | Initialize variable varPrompt reaches Succeeded | Initialize variable varPrompt = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varContent | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2406 | 9 | Set variable 4 | flow root | Power Automate — Instant OpenRouter AI Chat | Compose Model ID reaches Succeeded | Compose Model ID = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varModelID'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varModelID'. | — | Set variable 5 | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2407 | 10 | Set variable 5 | flow root | Power Automate — Instant OpenRouter AI Chat | Set variable 4 reaches Succeeded | Set variable 4 = Succeeded | variable 'varModelID' | Replaces the value held in a run-scoped variable. | Writes 'varSelectedModel'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varSelectedModel'. | — | Set variable | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2408 | 11 | Set variable | flow root | Power Automate — Instant OpenRouter AI Chat | Set variable 5 reaches Succeeded | Set variable 5 = Succeeded | output of Compose Prompt | Replaces the value held in a run-scoped variable. | Writes 'varPrompt'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varPrompt'. | — | HTTP | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2409 | 12 | Compose Model ID | flow root | Power Automate — Instant OpenRouter AI Chat | Compose Prompt reaches Succeeded | Compose Prompt = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable 4 | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2410 | 13 | Send an email (V2) 4 | flow root | Microsoft Office 365 Outlook, called by the flow | Compose HTML Response Template reaches Succeeded | Compose HTML Response Template = Succeeded | output of HTTP | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-106 |
| STEP-2411 | 14 | Apply to each Parse JSON choices | flow root | Power Automate — Instant OpenRouter AI Chat | Compose Response reaches Succeeded | Compose Response = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Apply to each  content | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2412 | 15 | Compose message | Apply to each Parse JSON choices | Power Automate — Instant OpenRouter AI Chat | Entry of Apply to each Parse JSON choices | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Append to string variable varText | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2413 | 16 | Append to string variable varText | Apply to each Parse JSON choices | Power Automate — Instant OpenRouter AI Chat | Compose message reaches Succeeded | Compose message = Succeeded | output of Compose message | Appends text to a run-scoped string. | Writes 'varText'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varText'. | — | Compose content 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2414 | 17 | Compose content 2 | Apply to each Parse JSON choices | Power Automate — Instant OpenRouter AI Chat | Append to string variable varText reaches Succeeded | Append to string variable varText = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Append to string variable varContent | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2415 | 18 | Append to string variable varContent | Apply to each Parse JSON choices | Power Automate — Instant OpenRouter AI Chat | Compose content 2 reaches Succeeded | Compose content 2 = Succeeded | output of Compose content 2 | Appends text to a run-scoped string. | Writes 'varContent'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varContent'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2416 | 19 | Compose HTML Response Template | flow root | Power Automate — Instant OpenRouter AI Chat | Apply to each  content reaches Succeeded | Apply to each  content = Succeeded | variable 'varText'<br>variable 'varContent' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an email (V2) 4 | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2417 | 20 | Initialize variable varContent | flow root | Power Automate — Instant OpenRouter AI Chat | Initialize variable varText reaches Succeeded | Initialize variable varText = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Compose Prompt | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2418 | 21 | Apply to each  content | flow root | Power Automate — Instant OpenRouter AI Chat | Apply to each Parse JSON choices reaches Succeeded | Apply to each Parse JSON choices = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose HTML Response Template | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2419 | 22 | Compose content | Apply to each  content | Power Automate — Instant OpenRouter AI Chat | Entry of Apply to each  content | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-106 |
| STEP-2420 | 23 | Send an email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Flow trigger fires | None declared beyond entry into its container. | — | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Initialize variable varModelID | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-106 |

## 5.6 Decisions and branches

_No decision point is evidenced in this process._

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | Run-scoped values only. |
| Completion criteria | The last action completes. The export declares no response to a caller. |
| Successful end state | The last action completes. The export declares no response to a caller. |
| Alternative end states | Not evidenced. |
| Failed end states | Not evidenced. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-225 Send an email (V2) 4<br>NOTIF-226 Send an email (V2) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

_No exception path is evidenced in this process. Where the process is a request-triggered workflow, that absence is itself recorded in the gap register._

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2410 Send an email (V2) 4 | Sends a message; delivery is the record. |
| STEP-2420 Send an email (V2) | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
