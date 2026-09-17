# Pending Work Register

Repository implementation is complete. The work below requires tenant access, institutional decisions, operational evidence or approval.

## P-01 Authoritative baseline
Capture the production environment, commit, active flow inventory, enabled state, owners, triggers, connection references and endpoint mappings.

## P-02 Agency decisions
Approve administrator and intake targets, recurrence frequency, retry attempts and delays, claim expiry, concurrency, previous-holder reassignment policy, comment audiences, and the Accepted and Archived public mappings.

## P-03 Outlook service identity
Verify the authenticated account, send-as or send-on-behalf authority, internal and external delivery, rejection behaviour, message traces and reply routing.

## P-04 Recipient containment
Correct citizen verification, officer OTP, bulk assignment, official correspondence, report/statistics and intake recipients. Remove personal fixed dependencies and the empty action.

## P-05 Regression protection
Prove RN-009 survives replacement. Preserve RN-025 until structured telemetry is operational and searchable.

## P-06 Immediate carriers
Implement submission acknowledgement, support response/closure, assignment, supporting assignee, intake alert, official correspondence, report delivery and copy/inform delivery.

## P-07 Lifecycle carriers
Implement action-required, approved, declined, withdrawal, approval request/result, reassignment, delegation and shared-reference comment notifications.

## P-08 Dispatch
Implement authorized dispatch and dispatchoutbound behaviour instead of the 501 path, including final-document selection, recipient validation, attachments, reference, evidence and failure handling.

## P-09 Scheduled processor
Build and deploy the approved recurrence processor for expiry, breach, reminder, escalation, failed-send processing, retry and permanent-failure alerting.

## P-10 Portal and status decisions
Approve ambiguous status mappings. Keep workflow state, send attempt and delivery evidence separate. Retest all corrected portal wording.

## P-11 Template acceptance
Verify mandatory tokens, recipient validation, Agency-hosted assets, Outlook/Gmail/mobile rendering, accessibility, dark mode, images disabled, long content, row batches and sanitization.

## P-12 Telemetry and privacy
Decide and implement the disposition of read-response email, AI-result email, duplicate audit email and payload telemetry. Approve retention, access, redaction and data-minimization controls.

## P-13 Procedures and readiness
Use the corrected walkthrough, close ITEM-38 through ITEM-42, and ensure every document reference resolves.

## P-14 Security and resilience
Test invalid recipients, unauthorized callers, connector failure, bounce, quarantine, retry, duplicate events, concurrent execution, crash recovery and idempotency.

## P-15 Cutover and rollback
Populate the cutover register, export and hash old flows, rehearse rollback, reconcile in-flight work, retire superseded flows only after proof, and preserve rollback for the approved period.

## P-16 Hypercare
Assign named business and technical owners, daily review, message-trace access, emergency correction, incident severity, escalation route and exit criteria.

## P-17 Risk and authorization
Create one risk-acceptance record for every unresolved row and complete the production authorization record only when release gates are met.

## Completion command

```bash
npm run tenant:validate -- --strict
```

Production is ready only when the command returns `ready: true` with no errors or blocked items.
