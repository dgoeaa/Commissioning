# PROC-055 — Digital Hub Email AI Assist

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-055 |
| Name | Digital Hub Email AI Assist |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 24 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-086` docs/reference/flow-contracts/deployed/Digital Hub Email AI Assist__34761736-eb9a-30f7-c43b-c9b2ea6ad297__full_definition.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-1879 | Get email (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-1880 | Condition | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1881 | Apply to each | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1882 | Get Attachment (V2) | Microsoft Office 365 Outlook, called by the flow | Integration |
| STEP-1883 | Condition 2 | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1884 | base64AttachmentContent | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1885 | HTTP Request to AI API | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1886 | Scope Successful | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1887 | Parse JSON Succesful | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1888 | Parse JSON | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1889 | HTML Values | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1890 | Extract Values JSON | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1891 | Parse JSON Successful Text | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1892 | Clean Parse JSON Successful Text | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1893 | Set variable | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1894 | Scope Errror | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1895 | Parse JSON Error | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1896 | Parse JSON Body Parse JSON Error | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1897 | Set variable varResponse Error | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1898 | Scope Response | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1899 | HTML with Attachments | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1900 | HTTP Body 3 | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1901 | Initialize variable | Power Automate — Digital Hub Email AI Assist | Automated |
| STEP-1902 | Initialize variable 2 | Power Automate — Digital Hub Email AI Assist | Automated |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow 34761736-eb9a-30f7-c43b-c9b2ea6ad297 |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-1880 | output of Get email (V2) |
| STEP-1882 | output of Get email (V2) |
| STEP-1883 | output of Get Attachment (V2) |
| STEP-1884 | output of Get Attachment (V2) |
| STEP-1885 | output of HTTP Body 3 |
| STEP-1887 | output of HTTP Request to AI API |
| STEP-1888 | output of Clean Parse JSON Successful Text |
| STEP-1889 | output of Parse JSON |
| STEP-1890 | output of Parse JSON |
| STEP-1891 | output of Parse JSON Succesful |
| STEP-1892 | output of Parse JSON Successful Text |
| STEP-1893 | output of HTML Values |
| STEP-1895 | output of HTTP Request to AI API |
| STEP-1896 | output of Parse JSON Error |
| STEP-1897 | output of Parse JSON Body Parse JSON Error |
| STEP-1899 | variable 'varAttachmentsHTML'<br>output of Parse JSON |
| STEP-1900 | output of Get email (V2) |

## 5.5 Stages and activities

24 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-1879 | 1 | Get email (V2) | flow root | Microsoft Office 365 Outlook, called by the flow | Initialize variable reaches Succeeded | Initialize variable = Succeeded | — | Reads one mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1880 | 2 | Condition | flow root | Power Automate — Digital Hub Email AI Assist | Get email (V2) reaches Succeeded | Get email (V2) = Succeeded | output of Get email (V2) | Evaluates a condition and runs one of two branches. | Condition: {"equals":["@outputs('Get_email_(V2)')?['body/hasAttachments']",true]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | HTTP Body 3 | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1881 | 3 | Apply to each | Condition | Power Automate — Digital Hub Email AI Assist | Entry of Condition | None declared beyond entry into its container. | — | Repeats the steps beneath it once per element of a collection. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1882 | 4 | Get Attachment (V2) | Apply to each | Microsoft Office 365 Outlook, called by the flow | Entry of Apply to each | None declared beyond entry into its container. | output of Get email (V2) | Reads an attachment from a mailbox message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Condition 2 | — | Microsoft Office 365 Outlook | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1883 | 5 | Condition 2 | Apply to each | Power Automate — Digital Hub Email AI Assist | Get Attachment (V2) reaches Succeeded | Get Attachment (V2) = Succeeded | output of Get Attachment (V2) | Evaluates a condition and runs one of two branches. | Condition: {"equals":["@outputs('Get_Attachment_(V2)')?['body/isInline']",true]} | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1884 | 6 | base64AttachmentContent | Condition 2 · else | Power Automate — Digital Hub Email AI Assist | Entry of Condition 2 · else | None declared beyond entry into its container. | output of Get Attachment (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1885 | 7 | HTTP Request to AI API | flow root | Power Automate — Digital Hub Email AI Assist | HTTP Body 3 reaches Succeeded | HTTP Body 3 = Succeeded | output of HTTP Body 3 | Calls an external HTTP endpoint directly, without a connector. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Successful | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1886 | 8 | Scope Successful | flow root | Power Automate — Digital Hub Email AI Assist | HTTP Request to AI API reaches Succeeded | HTTP Request to AI API = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Errror | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1887 | 9 | Parse JSON Succesful | Scope Successful | Power Automate — Digital Hub Email AI Assist | Entry of Scope Successful | None declared beyond entry into its container. | output of HTTP Request to AI API | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON Successful Text | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1888 | 10 | Parse JSON | Scope Successful | Power Automate — Digital Hub Email AI Assist | Clean Parse JSON Successful Text reaches Succeeded | Clean Parse JSON Successful Text = Succeeded | output of Clean Parse JSON Successful Text | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Extract Values JSON | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1889 | 11 | HTML Values | Scope Successful | Power Automate — Digital Hub Email AI Assist | Extract Values JSON reaches Succeeded | Extract Values JSON = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1890 | 12 | Extract Values JSON | Scope Successful | Power Automate — Digital Hub Email AI Assist | Parse JSON reaches Succeeded | Parse JSON = Succeeded | output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTML Values | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1891 | 13 | Parse JSON Successful Text | Scope Successful | Power Automate — Digital Hub Email AI Assist | Parse JSON Succesful reaches Succeeded | Parse JSON Succesful = Succeeded | output of Parse JSON Succesful | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Clean Parse JSON Successful Text | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1892 | 14 | Clean Parse JSON Successful Text | Scope Successful | Power Automate — Digital Hub Email AI Assist | Parse JSON Successful Text reaches Succeeded | Parse JSON Successful Text = Succeeded | output of Parse JSON Successful Text | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Parse JSON | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1893 | 15 | Set variable | Scope Successful | Power Automate — Digital Hub Email AI Assist | HTML Values reaches Succeeded | HTML Values = Succeeded | output of HTML Values | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1894 | 16 | Scope Errror | flow root | Power Automate — Digital Hub Email AI Assist | Scope Successful reaches Succeeded | Scope Successful = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Response | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1895 | 17 | Parse JSON Error | Scope Errror | Power Automate — Digital Hub Email AI Assist | Entry of Scope Errror | None declared beyond entry into its container. | output of HTTP Request to AI API | Parses a JSON payload against a declared schema, failing the run when it does not match. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Parse JSON Body Parse JSON Error | — | — | Schema validation: a payload that does not match the declared schema fails the run here. | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1896 | 18 | Parse JSON Body Parse JSON Error | Scope Errror | Power Automate — Digital Hub Email AI Assist | Parse JSON Error reaches Succeeded | Parse JSON Error = Succeeded | output of Parse JSON Error | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Set variable varResponse Error | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1897 | 19 | Set variable varResponse Error | Scope Errror | Power Automate — Digital Hub Email AI Assist | Parse JSON Body Parse JSON Error reaches Succeeded | Parse JSON Body Parse JSON Error = Succeeded | output of Parse JSON Body Parse JSON Error | Replaces the value held in a run-scoped variable. | Writes 'varResponse'. | The value is held in the run and made available to later steps. | Run-scoped variable 'varResponse'. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1898 | 20 | Scope Response | flow root | Power Automate — Digital Hub Email AI Assist | Scope Errror reaches Succeeded | Scope Errror = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1899 | 21 | HTML with Attachments | Scope Response | Power Automate — Digital Hub Email AI Assist | Entry of Scope Response | None declared beyond entry into its container. | variable 'varAttachmentsHTML'<br>output of Parse JSON | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1900 | 22 | HTTP Body 3 | flow root | Power Automate — Digital Hub Email AI Assist | Condition reaches Succeeded | Condition = Succeeded | output of Get email (V2) | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | HTTP Request to AI API | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1901 | 23 | Initialize variable | flow root | Power Automate — Digital Hub Email AI Assist | Initialize variable 2 reaches Succeeded | Initialize variable 2 = Succeeded | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Get email (V2) | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |
| STEP-1902 | 24 | Initialize variable 2 | flow root | Power Automate — Digital Hub Email AI Assist | Flow trigger fires | None declared beyond entry into its container. | — | Declares a run-scoped variable and sets its first value. | — | The value is held in the run and made available to later steps. | Run-scoped variable 'unnamed'. | — | Initialize variable | — | — | — | — | — | Confirmed | No external validation required | SRC-086 |

## 5.6 Decisions and branches

| ID | Name | Owner | Condition | Evaluates | Outcomes | Branches | Default | Exception behaviour | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-096 | Condition | Power Automate — Digital Hub Email AI Assist | `{"equals":["@outputs('Get_email_(V2)')?['body/hasAttachments']",true]}` | output of Get email (V2) | true<br>false | true → Apply to each<br>false → no action; the branch is empty | No false branch is declared: when the condition does not hold, the run continues past the decision. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |
| DEC-097 | Condition 2 | Power Automate — Digital Hub Email AI Assist | `{"equals":["@outputs('Get_Attachment_(V2)')?['body/isInline']",true]}` | output of Get Attachment (V2) | true<br>false | true → no action; the branch is empty<br>false → base64AttachmentContent | The false branch is declared and carries actions. | Not declared on the decision itself; a failure inside a branch is governed by the run-after conditions of whatever follows. | Confirmed |

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | Run-scoped values only. |
| Completion criteria | The last action completes. The export declares no response to a caller. |
| Successful end state | The last action completes. The export declares no response to a caller. |
| Alternative end states | Not evidenced. |
| Failed end states | Not evidenced. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | — |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

_No exception path is evidenced in this process. Where the process is a request-triggered workflow, that absence is itself recorded in the gap register._

## 5.10 Monitoring, audit and performance

_No monitoring control, metric, service-level expectation or audit event is evidenced for this process._

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
