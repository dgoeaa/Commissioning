# PROC-056 — ECM_DOCS_INTAKE

> Generated from `docs/reference/process-inventory.json`. Do not edit.
> Back to the [master inventory](../07-MASTER-PROCESS-INVENTORY.md) · [process detail index](../09-PROCESS-DETAIL.md).

## 5.1 Identity and purpose

| Attribute | Value |
| --- | --- |
| Identifier | PROC-056 |
| Name | ECM_DOCS_INTAKE |
| Alternative or legacy name | — |
| Category | Automated · System-initiated (HTTP request) |
| Description | Power Automate workflow carrying 13 action(s) under 1 trigger(s). |
| Description declared in the artifact itself | — |
| Business objective | Not evidenced. No supplied artifact states what this workflow is for in business terms; its name and its actions are all the export carries. |
| Operational objective | Reads from and writes to Microsoft Office 365 Outlook, Microsoft Power Automate Management, Microsoft SharePoint Online. |
| Process owner | Not evidenced. |
| Criticality | Not evidenced. |
| Business area / group | Flow estate |
| Related modules | — |
| Related features | — |
| Evidence classification | Partially evidenced |
| Evidence note | Every action, run-after condition, branch and connector call is CONFIRMED from the tenant export and catalogued step by step. What the workflow is FOR, who owns it and how critical it is are NOT evidenced: no supplied artifact states them. |
| Documentation status | Documented in part; named attributes outstanding |
| Validation status | Requires confirmation against the live tenant |
| Sources | `SRC-087` docs/reference/flow-contracts/deployed/ECM_DOCS_INTAKE__df7ddff1-9275-4f23-acf6-e169525f4e2f__full_definition.json<br>`SRC-088` docs/deployment/sharepoint/flows/designer-paste/correspondence-gateway/ECM_DOCS_INTAKE.Scope_Global_Intake.designer-paste.json |

## 5.2 Participants and responsibilities

| Attribute | Value |
| --- | --- |
| Initiating actor | The declared trigger; no human actor is named by the definition. |
| Participating roles | Not evidenced. |
| Accountable owner | Not evidenced. |
| Supporting systems | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Approval authority | Not evidenced for this process. |
| Escalation authority | Not evidenced for this process. |
| Segregation of duties | Not evidenced. No supplied artifact declares a separation requirement. |

### Responsible actor per step

| Step | Name | Responsible | Kind |
| --- | --- | --- | --- |
| STEP-1903 | Scope Global Intake Feed | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1904 | Scope Feed Main | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1905 | Get Registry Items | Microsoft SharePoint Online, called by the flow | Integration |
| STEP-1906 | Select Registry Rows | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1907 | Response Feed | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1908 | Scope Feed Catch | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1909 | Response Feed Failed | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1910 | Scope Flow Data Capture | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1911 | Get Flow Definition | Microsoft Power Automate Management, called by the flow | Integration |
| STEP-1912 | Compose Flow Run Record | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1913 | Compose Flow Run Report HTML | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1914 | Compose Telemetry Attachments | Power Automate — ECM_DOCS_INTAKE | Automated |
| STEP-1915 | Send Telemetry Email | Microsoft Office 365 Outlook, called by the flow | Integration |

## 5.3 Initiation and preconditions

| Attribute | Value |
| --- | --- |
| Starting event | manual: Request |
| Trigger type | manual (Request) |
| Entry criteria | The trigger fires. |
| Required roles and permissions | Not evidenced. |
| Required configuration | workflow df7ddff1-9275-4f23-acf6-e169525f4e2f |
| Required system availability | Microsoft Power Automate<br>Microsoft Office 365 Outlook<br>Microsoft Power Automate Management<br>Microsoft SharePoint Online |
| Scheduling conditions | None: this process is not scheduled. |

## 5.4 Inputs

| Step | Required inputs |
| --- | --- |
| STEP-1906 | output of Get Registry Items |
| STEP-1907 | output of Select Registry Rows |
| STEP-1912 | output of Get Flow Definition |
| STEP-1913 | output of Get Flow Definition |
| STEP-1914 | output of Get Flow Definition<br>output of Compose Flow Run Record<br>output of Compose Flow Run Report HTML |
| STEP-1915 | output of Get Flow Definition<br>output of Compose Telemetry Attachments |

## 5.5 Stages and activities

13 step(s).

| Step | Seq | Name | Container | Responsible | Trigger | Preconditions | Inputs | Action performed | Rules | System response | Output | Resulting status | Next step | Alternative next | Dependencies | Controls | Exceptions | Audit event | Evidence | Validation | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEP-1903 | 1 | Scope Global Intake Feed | flow root | Power Automate — ECM_DOCS_INTAKE | Flow trigger fires | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Scope Flow Data Capture | — | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1904 | 2 | Scope Feed Main | Scope Global Intake Feed | Power Automate — ECM_DOCS_INTAKE | Entry of Scope Global Intake Feed | None declared beyond entry into its container. | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | Scope Feed Catch (runs when this does not succeed) | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1905 | 3 | Get Registry Items | Scope Feed Main | Microsoft SharePoint Online, called by the flow | Entry of Scope Feed Main | None declared beyond entry into its container. | — | Reads a filtered set of list items from the system of record. | — | Microsoft SharePoint Online returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Select Registry Rows | — | Microsoft SharePoint Online | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1906 | 4 | Select Registry Rows | Scope Feed Main | Power Automate — ECM_DOCS_INTAKE | Get Registry Items reaches Succeeded | Get Registry Items = Succeeded | output of Get Registry Items | Projects each element of a collection into a new shape. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | Response Feed | — | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1907 | 5 | Response Feed | Scope Feed Main | Power Automate — ECM_DOCS_INTAKE | Select Registry Rows reaches Succeeded | Select Registry Rows = Succeeded | output of Select Registry Rows | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 200 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1908 | 6 | Scope Feed Catch | Scope Global Intake Feed | Power Automate — ECM_DOCS_INTAKE | Scope Feed Main reaches Failed or TimedOut | Scope Feed Main = Failed\|TimedOut | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | This step is itself a recovery path: it runs only when its predecessor did not succeed. | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1909 | 7 | Response Feed Failed | Scope Feed Catch | Power Automate — ECM_DOCS_INTAKE | Entry of Scope Feed Catch | None declared beyond entry into its container. | — | Returns the HTTP response to the caller and ends the request. | — | The value is held in the run and made available to later steps. | HTTP response body and headers. | HTTP 500 returned to the caller. | — | — | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1910 | 8 | Scope Flow Data Capture | flow root | Power Automate — ECM_DOCS_INTAKE | Scope Global Intake Feed reaches Succeeded | Scope Global Intake Feed = Succeeded | — | Groups the steps beneath it so one run-after condition governs the whole group. | — | The value is held in the run and made available to later steps. | Control passes to the next step. | — | — | — | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1911 | 9 | Get Flow Definition | Scope Flow Data Capture | Microsoft Power Automate Management, called by the flow | Entry of Scope Flow Data Capture | None declared beyond entry into its container. | — | Reads a workflow definition through the management connector. | — | Microsoft Power Automate Management returns its result to the run; a non-success reply fails this step. | The connector response body. | — | Compose Flow Run Record<br>Compose Flow Run Report HTML | — | Microsoft Power Automate Management | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1912 | 10 | Compose Flow Run Record | Scope Flow Data Capture | Power Automate — ECM_DOCS_INTAKE | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1913 | 11 | Compose Flow Run Report HTML | Scope Flow Data Capture | Power Automate — ECM_DOCS_INTAKE | Get Flow Definition reaches Succeeded | Get Flow Definition = Succeeded | output of Get Flow Definition | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Compose Telemetry Attachments | — | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1914 | 12 | Compose Telemetry Attachments | Scope Flow Data Capture | Power Automate — ECM_DOCS_INTAKE | Compose Flow Run Record reaches Succeeded; Compose Flow Run Report HTML reaches Succeeded | Compose Flow Run Record = Succeeded<br>Compose Flow Run Report HTML = Succeeded | output of Get Flow Definition<br>output of Compose Flow Run Record<br>output of Compose Flow Run Report HTML | Evaluates an expression and holds the result for later steps. | — | The value is held in the run and made available to later steps. | A composed value addressable by later steps. | — | Send Telemetry Email | — | — | — | — | — | Confirmed | No external validation required | SRC-087 SRC-088 |
| STEP-1915 | 13 | Send Telemetry Email | Scope Flow Data Capture | Microsoft Office 365 Outlook, called by the flow | Compose Telemetry Attachments reaches Succeeded | Compose Telemetry Attachments = Succeeded | output of Get Flow Definition<br>output of Compose Telemetry Attachments | Sends an outbound message. | — | Microsoft Office 365 Outlook returns its result to the run; a non-success reply fails this step. | The connector response body. | — | — | — | Microsoft Office 365 Outlook | — | — | Sends a message; delivery is the record. | Confirmed | No external validation required | SRC-087 SRC-088 |

## 5.6 Decisions and branches

_No decision point is evidenced in this process._

## 5.7 Business rules and controls

_No rule or control is bound to this process in the supplied inputs._

## 5.8 Outputs and completion

| Attribute | Value |
| --- | --- |
| Primary output | An HTTP response to the caller. |
| Completion criteria | A Response action returns to the caller. 2 response action(s); status codes 200, 500. |
| Successful end state | A Response action returns to the caller. 2 response action(s); status codes 200, 500. |
| Alternative end states | 1 recovery path(s); see 5.9. |
| Failed end states | The recovery paths listed in 5.9. |
| Cancellation outcome | Not evidenced. |
| Residual obligations | Not evidenced. |
| Records created or updated | — |
| Notifications issued | NOTIF-212 Send Telemetry Email |
| Downstream handoffs | — |

## 5.9 Exceptions, failures and recovery

| ID | Name | Triggering condition | System response | User-visible response | Retry / rollback | Recovery procedure | Responsible | Escalation | Resolution criteria | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXC-142 | Recovery after Scope Feed Main | Scope Feed Main reaches Failed or TimedOut | Groups the steps beneath it so one run-after condition governs the whole group. | Not directly visible to a caller; this step is internal to the recovery path. | No rollback is declared. Power Automate does not undo completed steps; whatever earlier steps wrote stays written. | Handled inside the run by Scope Feed Catch. | Power Automate — ECM_DOCS_INTAKE | Not declared in the definition. | The recovery step completes and the run continues past it. | Confirmed |

## 5.10 Monitoring, audit and performance

### Audit events written by this process

| Step | Audit event |
| --- | --- |
| STEP-1915 Send Telemetry Email | Sends a message; delivery is the record. |

## Relationships

_No subprocess, variant or dependency is recorded against this process._

## Operational status

_No run record for this process is held among the supplied inputs. Nothing is claimed about whether it executes._
