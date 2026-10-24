# PROC-076 — Persistent GPT AI Chat in App

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-076 |
| Name | Persistent GPT AI Chat in App |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 14 action(s) under 1 trigger(s). |
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
| Sources | `SRC-108` docs/reference/flow-contracts/deployed/Persistent GPT AI Chat in App__033e5d70-ea07-4632-8e9a-f32590913637__full_definition.json |

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
| STEP-2457 | Compose Prompt | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2458 | HTTP | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2459 | Parse JSON | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2460 | Compose Response | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2461 | Respond to a Power App or flow | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2462 | Initialize variable varConversationJson | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2463 | Initialize variable varConversation | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2464 | Initialize variable varTruncatedConversation | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2465 | Initialize variable varMessages | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2466 | Apply to each varTruncatedConversation | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2467 | Append to array variable varMessages | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2468 | Initialize variable varAssistantReply | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2469 | Append to string variable varAssistantReply | Power Automate — Persistent GPT AI Chat in App | Automated |
| STEP-2470 | Compose Conversation Persistence | Power Automate — Persistent GPT AI Chat in App | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 033e5d70-ea07-4632-8e9a-f32590913637 |
| Required system availability | Microsoft Power Automate |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2457 | trigger field 'text' |
| STEP-2458 | variable 'varMessages' |
| STEP-2459 | output of HTTP |
| STEP-2460 | output of Parse JSON |
| STEP-2461 | output of Compose Response |
| STEP-2463 | variable 'varConversationJson' |
| STEP-2464 | variable 'varConversation' |
| STEP-2469 | output of Parse JSON |
| STEP-2470 | variable 'varConversation'<br>variable 'varAssistantReply' |

## 5.5 Stages and activities

14 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2457 | 1 | Compose Prompt | flow root | Power Automate — Persistent GPT AI Chat in App | Apply to each varTruncatedConversation reaches Succeeded | Apply to each varTruncatedConversation = Succeeded | trigger field 'text' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2458 | 2 | HTTP | flow root | Power Automate — Persistent GPT AI Chat in App | Compose Prompt reaches Succeeded | Compose Prompt = Succeeded | variable 'varMessages' | Calls an external HTTP endpoint directly, without a connector. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2459 | 3 | Parse JSON | flow root | Power Automate — Persistent GPT AI Chat in App | HTTP reaches Succeeded | HTTP = Succeeded | output of HTTP | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Response | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2460 | 4 | Compose Response | flow root | Power Automate — Persistent GPT AI Chat in App | Parse JSON reaches Succeeded | Parse JSON = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Append to string variable varAssistantReply | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2461 | 5 | Respond to a Power App or flow | flow root | Power Automate — Persistent GPT AI Chat in App | Append to string variable varAssistantReply reaches Succeeded | Append to string variable varAssistantReply = Succeeded | output of Compose Response | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | Compose Conversation Persistence | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2462 | 6 | Initialize variable varConversationJson | flow root | Power Automate — Persistent GPT AI Chat in App | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varConversation | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2463 | 7 | Initialize variable varConversation | flow root | Power Automate — Persistent GPT AI Chat in App | Initialize variable varConversationJson reaches Succeeded | Initialize variable varConversationJson = Succeeded | variable 'varConversationJson' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varTruncatedConversation | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2464 | 8 | Initialize variable varTruncatedConversation | flow root | Power Automate — Persistent GPT AI Chat in App | Initialize variable varConversation reaches Succeeded | Initialize variable varConversation = Succeeded | variable 'varConversation' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varMessages | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2465 | 9 | Initialize variable varMessages | flow root | Power Automate — Persistent GPT AI Chat in App | Initialize variable varTruncatedConversation reaches Succeeded | Initialize variable varTruncatedConversation = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varAssistantReply | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2466 | 10 | Apply to each varTruncatedConversation | flow root | Power Automate — Persistent GPT AI Chat in App | Initialize variable varAssistantReply reaches Succeeded | Initialize variable varAssistantReply = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Prompt | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2467 | 11 | Append to array variable varMessages | Apply to each varTruncatedConversation | Power Automate — Persistent GPT AI Chat in App | Entry of Apply to each varTruncatedConversation | None declared beyond entry into its container. | — | Appends an element to a run-scoped array. | Writes 'varMessages'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varMessages'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2468 | 12 | Initialize variable varAssistantReply | flow root | Power Automate — Persistent GPT AI Chat in App | Initialize variable varMessages reaches Succeeded | Initialize variable varMessages = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Apply to each varTruncatedConversation | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2469 | 13 | Append to string variable varAssistantReply | flow root | Power Automate — Persistent GPT AI Chat in App | Compose Response reaches Succeeded | Compose Response = Succeeded | output of Parse JSON | Appends text to a run-scoped string. | Writes 'varAssistantReply'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varAssistantReply'. | — | Respond to a Power App or flow | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |
| STEP-2470 | 14 | Compose Conversation Persistence | flow root | Power Automate — Persistent GPT AI Chat in App | Respond to a Power App or flow reaches Succeeded | Respond to a Power App or flow = Succeeded | variable 'varConversation'<br>variable 'varAssistantReply' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-108 |

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
