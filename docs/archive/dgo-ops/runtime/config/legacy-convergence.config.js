export const LegacyConvergenceConfig = Object.freeze({
  schema: 'dgo-legacy-convergence/v1',
  sourcePackage: 'taskack-page-gd',
  adopted: Object.freeze([
    'deep-link acknowledgement parser',
    'offline acknowledgement queue',
    'receipt ledger export',
    'contextual support drawer',
    'assignment draft/preview convergence hooks',
    'admin deep-link inspector',
    'endpoint alias abstraction'
  ]),
  notAdoptedDirectly: Object.freeze([
    'raw Power Automate URLs from legacy files',
    'retired standalone page chrome',
    'external CDN runtime dependencies',
    'duplicate theme systems'
  ])
});
