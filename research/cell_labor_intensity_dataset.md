# Cell-Tier Labor-Intensity Dataset (Primary-Source Aggregation)
## Volta Foundation — Battery Workforce Whitepaper · Ramp-vs-Steady-State Scaling Inputs

**Compiled:** June 2026 · **Boundary:** cell-manufacturing tier · **Denominator:** nameplate GWh/yr · **n=40 facilities** (24 in the A+B fitting set).

> **Human-readable rendering.** The full per-row data of record (all 40 facilities, all fields, with live source links) lives in `data/processed/sensitivities/manufacturing_productivity/cell_labor_intensity_tiered.csv`. This file documents the tiering convention, the critical methodology note, the robust findings, and the Tier-A detail. For Tier B/C per-row detail, read the CSV.

**Purpose.** Aggregate plant-level (workers, nameplate GWh, years-since-start) triplets to support derivation of a master cell-tier labor-intensity scaling equation L(t). Data points are graded by usability tier. **This is an evidence dataset, not the final fitted equation** — the provisional fit and its limitations are documented below.

### Tiering convention
- **Tier A** — clean cell-only scope, current operating headcount, known production-start year. Highest comparability. (n=6)
- **Tier B** — usable with caveat: cell+module scope (on-site module assembly adds modest headcount), and/or planned-at-full-ramp headcount paired with full nameplate. Directionally valid, upper- or lower-biased as noted. (n=18)
- **Tier C** — excluded from fitting: pre-production/planned-only, construction-only headcount, whole-campus or all-country totals, non-Li-ion chemistry, or implausible (<15 or >350 w/GWh) headcount/capacity pairings. (n=16)

### Methodology note (critical)
With **nameplate** GWh as the denominator and mixed headcount types, the (t, workers/GWh) scatter does **not** yield a clean monotonic decay (provisional exponential fit R² < 0). Two confounds explain this and define the path to a clean master equation:
1. **Nameplate ≠ built/utilized capacity.** Early-ramp plants often report headcount against *full announced* nameplate, deflating their apparent intensity; others report full crews against partially-built lines, inflating it. A clean scaling curve requires **actual utilized GWh** as the denominator — a field that is rarely disclosed.
2. **Headcount-type heterogeneity.** "Current," "planned-at-full-ramp," and "total-with-pack" figures are not directly comparable. Tier A/B split mitigates but does not eliminate this.

**What the data DOES robustly show:** (a) the empirical steady-state band (mature, current-headcount plants >3 yr) converges to **72–87 w/GWh, median 82** — independently corroborating the prior model asymptote (~97.5, nameplate-based); and (b) ramp-era points reach **125–188 w/GWh**, confirming ramp intensity materially exceeds steady-state. The conflation thesis is supported even though a precise t-indexed equation awaits utilized-capacity data.

> **Reading the data.** *W/GWh (calc)* is computed as employee_count ÷ nameplate GWh. Where a source reports its own ratio against a different denominator or headcount basis, that figure is preserved in the CSV notes. All sources are live links in the CSV; multiple links indicate the data point is triangulated.

### Tier A — clean cell-tier points (n=6)

| Facility | Operator | Nameplate (GWh) | Workers (type) | SOP | Yrs since SOP | W/GWh (calc) | Stage | Conf |
|---|---|---|---|---|---|---|---|---|
| PowerCo Gigafactory Salzgitter | PowerCo SE (VW Group) | 20 (initial; 40 full) | 2,500 current (5,000 planned) | 2025 | 1 | 125.0 | ramp | High |
| Imperium3 New York (iM3NY) Endicott | iM3NY LLC | 1 (Stage 1) | 90 current | 2022 | 1 | 90.0 | ramp (failed; defunct by 2025) | High |
| Northvolt Ett (Skellefteå) | Lyten (2026); Northvolt AB (hist.) | 16 (Phase 1; 60 full) | 3,000 peak (315 baseline 2026) | 2022 | 2 | 187.5 | ramp (restarting under new ownership) | High |
| Ultium Cells Spring Hill TN | Ultium Cells LLC (GM + LGES) | 50 | ~1,300 current (1,700 full) | 2024 | 2.3 | 26.0 | ramp (re-ramping for LFP) | High |
| Ultium Cells Warren OH (Lordstown) | Ultium Cells LLC (GM + LGES) | 45 | 2,200 current | 2022 | 2.33 | 48.9 | steady-state (full nameplate late 2024; ~37 GWh actual) | High |
| Samsung SDI Hungary Göd (Plant 1 & 2) | Samsung SDI Magyarország Zrt. | 40 | 3,206 current | 2018 | 7 | 80.2 | approaching-steady | High |

### Tier B — usable with caveat (n=18, see CSV for full rows)

Key anchors (w/GWh calc): NextStar Windsor 26.3 (ramp); AESC Sunderland 63.3 (ramp); Panasonic Kansas/De Soto 125.0 (ramp, planned-at-full-ramp — appears twice, deduplicate); StarPlus Kokomo 42.4 (ramp); Gotion Manteno 35.0 (ramp); CATT Erfurt 121.4 (approaching-steady, total-with-pack); SK Battery America Commerce GA 116.6 site-wide (steady; the 219.3 Plant-2 figure is a denominator artifact — keep only 116.6); ACC Billy-Berclau 46.2 (ramp); Tesla Giga Nevada 84.0 PENA cell-specific (steady; 231.1 on the total-facility basis); LGES Wroclaw 91.3 nameplate / 122.1 against ~86 GWh actual (steady); CATL Ningde 87.7 (steady); LG Holland MI 69.8 (ramp/steady mix); Fixx Smyrna 50.0 (steady); BlueOval SK Glendale KY 33.7 (ramp); CATL Debrecen 37.5 (ramp); Verkor Dunkirk 75.0 (ramp, planned).

**Tier B caveats:** Panasonic De Soto appears twice (same plant, 125) — deduplicate before any fit. Planned-at-full-ramp points (Verkor 75, Sunderland 63, Kansas 125, Kokomo 42) divide a *full-ramp* headcount target by *full* nameplate — steady-state *projections*, not observed ramp points.

### Tier C — excluded (n=16, with reasons in CSV)

Excluded for: whole-campus/all-country totals (BYD Kengzi 50k Pingshan campus; Samsung SDI Cheonan 11,860 all-Korea; LG Nanjing 10k bundled), R&D sub-totals (Panasonic Suminoe 400), ambiguous denominators (SK On Seosan ~400 implausible), non-Li-ion (Form Factory 1 iron-air), and pre-production/cancelled (LG Arizona, SK On TN, AESC Bowling Green, PowerCo St. Thomas, ABF Tucson, Microvast, KOREPlex, Giga America, AESC Florence, Toyota NC).

---

*Source data of record: `data/processed/sensitivities/manufacturing_productivity/cell_labor_intensity_tiered.csv` (40 facilities, full fields). Per-source methodology and search-gap notes: `research/stage3/cell_dataset_source_notes.md` and `research/stage3/searched_but_not_found.md`.*
