# PROC-070 — Global_Gap_Remediation_Provisioning

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-070 |
| Name | Global_Gap_Remediation_Provisioning |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 29 action(s) under 1 trigger(s). |
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
| Sources | `SRC-102` docs/reference/flow-contracts/deployed/Global_Gap_Remediation_Provisioning__3f96478b-117f-4d70-aa09-668c121e084d__full_definition.json |

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
| STEP-2152 | Initialize varResults | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2153 | Scope GapClosure | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2154 | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2155 | Compose Gap Definitions | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2156 | Apply to each gap | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2157 | Condition Is Dry Run | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2158 | Append DryRun Result | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2159 | Create Field | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-2160 | Condition Evaluate Result | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2161 | Append Created Result | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2162 | Condition Already Exists | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2163 | Append Skipped Result | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2164 | Append Failed Result | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2165 | Filter Created | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2166 | Filter Skipped | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2167 | Filter Failed | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2168 | Filter DryRun | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2169 | Compose Summary | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2170 | Condition Any Failures | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2171 | Terminate Failed | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2172 | Send an email notification V2 | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2173 | Compose Results Rows Html | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2174 | Compose Email Body | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2175 | Compose Result | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2176 | Scope GapClosure Catch | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2177 | Terminate On Error | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2178 | Compose Error Email Body | Power Automate — Global_Gap_Remediation_Provisioning | Automated |
| STEP-2179 | Send an email notification V2 1 | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-2180 | Compose Error | Power Automate — Global_Gap_Remediation_Provisioning | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 3f96478b-117f-4d70-aa09-668c121e084d |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-2157 | trigger field 'text' |
| STEP-2160 | output of Create Field |
| STEP-2162 | output of Create Field |
| STEP-2164 | output of Create Field |
| STEP-2165 | variable 'varResults' |
| STEP-2166 | variable 'varResults' |
| STEP-2167 | variable 'varResults' |
| STEP-2168 | variable 'varResults' |
| STEP-2169 | variable 'varResults'<br>output of Filter Created<br>output of Filter Skipped<br>output of Filter Failed<br>output of Filter DryRun |
| STEP-2170 | output of Compose Summary |
| STEP-2171 | output of Compose Summary |
| STEP-2172 | trigger field 'AdminEmail'<br>trigger field 'DryRun'<br>output of Compose Summary<br>output of Compose Email Body<br>output of Compose Results Rows Html<br>output of Compose Result |
| STEP-2173 | variable 'varResults' |
| STEP-2174 | trigger field 'DryRun'<br>trigger field 'RunNotes'<br>output of Compose Summary<br>output of Compose Results Rows Html |
| STEP-2175 | trigger field 'DryRun'<br>trigger field 'RunNotes'<br>output of Compose Summary<br>output of Filter Failed |
| STEP-2179 | trigger field 'AdminEmail'<br>trigger field 'DryRun'<br>output of Compose Summary<br>output of Compose Error Email Body<br>output of Compose Results Rows Html<br>output of Compose Result<br>output of Compose Error |
| STEP-2180 | trigger field 'DryRun'<br>trigger field 'RunNotes'<br>output of Compose Summary<br>output of Filter Failed |

## 5.5 Stages and activities

29 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-2152 | 1 | Initialize varResults | flow root | Power Automate — Global_Gap_Remediation_Provisioning | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Scope GapClosure | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2153 | 2 | Scope GapClosure | flow root | Power Automate — Global_Gap_Remediation_Provisioning | Initialize varResults reaches Succeeded | Initialize varResults = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2154 | 3 | Scope GapClosure Try | Scope GapClosure | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Scope GapClosure | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope GapClosure Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2155 | 4 | Compose Gap Definitions | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Scope GapClosure Try | None declared beyond entry into its container. | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Apply to each gap | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2156 | 5 | Apply to each gap | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Compose Gap Definitions reaches Succeeded | Compose Gap Definitions = Succeeded | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Filter Created | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2157 | 6 | Condition Is Dry Run | Apply to each gap | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Apply to each gap | None declared beyond entry into its container. | trigger field 'text' | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"equals":["@triggerBody()?['text']",true]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2158 | 7 | Append DryRun Result | Condition Is Dry Run | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Condition Is Dry Run | None declared beyond entry into its container. | — | Appends an element to a run-scoped array. | Writes 'varResults'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResults'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2159 | 8 | Create Field | Condition Is Dry Run · else | Microsoft SharePoint Online, called by the flow | Entry of Condition Is Dry Run · else | None declared beyond entry into its container. | — | Calls an external HTTP endpoint. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | Condition Evaluate Result (runs when this does not succeed) | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2160 | 9 | Condition Evaluate Result | Condition Is Dry Run · else | Power Automate — Global_Gap_Remediation_Provisioning | Create Field reaches Succeeded or Failed or Skipped or TimedOut | Create Field = Succeeded\|Failed\|Skipped\|TimedOut | output of Create Field | Evaluates a condition and runs one of two branches. | Condition: {"or":[{"equals":["@outputs('Create_Field')?['statusCode']",200]},{"equals":["@outputs('Create_Field')?['statusCode']",201]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-102 |
| STEP-2161 | 10 | Append Created Result | Condition Evaluate Result | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Condition Evaluate Result | None declared beyond entry into its container. | — | Appends an element to a run-scoped array. | Writes 'varResults'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResults'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2162 | 11 | Condition Already Exists | Condition Evaluate Result · else | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Condition Evaluate Result · else | None declared beyond entry into its container. | output of Create Field | Evaluates a condition and runs one of two branches. | Condition: {"or":[{"contains":["@toLower(string(body('Create_Field')))","duplicate field name"]},{"contains":["@toLower(string(body('Create_Field')))","already exists"]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2163 | 12 | Append Skipped Result | Condition Already Exists | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Condition Already Exists | None declared beyond entry into its container. | — | Appends an element to a run-scoped array. | Writes 'varResults'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResults'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2164 | 13 | Append Failed Result | Condition Already Exists · else | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Condition Already Exists · else | None declared beyond entry into its container. | output of Create Field | Appends an element to a run-scoped array. | Writes 'varResults'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResults'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2165 | 14 | Filter Created | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Apply to each gap reaches Succeeded | Apply to each gap = Succeeded | variable 'varResults' | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Filter Skipped | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2166 | 15 | Filter Skipped | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Filter Created reaches Succeeded | Filter Created = Succeeded | variable 'varResults' | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Filter Failed | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2167 | 16 | Filter Failed | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Filter Skipped reaches Succeeded | Filter Skipped = Succeeded | variable 'varResults' | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Filter DryRun | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2168 | 17 | Filter DryRun | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Filter Failed reaches Succeeded | Filter Failed = Succeeded | variable 'varResults' | Filters a collection by a condition. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Compose Summary | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2169 | 18 | Compose Summary | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Filter DryRun reaches Succeeded | Filter DryRun = Succeeded | variable 'varResults'<br>output of Filter Created<br>output of Filter Skipped<br>output of Filter Failed<br>output of Filter DryRun | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Condition Any Failures | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2170 | 19 | Condition Any Failures | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Compose Summary reaches Succeeded | Compose Summary = Succeeded | output of Compose Summary | Evaluates a condition and runs one of two branches. | Condition: {"and":[{"greater":["@outputs('Compose_Summary')?['failed']",0]}]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Compose Results Rows Html (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2171 | 20 | Terminate Failed | Condition Any Failures | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Condition Any Failures | None declared beyond entry into its container. | output of Compose Summary | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2172 | 21 | Send an email notification V2 | Scope GapClosure Try | Microsoft Office 365 Outlook, called by the flow | Compose Email Body reaches Succeeded | Compose Email Body = Succeeded | trigger field 'AdminEmail'<br>trigger field 'DryRun'<br>output of Compose Summary<br>output of Compose Email Body<br>output of Compose Results Rows Html<br>output of Compose Result | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-102 |
| STEP-2173 | 22 | Compose Results Rows Html | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Condition Any Failures reaches Succeeded or Failed or Skipped | Condition Any Failures = Succeeded\|Failed\|Skipped | variable 'varResults' | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Result | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-102 |
| STEP-2174 | 23 | Compose Email Body | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Compose Result reaches Succeeded | Compose Result = Succeeded | trigger field 'DryRun'<br>trigger field 'RunNotes'<br>output of Compose Summary<br>output of Compose Results Rows Html | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an email notification V2 | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2175 | 24 | Compose Result | Scope GapClosure Try | Power Automate — Global_Gap_Remediation_Provisioning | Compose Results Rows Html reaches Succeeded | Compose Results Rows Html = Succeeded | trigger field 'DryRun'<br>trigger field 'RunNotes'<br>output of Compose Summary<br>output of Filter Failed | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Email Body | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2176 | 25 | Scope GapClosure Catch | Scope GapClosure | Power Automate — Global_Gap_Remediation_Provisioning | Scope GapClosure Try reaches Failed or TimedOut or Skipped | Scope GapClosure Try = Failed\|TimedOut\|Skipped | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-102 |
| STEP-2177 | 26 | Terminate On Error | Scope GapClosure Catch | Power Automate — Global_Gap_Remediation_Provisioning | Send an email notification V2 1 reaches Succeeded | Send an email notification V2 1 = Succeeded | — | Ends the run immediately with a declared status. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | Run terminated with runStatus 'Failed'. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2178 | 27 | Compose Error Email Body | Scope GapClosure Catch | Power Automate — Global_Gap_Remediation_Provisioning | Compose Error reaches Succeeded | Compose Error = Succeeded | — | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send an email notification V2 1 | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |
| STEP-2179 | 28 | Send an email notification V2 1 | Scope GapClosure Catch | Microsoft Office 365 Outlook, called by the flow | Compose Error Email Body reaches Succeeded | Compose Error Email Body = Succeeded | trigger field 'AdminEmail'<br>trigger field 'DryRun'<br>output of Compose Summary<br>output of Compose Error Email Body<br>output of Compose Results Rows Html<br>output of Compose Result<br>output of Compose Error | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Terminate On Error | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-102 |
| STEP-2180 | 29 | Compose Error | Scope GapClosure Catch | Power Automate — Global_Gap_Remediation_Provisioning | Entry of Scope GapClosure Catch | None declared beyond entry into its container. | trigger field 'DryRun'<br>trigger field 'RunNotes'<br>output of Compose Summary<br>output of Filter Failed | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Error Email Body | — | — | — | — | — | Confirmed | No external validation required | SRC-102 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-100 | Condition Is Dry Run | Power Automate — Global_Gap_Remediation_Provisioning | `{"and":[{"equals":["@triggerBody()?['text']",true]}]}` | trigger field 'text' | true<br>false | true → Append DryRun Result<br>false → Create Field, Condition Evaluate Result | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-101 | Condition Evaluate Result | Power Automate — Global_Gap_Remediation_Provisioning | `{"or":[{"equals":["@outputs('Create_Field')?['statusCode']",200]},{"equals":["@outputs('Create_Field')?['statusCode']",201]}]}` | output of Create Field | true<br>false | true → Append Created Result<br>false → Condition Already Exists | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-102 | Condition Already Exists | Power Automate — Global_Gap_Remediation_Provisioning | `{"or":[{"contains":["@toLower(string(body('Create_Field')))","duplicate field name"]},{"contains":["@toLower(string(body('Create_Field')))","already exists"]}]}` | output of Create Field | true<br>false | true → Append Skipped Result<br>false → Append Failed Result | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-103 | Condition Any Failures | Power Automate — Global_Gap_Remediation_Provisioning | `{"and":[{"greater":["@outputs('Compose_Summary')?['failed']",0]}]}` | output of Compose Summary | true<br>false | true → Terminate Failed<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | Writes to the system of record. |
| Completion criteria | The last action completes. The export declares no response to a caller. |
| Successful end state | The last action completes. The export declares no response to a caller. |
| Alternative end states | 3 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-221 Send an email notification V2<br>NOTIF-222 Send an email notification V2 1 |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-164 | Recovery after Create Field | Create Field reaches Failed or Skipped or TimedOut | Evaluates a condition and runs one of two branches. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Condition Evaluate Result. | Power Automate — Global_Gap_Remediation_Provisioning | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-165 | Recovery after Condition Any Failures | Condition Any Failures reaches Failed or Skipped | Evaluates an expression and holds the result for later steps. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Compose Results Rows Html. | Power Automate — Global_Gap_Remediation_Provisioning | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |
| EXC-166 | Recovery after Scope GapClosure Try | Scope GapClosure Try reaches Failed or TimedOut or Skipped | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope GapClosure Catch. | Power Automate — Global_Gap_Remediation_Provisioning | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-2172 Send an email notification V2 | Sends a message; delivery is the record. |
| STEP-2179 Send an email notification V2 1 | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
