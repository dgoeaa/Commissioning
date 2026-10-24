# NITDA DGO Notification Estate: Current Evidence Register

**Repository evidence date:** Supplied four-batch intake, reconstructed 2 September 2026

> This is a current evidence output, not a claim that the live tenant has been changed. Runtime deployment, connection identity, and actual delivery remain subject to tenant-side verification.

## Reconciled totals

- **Provisioned:** 7
- **Absent:** 17
- **Misaddressed:** 6
- **Local only:** 4
- **Regression:** 2
- **Unimplemented:** 2

## Row register

### RN-001: Submission accepted and reference minted

- **Audience:** Citizen
- **State:** Absent
- **Severity:** Critical
- **Evidence conclusion:** Portal promises confirmation and tracking ID by email; submission packages contain no mail action.
- **Repository evidence:** `document-portal/js/submit.js:604,610; document-portal/js/data.js:150; deployment/power-automate-flows/01-portal-submission.flow.json; deployment/sharepoint/flows/designer-paste/Portal_SUBMISSION_ECM_DOCS.designer-paste.json`

### RN-002: Record moves to action-required

- **Audience:** Citizen
- **State:** Absent
- **Severity:** Critical
- **Evidence conclusion:** Governed status and template exist, but no recurrence or SharePoint change trigger exists.
- **Repository evidence:** `config/status-vocabulary.config.js; NITDA Email Template Library/deploy/nitda-dp-04-request-for-information.html; deployed-flow trigger census`

### RN-003: Approved decision issued

- **Audience:** Citizen
- **State:** Absent
- **Severity:** Critical
- **Evidence conclusion:** Portal says outcome was emailed; no status-change carrier exists.
- **Repository evidence:** `document-portal/js/data.js:58; document-portal/index.html:111; config/status-vocabulary.config.js`

### RN-004: Declined decision issued

- **Audience:** Citizen
- **State:** Absent
- **Severity:** Critical
- **Evidence conclusion:** Decision template can represent decline, but no status-change carrier exists.
- **Repository evidence:** `config/status-vocabulary.config.js; NITDA Email Template Library/deploy/nitda-dp-05-decision-issued.html`

### RN-005: Citizen withdraws submission

- **Audience:** Citizen
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Withdrawn status exists; no closure-receipt carrier is evidenced.
- **Repository evidence:** `config/status-vocabulary.config.js; deployed-flow trigger census`

### RN-006: Citizen requests verification code

- **Audience:** Citizen
- **State:** Misaddressed
- **Severity:** Critical
- **Evidence conclusion:** Deployed Portal_Verify generation path sends the code to dgsregistry@nitda.gov.ng.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/Portal_Verify__86897b2f-9770-4efa-8486-2642f24bb947__full_definition.json`

### RN-007: Support case opened

- **Audience:** Citizen
- **State:** Provisioned
- **Severity:** Info
- **Evidence conclusion:** Support package dynamically resolves citizen email, sends acknowledgement, and writes receipt evidence; live delivery remains unverified.
- **Repository evidence:** `deployment/sharepoint/flows/designer-paste/Portal_SUPPORT_ECM_DOCS.designer-paste.json`

### RN-008: Support case answered or closed

- **Audience:** Citizen
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Support creation acknowledgement exists; no later answer or closure mail carrier exists.
- **Repository evidence:** `document-portal/js/support.js:95,172; deployment/sharepoint/flows/designer-paste/Portal_SUPPORT_ECM_DOCS.designer-paste.json`

### RN-009: Record assigned to one officer

- **Audience:** Assignee
- **State:** Regression
- **Severity:** Critical
- **Evidence conclusion:** Deployed flow sends dynamically; replacement package contains no mail action.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/Deployed - Create Task__b9d07010-1d98-417c-ad97-a305af770772__full_definition.json; deployment/internal/flows/designer-paste/DGO_SINGLE_ASSIGNMENT.designer-paste.json`

### RN-010: Records assigned in bulk

- **Audience:** Assignee
- **State:** Misaddressed
- **Severity:** Critical
- **Evidence conclusion:** Bulk assignment sends use fixed personal or registry addresses; replacement contains no mail action.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/Bulk Assign Direct__57f137b6-5cab-7991-4084-20605a3a9d43__full_definition.json; docs/reference/flow-contracts/deployed/optimized Bulk Assign Direct__9e098918-9ef7-013f-321a-f2604316ea6f__full_definition.json`

### RN-011: Supporting unit named

- **Audience:** Supporting assignee
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Cascade resolves and stores supporting assignee, but no carrier consumes it.
- **Repository evidence:** `core/assignment-cascade.js; modules/single-assignment.js; deployment/internal/flows/designer-paste/DGO_SINGLE_ASSIGNMENT.designer-paste.json`

### RN-012: Reminder to acknowledge

- **Audience:** Assignee
- **State:** Local only
- **Severity:** High
- **Evidence conclusion:** Primary service is local state; backend is optional and no delivery operation is implemented.
- **Repository evidence:** `modules/acknowledgment.js; config/action-ownership.config.js`

### RN-013: Acknowledgement clock expires

- **Audience:** Owner
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Deadline is stored and evaluated on view; no autonomous scheduled reader exists.
- **Repository evidence:** `modules/acknowledgment.js; deployed-flow trigger census`

### RN-014: Due date breached

- **Audience:** Owner
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Breach is calculated when FastTrack or executive UI renders; no scheduled carrier exists.
- **Repository evidence:** `modules/fasttrack.js; modules/executive.js`

### RN-015: Operator notifies record owner

- **Audience:** Owner
- **State:** Local only
- **Severity:** High
- **Evidence conclusion:** Action is declared but has no implemented dynamic operation or mail carrier.
- **Repository evidence:** `modules/fasttrack.js; config/module-boundaries.config.js; deployment/internal/flows/designer-paste/DGO_DYNAMIC_GLOBAL_ACTIONS.designer-paste.json`

### RN-016: Officer requests sign-in code

- **Audience:** Assignee
- **State:** Misaddressed
- **Severity:** Critical
- **Evidence conclusion:** Deployed OTP generation paths send to registry mailbox.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/Web - OTP Generate__a03d0ae8-a106-4aee-9985-d73ea7997653__full_definition.json; docs/reference/flow-contracts/deployed/Web - OTP Verify__3e201620-f1e8-4c17-a90a-4d95b94a24c2__full_definition.json`

### RN-017: Record awaits approval

- **Audience:** Approver
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Pending approvals and template exist; no approval-request carrier or change trigger exists.
- **Repository evidence:** `modules/approvals.js; NITDA Email Template Library/deploy/nitda-ip-08-approval-decision-request.html`

### RN-018: Approval decided or returned

- **Audience:** Originator
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** State can change, but no originator notification carrier is evidenced.
- **Repository evidence:** `modules/approvals.js; core/lifecycle.js`

### RN-019: Record reassigned

- **Audience:** New and previous holder
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Reassignment updates state; replacement has no mail action and no change trigger exists.
- **Repository evidence:** `modules/single-assignment.js; deployment/internal/flows/designer-paste/DGO_SINGLE_ASSIGNMENT.designer-paste.json`

### RN-020: Comment added to shared reference

- **Audience:** Assignee
- **State:** Absent
- **Severity:** Medium
- **Evidence conclusion:** Comments are stored and displayed; no alert carrier exists.
- **Repository evidence:** `modules/comments.js; modules/activities.js`

### RN-021: Officer sends outward correspondence

- **Audience:** Correspondent
- **State:** Misaddressed
- **Severity:** Critical
- **Evidence conclusion:** All three sends in Web - Send Email use dgsRegistry@nitda.gov.ng as To.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/Web - Send Email__e5e2c6a2-52ea-2ba8-b0b3-60f25d43387f__full_definition.json`

### RN-022: Approved response dispatched

- **Audience:** Correspondent
- **State:** Unimplemented
- **Severity:** Critical
- **Evidence conclusion:** Dispatch is known but absent from implemented switch and follows explicit 501 path.
- **Repository evidence:** `deployment/internal/flows/designer-paste/DGO_DYNAMIC_GLOBAL_ACTIONS.designer-paste.json`

### RN-023: Dispatch fails

- **Audience:** Originator/operator
- **State:** Provisioned
- **Severity:** Info
- **Evidence conclusion:** Governance and error handling provide operator-facing failure information; external delivery is not implied.
- **Repository evidence:** `core/errors.js; core/action-runtime.js`

### RN-024: Report or statistics email

- **Audience:** Chosen recipients
- **State:** Misaddressed
- **Severity:** High
- **Evidence conclusion:** Client builds recipient list; deployed email carrier sends to registry mailbox.
- **Repository evidence:** `modules/statistics.js; docs/reference/flow-contracts/deployed/Web - Send Email__e5e2c6a2-52ea-2ba8-b0b3-60f25d43387f__full_definition.json`

### RN-025: Flow-run record captured

- **Audience:** Registry operations
- **State:** Regression
- **Severity:** High
- **Evidence conclusion:** Deployed upload and writeback mail telemetry; replacement packages omit it.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/CG_Upload_Endpoint__df7ddff1-9275-4f23-acf6-e169525f4e2f__full_definition.json; docs/reference/flow-contracts/deployed/CG_Writeback_Endpoint__21d4bfd3-f595-46fa-81bb-c29dabc12e7a__full_definition.json`

### RN-026: Outbound citizen message fails

- **Audience:** Administrator
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Receipt writers exist, but no reader or administrator alert carrier was found.
- **Repository evidence:** `deployment/sharepoint/flows/designer-paste/Portal_SUPPORT_ECM_DOCS.designer-paste.json; deployment/sharepoint/flows/designer-paste/Portal_VERIFY_ECM_DOCS.designer-paste.json`

### RN-027: Failed outbound message retried

- **Audience:** Citizen
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** No scheduled production flow reads failed mail receipts and retries delivery.
- **Repository evidence:** `deployed-flow trigger census; deployment/sharepoint/PORTAL_DATA_CONTRACT.md`

### RN-028: Provisioning run completes

- **Audience:** Administrator
- **State:** Provisioned
- **Severity:** Info
- **Evidence conclusion:** Caller-provided AdminEmail is included, but fixed personal recipient is appended.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/Global_Gap_Remediation_Provisioning__3f96478b-117f-4d70-aa09-668c121e084d__full_definition.json`

### RN-029: Scanned document deposited

- **Audience:** Registry mailbox
- **State:** Provisioned
- **Severity:** Info
- **Evidence conclusion:** Deposit message is addressed to configured intake/support mailbox; live delivery unverified.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/DGSO INCOMING AI PROCESSING__b6d92bae-591e-fa1e-52eb-b350cad988a7__full_definition.json`

### RN-030: Governed action fails

- **Audience:** Operator
- **State:** Provisioned
- **Severity:** Info
- **Evidence conclusion:** Central error and action runtime provide operator feedback.
- **Repository evidence:** `core/errors.js; core/action-runtime.js`

### RN-031: Successful action remains findable

- **Audience:** Operator
- **State:** Provisioned
- **Severity:** Info
- **Evidence conclusion:** Device-local notification center retains operator notices.
- **Repository evidence:** `core/notification-center.js`

### RN-032: Write held on device

- **Audience:** Operator
- **State:** Provisioned
- **Severity:** Info
- **Evidence conclusion:** Offline queues and UI explain that work is held locally.
- **Repository evidence:** `core/offline-action-queue.js; document-portal/js/core.js`

### RN-033: Code requested by SMS

- **Audience:** Assignee
- **State:** Unimplemented
- **Severity:** Medium
- **Evidence conclusion:** SMS is represented in interface or contract vocabulary, but no SMS connector or carrier exists.
- **Repository evidence:** `config/auth.config.js; deployed-flow connector census`

### RN-034: Escalation raised

- **Audience:** Owner
- **State:** Local only
- **Severity:** High
- **Evidence conclusion:** Escalation records and UI exist; no delivery operation or scheduled carrier exists.
- **Repository evidence:** `modules/fasttrack.js; config/action-ownership.config.js`

### RN-035: Task reminder falls due

- **Audience:** Assignee
- **State:** Local only
- **Severity:** Medium
- **Evidence conclusion:** Reminder time is stored locally; no due-time reader exists.
- **Repository evidence:** `modules/orchestrator.js:55-68`

### RN-036: Executive delegates record

- **Audience:** Assignee
- **State:** Absent
- **Severity:** High
- **Evidence conclusion:** Delegation updates assignment state; no corresponding notification carrier exists.
- **Repository evidence:** `modules/executive.js; modules/single-assignment.js; config/action-ownership.config.js`

### RN-037: New submission requires pickup

- **Audience:** Administrator
- **State:** Misaddressed
- **Severity:** High
- **Evidence conclusion:** Three deployed sends go to a named person; revised submission/upload packages provide no corrected pickup carrier.
- **Repository evidence:** `docs/reference/flow-contracts/deployed/Portal_UPLOAD_ECM_DOCS__ae4b2a44-2388-42c7-baaf-86de3d6fa664__full_definition.json; docs/reference/flow-contracts/deployed/UPLOAD_ECM_DOCS_PORTAL__9bd6724c-5a8f-4e74-9d3e-3c1eeaef2d06__full_definition.json; docs/reference/flow-contracts/deployed/Web - Task Update__811af8bf-daaa-452c-ba71-9676fe037c0b__full_definition.json`

### RN-038: Copy-to and inform list resolved

- **Audience:** Copy/inform recipients
- **State:** Absent
- **Severity:** Medium
- **Evidence conclusion:** Cascade resolves up to several inform recipients, but no carrier consumes ccRecipients.
- **Repository evidence:** `core/assignment-cascade.js; modules/single-assignment.js`

## Release decision

**NO-GO for wholesale replacement.** Correct recipient routing, preserve regressions, implement dispatch and scheduled processing, verify the Outlook service identity, repair procedural traceability, and complete tenant-side end-to-end acceptance before production replacement.

## Runtime evidence still required

- Active tenant flow inventory and enabled state
- Endpoint-to-flow routing
- Outlook connection account and send-as authority
- Received-message evidence in tester-controlled mailboxes
- Failure, bounce, retry, and quarantine results
- Live-client rendering and accessibility results
- Rollback execution evidence
