# PROC-096 — Web - OTP Generate

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-096 |
| Name | Web - OTP Generate |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 63 action(s) under 1 trigger(s). |
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
| Sources | `SRC-128` docs/reference/flow-contracts/deployed/Web - OTP Generate__a03d0ae8-a106-4aee-9985-d73ea7997653__full_definition.json |

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
| STEP-3548 | Initialize variable varCurrentTime | Power Automate — Web - OTP Generate | Automated |
| STEP-3549 | Initialize variable varResponse | Power Automate — Web - OTP Generate | Automated |
| STEP-3550 | Initialize variable varStatusCode | Power Automate — Web - OTP Generate | Automated |
| STEP-3551 | Initialize variable varRandomOTP | Power Automate — Web - OTP Generate | Automated |
| STEP-3552 | Scope Flow Data Capture | Power Automate — Web - OTP Generate | Automated |
| STEP-3553 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3554 | Compose Telemetry Attachments | Power Automate — Web - OTP Generate | Automated |
| STEP-3555 | Compose Flow Run Record | Power Automate — Web - OTP Generate | Automated |
| STEP-3556 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-3557 | Scope Global | Power Automate — Web - OTP Generate | Automated |
| STEP-3558 | Scope Finalize Response State | Power Automate — Web - OTP Generate | Automated |
| STEP-3559 | Set variable  varDurationMs | Power Automate — Web - OTP Generate | Automated |
| STEP-3560 | Set variable varCompletedAtUtc | Power Automate — Web - OTP Generate | Automated |
| STEP-3561 | Set variable varStatusCode | Power Automate — Web - OTP Generate | Automated |
| STEP-3562 | Scope Flow Processing Catch | Power Automate — Web - OTP Generate | Automated |
| STEP-3563 | Append to array variable varErrrors (array) Flow Processing Catch | Power Automate — Web - OTP Generate | Automated |
| STEP-3564 | Increment variable varFailedCount Flow Processing Catch | Power Automate — Web - OTP Generate | Automated |
| STEP-3565 | Switch | Power Automate — Web - OTP Generate | Automated |
| STEP-3566 | Compose OTP Expiry | Power Automate — Web - OTP Generate | Automated |
| STEP-3567 | Create item OTP Record | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3568 | Append to string variable varResponse Generate OTP | Power Automate — Web - OTP Generate | Automated |
| STEP-3569 | Set variable varStatusCode Generate OTP | Power Automate — Web - OTP Generate | Automated |
| STEP-3570 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-3571 | Compose OTP Identifier | Power Automate — Web - OTP Generate | Automated |
| STEP-3572 | Get items | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3573 | Condition | Power Automate — Web - OTP Generate | Automated |
| STEP-3574 | Set variable varStatusCode No Pending OTP Found | Power Automate — Web - OTP Generate | Automated |
| STEP-3575 | Append to string variable varRsponse No Pending OTP Found | Power Automate — Web - OTP Generate | Automated |
| STEP-3576 | Compose OTP Identifier Is Missing | Power Automate — Web - OTP Generate | Automated |
| STEP-3577 | Condition 1 | Power Automate — Web - OTP Generate | Automated |
| STEP-3578 | Update item | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3579 | Set variable Verification Successful | Power Automate — Web - OTP Generate | Automated |
| STEP-3580 | Append to string variable Verification Successful | Power Automate — Web - OTP Generate | Automated |
| STEP-3581 | Set variable OTP  OTP Invalid or Expired | Power Automate — Web - OTP Generate | Automated |
| STEP-3582 | Append to string variable  OTP Invalid or Expired | Power Automate — Web - OTP Generate | Automated |
| STEP-3583 | Compose OTP Identifier Verify | Power Automate — Web - OTP Generate | Automated |
| STEP-3584 | Compose OTP Code Verify | Power Automate — Web - OTP Generate | Automated |
| STEP-3585 | Compose Count Items Check | Power Automate — Web - OTP Generate | Automated |
| STEP-3586 | Append to string variable Default | Power Automate — Web - OTP Generate | Automated |
| STEP-3587 | Set variable Default | Power Automate — Web - OTP Generate | Automated |
| STEP-3588 | Compose  Standard Response Revised | Power Automate — Web - OTP Generate | Automated |
| STEP-3589 | Response | Power Automate — Web - OTP Generate | Automated |
| STEP-3590 | Set variable varData | Power Automate — Web - OTP Generate | Automated |
| STEP-3591 | Compose  Standard Response Revised Updated | Power Automate — Web - OTP Generate | Automated |
| STEP-3592 | Set variable varHTTPResponse | Power Automate — Web - OTP Generate | Automated |
| STEP-3593 | Initialize variable varFailed | Power Automate — Web - OTP Generate | Automated |
| STEP-3594 | Initialize variable varRequestId | Power Automate — Web - OTP Generate | Automated |
| STEP-3595 | Initialize variable varReceivedAtUtc | Power Automate — Web - OTP Generate | Automated |
| STEP-3596 | Initialize variable varStartTicks | Power Automate — Web - OTP Generate | Automated |
| STEP-3597 | Initialize variable varResults | Power Automate — Web - OTP Generate | Automated |
| STEP-3598 | Initialize variable varErrors | Power Automate — Web - OTP Generate | Automated |
| STEP-3599 | Initialize variable varData | Power Automate — Web - OTP Generate | Automated |
| STEP-3600 | Initialize variable varCompletedAtUtc | Power Automate — Web - OTP Generate | Automated |
| STEP-3601 | Initialize variable varDurationMs | Power Automate — Web - OTP Generate | Automated |
| STEP-3602 | Compose | Power Automate — Web - OTP Generate | Automated |
| STEP-3603 | Compose 1 | Power Automate — Web - OTP Generate | Automated |
| STEP-3604 | Initialize variable varHTTPResponse | Power Automate — Web - OTP Generate | Automated |
| STEP-3605 | Scope Flow Data Capture 1 | Power Automate — Web - OTP Generate | Automated |
| STEP-3606 | Get Flow Definition 1 | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-3607 | Compose Flow Run Record 1 | Power Automate — Web - OTP Generate | Automated |
| STEP-3608 | Compose Flow Run Report HTML | Power Automate — Web - OTP Generate | Automated |
| STEP-3609 | Compose Telemetry Attachments 1 | Power Automate — Web - OTP Generate | Automated |
| STEP-3610 | Send Telemetry Email 1 | Microsoft Office 365 Outlook, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow a03d0ae8-a106-4aee-9985-d73ea7997653 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3553 | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments |
| STEP-3554 | variable 'varData'<br>output of Compose Flow Run Record<br>output of Get Flow Definition |
| STEP-3555 | output of Get Flow Definition |
| STEP-3559 | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' |
| STEP-3561 | variable 'varFailedCount'<br>variable 'varErrors' |
| STEP-3563 | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' |
| STEP-3565 | trigger field 'action' |
| STEP-3567 | trigger field 'identifier'<br>variable 'varRandomOTP'<br>output of Compose OTP Expiry |
| STEP-3568 | output of Create item OTP Record |
| STEP-3570 | variable 'varRandomOTP' |
| STEP-3571 | output of Create item OTP Record |
| STEP-3572 | trigger field 'identifier' |
| STEP-3573 | output of Compose Count Items Check |
| STEP-3576 | variable 'varRandomOTP' |
| STEP-3577 | trigger field 'otp_code'<br>output of Get items |
| STEP-3578 | output of Get items |
| STEP-3583 | variable 'varRandomOTP' |
| STEP-3584 | variable 'varRandomOTP' |
| STEP-3585 | output of Get items |
| STEP-3588 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' |
| STEP-3589 | variable 'varStatusCode'<br>variable 'varHTTPResponse' |
| STEP-3590 | variable 'varResponse' |
| STEP-3591 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'identifier'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varErrors'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varResults' |
| STEP-3592 | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'identifier'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varErrors'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varResults' |
| STEP-3594 | trigger field 'requestId' |
| STEP-3607 | output of Get Flow Definition |
| STEP-3608 | output of Get Flow Definition |
| STEP-3609 | output of Get Flow Definition<br>output of Compose Flow Run Record<br>output of Compose Flow Run Report HTML |
| STEP-3610 | output of Get Flow Definition<br>output of Compose Telemetry Attachments 1 |

## 5.5 Stages and activities

63 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3548 | 1 | Initialize variable varCurrentTime | flow root | Power Automate — Web - OTP Generate | Compose 1 reaches Succeeded | Compose 1 = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3549 | 2 | Initialize variable varResponse | flow root | Power Automate — Web - OTP Generate | Initialize variable varCurrentTime reaches Succeeded | Initialize variable varCurrentTime = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatusCode | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3550 | 3 | Initialize variable varStatusCode | flow root | Power Automate — Web - OTP Generate | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRandomOTP | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3551 | 4 | Initialize variable varRandomOTP | flow root | Power Automate — Web - OTP Generate | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3552 | 5 | Scope Flow Data Capture | flow root | Power Automate — Web - OTP Generate | Scope Global reaches Succeeded or TimedOut or Skipped or Failed | Scope Global = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Flow Data Capture 1 | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-128 |
| STEP-3553 | 6 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Compose  Standard Response Revised<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-128 |
| STEP-3554 | 7 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — Web - OTP Generate | Compose Flow Run Record reaches Succeeded | Compose Flow Run Record = Succeeded | variable 'varData'<br>output of Compose Flow Run Record<br>output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3555 | 8 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — Web - OTP Generate | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3556 | 9 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Flow Run Record | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3557 | 10 | Scope Global | flow root | Power Automate — Web - OTP Generate | Initialize variable varFailed reaches Succeeded | Initialize variable varFailed = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Flow Data Capture (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3558 | 11 | Scope Finalize Response State | Scope Global | Power Automate — Web - OTP Generate | Scope Flow Processing Catch reaches Succeeded or Failed or Skipped or TimedOut; Switch reaches Succeeded or TimedOut or Skipped or Failed | Scope Flow Processing Catch = Succeeded\|Failed\|Skipped\|TimedOut<br>Switch = Succeeded\|TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Set variable varData (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-128 |
| STEP-3559 | 12 | Set variable  varDurationMs | Scope Finalize Response State | Power Automate — Web - OTP Generate | Set variable varCompletedAtUtc reaches Succeeded | Set variable varCompletedAtUtc = Succeeded | variable 'varStartTicks'<br>variable 'varCompletedAtUtc' | Replaces the value held in a run-scoped variable. | Writes 'varDurationMs'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDurationMs'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3560 | 13 | Set variable varCompletedAtUtc | Scope Finalize Response State | Power Automate — Web - OTP Generate | Set variable varStatusCode reaches Succeeded | Set variable varStatusCode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Set variable  varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3561 | 14 | Set variable varStatusCode | Scope Finalize Response State | Power Automate — Web - OTP Generate | Entry of Scope Finalize Response State | None declared beyond entry into its container. | variable 'varFailedCount'<br>variable 'varErrors' | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3562 | 15 | Scope Flow Processing Catch | Scope Global | Power Automate — Web - OTP Generate | Switch reaches TimedOut or Skipped or Failed | Switch = TimedOut\|Skipped\|Failed | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-128 |
| STEP-3563 | 16 | Append to array variable varErrrors (array) Flow Processing Catch | Scope Flow Processing Catch | Power Automate — Web - OTP Generate | Entry of Scope Flow Processing Catch | None declared beyond entry into its container. | trigger field 'requestId'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'source'<br>variable 'varRequestId' | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Increment variable varFailedCount Flow Processing Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3564 | 17 | Increment variable varFailedCount Flow Processing Catch | Scope Flow Processing Catch | Power Automate — Web - OTP Generate | Append to array variable varErrrors (array) Flow Processing Catch reaches Succeeded | Append to array variable varErrrors (array) Flow Processing Catch = Succeeded | — | Adds to a numeric run-scoped variable. | Writes 'varFailedCount'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varFailedCount'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3565 | 18 | Switch | Scope Global | Power Automate — Web - OTP Generate | Entry of Scope Global | None declared beyond entry into its container. | trigger field 'action' | Evaluates an expression and runs the matching case. | Discriminator: @triggerBody()?['action'] | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response State (runs when this does not succeed)<br>Scope Flow Processing Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3566 | 19 | Compose OTP Expiry | Switch · case Case Generate | Power Automate — Web - OTP Generate | Entry of Switch · case Case Generate | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create item OTP Record | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3567 | 20 | Create item OTP Record | Switch · case Case Generate | Microsoft SharePoint Online, called by the flow | Compose OTP Expiry reaches Succeeded | Compose OTP Expiry = Succeeded | trigger field 'identifier'<br>variable 'varRandomOTP'<br>output of Compose OTP Expiry | Creates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Send an email (V2) | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-128 |
| STEP-3568 | 21 | Append to string variable varResponse Generate OTP | Switch · case Case Generate | Power Automate — Web - OTP Generate | Send an email (V2) reaches Succeeded | Send an email (V2) = Succeeded | output of Create item OTP Record | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varStatusCode Generate OTP | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3569 | 22 | Set variable varStatusCode Generate OTP | Switch · case Case Generate | Power Automate — Web - OTP Generate | Append to string variable varResponse Generate OTP reaches Succeeded | Append to string variable varResponse Generate OTP = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Compose OTP Identifier | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3570 | 23 | Send an email (V2) | Switch · case Case Generate | Microsoft Office 365 Outlook, called by the flow | Create item OTP Record reaches Succeeded | Create item OTP Record = Succeeded | variable 'varRandomOTP' | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Append to string variable varResponse Generate OTP | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-128 |
| STEP-3571 | 24 | Compose OTP Identifier | Switch · case Case Generate | Power Automate — Web - OTP Generate | Set variable varStatusCode Generate OTP reaches Succeeded | Set variable varStatusCode Generate OTP = Succeeded | output of Create item OTP Record | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3572 | 25 | Get items | Switch · case Case Verify | Microsoft SharePoint Online, called by the flow | Entry of Switch · case Case Verify | None declared beyond entry into its container. | trigger field 'identifier' | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Count Items Check | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3573 | 26 | Condition | Switch · case Case Verify | Power Automate — Web - OTP Generate | Compose Count Items Check reaches Succeeded | Compose Count Items Check = Succeeded | output of Compose Count Items Check | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"less":["@outputs('Compose_Count_Items_Check')",1]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3574 | 27 | Set variable varStatusCode No Pending OTP Found | Condition | Power Automate — Web - OTP Generate | Append to string variable varRsponse No Pending OTP Found reaches Succeeded | Append to string variable varRsponse No Pending OTP Found = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3575 | 28 | Append to string variable varRsponse No Pending OTP Found | Condition | Power Automate — Web - OTP Generate | Compose OTP Identifier Is Missing reaches Succeeded | Compose OTP Identifier Is Missing = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | Set variable varStatusCode No Pending OTP Found | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3576 | 29 | Compose OTP Identifier Is Missing | Condition | Power Automate — Web - OTP Generate | Entry of Condition | None declared beyond entry into its container. | variable 'varRandomOTP' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Append to string variable varRsponse No Pending OTP Found | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3577 | 30 | Condition 1 | Condition · else | Power Automate — Web - OTP Generate | Compose OTP Code Verify reaches Succeeded | Compose OTP Code Verify = Succeeded | trigger field 'otp_code'<br>output of Get items | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@first(outputs('Get_items')?['body/value']?['OTP_Code'])","@triggerBody()?['otp_code']"]},{"greater":["@first(outputs('Get_items')?['body/value']?['Expires_At'])","@utcNow()"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3578 | 31 | Update item | Condition 1 | Microsoft SharePoint Online, called by the flow | Entry of Condition 1 | None declared beyond entry into its container. | output of Get items | Updates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Set variable Verification Successful | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-128 |
| STEP-3579 | 32 | Set variable Verification Successful | Condition 1 | Power Automate — Web - OTP Generate | Update item reaches Succeeded | Update item = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable Verification Successful | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3580 | 33 | Append to string variable Verification Successful | Condition 1 | Power Automate — Web - OTP Generate | Set variable Verification Successful reaches Succeeded | Set variable Verification Successful = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3581 | 34 | Set variable OTP  OTP Invalid or Expired | Condition 1 · else | Power Automate — Web - OTP Generate | Entry of Condition 1 · else | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable  OTP Invalid or Expired | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3582 | 35 | Append to string variable  OTP Invalid or Expired | Condition 1 · else | Power Automate — Web - OTP Generate | Set variable OTP  OTP Invalid or Expired reaches Succeeded | Set variable OTP  OTP Invalid or Expired = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3583 | 36 | Compose OTP Identifier Verify | Condition · else | Power Automate — Web - OTP Generate | Entry of Condition · else | None declared beyond entry into its container. | variable 'varRandomOTP' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose OTP Code Verify | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3584 | 37 | Compose OTP Code Verify | Condition · else | Power Automate — Web - OTP Generate | Compose OTP Identifier Verify reaches Succeeded | Compose OTP Identifier Verify = Succeeded | variable 'varRandomOTP' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3585 | 38 | Compose Count Items Check | Switch · case Case Verify | Power Automate — Web - OTP Generate | Get items reaches Succeeded | Get items = Succeeded | output of Get items | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3586 | 39 | Append to string variable Default | Switch · default | Power Automate — Web - OTP Generate | Set variable Default reaches Succeeded | Set variable Default = Succeeded | — | Appends text to a run-scoped string. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3587 | 40 | Set variable Default | Switch · default | Power Automate — Web - OTP Generate | Entry of Switch · default | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Append to string variable Default | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3588 | 41 | Compose  Standard Response Revised | Scope Global | Power Automate — Web - OTP Generate | Set variable varData reaches Succeeded or TimedOut or Skipped or Failed | Set variable varData = Succeeded\|TimedOut\|Skipped\|Failed | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'SelectedItems'<br>trigger field 'userEmail'<br>trigger field 'NewActivityTask'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varResults'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose  Standard Response Revised Updated | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-128 |
| STEP-3589 | 42 | Response | Scope Global | Power Automate — Web - OTP Generate | Set variable varHTTPResponse reaches Succeeded | Set variable varHTTPResponse = Succeeded | variable 'varStatusCode'<br>variable 'varHTTPResponse' | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3590 | 43 | Set variable varData | Scope Global | Power Automate — Web - OTP Generate | Scope Finalize Response State reaches Succeeded or TimedOut or Skipped or Failed | Scope Finalize Response State = Succeeded\|TimedOut\|Skipped\|Failed | variable 'varResponse' | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | Compose  Standard Response Revised (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-128 |
| STEP-3591 | 44 | Compose  Standard Response Revised Updated | Scope Global | Power Automate — Web - OTP Generate | Compose  Standard Response Revised reaches Succeeded | Compose  Standard Response Revised = Succeeded | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'identifier'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varErrors'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varResults' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varHTTPResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3592 | 45 | Set variable varHTTPResponse | Scope Global | Power Automate — Web - OTP Generate | Compose  Standard Response Revised Updated reaches Succeeded | Compose  Standard Response Revised Updated = Succeeded | trigger field 'requestId'<br>trigger field 'trackingId'<br>trigger field 'trackingID'<br>trigger field 'action'<br>trigger field 'operation'<br>trigger field 'mode'<br>trigger field 'userEmail'<br>trigger field 'identifier'<br>trigger field 'id'<br>trigger field 'device'<br>trigger field 'source'<br>variable 'varStatusCode'<br>variable 'varFailedCount'<br>variable 'varErrors'<br>variable 'varRequestId'<br>variable 'varReceivedAtUtc'<br>variable 'varCompletedAtUtc'<br>variable 'varDurationMs'<br>variable 'varData'<br>variable 'varResults' | Replaces the value held in a run-scoped variable. | Writes 'varHTTPResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varHTTPResponse'. | — | Response | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3593 | 46 | Initialize variable varFailed | flow root | Power Automate — Web - OTP Generate | Initialize variable varRequestId reaches Succeeded | Initialize variable varRequestId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3594 | 47 | Initialize variable varRequestId | flow root | Power Automate — Web - OTP Generate | Initialize variable varDurationMs reaches Succeeded | Initialize variable varDurationMs = Succeeded | trigger field 'requestId' | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varFailed | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3595 | 48 | Initialize variable varReceivedAtUtc | flow root | Power Automate — Web - OTP Generate | Initialize variable varStartTicks reaches Succeeded | Initialize variable varStartTicks = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3596 | 49 | Initialize variable varStartTicks | flow root | Power Automate — Web - OTP Generate | Initialize variable varResults reaches Succeeded | Initialize variable varResults = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3597 | 50 | Initialize variable varResults | flow root | Power Automate — Web - OTP Generate | Initialize variable varErrors reaches Succeeded | Initialize variable varErrors = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStartTicks | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3598 | 51 | Initialize variable varErrors | flow root | Power Automate — Web - OTP Generate | Initialize variable varHTTPResponse reaches Succeeded | Initialize variable varHTTPResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResults | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3599 | 52 | Initialize variable varData | flow root | Power Automate — Web - OTP Generate | Initialize variable varRandomOTP reaches Succeeded | Initialize variable varRandomOTP = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varHTTPResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3600 | 53 | Initialize variable varCompletedAtUtc | flow root | Power Automate — Web - OTP Generate | Initialize variable varReceivedAtUtc reaches Succeeded | Initialize variable varReceivedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDurationMs | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3601 | 54 | Initialize variable varDurationMs | flow root | Power Automate — Web - OTP Generate | Initialize variable varCompletedAtUtc reaches Succeeded | Initialize variable varCompletedAtUtc = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varRequestId | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3602 | 55 | Compose | flow root | Power Automate — Web - OTP Generate | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3603 | 56 | Compose 1 | flow root | Power Automate — Web - OTP Generate | Compose reaches Succeeded | Compose = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Initialize variable varCurrentTime | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3604 | 57 | Initialize variable varHTTPResponse | flow root | Power Automate — Web - OTP Generate | Initialize variable varData reaches Succeeded | Initialize variable varData = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3605 | 58 | Scope Flow Data Capture 1 | flow root | Power Automate — Web - OTP Generate | Scope Flow Data Capture reaches Succeeded | Scope Flow Data Capture = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3606 | 59 | Get Flow Definition 1 | Scope Flow Data Capture 1 | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture 1 | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Flow Run Record 1<br>Compose Flow Run Report HTML | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3607 | 60 | Compose Flow Run Record 1 | Scope Flow Data Capture 1 | Power Automate — Web - OTP Generate | Get Flow Definition 1 reaches Succeeded | Get Flow Definition 1 = Succeeded | output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3608 | 61 | Compose Flow Run Report HTML | Scope Flow Data Capture 1 | Power Automate — Web - OTP Generate | Get Flow Definition 1 reaches Succeeded | Get Flow Definition 1 = Succeeded | output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3609 | 62 | Compose Telemetry Attachments 1 | Scope Flow Data Capture 1 | Power Automate — Web - OTP Generate | Compose Flow Run Record 1 reaches Succeeded; Compose Flow Run Report HTML reaches Succeeded | Compose Flow Run Record 1 = Succeeded<br>Compose Flow Run Report HTML = Succeeded | output of Get Flow Definition<br>output of Compose Flow Run Record<br>output of Compose Flow Run Report HTML | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-128 |
| STEP-3610 | 63 | Send Telemetry Email 1 | Scope Flow Data Capture 1 | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments 1 reaches Succeeded | Compose Telemetry Attachments 1 = Succeeded | output of Get Flow Definition<br>output of Compose Telemetry Attachments 1 | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-128 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-157 | Switch | Power Automate — Web - OTP Generate | `@triggerBody()?['action']` | trigger field 'action' | generate<br>verify | "generate" → Compose OTP Expiry, Create item OTP Record, Append to string variable varResponse Generate OTP, Set variable varStatusCode Generate OTP, Send an email (V2), Compose OTP Identifier<br>"verify" → Get items, Condition, Compose Count Items Check | Default branch runs: Append to string variable Default, Set variable Default. | Not declared on the decision itself. | Confirmed |
| DEC-158 | Condition | Power Automate — Web - OTP Generate | `{"and":[{"less":["@outputs('Compose_Count_Items_Check')",1]}]}` | output of Compose Count Items Check | true<br>false | true → Set variable varStatusCode No Pending OTP Found, Append to string variable varRsponse No Pending OTP Found, Compose OTP Identifier Is Missing<br>false → Condition 1, Compose OTP Identifier Verify, Compose OTP Code Verify | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-159 | Condition 1 | Power Automate — Web - OTP Generate | `{"and":[{"equals":["@first(outputs('Get_items')?['body/value']?['OTP_Code'])","@triggerBody()?['otp_code']"]},{"greater":["@first(outputs('Get_items')?['body/value']?['Expires_At'])","@utcNow()"]}]}` | trigger field 'otp_code'<br>output of Get items | true<br>false | true → Update item, Set variable Verification Successful, Append to string variable Verification Successful<br>false → Set variable OTP  OTP Invalid or Expired, Append to string variable  OTP Invalid or Expired | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

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
| Records created or updated | STEP-3567 Create item OTP Record<br>STEP-3578 Update item |
| Notifications issued | NOTIF-249 Send Telemetry Email<br>NOTIF-250 Send an email (V2)<br>NOTIF-251 Send Telemetry Email 1 |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-242 | Recovery after Scope Global | Scope Global reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Data Capture. | Power Automate — Web - OTP Generate | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-243 | Recovery after Scope Flow Processing Catch, Switch | Scope Flow Processing Catch reaches Failed or Skipped or TimedOut; Switch reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response State. | Power Automate — Web - OTP Generate | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-244 | Recovery after Switch | Switch reaches TimedOut or Skipped or Failed | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Flow Processing Catch. | Power Automate — Web - OTP Generate | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-245 | Recovery after Set variable varData | Set variable varData reaches TimedOut or Skipped or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose  Standard Response Revised. | Power Automate — Web - OTP Generate | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-246 | Recovery after Scope Finalize Response State | Scope Finalize Response State reaches TimedOut or Skipped or Failed | Replaces the value held in a run-scoped variable. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Set variable varData. | Power Automate — Web - OTP Generate | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3553 Send Telemetry Email | Sends a message; delivery is the record. |
| STEP-3567 Create item OTP Record | Writes a list item; the write itself is the audit record. |
| STEP-3570 Send an email (V2) | Sends a message; delivery is the record. |
| STEP-3578 Update item | Writes a list item; the write itself is the audit record. |
| STEP-3610 Send Telemetry Email 1 | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
