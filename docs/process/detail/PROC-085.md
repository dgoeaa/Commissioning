# PROC-085 — Portal_Verify

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-085 |
| Name | Portal_Verify |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 57 action(s) under 1 trigger(s). |
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
| Sources | `SRC-117` docs/reference/flow-contracts/deployed/Portal_Verify__86897b2f-9770-4efa-8486-2642f24bb947__full_definition.json |

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
| STEP-2837 | Initialize variable varCurrentTime | Power Automate — Portal_Verify | Automated |
| STEP-2838 | Initialize variable varResponse | Power Automate — Portal_Verify | Automated |
| STEP-2839 | Initialize variable varStatusCode | Power Automate — Portal_Verify | Automated |
| STEP-2840 | Initialize variable varRandomOTP | Power Automate — Portal_Verify | Automated |
| STEP-2841 | Scope Flow Data Capture | Power Automate — Portal_Verify | Automated |
| STEP-2842 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2843 | Compose Telemetry Attachments | Power Automate — Portal_Verify | Automated |
| STEP-2844 | Compose Flow Run Record | Power Automate — Portal_Verify | Automated |
| STEP-2845 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-2846 | Scope Global | Power Automate — Portal_Verify | Automated |
| STEP-2847 | Scope Finalize Response State | Power Automate — Portal_Verify | Automated |
| STEP-2848 | Set variable  varDurationMs | Power Automate — Portal_Verify | Automated |
| STEP-2849 | Set variable varCompletedAtUtc | Power Automate — Portal_Verify | Automated |
| STEP-2850 | Set variable varStatusCode | Power Automate — Portal_Verify | Automated |
| STEP-2851 | Scope Flow Processing Catch | Power Automate — Portal_Verify | Automated |
| STEP-2852 | Append to array variable varErrrors (array) Flow Processing Catch | Power Automate — Portal_Verify | Automated |
| STEP-2853 | Increment variable varFailedCount Flow Processing Catch | Power Automate — Portal_Verify | Automated |
| STEP-2854 | Switch | Power Automate — Portal_Verify | Automated |
| STEP-2855 | Compose OTP Expiry | Power Automate — Portal_Verify | Automated |
| STEP-2856 | Create item OTP Record | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2857 | Append to string variable varResponse Generate OTP | Power Automate — Portal_Verify | Automated |
| STEP-2858 | Set variable varStatusCode Generate OTP | Power Automate — Portal_Verify | Automated |
| STEP-2859 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2860 | Compose OTP Identifier | Power Automate — Portal_Verify | Automated |
| STEP-2861 | Get items | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2862 | Condition | Power Automate — Portal_Verify | Automated |
| STEP-2863 | Set variable varStatusCode No Pending OTP Found | Power Automate — Portal_Verify | Automated |
| STEP-2864 | Append to string variable varRsponse No Pending OTP Found | Power Automate — Portal_Verify | Automated |
| STEP-2865 | Compose OTP Identifier Is Missing | Power Automate — Portal_Verify | Automated |
| STEP-2866 | Condition 1 | Power Automate — Portal_Verify | Automated |
| STEP-2867 | Update item | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2868 | Set variable Verification Successful | Power Automate — Portal_Verify | Automated |
| STEP-2869 | Append to string variable Verification Successful | Power Automate — Portal_Verify | Automated |
| STEP-2870 | Set variable OTP  OTP Invalid or Expired | Power Automate — Portal_Verify | Automated |
| STEP-2871 | Append to string variable  OTP Invalid or Expired | Power Automate — Portal_Verify | Automated |
| STEP-2872 | Compose OTP Identifier Verify | Power Automate — Portal_Verify | Automated |
| STEP-2873 | Compose OTP Code Verify | Power Automate — Portal_Verify | Automated |
| STEP-2874 | Compose Count Items Check | Power Automate — Portal_Verify | Automated |
| STEP-2875 | Append to string variable Default | Power Automate — Portal_Verify | Automated |
| STEP-2876 | Set variable Default | Power Automate — Portal_Verify | Automated |
| STEP-2877 | Compose  Standard Response Revised | Power Automate — Portal_Verify | Automated |
| STEP-2878 | Response | Power Automate — Portal_Verify | Automated |
| STEP-2879 | Set variable varData | Power Automate — Portal_Verify | Automated |
| STEP-2880 | Compose  Standard Response Revised Updated | Power Automate — Portal_Verify | Automated |
| STEP-2881 | Set variable varHTTPResponse | Power Automate — Portal_Verify | Automated |
| STEP-2882 | Initialize variable varFailed | Power Automate — Portal_Verify | Automated |
| STEP-2883 | Initialize variable varRequestId | Power Automate — Portal_Verify | Automated |
| STEP-2884 | Initialize variable varReceivedAtUtc | Power Automate — Portal_Verify | Automated |
| STEP-2885 | Initialize variable varStartTicks | Power Automate — Portal_Verify | Automated |
| STEP-2886 | Initialize variable varResults | Power Automate — Portal_Verify | Automated |
| STEP-2887 | Initialize variable varErrors | Power Automate — Portal_Verify | Automated |
| STEP-2888 | Initialize variable varData | Power Automate — Portal_Verify | Automated |
| STEP-2889 | Initialize variable varCompletedAtUtc | Power Automate — Portal_Verify | Automated |
| STEP-2890 | Initialize variable varDurationMs | Power Automate — Portal_Verify | Automated |
| STEP-2891 | Compose | Power Automate — Portal_Verify | Automated |
| STEP-2892 | Compose 1 | Power Automate — Portal_Verify | Automated |
| STEP-2893 | Initialize variable varHTTPResponse | Power Automate — Portal_Verify | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 86897b2f-9770-4efa-8486-2642f24bb947 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2842 | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments |
| STEP-2843 | variable 'varData'<br>output of Compose Flow Run Record<br>output of Get Flow Definition |
| STEP-2844 | output of Get Flow Definition |
| STEP-2848 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-2850 | variable 'varFailedCount'<br>variable 'varErrors' |
| STEP-2852 | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' |
| STEP-2854 | trigger field 'action' |
| STEP-2856 | trigger field 'identifier'<br>variable 'varRandomOTP'<br>output of Compose OTP Expiry |
| STEP-2857 | output of Create item OTP Record |
| STEP-2859 | variable 'varRandomOTP' |
| STEP-2860 | output of Create item OTP Record |
| STEP-2861 | trigger field 'identifier' |
| STEP-2862 | output of Compose Count Items Check |
| STEP-2865 | variable 'varRandomOTP' |
| STEP-2866 | trigger field 'otp_code'<br>output of Get items |
| STEP-2867 | output of Get items |
| STEP-2872 | variable 'varRandomOTP' |
| STEP-2873 | variable 'varRandomOTP' |
| STEP-2874 | output of Get items |
| STEP-2877 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' |
| STEP-2878 | variable 'varStatusCode'<br>variable 'varHTTPResponse' |
| STEP-2879 | variable 'varResponse' |
| STEP-2880 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'identifier'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varErrors'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varResults' |
| STEP-2881 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'identifier'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varErrors'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varResults' |
| STEP-2883 | trigger field 'requestId' |

## 5.5 Stages and activities

57 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2837 | 1 | Initialize variable varCurrentTime | flow root | Power Automate — Portal_Verify | Compose 1 reaches Succeeded | Compose 1 = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2838 | 2 | Initialize variable varResponse | flow root | Power Automate — Portal_Verify | Initialize variable varCurrentTime reaches Succeeded | Initialize variable varCurrentTime = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2839 | 3 | Initialize variable varStatusCode | flow root | Power Automate — Portal_Verify | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRandomOTP | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2840 | 4 | Initialize variable varRandomOTP | flow root | Power Automate — Portal_Verify | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2841 | 5 | Scope Flow Data Capture | flow root | Power Automate — Portal_Verify | Scope Global reaches Succeeded or TimedOut or Skipped or Failed | Scope Global = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-117 |
| STEP-2842 | 6 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-117 |
| STEP-2843 | 7 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — Portal_Verify | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | variable 'varData'<br>output of Compose Flow Run Record<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2844 | 8 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — Portal_Verify | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2845 | 9 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Flow Run Record | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2846 | 10 | Scope Global | flow root | Power Automate — Portal_Verify | Initialize variable varFailed reaches Succeeded | Initialize variable varFailed = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2847 | 11 | Scope Finalize Response State | Scope Global | Power Automate — Portal_Verify | Scope Flow Processing Catch reaches Succeeded or Failed or Skipped or TimedOut; Switch reaches Succeeded or TimedOut or Skipped or Failed | Scope Flow Processing Catch = Succeeded\|Failed\|Skipped\|TimedOut<br>Switch = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Set variable varData (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-117 |
| STEP-2848 | 12 | Set variable  varDurationMs | Scope Finalize Response State | Power Automate — Portal_Verify | Set variable varCompletedAtUtc reaches Succeeded | Set variable varCompletedAtUtc = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2849 | 13 | Set variable varCompletedAtUtc | Scope Finalize Response State | Power Automate — Portal_Verify | Set variable varStatusCode reaches Succeeded | Set variable varStatusCode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2850 | 14 | Set variable varStatusCode | Scope Finalize Response State | Power Automate — Portal_Verify | Entry of Scope Finalize Response State | None declared beyond entry into its container. | variable 'varFailedCount'<br>variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2851 | 15 | Scope Flow Processing Catch | Scope Global | Power Automate — Portal_Verify | Switch reaches TimedOut or Skipped or Failed | Switch = TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-117 |
| STEP-2852 | 16 | Append to array variable varErrrors (array) Flow Processing Catch | Scope Flow Processing Catch | Power Automate — Portal_Verify | Entry of Scope Flow Processing Catch | None declared beyond entry into its container. | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Increment variable varFailedCount Flow Processing Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2853 | 17 | Increment variable varFailedCount Flow Processing Catch | Scope Flow Processing Catch | Power Automate — Portal_Verify | Append to array variable varErrrors (array) Flow Processing Catch reaches Succeeded | Append to array variable varErrrors (array) Flow Processing Catch = Succeeded | — | Adds to a numeric run-scoped variable. | Writes 'varFailedCount'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varFailedCount'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2854 | 18 | Switch | Scope Global | Power Automate — Portal_Verify | Entry of Scope Global | None declared beyond entry into its container. | trigger field 'action' | Evaluates an expression and runs the matching case. | Discriminator: @triggerBody()?['action'] | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State (runs when this does not succeed)<br>Scope Flow Processing Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2855 | 19 | Compose OTP Expiry | Switch · case Case Generate | Power Automate — Portal_Verify | Entry of Switch · case Case Generate | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create item OTP Record | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2856 | 20 | Create item OTP Record | Switch · case Case Generate | Microsoft SharePoint Online, called by the flow | Compose OTP Expiry reaches Succeeded | Compose OTP Expiry = Succeeded | trigger field 'identifier'<br>variable 'varRandomOTP'<br>output of Compose OTP Expiry | Creates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Send an email (V2) | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-117 |
| STEP-2857 | 21 | Append to string variable varResponse Generate OTP | Switch · case Case Generate | Power Automate — Portal_Verify | Send an email (V2) reaches Succeeded | Send an email (V2) = Succeeded | output of Create item OTP Record | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varStatusCode Generate OTP | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2858 | 22 | Set variable varStatusCode Generate OTP | Switch · case Case Generate | Power Automate — Portal_Verify | Append to string variable varResponse Generate OTP reaches Succeeded | Append to string variable varResponse Generate OTP = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Compose OTP Identifier | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2859 | 23 | Send an email (V2) | Switch · case Case Generate | Microsoft Office 365 Outlook, called by the flow | Create item OTP Record reaches Succeeded | Create item OTP Record = Succeeded | variable 'varRandomOTP' | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Append to string variable varResponse Generate OTP | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-117 |
| STEP-2860 | 24 | Compose OTP Identifier | Switch · case Case Generate | Power Automate — Portal_Verify | Set variable varStatusCode Generate OTP reaches Succeeded | Set variable varStatusCode Generate OTP = Succeeded | output of Create item OTP Record | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2861 | 25 | Get items | Switch · case Case Verify | Microsoft SharePoint Online, called by the flow | Entry of Switch · case Case Verify | None declared beyond entry into its container. | trigger field 'identifier' | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Count Items Check | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2862 | 26 | Condition | Switch · case Case Verify | Power Automate — Portal_Verify | Compose Count Items Check reaches Succeeded | Compose Count Items Check = Succeeded | output of Compose Count Items Check | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"less":["@outputs('Compose_Count_Items_Check')",1]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2863 | 27 | Set variable varStatusCode No Pending OTP Found | Condition | Power Automate — Portal_Verify | Append to string variable varRsponse No Pending OTP Found reaches Succeeded | Append to string variable varRsponse No Pending OTP Found = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2864 | 28 | Append to string variable varRsponse No Pending OTP Found | Condition | Power Automate — Portal_Verify | Compose OTP Identifier Is Missing reaches Succeeded | Compose OTP Identifier Is Missing = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varStatusCode No Pending OTP Found | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2865 | 29 | Compose OTP Identifier Is Missing | Condition | Power Automate — Portal_Verify | Entry of Condition | None declared beyond entry into its container. | variable 'varRandomOTP' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Append to string variable varRsponse No Pending OTP Found | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2866 | 30 | Condition 1 | Condition · else | Power Automate — Portal_Verify | Compose OTP Code Verify reaches Succeeded | Compose OTP Code Verify = Succeeded | trigger field 'otp_code'<br>output of Get items | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@first(outputs('Get_items')?['body/value']?['OTP_Code'])","@triggerBody()?['otp_code']"]},{"greater":["@first(outputs('Get_items')?['body/value']?['Expires_At'])","@utcNow()"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2867 | 31 | Update item | Condition 1 | Microsoft SharePoint Online, called by the flow | Entry of Condition 1 | None declared beyond entry into its container. | output of Get items | Updates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Set variable Verification Successful | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-117 |
| STEP-2868 | 32 | Set variable Verification Successful | Condition 1 | Power Automate — Portal_Verify | Update item reaches Succeeded | Update item = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable Verification Successful | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2869 | 33 | Append to string variable Verification Successful | Condition 1 | Power Automate — Portal_Verify | Set variable Verification Successful reaches Succeeded | Set variable Verification Successful = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2870 | 34 | Set variable OTP  OTP Invalid or Expired | Condition 1 · else | Power Automate — Portal_Verify | Entry of Condition 1 · else | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable  OTP Invalid or Expired | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2871 | 35 | Append to string variable  OTP Invalid or Expired | Condition 1 · else | Power Automate — Portal_Verify | Set variable OTP  OTP Invalid or Expired reaches Succeeded | Set variable OTP  OTP Invalid or Expired = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2872 | 36 | Compose OTP Identifier Verify | Condition · else | Power Automate — Portal_Verify | Entry of Condition · else | None declared beyond entry into its container. | variable 'varRandomOTP' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose OTP Code Verify | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2873 | 37 | Compose OTP Code Verify | Condition · else | Power Automate — Portal_Verify | Compose OTP Identifier Verify reaches Succeeded | Compose OTP Identifier Verify = Succeeded | variable 'varRandomOTP' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2874 | 38 | Compose Count Items Check | Switch · case Case Verify | Power Automate — Portal_Verify | Get items reaches Succeeded | Get items = Succeeded | output of Get items | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2875 | 39 | Append to string variable Default | Switch · default | Power Automate — Portal_Verify | Set variable Default reaches Succeeded | Set variable Default = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2876 | 40 | Set variable Default | Switch · default | Power Automate — Portal_Verify | Entry of Switch · default | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable Default | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2877 | 41 | Compose  Standard Response Revised | Scope Global | Power Automate — Portal_Verify | Set variable varData reaches Succeeded or TimedOut or Skipped or Failed | Set variable varData = Succeeded\|TimedOut\|Skipped\|Failed | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose  Standard Response Revised Updated | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-117 |
| STEP-2878 | 42 | Response | Scope Global | Power Automate — Portal_Verify | Set variable varHTTPResponse reaches Succeeded | Set variable varHTTPResponse = Succeeded | variable 'varStatusCode'<br>variable 'varHTTPResponse' | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2879 | 43 | Set variable varData | Scope Global | Power Automate — Portal_Verify | Scope Finalize Response State reaches Succeeded or TimedOut or Skipped or Failed | Scope Finalize Response State = Succeeded\|TimedOut\|Skipped\|Failed | variable 'varResponse' | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | Compose  Standard Response Revised (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-117 |
| STEP-2880 | 44 | Compose  Standard Response Revised Updated | Scope Global | Power Automate — Portal_Verify | Compose  Standard Response Revised reaches Succeeded | Compose  Standard Response Revised = Succeeded | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'identifier'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varErrors'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varResults' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varHTTPResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2881 | 45 | Set variable varHTTPResponse | Scope Global | Power Automate — Portal_Verify | Compose  Standard Response Revised Updated reaches Succeeded | Compose  Standard Response Revised Updated = Succeeded | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'identifier'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varErrors'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varResults' | Replaces the value held in a run-scoped variable. | Writes 'varHTTPResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varHTTPResponse'. | — | Response | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2882 | 46 | Initialize variable varFailed | flow root | Power Automate — Portal_Verify | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2883 | 47 | Initialize variable varRequestId | flow root | Power Automate — Portal_Verify | Initialize variable varDurationMs reaches Succeeded | Initialize variable varDurationMs = Succeeded | trigger field 'requestId' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varFailed | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2884 | 48 | Initialize variable varReceivedAtUtc | flow root | Power Automate — Portal_Verify | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2885 | 49 | Initialize variable varStartTicks | flow root | Power Automate — Portal_Verify | Initialize variable varResults reaches Succeeded | Initialize variable varResults = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2886 | 50 | Initialize variable varResults | flow root | Power Automate — Portal_Verify | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2887 | 51 | Initialize variable varErrors | flow root | Power Automate — Portal_Verify | Initialize variable varHTTPResponse reaches Succeeded | Initialize variable varHTTPResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResults | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2888 | 52 | Initialize variable varData | flow root | Power Automate — Portal_Verify | Initialize variable varRandomOTP reaches Succeeded | Initialize variable varRandomOTP = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varHTTPResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2889 | 53 | Initialize variable varCompletedAtUtc | flow root | Power Automate — Portal_Verify | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2890 | 54 | Initialize variable varDurationMs | flow root | Power Automate — Portal_Verify | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRequestId | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2891 | 55 | Compose | flow root | Power Automate — Portal_Verify | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2892 | 56 | Compose 1 | flow root | Power Automate — Portal_Verify | Compose reaches Succeeded | Compose = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Initialize variable varCurrentTime | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |
| STEP-2893 | 57 | Initialize variable varHTTPResponse | flow root | Power Automate — Portal_Verify | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-117 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-141 | Switch | Power Automate — Portal_Verify | `@triggerBody()?['action']` | trigger field 'action' | generate<br>verify | "generate" → Compose OTP Expiry, Create item OTP Record, Append to string variable varResponse Generate OTP, Set variable varStatusCode Generate OTP, Send an email (V2), Compose OTP Identifier<br>"verify" → Get items, Condition, Compose Count Items Check | Default branch runs: Append to string variable Default, Set variable Default. | Not declared on the decision itself. | Confirmed |
| DEC-142 | Condition | Power Automate — Portal_Verify | `{"and":[{"less":["@outputs('Compose_Count_Items_Check')",1]}]}` | output of Compose Count Items Check | true<br>false | true → Set variable varStatusCode No Pending OTP Found, Append to string variable varRsponse No Pending OTP Found, Compose OTP Identifier Is Missing<br>false → Condition 1, Compose OTP Identifier Verify, Compose OTP Code Verify | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-143 | Condition 1 | Power Automate — Portal_Verify | `{"and":[{"equals":["@first(outputs('Get_items')?['body/value']?['OTP_Code'])","@triggerBody()?['otp_code']"]},{"greater":["@first(outputs('Get_items')?['body/value']?['Expires_At'])","@utcNow()"]}]}` | trigger field 'otp_code'<br>output of Get items | true<br>false | true → Update item, Set variable Verification Successful, Append to string variable Verification Successful<br>false → Set variable OTP  OTP Invalid or Expired, Append to string variable  OTP Invalid or Expired | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

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
| Records created or updated | STEP-2856 Create item OTP Record<br>STEP-2867 Update item |
| Notifications issued | NOTIF-234 Send Telemetry Email<br>NOTIF-235 Send an email (V2) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-211 | Recovery after Scope Global | Scope Global reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — Portal_Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-212 | Recovery after Scope Flow Processing Catch, Switch | Scope Flow Processing Catch reaches Failed or Skipped or TimedOut; Switch reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State. | Power Automate — Portal_Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-213 | Recovery after Switch | Switch reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Processing Catch. | Power Automate — Portal_Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-214 | Recovery after Set variable varData | Set variable varData reaches TimedOut or Skipped or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose  Standard Response Revised. | Power Automate — Portal_Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-215 | Recovery after Scope Finalize Response State | Scope Finalize Response State reaches TimedOut or Skipped or Failed | Replaces the value held in a run-scoped variable. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Set variable varData. | Power Automate — Portal_Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2842 Send Telemetry Email | Sends a message; delivery is the record. |
| STEP-2856 Create item OTP Record | Writes a list item; the write itself is the audit record. |
| STEP-2859 Send an email (V2) | Sends a message; delivery is the record. |
| STEP-2867 Update item | Writes a list item; the write itself is the audit record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
