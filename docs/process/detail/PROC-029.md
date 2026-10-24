# PROC-029 — 01-Fetch_Docs_POST

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-029 |
| Name | 01-Fetch_Docs_POST |
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
| Sources | `SRC-055` docs/reference/flow-contracts/deployed/01-Fetch_Docs_POST__e663a119-b4d6-750b-6fd2-67ba2af37b0d__full_definition.json |

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
| STEP-0259 | Initialize variable varStatusCode | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0260 | Initialize variable varData | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0261 | Initialize variable varRequestId | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0262 | Initialize variable varReceivedAtUtc | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0263 | Initialize variable varStartTicks | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0264 | Initialize variable varDurationMs | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0265 | Initialize variable varErrors | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0266 | Initialize variable varCompletedAtUtc | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0267 | Scope Global | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0268 | Scope Data Retrieval | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0269 | Compose Sharepoint HTTP Request ODataQuery | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0270 | Send an HTTP request to SharePoint | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0271 | Select | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0272 | Set variable varData | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0273 | Compose Sharepoint HTTP Request ODataQuery 1 | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0274 | Scope Finalize Response State | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0275 | Set variable  varDurationMs | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0276 | Set variable varCompletedAtUtc | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0277 | Set variable varStatusCode | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0278 | Scope Data Retrieval Catch | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0279 | Append to array variable varErrrors (array)  Data Retrieval Catch | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0280 | Set variable varData Scope Data Retrieval Catch | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0281 | Compose  Standard Response Revised | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0282 | Response | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0283 | Compose topCount  Resolved | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0284 | Scope | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0285 | Compose topCount  Manual | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0286 | Scope Flow Data Capture | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0287 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0288 | Compose Telemetry Attachments | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0289 | Compose Flow Run Record Schema | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0290 | Compose Flow Run Record | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0291 | Compose Redacted Headers | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0292 | Compose Redacted Queries | Power Automate — 01-Fetch_Docs_POST | Automated |
| STEP-0293 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow e663a119-b4d6-750b-6fd2-67ba2af37b0d |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-0269 | trigger field 'odatafilter'<br>output of Compose topCount  Resolved |
| STEP-0270 | output of Compose Sharepoint HTTP Request ODataQuery |
| STEP-0271 | output of Send an HTTP request to SharePoint |
| STEP-0272 | output of Select |
| STEP-0273 | output of Compose topCount  Resolved |
| STEP-0275 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-0277 | variable 'varErrors' |
| STEP-0279 | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' |
| STEP-0281 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'requestedBy'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors'<br>output of Select<br>output of Compose topCount  Manual<br>output of Compose topCount  Resolved |
| STEP-0282 | variable 'varStatusCode'<br>output of Compose  Standard Response Revised |
| STEP-0283 | trigger field 'odatafilter'<br>output of Compose topCount  Manual |
| STEP-0287 | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments |
| STEP-0288 | output of Compose Flow Run Record<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised |
| STEP-0290 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |

## 5.5 Stages and activities

35 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-0259 | 1 | Initialize variable varStatusCode | flow root | Power Automate — 01-Fetch_Docs_POST | Initialize variable varDurationMs reaches Succeeded | Initialize variable varDurationMs = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0260 | 2 | Initialize variable varData | flow root | Power Automate — 01-Fetch_Docs_POST | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0261 | 3 | Initialize variable varRequestId | flow root | Power Automate — 01-Fetch_Docs_POST | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0262 | 4 | Initialize variable varReceivedAtUtc | flow root | Power Automate — 01-Fetch_Docs_POST | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0263 | 5 | Initialize variable varStartTicks | flow root | Power Automate — 01-Fetch_Docs_POST | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0264 | 6 | Initialize variable varDurationMs | flow root | Power Automate — 01-Fetch_Docs_POST | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0265 | 7 | Initialize variable varErrors | flow root | Power Automate — 01-Fetch_Docs_POST | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0266 | 8 | Initialize variable varCompletedAtUtc | flow root | Power Automate — 01-Fetch_Docs_POST | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0267 | 9 | Scope Global | flow root | Power Automate — 01-Fetch_Docs_POST | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0268 | 10 | Scope Data Retrieval | Scope Global | Power Automate — 01-Fetch_Docs_POST | Compose topCount  Resolved reaches Succeeded | Compose topCount  Resolved = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Finalize Response State | Scope Data Retrieval Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0269 | 11 | Compose Sharepoint HTTP Request ODataQuery | Scope Data Retrieval | Power Automate — 01-Fetch_Docs_POST | Entry of Scope Data Retrieval | None declared beyond entry into its container. | trigger field 'odatafilter'<br>output of Compose topCount  Resolved | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Sharepoint HTTP Request ODataQuery 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0270 | 12 | Send an HTTP request to SharePoint | Scope Data Retrieval | Microsoft SharePoint Online, called by the flow | Compose Sharepoint HTTP Request ODataQuery 1 reaches Succeeded | Compose Sharepoint HTTP Request ODataQuery 1 = Succeeded | output of Compose Sharepoint HTTP Request ODataQuery | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0271 | 13 | Select | Scope Data Retrieval | Power Automate — 01-Fetch_Docs_POST | Send an HTTP request to SharePoint reaches Succeeded | Send an HTTP request to SharePoint = Succeeded | output of Send an HTTP request to SharePoint | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Set variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0272 | 14 | Set variable varData | Scope Data Retrieval | Power Automate — 01-Fetch_Docs_POST | Select reaches Succeeded | Select = Succeeded | output of Select | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0273 | 15 | Compose Sharepoint HTTP Request ODataQuery 1 | Scope Data Retrieval | Power Automate — 01-Fetch_Docs_POST | Compose Sharepoint HTTP Request ODataQuery reaches Succeeded | Compose Sharepoint HTTP Request ODataQuery = Succeeded | output of Compose topCount  Resolved | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request to SharePoint | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0274 | 16 | Scope Finalize Response State | Scope Global | Power Automate — 01-Fetch_Docs_POST | Scope Data Retrieval reaches Succeeded; Scope Data Retrieval Catch reaches Succeeded or Skipped or Failed or TimedOut | Scope Data Retrieval = Succeeded<br>Scope Data Retrieval Catch = Succeeded\|Skipped\|Failed\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose  Standard Response Revised (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-055 |
| STEP-0275 | 17 | Set variable  varDurationMs | Scope Finalize Response State | Power Automate — 01-Fetch_Docs_POST | Set variable varCompletedAtUtc reaches Succeeded | Set variable varCompletedAtUtc = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0276 | 18 | Set variable varCompletedAtUtc | Scope Finalize Response State | Power Automate — 01-Fetch_Docs_POST | Set variable varStatusCode reaches Succeeded | Set variable varStatusCode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0277 | 19 | Set variable varStatusCode | Scope Finalize Response State | Power Automate — 01-Fetch_Docs_POST | Entry of Scope Finalize Response State | None declared beyond entry into its container. | variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0278 | 20 | Scope Data Retrieval Catch | Scope Global | Power Automate — 01-Fetch_Docs_POST | Scope Data Retrieval reaches TimedOut or Failed | Scope Data Retrieval = TimedOut\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-055 |
| STEP-0279 | 21 | Append to array variable varErrrors (array)  Data Retrieval Catch | Scope Data Retrieval Catch | Power Automate — 01-Fetch_Docs_POST | Entry of Scope Data Retrieval Catch | None declared beyond entry into its container. | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Set variable varData Scope Data Retrieval Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0280 | 22 | Set variable varData Scope Data Retrieval Catch | Scope Data Retrieval Catch | Power Automate — 01-Fetch_Docs_POST | Append to array variable varErrrors (array)  Data Retrieval Catch reaches Succeeded | Append to array variable varErrrors (array)  Data Retrieval Catch = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0281 | 23 | Compose  Standard Response Revised | Scope Global | Power Automate — 01-Fetch_Docs_POST | Scope Finalize Response State reaches Succeeded or Skipped or TimedOut or Failed | Scope Finalize Response State = Succeeded\|Skipped\|TimedOut\|Failed | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'requestedBy'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors'<br>output of Select<br>output of Compose topCount  Manual<br>output of Compose topCount  Resolved | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | Response (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-055 |
| STEP-0282 | 24 | Response | Scope Global | Power Automate — 01-Fetch_Docs_POST | Compose  Standard Response Revised reaches Succeeded or TimedOut or Skipped or Failed | Compose  Standard Response Revised = Succeeded\|TimedOut\|Skipped\|Failed | variable 'varStatusCode'<br>output of Compose  Standard Response Revised | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-055 |
| STEP-0283 | 25 | Compose topCount  Resolved | Scope Global | Power Automate — 01-Fetch_Docs_POST | Scope reaches Succeeded | Scope = Succeeded | trigger field 'odatafilter'<br>output of Compose topCount  Manual | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Scope Data Retrieval | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0284 | 26 | Scope | Scope Global | Power Automate — 01-Fetch_Docs_POST | Entry of Scope Global | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose topCount  Resolved | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0285 | 27 | Compose topCount  Manual | Scope | Power Automate — 01-Fetch_Docs_POST | Entry of Scope | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0286 | 28 | Scope Flow Data Capture | flow root | Power Automate — 01-Fetch_Docs_POST | Scope Global reaches Succeeded or TimedOut or Skipped or Failed | Scope Global = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-055 |
| STEP-0287 | 29 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-055 |
| STEP-0288 | 30 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — 01-Fetch_Docs_POST | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0289 | 31 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — 01-Fetch_Docs_POST | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0290 | 32 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — 01-Fetch_Docs_POST | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0291 | 33 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — 01-Fetch_Docs_POST | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0292 | 34 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — 01-Fetch_Docs_POST | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Headers | — | — | — | — | — | Confirmed | No external validation required | SRC-055 |
| STEP-0293 | 35 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Queries | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-055 |

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
| Notifications issued | NOTIF-165 Send Telemetry Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-021 | Recovery after Scope Data Retrieval, Scope Data Retrieval Catch | Scope Data Retrieval reaches ; Scope Data Retrieval Catch reaches Skipped or Failed or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State. | Power Automate — 01-Fetch_Docs_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-022 | Recovery after Scope Data Retrieval | Scope Data Retrieval reaches TimedOut or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Data Retrieval Catch. | Power Automate — 01-Fetch_Docs_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-023 | Recovery after Scope Finalize Response State | Scope Finalize Response State reaches Skipped or TimedOut or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose  Standard Response Revised. | Power Automate — 01-Fetch_Docs_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-024 | Recovery after Compose  Standard Response Revised | Compose  Standard Response Revised reaches TimedOut or Skipped or Failed | Returns the HTTP response to the caller and ends the request. | The caller receives HTTP @variables('varStatusCode'). | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Response. | Power Automate — 01-Fetch_Docs_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-025 | Recovery after Scope Global | Scope Global reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — 01-Fetch_Docs_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-0287 Send Telemetry Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
