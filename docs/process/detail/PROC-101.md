# PROC-101 — Web - Task Update

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-101 |
| Name | Web - Task Update |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 22 action(s) under 1 trigger(s). |
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
| Sources | `SRC-133` docs/reference/flow-contracts/deployed/Web - Task Update__811af8bf-daaa-452c-ba71-9676fe037c0b__full_definition.json |

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
| STEP-3926 | Condition | Power Automate — Web - Task Update | Automated |
| STEP-3927 | Scope | Power Automate — Web - Task Update | Automated |
| STEP-3928 | Set variable varstatuscode | Power Automate — Web - Task Update | Automated |
| STEP-3929 | Set variable varmessage | Power Automate — Web - Task Update | Automated |
| STEP-3930 | Set variable varstatus | Power Automate — Web - Task Update | Automated |
| STEP-3931 | Set variable | Power Automate — Web - Task Update | Automated |
| STEP-3932 | Update item | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3933 | Get items | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-3934 | Compose Item Reference | Power Automate — Web - Task Update | Automated |
| STEP-3935 | Scope 1 | Power Automate — Web - Task Update | Automated |
| STEP-3936 | Set variable varstatuscode 1 | Power Automate — Web - Task Update | Automated |
| STEP-3937 | Set variable varmessage 1 | Power Automate — Web - Task Update | Automated |
| STEP-3938 | Set variable varstatus 1 | Power Automate — Web - Task Update | Automated |
| STEP-3939 | Set variable 1 | Power Automate — Web - Task Update | Automated |
| STEP-3940 | Response | Power Automate — Web - Task Update | Automated |
| STEP-3941 | Initialize variable varResponse | Power Automate — Web - Task Update | Automated |
| STEP-3942 | Initialize variable varstatuscode | Power Automate — Web - Task Update | Automated |
| STEP-3943 | Initialize variable varStatus | Power Automate — Web - Task Update | Automated |
| STEP-3944 | Initialize variable vardocId | Power Automate — Web - Task Update | Automated |
| STEP-3945 | Initialize variable varmessage | Power Automate — Web - Task Update | Automated |
| STEP-3946 | Compose Response | Power Automate — Web - Task Update | Automated |
| STEP-3947 | Send an email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 811af8bf-daaa-452c-ba71-9676fe037c0b |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-3926 | trigger field 'fileName' |
| STEP-3931 | output of Update item |
| STEP-3932 | trigger field 'taskName'<br>trigger field 'status'<br>trigger field 'comment'<br>output of Compose Item Reference |
| STEP-3933 | trigger field 'taskName' |
| STEP-3934 | output of Get items |
| STEP-3940 | variable 'varstatuscode'<br>output of Compose Response |
| STEP-3946 | trigger field 'TaskId' |
| STEP-3947 | output of Compose Response |

## 5.5 Stages and activities

22 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-3926 | 1 | Condition | flow root | Power Automate — Web - Task Update | Initialize variable varmessage reaches Succeeded | Initialize variable varmessage = Succeeded | trigger field 'fileName' | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@triggerBody()?['fileName']","@triggerBody()?['fileName']"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Response (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3927 | 2 | Scope | Condition | Power Automate — Web - Task Update | Update item reaches Succeeded | Update item = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3928 | 3 | Set variable varstatuscode | Scope | Power Automate — Web - Task Update | Set variable reaches Succeeded | Set variable = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatuscode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatuscode'. | Run-scoped outcome variable 'varstatuscode' set. | Set variable varstatus | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3929 | 4 | Set variable varmessage | Scope | Power Automate — Web - Task Update | Set variable varstatus reaches Succeeded | Set variable varstatus = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3930 | 5 | Set variable varstatus | Scope | Power Automate — Web - Task Update | Set variable varstatuscode reaches Succeeded | Set variable varstatuscode = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3931 | 6 | Set variable | Scope | Power Automate — Web - Task Update | Entry of Scope | None declared beyond entry into its container. | output of Update item | Replaces the value held in a run-scoped variable. | Writes 'vardocId'. | The value is held in the run and made available to later steps. | Run-scoped variable 'vardocId'. | — | Set variable varstatuscode | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3932 | 7 | Update item | Condition | Microsoft SharePoint Online, called by the flow | Compose Item Reference reaches Succeeded | Compose Item Reference = Succeeded | trigger field 'taskName'<br>trigger field 'status'<br>trigger field 'comment'<br>output of Compose Item Reference | Updates a list item in the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Scope | — | Microsoft SharePoint Online | — | — | Writes a list item; the write itself is the audit record. | Confirmed | No external validation required | SRC-133 |
| STEP-3933 | 8 | Get items | Condition | Microsoft SharePoint Online, called by the flow | Entry of Condition | None declared beyond entry into its container. | trigger field 'taskName' | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Item Reference | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3934 | 9 | Compose Item Reference | Condition | Power Automate — Web - Task Update | Get items reaches Succeeded | Get items = Succeeded | output of Get items | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Update item | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3935 | 10 | Scope 1 | Condition · else | Power Automate — Web - Task Update | Entry of Condition · else | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3936 | 11 | Set variable varstatuscode 1 | Scope 1 | Power Automate — Web - Task Update | Set variable 1 reaches Succeeded | Set variable 1 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatuscode'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatuscode'. | Run-scoped outcome variable 'varstatuscode' set. | Set variable varstatus 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3937 | 12 | Set variable varmessage 1 | Scope 1 | Power Automate — Web - Task Update | Set variable varstatus 1 reaches Succeeded | Set variable varstatus 1 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varmessage'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varmessage'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3938 | 13 | Set variable varstatus 1 | Scope 1 | Power Automate — Web - Task Update | Set variable varstatuscode 1 reaches Succeeded | Set variable varstatuscode 1 = Succeeded | — | Replaces the value held in a run-scoped variable. | Writes 'varstatus'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varstatus'. | Run-scoped outcome variable 'varstatus' set. | Set variable varmessage 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3939 | 14 | Set variable 1 | Scope 1 | Power Automate — Web - Task Update | Entry of Scope 1 | None declared beyond entry into its container. | — | Replaces the value held in a run-scoped variable. | Writes 'vardocId'. | The value is held in the run and made available to later steps. | Run-scoped variable 'vardocId'. | — | Set variable varstatuscode 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3940 | 15 | Response | flow root | Power Automate — Web - Task Update | Compose Response reaches Succeeded | Compose Response = Succeeded | variable 'varstatuscode'<br>output of Compose Response | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP @variables('varstatuscode') returned to the caller. | Send an email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3941 | 16 | Initialize variable varResponse | flow root | Power Automate — Web - Task Update | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varstatuscode | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3942 | 17 | Initialize variable varstatuscode | flow root | Power Automate — Web - Task Update | Initialize variable varResponse reaches Succeeded | Initialize variable varResponse = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varStatus | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3943 | 18 | Initialize variable varStatus | flow root | Power Automate — Web - Task Update | Initialize variable varstatuscode reaches Succeeded | Initialize variable varstatuscode = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable vardocId | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3944 | 19 | Initialize variable vardocId | flow root | Power Automate — Web - Task Update | Initialize variable varStatus reaches Succeeded | Initialize variable varStatus = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varmessage | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3945 | 20 | Initialize variable varmessage | flow root | Power Automate — Web - Task Update | Initialize variable vardocId reaches Succeeded | Initialize variable vardocId = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Condition | — | — | — | — | — | Confirmed | No external validation required | SRC-133 |
| STEP-3946 | 21 | Compose Response | flow root | Power Automate — Web - Task Update | Condition reaches Succeeded or TimedOut or Skipped or Failed | Condition = Succeeded\|TimedOut\|Skipped\|Failed | trigger field 'TaskId' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Response | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-133 |
| STEP-3947 | 22 | Send an email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Response reaches Succeeded | Response = Succeeded | output of Compose Response | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-133 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-170 | Condition | Power Automate — Web - Task Update | `{"and":[{"equals":["@triggerBody()?['fileName']","@triggerBody()?['fileName']"]}]}` | trigger field 'fileName' | true<br>false | true → Scope, Update item, Get items, Compose Item Reference<br>false → Scope 1 | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 1 response action(s); status codes @variables('varstatuscode'). |
| Successful end state | A Response action returns to the caller. 1 response action(s); status codes @variables('varstatuscode'). |
| Alternative end states | 1 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | STEP-3932 Update item |
| Notifications issued | NOTIF-262 Send an email (V2) |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-264 | Recovery after Condition | Condition reaches TimedOut or Skipped or Failed | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose Response. | Power Automate — Web - Task Update | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-3932 Update item | Writes a list item; the write itself is the audit record. |
| STEP-3947 Send an email (V2) | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
