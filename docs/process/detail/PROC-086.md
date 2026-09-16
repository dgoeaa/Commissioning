# PROC-086 — Repair the DGO

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-086 |
| Name | Repair the DGO |
| Alternative or legacy name | Repair the DGO_* governance lists |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 38 action(s) under 1 trigger(s). |
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
| Sources | `SRC-118` docs/reference/flow-contracts/deployed/Repair the DGO__ governance lists__bc095fa2-28a4-4312-9076-87caac5ca116__full_definition.json |

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
| STEP-2894 | Compose | Power Automate — Repair the DGO | Automated |
| STEP-2895 | Scope Global Governance Repair | Power Automate — Repair the DGO | Automated |
| STEP-2896 | Scope Repair Main | Power Automate — Repair the DGO | Automated |
| STEP-2897 | Foreach List | Power Automate — Repair the DGO | Automated |
| STEP-2898 | Get List Fields | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2899 | Select Existing Names | Power Automate — Repair the DGO | Automated |
| STEP-2900 | Filter Strays | Power Automate — Repair the DGO | Automated |
| STEP-2901 | Foreach Stray | Power Automate — Repair the DGO | Automated |
| STEP-2902 | Get Column Usage | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2903 | Condition Column Is Empty | Power Automate — Repair the DGO | Automated |
| STEP-2904 | Delete Stray Column | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2905 | Increment variable varDeleted | Power Automate — Repair the DGO | Automated |
| STEP-2906 | Append to array variable varReport Deleted | Power Automate — Repair the DGO | Automated |
| STEP-2907 | Increment variable varKeptPopulated | Power Automate — Repair the DGO | Automated |
| STEP-2908 | Append to array variable varReport Kept | Power Automate — Repair the DGO | Automated |
| STEP-2909 | Scope Create Missing | Power Automate — Repair the DGO | Automated |
| STEP-2910 | Get Fields After Cleanup | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2911 | Select Existing After | Power Automate — Repair the DGO | Automated |
| STEP-2912 | Filter Missing | Power Automate — Repair the DGO | Automated |
| STEP-2913 | Foreach Missing | Power Automate — Repair the DGO | Automated |
| STEP-2914 | Create Field | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2915 | Increment variable varCreated | Power Automate — Repair the DGO | Automated |
| STEP-2916 | Scope Apply Indexes | Power Automate — Repair the DGO | Automated |
| STEP-2917 | Foreach Index | Power Automate — Repair the DGO | Automated |
| STEP-2918 | Set Field Indexed | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2919 | Increment variable varIndexed | Power Automate — Repair the DGO | Automated |
| STEP-2920 | Compose Summary | Power Automate — Repair the DGO | Automated |
| STEP-2921 | Condition Repair Clean | Power Automate — Repair the DGO | Automated |
| STEP-2922 | Terminate Succeeded | Power Automate — Repair the DGO | Automated |
| STEP-2923 | Terminate Needs Attention | Power Automate — Repair the DGO | Automated |
| STEP-2924 | Scope Repair Catch | Power Automate — Repair the DGO | Automated |
| STEP-2925 | Terminate Unhandled Failure | Power Automate — Repair the DGO | Automated |
| STEP-2926 | Initialize variable varLists | Power Automate — Repair the DGO | Automated |
| STEP-2927 | Initialize variable varDeleted | Power Automate — Repair the DGO | Automated |
| STEP-2928 | Initialize variable varKeptPopulated | Power Automate — Repair the DGO | Automated |
| STEP-2929 | Initialize variable varCreated | Power Automate — Repair the DGO | Automated |
| STEP-2930 | Initialize variable varIndexed | Power Automate — Repair the DGO | Automated |
| STEP-2931 | Initialize variable varReport | Power Automate — Repair the DGO | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow  governance lists |
| Required system availability | Microsoft Power Automate<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2899 | output of Get List Fields |
| STEP-2900 | output of Get List Fields |
| STEP-2903 | output of Get Column Usage |
| STEP-2911 | output of Get Fields After Cleanup |
| STEP-2912 | output of Select Existing After |
| STEP-2920 | variable 'varDeleted'<br>variable 'varKeptPopulated'<br>variable 'varCreated'<br>variable 'varIndexed'<br>variable 'varReport' |
| STEP-2921 | variable 'varKeptPopulated' |
| STEP-2923 | variable 'varKeptPopulated' |

## 5.5 Stages and activities

38 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2894 | 1 | Compose | flow root | Power Automate — Repair the DGO | Flow trigger fires | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Initialize variable varLists | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2895 | 2 | Scope Global Governance Repair | flow root | Power Automate — Repair the DGO | Initialize variable varReport reaches Succeeded | Initialize variable varReport = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2896 | 3 | Scope Repair Main | Scope Global Governance Repair | Power Automate — Repair the DGO | Entry of Scope Global Governance Repair | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Repair Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2897 | 4 | Foreach List | Scope Repair Main | Power Automate — Repair the DGO | Entry of Scope Repair Main | None declared beyond entry into its container. | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Summary | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2898 | 5 | Get List Fields | Foreach List | Microsoft SharePoint Online, called by the flow | Entry of Foreach List | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Existing Names | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2899 | 6 | Select Existing Names | Foreach List | Power Automate — Repair the DGO | Get List Fields reaches Succeeded | Get List Fields = Succeeded | output of Get List Fields | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Filter Strays | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2900 | 7 | Filter Strays | Foreach List | Power Automate — Repair the DGO | Select Existing Names reaches Succeeded | Select Existing Names = Succeeded | output of Get List Fields | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Foreach Stray | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2901 | 8 | Foreach Stray | Foreach List | Power Automate — Repair the DGO | Filter Strays reaches Succeeded | Filter Strays = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Create Missing | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2902 | 9 | Get Column Usage | Foreach Stray | Microsoft SharePoint Online, called by the flow | Entry of Foreach Stray | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition Column Is Empty | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2903 | 10 | Condition Column Is Empty | Foreach Stray | Power Automate — Repair the DGO | Get Column Usage reaches Succeeded | Get Column Usage = Succeeded | output of Get Column Usage | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@length(coalesce(body('Get_Column_Usage')?['value'], json('[]')))",0]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2904 | 11 | Delete Stray Column | Condition Column Is Empty | Microsoft SharePoint Online, called by the flow | Entry of Condition Column Is Empty | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Increment variable varDeleted | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2905 | 12 | Increment variable varDeleted | Condition Column Is Empty | Power Automate — Repair the DGO | Delete Stray Column reaches Succeeded | Delete Stray Column = Succeeded | — | Adds to a numeric run-scoped variable. | Writes 'varDeleted'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varDeleted'. | — | Append to array variable varReport Deleted | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2906 | 13 | Append to array variable varReport Deleted | Condition Column Is Empty | Power Automate — Repair the DGO | Increment variable varDeleted reaches Succeeded | Increment variable varDeleted = Succeeded | — | Appends an element to a run-scoped array. | Writes 'varReport'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varReport'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2907 | 14 | Increment variable varKeptPopulated | Condition Column Is Empty · else | Power Automate — Repair the DGO | Entry of Condition Column Is Empty · else | None declared beyond entry into its container. | — | Adds to a numeric run-scoped variable. | Writes 'varKeptPopulated'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varKeptPopulated'. | — | Append to array variable varReport Kept | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2908 | 15 | Append to array variable varReport Kept | Condition Column Is Empty · else | Power Automate — Repair the DGO | Increment variable varKeptPopulated reaches Succeeded | Increment variable varKeptPopulated = Succeeded | — | Appends an element to a run-scoped array. | Writes 'varReport'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varReport'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2909 | 16 | Scope Create Missing | Foreach List | Power Automate — Repair the DGO | Foreach Stray reaches Succeeded | Foreach Stray = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Apply Indexes | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2910 | 17 | Get Fields After Cleanup | Scope Create Missing | Microsoft SharePoint Online, called by the flow | Entry of Scope Create Missing | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Existing After | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2911 | 18 | Select Existing After | Scope Create Missing | Power Automate — Repair the DGO | Get Fields After Cleanup reaches Succeeded | Get Fields After Cleanup = Succeeded | output of Get Fields After Cleanup | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Filter Missing | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2912 | 19 | Filter Missing | Scope Create Missing | Power Automate — Repair the DGO | Select Existing After reaches Succeeded | Select Existing After = Succeeded | output of Select Existing After | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Foreach Missing | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2913 | 20 | Foreach Missing | Scope Create Missing | Power Automate — Repair the DGO | Filter Missing reaches Succeeded | Filter Missing = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2914 | 21 | Create Field | Foreach Missing | Microsoft SharePoint Online, called by the flow | Entry of Foreach Missing | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Increment variable varCreated | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2915 | 22 | Increment variable varCreated | Foreach Missing | Power Automate — Repair the DGO | Create Field reaches Succeeded | Create Field = Succeeded | — | Adds to a numeric run-scoped variable. | Writes 'varCreated'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varCreated'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2916 | 23 | Scope Apply Indexes | Foreach List | Power Automate — Repair the DGO | Scope Create Missing reaches Succeeded | Scope Create Missing = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2917 | 24 | Foreach Index | Scope Apply Indexes | Power Automate — Repair the DGO | Entry of Scope Apply Indexes | None declared beyond entry into its container. | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2918 | 25 | Set Field Indexed | Foreach Index | Microsoft SharePoint Online, called by the flow | Entry of Foreach Index | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Increment variable varIndexed | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2919 | 26 | Increment variable varIndexed | Foreach Index | Power Automate — Repair the DGO | Set Field Indexed reaches Succeeded | Set Field Indexed = Succeeded | — | Adds to a numeric run-scoped variable. | Writes 'varIndexed'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varIndexed'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2920 | 27 | Compose Summary | Scope Repair Main | Power Automate — Repair the DGO | Foreach List reaches Succeeded | Foreach List = Succeeded | variable 'varDeleted'<br>variable 'varKeptPopulated'<br>variable 'varCreated'<br>variable 'varIndexed'<br>variable 'varReport' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition Repair Clean | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2921 | 28 | Condition Repair Clean | Scope Repair Main | Power Automate — Repair the DGO | Compose Summary reaches Succeeded | Compose Summary = Succeeded | variable 'varKeptPopulated' | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@variables('varKeptPopulated')",0]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2922 | 29 | Terminate Succeeded | Condition Repair Clean | Power Automate — Repair the DGO | Entry of Condition Repair Clean | None declared beyond entry into its container. | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Succeeded'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2923 | 30 | Terminate Needs Attention | Condition Repair Clean · else | Power Automate — Repair the DGO | Entry of Condition Repair Clean · else | None declared beyond entry into its container. | variable 'varKeptPopulated' | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2924 | 31 | Scope Repair Catch | Scope Global Governance Repair | Power Automate — Repair the DGO | Scope Repair Main reaches Failed or TimedOut | Scope Repair Main = Failed\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-118 |
| STEP-2925 | 32 | Terminate Unhandled Failure | Scope Repair Catch | Power Automate — Repair the DGO | Entry of Scope Repair Catch | None declared beyond entry into its container. | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2926 | 33 | Initialize variable varLists | flow root | Power Automate — Repair the DGO | Compose reaches Succeeded | Compose = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varDeleted | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2927 | 34 | Initialize variable varDeleted | flow root | Power Automate — Repair the DGO | Initialize variable varLists reaches Succeeded | Initialize variable varLists = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varKeptPopulated | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2928 | 35 | Initialize variable varKeptPopulated | flow root | Power Automate — Repair the DGO | Initialize variable varDeleted reaches Succeeded | Initialize variable varDeleted = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varCreated | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2929 | 36 | Initialize variable varCreated | flow root | Power Automate — Repair the DGO | Initialize variable varKeptPopulated reaches Succeeded | Initialize variable varKeptPopulated = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varIndexed | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2930 | 37 | Initialize variable varIndexed | flow root | Power Automate — Repair the DGO | Initialize variable varCreated reaches Succeeded | Initialize variable varCreated = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable varReport | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |
| STEP-2931 | 38 | Initialize variable varReport | flow root | Power Automate — Repair the DGO | Initialize variable varIndexed reaches Succeeded | Initialize variable varIndexed = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope Global Governance Repair | — | — | — | — | — | Confirmed | No external validation required | SRC-118 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-144 | Condition Column Is Empty | Power Automate — Repair the DGO | `{"and":[{"equals":["@length(coalesce(body('Get_Column_Usage')?['value'], json('[]')))",0]}]}` | output of Get Column Usage | true<br>false | true → Delete Stray Column, Increment variable varDeleted, Append to array variable varReport Deleted<br>false → Increment variable varKeptPopulated, Append to array variable varReport Kept | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-145 | Condition Repair Clean | Power Automate — Repair the DGO | `{"and":[{"equals":["@variables('varKeptPopulated')",0]}]}` | variable 'varKeptPopulated' | true<br>false | true → Terminate Succeeded<br>false → Terminate Needs Attention | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | Writes to the system of record. |
| Completion criteria | The last action completes. The export declares no response to a caller. |
| Successful end state | The last action completes. The export declares no response to a caller. |
| Alternative end states | 1 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | — |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-216 | Recovery after Scope Repair Main | Scope Repair Main reaches Failed or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Repair Catch. | Power Automate — Repair the DGO | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

_No monitoring control, metric, service-level expectation or audit event is evidenced for this process._

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
