# PROC-038 — 06 - GOV - Registry Exception

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-038 |
| Name | 06 - GOV - Registry Exception |
| Alternative or legacy name | — |
| Category | Automated · Scheduled |
| Description | Power Automate workflow carrying 13 action(s) under 1 trigger(s). |
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
| Sources | `SRC-064` docs/reference/flow-contracts/deployed/06 - GOV - Registry Exception__befc43d2-95fa-4567-8020-342e5c9e912d__full_definition.json |

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
| STEP-0668 | Scope 06 GOV Registry Exception Notification COMPLETE UPDATED | Power Automate — 06 - GOV - Registry Exception | Automated |
| STEP-0669 | Scope Main | Power Automate — 06 - GOV - Registry Exception | Automated |
| STEP-0670 | Get Open Exceptions | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0671 | Notify Each Exception | Power Automate — 06 - GOV - Registry Exception | Automated |
| STEP-0672 | Send Exception Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0673 | Acknowledge Exception | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0674 | Compose Exception Report | Power Automate — 06 - GOV - Registry Exception | Automated |
| STEP-0675 | Compose Final Report JSON | Power Automate — 06 - GOV - Registry Exception | Automated |
| STEP-0676 | Compose Final Report HTML | Power Automate — 06 - GOV - Registry Exception | Automated |
| STEP-0677 | Send Final Report Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0678 | If Notification Failed | Power Automate — 06 - GOV - Registry Exception | Automated |
| STEP-0679 | Terminate Notification Failed | Power Automate — 06 - GOV - Registry Exception | Automated |
| STEP-0680 | Terminate Notification Succeeded | Power Automate — 06 - GOV - Registry Exception | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | Recurrence: Recurrence |
| Trigger type | Recurrence (Recurrence) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow befc43d2-95fa-4567-8020-342e5c9e912d |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Scheduling conditions | Recurrence: Recurrence |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-0672 | output of Compose Exception Report |
| STEP-0675 | output of Get Open Exceptions |
| STEP-0676 | output of Compose Final Report JSON |
| STEP-0677 | output of Compose Final Report JSON<br>output of Compose Final Report HTML |
| STEP-0678 | output of Compose Final Report JSON |
| STEP-0679 | output of Compose Final Report JSON |

## 5.5 Stages and activities

13 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-0668 | 1 | Scope 06 GOV Registry Exception Notification COMPLETE UPDATED | flow root | Power Automate — 06 - GOV - Registry Exception | Flow trigger fires | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-064 |
| STEP-0669 | 2 | Scope Main | Scope 06 GOV Registry Exception Notification COMPLETE UPDATED | Power Automate — 06 - GOV - Registry Exception | Entry of Scope 06 GOV Registry Exception Notification COMPLETE UPDATED | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Final Report JSON (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-064 |
| STEP-0670 | 3 | Get Open Exceptions | Scope Main | Microsoft SharePoint Online, called by the flow | Entry of Scope Main | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Notify Each Exception | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-064 |
| STEP-0671 | 4 | Notify Each Exception | Scope Main | Power Automate — 06 - GOV - Registry Exception | Get Open Exceptions reaches Succeeded | Get Open Exceptions = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-064 |
| STEP-0672 | 5 | Send Exception Email | Notify Each Exception | Microsoft Office 365 Outlook, called by the flow | Compose Exception Report reaches Succeeded | Compose Exception Report = Succeeded | output of Compose Exception Report | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Acknowledge Exception | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-064 |
| STEP-0673 | 6 | Acknowledge Exception | Notify Each Exception | Microsoft SharePoint Online, called by the flow | Send Exception Email reaches Succeeded | Send Exception Email = Succeeded | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-064 |
| STEP-0674 | 7 | Compose Exception Report | Notify Each Exception | Power Automate — 06 - GOV - Registry Exception | Entry of Notify Each Exception | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Exception Email | — | — | — | — | — | Confirmed | No external validation required | SRC-064 |
| STEP-0675 | 8 | Compose Final Report JSON | Scope 06 GOV Registry Exception Notification COMPLETE UPDATED | Power Automate — 06 - GOV - Registry Exception | Scope Main reaches Succeeded or Failed or TimedOut or Skipped | Scope Main = Succeeded\|Failed\|TimedOut\|Skipped | output of Get Open Exceptions | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Final Report HTML | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-064 |
| STEP-0676 | 9 | Compose Final Report HTML | Scope 06 GOV Registry Exception Notification COMPLETE UPDATED | Power Automate — 06 - GOV - Registry Exception | Compose Final Report JSON reaches Succeeded | Compose Final Report JSON = Succeeded | output of Compose Final Report JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Final Report Email | — | — | — | — | — | Confirmed | No external validation required | SRC-064 |
| STEP-0677 | 10 | Send Final Report Email | Scope 06 GOV Registry Exception Notification COMPLETE UPDATED | Microsoft Office 365 Outlook, called by the flow | Compose Final Report HTML reaches Succeeded | Compose Final Report HTML = Succeeded | output of Compose Final Report JSON<br>output of Compose Final Report HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | If Notification Failed (runs when this does not succeed) | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-064 |
| STEP-0678 | 11 | If Notification Failed | Scope 06 GOV Registry Exception Notification COMPLETE UPDATED | Power Automate — 06 - GOV - Registry Exception | Send Final Report Email reaches Succeeded or Failed or TimedOut | Send Final Report Email = Succeeded\|Failed\|TimedOut | output of Compose Final Report JSON | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"not":{"equals":["@outputs('Compose_Final_Report_JSON')?['status']","Succeeded"]}}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-064 |
| STEP-0679 | 12 | Terminate Notification Failed | If Notification Failed | Power Automate — 06 - GOV - Registry Exception | Entry of If Notification Failed | None declared beyond entry into its container. | output of Compose Final Report JSON | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-064 |
| STEP-0680 | 13 | Terminate Notification Succeeded | If Notification Failed · else | Power Automate — 06 - GOV - Registry Exception | Entry of If Notification Failed · else | None declared beyond entry into its container. | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Succeeded'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-064 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-028 | If Notification Failed | Power Automate — 06 - GOV - Registry Exception | `{"and":[{"not":{"equals":["@outputs('Compose_Final_Report_JSON')?['status']","Succeeded"]}}]}` | output of Compose Final Report JSON | true<br>false | true → Terminate Notification Failed<br>false → Terminate Notification Succeeded | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | Writes to the system of record. |
| Completion criteria | The last action completes. The export declares no response to a caller. |
| Successful end state | The last action completes. The export declares no response to a caller. |
| Alternative end states | 2 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-180 Send Exception Email<br>NOTIF-181 Send Final Report Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-064 | Recovery after Scope Main | Scope Main reaches Failed or TimedOut or Skipped | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose Final Report JSON. | Power Automate — 06 - GOV - Registry Exception | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-065 | Recovery after Send Final Report Email | Send Final Report Email reaches Failed or TimedOut | Evaluates a condition and runs one of two branches. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by If Notification Failed. | Power Automate — 06 - GOV - Registry Exception | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-0672 Send Exception Email | Sends a message; delivery is the record. |
| STEP-0677 Send Final Report Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
