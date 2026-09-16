# PROC-098 — Web - Preprocess user message

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-098 |
| Name | Web - Preprocess user message |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 19 action(s) under 1 trigger(s). |
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
| Sources | `SRC-130` docs/reference/flow-contracts/deployed/Web - Preprocess user message__fdd3f24e-285e-46e4-a9fd-be068a80287f__full_definition.json |

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
| STEP-3678 | Initialize userMessage variable | Power Automate — Web - Preprocess user message | Automated |
| STEP-3679 | Preprocess user message | Power Automate — Web - Preprocess user message | Automated |
| STEP-3680 | Remove quotation marks | Power Automate — Web - Preprocess user message | Automated |
| STEP-3681 | Update clean userMessage | Power Automate — Web - Preprocess user message | Automated |
| STEP-3682 | Remove new line | Power Automate — Web - Preprocess user message | Automated |
| STEP-3683 | Remove carriage return | Power Automate — Web - Preprocess user message | Automated |
| STEP-3684 | Remove line break | Power Automate — Web - Preprocess user message | Automated |
| STEP-3685 | Azure ChatGPT URI | Power Automate — Web - Preprocess user message | Automated |
| STEP-3686 | System message | Power Automate — Web - Preprocess user message | Automated |
| STEP-3687 | Initialize message history | Power Automate — Web - Preprocess user message | Automated |
| STEP-3688 | Create HTTP body | Power Automate — Web - Preprocess user message | Automated |
| STEP-3689 | Return value(s) to Power Virtual Agents | Power Automate — Web - Preprocess user message | Automated |
| STEP-3690 | Create New Chat History | Power Automate — Web - Preprocess user message | Automated |
| STEP-3691 | Get first choice response | Power Automate — Web - Preprocess user message | Automated |
| STEP-3692 | Parse JSON | Power Automate — Web - Preprocess user message | Automated |
| STEP-3693 | HTTP | Power Automate — Web - Preprocess user message | Automated |
| STEP-3694 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3695 | Compose | Power Automate — Web - Preprocess user message | Automated |
| STEP-3696 | Compose 2 | Power Automate — Web - Preprocess user message | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow fdd3f24e-285e-46e4-a9fd-be068a80287f |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3680 | variable 'userMessage' |
| STEP-3681 | output of Remove line break |
| STEP-3682 | output of Remove quotation marks |
| STEP-3683 | output of Remove new line |
| STEP-3684 | output of Remove carriage return |
| STEP-3687 | variable 'userMessage' |
| STEP-3688 | variable 'System message'<br>variable 'messagesForBody' |
| STEP-3689 | variable 'Response Value'<br>variable 'NewChatHistory' |
| STEP-3690 | variable 'messagesForBody'<br>output of Parse JSON |
| STEP-3691 | output of Parse JSON |
| STEP-3692 | output of HTTP |
| STEP-3693 | variable 'URI' |
| STEP-3694 | variable 'Response Value'<br>variable 'NewChatHistory' |

## 5.5 Stages and activities

19 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3678 | 1 | Initialize userMessage variable | flow root | Power Automate — Web - Preprocess user message | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Preprocess user message | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3679 | 2 | Preprocess user message | flow root | Power Automate — Web - Preprocess user message | Initialize userMessage variable reaches Succeeded | Initialize userMessage variable = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Azure ChatGPT URI | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3680 | 3 | Remove quotation marks | Preprocess user message | Power Automate — Web - Preprocess user message | Entry of Preprocess user message | None declared beyond entry into its container. | variable 'userMessage' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Remove new line | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3681 | 4 | Update clean userMessage | Preprocess user message | Power Automate — Web - Preprocess user message | Remove line break reaches Succeeded | Remove line break = Succeeded | output of Remove line break | Replaces the value held in a run-scoped variable. | Writes 'userMessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'userMessage'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3682 | 5 | Remove new line | Preprocess user message | Power Automate — Web - Preprocess user message | Remove quotation marks reaches Succeeded | Remove quotation marks = Succeeded | output of Remove quotation marks | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Remove carriage return | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3683 | 6 | Remove carriage return | Preprocess user message | Power Automate — Web - Preprocess user message | Remove new line reaches Succeeded | Remove new line = Succeeded | output of Remove new line | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Remove line break | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3684 | 7 | Remove line break | Preprocess user message | Power Automate — Web - Preprocess user message | Remove carriage return reaches Succeeded | Remove carriage return = Succeeded | output of Remove carriage return | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Update clean userMessage | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3685 | 8 | Azure ChatGPT URI | flow root | Power Automate — Web - Preprocess user message | Preprocess user message reaches Succeeded | Preprocess user message = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | System message | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3686 | 9 | System message | flow root | Power Automate — Web - Preprocess user message | Azure ChatGPT URI reaches Succeeded | Azure ChatGPT URI = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize message history | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3687 | 10 | Initialize message history | flow root | Power Automate — Web - Preprocess user message | System message reaches Succeeded | System message = Succeeded | variable 'userMessage' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Create HTTP body | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3688 | 11 | Create HTTP body | flow root | Power Automate — Web - Preprocess user message | Initialize message history reaches Succeeded | Initialize message history = Succeeded | variable 'System message'<br>variable 'messagesForBody' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Compose | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3689 | 12 | Return value(s) to Power Virtual Agents | flow root | Power Automate — Web - Preprocess user message | Send an email (V2) reaches Succeeded | Send an email (V2) = Succeeded | variable 'Response Value'<br>variable 'NewChatHistory' | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3690 | 13 | Create New Chat History | flow root | Power Automate — Web - Preprocess user message | Get first choice response reaches Succeeded | Get first choice response = Succeeded | variable 'messagesForBody'<br>output of Parse JSON | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Send an email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3691 | 14 | Get first choice response | flow root | Power Automate — Web - Preprocess user message | Parse JSON reaches Succeeded | Parse JSON = Succeeded | output of Parse JSON | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Create New Chat History | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3692 | 15 | Parse JSON | flow root | Power Automate — Web - Preprocess user message | HTTP reaches Succeeded | HTTP = Succeeded | output of HTTP | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Get first choice response | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3693 | 16 | HTTP | flow root | Power Automate — Web - Preprocess user message | Compose 2 reaches Succeeded | Compose 2 = Succeeded | variable 'URI' | Calls an external HTTP endpoint directly, without a connector. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3694 | 17 | Send an email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Create New Chat History reaches Succeeded | Create New Chat History = Succeeded | variable 'Response Value'<br>variable 'NewChatHistory' | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Return value(s) to Power Virtual Agents | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-130 |
| STEP-3695 | 18 | Compose | flow root | Power Automate — Web - Preprocess user message | Create HTTP body reaches Succeeded | Create HTTP body = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |
| STEP-3696 | 19 | Compose 2 | flow root | Power Automate — Web - Preprocess user message | Compose reaches Succeeded | Compose = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP | — | — | — | — | — | Confirmed | No external validation required | SRC-130 |

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
| Notifications issued | NOTIF-255 Send an email (V2) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

_No exception path is evidenced in this process. Where the process is a request-triggered workflow, that absence is itself recorded in the gap register._

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3694 Send an email (V2) | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
