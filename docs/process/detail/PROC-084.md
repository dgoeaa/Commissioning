# PROC-084 — Portal_Verify_Confirm

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-084 |
| Name | Portal_Verify_Confirm |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 67 action(s) under 1 trigger(s). |
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
| Sources | `SRC-116` docs/reference/flow-contracts/deployed/Portal_Verify_Confirm__3b69aa71-ffed-4956-9d20-2aa3021a8da0__full_definition.json |

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
| STEP-2770 | Initialize variable varCurrentTime | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2771 | Initialize variable varResponse | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2772 | Initialize variable varStatusCode | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2773 | Initialize variable varRandomOTP | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2774 | Scope Flow Data Capture | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2775 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2776 | Compose Telemetry Attachments | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2777 | Compose Flow Run Record Schema | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2778 | Compose Flow Run Record | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2779 | Compose Redacted Headers | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2780 | Compose Redacted Queries | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2781 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-2782 | Initialize variable varFailed | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2783 | Initialize variable varRequestId | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2784 | Initialize variable varReceivedAtUtc | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2785 | Initialize variable varStartTicks | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2786 | Initialize variable varResults | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2787 | Initialize variable varErrors | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2788 | Initialize variable varData | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2789 | Initialize variable varCompletedAtUtc | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2790 | Initialize variable varDurationMs | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2791 | Scope Global | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2792 | Switch | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2793 | Compose OTP Expiry | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2794 | Create item OTP Record | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2795 | Append to string variable varResponse Generate OTP | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2796 | Set variable varStatusCode Generate OTP | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2797 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2798 | Get items OTP Verify | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2799 | Condition | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2800 | Set variable varStatusCode No Pending OTP Found | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2801 | Append to string variable varRsponse No Pending OTP Found | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2802 | Condition 1 | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2803 | Update item | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2804 | Set variable Verification Successful | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2805 | Append to string variable Verification Successful | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2806 | Set variable OTP  OTP Invalid or Expired | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2807 | Append to string variable  OTP Invalid or Expired | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2808 | Compose OTP Veriify Structure Update | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2809 | Get item OTP Record | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2810 | Compose Count Items Check | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2811 | Compose OTP Code | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2812 | Compose OTP Code Verify | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2813 | Compose OTP Identifier Verify | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2814 | Append to string variable Default | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2815 | Set variable Default | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2816 | Scope Finalize Response State | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2817 | Set variable  varDurationMs | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2818 | Set variable varCompletedAtUtc | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2819 | Set variable varStatusCode | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2820 | Response | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2821 | Set variable varData | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2822 | Compose  Standard Response Revised | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2823 | Compose | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2824 | Compose 1 | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2825 | Scope VERIFY Complete No Trigger | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2826 | Compose Verify Identifier | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2827 | Condition Verify Email Required | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2828 | Set variable varStatusCode Missing Email | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2829 | Set variable varResponse Missing Email | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2830 | Compose Random OTP | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2831 | Compose OTP Expiry 1 | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2832 | Create item OTP Record 1 | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2833 | Send an email V2 OTP | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2834 | Set variable varStatusCode Verify Success | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2835 | Set variable varResponse Verify Success | Power Automate — Portal_Verify_Confirm | Automated |
| STEP-2836 | Response VERIFY | Power Automate — Portal_Verify_Confirm | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 3b69aa71-ffed-4956-9d20-2aa3021a8da0 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2775 | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments |
| STEP-2776 | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised |
| STEP-2778 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |
| STEP-2783 | trigger field 'requestId' |
| STEP-2792 | trigger field 'action' |
| STEP-2794 | trigger field 'identifier'<br>variable 'varRandomOTP'<br>output of Compose OTP Expiry |
| STEP-2795 | output of Create item OTP Record |
| STEP-2797 | variable 'varRandomOTP' |
| STEP-2798 | output of Compose OTP Code |
| STEP-2799 | output of Compose Count Items Check |
| STEP-2802 | output of Get item OTP Record |
| STEP-2803 | output of Get item OTP Record |
| STEP-2808 | trigger field 'identifier'<br>trigger field 'userEmail'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'otp_code'<br>variable 'varRequestId'<br>output of Compose OTP Identifier Verify<br>output of Compose OTP Code Verify<br>output of Get items OTP Verify<br>output of Compose Count Items Check |
| STEP-2809 | output of Get items OTP Verify |
| STEP-2810 | output of Get items OTP Verify |
| STEP-2811 | trigger field 'otp_code' |
| STEP-2812 | trigger field 'otp_code' |
| STEP-2813 | trigger field 'identifier'<br>trigger field 'userEmail'<br>trigger field 'id'<br>trigger field 'device' |
| STEP-2817 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-2819 | variable 'varFailedCount'<br>variable 'varErrors' |
| STEP-2820 | output of Compose  Standard Response Revised |
| STEP-2821 | variable 'varResponse' |
| STEP-2822 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' |
| STEP-2826 | trigger field 'email'<br>trigger field 'identifier'<br>trigger field 'userEmail' |
| STEP-2827 | output of Compose Verify Identifier |
| STEP-2832 | output of Compose Verify Identifier<br>output of Compose Random OTP<br>output of Compose OTP Expiry |
| STEP-2833 | output of Compose Verify Identifier<br>output of Compose Random OTP |
| STEP-2835 | output of Compose OTP Expiry |
| STEP-2836 | variable 'varStatusCode' |

## 5.5 Stages and activities

67 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2770 | 1 | Initialize variable varCurrentTime | flow root | Power Automate — Portal_Verify_Confirm | Compose 1 reaches Succeeded | Compose 1 = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2771 | 2 | Initialize variable varResponse | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varCurrentTime reaches Succeeded | Initialize variable varCurrentTime = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2772 | 3 | Initialize variable varStatusCode | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRandomOTP | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2773 | 4 | Initialize variable varRandomOTP | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2774 | 5 | Scope Flow Data Capture | flow root | Power Automate — Portal_Verify_Confirm | Scope Global reaches Succeeded or TimedOut or Skipped or Failed | Scope Global = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope VERIFY Complete No Trigger | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-116 |
| STEP-2775 | 6 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-116 |
| STEP-2776 | 7 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — Portal_Verify_Confirm | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2777 | 8 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — Portal_Verify_Confirm | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2778 | 9 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — Portal_Verify_Confirm | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2779 | 10 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — Portal_Verify_Confirm | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2780 | 11 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — Portal_Verify_Confirm | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Headers | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2781 | 12 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Queries | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2782 | 13 | Initialize variable varFailed | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2783 | 14 | Initialize variable varRequestId | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varDurationMs reaches Succeeded | Initialize variable varDurationMs = Succeeded | trigger field 'requestId' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varFailed | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2784 | 15 | Initialize variable varReceivedAtUtc | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2785 | 16 | Initialize variable varStartTicks | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varResults reaches Succeeded | Initialize variable varResults = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2786 | 17 | Initialize variable varResults | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2787 | 18 | Initialize variable varErrors | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResults | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2788 | 19 | Initialize variable varData | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varRandomOTP reaches Succeeded | Initialize variable varRandomOTP = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2789 | 20 | Initialize variable varCompletedAtUtc | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2790 | 21 | Initialize variable varDurationMs | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRequestId | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2791 | 22 | Scope Global | flow root | Power Automate — Portal_Verify_Confirm | Initialize variable varFailed reaches Succeeded | Initialize variable varFailed = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2792 | 23 | Switch | Scope Global | Power Automate — Portal_Verify_Confirm | Entry of Scope Global | None declared beyond entry into its container. | trigger field 'action' | Evaluates an expression and runs the matching case. | Discriminator: @triggerBody()?['action'] | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Set variable varData (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2793 | 24 | Compose OTP Expiry | Switch · case Case Generate | Power Automate — Portal_Verify_Confirm | Entry of Switch · case Case Generate | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create item OTP Record | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2794 | 25 | Create item OTP Record | Switch · case Case Generate | Microsoft SharePoint Online, called by the flow | Compose OTP Expiry reaches Succeeded | Compose OTP Expiry = Succeeded | trigger field 'identifier'<br>variable 'varRandomOTP'<br>output of Compose OTP Expiry | Creates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Send an email (V2) | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-116 |
| STEP-2795 | 26 | Append to string variable varResponse Generate OTP | Switch · case Case Generate | Power Automate — Portal_Verify_Confirm | Send an email (V2) reaches Succeeded | Send an email (V2) = Succeeded | output of Create item OTP Record | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varStatusCode Generate OTP | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2796 | 27 | Set variable varStatusCode Generate OTP | Switch · case Case Generate | Power Automate — Portal_Verify_Confirm | Append to string variable varResponse Generate OTP reaches Succeeded | Append to string variable varResponse Generate OTP = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2797 | 28 | Send an email (V2) | Switch · case Case Generate | Microsoft Office 365 Outlook, called by the flow | Create item OTP Record reaches Succeeded | Create item OTP Record = Succeeded | variable 'varRandomOTP' | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Append to string variable varResponse Generate OTP | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-116 |
| STEP-2798 | 29 | Get items OTP Verify | Switch · case Case Verify | Microsoft SharePoint Online, called by the flow | Compose OTP Code reaches Succeeded | Compose OTP Code = Succeeded | output of Compose OTP Code | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose OTP Code Verify | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2799 | 30 | Condition | Switch · case Case Verify | Power Automate — Portal_Verify_Confirm | Compose Count Items Check reaches Succeeded | Compose Count Items Check = Succeeded | output of Compose Count Items Check | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"less":["@outputs('Compose_Count_Items_Check')",1]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2800 | 31 | Set variable varStatusCode No Pending OTP Found | Condition | Power Automate — Portal_Verify_Confirm | Append to string variable varRsponse No Pending OTP Found reaches Succeeded | Append to string variable varRsponse No Pending OTP Found = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2801 | 32 | Append to string variable varRsponse No Pending OTP Found | Condition | Power Automate — Portal_Verify_Confirm | Entry of Condition | None declared beyond entry into its container. | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varStatusCode No Pending OTP Found | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2802 | 33 | Condition 1 | Condition · else | Power Automate — Portal_Verify_Confirm | Get item OTP Record reaches Succeeded | Get item OTP Record = Succeeded | output of Get item OTP Record | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"greater":["@outputs('Get_item_OTP_Record')?['body/Expires_At']","@utcNow()"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose OTP Veriify Structure Update | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2803 | 34 | Update item | Condition 1 | Microsoft SharePoint Online, called by the flow | Entry of Condition 1 | None declared beyond entry into its container. | output of Get item OTP Record | Updates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Set variable Verification Successful | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-116 |
| STEP-2804 | 35 | Set variable Verification Successful | Condition 1 | Power Automate — Portal_Verify_Confirm | Update item reaches Succeeded | Update item = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable Verification Successful | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2805 | 36 | Append to string variable Verification Successful | Condition 1 | Power Automate — Portal_Verify_Confirm | Set variable Verification Successful reaches Succeeded | Set variable Verification Successful = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2806 | 37 | Set variable OTP  OTP Invalid or Expired | Condition 1 · else | Power Automate — Portal_Verify_Confirm | Entry of Condition 1 · else | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable  OTP Invalid or Expired | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2807 | 38 | Append to string variable  OTP Invalid or Expired | Condition 1 · else | Power Automate — Portal_Verify_Confirm | Set variable OTP  OTP Invalid or Expired reaches Succeeded | Set variable OTP  OTP Invalid or Expired = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2808 | 39 | Compose OTP Veriify Structure Update | Condition · else | Power Automate — Portal_Verify_Confirm | Condition 1 reaches Succeeded | Condition 1 = Succeeded | trigger field 'identifier'<br>trigger field 'userEmail'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'otp_code'<br>variable 'varRequestId'<br>output of Compose OTP Identifier Verify<br>output of Compose OTP Code Verify<br>output of Get items OTP Verify<br>output of Compose Count Items Check | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2809 | 40 | Get item OTP Record | Condition · else | Microsoft SharePoint Online, called by the flow | Entry of Condition · else | None declared beyond entry into its container. | output of Get items OTP Verify | Reads one list item by identifier from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition 1 | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2810 | 41 | Compose Count Items Check | Switch · case Case Verify | Power Automate — Portal_Verify_Confirm | Compose OTP Identifier Verify reaches Succeeded | Compose OTP Identifier Verify = Succeeded | output of Get items OTP Verify | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2811 | 42 | Compose OTP Code | Switch · case Case Verify | Power Automate — Portal_Verify_Confirm | Entry of Switch · case Case Verify | None declared beyond entry into its container. | trigger field 'otp_code' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Get items OTP Verify | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2812 | 43 | Compose OTP Code Verify | Switch · case Case Verify | Power Automate — Portal_Verify_Confirm | Get items OTP Verify reaches Succeeded | Get items OTP Verify = Succeeded | trigger field 'otp_code' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose OTP Identifier Verify | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2813 | 44 | Compose OTP Identifier Verify | Switch · case Case Verify | Power Automate — Portal_Verify_Confirm | Compose OTP Code Verify reaches Succeeded | Compose OTP Code Verify = Succeeded | trigger field 'identifier'<br>trigger field 'userEmail'<br>trigger field 'id'<br>trigger field 'device' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Count Items Check | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2814 | 45 | Append to string variable Default | Switch · default | Power Automate — Portal_Verify_Confirm | Set variable Default reaches Succeeded | Set variable Default = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2815 | 46 | Set variable Default | Switch · default | Power Automate — Portal_Verify_Confirm | Entry of Switch · default | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable Default | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2816 | 47 | Scope Finalize Response State | Scope Global | Power Automate — Portal_Verify_Confirm | Set variable varData reaches Succeeded or TimedOut or Skipped or Failed | Set variable varData = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose  Standard Response Revised (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-116 |
| STEP-2817 | 48 | Set variable  varDurationMs | Scope Finalize Response State | Power Automate — Portal_Verify_Confirm | Set variable varCompletedAtUtc reaches Succeeded | Set variable varCompletedAtUtc = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2818 | 49 | Set variable varCompletedAtUtc | Scope Finalize Response State | Power Automate — Portal_Verify_Confirm | Set variable varStatusCode reaches Succeeded | Set variable varStatusCode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2819 | 50 | Set variable varStatusCode | Scope Finalize Response State | Power Automate — Portal_Verify_Confirm | Entry of Scope Finalize Response State | None declared beyond entry into its container. | variable 'varFailedCount'<br>variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2820 | 51 | Response | Scope Global | Power Automate — Portal_Verify_Confirm | Compose  Standard Response Revised reaches Succeeded | Compose  Standard Response Revised = Succeeded | output of Compose  Standard Response Revised | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2821 | 52 | Set variable varData | Scope Global | Power Automate — Portal_Verify_Confirm | Switch reaches Succeeded or Skipped or TimedOut or Failed | Switch = Succeeded\|Skipped\|TimedOut\|Failed | variable 'varResponse' | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | Scope Finalize Response State (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-116 |
| STEP-2822 | 53 | Compose  Standard Response Revised | Scope Global | Power Automate — Portal_Verify_Confirm | Scope Finalize Response State reaches Succeeded or Skipped or TimedOut or Failed | Scope Finalize Response State = Succeeded\|Skipped\|TimedOut\|Failed | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-116 |
| STEP-2823 | 54 | Compose | flow root | Power Automate — Portal_Verify_Confirm | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2824 | 55 | Compose 1 | flow root | Power Automate — Portal_Verify_Confirm | Compose reaches Succeeded | Compose = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Initialize variable varCurrentTime | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2825 | 56 | Scope VERIFY Complete No Trigger | flow root | Power Automate — Portal_Verify_Confirm | Scope Flow Data Capture reaches Succeeded | Scope Flow Data Capture = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2826 | 57 | Compose Verify Identifier | Scope VERIFY Complete No Trigger | Power Automate — Portal_Verify_Confirm | Entry of Scope VERIFY Complete No Trigger | None declared beyond entry into its container. | trigger field 'email'<br>trigger field 'identifier'<br>trigger field 'userEmail' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition Verify Email Required | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2827 | 58 | Condition Verify Email Required | Scope VERIFY Complete No Trigger | Power Automate — Portal_Verify_Confirm | Compose Verify Identifier reaches Succeeded | Compose Verify Identifier = Succeeded | output of Compose Verify Identifier | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@empty(outputs('Compose_Verify_Identifier'))",true]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Response VERIFY (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2828 | 59 | Set variable varStatusCode Missing Email | Condition Verify Email Required | Power Automate — Portal_Verify_Confirm | Entry of Condition Verify Email Required | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponse Missing Email | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2829 | 60 | Set variable varResponse Missing Email | Condition Verify Email Required | Power Automate — Portal_Verify_Confirm | Set variable varStatusCode Missing Email reaches Succeeded | Set variable varStatusCode Missing Email = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2830 | 61 | Compose Random OTP | Condition Verify Email Required · else | Power Automate — Portal_Verify_Confirm | Entry of Condition Verify Email Required · else | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose OTP Expiry 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2831 | 62 | Compose OTP Expiry 1 | Condition Verify Email Required · else | Power Automate — Portal_Verify_Confirm | Compose Random OTP reaches Succeeded | Compose Random OTP = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create item OTP Record 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2832 | 63 | Create item OTP Record 1 | Condition Verify Email Required · else | Microsoft SharePoint Online, called by the flow | Compose OTP Expiry 1 reaches Succeeded | Compose OTP Expiry 1 = Succeeded | output of Compose Verify Identifier<br>output of Compose Random OTP<br>output of Compose OTP Expiry | Creates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Send an email V2 OTP | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-116 |
| STEP-2833 | 64 | Send an email V2 OTP | Condition Verify Email Required · else | Microsoft Office 365 Outlook, called by the flow | Create item OTP Record 1 reaches Succeeded | Create item OTP Record 1 = Succeeded | output of Compose Verify Identifier<br>output of Compose Random OTP | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Set variable varStatusCode Verify Success | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-116 |
| STEP-2834 | 65 | Set variable varStatusCode Verify Success | Condition Verify Email Required · else | Power Automate — Portal_Verify_Confirm | Send an email V2 OTP reaches Succeeded | Send an email V2 OTP = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponse Verify Success | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2835 | 66 | Set variable varResponse Verify Success | Condition Verify Email Required · else | Power Automate — Portal_Verify_Confirm | Set variable varStatusCode Verify Success reaches Succeeded | Set variable varStatusCode Verify Success = Succeeded | output of Compose OTP Expiry | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-116 |
| STEP-2836 | 67 | Response VERIFY | Scope VERIFY Complete No Trigger | Power Automate — Portal_Verify_Confirm | Condition Verify Email Required reaches Succeeded or Failed or Skipped or TimedOut | Condition Verify Email Required = Succeeded\|Failed\|Skipped\|TimedOut | variable 'varStatusCode' | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-116 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-137 | Switch | Power Automate — Portal_Verify_Confirm | `@triggerBody()?['action']` | trigger field 'action' | generate<br>verify | "generate" → Compose OTP Expiry, Create item OTP Record, Append to string variable varResponse Generate OTP, Set variable varStatusCode Generate OTP, Send an email (V2)<br>"verify" → Get items OTP Verify, Condition, Compose Count Items Check, Compose OTP Code, Compose OTP Code Verify, Compose OTP Identifier Verify | Default branch runs: Append to string variable Default, Set variable Default. | Not declared on the decision itself. | Confirmed |
| DEC-138 | Condition | Power Automate — Portal_Verify_Confirm | `{"and":[{"less":["@outputs('Compose_Count_Items_Check')",1]}]}` | output of Compose Count Items Check | true<br>false | true → Set variable varStatusCode No Pending OTP Found, Append to string variable varRsponse No Pending OTP Found<br>false → Condition 1, Compose OTP Veriify Structure Update, Get item OTP Record | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-139 | Condition 1 | Power Automate — Portal_Verify_Confirm | `{"and":[{"greater":["@outputs('Get_item_OTP_Record')?['body/Expires_At']","@utcNow()"]}]}` | output of Get item OTP Record | true<br>false | true → Update item, Set variable Verification Successful, Append to string variable Verification Successful<br>false → Set variable OTP  OTP Invalid or Expired, Append to string variable  OTP Invalid or Expired | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-140 | Condition Verify Email Required | Power Automate — Portal_Verify_Confirm | `{"and":[{"equals":["@empty(outputs('Compose_Verify_Identifier'))",true]}]}` | output of Compose Verify Identifier | true<br>false | true → Set variable varStatusCode Missing Email, Set variable varResponse Missing Email<br>false → Compose Random OTP, Compose OTP Expiry 1, Create item OTP Record 1, Send an email V2 OTP, Set variable varStatusCode Verify Success, Set variable varResponse Verify Success | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 2 response action(s); status codes 200, @variables('varStatusCode'). |
| Successful end state | A Response action returns to the caller. 2 response action(s); status codes 200, @variables('varStatusCode'). |
| Alternative end states | 5 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | STEP-2794 Create item OTP Record<br>STEP-2803 Update item<br>STEP-2832 Create item OTP Record 1 |
| Notifications issued | NOTIF-231 Send Telemetry Email<br>NOTIF-232 Send an email (V2)<br>NOTIF-233 Send an email V2 OTP |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-206 | Recovery after Scope Global | Scope Global reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — Portal_Verify_Confirm | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-207 | Recovery after Set variable varData | Set variable varData reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State. | Power Automate — Portal_Verify_Confirm | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-208 | Recovery after Switch | Switch reaches Skipped or TimedOut or Failed | Replaces the value held in a run-scoped variable. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Set variable varData. | Power Automate — Portal_Verify_Confirm | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-209 | Recovery after Scope Finalize Response State | Scope Finalize Response State reaches Skipped or TimedOut or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose  Standard Response Revised. | Power Automate — Portal_Verify_Confirm | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-210 | Recovery after Condition Verify Email Required | Condition Verify Email Required reaches Failed or Skipped or TimedOut | Returns the HTTP response to the caller and ends the request. | The caller receives HTTP @variables('varStatusCode'). | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Response VERIFY. | Power Automate — Portal_Verify_Confirm | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2775 Send Telemetry Email | Sends a message; delivery is the record. |
| STEP-2794 Create item OTP Record | Writes a list item; the write itself is the audit record. |
| STEP-2797 Send an email (V2) | Sends a message; delivery is the record. |
| STEP-2803 Update item | Writes a list item; the write itself is the audit record. |
| STEP-2832 Create item OTP Record 1 | Writes a list item; the write itself is the audit record. |
| STEP-2833 Send an email V2 OTP | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
