# NITDA DGO / ECM_DOCS_DEV Notification-Estate Final Execution Summary

**Evidence basis:** Supplied four-batch repository intake  
**Assessment status:** Repository analysis complete; tenant validation outstanding  
**Release decision:** **NO-GO for wholesale production replacement**

## Executive decision

The supplied repository independently supports the central notification assessment. The estate contains 38 identifiable notification obligations: 7 are provisioned at source level, 17 lack a carrier, 6 are misaddressed, 4 remain local to browser or application state, 2 replacement packages remove deployed capabilities, and 2 advertised operations are unimplemented.

The revised endpoint packages should not be deployed together in their current form. A controlled remediation programme is required, beginning with recipient correction and regression containment, followed by missing event carriers, one governed scheduled processor, telemetry rationalization, and tenant-side acceptance.

## Verified measures

- 60 deployed full-flow definitions
- 76 Outlook mail actions across 41 flows
- 4 dynamic-recipient-only mail actions
- 2 dynamic-plus-fixed-recipient actions
- 69 populated literal-recipient actions
- 1 mail action with no recipient and no subject
- 59 Request triggers
- 1 OpenAPI/OneDrive-connected trigger
- 0 recurrence triggers
- 0 SharePoint item-created or item-modified triggers

## Reconstructed notification distribution

| State | Count |
|---|---:|
| Provisioned | 7 |
| Absent | 17 |
| Misaddressed | 6 |
| Local only | 4 |
| Regression | 2 |
| Unimplemented | 2 |
| **Total** | **38** |

## Confirmed blockers

1. Citizen verification-code generation can send to the registry mailbox rather than the requesting citizen.
2. Officer OTP generation contains the same fixed-recipient defect.
3. Bulk-assignment notifications use fixed recipients.
4. Official outward correspondence discards the intended recipient.
5. The single-assignment replacement removes an existing assignee notification.
6. Upload and writeback replacements remove existing telemetry-mail paths.
7. Submission and status packages do not carry the messages promised by the portal.
8. Dispatch is known but unimplemented and follows an explicit 501 path.
9. No scheduled mechanism processes expiry, breach, reminder, escalation, failure, or retry events.
10. The Outlook connection identity and send-as authority are not proven by repository evidence.
11. The operator walkthrough conflicts with the execution guide on mail connection wiring.
12. Four walkthrough readiness references do not exist in the supplied readiness register.
13. The claimed notification-matrix implementation is absent from the supplied source baseline.
14. Live mailbox delivery, bounce handling, client rendering, endpoint routing, and rollback remain unverified.

## Required implementation sequence

### Release 0: containment

- Verify the Outlook service identity and permissions.
- Correct citizen and officer OTP recipients.
- Remove personal-recipient dependencies.
- Remove the empty mail action.
- Preserve the existing single-assignment notification.
- Preserve run-record capture until structured telemetry is proven.
- Resolve duplicate verification-flow ownership.
- Correct operator documentation and readiness references.

### Release 1: immediate carriers

Implement or correct submission acknowledgement, assignment, bulk assignment, supporting-assignee notification, portal intake alert, official correspondence, report delivery, support closure, and copy/inform audiences.

### Release 2: lifecycle carriers

Implement action-required, approved, declined, withdrawn, approval request, approval result or return, reassignment, delegation, and comment notifications.

### Release 3: governed scheduled processor

Implement one recurrence flow for acknowledgement expiry, due-date breach, reminders, escalations, failed-send processing, bounded retry, and permanent-failure alerting. Apply idempotency, locking, recipient validation, duplicate prevention, failure classification, and audit evidence.

### Release 4: telemetry rationalization

Stop emailing complete read-response payloads unless formally authorized. Remove AI diagnostic mail and duplicate personal audit mail. Replace email telemetry with structured, access-controlled telemetry where appropriate.

### Release 5: assurance and cutover

Add the notification requirements matrix, machine verifier, completeness tests, package regression tests, recipient tests, mandatory-token tests, corrected readiness items, live-client acceptance, rollback evidence, and formal production approval.

## Release gates

Production replacement must remain blocked until:

- All 10 critical rows are closed or formally risk-accepted.
- Verification codes reach tester-controlled requesting mailboxes.
- The Outlook connection uses the approved service identity.
- No required notification depends on one employee's mailbox.
- RN-009 and RN-025 survive replacement or receive proven equivalents.
- Portal wording matches actual delivery evidence.
- Official correspondence reaches its intended recipient.
- Failed mail is recorded, retried, and escalated.
- Duplicate verification flows are retired or governed.
- Browser and mailbox-client acceptance is complete.
- Operator instructions reference valid readiness items.
- Rollback is demonstrated.

## Runtime evidence still required

```text
Active tenant flow inventory and enabled state
Endpoint-to-flow routing
Outlook connection account and send-as authority
Current package deployment state
Received-message evidence
Bounce, quarantine, and retry results
External monitoring configuration
Live-client rendering and accessibility results
Browser end-to-end acceptance
Rollback execution evidence
```

## Final position

Proceed with remediation, not wholesale replacement. The correct first move is to contain recipient and regression risk. Missing carriers and scheduled processing should then be implemented behind explicit evidence gates. A successful flow run must never be treated as sufficient if the message went to the wrong recipient or was not received.
