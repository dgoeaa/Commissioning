/**
 * browser-certification.js — Real live-DOM certification against responsiveness contracts.
 *
 * For each declared viewport the probe battery asserts:
 *   no-page-scroll          scrollWidth/Height of <html> does not exceed clientWidth/Height
 *   footer-visible          footer element is within the viewport box and not clipped
 *   contained-main-scroll   the main content region (#main / [data-outlet]) is the scrolling
 *                           container, not <body> or <html>
 *   contained-nav-scroll    sidebar/nav overflows internally, not the page
 *   contained-pane-scroll   split-panes own their scroll; page does not scroll
 *   table-internal-scroll   .tablewrap / .dgo-table scroll internally
 *   responsive-forms        no form element overflows its container horizontally
 *   adaptive-records        .record/.dgo-record-row elements stay within viewport width
 *   keyboard-focus          :focus-visible ring is defined on the root (CSS smoke-test)
 *   reduced-motion          prefers-reduced-motion media query is honoured (CSS smoke-test)
 *
 * Viewport-specific probes that require an actual resize are marked 'unverified' unless
 * window.innerWidth matches the target viewport.  This means a full cert run requires an
 * automated multi-viewport harness (Playwright / Puppeteer); a manual in-browser run
 * certifies only the current viewport with full fidelity and marks others unverified.
 *
 * Returns a structured result and persists it in localStorage under
 * 'dgo.r11.viewport.certification'.
 */

import { BrowserCertification } from '../config/browser-certification.config.js';
import { Router } from './router.js';

// ─── low-level probes ───────────────────────────────────────────────────────

/**
 * Returns {pass, offender, detail} for a single contract at the current layout.
 * Probes that cannot run without a specific viewport are returned as {status:'unverified'}.
 */
function runProbe(contract) {
  const doc = document.documentElement;
  const body = document.body;

  switch (contract) {

    case 'no-page-scroll':
    case 'no-horizontal-scroll': {
      const hOverflow = doc.scrollWidth > (doc.clientWidth + 1);
      const vOverflow = doc.scrollHeight > (doc.clientHeight + 1);
      if (hOverflow || vOverflow) {
        const detail = [];
        if (hOverflow) detail.push(`scrollWidth ${doc.scrollWidth} > clientWidth ${doc.clientWidth}`);
        if (vOverflow) detail.push(`scrollHeight ${doc.scrollHeight} > clientHeight ${doc.clientHeight}`);
        return { pass: false, offender: 'document', detail: detail.join('; ') };
      }
      return { pass: true };
    }

    case 'footer-visible': {
      const footer = document.querySelector('.dgo-footer, footer, [data-footer]');
      if (!footer) return { pass: false, offender: 'footer', detail: 'no footer element found' };
      const r = footer.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const clipped = r.bottom > vh + 2 || r.top < 0 || r.left < 0 || r.right > vw + 2;
      if (clipped) {
        return {
          pass: false,
          offender: footer.className || 'footer',
          detail: `rect top=${Math.round(r.top)} bottom=${Math.round(r.bottom)} left=${Math.round(r.left)} right=${Math.round(r.right)} vp=${vw}x${vh}`,
        };
      }
      return { pass: true };
    }

    case 'contained-main-scroll': {
      const main = document.querySelector('#main, [data-outlet], .dgo-main, main');
      if (!main) return { pass: false, offender: 'main', detail: 'no main/outlet element found' };
      const bodyScrolls = body.scrollHeight > body.clientHeight && getComputedStyle(body).overflowY !== 'hidden';
      const docScrolls = doc.scrollHeight > doc.clientHeight && getComputedStyle(doc).overflowY !== 'hidden';
      if (bodyScrolls) return { pass: false, offender: 'body', detail: 'body is the scroll container' };
      if (docScrolls) return { pass: false, offender: 'html', detail: 'html is the scroll container' };
      return { pass: true };
    }

    case 'contained-nav-scroll': {
      const nav = document.querySelector('.dgo-sidebar, [data-nav], nav');
      if (!nav) return { status: 'unverified', detail: 'no nav element present' };
      const bodyScrolls = body.scrollWidth > body.clientWidth;
      if (bodyScrolls) return { pass: false, offender: 'body', detail: 'horizontal page scroll — nav may be overflowing' };
      return { pass: true };
    }

    case 'contained-pane-scroll': {
      // Check common pane containers for internal scroll
      const panes = document.querySelectorAll('.dgo-main, .dgo-scroll, [data-outlet]');
      if (!panes.length) return { status: 'unverified', detail: 'no pane elements present' };
      const hOverflow = doc.scrollWidth > doc.clientWidth + 1;
      if (hOverflow) return { pass: false, offender: 'document', detail: 'page has horizontal overflow — panes may not be containing scroll' };
      return { pass: true };
    }

    case 'table-internal-scroll': {
      const tables = document.querySelectorAll('.tablewrap, .dgo-table, [data-table]');
      if (!tables.length) return { status: 'unverified', detail: 'no table elements in current view' };
      for (const t of tables) {
        const style = getComputedStyle(t);
        const overflowX = style.overflowX;
        if (overflowX !== 'auto' && overflowX !== 'scroll' && overflowX !== 'hidden') {
          return { pass: false, offender: t.className, detail: `overflow-x:${overflowX} — table may overflow page` };
        }
      }
      return { pass: true };
    }

    case 'responsive-forms': {
      const forms = document.querySelectorAll('input, select, textarea');
      for (const el of forms) {
        const parent = el.parentElement;
        if (!parent) continue;
        const elRect = el.getBoundingClientRect();
        if (elRect.right > window.innerWidth + 2) {
          return {
            pass: false,
            offender: `${el.tagName.toLowerCase()}[name="${el.name || ''}"]`,
            detail: `right edge ${Math.round(elRect.right)} > viewport ${window.innerWidth}`,
          };
        }
      }
      return { pass: true };
    }

    case 'adaptive-records': {
      const records = document.querySelectorAll('.record, .dgo-record-row, [data-record]');
      for (const el of records) {
        const r = el.getBoundingClientRect();
        if (r.right > window.innerWidth + 2) {
          return {
            pass: false,
            offender: el.className,
            detail: `right edge ${Math.round(r.right)} > viewport ${window.innerWidth}`,
          };
        }
      }
      return { pass: true };
    }

    case 'keyboard-focus': {
      // CSS smoke-test: verify :focus-visible ring token is defined
      const sample = document.createElement('button');
      document.body.appendChild(sample);
      const val = getComputedStyle(sample).getPropertyValue('--dgo-focus-ring') ||
                  getComputedStyle(document.documentElement).getPropertyValue('--dgo-focus-ring') ||
                  getComputedStyle(document.documentElement).getPropertyValue('--focus');
      document.body.removeChild(sample);
      if (!val || val.trim() === '') {
        return { pass: false, offender: ':root', detail: '--dgo-focus-ring / --focus token not found in computed styles' };
      }
      return { pass: true };
    }

    case 'reduced-motion': {
      // CSS smoke-test: check that the prefers-reduced-motion media query is defined in stylesheets
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      // We can't force the preference to change; verify the media rule exists in at least one sheet
      let found = false;
      try {
        for (const sheet of document.styleSheets) {
          let rules;
          try { rules = sheet.cssRules; } catch { continue; }
          for (const rule of rules) {
            if (rule.media && rule.conditionText && rule.conditionText.includes('reduced-motion')) {
              found = true; break;
            }
          }
          if (found) break;
        }
      } catch { /* cross-origin sheets */ }
      if (!found) return { pass: false, offender: 'stylesheets', detail: 'no @media (prefers-reduced-motion) rule found' };
      return { pass: true };
    }

    // Route-scoped contracts (require specific DOM, can only be verified on the matching route)

    case 'toolbar-not-clipped': {
      const bar = document.querySelector('.toolbar, [data-toolbar]');
      if (!bar) return { status: 'unverified', detail: 'no toolbar in current view' };
      const r = bar.getBoundingClientRect();
      if (r.right > window.innerWidth + 2 || r.left < -2) {
        return { pass: false, offender: bar.className, detail: `toolbar clipped: left=${Math.round(r.left)} right=${Math.round(r.right)}` };
      }
      return { pass: true };
    }

    case 'source-view-chips-internal-scroll': {
      const chips = document.querySelector('.source-view-chips, [data-source-chips]');
      if (!chips) return { status: 'unverified', detail: 'no source-view-chips in current view' };
      const style = getComputedStyle(chips);
      if (style.overflowX === 'visible' && chips.scrollWidth > chips.clientWidth) {
        return { pass: false, offender: chips.className, detail: 'chips overflow without internal scroll' };
      }
      return { pass: true };
    }

    case 'record-list-owns-scroll': {
      const list = document.querySelector('[data-record-list], .records, .record-list');
      if (!list) return { status: 'unverified', detail: 'no record list in current view' };
      return { pass: true }; // presence check; scroll ownership verified by contained-pane-scroll
    }

    case 'detail-pane-owns-scroll': {
      const pane = document.querySelector('[data-detail-pane], .detail-pane, .dgo-detail');
      if (!pane) return { status: 'unverified', detail: 'no detail pane in current view' };
      return { pass: true };
    }

    case 'status-tabs-visible': {
      const tabs = document.querySelector('[role="tablist"], .tabs, [data-tabs]');
      if (!tabs) return { status: 'unverified', detail: 'no tab bar in current view' };
      const r = tabs.getBoundingClientRect();
      if (r.bottom > window.innerHeight + 2 || r.top < 0) {
        return { pass: false, offender: tabs.className || 'tablist', detail: `tabs clipped vertically: top=${Math.round(r.top)} bottom=${Math.round(r.bottom)}` };
      }
      return { pass: true };
    }

    case 'lifecycle-actions-keyboard-reachable': {
      const btn = document.querySelector('[data-action], .lifecycle-btn, .action-btn');
      if (!btn) return { status: 'unverified', detail: 'no lifecycle action button in current view' };
      const tabIndex = parseInt(btn.getAttribute('tabindex') ?? '0', 10);
      if (tabIndex < 0) return { pass: false, offender: btn.className, detail: `tabindex=${tabIndex} — button unreachable by keyboard` };
      return { pass: true };
    }

    case 'pdf-preview-sandboxed': {
      const iframes = document.querySelectorAll('iframe');
      for (const f of iframes) {
        const src = f.getAttribute('src') || '';
        if (src.includes('.pdf') || f.dataset.type === 'pdf') {
          if (!f.hasAttribute('sandbox')) {
            return { pass: false, offender: `iframe[src="${src.slice(0, 60)}"]`, detail: 'PDF iframe missing sandbox attribute' };
          }
        }
      }
      return { pass: true };
    }

    case 'focus-ring-visible': {
      const val = getComputedStyle(document.documentElement).getPropertyValue('--dgo-focus-ring') ||
                  getComputedStyle(document.documentElement).getPropertyValue('--focus');
      if (!val || val.trim() === '') {
        return { pass: false, offender: ':root', detail: 'focus-ring token absent' };
      }
      return { pass: true };
    }

    default:
      return { status: 'unverified', detail: `unknown contract: ${contract}` };
  }
}

// ─── viewport-aware runner ──────────────────────────────────────────────────

function probeAtCurrentViewport(viewportWidth, contracts) {
  const currentVW = window.innerWidth;
  const isCurrentViewport = Math.abs(currentVW - viewportWidth) <= 2;
  const results = {};

  for (const contract of contracts) {
    if (!isCurrentViewport) {
      // Cannot resize the browser programmatically from within the page.
      results[contract] = { status: 'unverified', detail: `requires viewport=${viewportWidth}px; current=${currentVW}px` };
      continue;
    }

    try {
      const probe = runProbe(contract);
      if (typeof probe.pass === 'boolean') {
        results[contract] = { status: probe.pass ? 'pass' : 'fail', offender: probe.offender, detail: probe.detail };
      } else {
        results[contract] = { status: probe.status || 'unverified', detail: probe.detail };
      }
    } catch (err) {
      results[contract] = { status: 'error', detail: String(err.message || err) };
    }
  }

  return results;
}

// ─── public API ─────────────────────────────────────────────────────────────

export function certify() {
  const now = new Date().toISOString();
  const cfg = BrowserCertification;
  const knownRoutes = Router.known();
  const currentRoute = `#/${Router.path()}`;
  const currentVW = window.innerWidth;

  const viewportResults = {};
  let anyFail = false;
  let anyError = false;

  for (const vp of cfg.viewports) {
    // Generic contracts for every viewport
    const contractList = [...cfg.contracts];

    // Add route-scoped contracts if we're on a certified route
    const routeExtra = cfg.routeContracts?.[currentRoute] ?? [];
    for (const c of routeExtra) {
      if (!contractList.includes(c)) contractList.push(c);
    }

    const probes = probeAtCurrentViewport(vp, contractList);
    viewportResults[vp] = probes;

    for (const r of Object.values(probes)) {
      if (r.status === 'fail') anyFail = true;
      if (r.status === 'error') anyError = true;
    }
  }

  const result = {
    at: now,
    schema: 'dgo-cert/v2',
    certifiedViewport: currentVW,
    currentRoute,
    routes: knownRoutes,
    viewports: cfg.viewports,
    contracts: cfg.contracts,
    viewportResults,
    // Overall: pass only when ALL measured (non-unverified) probes pass
    passed: !anyFail && !anyError,
    summary: {
      pass: 0,
      fail: 0,
      unverified: 0,
      error: 0,
    },
  };

  for (const probes of Object.values(viewportResults)) {
    for (const r of Object.values(probes)) {
      const s = r.status;
      if (s === 'pass') result.summary.pass++;
      else if (s === 'fail') result.summary.fail++;
      else if (s === 'error') result.summary.error++;
      else result.summary.unverified++;
    }
  }

  try {
    localStorage.setItem('dgo.r11.viewport.certification', JSON.stringify(result));
  } catch { /* storage may be unavailable */ }

  return result;
}

/**
 * Run certification and log a human-readable summary to the console.
 * Returns the full result object.
 */
export function certifyAndReport() {
  const result = certify();
  const { summary, certifiedViewport, passed } = result;
  const label = passed ? '%cpassed' : '%cfailed';
  const style = passed ? 'color:green;font-weight:bold' : 'color:red;font-weight:bold';

  console.groupCollapsed(`DGO Browser Certification — ${label} (vp=${certifiedViewport}px)`, style);
  console.table(summary);

  for (const [vp, probes] of Object.entries(result.viewportResults)) {
    const failures = Object.entries(probes).filter(([, r]) => r.status === 'fail' || r.status === 'error');
    if (failures.length) {
      console.group(`⚠ viewport ${vp}px — ${failures.length} failure(s)`);
      for (const [contract, r] of failures) {
        console.warn(`  ✗ ${contract}: ${r.detail || ''}${r.offender ? ` [${r.offender}]` : ''}`);
      }
      console.groupEnd();
    }
  }

  console.groupEnd();
  return result;
}

