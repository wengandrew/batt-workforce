# Battery Manufacturing Labor Intensity — dev guide

A **lightweight static** dashboard comparing workers-per-GWh across four battery cell plants (CATL, PENA Nevada, LGES Wrocław, LGES Michigan) plus a cross-site comparison. No build step, no server, no Python pipeline — the browser renders everything live from one data file. GitHub Pages serves the `site/` folder.

> Migrated July 2026 from the earlier Python→JSON→D3 pipeline (`data/`, `scripts/`, `site/data/*.json`) to this single-source-of-truth static setup.

## Layout

```
batt-workforce/
  site/
    battman_data.js       # SINGLE SOURCE OF TRUTH — every number lives here
    battman_shared.js     # shared render helpers (bmChips, esc, source links); no data
    index.html            # the dashboard (presentation/engine only)
  verify.mjs              # jsdom render test (0 console errors, structure)
  invariants.mjs         # cross-cutting consistency invariants across every tab/site
  package.json           # `npm test` → node verify.mjs && node invariants.mjs (dev dep: jsdom)
  package-lock.json       # committed so CI's `npm ci` is reproducible
  .github/workflows/deploy.yml  # CI: npm test on every push/PR; deploy job (Pages) only runs after tests pass, on push to main
```

## The golden rule

**Edit `site/battman_data.js` only. Never hardcode a number into `index.html`.** The dashboard reads `window.BM` and renders all charts, tables, the CATL layer walkthrough, and the normalization ladders live — so the HTML cannot drift from the data. The only hand-written numbers in `index.html` are in narrative captions. The front page prints `VERSION` · `UPDATED` (read live from the data), so the version on screen is always unambiguous.

## `battman_data.js` structure

- `VERSION`, `UPDATED` — stamp shown on the front page. Bump on every data change.
- `SRC` — source registry `{KEY: {n:"name", u:"url"}}`. Every point cites source keys.
- `INTENSITY` — the labor-intensity series. Each series has `attrs` (see schema below), `mx` (bias + confidence), and `pts` (per-year points with `v`, `disp`, `err`, `num`/`den` text + source keys, `q` quality, `c` confidence, `note`). Optional `leg` short legend label is set in `index.html`'s `LEG` map.
- `FITS` — fit parameters per series: `L∞ + A·e^(−k·t)` (t = years since production start) or `type:"const"` plateau. `dispL`, `wnd`, `note`.
- `SITES` — per-site `charts` (headcount / gwh / util raw points), `scope`, per-metric `caveats`, and `extraRows` supporting figures.
- `CATL_LAYERS` — raw reported inputs per year (total employees, 生产人员, battery revenue share, produced GWh); the dashboard derives the peel-down layers live.
- `RECON` — the normalization: `viz.after` (normalized series) + `viz.afterFits`, `beforeIds`/`beforeFitIds` (raw comparable), `ladders` (per-site adjustment steps), `summary`, `sens`.

### Attribute schema (`attrs` on each intensity series)

- `den` — denominator basis: `produced-disclosed` / `produced-derived` / `produced-estimated` / `nameplate` / `nameplate-target`
- `cell`, `pack`, `upstream`, `construction` — whether the **headcount** includes that labor (`true` / `false` / a string like `"partial"` / `"allocated out"`)
- `functions` — `all` vs `production only`
- `hc` — exact headcount basis in words

The dashboard's numerator÷denominator table is built from these, so keep them accurate.

## Update workflow (e.g. a new annual report or filing lands)

1. **Edit `site/battman_data.js`.** Add/adjust points (value, disp, err, num/den text, source keys, note). Add new sources to `SRC`. Bump `VERSION` + `UPDATED`.
2. **Refit if the series changed** — fit `L∞ + A·e^(−k·t)` on exactly the plotted points (or a const plateau) and update the `FITS` entry. Every curve, long-run number, layer table, and ladder follows automatically.
3. **Verify:** `npm install && npm test`. `verify.mjs` renders the page in jsdom and fails on console errors or `[?]` placeholders; `invariants.mjs` enforces cross-cutting rules across every site/tab. Also recompute any changed ratio from its raw inputs and compare to `disp`/`v`.
4. **Preview:** `python -m http.server 8000 --directory site`.
5. **Ship:** commit + push. CI (`.github/workflows/deploy.yml`) reruns `npm test` on every push and PR; on `main` the deploy job only runs — and only deploys to Pages — after that test job passes.

## Normalization (cross-site tab)

The cross-site comparison uses the **normalized basis = permanent plant-site employees ÷ GWh actually produced** (temp/agency/dispatch labor and construction excluded). Each site's ladder in `RECON.ladders` shows every adjustment with its source and assumption; the ladder renders as an expandable detail on the normalized row of each site's intensity table.

## Top-level modeling assumptions

- **CATL** — battery allocation assumes equal revenue per employee across segments (±10–15%); cell-only deducts a 15–30% module/pack-labor benchmark (Faraday/ICCT). Total, production (生产人员), and R&D headcounts are reported directly in each annual report. "Permanent" excludes dispatch (劳务派遣) workers.
- **PENA (Nevada)** — produced GWh derived from cumulative cell milestones × a single **~18 Wh/cell** factor applied to every year (not a per-year improvement; the ±15–20% band absorbs the real capacity drift). FY2025 QE anomaly (556) excluded from ratios.
- **LGES Wrocław** — headcount is the **audited KRS average employment** (KRS 0000614214, via bizraport), which supersedes the earlier Revelio estimate (Revelio infers from public professional profiles and under-counts blue-collar line operators by 25–47%). Produced GWh uses the same KRS filing (revenue ÷ cell ASP), so numerator and denominator share one source; nameplate × utilization is the upper cross-check. The audited legal entity ≈ the operational campus, so there is no large temp gap.
- **LGES Michigan** — no published produced GWh; ratios use nameplate capacity or a single illustrative estimate. No fit.

## Conventions

- Every quantitative claim traces to a source key in `SRC`.
- Descriptive, task-referencing commit messages.
- Prefer editing data over touching the render engine; if you change the engine, run `npm test` and confirm invariants pass.
