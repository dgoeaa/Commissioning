# PROC-078 — Portal_ECM_DOCS_STATUS

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-078 |
| Name | Portal_ECM_DOCS_STATUS |
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
| Sources | `SRC-110` docs/reference/flow-contracts/deployed/Portal_ECM_DOCS_STATUS__e21e7b9f-58c3-45be-bd47-6754ce6a895f__full_definition.json |

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
| STEP-2526 | Initialize variable varAction | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2527 | Initialize variable varStatusCode | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2528 | Initialize variable varResponse | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2529 | Scope Global Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2530 | Scope Process Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2531 | Compose Submission FileName | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2532 | Compose Submission FileContentBase64 | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2533 | Condition Submission Missing Required Fields | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2534 | Set variable varStatusCode Submission 400 | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2535 | Set variable varstatus Submission Error | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2536 | Set variable varmessage Submission BadRequest | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2537 | Append to array variable varErrors Submission Validation | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2538 | Set variable varData Submission BadRequest | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2539 | Compose Submission ReferenceId | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2540 | Create file 1 | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2541 | Update file properties 1 | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2542 | Set variable vardocId Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2543 | Set variable varStatusCode Submission 200 | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2544 | Set variable varstatus Submission Success | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2545 | Set variable varmessage Submission Success | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2546 | Set variable varData Submission Success | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2547 | Scope Catch Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2548 | Set variable varStatusCode Submission 500 | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2549 | Set variable varstatus Submission Catch Error | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2550 | Set variable varmessage Submission Catch | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2551 | Append to array variable varErrors Submission Catch | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2552 | Set variable varData Submission Catch | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2553 | Scope Finalize Response Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2554 | Set variable varCompletedAtUtc Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2555 | Compose Response Body Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2556 | Response Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2557 | Initialize variable varReceivedAtUtc Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2558 | Initialize variable varCompletedAtUtc Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2559 | Initialize variable varErrors Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2560 | Initialize variable varData Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2561 | Initialize variable vardocId Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2562 | Initialize variable varstatus Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2563 | Initialize variable varmessage Submission | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2564 | Set variable | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2565 | Switch | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2566 | Scope Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2567 | Get items Tasks | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2568 | Select Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2569 | Compose Select Data | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2570 | Compose Response | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2571 | Set variable varResponse load | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2572 | Set variable varStatusCode Load | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2573 | Compose Response 1 | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2574 | Compose | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2575 | Compose Submit Response | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2576 | Set variable varResponseSubmit | Power Automate — Portal_ECM_DOCS_STATUS | Automated |
| STEP-2577 | Set variable varStatusCoden Submit | Power Automate — Portal_ECM_DOCS_STATUS | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow e21e7b9f-58c3-45be-bd47-6754ce6a895f |
| Required system availability | Microsoft Power Automate<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2531 | trigger field 'fileName'<br>trigger field 'FileName'<br>trigger field 'attachments' |
| STEP-2532 | trigger field 'fileContentBase64'<br>trigger field 'FileContentBase64'<br>trigger field 'fileContent' |
| STEP-2533 | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 |
| STEP-2537 | output of Compose Submission FileName |
| STEP-2540 | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 |
| STEP-2541 | output of Create file 1 |
| STEP-2542 | output of Update file properties 1<br>output of Create file 1 |
| STEP-2546 | trigger field 'senderEmail'<br>trigger field 'EmailAddress'<br>trigger field 'submittedAt'<br>variable 'vardocId'<br>output of Compose Submission ReferenceId<br>output of Compose Submission FileName |
| STEP-2555 | variable 'varStatusCode'<br>variable 'varData'<br>variable 'varstatus'<br>variable 'varmessage'<br>variable 'varErrors' |
| STEP-2556 | variable 'varStatusCode'<br>output of Compose Response Body Submission |
| STEP-2564 | trigger field 'action' |
| STEP-2565 | variable 'varAction' |
| STEP-2568 | output of Get items Tasks |
| STEP-2569 | output of Select Tasks |
| STEP-2570 | trigger field 'action'<br>output of Compose Select Data |
| STEP-2571 | trigger field 'action'<br>output of Compose Select Data |
| STEP-2573 | trigger field 'action'<br>output of Compose Select Data |
| STEP-2574 | trigger field 'action'<br>output of Compose Select Data |
| STEP-2576 | output of Compose Submit Response |

## 5.5 Stages and activities

52 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2526 | 1 | Initialize variable varAction | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varStatusCode reaches Succeeded | Initialize variable varStatusCode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varResponse | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2527 | 2 | Initialize variable varStatusCode | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varAction | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2528 | 3 | Initialize variable varResponse | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varAction reaches Succeeded | Initialize variable varAction = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReceivedAtUtc Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2529 | 4 | Scope Global Submission | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Set variable reaches Succeeded | Set variable = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Switch | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2530 | 5 | Scope Process Submission | Scope Global Submission | Power Automate — Portal_ECM_DOCS_STATUS | Entry of Scope Global Submission | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Catch Submission (runs when this does not succeed)<br>Scope Finalize Response Submission (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2531 | 6 | Compose Submission FileName | Scope Process Submission | Power Automate — Portal_ECM_DOCS_STATUS | Entry of Scope Process Submission | None declared beyond entry into its container. | trigger field 'fileName'<br>trigger field 'FileName'<br>trigger field 'attachments' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Submission FileContentBase64 | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2532 | 7 | Compose Submission FileContentBase64 | Scope Process Submission | Power Automate — Portal_ECM_DOCS_STATUS | Compose Submission FileName reaches Succeeded | Compose Submission FileName = Succeeded | trigger field 'fileContentBase64'<br>trigger field 'FileContentBase64'<br>trigger field 'fileContent' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition Submission Missing Required Fields | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2533 | 8 | Condition Submission Missing Required Fields | Scope Process Submission | Power Automate — Portal_ECM_DOCS_STATUS | Compose Submission FileContentBase64 reaches Succeeded | Compose Submission FileContentBase64 = Succeeded | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 | Evaluates a condition and runs one of two branches. | Condition: {"or":[{"equals":["@empty(trim(string(outputs('Compose_Submission_FileName'))))",true]},{"equals":["@empty(trim(string(outputs('Compose_Submission_FileContentBase64'))))",true]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2534 | 9 | Set variable varStatusCode Submission 400 | Condition Submission Missing Required Fields | Power Automate — Portal_ECM_DOCS_STATUS | Entry of Condition Submission Missing Required Fields | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varstatus Submission Error | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2535 | 10 | Set variable varstatus Submission Error | Condition Submission Missing Required Fields | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varStatusCode Submission 400 reaches Succeeded | Set variable varStatusCode Submission 400 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage Submission BadRequest | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2536 | 11 | Set variable varmessage Submission BadRequest | Condition Submission Missing Required Fields | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varstatus Submission Error reaches Succeeded | Set variable varstatus Submission Error = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | Append to array variable varErrors Submission Validation | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2537 | 12 | Append to array variable varErrors Submission Validation | Condition Submission Missing Required Fields | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varmessage Submission BadRequest reaches Succeeded | Set variable varmessage Submission BadRequest = Succeeded | output of Compose Submission FileName | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Set variable varData Submission BadRequest | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2538 | 13 | Set variable varData Submission BadRequest | Condition Submission Missing Required Fields | Power Automate — Portal_ECM_DOCS_STATUS | Append to array variable varErrors Submission Validation reaches Succeeded | Append to array variable varErrors Submission Validation = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2539 | 14 | Compose Submission ReferenceId | Condition Submission Missing Required Fields · else | Power Automate — Portal_ECM_DOCS_STATUS | Entry of Condition Submission Missing Required Fields · else | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create file 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2540 | 15 | Create file 1 | Condition Submission Missing Required Fields · else | Microsoft SharePoint Online, called by the flow | Compose Submission ReferenceId reaches Succeeded | Compose Submission ReferenceId = Succeeded | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 | Writes a file into a document library. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Update file properties 1 | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2541 | 16 | Update file properties 1 | Condition Submission Missing Required Fields · else | Microsoft SharePoint Online, called by the flow | Create file 1 reaches Succeeded | Create file 1 = Succeeded | output of Create file 1 | Updates the list metadata attached to a stored file. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Set variable vardocId Submission | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2542 | 17 | Set variable vardocId Submission | Condition Submission Missing Required Fields · else | Power Automate — Portal_ECM_DOCS_STATUS | Update file properties 1 reaches Succeeded | Update file properties 1 = Succeeded | output of Update file properties 1<br>output of Create file 1 | Replaces the value held in a run-scoped variable. | Writes 'vardocId'. | The value is held in the run and made available to later steps. | Run-scoped variable 'vardocId'. | — | Set variable varStatusCode Submission 200 | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2543 | 18 | Set variable varStatusCode Submission 200 | Condition Submission Missing Required Fields · else | Power Automate — Portal_ECM_DOCS_STATUS | Set variable vardocId Submission reaches Succeeded | Set variable vardocId Submission = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varstatus Submission Success | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2544 | 19 | Set variable varstatus Submission Success | Condition Submission Missing Required Fields · else | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varStatusCode Submission 200 reaches Succeeded | Set variable varStatusCode Submission 200 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage Submission Success | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2545 | 20 | Set variable varmessage Submission Success | Condition Submission Missing Required Fields · else | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varstatus Submission Success reaches Succeeded | Set variable varstatus Submission Success = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | Set variable varData Submission Success | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2546 | 21 | Set variable varData Submission Success | Condition Submission Missing Required Fields · else | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varmessage Submission Success reaches Succeeded | Set variable varmessage Submission Success = Succeeded | trigger field 'senderEmail'<br>trigger field 'EmailAddress'<br>trigger field 'submittedAt'<br>variable 'vardocId'<br>output of Compose Submission ReferenceId<br>output of Compose Submission FileName | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2547 | 22 | Scope Catch Submission | Scope Global Submission | Power Automate — Portal_ECM_DOCS_STATUS | Scope Process Submission reaches Failed or TimedOut or Skipped | Scope Process Submission = Failed\|TimedOut\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Finalize Response Submission (runs when this does not succeed) | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-110 |
| STEP-2548 | 23 | Set variable varStatusCode Submission 500 | Scope Catch Submission | Power Automate — Portal_ECM_DOCS_STATUS | Entry of Scope Catch Submission | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varstatus Submission Catch Error | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2549 | 24 | Set variable varstatus Submission Catch Error | Scope Catch Submission | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varStatusCode Submission 500 reaches Succeeded | Set variable varStatusCode Submission 500 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage Submission Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2550 | 25 | Set variable varmessage Submission Catch | Scope Catch Submission | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varstatus Submission Catch Error reaches Succeeded | Set variable varstatus Submission Catch Error = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | Append to array variable varErrors Submission Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2551 | 26 | Append to array variable varErrors Submission Catch | Scope Catch Submission | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varmessage Submission Catch reaches Succeeded | Set variable varmessage Submission Catch = Succeeded | — | Appends an element to a run-scoped array. | Writes 'varErrors'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varErrors'. | — | Set variable varData Submission Catch | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2552 | 27 | Set variable varData Submission Catch | Scope Catch Submission | Power Automate — Portal_ECM_DOCS_STATUS | Append to array variable varErrors Submission Catch reaches Succeeded | Append to array variable varErrors Submission Catch = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varData'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varData'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2553 | 28 | Scope Finalize Response Submission | Scope Global Submission | Power Automate — Portal_ECM_DOCS_STATUS | Scope Process Submission reaches Succeeded or Failed or TimedOut or Skipped; Scope Catch Submission reaches Succeeded or Skipped | Scope Process Submission = Succeeded\|Failed\|TimedOut\|Skipped<br>Scope Catch Submission = Succeeded\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-110 |
| STEP-2554 | 29 | Set variable varCompletedAtUtc Submission | Scope Finalize Response Submission | Power Automate — Portal_ECM_DOCS_STATUS | Entry of Scope Finalize Response Submission | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'varCompletedAtUtc'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCompletedAtUtc'. | — | Compose Response Body Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2555 | 30 | Compose Response Body Submission | Scope Finalize Response Submission | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varCompletedAtUtc Submission reaches Succeeded | Set variable varCompletedAtUtc Submission = Succeeded | variable 'varStatusCode'<br>variable 'varData'<br>variable 'varstatus'<br>variable 'varmessage'<br>variable 'varErrors' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2556 | 31 | Response Submission | Scope Finalize Response Submission | Power Automate — Portal_ECM_DOCS_STATUS | Compose Response Body Submission reaches Succeeded | Compose Response Body Submission = Succeeded | variable 'varStatusCode'<br>output of Compose Response Body Submission | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varStatusCode') returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2557 | 32 | Initialize variable varReceivedAtUtc Submission | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCompletedAtUtc Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2558 | 33 | Initialize variable varCompletedAtUtc Submission | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varReceivedAtUtc Submission reaches Succeeded | Initialize variable varReceivedAtUtc Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varErrors Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2559 | 34 | Initialize variable varErrors Submission | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varCompletedAtUtc Submission reaches Succeeded | Initialize variable varCompletedAtUtc Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varData Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2560 | 35 | Initialize variable varData Submission | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varErrors Submission reaches Succeeded | Initialize variable varErrors Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable vardocId Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2561 | 36 | Initialize variable vardocId Submission | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varData Submission reaches Succeeded | Initialize variable varData Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varstatus Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2562 | 37 | Initialize variable varstatus Submission | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable vardocId Submission reaches Succeeded | Initialize variable vardocId Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varmessage Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2563 | 38 | Initialize variable varmessage Submission | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varstatus Submission reaches Succeeded | Initialize variable varstatus Submission = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Set variable | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2564 | 39 | Set variable | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Initialize variable varmessage Submission reaches Succeeded | Initialize variable varmessage Submission = Succeeded | trigger field 'action' | Replaces the value held in a run-scoped variable. | Writes 'varAction'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varAction'. | — | Scope Global Submission | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2565 | 40 | Switch | flow root | Power Automate — Portal_ECM_DOCS_STATUS | Scope Global Submission reaches Succeeded | Scope Global Submission = Succeeded | variable 'varAction' | Evaluates an expression and runs the matching case. | Discriminator: @variables('varAction') | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2566 | 41 | Scope Tasks | Switch · case Case load | Power Automate — Portal_ECM_DOCS_STATUS | Entry of Switch · case Case load | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2567 | 42 | Get items Tasks | Scope Tasks | Microsoft SharePoint Online, called by the flow | Entry of Scope Tasks | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Tasks | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2568 | 43 | Select Tasks | Scope Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Get items Tasks reaches Succeeded | Get items Tasks = Succeeded | output of Get items Tasks | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Select Data | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2569 | 44 | Compose Select Data | Scope Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Select Tasks reaches Succeeded | Select Tasks = Succeeded | output of Select Tasks | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Response | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2570 | 45 | Compose Response | Scope Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Compose Select Data reaches Succeeded | Compose Select Data = Succeeded | trigger field 'action'<br>output of Compose Select Data | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Response 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2571 | 46 | Set variable varResponse load | Scope Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varStatusCode Load reaches Succeeded | Set variable varStatusCode Load = Succeeded | trigger field 'action'<br>output of Compose Select Data | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2572 | 47 | Set variable varStatusCode Load | Scope Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Compose reaches Succeeded | Compose = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponse load | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2573 | 48 | Compose Response 1 | Scope Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Compose Response reaches Succeeded | Compose Response = Succeeded | trigger field 'action'<br>output of Compose Select Data | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2574 | 49 | Compose | Scope Tasks | Power Automate — Portal_ECM_DOCS_STATUS | Compose Response 1 reaches Succeeded | Compose Response 1 = Succeeded | trigger field 'action'<br>output of Compose Select Data | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varStatusCode Load | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2575 | 50 | Compose Submit Response | Switch · case Case submit | Power Automate — Portal_ECM_DOCS_STATUS | Entry of Switch · case Case submit | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varStatusCoden Submit | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2576 | 51 | Set variable varResponseSubmit | Switch · case Case submit | Power Automate — Portal_ECM_DOCS_STATUS | Set variable varStatusCoden Submit reaches Succeeded | Set variable varStatusCoden Submit = Succeeded | output of Compose Submit Response | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |
| STEP-2577 | 52 | Set variable varStatusCoden Submit | Switch · case Case submit | Power Automate — Portal_ECM_DOCS_STATUS | Compose Submit Response reaches Succeeded | Compose Submit Response = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varStatusCode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varStatusCode'. | Run-scoped outcome variable 'varStatusCode' set. | Set variable varResponseSubmit | — | — | — | — | — | Confirmed | No external validation required | SRC-110 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-127 | Condition Submission Missing Required Fields | Power Automate — Portal_ECM_DOCS_STATUS | `{"or":[{"equals":["@empty(trim(string(outputs('Compose_Submission_FileName'))))",true]},{"equals":["@empty(trim(string(outputs('Compose_Submission_FileContentBase64'))))",true]}]}` | output of Compose Submission FileName<br>output of Compose Submission FileContentBase64 | true<br>false | true → Set variable varStatusCode Submission 400, Set variable varstatus Submission Error, Set variable varmessage Submission BadRequest, Append to array variable varErrors Submission Validation, Set variable varData Submission BadRequest<br>false → Compose Submission ReferenceId, Create file 1, Update file properties 1, Set variable vardocId Submission, Set variable varStatusCode Submission 200, Set variable varstatus Submission Success, Set variable varmessage Submission Success, Set variable varData Submission Success | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-128 | Switch | Power Automate — Portal_ECM_DOCS_STATUS | `@variables('varAction')` | variable 'varAction' | load<br>submit | "load" → Scope Tasks<br>"submit" → Compose Submit Response, Set variable varResponseSubmit, Set variable varStatusCoden Submit | Default branch runs: . | Not declared on the decision itself. | Confirmed |

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
| Records created or updated | STEP-2540 Create file 1 |
| Notifications issued | — |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-196 | Recovery after Scope Process Submission | Scope Process Submission reaches Failed or TimedOut or Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Catch Submission. | Power Automate — Portal_ECM_DOCS_STATUS | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-197 | Recovery after Scope Process Submission, Scope Catch Submission | Scope Process Submission reaches Failed or TimedOut or Skipped; Scope Catch Submission reaches Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Finalize Response Submission. | Power Automate — Portal_ECM_DOCS_STATUS | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

_No monitoring control, metric, service-level expectation or audit event is evidenced for this process._

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
