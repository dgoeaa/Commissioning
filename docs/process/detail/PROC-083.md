# PROC-083 — Portal_Upload_HTTP

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-083 |
| Name | Portal_Upload_HTTP |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 52 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft SharePoint Online. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-115` docs/reference/flow-contracts/deployed/Portal_Upload_HTTP__39d65c5b-5539-43de-aec6-52bfcd31bcc1__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft SharePoint Online |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-2718 | Switch | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2719 | Scope Tasks | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2720 | Get items Tasks | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2721 | Select Tasks | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2722 | Compose Select Data | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2723 | Compose Response | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2724 | Set variable varResponse load | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2725 | Set variable varStatusCode Load | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2726 | Compose Response 1 | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2727 | Compose | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2728 | Compose Submit Response | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2729 | Set variable varResponseSubmit | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2730 | Set variable varStatusCoden Submit | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2731 | Initialize variable varAction | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2732 | Initialize variable varStatusCode | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2733 | Initialize variable varResponse | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2734 | Scope Global Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2735 | Scope Process Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2736 | Compose Submission FileName | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2737 | Compose Submission FileContentBase64 | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2738 | Condition Submission Missing Required Fields | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2739 | Set variable varStatusCode Submission 400 | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2740 | Set variable varstatus Submission Error | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2741 | Set variable varmessage Submission BadRequest | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2742 | Append to array variable varErrors Submission Validation | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2743 | Set variable varData Submission BadRequest | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2744 | Compose Submission ReferenceId | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2745 | Create file 1 | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2746 | Update file properties 1 | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2747 | Set variable vardocId Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2748 | Set variable varStatusCode Submission 200 | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2749 | Set variable varstatus Submission Success | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2750 | Set variable varmessage Submission Success | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2751 | Set variable varData Submission Success | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2752 | Scope Catch Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2753 | Set variable varStatusCode Submission 500 | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2754 | Set variable varstatus Submission Catch Error | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2755 | Set variable varmessage Submission Catch | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2756 | Append to array variable varErrors Submission Catch | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2757 | Set variable varData Submission Catch | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2758 | Scope Finalize Response Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2759 | Set variable varCompletedAtUtc Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2760 | Compose Response Body Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2761 | Response Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2762 | Initialize variable varReceivedAtUtc Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2763 | Initialize variable varCompletedAtUtc Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2764 | Initialize variable varErrors Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2765 | Initialize variable varData Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2766 | Initialize variable vardocId Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2767 | Initialize variable varstatus Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2768 | Initialize variable varmessage Submission | Power Automate — Portal_Upload_HTTP | Automated |
| STEP-2769 | Set variable | Power Automate — Portal_Upload_HTTP | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 39d65c5b-5539-43de-aec6-52bfcd31bcc1 |
| Required system availability | Microsoft Power Automate<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2718 | variable 'varAction' |
| STEP-2721 | output of Get items Tasks |
| STEP-2722 | output of Select Tasks |
| STEP-2723 | trigger field 'action'<br>output of Compose Select Data |
| STEP-2724 | trigger field 'action'<br>output of Compose Select Data |
| STEP-2726 | trigger field 'action'<br>output of Compose Select Data |
| STEP-2727 | trigger field 'action'<br>output of Compose Select Data |
| STEP-2729 | output of Compose Submit Response |
| STEP-2736 | trigger field 'fileName'<br>trigger field 'FileName'<br>trigger field 'attachments' |
| STEP-2737 | trigger field 'fileContentBase64'<br>trigger field 'FileContentBase64'<br>trigger field 'fileContent' |
| STEP-2738 | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 |
| STEP-2742 | output of Compose Submission FileName |
| STEP-2745 | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 |
| STEP-2746 | output of Create file 1 |
| STEP-2747 | output of Update file properties 1<br>output of Create file 1 |
| STEP-2751 | trigger field 'senderEmail'<br>trigger field 'EmailAddress'<br>trigger field 'submittedAt'<br>variable 'vardocId'<br>output of Compose Submission ReferenceId<br>output of Compose Submission FileName |
| STEP-2760 | variable 'varStatusCode'<br>variable 'varData'<br>variable 'varstatus'<br>variable 'varmessage'<br>variable 'varErrors' |
| STEP-2761 | variable 'varStatusCode'<br>output of Compose Response Body Submission |
| STEP-2769 | trigger field 'action' |

## 5.5 Stages and activities

52 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2718 | 1 | Switch | flow root | Power Automate — Portal_Upload_HTTP | Set variable reaches Succeeded | Set variable = Succeeded | variable 'varAction' | Evaluates an expression and runs the matching case. | Discriminator: @variables('varAction') | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Global Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2719 | 2 | Scope Tasks | Switch · case Case load | Power Automate — Portal_Upload_HTTP | Entry of Switch · case Case load | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2720 | 3 | Get items Tasks | Scope Tasks | Microsoft SharePoint Online, called by the flow | Entry of Scope Tasks | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Tasks | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2721 | 4 | Select Tasks | Scope Tasks | Power Automate — Portal_Upload_HTTP | Get items Tasks reaches Succeeded | Get items Tasks = Succeeded | output of Get items Tasks | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Select Data | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2722 | 5 | Compose Select Data | Scope Tasks | Power Automate — Portal_Upload_HTTP | Select Tasks reaches Succeeded | Select Tasks = Succeeded | output of Select Tasks | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Response | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2723 | 6 | Compose Response | Scope Tasks | Power Automate — Portal_Upload_HTTP | Compose Select Data reaches Succeeded | Compose Select Data = Succeeded | trigger field 'action'<br>output of Compose Select Data | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Response 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2724 | 7 | Set variable varResponse load | Scope Tasks | Power Automate — Portal_Upload_HTTP | Set variable varStatusCode Load reaches Succeeded | Set variable varStatusCode Load = Succeeded | trigger field 'action'<br>output of Compose Select Data | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2725 | 8 | Set variable varStatusCode Load | Scope Tasks | Power Automate — Portal_Upload_HTTP | Compose reaches Succeeded | Compose = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponse load | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2726 | 9 | Compose Response 1 | Scope Tasks | Power Automate — Portal_Upload_HTTP | Compose Response reaches Succeeded | Compose Response = Succeeded | trigger field 'action'<br>output of Compose Select Data | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2727 | 10 | Compose | Scope Tasks | Power Automate — Portal_Upload_HTTP | Compose Response 1 reaches Succeeded | Compose Response 1 = Succeeded | trigger field 'action'<br>output of Compose Select Data | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varStatusCode Load | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2728 | 11 | Compose Submit Response | Switch · case Case submit | Power Automate — Portal_Upload_HTTP | Entry of Switch · case Case submit | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varStatusCoden Submit | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2729 | 12 | Set variable varResponseSubmit | Switch · case Case submit | Power Automate — Portal_Upload_HTTP | Set variable varStatusCoden Submit reaches Succeeded | Set variable varStatusCoden Submit = Succeeded | output of Compose Submit Response | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2730 | 13 | Set variable varStatusCoden Submit | Switch · case Case submit | Power Automate — Portal_Upload_HTTP | Compose Submit Response reaches Succeeded | Compose Submit Response = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponseSubmit | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2731 | 14 | Initialize variable varAction | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2732 | 15 | Initialize variable varStatusCode | flow root | Power Automate — Portal_Upload_HTTP | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varAction | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2733 | 16 | Initialize variable varResponse | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varAction reaches Succeeded | Initialize variable varAction = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2734 | 17 | Scope Global Submission | flow root | Power Automate — Portal_Upload_HTTP | Switch reaches Succeeded | Switch = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2735 | 18 | Scope Process Submission | Scope Global Submission | Power Automate — Portal_Upload_HTTP | Entry of Scope Global Submission | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Catch Submission (runs when this does not succeed)<br>Scope Finalize Response Submission (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2736 | 19 | Compose Submission FileName | Scope Process Submission | Power Automate — Portal_Upload_HTTP | Entry of Scope Process Submission | None declared beyond entry into its container. | trigger field 'fileName'<br>trigger field 'FileName'<br>trigger field 'attachments' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Submission FileContentBase64 | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2737 | 20 | Compose Submission FileContentBase64 | Scope Process Submission | Power Automate — Portal_Upload_HTTP | Compose Submission FileName reaches Succeeded | Compose Submission FileName = Succeeded | trigger field 'fileContentBase64'<br>trigger field 'FileContentBase64'<br>trigger field 'fileContent' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition Submission Missing Required Fields | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2738 | 21 | Condition Submission Missing Required Fields | Scope Process Submission | Power Automate — Portal_Upload_HTTP | Compose Submission FileContentBase64 reaches Succeeded | Compose Submission FileContentBase64 = Succeeded | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 | Evaluates a condition and runs one of two branches. | Condition: {"or":[{"equals":["@empty(trim(string(outputs('Compose_Submission_FileName'))))",true]},{"equals":["@empty(trim(string(outputs('Compose_Submission_FileContentBase64'))))",true]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2739 | 22 | Set variable varStatusCode Submission 400 | Condition Submission Missing Required Fields | Power Automate — Portal_Upload_HTTP | Entry of Condition Submission Missing Required Fields | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varstatus Submission Error | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2740 | 23 | Set variable varstatus Submission Error | Condition Submission Missing Required Fields | Power Automate — Portal_Upload_HTTP | Set variable varStatusCode Submission 400 reaches Succeeded | Set variable varStatusCode Submission 400 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage Submission BadRequest | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2741 | 24 | Set variable varmessage Submission BadRequest | Condition Submission Missing Required Fields | Power Automate — Portal_Upload_HTTP | Set variable varstatus Submission Error reaches Succeeded | Set variable varstatus Submission Error = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | Append to array variable varErrors Submission Validation | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2742 | 25 | Append to array variable varErrors Submission Validation | Condition Submission Missing Required Fields | Power Automate — Portal_Upload_HTTP | Set variable varmessage Submission BadRequest reaches Succeeded | Set variable varmessage Submission BadRequest = Succeeded | output of Compose Submission FileName | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Set variable varData Submission BadRequest | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2743 | 26 | Set variable varData Submission BadRequest | Condition Submission Missing Required Fields | Power Automate — Portal_Upload_HTTP | Append to array variable varErrors Submission Validation reaches Succeeded | Append to array variable varErrors Submission Validation = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2744 | 27 | Compose Submission ReferenceId | Condition Submission Missing Required Fields · else | Power Automate — Portal_Upload_HTTP | Entry of Condition Submission Missing Required Fields · else | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create file 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2745 | 28 | Create file 1 | Condition Submission Missing Required Fields · else | Microsoft SharePoint Online, called by the flow | Compose Submission ReferenceId reaches Succeeded | Compose Submission ReferenceId = Succeeded | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 | Writes a file into a document library. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Update file properties 1 | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2746 | 29 | Update file properties 1 | Condition Submission Missing Required Fields · else | Microsoft SharePoint Online, called by the flow | Create file 1 reaches Succeeded | Create file 1 = Succeeded | output of Create file 1 | Updates the list metadata attached to a stored file. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Set variable vardocId Submission | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2747 | 30 | Set variable vardocId Submission | Condition Submission Missing Required Fields · else | Power Automate — Portal_Upload_HTTP | Update file properties 1 reaches Succeeded | Update file properties 1 = Succeeded | output of Update file properties 1<br>output of Create file 1 | Replaces the value held in a run-scoped variable. | Writes 'vardocId'. | The value is held in the run and made available to later steps. | Run-scoped variable 'vardocId'. | — | Set variable varStatusCode Submission 200 | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2748 | 31 | Set variable varStatusCode Submission 200 | Condition Submission Missing Required Fields · else | Power Automate — Portal_Upload_HTTP | Set variable vardocId Submission reaches Succeeded | Set variable vardocId Submission = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varstatus Submission Success | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2749 | 32 | Set variable varstatus Submission Success | Condition Submission Missing Required Fields · else | Power Automate — Portal_Upload_HTTP | Set variable varStatusCode Submission 200 reaches Succeeded | Set variable varStatusCode Submission 200 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage Submission Success | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2750 | 33 | Set variable varmessage Submission Success | Condition Submission Missing Required Fields · else | Power Automate — Portal_Upload_HTTP | Set variable varstatus Submission Success reaches Succeeded | Set variable varstatus Submission Success = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | Set variable varData Submission Success | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2751 | 34 | Set variable varData Submission Success | Condition Submission Missing Required Fields · else | Power Automate — Portal_Upload_HTTP | Set variable varmessage Submission Success reaches Succeeded | Set variable varmessage Submission Success = Succeeded | trigger field 'senderEmail'<br>trigger field 'EmailAddress'<br>trigger field 'submittedAt'<br>variable 'vardocId'<br>output of Compose Submission ReferenceId<br>output of Compose Submission FileName | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2752 | 35 | Scope Catch Submission | Scope Global Submission | Power Automate — Portal_Upload_HTTP | Scope Process Submission reaches Failed or TimedOut or Skipped | Scope Process Submission = Failed\|TimedOut\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response Submission (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-115 |
| STEP-2753 | 36 | Set variable varStatusCode Submission 500 | Scope Catch Submission | Power Automate — Portal_Upload_HTTP | Entry of Scope Catch Submission | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varstatus Submission Catch Error | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2754 | 37 | Set variable varstatus Submission Catch Error | Scope Catch Submission | Power Automate — Portal_Upload_HTTP | Set variable varStatusCode Submission 500 reaches Succeeded | Set variable varStatusCode Submission 500 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage Submission Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2755 | 38 | Set variable varmessage Submission Catch | Scope Catch Submission | Power Automate — Portal_Upload_HTTP | Set variable varstatus Submission Catch Error reaches Succeeded | Set variable varstatus Submission Catch Error = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | Append to array variable varErrors Submission Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2756 | 39 | Append to array variable varErrors Submission Catch | Scope Catch Submission | Power Automate — Portal_Upload_HTTP | Set variable varmessage Submission Catch reaches Succeeded | Set variable varmessage Submission Catch = Succeeded | — | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Set variable varData Submission Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2757 | 40 | Set variable varData Submission Catch | Scope Catch Submission | Power Automate — Portal_Upload_HTTP | Append to array variable varErrors Submission Catch reaches Succeeded | Append to array variable varErrors Submission Catch = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2758 | 41 | Scope Finalize Response Submission | Scope Global Submission | Power Automate — Portal_Upload_HTTP | Scope Process Submission reaches Succeeded or Failed or TimedOut or Skipped; Scope Catch Submission reaches Succeeded or Skipped | Scope Process Submission = Succeeded\|Failed\|TimedOut\|Skipped<br>Scope Catch Submission = Succeeded\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-115 |
| STEP-2759 | 42 | Set variable varCompletedAtUtc Submission | Scope Finalize Response Submission | Power Automate — Portal_Upload_HTTP | Entry of Scope Finalize Response Submission | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Compose Response Body Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2760 | 43 | Compose Response Body Submission | Scope Finalize Response Submission | Power Automate — Portal_Upload_HTTP | Set variable varCompletedAtUtc Submission reaches Succeeded | Set variable varCompletedAtUtc Submission = Succeeded | variable 'varStatusCode'<br>variable 'varData'<br>variable 'varstatus'<br>variable 'varmessage'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2761 | 44 | Response Submission | Scope Finalize Response Submission | Power Automate — Portal_Upload_HTTP | Compose Response Body Submission reaches Succeeded | Compose Response Body Submission = Succeeded | variable 'varStatusCode'<br>output of Compose Response Body Submission | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2762 | 45 | Initialize variable varReceivedAtUtc Submission | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2763 | 46 | Initialize variable varCompletedAtUtc Submission | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varReceivedAtUtc Submission reaches Succeeded | Initialize variable varReceivedAtUtc Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2764 | 47 | Initialize variable varErrors Submission | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varCompletedAtUtc Submission reaches Succeeded | Initialize variable varCompletedAtUtc Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2765 | 48 | Initialize variable varData Submission | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varErrors Submission reaches Succeeded | Initialize variable varErrors Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable vardocId Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2766 | 49 | Initialize variable vardocId Submission | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varData Submission reaches Succeeded | Initialize variable varData Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varstatus Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2767 | 50 | Initialize variable varstatus Submission | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable vardocId Submission reaches Succeeded | Initialize variable vardocId Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varmessage Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2768 | 51 | Initialize variable varmessage Submission | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varstatus Submission reaches Succeeded | Initialize variable varstatus Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Set variable | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |
| STEP-2769 | 52 | Set variable | flow root | Power Automate — Portal_Upload_HTTP | Initialize variable varmessage Submission reaches Succeeded | Initialize variable varmessage Submission = Succeeded | trigger field 'action' | Replaces the value held in a run-scoped variable. | Writes 'varAction'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varAction'. | — | Switch | — | — | — | — | — | Confirmed | No external validation required | SRC-115 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-135 | Switch | Power Automate — Portal_Upload_HTTP | `@variables('varAction')` | variable 'varAction' | load<br>submit | "load" → Scope Tasks<br>"submit" → Compose Submit Response, Set variable varResponseSubmit, Set variable varStatusCoden Submit | Default branch runs: . | Not declared on the decision itself. | Confirmed |
| DEC-136 | Condition Submission Missing Required Fields | Power Automate — Portal_Upload_HTTP | `{"or":[{"equals":["@empty(trim(string(outputs('Compose_Submission_FileName'))))",true]},{"equals":["@empty(trim(string(outputs('Compose_Submission_FileContentBase64'))))",true]}]}` | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 | true<br>false | true → Set variable varStatusCode Submission 400, Set variable varstatus Submission Error, Set variable varmessage Submission BadRequest, Append to array variable varErrors Submission Validation, Set variable varData Submission BadRequest<br>false → Compose Submission ReferenceId, Create file 1, Update file properties 1, Set variable vardocId Submission, Set variable varStatusCode Submission 200, Set variable varstatus Submission Success, Set variable varmessage Submission Success, Set variable varData Submission Success | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

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
| Records created or updated | STEP-2745 Create file 1 |
| Notifications issued | — |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-204 | Recovery after Scope Process Submission | Scope Process Submission reaches Failed or TimedOut or Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Catch Submission. | Power Automate — Portal_Upload_HTTP | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-205 | Recovery after Scope Process Submission, Scope Catch Submission | Scope Process Submission reaches Failed or TimedOut or Skipped; Scope Catch Submission reaches Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response Submission. | Power Automate — Portal_Upload_HTTP | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

_No monitoring control, metric, service-level expectation or audit event is evidenced for this process._

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
