# PROC-091 — Web - Email AI Assist

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-091 |
| Name | Web - Email AI Assist |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 27 action(s) under 1 trigger(s). |
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
| Sources | `SRC-123` docs/reference/flow-contracts/deployed/Web - Email AI Assist__aacdf9d5-da49-b6da-24d1-e28adc68cd7e__full_definition.json |

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
| STEP-3280 | Get email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3281 | Condition | Power Automate — Web - Email AI Assist | Automated |
| STEP-3282 | Apply to each | Power Automate — Web - Email AI Assist | Automated |
| STEP-3283 | Get Attachment (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3284 | Condition 2 | Power Automate — Web - Email AI Assist | Automated |
| STEP-3285 | base64AttachmentContent | Power Automate — Web - Email AI Assist | Automated |
| STEP-3286 | HTTP Request to AI API | Power Automate — Web - Email AI Assist | Automated |
| STEP-3287 | Scope Successful | Power Automate — Web - Email AI Assist | Automated |
| STEP-3288 | Parse JSON Succesful | Power Automate — Web - Email AI Assist | Automated |
| STEP-3289 | Parse JSON | Power Automate — Web - Email AI Assist | Automated |
| STEP-3290 | HTML Values | Power Automate — Web - Email AI Assist | Automated |
| STEP-3291 | Extract Values JSON | Power Automate — Web - Email AI Assist | Automated |
| STEP-3292 | Parse JSON Successful Text | Power Automate — Web - Email AI Assist | Automated |
| STEP-3293 | Clean Parse JSON Successful Text | Power Automate — Web - Email AI Assist | Automated |
| STEP-3294 | Set variable | Power Automate — Web - Email AI Assist | Automated |
| STEP-3295 | Scope Errror | Power Automate — Web - Email AI Assist | Automated |
| STEP-3296 | Parse JSON Error | Power Automate — Web - Email AI Assist | Automated |
| STEP-3297 | Parse JSON Body Parse JSON Error | Power Automate — Web - Email AI Assist | Automated |
| STEP-3298 | Set variable varResponse Error | Power Automate — Web - Email AI Assist | Automated |
| STEP-3299 | Scope Response | Power Automate — Web - Email AI Assist | Automated |
| STEP-3300 | HTML with Attachments | Power Automate — Web - Email AI Assist | Automated |
| STEP-3301 | Response | Power Automate — Web - Email AI Assist | Automated |
| STEP-3302 | HTTP Body 3 | Power Automate — Web - Email AI Assist | Automated |
| STEP-3303 | Initialize variable | Power Automate — Web - Email AI Assist | Automated |
| STEP-3304 | Initialize variable 2 | Power Automate — Web - Email AI Assist | Automated |
| STEP-3305 | Compose Email ID | Power Automate — Web - Email AI Assist | Automated |
| STEP-3306 | Compose AI Action Required | Power Automate — Web - Email AI Assist | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow aacdf9d5-da49-b6da-24d1-e28adc68cd7e |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3280 | output of Compose Email ID |
| STEP-3281 | output of Get email (V2) |
| STEP-3283 | output of Get email (V2) |
| STEP-3284 | output of Get Attachment (V2) |
| STEP-3285 | output of Get Attachment (V2) |
| STEP-3286 | output of HTTP Body 3 |
| STEP-3288 | output of HTTP Request to AI API |
| STEP-3289 | output of Clean Parse JSON Successful Text |
| STEP-3290 | output of Parse JSON |
| STEP-3291 | output of Parse JSON |
| STEP-3292 | output of Parse JSON Succesful |
| STEP-3293 | output of Parse JSON Successful Text |
| STEP-3294 | output of HTML Values |
| STEP-3296 | output of HTTP Request to AI API |
| STEP-3297 | output of Parse JSON Error |
| STEP-3298 | output of Parse JSON Body Parse JSON Error |
| STEP-3300 | variable 'varAttachmentsHTML'<br>output of Parse JSON |
| STEP-3301 | output of HTML with Attachments |
| STEP-3302 | output of Get email (V2) |

## 5.5 Stages and activities

27 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3280 | 1 | Get email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Compose AI Action Required reaches Succeeded | Compose AI Action Required = Succeeded | output of Compose Email ID | Reads one mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3281 | 2 | Condition | flow root | Power Automate — Web - Email AI Assist | Get email (V2) reaches Succeeded | Get email (V2) = Succeeded | output of Get email (V2) | Evaluates a condition and runs one of two branches. | Condition: {"equals":["@outputs('Get_email_(V2)')?['body/hasAttachments']",true]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | HTTP Body 3 | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3282 | 3 | Apply to each | Condition | Power Automate — Web - Email AI Assist | Entry of Condition | None declared beyond entry into its container. | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3283 | 4 | Get Attachment (V2) | Apply to each | Microsoft Office 365 Outlook, called by the flow | Entry of Apply to each | None declared beyond entry into its container. | output of Get email (V2) | Reads an attachment from a mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition 2 | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3284 | 5 | Condition 2 | Apply to each | Power Automate — Web - Email AI Assist | Get Attachment (V2) reaches Succeeded | Get Attachment (V2) = Succeeded | output of Get Attachment (V2) | Evaluates a condition and runs one of two branches. | Condition: {"equals":["@outputs('Get_Attachment_(V2)')?['body/isInline']",true]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3285 | 6 | base64AttachmentContent | Condition 2 · else | Power Automate — Web - Email AI Assist | Entry of Condition 2 · else | None declared beyond entry into its container. | output of Get Attachment (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3286 | 7 | HTTP Request to AI API | flow root | Power Automate — Web - Email AI Assist | HTTP Body 3 reaches Succeeded | HTTP Body 3 = Succeeded | output of HTTP Body 3 | Calls an external HTTP endpoint directly, without a connector. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Successful | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3287 | 8 | Scope Successful | flow root | Power Automate — Web - Email AI Assist | HTTP Request to AI API reaches Succeeded | HTTP Request to AI API = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Errror | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3288 | 9 | Parse JSON Succesful | Scope Successful | Power Automate — Web - Email AI Assist | Entry of Scope Successful | None declared beyond entry into its container. | output of HTTP Request to AI API | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON Successful Text | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3289 | 10 | Parse JSON | Scope Successful | Power Automate — Web - Email AI Assist | Clean Parse JSON Successful Text reaches Succeeded | Clean Parse JSON Successful Text = Succeeded | output of Clean Parse JSON Successful Text | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Extract Values JSON | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3290 | 11 | HTML Values | Scope Successful | Power Automate — Web - Email AI Assist | Extract Values JSON reaches Succeeded | Extract Values JSON = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3291 | 12 | Extract Values JSON | Scope Successful | Power Automate — Web - Email AI Assist | Parse JSON reaches Succeeded | Parse JSON = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTML Values | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3292 | 13 | Parse JSON Successful Text | Scope Successful | Power Automate — Web - Email AI Assist | Parse JSON Succesful reaches Succeeded | Parse JSON Succesful = Succeeded | output of Parse JSON Succesful | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Clean Parse JSON Successful Text | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3293 | 14 | Clean Parse JSON Successful Text | Scope Successful | Power Automate — Web - Email AI Assist | Parse JSON Successful Text reaches Succeeded | Parse JSON Successful Text = Succeeded | output of Parse JSON Successful Text | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Parse JSON | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3294 | 15 | Set variable | Scope Successful | Power Automate — Web - Email AI Assist | HTML Values reaches Succeeded | HTML Values = Succeeded | output of HTML Values | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3295 | 16 | Scope Errror | flow root | Power Automate — Web - Email AI Assist | Scope Successful reaches Succeeded | Scope Successful = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Response | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3296 | 17 | Parse JSON Error | Scope Errror | Power Automate — Web - Email AI Assist | Entry of Scope Errror | None declared beyond entry into its container. | output of HTTP Request to AI API | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON Body Parse JSON Error | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3297 | 18 | Parse JSON Body Parse JSON Error | Scope Errror | Power Automate — Web - Email AI Assist | Parse JSON Error reaches Succeeded | Parse JSON Error = Succeeded | output of Parse JSON Error | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varResponse Error | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3298 | 19 | Set variable varResponse Error | Scope Errror | Power Automate — Web - Email AI Assist | Parse JSON Body Parse JSON Error reaches Succeeded | Parse JSON Body Parse JSON Error = Succeeded | output of Parse JSON Body Parse JSON Error | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3299 | 20 | Scope Response | flow root | Power Automate — Web - Email AI Assist | Scope Errror reaches Succeeded | Scope Errror = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3300 | 21 | HTML with Attachments | Scope Response | Power Automate — Web - Email AI Assist | Entry of Scope Response | None declared beyond entry into its container. | variable 'varAttachmentsHTML'<br>output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3301 | 22 | Response | Scope Response | Power Automate — Web - Email AI Assist | HTML with Attachments reaches Succeeded | HTML with Attachments = Succeeded | output of HTML with Attachments | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3302 | 23 | HTTP Body 3 | flow root | Power Automate — Web - Email AI Assist | Condition reaches Succeeded | Condition = Succeeded | output of Get email (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Request to AI API | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3303 | 24 | Initialize variable | flow root | Power Automate — Web - Email AI Assist | Initialize variable 2 reaches Succeeded | Initialize variable 2 = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Compose Email ID | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3304 | 25 | Initialize variable 2 | flow root | Power Automate — Web - Email AI Assist | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3305 | 26 | Compose Email ID | flow root | Power Automate — Web - Email AI Assist | Initialize variable reaches Succeeded | Initialize variable = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose AI Action Required | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |
| STEP-3306 | 27 | Compose AI Action Required | flow root | Power Automate — Web - Email AI Assist | Compose Email ID reaches Succeeded | Compose Email ID = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Get email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-123 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-152 | Condition | Power Automate — Web - Email AI Assist | `{"equals":["@outputs('Get_email_(V2)')?['body/hasAttachments']",true]}` | output of Get email (V2) | true<br>false | true → Apply to each<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-153 | Condition 2 | Power Automate — Web - Email AI Assist | `{"equals":["@outputs('Get_Attachment_(V2)')?['body/isInline']",true]}` | output of Get Attachment (V2) | true<br>false | true → no action; the branch is empty<br>false → base64AttachmentContent | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

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
