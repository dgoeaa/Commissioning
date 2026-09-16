export const ProductCharter = Object.freeze({
  "name": "DGO Digital OPS",
  "coordinator": "Office of the Director-General/CEO",
  "ingestionSourceCount": 4,
  "purpose": "single point of access, registry/minutes, assignment, lifecycle tracking and related DGCEO operations management",
  "noDeferredActions": true
});
export const IngestionSources = Object.freeze([
  {
    "id": "physical-scanned-documents",
    "label": "Physical Documents Received and Scanned",
    "description": "Hard-copy official documents received by the Agency and digitised for registry, minutes, assignment, tracking and closure.",
    "entryWorkspace": "Intake",
    "mustSupport": [
      "scan ingestion",
      "registry capture",
      "minute trail",
      "document-to-task assignment",
      "tracking",
      "archive"
    ]
  },
  {
    "id": "customer-service-emails",
    "label": "Customer Service Emails",
    "description": "Emails received through customer service that require intake, escalation, task assignment, response tracking or closure.",
    "entryWorkspace": "Intake / Assignment Desk",
    "mustSupport": [
      "email ingestion",
      "email-to-task",
      "customer response tracking",
      "attachments",
      "SLA monitoring"
    ]
  },
  {
    "id": "public-portal-correspondence",
    "label": "Public Portal Submissions",
    "description": "Correspondence and submissions received through public-facing digital portals.",
    "entryWorkspace": "Intake",
    "mustSupport": [
      "portal ingestion",
      "classification",
      "assignment",
      "status tracking",
      "response closure"
    ]
  },
  {
    "id": "dgceo-outgoing-correspondence",
    "label": "DGCEO Outgoing Correspondence",
    "description": "Outgoing directives, letters, approvals, responses and minutes issued by or on behalf of the DGCEO.",
    "entryWorkspace": "Dispatch & Archive / Intake",
    "mustSupport": [
      "outgoing registry",
      "dispatch",
      "task follow-up",
      "decision trace",
      "archive bundle"
    ]
  }
]);
export const UserRoleCapabilities = Object.freeze([
  {
    "id": "odg",
    "label": "Office of the Director-General",
    "persona": "registry/admin",
    "coreNeeds": [
      "single operational view",
      "registry/minutes",
      "assignment control",
      "DGCEO oversight"
    ]
  },
  {
    "id": "dgceo",
    "label": "Director-General/CEO",
    "persona": "executive",
    "coreNeeds": [
      "executive decisions",
      "approval visibility",
      "task/operation oversight",
      "escalation review"
    ]
  },
  {
    "id": "ea-automation",
    "label": "Executive Assistant / Automation Support to the DGCEO",
    "persona": "admin/registry",
    "coreNeeds": [
      "automation monitoring",
      "workflow coordination",
      "assignment support",
      "reporting"
    ]
  },
  {
    "id": "hod-units",
    "label": "Heads of Departments and Units",
    "persona": "director/operator",
    "coreNeeds": [
      "receive assigned work",
      "delegate internally",
      "report progress",
      "respond to DGCEO office"
    ]
  },
  {
    "id": "customer-service",
    "label": "Customer Service",
    "persona": "operator",
    "coreNeeds": [
      "email intake",
      "portal/customer response routing",
      "status updates",
      "customer evidence"
    ]
  },
  {
    "id": "staff",
    "label": "Staff",
    "persona": "general/operator",
    "coreNeeds": [
      "acknowledge tasks",
      "execute work",
      "comment",
      "complete assigned tasks"
    ]
  },
  {
    "id": "it",
    "label": "IT Department",
    "persona": "systemAdmin",
    "coreNeeds": [
      "configuration",
      "endpoint health",
      "user support",
      "diagnostics"
    ]
  }
]);
export const EndToEndLifecycle = Object.freeze([
  {
    "step": 1,
    "name": "Ingest",
    "label": "Ingest",
    "workspace": "Intake & Assignment",
    "description": "Receive or locate a matter from physical scanned documents, customer service email, public portal correspondence, or DGCEO outgoing correspondence."
  },
  {
    "step": 2,
    "name": "Register",
    "label": "Register",
    "workspace": "Intake & Assignment",
    "description": "Create or confirm official registry reference, custody and source evidence."
  },
  {
    "step": 3,
    "name": "Minute / Classify",
    "label": "Minute / Classify",
    "workspace": "Intake & Assignment",
    "description": "Record digital-traditional minutes, classify category, priority and routing readiness."
  },
  {
    "step": 4,
    "name": "Assign",
    "label": "Assign",
    "workspace": "Assignment Desk",
    "description": "Create governed assignment/task from any ingestion source with preview, confirmation and audit."
  },
  {
    "step": 5,
    "name": "Acknowledge / Act",
    "label": "Acknowledge / Act",
    "workspace": "My Work / Departmental Work",
    "description": "Departments, Units, Service Points and Staff acknowledge, progress, comment and complete work."
  },
  {
    "step": 6,
    "name": "Track",
    "label": "Track",
    "workspace": "Tracking & Monitoring",
    "description": "Monitor SLA, ageing, matched evidence, response status and overall operational lifecycle."
  },
  {
    "step": 7,
    "name": "Review / Approve",
    "label": "Review / Approve",
    "workspace": "Review & Approval",
    "description": "Review, return, reject, approve or escalate for DGCEO/executive decision."
  },
  {
    "step": 8,
    "name": "Dispatch",
    "label": "Dispatch",
    "workspace": "Dispatch & Archive",
    "description": "Dispatch outgoing response, directive or no-dispatch decision and capture receipt."
  },
  {
    "step": 9,
    "name": "Close",
    "label": "Close",
    "workspace": "Dispatch & Archive",
    "description": "Apply closure gate, completion evidence and final state."
  },
  {
    "step": 10,
    "name": "Archive",
    "label": "Archive",
    "workspace": "Dispatch & Archive",
    "description": "Create preserved archive bundle and searchable operational history."
  }
]);
export const ProductWorkspaces = Object.freeze([
  {
    "route": "home",
    "label": "Command Center",
    "purpose": "Single DGCEO operational control point showing matters, risks and next actions across all sources."
  },
  {
    "route": "correspondence",
    "label": "Intake & Assignment",
    "purpose": "Capture, register, classify and minute all matters from the four ingestion sources."
  },
  {
    "route": "single-assignment",
    "label": "Assignment Desk",
    "purpose": "Create governed tasks from documents, emails, portal submissions and DGCEO outgoing correspondence."
  },
  {
    "route": "orchestrator",
    "label": "My Work / Departmental Work",
    "purpose": "Allow Departments, Units, Service Points and Staff to act on assigned tasks."
  },
  {
    "route": "response-tracking",
    "label": "Tracking & Monitoring",
    "purpose": "Track end-to-end lifecycle, SLA, response evidence, ageing and matched matters."
  },
  {
    "route": "approvals",
    "label": "Review & Approval",
    "purpose": "Support formal review, return, reject, approval and DGCEO/executive decision trace."
  },
  {
    "route": "dispatch",
    "label": "Dispatch & Archive",
    "purpose": "Send/no-dispatch, capture receipt, close and archive the operational record."
  },
  {
    "route": "settings",
    "label": "Administration",
    "purpose": "Manage users, roles, endpoints, diagnostics, configuration and system health."
  }
]);
export function ingestionSource(id){ return IngestionSources.find(s=>s.id===id) || null; }
export function productWorkspace(route){ return ProductWorkspaces.find(w=>w.route===route) || null; }
