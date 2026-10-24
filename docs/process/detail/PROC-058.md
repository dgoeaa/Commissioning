# PROC-058 — FETCH_DOCS_V2_POST

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-058 |
| Name | FETCH_DOCS_V2_POST |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 58 action(s) under 1 trigger(s). |
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
| Sources | `SRC-090` docs/reference/flow-contracts/deployed/FETCH_DOCS_V2_POST__34a6d00d-8c25-62f7-50ae-f1f564f64945__full_definition.json |

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
| STEP-1922 | Scope Flow Data Capture | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1923 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-1924 | Compose Telemetry Attachments | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1925 | Compose Flow Run Record Schema | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1926 | Compose Flow Run Record | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1927 | Compose Redacted Headers | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1928 | Compose Redacted Queries | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1929 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-1930 | Scope Global | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1931 | Scope Data Retrieval Catch | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1932 | Append to array variable varErrrors (array)  Data Retrieval Catch | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1933 | Set variable varData Scope Data Retrieval Catch | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1934 | Scope FlowRun Verification Email | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1935 | Send an email (V2) 1 | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-1936 | Filter array Compose Data FlowRun verfication Email Attachments | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1937 | Compose Data FlowRun verfication Email Attachments | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1938 | Compose Trigger Body | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1939 | Scope Flow Data Processing | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1940 | Compose topCount  Manual | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1941 | Compose topCount  Resolved | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1942 | Scope Data Retrieval | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1943 | Compose Sharepoint HTTP Request ODataQuery | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1944 | Send an HTTP request to SharePoint | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-1945 | Select docs | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1946 | Set variable varData | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1947 | Compose Sharepoint HTTP Request ODataQuery 1 | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1948 | Scope Fetch Lookups | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1949 | Scope Users | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1950 | Select Users | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1951 | Filter array Enabled Users | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1952 | Search for users (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-1953 | Scope Departments | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1954 | Get items Departments | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-1955 | Select Departments | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1956 | Scope Categories | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1957 | Select Categories | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1958 | Get items Categories | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-1959 | Compose Lookups | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1960 | For each | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1961 | Set variable varData | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1962 | Response | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1963 | Compose  Standard Response Revised | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1964 | Scope Finalize Response State 1 | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1965 | Set variable  varDurationMs 1 | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1966 | Set variable varCompletedAtUtc 1 | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1967 | Set variable varStatusCode | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1968 | Initialize variable varStatusCode | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1969 | Initialize variable varResponse | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1970 | Initialize variable varDocs | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1971 | Initialize variable varData | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1972 | Initialize variable varErrors | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1973 | Initialize variable varResults | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1974 | Initialize variable varStartTicks | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1975 | Initialize variable varReceivedAtUtc | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1976 | Initialize variable varRequestId | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1977 | Initialize variable varFailed | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1978 | Initialize variable varDurationMs | Power Automate — FETCH_DOCS_V2_POST | Automated |
| STEP-1979 | Initialize variable varCompletedAtUtc | Power Automate — FETCH_DOCS_V2_POST | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 34a6d00d-8c25-62f7-50ae-f1f564f64945 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-1923 | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments |
| STEP-1924 | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised |
| STEP-1926 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |
| STEP-1932 | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' |
| STEP-1935 | output of Filter array Compose Data FlowRun verfication Email Attachments |
| STEP-1936 | output of Compose Data FlowRun verfication Email Attachments |
| STEP-1937 | output of Compose Trigger Body |
| STEP-1941 | trigger field 'odatafilter'<br>output of Compose topCount  Manual |
| STEP-1943 | trigger field 'odatafilter'<br>output of Compose topCount  Resolved |
| STEP-1944 | output of Compose Sharepoint HTTP Request ODataQuery |
| STEP-1945 | output of Send an HTTP request to SharePoint |
| STEP-1946 | output of Select |
| STEP-1947 | output of Compose topCount  Resolved |
| STEP-1950 | output of Filter array Enabled Users |
| STEP-1951 | output of Search for users (V2) |
| STEP-1955 | output of Get items Departments |
| STEP-1957 | output of Get items Categories |
| STEP-1959 | output of Select Users<br>output of Select Categories<br>output of Select Departments |
| STEP-1961 | output of Select Users<br>output of Select Categories<br>output of Select Departments |
| STEP-1962 | variable 'varStatusCode'<br>output of Compose  Standard Response Revised |
| STEP-1963 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' |
| STEP-1965 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-1967 | variable 'varFailedCount'<br>variable 'varErrors' |

## 5.5 Stages and activities

58 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-1922 | 1 | Scope Flow Data Capture | flow root | Power Automate — FETCH_DOCS_V2_POST | Scope Global reaches Succeeded or TimedOut or Skipped or Failed | Scope Global = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-090 |
| STEP-1923 | 2 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-090 |
| STEP-1924 | 3 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — FETCH_DOCS_V2_POST | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1925 | 4 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — FETCH_DOCS_V2_POST | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1926 | 5 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — FETCH_DOCS_V2_POST | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1927 | 6 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — FETCH_DOCS_V2_POST | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1928 | 7 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — FETCH_DOCS_V2_POST | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Headers | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1929 | 8 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Queries | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1930 | 9 | Scope Global | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varFailed reaches Succeeded | Initialize variable varFailed = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1931 | 10 | Scope Data Retrieval Catch | Scope Global | Power Automate — FETCH_DOCS_V2_POST | Scope Flow Data Processing reaches TimedOut or Failed or Skipped | Scope Flow Data Processing = TimedOut\|Failed\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State 1 (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-090 |
| STEP-1932 | 11 | Append to array variable varErrrors (array)  Data Retrieval Catch | Scope Data Retrieval Catch | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope Data Retrieval Catch | None declared beyond entry into its container. | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Set variable varData Scope Data Retrieval Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1933 | 12 | Set variable varData Scope Data Retrieval Catch | Scope Data Retrieval Catch | Power Automate — FETCH_DOCS_V2_POST | Append to array variable varErrrors (array)  Data Retrieval Catch reaches Succeeded | Append to array variable varErrrors (array)  Data Retrieval Catch = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1934 | 13 | Scope FlowRun Verification Email | Scope Global | Power Automate — FETCH_DOCS_V2_POST | Compose  Standard Response Revised reaches Succeeded or TimedOut or Skipped or Failed | Compose  Standard Response Revised = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-090 |
| STEP-1935 | 14 | Send an email (V2) 1 | Scope FlowRun Verification Email | Microsoft Office 365 Outlook, called by the flow | Filter array Compose Data FlowRun verfication Email Attachments reaches Succeeded | Filter array Compose Data FlowRun verfication Email Attachments = Succeeded | output of Filter array Compose Data FlowRun verfication Email Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-090 |
| STEP-1936 | 15 | Filter array Compose Data FlowRun verfication Email Attachments | Scope FlowRun Verification Email | Power Automate — FETCH_DOCS_V2_POST | Compose Data FlowRun verfication Email Attachments reaches Succeeded | Compose Data FlowRun verfication Email Attachments = Succeeded | output of Compose Data FlowRun verfication Email Attachments | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Send an email (V2) 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1937 | 16 | Compose Data FlowRun verfication Email Attachments | Scope FlowRun Verification Email | Power Automate — FETCH_DOCS_V2_POST | Compose Trigger Body reaches Succeeded | Compose Trigger Body = Succeeded | output of Compose Trigger Body | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Filter array Compose Data FlowRun verfication Email Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1938 | 17 | Compose Trigger Body | Scope FlowRun Verification Email | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope FlowRun Verification Email | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Data FlowRun verfication Email Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1939 | 18 | Scope Flow Data Processing | Scope Global | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope Global | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Data Retrieval Catch (runs when this does not succeed)<br>Scope Finalize Response State 1 (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1940 | 19 | Compose topCount  Manual | Scope Flow Data Processing | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope Flow Data Processing | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose topCount  Resolved | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1941 | 20 | Compose topCount  Resolved | Scope Flow Data Processing | Power Automate — FETCH_DOCS_V2_POST | Compose topCount  Manual reaches Succeeded | Compose topCount  Manual = Succeeded | trigger field 'odatafilter'<br>output of Compose topCount  Manual | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Scope Data Retrieval<br>Scope Fetch Lookups | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1942 | 21 | Scope Data Retrieval | Scope Flow Data Processing | Power Automate — FETCH_DOCS_V2_POST | Compose topCount  Resolved reaches Succeeded | Compose topCount  Resolved = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | For each | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1943 | 22 | Compose Sharepoint HTTP Request ODataQuery | Scope Data Retrieval | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope Data Retrieval | None declared beyond entry into its container. | trigger field 'odatafilter'<br>output of Compose topCount  Resolved | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Sharepoint HTTP Request ODataQuery 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1944 | 23 | Send an HTTP request to SharePoint | Scope Data Retrieval | Microsoft SharePoint Online, called by the flow | Compose Sharepoint HTTP Request ODataQuery 1 reaches Succeeded | Compose Sharepoint HTTP Request ODataQuery 1 = Succeeded | output of Compose Sharepoint HTTP Request ODataQuery | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select docs | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1945 | 24 | Select docs | Scope Data Retrieval | Power Automate — FETCH_DOCS_V2_POST | Send an HTTP request to SharePoint reaches Succeeded | Send an HTTP request to SharePoint = Succeeded | output of Send an HTTP request to SharePoint | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Set variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1946 | 25 | Set variable varData | Scope Data Retrieval | Power Automate — FETCH_DOCS_V2_POST | Select docs reaches Succeeded | Select docs = Succeeded | output of Select | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1947 | 26 | Compose Sharepoint HTTP Request ODataQuery 1 | Scope Data Retrieval | Power Automate — FETCH_DOCS_V2_POST | Compose Sharepoint HTTP Request ODataQuery reaches Succeeded | Compose Sharepoint HTTP Request ODataQuery = Succeeded | output of Compose topCount  Resolved | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an HTTP request to SharePoint | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1948 | 27 | Scope Fetch Lookups | Scope Flow Data Processing | Power Automate — FETCH_DOCS_V2_POST | Compose topCount  Resolved reaches Succeeded | Compose topCount  Resolved = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | For each | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1949 | 28 | Scope Users | Scope Fetch Lookups | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Lookups (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1950 | 29 | Select Users | Scope Users | Power Automate — FETCH_DOCS_V2_POST | Filter array Enabled Users reaches Succeeded | Filter array Enabled Users = Succeeded | output of Filter array Enabled Users | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1951 | 30 | Filter array Enabled Users | Scope Users | Power Automate — FETCH_DOCS_V2_POST | Search for users (V2) reaches Succeeded | Search for users (V2) = Succeeded | output of Search for users (V2) | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Select Users | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1952 | 31 | Search for users (V2) | Scope Users | Microsoft Office 365 Outlook, called by the flow | Entry of Scope Users | None declared beyond entry into its container. | — | Resolves a person against the directory. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Filter array Enabled Users | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1953 | 32 | Scope Departments | Scope Fetch Lookups | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Lookups (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1954 | 33 | Get items Departments | Scope Departments | Microsoft SharePoint Online, called by the flow | Entry of Scope Departments | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Departments | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1955 | 34 | Select Departments | Scope Departments | Power Automate — FETCH_DOCS_V2_POST | Get items Departments reaches Succeeded | Get items Departments = Succeeded | output of Get items Departments | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1956 | 35 | Scope Categories | Scope Fetch Lookups | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope Fetch Lookups | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Lookups (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1957 | 36 | Select Categories | Scope Categories | Power Automate — FETCH_DOCS_V2_POST | Get items Categories reaches Succeeded | Get items Categories = Succeeded | output of Get items Categories | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1958 | 37 | Get items Categories | Scope Categories | Microsoft SharePoint Online, called by the flow | Entry of Scope Categories | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Categories | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1959 | 38 | Compose Lookups | Scope Fetch Lookups | Power Automate — FETCH_DOCS_V2_POST | Scope Departments reaches Succeeded or TimedOut or Skipped or Failed; Scope Users reaches Succeeded or Skipped or TimedOut or Failed; Scope Categories reaches Succeeded or Skipped or TimedOut or Failed | Scope Departments = Succeeded\|TimedOut\|Skipped\|Failed<br>Scope Users = Succeeded\|Skipped\|TimedOut\|Failed<br>Scope Categories = Succeeded\|Skipped\|TimedOut\|Failed | output of Select Users<br>output of Select Categories<br>output of Select Departments | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-090 |
| STEP-1960 | 39 | For each | Scope Flow Data Processing | Power Automate — FETCH_DOCS_V2_POST | Scope Fetch Lookups reaches Succeeded; Scope Data Retrieval reaches Succeeded | Scope Fetch Lookups = Succeeded<br>Scope Data Retrieval = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1961 | 40 | Set variable varData | For each | Power Automate — FETCH_DOCS_V2_POST | Entry of For each | None declared beyond entry into its container. | output of Select Users<br>output of Select Categories<br>output of Select Departments | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1962 | 41 | Response | Scope Global | Power Automate — FETCH_DOCS_V2_POST | Compose  Standard Response Revised reaches Succeeded or TimedOut or Skipped or Failed | Compose  Standard Response Revised = Succeeded\|TimedOut\|Skipped\|Failed | variable 'varStatusCode'<br>output of Compose  Standard Response Revised | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-090 |
| STEP-1963 | 42 | Compose  Standard Response Revised | Scope Global | Power Automate — FETCH_DOCS_V2_POST | Scope Finalize Response State 1 reaches Succeeded | Scope Finalize Response State 1 = Succeeded | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | Scope FlowRun Verification Email (runs when this does not succeed)<br>Response (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1964 | 43 | Scope Finalize Response State 1 | Scope Global | Power Automate — FETCH_DOCS_V2_POST | Scope Data Retrieval Catch reaches Succeeded or Skipped or Failed or TimedOut; Scope Flow Data Processing reaches Succeeded or TimedOut or Skipped or Failed | Scope Data Retrieval Catch = Succeeded\|Skipped\|Failed\|TimedOut<br>Scope Flow Data Processing = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose  Standard Response Revised | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-090 |
| STEP-1965 | 44 | Set variable  varDurationMs 1 | Scope Finalize Response State 1 | Power Automate — FETCH_DOCS_V2_POST | Set variable varCompletedAtUtc 1 reaches Succeeded | Set variable varCompletedAtUtc 1 = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | Set variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1966 | 45 | Set variable varCompletedAtUtc 1 | Scope Finalize Response State 1 | Power Automate — FETCH_DOCS_V2_POST | Entry of Scope Finalize Response State 1 | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1967 | 46 | Set variable varStatusCode | Scope Finalize Response State 1 | Power Automate — FETCH_DOCS_V2_POST | Set variable  varDurationMs 1 reaches Succeeded | Set variable  varDurationMs 1 = Succeeded | variable 'varFailedCount'<br>variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1968 | 47 | Initialize variable varStatusCode | flow root | Power Automate — FETCH_DOCS_V2_POST | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1969 | 48 | Initialize variable varResponse | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDocs | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1970 | 49 | Initialize variable varDocs | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1971 | 50 | Initialize variable varData | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varDocs reaches Succeeded | Initialize variable varDocs = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1972 | 51 | Initialize variable varErrors | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResults | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1973 | 52 | Initialize variable varResults | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1974 | 53 | Initialize variable varStartTicks | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varResults reaches Succeeded | Initialize variable varResults = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1975 | 54 | Initialize variable varReceivedAtUtc | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1976 | 55 | Initialize variable varRequestId | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varDurationMs reaches Succeeded | Initialize variable varDurationMs = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varFailed | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1977 | 56 | Initialize variable varFailed | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1978 | 57 | Initialize variable varDurationMs | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRequestId | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |
| STEP-1979 | 58 | Initialize variable varCompletedAtUtc | flow root | Power Automate — FETCH_DOCS_V2_POST | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-090 |

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
| Alternative end states | 6 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-213 Send Telemetry Email<br>NOTIF-214 Send an email (V2) 1 |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-143 | Recovery after Scope Global | Scope Global reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — FETCH_DOCS_V2_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-144 | Recovery after Scope Flow Data Processing | Scope Flow Data Processing reaches TimedOut or Failed or Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Data Retrieval Catch. | Power Automate — FETCH_DOCS_V2_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-145 | Recovery after Compose  Standard Response Revised | Compose  Standard Response Revised reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope FlowRun Verification Email. | Power Automate — FETCH_DOCS_V2_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-146 | Recovery after Scope Departments, Scope Users, Scope Categories | Scope Departments reaches TimedOut or Skipped or Failed; Scope Users reaches Skipped or TimedOut or Failed; Scope Categories reaches Skipped or TimedOut or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose Lookups. | Power Automate — FETCH_DOCS_V2_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-147 | Recovery after Compose  Standard Response Revised | Compose  Standard Response Revised reaches TimedOut or Skipped or Failed | Returns the HTTP response to the caller and ends the request. | The caller receives HTTP @variables('varStatusCode'). | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Response. | Power Automate — FETCH_DOCS_V2_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-148 | Recovery after Scope Data Retrieval Catch, Scope Flow Data Processing | Scope Data Retrieval Catch reaches Skipped or Failed or TimedOut; Scope Flow Data Processing reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State 1. | Power Automate — FETCH_DOCS_V2_POST | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-1923 Send Telemetry Email | Sends a message; delivery is the record. |
| STEP-1935 Send an email (V2) 1 | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
