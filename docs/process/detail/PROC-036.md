# PROC-036 — 04 - GOV - Audit HTTP Flow Registry Flow Update

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-036 |
| Name | 04 - GOV - Audit HTTP Flow Registry Flow Update |
| Alternative or legacy name | — |
| Category | Automated · Scheduled |
| Description | Power Automate workflow carrying 54 action(s) under 1 trigger(s). |
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
| Sources | `SRC-062` docs/reference/flow-contracts/deployed/04 - GOV - Audit HTTP Flow Registry Flow Update__a52c5119-fab5-4605-9853-7e4561796b3f__full_definition.json |

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
| STEP-0577 | Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0578 | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0579 | Get Stale Threshold | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0580 | Find Stale Flows | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0581 | Audit Stale Flows | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0582 | Compose Exception Key | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0583 | Find Exception | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0584 | If Exception Missing | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0585 | Create Exception | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0586 | Compose Stale Owner Notification HTML | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0587 | Send Stale Owner And Governance Alert | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0588 | Record Stale Notification Delivery Failure | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0589 | If Stale Reminder Due | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0590 | Compose Stale Reminder HTML | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0591 | Send Stale Reminder Or Escalation | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0592 | Update Stale Reminder Audit Stamp | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0593 | Update Stale Registry Audit | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0594 | Validate Audit Configuration | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0595 | Audit Configuration Validated | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0596 | Terminate Invalid Audit Configuration | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0597 | Filter Stale Config | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0598 | Filter Failure Config | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0599 | Find Failing Flows | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0600 | Audit Failing Flows | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0601 | Compose Failure Exception Key | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0602 | Find Failure Exception | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0603 | If Failure Exception Missing | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0604 | Create Failure Exception | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0605 | Compose Failure Owner Notification HTML | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0606 | Send Failure Owner And Governance Alert | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0607 | Record Failure Notification Delivery Failure | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0608 | If Failure Reminder Due | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0609 | Compose Failure Reminder HTML | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0610 | Send Failure Reminder Or Escalation | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0611 | Update Failure Reminder Audit Stamp | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0612 | Update Failing Registry Audit | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0613 | Find Open Audit Exceptions | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0614 | Notify And Close Recovered Exceptions | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0615 | Get Recovery Registry Record | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0616 | If Exception Recovered | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0617 | Compose Recovery Notification HTML | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0618 | Send Recovery Notification | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0619 | Close Recovered Exception | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0620 | Compose | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0621 | Compose 1 | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0622 | Compose 1 1 | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0623 | Compose 1 2 | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0624 | Compose Final Report JSON | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0625 | Compose Final Report HTML | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0626 | Send Final Report Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0627 | If Audit Failed | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0628 | Terminate Audit Failed | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0629 | Terminate Audit Succeeded | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Automated |
| STEP-0630 | Record Final Report Delivery Failure | Microsoft SharePoint Online, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | Recurrence: Recurrence |
| Trigger type | Recurrence (Recurrence) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow a52c5119-fab5-4605-9853-7e4561796b3f |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Scheduling conditions | Recurrence: Recurrence |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-0580 | output of Filter Stale Config |
| STEP-0583 | output of Compose Exception Key |
| STEP-0584 | output of Find Exception |
| STEP-0585 | output of Compose Exception Key<br>output of Filter Stale Config |
| STEP-0587 | output of Compose Stale Owner Notification HTML |
| STEP-0588 | output of Create Exception |
| STEP-0589 | output of Find Exception |
| STEP-0590 | output of Find Exception |
| STEP-0591 | output of Find Exception<br>output of Compose Stale Reminder HTML |
| STEP-0592 | output of Find Exception |
| STEP-0593 | output of Filter Stale Config |
| STEP-0594 | output of Filter Stale Config<br>output of Filter Failure Config |
| STEP-0597 | output of Compose<br>output of Compose 1 |
| STEP-0598 | output of Compose 1 1<br>output of Compose 1 2 |
| STEP-0599 | output of Filter Failure Config |
| STEP-0602 | output of Compose Failure Exception Key |
| STEP-0603 | output of Find Failure Exception |
| STEP-0604 | output of Compose Failure Exception Key<br>output of Filter Failure Config |
| STEP-0606 | output of Compose Failure Owner Notification HTML |
| STEP-0607 | output of Create Failure Exception |
| STEP-0608 | output of Find Failure Exception |
| STEP-0609 | output of Find Failure Exception |
| STEP-0610 | output of Find Failure Exception<br>output of Compose Failure Reminder HTML |
| STEP-0611 | output of Find Failure Exception |
| STEP-0617 | output of Get Recovery Registry Record |
| STEP-0618 | output of Get Recovery Registry Record<br>output of Compose Recovery Notification HTML |
| STEP-0620 | output of Get Stale Threshold |
| STEP-0622 | output of Get Stale Threshold |
| STEP-0624 | output of Filter Stale Config<br>output of Filter Failure Config<br>output of Find Stale Flows<br>output of Find Failing Flows<br>output of Find Open Audit Exceptions |
| STEP-0625 | output of Compose Final Report JSON |
| STEP-0626 | output of Compose Final Report JSON<br>output of Compose Final Report HTML |
| STEP-0627 | output of Compose Final Report JSON |
| STEP-0628 | output of Compose Final Report JSON |

## 5.5 Stages and activities

54 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-0577 | 1 | Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | flow root | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Flow trigger fires | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0578 | 2 | Scope Main | Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Final Report JSON (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0579 | 3 | Get Stale Threshold | Scope Main | Microsoft SharePoint Online, called by the flow | Entry of Scope Main | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0580 | 4 | Find Stale Flows | Scope Main | Microsoft SharePoint Online, called by the flow | Validate Audit Configuration reaches Succeeded | Validate Audit Configuration = Succeeded | output of Filter Stale Config | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Audit Stale Flows | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0581 | 5 | Audit Stale Flows | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Find Stale Flows reaches Succeeded | Find Stale Flows = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Find Failing Flows | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0582 | 6 | Compose Exception Key | Audit Stale Flows | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of Audit Stale Flows | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Find Exception | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0583 | 7 | Find Exception | Audit Stale Flows | Microsoft SharePoint Online, called by the flow | Compose Exception Key reaches Succeeded | Compose Exception Key = Succeeded | output of Compose Exception Key | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | If Exception Missing | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0584 | 8 | If Exception Missing | Audit Stale Flows | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Find Exception reaches Succeeded | Find Exception = Succeeded | output of Find Exception | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@length(coalesce(body('Find_Exception')?['value'],json('[]')))",0]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Update Stale Registry Audit | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0585 | 9 | Create Exception | If Exception Missing | Microsoft SharePoint Online, called by the flow | Entry of If Exception Missing | None declared beyond entry into its container. | output of Compose Exception Key<br>output of Filter Stale Config | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Stale Owner Notification HTML | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0586 | 10 | Compose Stale Owner Notification HTML | If Exception Missing | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Create Exception reaches Succeeded | Create Exception = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Stale Owner And Governance Alert | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0587 | 11 | Send Stale Owner And Governance Alert | If Exception Missing | Microsoft Office 365 Outlook, called by the flow | Compose Stale Owner Notification HTML reaches Succeeded | Compose Stale Owner Notification HTML = Succeeded | output of Compose Stale Owner Notification HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | Record Stale Notification Delivery Failure (runs when this does not succeed) | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-062 |
| STEP-0588 | 12 | Record Stale Notification Delivery Failure | If Exception Missing | Microsoft SharePoint Online, called by the flow | Send Stale Owner And Governance Alert reaches Failed or TimedOut | Send Stale Owner And Governance Alert = Failed\|TimedOut | output of Create Exception | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-062 |
| STEP-0589 | 13 | If Stale Reminder Due | If Exception Missing · else | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of If Exception Missing · else | None declared beyond entry into its container. | output of Find Exception | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"lessOrEquals":["@ticks(first(body('Find_Exception')?['value'])?['Modified'])","@ticks(addHours(utcNow(),-24))"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0590 | 14 | Compose Stale Reminder HTML | If Stale Reminder Due | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of If Stale Reminder Due | None declared beyond entry into its container. | output of Find Exception | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Stale Reminder Or Escalation | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0591 | 15 | Send Stale Reminder Or Escalation | If Stale Reminder Due | Microsoft Office 365 Outlook, called by the flow | Compose Stale Reminder HTML reaches Succeeded | Compose Stale Reminder HTML = Succeeded | output of Find Exception<br>output of Compose Stale Reminder HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Update Stale Reminder Audit Stamp | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-062 |
| STEP-0592 | 16 | Update Stale Reminder Audit Stamp | If Stale Reminder Due | Microsoft SharePoint Online, called by the flow | Send Stale Reminder Or Escalation reaches Succeeded | Send Stale Reminder Or Escalation = Succeeded | output of Find Exception | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0593 | 17 | Update Stale Registry Audit | Audit Stale Flows | Microsoft SharePoint Online, called by the flow | If Exception Missing reaches Succeeded | If Exception Missing = Succeeded | output of Filter Stale Config | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0594 | 18 | Validate Audit Configuration | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Filter Failure Config reaches Succeeded | Filter Failure Config = Succeeded | output of Filter Stale Config<br>output of Filter Failure Config | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@length(body('Filter_Stale_Config'))",1]},{"equals":["@length(body('Filter_Failure_Config'))",1]},{"greater":["@int(first(body('Filter_Stale_Config'))?['ConfigValue'])",0]},{"greater":["@int(first(body('Filter_Failure_Config'))?['ConfigValue'])",0]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Find Stale Flows | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0595 | 19 | Audit Configuration Validated | Validate Audit Configuration | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of Validate Audit Configuration | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0596 | 20 | Terminate Invalid Audit Configuration | Validate Audit Configuration · else | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of Validate Audit Configuration · else | None declared beyond entry into its container. | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0597 | 21 | Filter Stale Config | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Compose 1 reaches Succeeded | Compose 1 = Succeeded | output of Compose<br>output of Compose 1 | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose 1 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0598 | 22 | Filter Failure Config | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Compose 1 2 reaches Succeeded | Compose 1 2 = Succeeded | output of Compose 1 1<br>output of Compose 1 2 | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Validate Audit Configuration | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0599 | 23 | Find Failing Flows | Scope Main | Microsoft SharePoint Online, called by the flow | Audit Stale Flows reaches Succeeded | Audit Stale Flows = Succeeded | output of Filter Failure Config | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Audit Failing Flows | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0600 | 24 | Audit Failing Flows | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Find Failing Flows reaches Succeeded | Find Failing Flows = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Find Open Audit Exceptions | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0601 | 25 | Compose Failure Exception Key | Audit Failing Flows | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of Audit Failing Flows | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Find Failure Exception | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0602 | 26 | Find Failure Exception | Audit Failing Flows | Microsoft SharePoint Online, called by the flow | Compose Failure Exception Key reaches Succeeded | Compose Failure Exception Key = Succeeded | output of Compose Failure Exception Key | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | If Failure Exception Missing | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0603 | 27 | If Failure Exception Missing | Audit Failing Flows | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Find Failure Exception reaches Succeeded | Find Failure Exception = Succeeded | output of Find Failure Exception | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@length(coalesce(body('Find_Failure_Exception')?['value'],json('[]')))",0]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Update Failing Registry Audit | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0604 | 28 | Create Failure Exception | If Failure Exception Missing | Microsoft SharePoint Online, called by the flow | Entry of If Failure Exception Missing | None declared beyond entry into its container. | output of Compose Failure Exception Key<br>output of Filter Failure Config | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Failure Owner Notification HTML | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0605 | 29 | Compose Failure Owner Notification HTML | If Failure Exception Missing | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Create Failure Exception reaches Succeeded | Create Failure Exception = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Failure Owner And Governance Alert | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0606 | 30 | Send Failure Owner And Governance Alert | If Failure Exception Missing | Microsoft Office 365 Outlook, called by the flow | Compose Failure Owner Notification HTML reaches Succeeded | Compose Failure Owner Notification HTML = Succeeded | output of Compose Failure Owner Notification HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | Record Failure Notification Delivery Failure (runs when this does not succeed) | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-062 |
| STEP-0607 | 31 | Record Failure Notification Delivery Failure | If Failure Exception Missing | Microsoft SharePoint Online, called by the flow | Send Failure Owner And Governance Alert reaches Failed or TimedOut | Send Failure Owner And Governance Alert = Failed\|TimedOut | output of Create Failure Exception | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-062 |
| STEP-0608 | 32 | If Failure Reminder Due | If Failure Exception Missing · else | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of If Failure Exception Missing · else | None declared beyond entry into its container. | output of Find Failure Exception | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"lessOrEquals":["@ticks(first(body('Find_Failure_Exception')?['value'])?['Modified'])","@ticks(addHours(utcNow(),-24))"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0609 | 33 | Compose Failure Reminder HTML | If Failure Reminder Due | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of If Failure Reminder Due | None declared beyond entry into its container. | output of Find Failure Exception | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Failure Reminder Or Escalation | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0610 | 34 | Send Failure Reminder Or Escalation | If Failure Reminder Due | Microsoft Office 365 Outlook, called by the flow | Compose Failure Reminder HTML reaches Succeeded | Compose Failure Reminder HTML = Succeeded | output of Find Failure Exception<br>output of Compose Failure Reminder HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Update Failure Reminder Audit Stamp | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-062 |
| STEP-0611 | 35 | Update Failure Reminder Audit Stamp | If Failure Reminder Due | Microsoft SharePoint Online, called by the flow | Send Failure Reminder Or Escalation reaches Succeeded | Send Failure Reminder Or Escalation = Succeeded | output of Find Failure Exception | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0612 | 36 | Update Failing Registry Audit | Audit Failing Flows | Microsoft SharePoint Online, called by the flow | If Failure Exception Missing reaches Succeeded | If Failure Exception Missing = Succeeded | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0613 | 37 | Find Open Audit Exceptions | Scope Main | Microsoft SharePoint Online, called by the flow | Audit Failing Flows reaches Succeeded | Audit Failing Flows = Succeeded | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Notify And Close Recovered Exceptions | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0614 | 38 | Notify And Close Recovered Exceptions | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Find Open Audit Exceptions reaches Succeeded | Find Open Audit Exceptions = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0615 | 39 | Get Recovery Registry Record | Notify And Close Recovered Exceptions | Microsoft SharePoint Online, called by the flow | Entry of Notify And Close Recovered Exceptions | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | If Exception Recovered | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0616 | 40 | If Exception Recovered | Notify And Close Recovered Exceptions | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Get Recovery Registry Record reaches Succeeded | Get Recovery Registry Record = Succeeded | — | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["",""]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0617 | 41 | Compose Recovery Notification HTML | If Exception Recovered | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of If Exception Recovered | None declared beyond entry into its container. | output of Get Recovery Registry Record | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Recovery Notification | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0618 | 42 | Send Recovery Notification | If Exception Recovered | Microsoft Office 365 Outlook, called by the flow | Compose Recovery Notification HTML reaches Succeeded | Compose Recovery Notification HTML = Succeeded | output of Get Recovery Registry Record<br>output of Compose Recovery Notification HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Close Recovered Exception | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-062 |
| STEP-0619 | 43 | Close Recovered Exception | If Exception Recovered | Microsoft SharePoint Online, called by the flow | Send Recovery Notification reaches Succeeded | Send Recovery Notification = Succeeded | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0620 | 44 | Compose | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Get Stale Threshold reaches Succeeded | Get Stale Threshold = Succeeded | output of Get Stale Threshold | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0621 | 45 | Compose 1 | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Compose reaches Succeeded | Compose = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Filter Stale Config | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0622 | 46 | Compose 1 1 | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Filter Stale Config reaches Succeeded | Filter Stale Config = Succeeded | output of Get Stale Threshold | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose 1 2 | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0623 | 47 | Compose 1 2 | Scope Main | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Compose 1 1 reaches Succeeded | Compose 1 1 = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Filter Failure Config | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0624 | 48 | Compose Final Report JSON | Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Scope Main reaches Succeeded or Failed or TimedOut or Skipped | Scope Main = Succeeded\|Failed\|TimedOut\|Skipped | output of Filter Stale Config<br>output of Filter Failure Config<br>output of Find Stale Flows<br>output of Find Failing Flows<br>output of Find Open Audit Exceptions | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Final Report HTML | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-062 |
| STEP-0625 | 49 | Compose Final Report HTML | Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Compose Final Report JSON reaches Succeeded | Compose Final Report JSON = Succeeded | output of Compose Final Report JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Final Report Email | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0626 | 50 | Send Final Report Email | Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | Microsoft Office 365 Outlook, called by the flow | Compose Final Report HTML reaches Succeeded | Compose Final Report HTML = Succeeded | output of Compose Final Report JSON<br>output of Compose Final Report HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | If Audit Failed (runs when this does not succeed)<br>Record Final Report Delivery Failure (runs when this does not succeed) | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-062 |
| STEP-0627 | 51 | If Audit Failed | Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Send Final Report Email reaches Succeeded or Failed or TimedOut or Skipped; Record Final Report Delivery Failure reaches Succeeded or Failed or TimedOut or Skipped | Send Final Report Email = Succeeded\|Failed\|TimedOut\|Skipped<br>Record Final Report Delivery Failure = Succeeded\|Failed\|TimedOut\|Skipped | output of Compose Final Report JSON | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"not":{"equals":["@outputs('Compose_Final_Report_JSON')?['status']","Succeeded"]}}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-062 |
| STEP-0628 | 52 | Terminate Audit Failed | If Audit Failed | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of If Audit Failed | None declared beyond entry into its container. | output of Compose Final Report JSON | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0629 | 53 | Terminate Audit Succeeded | If Audit Failed · else | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Entry of If Audit Failed · else | None declared beyond entry into its container. | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Succeeded'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-062 |
| STEP-0630 | 54 | Record Final Report Delivery Failure | Scope 04 GOV Audit HTTP Flow Registry COMPLETE UPDATED | Microsoft SharePoint Online, called by the flow | Send Final Report Email reaches Failed or TimedOut | Send Final Report Email = Failed\|TimedOut | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | If Audit Failed (runs when this does not succeed) | Microsoft SharePoint Online | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-062 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-017 | If Exception Missing | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | `{"and":[{"equals":["@length(coalesce(body('Find_Exception')?['value'],json('[]')))",0]}]}` | output of Find Exception | true<br>false | true → Create Exception, Compose Stale Owner Notification HTML, Send Stale Owner And Governance Alert, Record Stale Notification Delivery Failure<br>false → If Stale Reminder Due | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-018 | If Stale Reminder Due | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | `{"and":[{"lessOrEquals":["@ticks(first(body('Find_Exception')?['value'])?['Modified'])","@ticks(addHours(utcNow(),-24))"]}]}` | output of Find Exception | true<br>false | true → Compose Stale Reminder HTML, Send Stale Reminder Or Escalation, Update Stale Reminder Audit Stamp<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-019 | Validate Audit Configuration | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | `{"and":[{"equals":["@length(body('Filter_Stale_Config'))",1]},{"equals":["@length(body('Filter_Failure_Config'))",1]},{"greater":["@int(first(body('Filter_Stale_Config'))?['ConfigValue'])",0]},{"greater":["@int(first(body('Filter_Failure_Config'))?['ConfigValue'])",0]}]}` | output of Filter Stale Config<br>output of Filter Failure Config | true<br>false | true → Audit Configuration Validated<br>false → Terminate Invalid Audit Configuration | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-020 | If Failure Exception Missing | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | `{"and":[{"equals":["@length(coalesce(body('Find_Failure_Exception')?['value'],json('[]')))",0]}]}` | output of Find Failure Exception | true<br>false | true → Create Failure Exception, Compose Failure Owner Notification HTML, Send Failure Owner And Governance Alert, Record Failure Notification Delivery Failure<br>false → If Failure Reminder Due | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-021 | If Failure Reminder Due | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | `{"and":[{"lessOrEquals":["@ticks(first(body('Find_Failure_Exception')?['value'])?['Modified'])","@ticks(addHours(utcNow(),-24))"]}]}` | output of Find Failure Exception | true<br>false | true → Compose Failure Reminder HTML, Send Failure Reminder Or Escalation, Update Failure Reminder Audit Stamp<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-022 | If Exception Recovered | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | `{"and":[{"equals":["",""]}]}` | — | true<br>false | true → Compose Recovery Notification HTML, Send Recovery Notification, Close Recovered Exception<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-023 | If Audit Failed | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | `{"and":[{"not":{"equals":["@outputs('Compose_Final_Report_JSON')?['status']","Succeeded"]}}]}` | output of Compose Final Report JSON | true<br>false | true → Terminate Audit Failed<br>false → Terminate Audit Succeeded | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | Writes to the system of record. |
| Completion criteria | The last action completes. The export declares no response to a caller. |
| Successful end state | The last action completes. The export declares no response to a caller. |
| Alternative end states | 5 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-172 Send Stale Owner And Governance Alert<br>NOTIF-173 Send Stale Reminder Or Escalation<br>NOTIF-174 Send Failure Owner And Governance Alert<br>NOTIF-175 Send Failure Reminder Or Escalation<br>NOTIF-176 Send Recovery Notification<br>NOTIF-177 Send Final Report Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-056 | Recovery after Send Stale Owner And Governance Alert | Send Stale Owner And Governance Alert reaches Failed or TimedOut | Calls an external HTTP endpoint. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Record Stale Notification Delivery Failure. | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-057 | Recovery after Send Failure Owner And Governance Alert | Send Failure Owner And Governance Alert reaches Failed or TimedOut | Calls an external HTTP endpoint. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Record Failure Notification Delivery Failure. | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-058 | Recovery after Scope Main | Scope Main reaches Failed or TimedOut or Skipped | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose Final Report JSON. | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-059 | Recovery after Send Final Report Email, Record Final Report Delivery Failure | Send Final Report Email reaches Failed or TimedOut or Skipped; Record Final Report Delivery Failure reaches Failed or TimedOut or Skipped | Evaluates a condition and runs one of two branches. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by If Audit Failed. | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-060 | Recovery after Send Final Report Email | Send Final Report Email reaches Failed or TimedOut | Calls an external HTTP endpoint. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Record Final Report Delivery Failure. | Power Automate — 04 - GOV - Audit HTTP Flow Registry Flow Update | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-0587 Send Stale Owner And Governance Alert | Sends a message; delivery is the record. |
| STEP-0591 Send Stale Reminder Or Escalation | Sends a message; delivery is the record. |
| STEP-0606 Send Failure Owner And Governance Alert | Sends a message; delivery is the record. |
| STEP-0610 Send Failure Reminder Or Escalation | Sends a message; delivery is the record. |
| STEP-0618 Send Recovery Notification | Sends a message; delivery is the record. |
| STEP-0626 Send Final Report Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
