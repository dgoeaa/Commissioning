# PROC-095 — Web - Get Tasks GET SWITCH

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-095 |
| Name | Web - Get Tasks GET SWITCH |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 35 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook, Microsoft Power Automate Management, Microsoft SharePoint Online. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-127` docs/reference/flow-contracts/deployed/Web - Get Tasks GET SWITCH__49de1ff0-2c9a-ac37-1070-5ba9103c3bac__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-3513 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3514 | Switch | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3515 | Append to string variable varResponse HTTP | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3516 | Set variable StatusCode HTTP | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3517 | Select parse JSON HTTP | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3518 | Parse JSON HTTP | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3519 | Send an HTTP request to SharePoint | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3520 | Compose  HTTP  SharePoint ODataQuery | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3521 | Append to String Variable HTTP varEmailAttachmentTitle | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3522 | Append to string variable HTTP varEmailAttachmentContent | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3523 | Select Get Tasks | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3524 | Get items Tasks | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3525 | Append to string variable varResponse Get Items | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3526 | Set variable StatusCode Get Items | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3527 | Select Get Tasks 1 | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3528 | Append to string variable varEmailAttachmentContent | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3529 | Append to String Variable varEmailAttachmentTitle | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3530 | Set variable StatusCodeSwitchCase error | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3531 | Append to string variable error | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3532 | Initialize variable varSwitchCase | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3533 | Set variable varSwitchCase | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3534 | Initialize variable varResponse | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3535 | Initialize variable varStatusCode | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3536 | Response | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3537 | Initialize variable varEmailAttachmentContent | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3538 | Initialize variable varEmailAttachmentTitle | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3539 | Scope Flow Data Capture | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3540 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-3541 | Compose Redacted Headers | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3542 | Compose Redacted Queries | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3543 | Compose Flow Run Record | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3544 | Compose Flow Run Record Schema | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3545 | Compose Telemetry Attachments | Power Automate — Web - Get Tasks GET SWITCH | Automated |
| STEP-3546 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3547 | Try | Power Automate — Web - Get Tasks GET SWITCH | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 49de1ff0-2c9a-ac37-1070-5ba9103c3bac |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3513 | variable 'varResponse' |
| STEP-3514 | variable 'varSwitchCase' |
| STEP-3515 | output of Select parse JSON HTTP |
| STEP-3517 | output of Parse JSON HTTP |
| STEP-3518 | output of Send an HTTP request to SharePoint |
| STEP-3519 | output of Compose  HTTP  SharePoint ODataQuery |
| STEP-3522 | output of Select parse JSON HTTP |
| STEP-3523 | output of Get items Tasks |
| STEP-3525 | output of Select Get Tasks |
| STEP-3527 | output of Get items Tasks |
| STEP-3528 | output of Select Get Tasks |
| STEP-3536 | variable 'varStatusCode'<br>variable 'varResponse' |
| STEP-3543 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |
| STEP-3545 | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition |
| STEP-3546 | output of Compose Telemetry Attachments |

## 5.5 Stages and activities

35 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3513 | 1 | Send an email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Switch reaches Succeeded | Switch = Succeeded | variable 'varResponse' | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | Response (runs when this does not succeed) | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-127 |
| STEP-3514 | 2 | Switch | flow root | Power Automate — Web - Get Tasks GET SWITCH | Set variable varSwitchCase reaches Succeeded | Set variable varSwitchCase = Succeeded | variable 'varSwitchCase' | Evaluates an expression and runs the matching case. | Discriminator: @variables('varSwitchCase') | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Send an email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3515 | 3 | Append to string variable varResponse HTTP | Switch · case Case HTTP | Power Automate — Web - Get Tasks GET SWITCH | Set variable StatusCode HTTP reaches Succeeded | Set variable StatusCode HTTP = Succeeded | output of Select parse JSON HTTP | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Append to String Variable HTTP varEmailAttachmentTitle | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3516 | 4 | Set variable StatusCode HTTP | Switch · case Case HTTP | Power Automate — Web - Get Tasks GET SWITCH | Select parse JSON HTTP reaches Succeeded | Select parse JSON HTTP = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable varResponse HTTP | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3517 | 5 | Select parse JSON HTTP | Switch · case Case HTTP | Power Automate — Web - Get Tasks GET SWITCH | Parse JSON HTTP reaches Succeeded | Parse JSON HTTP = Succeeded | output of Parse JSON HTTP | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Set variable StatusCode HTTP | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3518 | 6 | Parse JSON HTTP | Switch · case Case HTTP | Power Automate — Web - Get Tasks GET SWITCH | Send an HTTP request to SharePoint reaches Succeeded | Send an HTTP request to SharePoint = Succeeded | output of Send an HTTP request to SharePoint | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select parse JSON HTTP | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3519 | 7 | Send an HTTP request to SharePoint | Switch · case Case HTTP | Microsoft SharePoint Online, called by the flow | Compose  HTTP  SharePoint ODataQuery reaches Succeeded | Compose  HTTP  SharePoint ODataQuery = Succeeded | output of Compose  HTTP  SharePoint ODataQuery | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Parse JSON HTTP | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3520 | 8 | Compose  HTTP  SharePoint ODataQuery | Switch · case Case HTTP | Power Automate — Web - Get Tasks GET SWITCH | Entry of Switch · case Case HTTP | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request to SharePoint | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3521 | 9 | Append to String Variable HTTP varEmailAttachmentTitle | Switch · case Case HTTP | Power Automate — Web - Get Tasks GET SWITCH | Append to string variable varResponse HTTP reaches Succeeded | Append to string variable varResponse HTTP = Succeeded | — | Appends text to a run-scoped string. | Writes 'varEmailAttachmentTitle'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varEmailAttachmentTitle'. | — | Append to string variable HTTP varEmailAttachmentContent | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3522 | 10 | Append to string variable HTTP varEmailAttachmentContent | Switch · case Case HTTP | Power Automate — Web - Get Tasks GET SWITCH | Append to String Variable HTTP varEmailAttachmentTitle reaches Succeeded | Append to String Variable HTTP varEmailAttachmentTitle = Succeeded | output of Select parse JSON HTTP | Appends text to a run-scoped string. | Writes 'varEmailAttachmentContent'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varEmailAttachmentContent'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3523 | 11 | Select Get Tasks | Switch · case Case GETITEMS | Power Automate — Web - Get Tasks GET SWITCH | Select Get Tasks 1 reaches Succeeded | Select Get Tasks 1 = Succeeded | output of Get items Tasks | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Set variable StatusCode Get Items | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3524 | 12 | Get items Tasks | Switch · case Case GETITEMS | Microsoft SharePoint Online, called by the flow | Entry of Switch · case Case GETITEMS | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Get Tasks 1 | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3525 | 13 | Append to string variable varResponse Get Items | Switch · case Case GETITEMS | Power Automate — Web - Get Tasks GET SWITCH | Set variable StatusCode Get Items reaches Succeeded | Set variable StatusCode Get Items = Succeeded | output of Select Get Tasks | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Append to string variable varEmailAttachmentContent | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3526 | 14 | Set variable StatusCode Get Items | Switch · case Case GETITEMS | Power Automate — Web - Get Tasks GET SWITCH | Select Get Tasks reaches Succeeded | Select Get Tasks = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable varResponse Get Items | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3527 | 15 | Select Get Tasks 1 | Switch · case Case GETITEMS | Power Automate — Web - Get Tasks GET SWITCH | Get items Tasks reaches Succeeded | Get items Tasks = Succeeded | output of Get items Tasks | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select Get Tasks | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3528 | 16 | Append to string variable varEmailAttachmentContent | Switch · case Case GETITEMS | Power Automate — Web - Get Tasks GET SWITCH | Append to string variable varResponse Get Items  reaches Succeeded | Append to string variable varResponse Get Items  = Succeeded | output of Select Get Tasks | Appends text to a run-scoped string. | Writes 'varEmailAttachmentContent'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varEmailAttachmentContent'. | — | Append to String Variable varEmailAttachmentTitle | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3529 | 17 | Append to String Variable varEmailAttachmentTitle | Switch · case Case GETITEMS | Power Automate — Web - Get Tasks GET SWITCH | Append to string variable varEmailAttachmentContent reaches Succeeded | Append to string variable varEmailAttachmentContent = Succeeded | — | Appends text to a run-scoped string. | Writes 'varEmailAttachmentTitle'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varEmailAttachmentTitle'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3530 | 18 | Set variable StatusCodeSwitchCase error | Switch · default | Power Automate — Web - Get Tasks GET SWITCH | Entry of Switch · default | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable error | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3531 | 19 | Append to string variable error | Switch · default | Power Automate — Web - Get Tasks GET SWITCH | Set variable StatusCodeSwitchCase error reaches Succeeded | Set variable StatusCodeSwitchCase error = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3532 | 20 | Initialize variable varSwitchCase | flow root | Power Automate — Web - Get Tasks GET SWITCH | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3533 | 21 | Set variable varSwitchCase | flow root | Power Automate — Web - Get Tasks GET SWITCH | Initialize variable varEmailAttachmentTitle reaches Succeeded | Initialize variable varEmailAttachmentTitle = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varSwitchCase'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varSwitchCase'. | — | Switch | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3534 | 22 | Initialize variable varResponse | flow root | Power Automate — Web - Get Tasks GET SWITCH | Initialize variable varSwitchCase reaches Succeeded | Initialize variable varSwitchCase = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3535 | 23 | Initialize variable varStatusCode | flow root | Power Automate — Web - Get Tasks GET SWITCH | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varEmailAttachmentContent | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3536 | 24 | Response | flow root | Power Automate — Web - Get Tasks GET SWITCH | Send an email (V2) reaches Succeeded or TimedOut or Skipped or Failed | Send an email (V2) = Succeeded\|TimedOut\|Skipped\|Failed | variable 'varStatusCode'<br>variable 'varResponse' | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-127 |
| STEP-3537 | 25 | Initialize variable varEmailAttachmentContent | flow root | Power Automate — Web - Get Tasks GET SWITCH | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varEmailAttachmentTitle | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3538 | 26 | Initialize variable varEmailAttachmentTitle | flow root | Power Automate — Web - Get Tasks GET SWITCH | Initialize variable varEmailAttachmentContent reaches Succeeded | Initialize variable varEmailAttachmentContent = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Set variable varSwitchCase | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3539 | 27 | Scope Flow Data Capture | flow root | Power Automate — Web - Get Tasks GET SWITCH | Response reaches Succeeded or TimedOut or Skipped or Failed | Response = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-127 |
| STEP-3540 | 28 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Try reaches Succeeded | Try = Succeeded | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Headers | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3541 | 29 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — Web - Get Tasks GET SWITCH | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Queries | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3542 | 30 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — Web - Get Tasks GET SWITCH | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3543 | 31 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — Web - Get Tasks GET SWITCH | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3544 | 32 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — Web - Get Tasks GET SWITCH | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3545 | 33 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — Web - Get Tasks GET SWITCH | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |
| STEP-3546 | 34 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-127 |
| STEP-3547 | 35 | Try | Scope Flow Data Capture | Power Automate — Web - Get Tasks GET SWITCH | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Get Flow Definition | — | — | — | — | — | Confirmed | No external validation required | SRC-127 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-156 | Switch | Power Automate — Web - Get Tasks GET SWITCH | `@variables('varSwitchCase')` | variable 'varSwitchCase' | HTTP<br>GETITEMS | "HTTP" → Append to string variable varResponse HTTP, Set variable StatusCode HTTP, Select parse JSON HTTP, Parse JSON HTTP, Send an HTTP request to SharePoint, Compose  HTTP  SharePoint ODataQuery, Append to String Variable HTTP varEmailAttachmentTitle, Append to string variable HTTP varEmailAttachmentContent<br>"GETITEMS" → Select Get Tasks, Get items Tasks, Append to string variable varResponse Get Items , Set variable StatusCode Get Items, Select Get Tasks 1, Append to string variable varEmailAttachmentContent, Append to String Variable varEmailAttachmentTitle | Default branch runs: Set variable StatusCodeSwitchCase error, Append to string variable error. | Not declared on the decision itself. | Confirmed |

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
| Notifications issued | NOTIF-247 Send an email (V2)<br>NOTIF-248 Send Telemetry Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-240 | Recovery after Send an email (V2) | Send an email (V2) reaches TimedOut or Skipped or Failed | Returns the HTTP response to the caller and ends the request. | The caller receives HTTP @variables('varStatusCode'). | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Response. | Power Automate — Web - Get Tasks GET SWITCH | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-241 | Recovery after Response | Response reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — Web - Get Tasks GET SWITCH | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3513 Send an email (V2) | Sends a message; delivery is the record. |
| STEP-3546 Send Telemetry Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
