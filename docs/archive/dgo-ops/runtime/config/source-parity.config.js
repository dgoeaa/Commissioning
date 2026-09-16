// Source SPA legacy workflow parity map extracted from NITDA_Digital_Ops_Hub_patched.html.
// These aliases preserve safe recognition of previous direct Power Automate calls while routing through governed contracts.
export const LegacyWorkflowEndpointMap = Object.freeze({
  'ff455c68e9ac493e858fb984bcfd01fb': { endpointKey:'REFERENCE_DATA', shellEndpointId:'E01', schemaId:'S02_get-references-lookup-schema', purpose:'reference lookup' },
  '818ec4053f1e4f0b87845114241d8b74': { endpointKey:'GET_DOCS', shellEndpointId:'E02', schemaId:'S01_get-docs-flow-trigger-schema', purpose:'get documents' },
  '37642ba3597f4cf58288cc71b5e6b519': { endpointKey:'FETCH_ACTIVITIES', shellEndpointId:'E03', schemaId:'S04_get-tasks-flow-schema', purpose:'get tasks legacy' },
  '3931e2ff995242b6b2c920c8b2209797': { endpointKey:'SUBSIDIARY_ACTIONS', shellEndpointId:'E04', schemaId:'S03_get-emails-flow-trigged-schema', purpose:'get emails legacy' }
});
export function legacyWorkflowForUrl(url=''){
  const text=String(url||'');
  const id=Object.keys(LegacyWorkflowEndpointMap).find(k=>text.includes(k));
  return id ? Object.freeze({ workflowId:id, ...LegacyWorkflowEndpointMap[id] }) : null;
}
export const SourceParityRuntimeContracts = Object.freeze({
  outboundEmailGuard: { provisioned:true, route:'correspondence-email', ownerModule:'correspondence-email', endpointAlias:'EMAIL', allowedActions:['create-correspondence-email-draft','send-correspondence-email','duplicate-correspondence-email','archive-correspondence-email'], disabledActions:[], userMessage:'Outbound official correspondence is governed through the Correspondence Email Desk.' },
  responseTrackingPairs: { enabled:true, matchKeys:['referenceId','subject','conversationId','internetMessageId'], exportCsv:true },
  loadMorePagination: { enabled:true, defaultPageSize:50, visibleCountLabel:true, preserveSelection:true },
  shellBridge: { requiresConfirmationForWrites:true, requiresPreviewForInputWrites:true, publishTopic:'data:updated' }
});
