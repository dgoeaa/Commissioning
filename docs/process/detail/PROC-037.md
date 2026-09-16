# PROC-037 — 05 - GOV - Retire HTTP Flow

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-037 |
| Name | 05 - GOV - Retire HTTP Flow |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 37 action(s) under 1 trigger(s). |
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
| Sources | `SRC-063` docs/reference/flow-contracts/deployed/05 - GOV - Retire HTTP Flow__eb5450b3-fb35-4a06-8483-68e06da12010__full_definition.json |

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
| STEP-0631 | Key | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0632 | Find | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0633 | If Found | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0634 | Retire | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0635 | Reply | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0636 | Compose Execution Report JSON | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0637 | Compose Execution Report HTML | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0638 | Send Execution Report Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0639 | Compose | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0640 | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0641 | Scope Main | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0642 | Compose Registry Key | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0643 | Find Registry | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0644 | Find Current Contracts | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0645 | Close Contracts | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0646 | Close Contract | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0647 | Find Dependencies | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0648 | Retire Dependencies | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0649 | Retire Dependency | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0650 | Validate Input | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0651 | Input Validated | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0652 | Terminate Invalid Input | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0653 | If Registry Found | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0654 | Retire Registry | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0655 | Terminate Registry Not Found | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0656 | Find Consumers | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0657 | Retire Consumers | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0658 | Retire Consumer | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0659 | Find Open Exceptions | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0660 | Resolve Open Exceptions | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0661 | Resolve Exception | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-0662 | Compose Final Report JSON | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0663 | Compose Final Report HTML | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0664 | Send Final Report Email | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-0665 | If Retirement Failed | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0666 | Terminate Retirement Failed | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |
| STEP-0667 | Terminate Retirement Succeeded | Power Automate — 05 - GOV - Retire HTTP Flow | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow eb5450b3-fb35-4a06-8483-68e06da12010 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-0631 | trigger field 'environmentId'<br>trigger field 'flowId' |
| STEP-0632 | output of Key |
| STEP-0633 | output of Find |
| STEP-0634 | trigger field 'retirementReason'<br>output of Find |
| STEP-0635 | output of Key |
| STEP-0637 | output of Compose Execution Report JSON |
| STEP-0638 | output of Compose Execution Report JSON<br>output of Compose Execution Report HTML |
| STEP-0642 | trigger field 'environmentId'<br>trigger field 'flowId' |
| STEP-0643 | output of Compose Registry Key |
| STEP-0644 | output of Compose Registry Key |
| STEP-0647 | output of Compose Registry Key |
| STEP-0650 | trigger field 'environmentId'<br>trigger field 'flowId'<br>trigger field 'reason' |
| STEP-0653 | output of Find Registry |
| STEP-0654 | trigger field 'reason'<br>output of Find Registry |
| STEP-0655 | output of Compose Registry Key |
| STEP-0656 | output of Compose Registry Key |
| STEP-0659 | output of Compose Registry Key |
| STEP-0661 | trigger field 'reason' |
| STEP-0662 | trigger field 'environmentId'<br>trigger field 'flowId'<br>trigger field 'reason'<br>output of Find Current Contracts<br>output of Find Dependencies<br>output of Find Consumers<br>output of Find Open Exceptions |
| STEP-0663 | output of Compose Final Report JSON |
| STEP-0664 | output of Compose Final Report JSON<br>output of Compose Final Report HTML |
| STEP-0665 | output of Compose Final Report JSON |
| STEP-0666 | output of Compose Final Report JSON |

## 5.5 Stages and activities

37 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-0631 | 1 | Key | flow root | Power Automate — 05 - GOV - Retire HTTP Flow | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED reaches Succeeded | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED = Succeeded | trigger field 'environmentId'<br>trigger field 'flowId' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0632 | 2 | Find | flow root | Microsoft SharePoint Online, called by the flow | Compose reaches Succeeded | Compose = Succeeded | output of Key | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | If Found | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0633 | 3 | If Found | flow root | Power Automate — 05 - GOV - Retire HTTP Flow | Find reaches Succeeded | Find = Succeeded | output of Find | Evaluates a condition and runs one of two branches. | Condition: {"greater":["@length(body('Find')?['value'])",0]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Reply | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0634 | 4 | Retire | If Found | Microsoft SharePoint Online, called by the flow | Entry of If Found | None declared beyond entry into its container. | trigger field 'retirementReason'<br>output of Find | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0635 | 5 | Reply | flow root | Power Automate — 05 - GOV - Retire HTTP Flow | If Found reaches Succeeded | If Found = Succeeded | output of Key | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | Compose Execution Report JSON (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0636 | 6 | Compose Execution Report JSON | flow root | Power Automate — 05 - GOV - Retire HTTP Flow | Reply reaches Succeeded or Failed or Skipped or TimedOut | Reply = Succeeded\|Failed\|Skipped\|TimedOut | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Execution Report HTML | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-063 |
| STEP-0637 | 7 | Compose Execution Report HTML | flow root | Power Automate — 05 - GOV - Retire HTTP Flow | Compose Execution Report JSON reaches Succeeded | Compose Execution Report JSON = Succeeded | output of Compose Execution Report JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Execution Report Email | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0638 | 8 | Send Execution Report Email | flow root | Microsoft Office 365 Outlook, called by the flow | Compose Execution Report HTML reaches Succeeded | Compose Execution Report HTML = Succeeded | output of Compose Execution Report JSON<br>output of Compose Execution Report HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-063 |
| STEP-0639 | 9 | Compose | flow root | Power Automate — 05 - GOV - Retire HTTP Flow | Key reaches Succeeded | Key = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Find | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0640 | 10 | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED | flow root | Power Automate — 05 - GOV - Retire HTTP Flow | Flow trigger fires | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Key | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0641 | 11 | Scope Main | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED | Power Automate — 05 - GOV - Retire HTTP Flow | Entry of Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Final Report JSON (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0642 | 12 | Compose Registry Key | Scope Main | Power Automate — 05 - GOV - Retire HTTP Flow | Validate Input reaches Succeeded | Validate Input = Succeeded | trigger field 'environmentId'<br>trigger field 'flowId' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Find Registry | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0643 | 13 | Find Registry | Scope Main | Microsoft SharePoint Online, called by the flow | Compose Registry Key reaches Succeeded | Compose Registry Key = Succeeded | output of Compose Registry Key | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | If Registry Found | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0644 | 14 | Find Current Contracts | Scope Main | Microsoft SharePoint Online, called by the flow | If Registry Found reaches Succeeded | If Registry Found = Succeeded | output of Compose Registry Key | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Close Contracts | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0645 | 15 | Close Contracts | Scope Main | Power Automate — 05 - GOV - Retire HTTP Flow | Find Current Contracts reaches Succeeded | Find Current Contracts = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Find Dependencies | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0646 | 16 | Close Contract | Close Contracts | Microsoft SharePoint Online, called by the flow | Entry of Close Contracts | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0647 | 17 | Find Dependencies | Scope Main | Microsoft SharePoint Online, called by the flow | Close Contracts reaches Succeeded | Close Contracts = Succeeded | output of Compose Registry Key | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Retire Dependencies | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0648 | 18 | Retire Dependencies | Scope Main | Power Automate — 05 - GOV - Retire HTTP Flow | Find Dependencies reaches Succeeded | Find Dependencies = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Find Consumers | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0649 | 19 | Retire Dependency | Retire Dependencies | Microsoft SharePoint Online, called by the flow | Entry of Retire Dependencies | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0650 | 20 | Validate Input | Scope Main | Power Automate — 05 - GOV - Retire HTTP Flow | Entry of Scope Main | None declared beyond entry into its container. | trigger field 'environmentId'<br>trigger field 'flowId'<br>trigger field 'reason' | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"greater":["@length(trim(string(triggerBody()?['environmentId'])))",0]},{"greater":["@length(trim(string(triggerBody()?['flowId'])))",0]},{"greater":["@length(trim(string(triggerBody()?['reason'])))",0]},{"lessOrEquals":["@length(trim(string(triggerBody()?['environmentId'])))",255]},{"lessOrEquals":["@length(trim(string(triggerBody()?['flowId'])))",255]},{"lessOrEquals":["@leng | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Registry Key | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0651 | 21 | Input Validated | Validate Input | Power Automate — 05 - GOV - Retire HTTP Flow | Entry of Validate Input | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0652 | 22 | Terminate Invalid Input | Validate Input · else | Power Automate — 05 - GOV - Retire HTTP Flow | Entry of Validate Input · else | None declared beyond entry into its container. | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0653 | 23 | If Registry Found | Scope Main | Power Automate — 05 - GOV - Retire HTTP Flow | Find Registry reaches Succeeded | Find Registry = Succeeded | output of Find Registry | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"greater":["@length(coalesce(body('Find_Registry')?['value'],json('[]')))",0]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Find Current Contracts | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0654 | 24 | Retire Registry | If Registry Found | Microsoft SharePoint Online, called by the flow | Entry of If Registry Found | None declared beyond entry into its container. | trigger field 'reason'<br>output of Find Registry | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0655 | 25 | Terminate Registry Not Found | If Registry Found · else | Power Automate — 05 - GOV - Retire HTTP Flow | Entry of If Registry Found · else | None declared beyond entry into its container. | output of Compose Registry Key | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0656 | 26 | Find Consumers | Scope Main | Microsoft SharePoint Online, called by the flow | Retire Dependencies reaches Succeeded | Retire Dependencies = Succeeded | output of Compose Registry Key | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Retire Consumers | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0657 | 27 | Retire Consumers | Scope Main | Power Automate — 05 - GOV - Retire HTTP Flow | Find Consumers reaches Succeeded | Find Consumers = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Find Open Exceptions | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0658 | 28 | Retire Consumer | Retire Consumers | Microsoft SharePoint Online, called by the flow | Entry of Retire Consumers | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0659 | 29 | Find Open Exceptions | Scope Main | Microsoft SharePoint Online, called by the flow | Retire Consumers reaches Succeeded | Retire Consumers = Succeeded | output of Compose Registry Key | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Resolve Open Exceptions | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0660 | 30 | Resolve Open Exceptions | Scope Main | Power Automate — 05 - GOV - Retire HTTP Flow | Find Open Exceptions reaches Succeeded | Find Open Exceptions = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0661 | 31 | Resolve Exception | Resolve Open Exceptions | Microsoft SharePoint Online, called by the flow | Entry of Resolve Open Exceptions | None declared beyond entry into its container. | trigger field 'reason' | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0662 | 32 | Compose Final Report JSON | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED | Power Automate — 05 - GOV - Retire HTTP Flow | Scope Main reaches Succeeded or Failed or TimedOut or Skipped | Scope Main = Succeeded\|Failed\|TimedOut\|Skipped | trigger field 'environmentId'<br>trigger field 'flowId'<br>trigger field 'reason'<br>output of Find Current Contracts<br>output of Find Dependencies<br>output of Find Consumers<br>output of Find Open Exceptions | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Final Report HTML | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-063 |
| STEP-0663 | 33 | Compose Final Report HTML | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED | Power Automate — 05 - GOV - Retire HTTP Flow | Compose Final Report JSON reaches Succeeded | Compose Final Report JSON = Succeeded | output of Compose Final Report JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Final Report Email | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0664 | 34 | Send Final Report Email | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED | Microsoft Office 365 Outlook, called by the flow | Compose Final Report HTML reaches Succeeded | Compose Final Report HTML = Succeeded | output of Compose Final Report JSON<br>output of Compose Final Report HTML | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | If Retirement Failed (runs when this does not succeed) | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-063 |
| STEP-0665 | 35 | If Retirement Failed | Scope 05 GOV Retire HTTP Flow COMPLETE UPDATED | Power Automate — 05 - GOV - Retire HTTP Flow | Send Final Report Email reaches Succeeded or Failed or TimedOut | Send Final Report Email = Succeeded\|Failed\|TimedOut | output of Compose Final Report JSON | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"not":{"equals":["@outputs('Compose_Final_Report_JSON')?['status']","Succeeded"]}}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-063 |
| STEP-0666 | 36 | Terminate Retirement Failed | If Retirement Failed | Power Automate — 05 - GOV - Retire HTTP Flow | Entry of If Retirement Failed | None declared beyond entry into its container. | output of Compose Final Report JSON | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |
| STEP-0667 | 37 | Terminate Retirement Succeeded | If Retirement Failed · else | Power Automate — 05 - GOV - Retire HTTP Flow | Entry of If Retirement Failed · else | None declared beyond entry into its container. | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Succeeded'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-063 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-024 | If Found | Power Automate — 05 - GOV - Retire HTTP Flow | `{"greater":["@length(body('Find')?['value'])",0]}` | output of Find | true<br>false | true → Retire<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-025 | Validate Input | Power Automate — 05 - GOV - Retire HTTP Flow | `{"and":[{"greater":["@length(trim(string(triggerBody()?['environmentId'])))",0]},{"greater":["@length(trim(string(triggerBody()?['flowId'])))",0]},{"greater":["@length(trim(string(triggerBody()?['reason'])))",0]},{"lessOrEquals":["@length(trim(string(triggerBody()?['environmentId'])))",255]},{"lessOrEquals":["@length(trim(string(triggerBody()?['flowId'])))",255]},{"lessOrEquals":["@length(trim(string(triggerBody()?['reason'])))",4000]},{"equals":["@contains(trim(string(triggerBody()?['environmentId'])),'\\|')",false]},{"equals":["@contains(trim(string(triggerBody()?['flowId'])),'\\|')",false]}]}` | trigger field 'environmentId'<br>trigger field 'flowId'<br>trigger field 'reason' | true<br>false | true → Input Validated<br>false → Terminate Invalid Input | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-026 | If Registry Found | Power Automate — 05 - GOV - Retire HTTP Flow | `{"and":[{"greater":["@length(coalesce(body('Find_Registry')?['value'],json('[]')))",0]}]}` | output of Find Registry | true<br>false | true → Retire Registry<br>false → Terminate Registry Not Found | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-027 | If Retirement Failed | Power Automate — 05 - GOV - Retire HTTP Flow | `{"and":[{"not":{"equals":["@outputs('Compose_Final_Report_JSON')?['status']","Succeeded"]}}]}` | output of Compose Final Report JSON | true<br>false | true → Terminate Retirement Failed<br>false → Terminate Retirement Succeeded | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 1 response action(s); status codes 200. |
| Successful end state | A Response action returns to the caller. 1 response action(s); status codes 200. |
| Alternative end states | 3 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-178 Send Execution Report Email<br>NOTIF-179 Send Final Report Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-061 | Recovery after Reply | Reply reaches Failed or Skipped or TimedOut | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose Execution Report JSON. | Power Automate — 05 - GOV - Retire HTTP Flow | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-062 | Recovery after Scope Main | Scope Main reaches Failed or TimedOut or Skipped | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose Final Report JSON. | Power Automate — 05 - GOV - Retire HTTP Flow | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-063 | Recovery after Send Final Report Email | Send Final Report Email reaches Failed or TimedOut | Evaluates a condition and runs one of two branches. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by If Retirement Failed. | Power Automate — 05 - GOV - Retire HTTP Flow | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-0638 Send Execution Report Email | Sends a message; delivery is the record. |
| STEP-0664 Send Final Report Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
