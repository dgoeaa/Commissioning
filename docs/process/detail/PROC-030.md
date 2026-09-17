# PROC-030 — 02 - Fetch_References_and_Lookups_Data - POST

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-030 |
| Name | 02 - Fetch_References_and_Lookups_Data - POST |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 39 action(s) under 1 trigger(s). |
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
| Sources | `SRC-056` docs/reference/flow-contracts/deployed/02 - Fetch_References_and_Lookups_Data - POST__e1a827d5-9e2b-dd03-9510-c24ace9c3999__full_definition.json |

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
| STEP-0294 | Initialize variable varStatusCode | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0295 | Initialize variable varData | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0296 | Initialize variable varRequestId | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0297 | Initialize variable varReceivedAtUtc | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0298 | Initialize variable varStartTicks | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0299 | Initialize variable varErrors | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0300 | Initialize variable  varDurationMs | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0301 | Initialize variable varCompletedAtUtc | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0302 | Scope Global | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0303 | Scope Data Retrieval | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0304 | Set variable varData | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0305 | Scope Fetch Lookups | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0306 | Scope Users | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0307 | Select Users | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0308 | Filter array Enabled Users | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0309 | Search for users (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0310 | Scope Departments | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0311 | Get items Departments | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0312 | Select Departments | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0313 | Scope Categories | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0314 | Select Categories | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0315 | Get items Categories | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0316 | Scope Finalize Response State | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0317 | Set variable  varDurationMs | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0318 | Set variable varCompletedAtUtc | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0319 | Set variable varStatusCode | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0320 | Scope Data Retrieval Catch | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0321 | Append to array variable varErrrors (array) | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0322 | Set variable varData 2 | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0323 | Response | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0324 | Compose  Standard Response Revised | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0325 | Scope Flow Data Capture | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0326 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0327 | Compose Telemetry Attachments | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0328 | Compose Flow Run Record Schema | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0329 | Compose Flow Run Record | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0330 | Compose Redacted Headers | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0331 | Compose Redacted Queries | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Automated |
| STEP-0332 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow e1a827d5-9e2b-dd03-9510-c24ace9c3999 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-0304 | output of Select Users<br>output of Select Categories<br>output of Select Departments |
| STEP-0307 | output of Filter array Enabled Users |
| STEP-0308 | output of Search for users (V2) |
| STEP-0312 | output of Get items Departments |
| STEP-0314 | output of Get items Categories |
| STEP-0317 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-0319 | variable 'varErrors' |
| STEP-0321 | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' |
| STEP-0323 | variable 'varStatusCode'<br>output of Compose  Standard Response Revised |
| STEP-0324 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'requestedBy'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' |
| STEP-0326 | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments |
| STEP-0327 | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised |
| STEP-0329 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |

## 5.5 Stages and activities

39 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-0294 | 1 | Initialize variable varStatusCode | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0295 | 2 | Initialize variable varData | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0296 | 3 | Initialize variable varRequestId | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0297 | 4 | Initialize variable varReceivedAtUtc | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0298 | 5 | Initialize variable varStartTicks | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0299 | 6 | Initialize variable varErrors | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0300 | 7 | Initialize variable  varDurationMs | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0301 | 8 | Initialize variable varCompletedAtUtc | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Initialize variable  varDurationMs reaches Succeeded | Initialize variable  varDurationMs = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0302 | 9 | Scope Global | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0303 | 10 | Scope Data Retrieval | Scope Global | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Entry of Scope Global | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Finalize Response State | Scope Data Retrieval Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0304 | 11 | Set variable varData | Scope Data Retrieval | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Scope Fetch Lookups reaches Succeeded | Scope Fetch Lookups = Succeeded | output of Select Users<br>output of Select Categories<br>output of Select Departments | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0305 | 12 | Scope Fetch Lookups | Scope Data Retrieval | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Entry of Scope Data Retrieval | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Set variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0306 | 13 | Scope Users | Scope Fetch Lookups | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0307 | 14 | Select Users | Scope Users | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Filter array Enabled Users reaches Succeeded | Filter array Enabled Users = Succeeded | output of Filter array Enabled Users | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0308 | 15 | Filter array Enabled Users | Scope Users | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Search for users (V2) reaches Succeeded | Search for users (V2) = Succeeded | output of Search for users (V2) | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select Users | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0309 | 16 | Search for users (V2) | Scope Users | Microsoft Office 365 Outlook, called by the flow | Entry of Scope Users | None declared beyond entry into its container. | — | Resolves a person against the directory. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Filter array Enabled Users | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0310 | 17 | Scope Departments | Scope Fetch Lookups | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0311 | 18 | Get items Departments | Scope Departments | Microsoft SharePoint Online, called by the flow | Entry of Scope Departments | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Departments | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0312 | 19 | Select Departments | Scope Departments | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Get items Departments reaches Succeeded | Get items Departments = Succeeded | output of Get items Departments | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0313 | 20 | Scope Categories | Scope Fetch Lookups | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0314 | 21 | Select Categories | Scope Categories | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Get items Categories reaches Succeeded | Get items Categories = Succeeded | output of Get items Categories | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0315 | 22 | Get items Categories | Scope Categories | Microsoft SharePoint Online, called by the flow | Entry of Scope Categories | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Categories | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0316 | 23 | Scope Finalize Response State | Scope Global | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Scope Data Retrieval reaches Succeeded; Scope Data Retrieval Catch reaches Succeeded or Skipped or Failed or TimedOut | Scope Data Retrieval = Succeeded<br>Scope Data Retrieval Catch = Succeeded\|Skipped\|Failed\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose  Standard Response Revised (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-056 |
| STEP-0317 | 24 | Set variable  varDurationMs | Scope Finalize Response State | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Set variable varCompletedAtUtc reaches Succeeded | Set variable varCompletedAtUtc = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0318 | 25 | Set variable varCompletedAtUtc | Scope Finalize Response State | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Set variable varStatusCode reaches Succeeded | Set variable varStatusCode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0319 | 26 | Set variable varStatusCode | Scope Finalize Response State | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Entry of Scope Finalize Response State | None declared beyond entry into its container. | variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0320 | 27 | Scope Data Retrieval Catch | Scope Global | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Scope Data Retrieval reaches TimedOut or Failed or Skipped | Scope Data Retrieval = TimedOut\|Failed\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-056 |
| STEP-0321 | 28 | Append to array variable varErrrors (array) | Scope Data Retrieval Catch | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Entry of Scope Data Retrieval Catch | None declared beyond entry into its container. | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Set variable varData 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0322 | 29 | Set variable varData 2 | Scope Data Retrieval Catch | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Append to array variable varErrrors (array) reaches Succeeded | Append to array variable varErrrors (array) = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0323 | 30 | Response | Scope Global | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Compose  Standard Response Revised reaches Succeeded or TimedOut or Skipped or Failed | Compose  Standard Response Revised = Succeeded\|TimedOut\|Skipped\|Failed | variable 'varStatusCode'<br>output of Compose  Standard Response Revised | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-056 |
| STEP-0324 | 31 | Compose  Standard Response Revised | Scope Global | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Scope Finalize Response State reaches Succeeded or Skipped or TimedOut or Failed | Scope Finalize Response State = Succeeded\|Skipped\|TimedOut\|Failed | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'requestedBy'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | Response (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-056 |
| STEP-0325 | 32 | Scope Flow Data Capture | flow root | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Scope Global reaches Succeeded or TimedOut or Skipped or Failed | Scope Global = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-056 |
| STEP-0326 | 33 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-056 |
| STEP-0327 | 34 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0328 | 35 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0329 | 36 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0330 | 37 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0331 | 38 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Headers | — | — | — | — | — | Confirmed | No external validation required | SRC-056 |
| STEP-0332 | 39 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Queries | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-056 |

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
| Alternative end states | 5 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-166 Send Telemetry Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-026 | Recovery after Scope Data Retrieval, Scope Data Retrieval Catch | Scope Data Retrieval reaches ; Scope Data Retrieval Catch reaches Skipped or Failed or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State. | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-027 | Recovery after Scope Data Retrieval | Scope Data Retrieval reaches TimedOut or Failed or Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Data Retrieval Catch. | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-028 | Recovery after Compose  Standard Response Revised | Compose  Standard Response Revised reaches TimedOut or Skipped or Failed | Returns the HTTP response to the caller and ends the request. | The caller receives HTTP @variables('varStatusCode'). | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Response. | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-029 | Recovery after Scope Finalize Response State | Scope Finalize Response State reaches Skipped or TimedOut or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose  Standard Response Revised. | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-030 | Recovery after Scope Global | Scope Global reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — 02 - Fetch_References_and_Lookups_Data - POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-0326 Send Telemetry Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
