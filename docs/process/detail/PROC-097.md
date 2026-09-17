# PROC-097 — Web - OTP Verify

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-097 |
| Name | Web - OTP Verify |
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
| Sources | `SRC-129` docs/reference/flow-contracts/deployed/Web - OTP Verify__3e201620-f1e8-4c17-a90a-4d95b94a24c2__full_definition.json |

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
| STEP-3611 | Initialize variable varCurrentTime | Power Automate — Web - OTP Verify | Automated |
| STEP-3612 | Initialize variable varResponse | Power Automate — Web - OTP Verify | Automated |
| STEP-3613 | Initialize variable varStatusCode | Power Automate — Web - OTP Verify | Automated |
| STEP-3614 | Initialize variable varRandomOTP | Power Automate — Web - OTP Verify | Automated |
| STEP-3615 | Scope Flow Data Capture | Power Automate — Web - OTP Verify | Automated |
| STEP-3616 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3617 | Compose Telemetry Attachments | Power Automate — Web - OTP Verify | Automated |
| STEP-3618 | Compose Flow Run Record Schema | Power Automate — Web - OTP Verify | Automated |
| STEP-3619 | Compose Flow Run Record | Power Automate — Web - OTP Verify | Automated |
| STEP-3620 | Compose Redacted Headers | Power Automate — Web - OTP Verify | Automated |
| STEP-3621 | Compose Redacted Queries | Power Automate — Web - OTP Verify | Automated |
| STEP-3622 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-3623 | Initialize variable varFailed | Power Automate — Web - OTP Verify | Automated |
| STEP-3624 | Initialize variable varRequestId | Power Automate — Web - OTP Verify | Automated |
| STEP-3625 | Initialize variable varReceivedAtUtc | Power Automate — Web - OTP Verify | Automated |
| STEP-3626 | Initialize variable varStartTicks | Power Automate — Web - OTP Verify | Automated |
| STEP-3627 | Initialize variable varResults | Power Automate — Web - OTP Verify | Automated |
| STEP-3628 | Initialize variable varErrors | Power Automate — Web - OTP Verify | Automated |
| STEP-3629 | Initialize variable varData | Power Automate — Web - OTP Verify | Automated |
| STEP-3630 | Initialize variable varCompletedAtUtc | Power Automate — Web - OTP Verify | Automated |
| STEP-3631 | Initialize variable varDurationMs | Power Automate — Web - OTP Verify | Automated |
| STEP-3632 | Scope Global | Power Automate — Web - OTP Verify | Automated |
| STEP-3633 | Switch | Power Automate — Web - OTP Verify | Automated |
| STEP-3634 | Compose OTP Expiry | Power Automate — Web - OTP Verify | Automated |
| STEP-3635 | Create item OTP Record | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3636 | Append to string variable varResponse Generate OTP | Power Automate — Web - OTP Verify | Automated |
| STEP-3637 | Set variable varStatusCode Generate OTP | Power Automate — Web - OTP Verify | Automated |
| STEP-3638 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3639 | Get items OTP Verify | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3640 | Condition | Power Automate — Web - OTP Verify | Automated |
| STEP-3641 | Set variable varStatusCode No Pending OTP Found | Power Automate — Web - OTP Verify | Automated |
| STEP-3642 | Append to string variable varRsponse No Pending OTP Found | Power Automate — Web - OTP Verify | Automated |
| STEP-3643 | Condition 1 | Power Automate — Web - OTP Verify | Automated |
| STEP-3644 | Update item | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3645 | Set variable Verification Successful | Power Automate — Web - OTP Verify | Automated |
| STEP-3646 | Append to string variable Verification Successful | Power Automate — Web - OTP Verify | Automated |
| STEP-3647 | Set variable OTP  OTP Invalid or Expired | Power Automate — Web - OTP Verify | Automated |
| STEP-3648 | Append to string variable  OTP Invalid or Expired | Power Automate — Web - OTP Verify | Automated |
| STEP-3649 | Compose OTP Veriify Structure Update | Power Automate — Web - OTP Verify | Automated |
| STEP-3650 | Get item OTP Record | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3651 | Compose Count Items Check | Power Automate — Web - OTP Verify | Automated |
| STEP-3652 | Compose OTP Code | Power Automate — Web - OTP Verify | Automated |
| STEP-3653 | Compose OTP Code Verify | Power Automate — Web - OTP Verify | Automated |
| STEP-3654 | Compose OTP Identifier Verify | Power Automate — Web - OTP Verify | Automated |
| STEP-3655 | Append to string variable Default | Power Automate — Web - OTP Verify | Automated |
| STEP-3656 | Set variable Default | Power Automate — Web - OTP Verify | Automated |
| STEP-3657 | Scope Finalize Response State | Power Automate — Web - OTP Verify | Automated |
| STEP-3658 | Set variable  varDurationMs | Power Automate — Web - OTP Verify | Automated |
| STEP-3659 | Set variable varCompletedAtUtc | Power Automate — Web - OTP Verify | Automated |
| STEP-3660 | Set variable varStatusCode | Power Automate — Web - OTP Verify | Automated |
| STEP-3661 | Response | Power Automate — Web - OTP Verify | Automated |
| STEP-3662 | Set variable varData | Power Automate — Web - OTP Verify | Automated |
| STEP-3663 | Compose  Standard Response Revised | Power Automate — Web - OTP Verify | Automated |
| STEP-3664 | Compose | Power Automate — Web - OTP Verify | Automated |
| STEP-3665 | Compose 1 | Power Automate — Web - OTP Verify | Automated |
| STEP-3666 | Scope VERIFY Complete No Trigger | Power Automate — Web - OTP Verify | Automated |
| STEP-3667 | Compose Verify Identifier | Power Automate — Web - OTP Verify | Automated |
| STEP-3668 | Condition Verify Email Required | Power Automate — Web - OTP Verify | Automated |
| STEP-3669 | Set variable varStatusCode Missing Email | Power Automate — Web - OTP Verify | Automated |
| STEP-3670 | Set variable varResponse Missing Email | Power Automate — Web - OTP Verify | Automated |
| STEP-3671 | Compose Random OTP | Power Automate — Web - OTP Verify | Automated |
| STEP-3672 | Compose OTP Expiry 1 | Power Automate — Web - OTP Verify | Automated |
| STEP-3673 | Create item OTP Record 1 | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3674 | Send an email V2 OTP | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3675 | Set variable varStatusCode Verify Success | Power Automate — Web - OTP Verify | Automated |
| STEP-3676 | Set variable varResponse Verify Success | Power Automate — Web - OTP Verify | Automated |
| STEP-3677 | Response VERIFY | Power Automate — Web - OTP Verify | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 3e201620-f1e8-4c17-a90a-4d95b94a24c2 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3616 | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments |
| STEP-3617 | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised |
| STEP-3619 | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition |
| STEP-3624 | trigger field 'requestId' |
| STEP-3633 | trigger field 'action' |
| STEP-3635 | trigger field 'identifier'<br>variable 'varRandomOTP'<br>output of Compose OTP Expiry |
| STEP-3636 | output of Create item OTP Record |
| STEP-3638 | variable 'varRandomOTP' |
| STEP-3639 | output of Compose OTP Code |
| STEP-3640 | output of Compose Count Items Check |
| STEP-3643 | output of Get item OTP Record |
| STEP-3644 | output of Get item OTP Record |
| STEP-3649 | trigger field 'identifier'<br>trigger field 'userEmail'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'otp_code'<br>variable 'varRequestId'<br>output of Compose OTP Identifier Verify<br>output of Compose OTP Code Verify<br>output of Get items OTP Verify<br>output of Compose Count Items Check |
| STEP-3650 | output of Get items OTP Verify |
| STEP-3651 | output of Get items OTP Verify |
| STEP-3652 | trigger field 'otp_code' |
| STEP-3653 | trigger field 'otp_code' |
| STEP-3654 | trigger field 'identifier'<br>trigger field 'userEmail'<br>trigger field 'id'<br>trigger field 'device' |
| STEP-3658 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-3660 | variable 'varFailedCount'<br>variable 'varErrors' |
| STEP-3661 | output of Compose  Standard Response Revised |
| STEP-3662 | variable 'varResponse' |
| STEP-3663 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' |
| STEP-3667 | trigger field 'email'<br>trigger field 'identifier'<br>trigger field 'userEmail' |
| STEP-3668 | output of Compose Verify Identifier |
| STEP-3673 | output of Compose Verify Identifier<br>output of Compose Random OTP<br>output of Compose OTP Expiry |
| STEP-3674 | output of Compose Verify Identifier<br>output of Compose Random OTP |
| STEP-3676 | output of Compose OTP Expiry |
| STEP-3677 | variable 'varStatusCode' |

## 5.5 Stages and activities

67 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3611 | 1 | Initialize variable varCurrentTime | flow root | Power Automate — Web - OTP Verify | Compose 1 reaches Succeeded | Compose 1 = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3612 | 2 | Initialize variable varResponse | flow root | Power Automate — Web - OTP Verify | Initialize variable varCurrentTime reaches Succeeded | Initialize variable varCurrentTime = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3613 | 3 | Initialize variable varStatusCode | flow root | Power Automate — Web - OTP Verify | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRandomOTP | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3614 | 4 | Initialize variable varRandomOTP | flow root | Power Automate — Web - OTP Verify | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3615 | 5 | Scope Flow Data Capture | flow root | Power Automate — Web - OTP Verify | Scope Global reaches Succeeded or TimedOut or Skipped or Failed | Scope Global = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope VERIFY Complete No Trigger | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-129 |
| STEP-3616 | 6 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-129 |
| STEP-3617 | 7 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — Web - OTP Verify | Compose Flow Run Record Schema reaches Succeeded | Compose Flow Run Record Schema = Succeeded | output of Compose Flow Run Record<br>output of Compose Flow Run Record Schema<br>output of Get Flow Definition<br>output of Compose  Standard Response Revised | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3618 | 8 | Compose Flow Run Record Schema | Scope Flow Data Capture | Power Automate — Web - OTP Verify | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3619 | 9 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — Web - OTP Verify | Compose Redacted Headers reaches Succeeded | Compose Redacted Headers = Succeeded | output of Compose Redacted Headers<br>output of Compose Redacted Queries<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record Schema | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3620 | 10 | Compose Redacted Headers | Scope Flow Data Capture | Power Automate — Web - OTP Verify | Compose Redacted Queries reaches Succeeded | Compose Redacted Queries = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Flow Run Record | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3621 | 11 | Compose Redacted Queries | Scope Flow Data Capture | Power Automate — Web - OTP Verify | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Redacted Headers | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3622 | 12 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Redacted Queries | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3623 | 13 | Initialize variable varFailed | flow root | Power Automate — Web - OTP Verify | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3624 | 14 | Initialize variable varRequestId | flow root | Power Automate — Web - OTP Verify | Initialize variable varDurationMs reaches Succeeded | Initialize variable varDurationMs = Succeeded | trigger field 'requestId' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varFailed | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3625 | 15 | Initialize variable varReceivedAtUtc | flow root | Power Automate — Web - OTP Verify | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3626 | 16 | Initialize variable varStartTicks | flow root | Power Automate — Web - OTP Verify | Initialize variable varResults reaches Succeeded | Initialize variable varResults = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3627 | 17 | Initialize variable varResults | flow root | Power Automate — Web - OTP Verify | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3628 | 18 | Initialize variable varErrors | flow root | Power Automate — Web - OTP Verify | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResults | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3629 | 19 | Initialize variable varData | flow root | Power Automate — Web - OTP Verify | Initialize variable varRandomOTP reaches Succeeded | Initialize variable varRandomOTP = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3630 | 20 | Initialize variable varCompletedAtUtc | flow root | Power Automate — Web - OTP Verify | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3631 | 21 | Initialize variable varDurationMs | flow root | Power Automate — Web - OTP Verify | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRequestId | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3632 | 22 | Scope Global | flow root | Power Automate — Web - OTP Verify | Initialize variable varFailed reaches Succeeded | Initialize variable varFailed = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3633 | 23 | Switch | Scope Global | Power Automate — Web - OTP Verify | Entry of Scope Global | None declared beyond entry into its container. | trigger field 'action' | Evaluates an expression and runs the matching case. | Discriminator: @triggerBody()?['action'] | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Set variable varData (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3634 | 24 | Compose OTP Expiry | Switch · case Case Generate | Power Automate — Web - OTP Verify | Entry of Switch · case Case Generate | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create item OTP Record | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3635 | 25 | Create item OTP Record | Switch · case Case Generate | Microsoft SharePoint Online, called by the flow | Compose OTP Expiry reaches Succeeded | Compose OTP Expiry = Succeeded | trigger field 'identifier'<br>variable 'varRandomOTP'<br>output of Compose OTP Expiry | Creates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Send an email (V2) | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-129 |
| STEP-3636 | 26 | Append to string variable varResponse Generate OTP | Switch · case Case Generate | Power Automate — Web - OTP Verify | Send an email (V2) reaches Succeeded | Send an email (V2) = Succeeded | output of Create item OTP Record | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varStatusCode Generate OTP | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3637 | 27 | Set variable varStatusCode Generate OTP | Switch · case Case Generate | Power Automate — Web - OTP Verify | Append to string variable varResponse Generate OTP reaches Succeeded | Append to string variable varResponse Generate OTP = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3638 | 28 | Send an email (V2) | Switch · case Case Generate | Microsoft Office 365 Outlook, called by the flow | Create item OTP Record reaches Succeeded | Create item OTP Record = Succeeded | variable 'varRandomOTP' | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Append to string variable varResponse Generate OTP | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-129 |
| STEP-3639 | 29 | Get items OTP Verify | Switch · case Case Verify | Microsoft SharePoint Online, called by the flow | Compose OTP Code reaches Succeeded | Compose OTP Code = Succeeded | output of Compose OTP Code | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose OTP Code Verify | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3640 | 30 | Condition | Switch · case Case Verify | Power Automate — Web - OTP Verify | Compose Count Items Check reaches Succeeded | Compose Count Items Check = Succeeded | output of Compose Count Items Check | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"less":["@outputs('Compose_Count_Items_Check')",1]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3641 | 31 | Set variable varStatusCode No Pending OTP Found | Condition | Power Automate — Web - OTP Verify | Append to string variable varRsponse No Pending OTP Found reaches Succeeded | Append to string variable varRsponse No Pending OTP Found = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3642 | 32 | Append to string variable varRsponse No Pending OTP Found | Condition | Power Automate — Web - OTP Verify | Entry of Condition | None declared beyond entry into its container. | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varStatusCode No Pending OTP Found | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3643 | 33 | Condition 1 | Condition · else | Power Automate — Web - OTP Verify | Get item OTP Record reaches Succeeded | Get item OTP Record = Succeeded | output of Get item OTP Record | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"greater":["@outputs('Get_item_OTP_Record')?['body/Expires_At']","@utcNow()"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose OTP Veriify Structure Update | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3644 | 34 | Update item | Condition 1 | Microsoft SharePoint Online, called by the flow | Entry of Condition 1 | None declared beyond entry into its container. | output of Get item OTP Record | Updates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Set variable Verification Successful | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-129 |
| STEP-3645 | 35 | Set variable Verification Successful | Condition 1 | Power Automate — Web - OTP Verify | Update item reaches Succeeded | Update item = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable Verification Successful | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3646 | 36 | Append to string variable Verification Successful | Condition 1 | Power Automate — Web - OTP Verify | Set variable Verification Successful reaches Succeeded | Set variable Verification Successful = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3647 | 37 | Set variable OTP  OTP Invalid or Expired | Condition 1 · else | Power Automate — Web - OTP Verify | Entry of Condition 1 · else | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable  OTP Invalid or Expired | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3648 | 38 | Append to string variable  OTP Invalid or Expired | Condition 1 · else | Power Automate — Web - OTP Verify | Set variable OTP  OTP Invalid or Expired reaches Succeeded | Set variable OTP  OTP Invalid or Expired = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3649 | 39 | Compose OTP Veriify Structure Update | Condition · else | Power Automate — Web - OTP Verify | Condition 1 reaches Succeeded | Condition 1 = Succeeded | trigger field 'identifier'<br>trigger field 'userEmail'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'otp_code'<br>variable 'varRequestId'<br>output of Compose OTP Identifier Verify<br>output of Compose OTP Code Verify<br>output of Get items OTP Verify<br>output of Compose Count Items Check | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3650 | 40 | Get item OTP Record | Condition · else | Microsoft SharePoint Online, called by the flow | Entry of Condition · else | None declared beyond entry into its container. | output of Get items OTP Verify | Reads one list item by identifier from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition 1 | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3651 | 41 | Compose Count Items Check | Switch · case Case Verify | Power Automate — Web - OTP Verify | Compose OTP Identifier Verify reaches Succeeded | Compose OTP Identifier Verify = Succeeded | output of Get items OTP Verify | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3652 | 42 | Compose OTP Code | Switch · case Case Verify | Power Automate — Web - OTP Verify | Entry of Switch · case Case Verify | None declared beyond entry into its container. | trigger field 'otp_code' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Get items OTP Verify | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3653 | 43 | Compose OTP Code Verify | Switch · case Case Verify | Power Automate — Web - OTP Verify | Get items OTP Verify reaches Succeeded | Get items OTP Verify = Succeeded | trigger field 'otp_code' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose OTP Identifier Verify | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3654 | 44 | Compose OTP Identifier Verify | Switch · case Case Verify | Power Automate — Web - OTP Verify | Compose OTP Code Verify reaches Succeeded | Compose OTP Code Verify = Succeeded | trigger field 'identifier'<br>trigger field 'userEmail'<br>trigger field 'id'<br>trigger field 'device' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Count Items Check | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3655 | 45 | Append to string variable Default | Switch · default | Power Automate — Web - OTP Verify | Set variable Default reaches Succeeded | Set variable Default = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3656 | 46 | Set variable Default | Switch · default | Power Automate — Web - OTP Verify | Entry of Switch · default | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable Default | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3657 | 47 | Scope Finalize Response State | Scope Global | Power Automate — Web - OTP Verify | Set variable varData reaches Succeeded or TimedOut or Skipped or Failed | Set variable varData = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose  Standard Response Revised (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-129 |
| STEP-3658 | 48 | Set variable  varDurationMs | Scope Finalize Response State | Power Automate — Web - OTP Verify | Set variable varCompletedAtUtc reaches Succeeded | Set variable varCompletedAtUtc = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3659 | 49 | Set variable varCompletedAtUtc | Scope Finalize Response State | Power Automate — Web - OTP Verify | Set variable varStatusCode reaches Succeeded | Set variable varStatusCode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3660 | 50 | Set variable varStatusCode | Scope Finalize Response State | Power Automate — Web - OTP Verify | Entry of Scope Finalize Response State | None declared beyond entry into its container. | variable 'varFailedCount'<br>variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3661 | 51 | Response | Scope Global | Power Automate — Web - OTP Verify | Compose  Standard Response Revised reaches Succeeded | Compose  Standard Response Revised = Succeeded | output of Compose  Standard Response Revised | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3662 | 52 | Set variable varData | Scope Global | Power Automate — Web - OTP Verify | Switch reaches Succeeded or Skipped or TimedOut or Failed | Switch = Succeeded\|Skipped\|TimedOut\|Failed | variable 'varResponse' | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | Scope Finalize Response State (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-129 |
| STEP-3663 | 53 | Compose  Standard Response Revised | Scope Global | Power Automate — Web - OTP Verify | Scope Finalize Response State reaches Succeeded or Skipped or TimedOut or Failed | Scope Finalize Response State = Succeeded\|Skipped\|TimedOut\|Failed | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-129 |
| STEP-3664 | 54 | Compose | flow root | Power Automate — Web - OTP Verify | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3665 | 55 | Compose 1 | flow root | Power Automate — Web - OTP Verify | Compose reaches Succeeded | Compose = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Initialize variable varCurrentTime | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3666 | 56 | Scope VERIFY Complete No Trigger | flow root | Power Automate — Web - OTP Verify | Scope Flow Data Capture reaches Succeeded | Scope Flow Data Capture = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3667 | 57 | Compose Verify Identifier | Scope VERIFY Complete No Trigger | Power Automate — Web - OTP Verify | Entry of Scope VERIFY Complete No Trigger | None declared beyond entry into its container. | trigger field 'email'<br>trigger field 'identifier'<br>trigger field 'userEmail' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition Verify Email Required | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3668 | 58 | Condition Verify Email Required | Scope VERIFY Complete No Trigger | Power Automate — Web - OTP Verify | Compose Verify Identifier reaches Succeeded | Compose Verify Identifier = Succeeded | output of Compose Verify Identifier | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@empty(outputs('Compose_Verify_Identifier'))",true]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Response VERIFY (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3669 | 59 | Set variable varStatusCode Missing Email | Condition Verify Email Required | Power Automate — Web - OTP Verify | Entry of Condition Verify Email Required | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponse Missing Email | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3670 | 60 | Set variable varResponse Missing Email | Condition Verify Email Required | Power Automate — Web - OTP Verify | Set variable varStatusCode Missing Email reaches Succeeded | Set variable varStatusCode Missing Email = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3671 | 61 | Compose Random OTP | Condition Verify Email Required · else | Power Automate — Web - OTP Verify | Entry of Condition Verify Email Required · else | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose OTP Expiry 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3672 | 62 | Compose OTP Expiry 1 | Condition Verify Email Required · else | Power Automate — Web - OTP Verify | Compose Random OTP reaches Succeeded | Compose Random OTP = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create item OTP Record 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3673 | 63 | Create item OTP Record 1 | Condition Verify Email Required · else | Microsoft SharePoint Online, called by the flow | Compose OTP Expiry 1 reaches Succeeded | Compose OTP Expiry 1 = Succeeded | output of Compose Verify Identifier<br>output of Compose Random OTP<br>output of Compose OTP Expiry | Creates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Send an email V2 OTP | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-129 |
| STEP-3674 | 64 | Send an email V2 OTP | Condition Verify Email Required · else | Microsoft Office 365 Outlook, called by the flow | Create item OTP Record 1 reaches Succeeded | Create item OTP Record 1 = Succeeded | output of Compose Verify Identifier<br>output of Compose Random OTP | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Set variable varStatusCode Verify Success | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-129 |
| STEP-3675 | 65 | Set variable varStatusCode Verify Success | Condition Verify Email Required · else | Power Automate — Web - OTP Verify | Send an email V2 OTP reaches Succeeded | Send an email V2 OTP = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponse Verify Success | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3676 | 66 | Set variable varResponse Verify Success | Condition Verify Email Required · else | Power Automate — Web - OTP Verify | Set variable varStatusCode Verify Success reaches Succeeded | Set variable varStatusCode Verify Success = Succeeded | output of Compose OTP Expiry | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-129 |
| STEP-3677 | 67 | Response VERIFY | Scope VERIFY Complete No Trigger | Power Automate — Web - OTP Verify | Condition Verify Email Required reaches Succeeded or Failed or Skipped or TimedOut | Condition Verify Email Required = Succeeded\|Failed\|Skipped\|TimedOut | variable 'varStatusCode' | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-129 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-160 | Switch | Power Automate — Web - OTP Verify | `@triggerBody()?['action']` | trigger field 'action' | generate<br>verify | "generate" → Compose OTP Expiry, Create item OTP Record, Append to string variable varResponse Generate OTP, Set variable varStatusCode Generate OTP, Send an email (V2)<br>"verify" → Get items OTP Verify, Condition, Compose Count Items Check, Compose OTP Code, Compose OTP Code Verify, Compose OTP Identifier Verify | Default branch runs: Append to string variable Default, Set variable Default. | Not declared on the decision itself. | Confirmed |
| DEC-161 | Condition | Power Automate — Web - OTP Verify | `{"and":[{"less":["@outputs('Compose_Count_Items_Check')",1]}]}` | output of Compose Count Items Check | true<br>false | true → Set variable varStatusCode No Pending OTP Found, Append to string variable varRsponse No Pending OTP Found<br>false → Condition 1, Compose OTP Veriify Structure Update, Get item OTP Record | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-162 | Condition 1 | Power Automate — Web - OTP Verify | `{"and":[{"greater":["@outputs('Get_item_OTP_Record')?['body/Expires_At']","@utcNow()"]}]}` | output of Get item OTP Record | true<br>false | true → Update item, Set variable Verification Successful, Append to string variable Verification Successful<br>false → Set variable OTP  OTP Invalid or Expired, Append to string variable  OTP Invalid or Expired | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-163 | Condition Verify Email Required | Power Automate — Web - OTP Verify | `{"and":[{"equals":["@empty(outputs('Compose_Verify_Identifier'))",true]}]}` | output of Compose Verify Identifier | true<br>false | true → Set variable varStatusCode Missing Email, Set variable varResponse Missing Email<br>false → Compose Random OTP, Compose OTP Expiry 1, Create item OTP Record 1, Send an email V2 OTP, Set variable varStatusCode Verify Success, Set variable varResponse Verify Success | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

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
| Records created or updated | STEP-3635 Create item OTP Record<br>STEP-3644 Update item<br>STEP-3673 Create item OTP Record 1 |
| Notifications issued | NOTIF-252 Send Telemetry Email<br>NOTIF-253 Send an email (V2)<br>NOTIF-254 Send an email V2 OTP |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-247 | Recovery after Scope Global | Scope Global reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — Web - OTP Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-248 | Recovery after Set variable varData | Set variable varData reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State. | Power Automate — Web - OTP Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-249 | Recovery after Switch | Switch reaches Skipped or TimedOut or Failed | Replaces the value held in a run-scoped variable. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Set variable varData. | Power Automate — Web - OTP Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-250 | Recovery after Scope Finalize Response State | Scope Finalize Response State reaches Skipped or TimedOut or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose  Standard Response Revised. | Power Automate — Web - OTP Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-251 | Recovery after Condition Verify Email Required | Condition Verify Email Required reaches Failed or Skipped or TimedOut | Returns the HTTP response to the caller and ends the request. | The caller receives HTTP @variables('varStatusCode'). | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Response VERIFY. | Power Automate — Web - OTP Verify | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3616 Send Telemetry Email | Sends a message; delivery is the record. |
| STEP-3635 Create item OTP Record | Writes a list item; the write itself is the audit record. |
| STEP-3638 Send an email (V2) | Sends a message; delivery is the record. |
| STEP-3644 Update item | Writes a list item; the write itself is the audit record. |
| STEP-3673 Create item OTP Record 1 | Writes a list item; the write itself is the audit record. |
| STEP-3674 Send an email V2 OTP | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
