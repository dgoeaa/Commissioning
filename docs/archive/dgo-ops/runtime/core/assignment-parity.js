import { AppConfig } from '../config/app.config.js';
import { normalizePriority } from '../config/priority.config.js';

const clean = value => String(value ?? '').trim();
const arr = value => Array.isArray(value) ? value.filter(Boolean).map(v => typeof v === 'object' ? v : { value: clean(v) }) : [];

export function buildSingleAssignmentPayload(input = {}) {
  const ref = clean(input.referenceId || input.ref || input.RefIDD || input.Reference_ID);
  const assignee = input.assignee || input.assignedTo || {};
  const payload = {
    operation: 'singleassignment',
    assignmentType: clean(input.assignmentType || 'newassignment'),
    referenceId: ref,
    title: clean(input.title || input.subject || input.activityTitle),
    category: clean(input.category),
    subcategory: clean(input.subcategory || input.subCategory),
    categoryCode: clean(input.categoryCode || input.catCode),
    assignee: typeof assignee === 'object' ? assignee : { email: clean(assignee) },
    coAssignees: arr(input.coAssignees || input.coAssignee || input.supportingAssignees),
    cc: arr(input.cc || input.ccRecipients),
    priority: normalizePriority(input.priority || 'normal'),
    actionRequired: clean(input.actionRequired || input.actionReq),
    comments: clean(input.comments || input.notes),
    startDate: clean(input.startDate),
    ackDue: clean(input.ackDue || input.ackDueDate),
    source: clean(input.source || 'assignment'),
    previewRequired: true,
    confirmationRequired: true
  };
  return Object.freeze(payload);
}

export function validateSingleAssignmentPayload(payload = {}) {
  const errors = [];
  if (!clean(payload.referenceId)) errors.push('referenceId is required');
  const email = clean(payload.assignee?.email || payload.assignee?.value || payload.assignee?.id);
  if (!email) errors.push('assignee is required');
  if (!clean(payload.category)) errors.push('category is required');
  if (!clean(payload.actionRequired)) errors.push('actionRequired is required');
  return Object.freeze({ ok: errors.length === 0, errors });
}

export function buildBulkAssignmentPayload(input = {}) {
  const refs = Array.from(new Set((input.referenceIds || input.refs || []).map(clean).filter(Boolean)));
  const max = AppConfig.maxBulkAssign;
  const items = refs.slice(0, max).map(referenceId => buildSingleAssignmentPayload({ ...input, referenceId, source: 'bulk-assignment' }));
  const overflow = refs.slice(max);
  return Object.freeze({
    operation: 'bulkassignment',
    maxBulkAssign: max,
    items,
    overflow,
    count: items.length,
    rejectedCount: overflow.length,
    otpRequired: true,
    idempotencyRequired: true,
    partialResultsRequired: true,
    previewRequired: true,
    confirmationRequired: true
  });
}

export function validateBulkAssignmentPayload(payload = {}) {
  const errors = [];
  if (!Array.isArray(payload.items) || payload.items.length === 0) errors.push('at least one assignment item is required');
  if ((payload.items || []).length > AppConfig.maxBulkAssign) errors.push(`bulk assignment exceeds cap ${AppConfig.maxBulkAssign}`);
  (payload.items || []).forEach((item, index) => {
    const v = validateSingleAssignmentPayload(item);
    if (!v.ok) errors.push(`item ${index + 1}: ${v.errors.join('; ')}`);
  });
  return Object.freeze({ ok: errors.length === 0, errors });
}

export function buildEmailTaskPayload(input = {}) {
  const email = input.email || {};
  const assignment = buildSingleAssignmentPayload({
    ...input,
    referenceId: input.referenceId || email.referenceId || email.internetMessageId || email.id,
    title: input.title || email.subject,
    source: 'email-to-task'
  });
  return Object.freeze({
    operation: 'emailtotaskassignment',
    endpointKey: 'EMAIL_RELATED_TASK',
    email: {
      id: clean(email.id),
      internetMessageId: clean(email.internetMessageId),
      conversationId: clean(email.conversationId),
      subject: clean(email.subject),
      from: clean(email.from || email.sender),
      receivedDateTime: clean(email.receivedDateTime || email.date),
      hasAttachments: !!email.hasAttachments
    },
    assignment,
    previewRequired: true,
    confirmationRequired: true
  });
}

export function validateEmailTaskPayload(payload = {}) {
  const errors = [];
  if (!clean(payload.email?.id || payload.email?.internetMessageId || payload.email?.conversationId)) errors.push('email reference is required');
  const v = validateSingleAssignmentPayload(payload.assignment || {});
  if (!v.ok) errors.push(...v.errors);
  return Object.freeze({ ok: errors.length === 0, errors });
}

export function redactAssignmentPayload(payload = {}) {
  const copy = JSON.parse(JSON.stringify(payload));
  const redact = obj => {
    if (!obj || typeof obj !== 'object') return;
    for (const [k,v] of Object.entries(obj)) {
      if (/email|from|sender/i.test(k) && typeof v === 'string') obj[k] = v.replace(/^(.{2}).*(@.*)?$/, '$1***$2');
      else if (typeof v === 'object') redact(v);
    }
  };
  redact(copy);
  return Object.freeze(copy);
}
