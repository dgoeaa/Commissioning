# PROC-082 — Portal_UPLOAD_ECM_DOCS

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-082 |
| Name | Portal_UPLOAD_ECM_DOCS |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 33 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook, Microsoft SharePoint Online. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-114` docs/reference/flow-contracts/deployed/Portal_UPLOAD_ECM_DOCS__ae4b2a44-2388-42c7-baaf-86de3d6fa664__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-2685 | Condition | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2686 | Create file | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2687 | Update file properties | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2688 | Scope | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2689 | Set variable varstatuscode | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2690 | Set variable varmessage | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2691 | Set variable varstatus | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2692 | Set variable | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2693 | Scope 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2694 | Set variable varstatuscode 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2695 | Set variable varmessage 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2696 | Set variable varstatus 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2697 | Set variable 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2698 | Response | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2699 | Initialize variable varResponse | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2700 | Initialize variable varstatuscode | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2701 | Initialize variable varStatus | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2702 | Initialize variable vardocId | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2703 | Initialize variable varmessage | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2704 | Compose Response | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2705 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2706 | Scope Global Upload | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2707 | Scope Upload Try | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2708 | Compose Upload Ticket | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2709 | Condition Upload Ticket Missing | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2710 | Response Upload Ticket Missing | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2711 | Compose Upload FileName | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2712 | Create file Upload | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2713 | Compose Upload Response Body | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2714 | Response Upload Success | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2715 | Scope Upload Catch | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2716 | Response Upload Failed | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |
| STEP-2717 | Compose | Power Automate — Portal_UPLOAD_ECM_DOCS | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow ae4b2a44-2388-42c7-baaf-86de3d6fa664 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2685 | trigger field 'fileName' |
| STEP-2686 | trigger field 'fileName'<br>trigger field 'fileContent' |
| STEP-2687 | output of Create file |
| STEP-2692 | output of Update file properties |
| STEP-2698 | variable 'varstatuscode'<br>output of Compose Response |
| STEP-2704 | variable 'varstatus'<br>variable 'varmessage'<br>variable 'vardocId' |
| STEP-2705 | output of Compose Response |
| STEP-2709 | output of Compose Upload Ticket |
| STEP-2711 | output of Compose Upload Ticket |
| STEP-2712 | output of Compose Upload FileName |
| STEP-2713 | output of Create file Upload<br>output of Compose Upload Ticket<br>output of Compose Upload FileName |
| STEP-2714 | output of Compose Upload Response Body |

## 5.5 Stages and activities

33 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2685 | 1 | Condition | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Scope Global Upload reaches Succeeded | Scope Global Upload = Succeeded | trigger field 'fileName' | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@triggerBody()?['fileName']","@triggerBody()?['fileName']"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Response (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2686 | 2 | Create file | Condition | Microsoft SharePoint Online, called by the flow | Entry of Condition | None declared beyond entry into its container. | trigger field 'fileName'<br>trigger field 'fileContent' | Writes a file into a document library. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Update file properties | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2687 | 3 | Update file properties | Condition | Microsoft SharePoint Online, called by the flow | Create file reaches Succeeded | Create file = Succeeded | output of Create file | Updates the list metadata attached to a stored file. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Scope | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2688 | 4 | Scope | Condition | Power Automate — Portal_UPLOAD_ECM_DOCS | Update file properties reaches Succeeded | Update file properties = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2689 | 5 | Set variable varstatuscode | Scope | Power Automate — Portal_UPLOAD_ECM_DOCS | Set variable reaches Succeeded | Set variable = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatuscode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatuscode'. | Run-scoped outcome variable 'varstatuscode' set. | Set variable varstatus | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2690 | 6 | Set variable varmessage | Scope | Power Automate — Portal_UPLOAD_ECM_DOCS | Set variable varstatus reaches Succeeded | Set variable varstatus = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2691 | 7 | Set variable varstatus | Scope | Power Automate — Portal_UPLOAD_ECM_DOCS | Set variable varstatuscode reaches Succeeded | Set variable varstatuscode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2692 | 8 | Set variable | Scope | Power Automate — Portal_UPLOAD_ECM_DOCS | Entry of Scope | None declared beyond entry into its container. | output of Update file properties | Replaces the value held in a run-scoped variable. | Writes 'vardocId'. | The value is held in the run and made available to later steps. | Run-scoped variable 'vardocId'. | — | Set variable varstatuscode | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2693 | 9 | Scope 1 | Condition · else | Power Automate — Portal_UPLOAD_ECM_DOCS | Entry of Condition · else | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2694 | 10 | Set variable varstatuscode 1 | Scope 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Set variable 1 reaches Succeeded | Set variable 1 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatuscode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatuscode'. | Run-scoped outcome variable 'varstatuscode' set. | Set variable varstatus 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2695 | 11 | Set variable varmessage 1 | Scope 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Set variable varstatus 1 reaches Succeeded | Set variable varstatus 1 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2696 | 12 | Set variable varstatus 1 | Scope 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Set variable varstatuscode 1 reaches Succeeded | Set variable varstatuscode 1 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2697 | 13 | Set variable 1 | Scope 1 | Power Automate — Portal_UPLOAD_ECM_DOCS | Entry of Scope 1 | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'vardocId'. | The value is held in the run and made available to later steps. | Run-scoped variable 'vardocId'. | — | Set variable varstatuscode 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2698 | 14 | Response | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Compose Response reaches Succeeded | Compose Response = Succeeded | variable 'varstatuscode'<br>output of Compose Response | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varstatuscode') returned to the caller. | Send an email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2699 | 15 | Initialize variable varResponse | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varstatuscode | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2700 | 16 | Initialize variable varstatuscode | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatus | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2701 | 17 | Initialize variable varStatus | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Initialize variable varstatuscode reaches Succeeded | Initialize variable varstatuscode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable vardocId | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2702 | 18 | Initialize variable vardocId | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Initialize variable varStatus reaches Succeeded | Initialize variable varStatus = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varmessage | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2703 | 19 | Initialize variable varmessage | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Initialize variable vardocId reaches Succeeded | Initialize variable vardocId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Compose | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2704 | 20 | Compose Response | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Condition reaches Succeeded or TimedOut or Skipped or Failed | Condition = Succeeded\|TimedOut\|Skipped\|Failed | variable 'varstatus'<br>variable 'varmessage'<br>variable 'vardocId' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-114 |
| STEP-2705 | 21 | Send an email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Response reaches Succeeded | Response = Succeeded | output of Compose Response | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-114 |
| STEP-2706 | 22 | Scope Global Upload | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Compose reaches Succeeded | Compose = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Condition | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2707 | 23 | Scope Upload Try | Scope Global Upload | Power Automate — Portal_UPLOAD_ECM_DOCS | Entry of Scope Global Upload | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Upload Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2708 | 24 | Compose Upload Ticket | Scope Upload Try | Power Automate — Portal_UPLOAD_ECM_DOCS | Entry of Scope Upload Try | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition Upload Ticket Missing | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2709 | 25 | Condition Upload Ticket Missing | Scope Upload Try | Power Automate — Portal_UPLOAD_ECM_DOCS | Compose Upload Ticket reaches Succeeded | Compose Upload Ticket = Succeeded | output of Compose Upload Ticket | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@empty(outputs('Compose_Upload_Ticket'))",true]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2710 | 26 | Response Upload Ticket Missing | Condition Upload Ticket Missing | Power Automate — Portal_UPLOAD_ECM_DOCS | Entry of Condition Upload Ticket Missing | None declared beyond entry into its container. | — | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 403 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2711 | 27 | Compose Upload FileName | Condition Upload Ticket Missing · else | Power Automate — Portal_UPLOAD_ECM_DOCS | Entry of Condition Upload Ticket Missing · else | None declared beyond entry into its container. | output of Compose Upload Ticket | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Create file Upload | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2712 | 28 | Create file Upload | Condition Upload Ticket Missing · else | Microsoft SharePoint Online, called by the flow | Compose Upload FileName reaches Succeeded | Compose Upload FileName = Succeeded | output of Compose Upload FileName | Writes a file into a document library. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Upload Response Body | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2713 | 29 | Compose Upload Response Body | Condition Upload Ticket Missing · else | Power Automate — Portal_UPLOAD_ECM_DOCS | Create file Upload reaches Succeeded | Create file Upload = Succeeded | output of Create file Upload<br>output of Compose Upload Ticket<br>output of Compose Upload FileName | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response Upload Success | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2714 | 30 | Response Upload Success | Condition Upload Ticket Missing · else | Power Automate — Portal_UPLOAD_ECM_DOCS | Compose Upload Response Body reaches Succeeded | Compose Upload Response Body = Succeeded | output of Compose Upload Response Body | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2715 | 31 | Scope Upload Catch | Scope Global Upload | Power Automate — Portal_UPLOAD_ECM_DOCS | Scope Upload Try reaches Failed or TimedOut or Skipped | Scope Upload Try = Failed\|TimedOut\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-114 |
| STEP-2716 | 32 | Response Upload Failed | Scope Upload Catch | Power Automate — Portal_UPLOAD_ECM_DOCS | Entry of Scope Upload Catch | None declared beyond entry into its container. | — | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 500 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |
| STEP-2717 | 33 | Compose | flow root | Power Automate — Portal_UPLOAD_ECM_DOCS | Initialize variable varmessage reaches Succeeded | Initialize variable varmessage = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Scope Global Upload | — | — | — | — | — | Confirmed | No external validation required | SRC-114 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-133 | Condition | Power Automate — Portal_UPLOAD_ECM_DOCS | `{"and":[{"equals":["@triggerBody()?['fileName']","@triggerBody()?['fileName']"]}]}` | trigger field 'fileName' | true<br>false | true → Create file, Update file properties, Scope<br>false → Scope 1 | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-134 | Condition Upload Ticket Missing | Power Automate — Portal_UPLOAD_ECM_DOCS | `{"and":[{"equals":["@empty(outputs('Compose_Upload_Ticket'))",true]}]}` | output of Compose Upload Ticket | true<br>false | true → Response Upload Ticket Missing<br>false → Compose Upload FileName, Create file Upload, Compose Upload Response Body, Response Upload Success | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 4 response action(s); status codes 200, 403, 500, @variables('varstatuscode'). |
| Successful end state | A Response action returns to the caller. 4 response action(s); status codes 200, 403, 500, @variables('varstatuscode'). |
| Alternative end states | 2 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | STEP-2686 Create file<br>STEP-2712 Create file Upload |
| Notifications issued | NOTIF-230 Send an email (V2) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-202 | Recovery after Condition | Condition reaches TimedOut or Skipped or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose Response. | Power Automate — Portal_UPLOAD_ECM_DOCS | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-203 | Recovery after Scope Upload Try | Scope Upload Try reaches Failed or TimedOut or Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Upload Catch. | Power Automate — Portal_UPLOAD_ECM_DOCS | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2705 Send an email (V2) | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
