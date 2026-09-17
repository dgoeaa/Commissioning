# PROC-075 — OPS_REFERENCES_AND_LOOKUPS

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-075 |
| Name | OPS_REFERENCES_AND_LOOKUPS |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 36 action(s) under 1 trigger(s). |
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
| Sources | `SRC-107` docs/reference/flow-contracts/deployed/OPS_REFERENCES_AND_LOOKUPS__9695b92b-f67a-6593-7f86-6134691c737e__full_definition.json |

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
| STEP-2421 | Initialize variable varStatusCode | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2422 | Initialize variable varResponse | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2423 | Initialize variable varOk | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2424 | Initialize variable varMessage | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2425 | Scope Fetch Lookups | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2426 | Scope Users | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2427 | Select Users | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2428 | Filter array Enabled Users | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2429 | Search for users (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2430 | Scope Departments | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2431 | Get items Departments | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2432 | Select Departments | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2433 | Scope Categories | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2434 | Select Categories | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2435 | Get items Categories | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2436 | Scope Lookups Fetch Successful | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2437 | Append to string variable varResponse Fetch All Lookups success | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2438 | Set variable varStatusCode Fetch Lookups succressful | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2439 | Scope Lookups Fetch error | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2440 | Append to string variable varResponse Fetch Lookups error | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2441 | Set variable varStatusCode Fetch Lookups error | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2442 | Scope Response | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2443 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2444 | Response | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2445 | Compose Response Schema Depreciated | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2446 | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2447 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-2448 | Compose Redacted Headers | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2449 | Compose Redacted Queries | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2450 | Compose Flow Run Record | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2451 | Compose Flow Run Record Schema | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2452 | Compose Telemetry Attachments | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2453 | Try | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2454 | Compose Body Get Flow Definition | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2455 | Compose TriggerBody | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Automated |
| STEP-2456 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 9695b92b-f67a-6593-7f86-6134691c737e |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2427 | output of Filter array Enabled Users |
| STEP-2428 | output of Search for users (V2) |
| STEP-2432 | output of Get items Departments |
| STEP-2434 | output of Get items Categories |
| STEP-2437 | output of Select Users<br>output of Select Categories<br>output of Select Departments |
| STEP-2440 | output of Select Users<br>output of Select Categories<br>output of Select Departments |
| STEP-2443 | variable 'varResponse' |
| STEP-2444 | variable 'varStatusCode'<br>variable 'varResponse' |
| STEP-2450 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |
| STEP-2452 | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose Body Get Flow Definition<br>output of Compose TriggerBody |
| STEP-2454 | output of Get Flow Definition |
| STEP-2456 | output of Compose Telemetry Attachments |

## 5.5 Stages and activities

36 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2421 | 1 | Initialize variable varStatusCode | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2422 | 2 | Initialize variable varResponse | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varOk | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2423 | 3 | Initialize variable varOk | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varMessage | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2424 | 4 | Initialize variable varMessage | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Initialize variable varOk reaches Succeeded | Initialize variable varOk = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Fetch Lookups | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2425 | 5 | Scope Fetch Lookups | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Initialize variable varMessage reaches Succeeded | Initialize variable varMessage = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Lookups Fetch Successful<br>Scope Lookups Fetch error | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2426 | 6 | Scope Users | Scope Fetch Lookups | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2427 | 7 | Select Users | Scope Users | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Filter array Enabled Users reaches Succeeded | Filter array Enabled Users = Succeeded | output of Filter array Enabled Users | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2428 | 8 | Filter array Enabled Users | Scope Users | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Search for users (V2) reaches Succeeded | Search for users (V2) = Succeeded | output of Search for users (V2) | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select Users | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2429 | 9 | Search for users (V2) | Scope Users | Microsoft Office 365 Outlook, called by the flow | Entry of Scope Users | None declared beyond entry into its container. | — | Resolves a person against the directory. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Filter array Enabled Users | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2430 | 10 | Scope Departments | Scope Fetch Lookups | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2431 | 11 | Get items Departments | Scope Departments | Microsoft SharePoint Online, called by the flow | Entry of Scope Departments | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Departments | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2432 | 12 | Select Departments | Scope Departments | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Get items Departments reaches Succeeded | Get items Departments = Succeeded | output of Get items Departments | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2433 | 13 | Scope Categories | Scope Fetch Lookups | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2434 | 14 | Select Categories | Scope Categories | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Get items Categories reaches Succeeded | Get items Categories = Succeeded | output of Get items Categories | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2435 | 15 | Get items Categories | Scope Categories | Microsoft SharePoint Online, called by the flow | Entry of Scope Categories | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Categories | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2436 | 16 | Scope Lookups Fetch Successful | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Scope Fetch Lookups reaches Succeeded | Scope Fetch Lookups = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Response (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2437 | 17 | Append to string variable varResponse Fetch All Lookups success | Scope Lookups Fetch Successful | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Set variable varStatusCode Fetch Lookups succressful reaches Succeeded | Set variable varStatusCode Fetch Lookups succressful = Succeeded | output of Select Users<br>output of Select Categories<br>output of Select Departments | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2438 | 18 | Set variable varStatusCode Fetch Lookups succressful | Scope Lookups Fetch Successful | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Entry of Scope Lookups Fetch Successful | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable varResponse Fetch All Lookups success | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2439 | 19 | Scope Lookups Fetch error | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Scope Fetch Lookups reaches Succeeded | Scope Fetch Lookups = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Response (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2440 | 20 | Append to string variable varResponse Fetch Lookups error | Scope Lookups Fetch error | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Set variable varStatusCode Fetch Lookups error reaches Succeeded | Set variable varStatusCode Fetch Lookups error = Succeeded | output of Select Users<br>output of Select Categories<br>output of Select Departments | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2441 | 21 | Set variable varStatusCode Fetch Lookups error | Scope Lookups Fetch error | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Entry of Scope Lookups Fetch error | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable varResponse Fetch Lookups error | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2442 | 22 | Scope Response | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Scope Lookups Fetch Successful reaches Succeeded or TimedOut or Skipped or Failed; Scope Lookups Fetch error reaches Succeeded or TimedOut or Failed or Skipped | Scope Lookups Fetch Successful = Succeeded\|TimedOut\|Skipped\|Failed<br>Scope Lookups Fetch error = Succeeded\|TimedOut\|Failed\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-107 |
| STEP-2443 | 23 | Send an email (V2) | Scope Response | Microsoft Office 365 Outlook, called by the flow | Entry of Scope Response | None declared beyond entry into its container. | variable 'varResponse' | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-107 |
| STEP-2444 | 24 | Response | Scope Response | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Entry of Scope Response | None declared beyond entry into its container. | variable 'varStatusCode'<br>variable 'varResponse' | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | Compose Response Schema Depreciated | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2445 | 25 | Compose Response Schema Depreciated | Scope Response | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Response reaches Succeeded | Response = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2446 | 26 | Scope Flow Data Capture | flow root | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Scope Response reaches Succeeded or TimedOut or Skipped or Failed | Scope Response = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-107 |
| STEP-2447 | 27 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Try reaches Succeeded | Try = Succeeded | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Headers | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2448 | 28 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Queries | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2449 | 29 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Body Get Flow Definition | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2450 | 30 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Compose TriggerBody reaches Succeeded | Compose TriggerBody = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2451 | 31 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2452 | 32 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose Body Get Flow Definition<br>output of Compose TriggerBody | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2453 | 33 | Try | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Get Flow Definition | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2454 | 34 | Compose Body Get Flow Definition | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose TriggerBody | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2455 | 35 | Compose TriggerBody | Scope Flow Data Capture | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Compose Body Get Flow Definition reaches Succeeded | Compose Body Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-107 |
| STEP-2456 | 36 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-107 |

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
| Notifications issued | NOTIF-227 Send an email (V2)<br>NOTIF-228 Send Telemetry Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-180 | Recovery after Scope Lookups Fetch Successful, Scope Lookups Fetch error | Scope Lookups Fetch Successful reaches TimedOut or Skipped or Failed; Scope Lookups Fetch error reaches TimedOut or Failed or Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Response. | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-181 | Recovery after Scope Response | Scope Response reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — OPS_REFERENCES_AND_LOOKUPS | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2443 Send an email (V2) | Sends a message; delivery is the record. |
| STEP-2456 Send Telemetry Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
