# PROC-060 — Fetch_Emails_HTTP_POST

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-060 |
| Name | Fetch_Emails_HTTP_POST |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 46 action(s) under 1 trigger(s). |
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
| Sources | `SRC-092` docs/reference/flow-contracts/deployed/Fetch_Emails_HTTP_POST__29399421-e863-4bb8-a348-66385814d046__full_definition.json |

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
| STEP-1984 | Initialize variable varStatusCode | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1985 | Compose HTTP Request URL 2 | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1986 | Initialize variable varReceivedAtUtc | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1987 | Initialize variable varStartTicks | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1988 | Initialize variable varErrors | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1989 | Initialize variable varData | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1990 | Initialize variable varEmails | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1991 | Initialize variable varDurationMs | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1992 | Initialize variable varCompletedAtUtc | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1993 | Scope Global | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1994 | Scope Data Retrieval | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1995 | Set variable varData | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1996 | Scope Emails Data Processing | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1997 | Compose Merged HTTP Response Body | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1998 | Parse JSON Merged  HTTP | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-1999 | Select | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2000 | Scope Sent Emails HTTP | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2001 | Compose URL Query String Sent Items | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2002 | Send an HTTP request Sent Items | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2003 | Scope Inbox Emails HTTP | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2004 | Compose URL Query String Inbox | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2005 | Send an HTTP request Inbox | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2006 | Scope Finalize Response State | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2007 | Set variable  varDurationMs | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2008 | Set variable varCompletedAtUtc | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2009 | Set variable varStatusCode | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2010 | Compose  Standard Response Revised | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2011 | Scope Data Retrieval Catch | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2012 | Append to array variable varErrrors (array)  Data Retrieval Catch | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2013 | Set variable varData Scope Data Retrieval Catch | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2014 | Response | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2015 | Scope Email Verification | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2016 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2017 | Filter array Compose Data FlowRun verfication Email Attachments | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2018 | Compose Data FlowRun verfication Email Attachments | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2019 | Compose Trigger Body | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2020 | Initialize variable varRequestId | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2021 | Initialize variable varFailedCount | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2022 | Scope Flow Data Capture | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2023 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2024 | Compose Telemetry Attachments | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2025 | Compose Flow Run Record Schema | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2026 | Compose Flow Run Record | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2027 | Compose Redacted Headers | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2028 | Compose Redacted Queries | Power Automate — Fetch_Emails_HTTP_POST | Automated |
| STEP-2029 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 29399421-e863-4bb8-a348-66385814d046 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-1995 | trigger field 'includeInbox'<br>trigger field 'includeSent'<br>output of Select |
| STEP-1997 | output of Send an HTTP request Sent Items<br>output of Send an HTTP request Inbox |
| STEP-1998 | output of Compose Merged HTTP Response Body |
| STEP-1999 | output of Parse JSON Merged  HTTP |
| STEP-2002 | output of Compose URL Query String Sent Items |
| STEP-2005 | output of Compose URL Query String Inbox |
| STEP-2007 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-2009 | variable 'varErrors' |
| STEP-2010 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'requestedBy'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' |
| STEP-2012 | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' |
| STEP-2014 | variable 'varStatusCode'<br>output of Compose  Standard Response Revised |
| STEP-2016 | output of Filter array Compose Data FlowRun verfication Email Attachments |
| STEP-2017 | output of Compose Data FlowRun verfication Email Attachments |
| STEP-2018 | output of Compose  Standard Response Revised<br>output of Compose Trigger Body |
| STEP-2023 | output of Compose Telemetry Attachments |
| STEP-2024 | output of Compose Flow Run Record<br>output of Get Flow Definition |
| STEP-2026 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |

## 5.5 Stages and activities

46 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-1984 | 1 | Initialize variable varStatusCode | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRequestId | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1985 | 2 | Compose HTTP Request URL 2 | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varFailedCount reaches Succeeded | Initialize variable varFailedCount = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1986 | 3 | Initialize variable varReceivedAtUtc | flow root | Power Automate — Fetch_Emails_HTTP_POST | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1987 | 4 | Initialize variable varStartTicks | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1988 | 5 | Initialize variable varErrors | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1989 | 6 | Initialize variable varData | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varEmails | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1990 | 7 | Initialize variable varEmails | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1991 | 8 | Initialize variable varDurationMs | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varEmails reaches Succeeded | Initialize variable varEmails = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1992 | 9 | Initialize variable varCompletedAtUtc | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varDurationMs reaches Succeeded | Initialize variable varDurationMs = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1993 | 10 | Scope Global | flow root | Power Automate — Fetch_Emails_HTTP_POST | Compose HTTP Request URL 2 reaches Succeeded | Compose HTTP Request URL 2 = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1994 | 11 | Scope Data Retrieval | Scope Global | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Global | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Finalize Response State | Scope Data Retrieval Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1995 | 12 | Set variable varData | Scope Data Retrieval | Power Automate — Fetch_Emails_HTTP_POST | Scope Emails Data Processing reaches Succeeded | Scope Emails Data Processing = Succeeded | trigger field 'includeInbox'<br>trigger field 'includeSent'<br>output of Select | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1996 | 13 | Scope Emails Data Processing | Scope Data Retrieval | Power Automate — Fetch_Emails_HTTP_POST | Scope Sent Emails HTTP reaches Succeeded or TimedOut or Skipped or Failed; Scope Inbox Emails HTTP reaches Succeeded or TimedOut or Failed or Skipped | Scope Sent Emails HTTP = Succeeded\|TimedOut\|Skipped\|Failed<br>Scope Inbox Emails HTTP = Succeeded\|TimedOut\|Failed\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Set variable varData | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-092 |
| STEP-1997 | 14 | Compose Merged HTTP Response Body | Scope Emails Data Processing | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Emails Data Processing | None declared beyond entry into its container. | output of Send an HTTP request Sent Items<br>output of Send an HTTP request Inbox | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Parse JSON Merged  HTTP | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1998 | 15 | Parse JSON Merged  HTTP | Scope Emails Data Processing | Power Automate — Fetch_Emails_HTTP_POST | Compose Merged HTTP Response Body reaches Succeeded | Compose Merged HTTP Response Body = Succeeded | output of Compose Merged HTTP Response Body | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-1999 | 16 | Select | Scope Emails Data Processing | Power Automate — Fetch_Emails_HTTP_POST | Parse JSON Merged  HTTP reaches Succeeded | Parse JSON Merged  HTTP = Succeeded | output of Parse JSON Merged  HTTP | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2000 | 17 | Scope Sent Emails HTTP | Scope Data Retrieval | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Data Retrieval | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Emails Data Processing (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2001 | 18 | Compose URL Query String Sent Items | Scope Sent Emails HTTP | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Sent Emails HTTP | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request Sent Items | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2002 | 19 | Send an HTTP request Sent Items | Scope Sent Emails HTTP | Microsoft Office 365 Outlook, called by the flow | Compose URL Query String Sent Items reaches Succeeded | Compose URL Query String Sent Items = Succeeded | output of Compose URL Query String Sent Items | Calls an external HTTP endpoint. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2003 | 20 | Scope Inbox Emails HTTP | Scope Data Retrieval | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Data Retrieval | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Emails Data Processing (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2004 | 21 | Compose URL Query String Inbox | Scope Inbox Emails HTTP | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Inbox Emails HTTP | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request Inbox | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2005 | 22 | Send an HTTP request Inbox | Scope Inbox Emails HTTP | Microsoft Office 365 Outlook, called by the flow | Compose URL Query String Inbox reaches Succeeded | Compose URL Query String Inbox = Succeeded | output of Compose URL Query String Inbox | Calls an external HTTP endpoint. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2006 | 23 | Scope Finalize Response State | Scope Global | Power Automate — Fetch_Emails_HTTP_POST | Scope Data Retrieval reaches Succeeded; Scope Data Retrieval Catch reaches Succeeded or Skipped or Failed or TimedOut | Scope Data Retrieval = Succeeded<br>Scope Data Retrieval Catch = Succeeded\|Skipped\|Failed\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Response | Scope Email Verification (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-092 |
| STEP-2007 | 24 | Set variable  varDurationMs | Scope Finalize Response State | Power Automate — Fetch_Emails_HTTP_POST | Set variable varCompletedAtUtc reaches Succeeded | Set variable varCompletedAtUtc = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | Compose  Standard Response Revised | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2008 | 25 | Set variable varCompletedAtUtc | Scope Finalize Response State | Power Automate — Fetch_Emails_HTTP_POST | Set variable varStatusCode reaches Succeeded | Set variable varStatusCode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2009 | 26 | Set variable varStatusCode | Scope Finalize Response State | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Finalize Response State | None declared beyond entry into its container. | variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2010 | 27 | Compose  Standard Response Revised | Scope Finalize Response State | Power Automate — Fetch_Emails_HTTP_POST | Set variable  varDurationMs reaches Succeeded | Set variable  varDurationMs = Succeeded | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'requestedBy'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2011 | 28 | Scope Data Retrieval Catch | Scope Global | Power Automate — Fetch_Emails_HTTP_POST | Scope Data Retrieval reaches TimedOut or Failed | Scope Data Retrieval = TimedOut\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-092 |
| STEP-2012 | 29 | Append to array variable varErrrors (array)  Data Retrieval Catch | Scope Data Retrieval Catch | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Data Retrieval Catch | None declared beyond entry into its container. | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Set variable varData Scope Data Retrieval Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2013 | 30 | Set variable varData Scope Data Retrieval Catch | Scope Data Retrieval Catch | Power Automate — Fetch_Emails_HTTP_POST | Append to array variable varErrrors (array)  Data Retrieval Catch reaches Succeeded | Append to array variable varErrrors (array)  Data Retrieval Catch = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2014 | 31 | Response | Scope Global | Power Automate — Fetch_Emails_HTTP_POST | Scope Finalize Response State reaches Succeeded | Scope Finalize Response State = Succeeded | variable 'varStatusCode'<br>output of Compose  Standard Response Revised | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2015 | 32 | Scope Email Verification | Scope Global | Power Automate — Fetch_Emails_HTTP_POST | Scope Finalize Response State reaches Succeeded or TimedOut or Skipped or Failed | Scope Finalize Response State = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-092 |
| STEP-2016 | 33 | Send an email (V2) | Scope Email Verification | Microsoft Office 365 Outlook, called by the flow | Filter array Compose Data FlowRun verfication Email Attachments reaches Succeeded | Filter array Compose Data FlowRun verfication Email Attachments = Succeeded | output of Filter array Compose Data FlowRun verfication Email Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-092 |
| STEP-2017 | 34 | Filter array Compose Data FlowRun verfication Email Attachments | Scope Email Verification | Power Automate — Fetch_Emails_HTTP_POST | Compose Data FlowRun verfication Email Attachments reaches Succeeded | Compose Data FlowRun verfication Email Attachments = Succeeded | output of Compose Data FlowRun verfication Email Attachments | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Send an email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2018 | 35 | Compose Data FlowRun verfication Email Attachments | Scope Email Verification | Power Automate — Fetch_Emails_HTTP_POST | Compose Trigger Body reaches Succeeded | Compose Trigger Body = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Trigger Body | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Filter array Compose Data FlowRun verfication Email Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2019 | 36 | Compose Trigger Body | Scope Email Verification | Power Automate — Fetch_Emails_HTTP_POST | Entry of Scope Email Verification | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Data FlowRun verfication Email Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2020 | 37 | Initialize variable varRequestId | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varFailedCount | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2021 | 38 | Initialize variable varFailedCount | flow root | Power Automate — Fetch_Emails_HTTP_POST | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Compose HTTP Request URL 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2022 | 39 | Scope Flow Data Capture | flow root | Power Automate — Fetch_Emails_HTTP_POST | Scope Global reaches Succeeded or Skipped or TimedOut or Failed | Scope Global = Succeeded\|Skipped\|TimedOut\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-092 |
| STEP-2023 | 40 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-092 |
| STEP-2024 | 41 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — Fetch_Emails_HTTP_POST | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2025 | 42 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — Fetch_Emails_HTTP_POST | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2026 | 43 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — Fetch_Emails_HTTP_POST | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2027 | 44 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — Fetch_Emails_HTTP_POST | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2028 | 45 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — Fetch_Emails_HTTP_POST | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Headers | — | — | — | — | — | Confirmed | No external validation required | SRC-092 |
| STEP-2029 | 46 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Queries | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-092 |

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
| Notifications issued | NOTIF-215 Send an email (V2)<br>NOTIF-216 Send Telemetry Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-149 | Recovery after Scope Sent Emails HTTP, Scope Inbox Emails HTTP | Scope Sent Emails HTTP reaches TimedOut or Skipped or Failed; Scope Inbox Emails HTTP reaches TimedOut or Failed or Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Emails Data Processing. | Power Automate — Fetch_Emails_HTTP_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-150 | Recovery after Scope Data Retrieval, Scope Data Retrieval Catch | Scope Data Retrieval reaches ; Scope Data Retrieval Catch reaches Skipped or Failed or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State. | Power Automate — Fetch_Emails_HTTP_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-151 | Recovery after Scope Data Retrieval | Scope Data Retrieval reaches TimedOut or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Data Retrieval Catch. | Power Automate — Fetch_Emails_HTTP_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-152 | Recovery after Scope Finalize Response State | Scope Finalize Response State reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Email Verification. | Power Automate — Fetch_Emails_HTTP_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-153 | Recovery after Scope Global | Scope Global reaches Skipped or TimedOut or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — Fetch_Emails_HTTP_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2016 Send an email (V2) | Sends a message; delivery is the record. |
| STEP-2023 Send Telemetry Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
