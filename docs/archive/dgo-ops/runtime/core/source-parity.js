import { legacyWorkflowForUrl, SourceParityRuntimeContracts } from '../config/source-parity.config.js';
import { endpointContract } from '../config/endpoints.config.js';
export function resolveLegacyPowerAutomateUrl(url){
  const match = legacyWorkflowForUrl(url);
  if (!match) return null;
  const contract = endpointContract(match.endpointKey);
  return Object.freeze({ ...match, contract, governed:true, requiresConfirmation:!!contract?.write, requiresPreview:!!contract?.write });
}
export function assertOutboundEmailProvisioned(action){
  const guard=SourceParityRuntimeContracts.outboundEmailGuard;
  const allowed = Array.isArray(guard.allowedActions) ? guard.allowedActions : [];
  const disabled = Array.isArray(guard.disabledActions) ? guard.disabledActions : [];
  if (disabled.includes(action)) {
    return { ok:false, provisioned:!!guard.provisioned, action, route:guard.route, ownerModule:guard.ownerModule, endpointAlias:guard.endpointAlias, message:guard.userMessage };
  }
  return { ok:true, provisioned:!!guard.provisioned, action, route:guard.route, ownerModule:guard.ownerModule, endpointAlias:guard.endpointAlias, governed:allowed.includes(action) };
}
export function buildDocEmailPairs(documents=[], emails=[]){
  const norm=v=>String(v||'').toLowerCase().replace(/[^a-z0-9]/g,'');
  const pairs=[];
  for (const d of documents) {
    const ref=norm(d.referenceId||d.ref||d.RefIDD||d.Reference_ID||d.title);
    if (!ref) continue;
    for (const e of emails) {
      const hay=norm([e.referenceId,e.subject,e.conversationId,e.internetMessageId,e.preview].filter(Boolean).join(' '));
      if (hay && hay.includes(ref)) pairs.push({ document:d, email:e, match:'referenceId', confidence:0.9 });
    }
  }
  return pairs;
}
export function pageSlice(items=[], page=1, pageSize=SourceParityRuntimeContracts.loadMorePagination.defaultPageSize){
  const p=Math.max(1, Number(page)||1); const s=Math.max(1, Number(pageSize)||50);
  const visible=items.slice(0, p*s);
  return { visible, total:items.length, shown:visible.length, hasMore:visible.length<items.length, label:`Showing ${visible.length} of ${items.length}` };
}
