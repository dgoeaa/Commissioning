# PROC-061 — Fetch_Emails_POST

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-061 |
| Name | Fetch_Emails_POST |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 39 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook, Microsoft Power Automate Management. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-093` docs/reference/flow-contracts/deployed/Fetch_Emails_POST__a2b43ce3-3dd4-57bd-ced3-673b708b26e6__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-2030 | Initialize variable varStatusCode | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2031 | Initialize variable varData | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2032 | Initialize variable varReceivedAtUtc | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2033 | Initialize variable varErrors | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2034 | Initialize variable varStartTicks | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2035 | Initialize variable varCompletedAtUtc | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2036 | Initialize variable varRequestId | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2037 | Initialize variable varDurationMs | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2038 | Scope Global | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2039 | Scope Data Retrieval | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2040 | Set variable varData | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2041 | Get emails (V3) 1 | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2042 | Select | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2043 | Compose varData Option 1 | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2044 | Compose varData Option 2 | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2045 | Scope Finalize Response State | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2046 | Set variable  varDurationMs | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2047 | Set variable varCompletedAtUtc | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2048 | Set variable varStatusCode | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2049 | Compose  Standard Response Revised | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2050 | Scope Data Retrieval Catch | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2051 | Append to array variable varErrrors (array)  Data Retrieval Catch | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2052 | Set variable varData Scope Data Retrieval Catch | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2053 | Compose Catch varData Option 1 | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2054 | Compose Catch varData Option 2 | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2055 | Response | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2056 | Scope Email Verification | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2057 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2058 | Filter array Compose Data FlowRun verfication Email Attachments | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2059 | Compose Data FlowRun verfication Email Attachments | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2060 | Compose Trigger Body | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2061 | Scope Flow Data Capture | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2062 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2063 | Compose Telemetry Attachments | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2064 | Compose Flow Run Record Schema | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2065 | Compose Flow Run Record | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2066 | Compose Redacted Headers | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2067 | Compose Redacted Queries | Power Automate — Fetch_Emails_POST | Automated |
| STEP-2068 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow a2b43ce3-3dd4-57bd-ced3-673b708b26e6 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2040 | output of Select |
| STEP-2042 | output of Get emails (V3) 1 |
| STEP-2043 | output of Select |
| STEP-2044 | output of Select |
| STEP-2046 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-2048 | variable 'varErrors' |
| STEP-2049 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'requestedBy'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' |
| STEP-2051 | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' |
| STEP-2052 | trigger field 'includeInbox'<br>trigger field 'includeSent' |
| STEP-2054 | trigger field 'includeInbox'<br>trigger field 'includeSent' |
| STEP-2055 | variable 'varStatusCode'<br>output of Compose  Standard Response Revised |
| STEP-2057 | output of Filter array Compose Data FlowRun verfication Email Attachments |
| STEP-2058 | output of Compose Data FlowRun verfication Email Attachments |
| STEP-2059 | output of Compose  Standard Response Revised<br>output of Compose Trigger Body |
| STEP-2062 | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments |
| STEP-2063 | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised |
| STEP-2065 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |

## 5.5 Stages and activities

39 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2030 | 1 | Initialize variable varStatusCode | flow root | Power Automate — Fetch_Emails_POST | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2031 | 2 | Initialize variable varData | flow root | Power Automate — Fetch_Emails_POST | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2032 | 3 | Initialize variable varReceivedAtUtc | flow root | Power Automate — Fetch_Emails_POST | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2033 | 4 | Initialize variable varErrors | flow root | Power Automate — Fetch_Emails_POST | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2034 | 5 | Initialize variable varStartTicks | flow root | Power Automate — Fetch_Emails_POST | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2035 | 6 | Initialize variable varCompletedAtUtc | flow root | Power Automate — Fetch_Emails_POST | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRequestId | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2036 | 7 | Initialize variable varRequestId | flow root | Power Automate — Fetch_Emails_POST | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2037 | 8 | Initialize variable varDurationMs | flow root | Power Automate — Fetch_Emails_POST | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2038 | 9 | Scope Global | flow root | Power Automate — Fetch_Emails_POST | Initialize variable varDurationMs reaches Succeeded | Initialize variable varDurationMs = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2039 | 10 | Scope Data Retrieval | Scope Global | Power Automate — Fetch_Emails_POST | Entry of Scope Global | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Finalize Response State | Scope Data Retrieval Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2040 | 11 | Set variable varData | Scope Data Retrieval | Power Automate — Fetch_Emails_POST | Compose varData Option 2 reaches Succeeded | Compose varData Option 2 = Succeeded | output of Select | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2041 | 12 | Get emails (V3) 1 | Scope Data Retrieval | Microsoft Office 365 Outlook, called by the flow | Entry of Scope Data Retrieval | None declared beyond entry into its container. | — | Reads a set of mailbox messages. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2042 | 13 | Select | Scope Data Retrieval | Power Automate — Fetch_Emails_POST | Get emails (V3) 1 reaches Succeeded | Get emails (V3) 1 = Succeeded | output of Get emails (V3) 1 | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose varData Option 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2043 | 14 | Compose varData Option 1 | Scope Data Retrieval | Power Automate — Fetch_Emails_POST | Select reaches Succeeded | Select = Succeeded | output of Select | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose varData Option 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2044 | 15 | Compose varData Option 2 | Scope Data Retrieval | Power Automate — Fetch_Emails_POST | Compose varData Option 1 reaches Succeeded | Compose varData Option 1 = Succeeded | output of Select | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2045 | 16 | Scope Finalize Response State | Scope Global | Power Automate — Fetch_Emails_POST | Scope Data Retrieval reaches Succeeded; Scope Data Retrieval Catch reaches Succeeded or Skipped or Failed or TimedOut | Scope Data Retrieval = Succeeded<br>Scope Data Retrieval Catch = Succeeded\|Skipped\|Failed\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Response | Scope Email Verification (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-093 |
| STEP-2046 | 17 | Set variable  varDurationMs | Scope Finalize Response State | Power Automate — Fetch_Emails_POST | Set variable varCompletedAtUtc reaches Succeeded | Set variable varCompletedAtUtc = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | Compose  Standard Response Revised | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2047 | 18 | Set variable varCompletedAtUtc | Scope Finalize Response State | Power Automate — Fetch_Emails_POST | Set variable varStatusCode reaches Succeeded | Set variable varStatusCode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2048 | 19 | Set variable varStatusCode | Scope Finalize Response State | Power Automate — Fetch_Emails_POST | Entry of Scope Finalize Response State | None declared beyond entry into its container. | variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2049 | 20 | Compose  Standard Response Revised | Scope Finalize Response State | Power Automate — Fetch_Emails_POST | Set variable  varDurationMs reaches Succeeded | Set variable  varDurationMs = Succeeded | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'requestedBy'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2050 | 21 | Scope Data Retrieval Catch | Scope Global | Power Automate — Fetch_Emails_POST | Scope Data Retrieval reaches TimedOut or Failed | Scope Data Retrieval = TimedOut\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-093 |
| STEP-2051 | 22 | Append to array variable varErrrors (array)  Data Retrieval Catch | Scope Data Retrieval Catch | Power Automate — Fetch_Emails_POST | Entry of Scope Data Retrieval Catch | None declared beyond entry into its container. | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Compose Catch varData Option 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2052 | 23 | Set variable varData Scope Data Retrieval Catch | Scope Data Retrieval Catch | Power Automate — Fetch_Emails_POST | Compose Catch varData Option 2 reaches Succeeded | Compose Catch varData Option 2 = Succeeded | trigger field 'includeInbox'<br>trigger field 'includeSent' | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2053 | 24 | Compose Catch varData Option 1 | Scope Data Retrieval Catch | Power Automate — Fetch_Emails_POST | Append to array variable varErrrors (array)  Data Retrieval Catch reaches Succeeded | Append to array variable varErrrors (array)  Data Retrieval Catch = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Catch varData Option 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2054 | 25 | Compose Catch varData Option 2 | Scope Data Retrieval Catch | Power Automate — Fetch_Emails_POST | Compose Catch varData Option 1 reaches Succeeded | Compose Catch varData Option 1 = Succeeded | trigger field 'includeInbox'<br>trigger field 'includeSent' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varData Scope Data Retrieval Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2055 | 26 | Response | Scope Global | Power Automate — Fetch_Emails_POST | Scope Finalize Response State reaches Succeeded | Scope Finalize Response State = Succeeded | variable 'varStatusCode'<br>output of Compose  Standard Response Revised | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2056 | 27 | Scope Email Verification | Scope Global | Power Automate — Fetch_Emails_POST | Scope Finalize Response State reaches Succeeded or TimedOut or Skipped or Failed | Scope Finalize Response State = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-093 |
| STEP-2057 | 28 | Send an email (V2) | Scope Email Verification | Microsoft Office 365 Outlook, called by the flow | Filter array Compose Data FlowRun verfication Email Attachments reaches Succeeded | Filter array Compose Data FlowRun verfication Email Attachments = Succeeded | output of Filter array Compose Data FlowRun verfication Email Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-093 |
| STEP-2058 | 29 | Filter array Compose Data FlowRun verfication Email Attachments | Scope Email Verification | Power Automate — Fetch_Emails_POST | Compose Data FlowRun verfication Email Attachments reaches Succeeded | Compose Data FlowRun verfication Email Attachments = Succeeded | output of Compose Data FlowRun verfication Email Attachments | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Send an email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2059 | 30 | Compose Data FlowRun verfication Email Attachments | Scope Email Verification | Power Automate — Fetch_Emails_POST | Compose Trigger Body reaches Succeeded | Compose Trigger Body = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Trigger Body | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Filter array Compose Data FlowRun verfication Email Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2060 | 31 | Compose Trigger Body | Scope Email Verification | Power Automate — Fetch_Emails_POST | Entry of Scope Email Verification | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Data FlowRun verfication Email Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2061 | 32 | Scope Flow Data Capture | flow root | Power Automate — Fetch_Emails_POST | Scope Global reaches Succeeded or TimedOut or Skipped or Failed | Scope Global = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-093 |
| STEP-2062 | 33 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-093 |
| STEP-2063 | 34 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — Fetch_Emails_POST | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2064 | 35 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — Fetch_Emails_POST | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2065 | 36 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — Fetch_Emails_POST | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2066 | 37 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — Fetch_Emails_POST | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2067 | 38 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — Fetch_Emails_POST | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Headers | — | — | — | — | — | Confirmed | No external validation required | SRC-093 |
| STEP-2068 | 39 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Queries | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-093 |

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
| Alternative end states | 4 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-217 Send an email (V2)<br>NOTIF-218 Send Telemetry Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-154 | Recovery after Scope Data Retrieval, Scope Data Retrieval Catch | Scope Data Retrieval reaches ; Scope Data Retrieval Catch reaches Skipped or Failed or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State. | Power Automate — Fetch_Emails_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-155 | Recovery after Scope Data Retrieval | Scope Data Retrieval reaches TimedOut or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Data Retrieval Catch. | Power Automate — Fetch_Emails_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-156 | Recovery after Scope Finalize Response State | Scope Finalize Response State reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Email Verification. | Power Automate — Fetch_Emails_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-157 | Recovery after Scope Global | Scope Global reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — Fetch_Emails_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2057 Send an email (V2) | Sends a message; delivery is the record. |
| STEP-2062 Send Telemetry Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
