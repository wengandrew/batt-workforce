# Battery Manufacturing Labor Intensity

Interactive dashboard comparing **workers per GWh** across battery cell plants — CATL, Panasonic Energy of North America (Nevada), and LG Energy Solution (Wrocław & Michigan). Part of the Volta Foundation 2026 State of Industry workforce work.

**Live:** https://wengandrew.github.io/batt-workforce/

## What this is

A single-page **static** dashboard. Every number lives in one file (`site/battman_data.js`) and is rendered live in the browser — **no build step, no server, no data pipeline.** GitHub Pages just serves the `site/` folder.

The dashboard has five top tabs (four sites + a cross-site comparison); each site tab splits into **Headcount / Output / Labor-intensity** sub-tabs. Every chart, table, and the CATL headcount-layer walkthrough render from `window.BM` (loaded from `battman_data.js`), so nothing can silently drift. The front page prints the data version (`VERSION` · `UPDATED`).

## Files

| File | Role |
|---|---|
| `site/battman_data.js` | **Single source of truth.** Sources (SRC), intensity series with per-point annotations + attribute sets, fit parameters (FITS), per-site raw components + supporting figures (SITES, incl. `extraRows`), the CATL headcount-layer decomposition (CATL_LAYERS), and the normalization ladders (RECON). Carries `VERSION` / `UPDATED`. |
| `site/battman_shared.js` | Shared helpers used by the dashboard engine: attribute chips (`bmChips`), HTML-escaping, source-link rendering. No data. |
| `site/index.html` | The dashboard — presentation/engine only; renders everything from `battman_data.js`. |
| `verify.mjs` · `invariants.mjs` | Verification harness (jsdom): checks the page renders with 0 console errors, and enforces cross-cutting invariants (legends match plotted series, toggles match table rows, no doubled units, ladders nested, etc.). |
| `package-lock.json` | Committed so CI's `npm ci` installs a reproducible dependency tree. |
| `.github/workflows/deploy.yml` | CI: runs `npm test` on every push and PR. The Pages deploy job only runs on push to `main`, and only after the test job passes. |

## Develop

```bash
# Preview locally (any static server works)
python -m http.server 8000 --directory site      # → http://localhost:8000

# Verify (render + invariants)
npm install      # dev-only: jsdom
npm test         # runs verify.mjs + invariants.mjs
```

- **Edit `site/battman_data.js` only.** Never hardcode numbers into `index.html`.
- **Deploy:** push to `main` → CI runs `npm test`; GitHub Pages deploys `site/` only after tests pass. Pull requests run the same tests but never deploy.

## Data model, update workflow & assumptions

See **[CLAUDE.md](CLAUDE.md)** for the attribute schema, the "how to add a data point / refit" workflow, the normalization basis, the CATL headcount layers, and the top-level modeling assumptions.

## References

Volta Foundation Workforce Committee — *2026 State of Industry: How Many Workers Are Needed for Battery Manufacturing?*
