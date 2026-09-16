# PROC-093 — Web - Email To Task Processing

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-093 |
| Name | Web - Email To Task Processing |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 50 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | Add a new items into a SharePoint list and then send an email when a button or link in Power Apps is selected. |
| Business objective | The export carries a workflow-level description: "Add a new items into a SharePoint list and then send an email when a button or link in Power Apps is selected.". A Power Automate workflow inherits the description of the template it was created from, and an export does not record whether that text was ever edited, so this is evidence of provenance and is NOT established as a statement of what this workflow does. |
| Operational objective | Reads from and writes to Microsoft Mail (send-only), Microsoft Office 365 Outlook. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. A workflow-level description is present but is REQUIRES AUTHORITATIVE VALIDATION: an export does not distinguish a description someone wrote from the one the source template supplied. Owner and criticality are NOT evidenced: no supplied artifact carries either field. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-125` docs/reference/flow-contracts/deployed/Web - Email To Task Processing__447b1b4d-eca0-f95d-912b-0557639c98c8__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Mail (send-only)<br>Microsoft Office 365 Outlook |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-3441 | Initialize variable varResponse | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3442 | HTTP Request to AI API | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3443 | Scope Errror | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3444 | Parse JSON Error | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3445 | Parse JSON Body Parse JSON Error | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3446 | Set variable varResponse Error | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3447 | Set variable varStatusCode error | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3448 | HTTP Body 1 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3449 | HTTP Body 2 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3450 | HTTP Body HTML | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3451 | HTTP Body | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3452 | HTTP Body 4 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3453 | Get email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3454 | HTTP Body Copilot | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3455 | Compose 2 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3456 | Compose 3 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3457 | Compose API KEY HK GEMINI 2 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3458 | Compose API KEY HK GEMINI 1 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3459 | Initialize variable varAttachmentsHTML | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3460 | Scope Successful | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3461 | Parse JSON Succesful | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3462 | Parse JSON | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3463 | Set variable varResponse Successful | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3464 | HTML Values | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3465 | Extract Values JSON | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3466 | Parse JSON Successful Text | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3467 | Clean Parse JSON Successful Text | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3468 | Compose Response | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3469 | HTML with Attachments | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3470 | Set variable varStatusCode successful | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3471 | Set variable varAttachmentsHTML | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3472 | HTTP Body 3 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3473 | Compose Email MessageID | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3474 | Compose. HTTP Body | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3475 | Compose API KEY HK GEMINI 3 | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3476 | Initialize variable varAPIKey | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3477 | Initialize variable emailId | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3478 | Set variable varEmailID | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3479 | Append to string variable | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3480 | Initialize variable varStatusCode | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3481 | Scope | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3482 | Send an email notification (V3) | Microsoft Mail (send-only), called by the flow | Integration |
| STEP-3483 | Response | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3484 | Initialize variable varFailed | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3485 | Initialize variable varRequestId | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3486 | Initialize variable varReceivedAtUtc | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3487 | Initialize variable varStartTicks | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3488 | Initialize variable varResults | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3489 | Initialize variable varErrors | Power Automate — Web - Email To Task Processing | Automated |
| STEP-3490 | Initialize variable varData | Power Automate — Web - Email To Task Processing | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 447b1b4d-eca0-f95d-912b-0557639c98c8 |
| Required system availability | Microsoft Power Automate<br>Microsoft Mail (send-only)<br>Microsoft Office 365 Outlook |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3442 | variable 'varAPIKey'<br>output of Compose. HTTP Body |
| STEP-3444 | output of HTTP Request to AI API |
| STEP-3445 | output of Parse JSON Error |
| STEP-3446 | output of Parse JSON Body Parse JSON Error |
| STEP-3451 | output of Get email (V2) |
| STEP-3452 | output of Get email (V2) |
| STEP-3453 | variable 'emailId' |
| STEP-3454 | output of Get email (V2) |
| STEP-3461 | output of HTTP Request to AI API |
| STEP-3462 | output of Clean Parse JSON Successful Text |
| STEP-3463 | output of Compose Response |
| STEP-3464 | output of Parse JSON |
| STEP-3465 | output of Parse JSON |
| STEP-3466 | output of Parse JSON Succesful |
| STEP-3467 | output of Parse JSON Successful Text |
| STEP-3468 | output of Parse JSON |
| STEP-3469 | variable 'varAttachmentsHTML'<br>output of Parse JSON |
| STEP-3471 | output of HTML with Attachments |
| STEP-3472 | output of Get email (V2) |
| STEP-3473 | trigger field 'emailId' |
| STEP-3474 | output of Get email (V2) |
| STEP-3478 | output of Compose Email MessageID |
| STEP-3479 | output of Compose API KEY HK GEMINI 2 |
| STEP-3482 | output of Get email (V2) |
| STEP-3483 | variable 'varStatusCode' |
| STEP-3485 | trigger field 'requestId' |

## 5.5 Stages and activities

50 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3441 | 1 | Initialize variable varResponse | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varAPIKey reaches Succeeded | Initialize variable varAPIKey = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable emailId | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3442 | 2 | HTTP Request to AI API | flow root | Power Automate — Web - Email To Task Processing | Compose. HTTP Body reaches Succeeded | Compose. HTTP Body = Succeeded | variable 'varAPIKey'<br>output of Compose. HTTP Body | Calls an external HTTP endpoint directly, without a connector. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Successful | Scope Errror (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3443 | 3 | Scope Errror | flow root | Power Automate — Web - Email To Task Processing | HTTP Request to AI API reaches Failed or Skipped or TimedOut | HTTP Request to AI API = Failed\|Skipped\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-125 |
| STEP-3444 | 4 | Parse JSON Error | Scope Errror | Power Automate — Web - Email To Task Processing | Entry of Scope Errror | None declared beyond entry into its container. | output of HTTP Request to AI API | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON Body Parse JSON Error | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3445 | 5 | Parse JSON Body Parse JSON Error | Scope Errror | Power Automate — Web - Email To Task Processing | Parse JSON Error reaches Succeeded | Parse JSON Error = Succeeded | output of Parse JSON Error | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varStatusCode error | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3446 | 6 | Set variable varResponse Error | Scope Errror | Power Automate — Web - Email To Task Processing | Set variable varStatusCode error reaches Succeeded | Set variable varStatusCode error = Succeeded | output of Parse JSON Body Parse JSON Error | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3447 | 7 | Set variable varStatusCode error | Scope Errror | Power Automate — Web - Email To Task Processing | Parse JSON Body Parse JSON Error reaches Succeeded | Parse JSON Body Parse JSON Error = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponse Error | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3448 | 8 | HTTP Body 1 | flow root | Power Automate — Web - Email To Task Processing | Get email (V2) reaches Succeeded | Get email (V2) = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Body 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3449 | 9 | HTTP Body 2 | flow root | Power Automate — Web - Email To Task Processing | HTTP Body 1 reaches Succeeded | HTTP Body 1 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Body HTML | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3450 | 10 | HTTP Body HTML | flow root | Power Automate — Web - Email To Task Processing | HTTP Body 2 reaches Succeeded | HTTP Body 2 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Body | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3451 | 11 | HTTP Body | flow root | Power Automate — Web - Email To Task Processing | HTTP Body HTML reaches Succeeded | HTTP Body HTML = Succeeded | output of Get email (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Body 4 | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3452 | 12 | HTTP Body 4 | flow root | Power Automate — Web - Email To Task Processing | HTTP Body reaches Succeeded | HTTP Body = Succeeded | output of Get email (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Body 3 | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3453 | 13 | Get email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Append to string variable reaches Succeeded | Append to string variable = Succeeded | variable 'emailId' | Reads one mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | HTTP Body 1 | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3454 | 14 | HTTP Body Copilot | flow root | Power Automate — Web - Email To Task Processing | HTTP Body 3 reaches Succeeded | HTTP Body 3 = Succeeded | output of Get email (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3455 | 15 | Compose 2 | flow root | Power Automate — Web - Email To Task Processing | HTTP Body Copilot reaches Succeeded | HTTP Body Copilot = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 3 | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3456 | 16 | Compose 3 | flow root | Power Automate — Web - Email To Task Processing | Compose 2 reaches Succeeded | Compose 2 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose. HTTP Body | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3457 | 17 | Compose API KEY HK GEMINI 2 | flow root | Power Automate — Web - Email To Task Processing | Compose Email MessageID reaches Succeeded | Compose Email MessageID = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose API KEY HK GEMINI 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3458 | 18 | Compose API KEY HK GEMINI 1 | flow root | Power Automate — Web - Email To Task Processing | Compose API KEY HK GEMINI 2 reaches Succeeded | Compose API KEY HK GEMINI 2 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose API KEY HK GEMINI 3 | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3459 | 19 | Initialize variable varAttachmentsHTML | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varAPIKey | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3460 | 20 | Scope Successful | flow root | Power Automate — Web - Email To Task Processing | HTTP Request to AI API reaches Succeeded | HTTP Request to AI API = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3461 | 21 | Parse JSON Succesful | Scope Successful | Power Automate — Web - Email To Task Processing | Entry of Scope Successful | None declared beyond entry into its container. | output of HTTP Request to AI API | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON Successful Text | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3462 | 22 | Parse JSON | Scope Successful | Power Automate — Web - Email To Task Processing | Clean Parse JSON Successful Text reaches Succeeded | Clean Parse JSON Successful Text = Succeeded | output of Clean Parse JSON Successful Text | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Extract Values JSON | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3463 | 23 | Set variable varResponse Successful | Scope Successful | Power Automate — Web - Email To Task Processing | Set variable varStatusCode successful reaches Succeeded | Set variable varStatusCode successful = Succeeded | output of Compose Response | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varAttachmentsHTML | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3464 | 24 | HTML Values | Scope Successful | Power Automate — Web - Email To Task Processing | Extract Values JSON reaches Succeeded | Extract Values JSON = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTML with Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3465 | 25 | Extract Values JSON | Scope Successful | Power Automate — Web - Email To Task Processing | Parse JSON reaches Succeeded | Parse JSON = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTML Values | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3466 | 26 | Parse JSON Successful Text | Scope Successful | Power Automate — Web - Email To Task Processing | Parse JSON Succesful reaches Succeeded | Parse JSON Succesful = Succeeded | output of Parse JSON Succesful | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Clean Parse JSON Successful Text | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3467 | 27 | Clean Parse JSON Successful Text | Scope Successful | Power Automate — Web - Email To Task Processing | Parse JSON Successful Text reaches Succeeded | Parse JSON Successful Text = Succeeded | output of Parse JSON Successful Text | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Parse JSON | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3468 | 28 | Compose Response | Scope Successful | Power Automate — Web - Email To Task Processing | HTML with Attachments reaches Succeeded | HTML with Attachments = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varStatusCode successful | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3469 | 29 | HTML with Attachments | Scope Successful | Power Automate — Web - Email To Task Processing | HTML Values reaches Succeeded | HTML Values = Succeeded | variable 'varAttachmentsHTML'<br>output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Response | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3470 | 30 | Set variable varStatusCode successful | Scope Successful | Power Automate — Web - Email To Task Processing | Compose Response reaches Succeeded | Compose Response = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponse Successful | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3471 | 31 | Set variable varAttachmentsHTML | Scope Successful | Power Automate — Web - Email To Task Processing | Set variable varResponse Successful reaches Succeeded | Set variable varResponse Successful = Succeeded | output of HTML with Attachments | Replaces the value held in a run-scoped variable. | Writes 'varAttachmentsHTML'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varAttachmentsHTML'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3472 | 32 | HTTP Body 3 | flow root | Power Automate — Web - Email To Task Processing | HTTP Body 4 reaches Succeeded | HTTP Body 4 = Succeeded | output of Get email (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Body Copilot | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3473 | 33 | Compose Email MessageID | flow root | Power Automate — Web - Email To Task Processing | Flow trigger fires | None declared beyond entry into its container. | trigger field 'emailId' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose API KEY HK GEMINI 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3474 | 34 | Compose. HTTP Body | flow root | Power Automate — Web - Email To Task Processing | Compose 3 reaches Succeeded | Compose 3 = Succeeded | output of Get email (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Request to AI API | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3475 | 35 | Compose API KEY HK GEMINI 3 | flow root | Power Automate — Web - Email To Task Processing | Compose API KEY HK GEMINI 1 reaches Succeeded | Compose API KEY HK GEMINI 1 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Initialize variable varFailed | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3476 | 36 | Initialize variable varAPIKey | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varAttachmentsHTML reaches Succeeded | Initialize variable varAttachmentsHTML = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3477 | 37 | Initialize variable emailId | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3478 | 38 | Set variable varEmailID | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | output of Compose Email MessageID | Replaces the value held in a run-scoped variable. | Writes 'emailId'. | The value is held in the run and made available to later steps. | Run-scoped variable 'emailId'. | — | Append to string variable | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3479 | 39 | Append to string variable | flow root | Power Automate — Web - Email To Task Processing | Set variable varEmailID reaches Succeeded | Set variable varEmailID = Succeeded | output of Compose API KEY HK GEMINI 2 | Appends text to a run-scoped string. | Writes 'varAPIKey'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varAPIKey'. | — | Get email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3480 | 40 | Initialize variable varStatusCode | flow root | Power Automate — Web - Email To Task Processing | Initialize variable emailId reaches Succeeded | Initialize variable emailId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Set variable varEmailID | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3481 | 41 | Scope | flow root | Power Automate — Web - Email To Task Processing | Scope Errror reaches Succeeded or Failed or Skipped or TimedOut; Scope Successful reaches Succeeded or Failed or Skipped or TimedOut | Scope Errror = Succeeded\|Failed\|Skipped\|TimedOut<br>Scope Successful = Succeeded\|Failed\|Skipped\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-125 |
| STEP-3482 | 42 | Send an email notification (V3) | Scope | Microsoft Mail (send-only), called by the flow | Entry of Scope | None declared beyond entry into its container. | output of Get email (V2) | Sends an outbound message. | — | Microsoft Mail (send-only) returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Mail (send-only) | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-125 |
| STEP-3483 | 43 | Response | Scope | Power Automate — Web - Email To Task Processing | Entry of Scope | None declared beyond entry into its container. | variable 'varStatusCode' | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3484 | 44 | Initialize variable varFailed | flow root | Power Automate — Web - Email To Task Processing | Compose API KEY HK GEMINI 3 reaches Succeeded | Compose API KEY HK GEMINI 3 = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRequestId | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3485 | 45 | Initialize variable varRequestId | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varFailed reaches Succeeded | Initialize variable varFailed = Succeeded | trigger field 'requestId' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3486 | 46 | Initialize variable varReceivedAtUtc | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3487 | 47 | Initialize variable varStartTicks | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResults | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3488 | 48 | Initialize variable varResults | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3489 | 49 | Initialize variable varErrors | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varResults reaches Succeeded | Initialize variable varResults = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |
| STEP-3490 | 50 | Initialize variable varData | flow root | Power Automate — Web - Email To Task Processing | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varAttachmentsHTML | — | — | — | — | — | Confirmed | No external validation required | SRC-125 |

## 5.6 Decisions and branches

_No decision point is evidenced in this process._

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 1 response action(s); status codes @variables('varStatusCode'). |
| Successful end state | A Response action returns to the caller. 1 response action(s); status codes @variables('varStatusCode'). |
| Alternative end states | 2 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-245 Send an email notification (V3) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-235 | Recovery after HTTP Request to AI API | HTTP Request to AI API reaches Failed or Skipped or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Errror. | Power Automate — Web - Email To Task Processing | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-236 | Recovery after Scope Errror, Scope Successful | Scope Errror reaches Failed or Skipped or TimedOut; Scope Successful reaches Failed or Skipped or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope. | Power Automate — Web - Email To Task Processing | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3482 Send an email notification (V3) | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
