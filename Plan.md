# Project Plan: Battery Manufacturing Workforce Outlook

## Objectives

1. Quantify total workforce required per GWh of battery manufacturing (direct + indirect + induced + upstream)
2. Derive a master labor intensity scaling equation from aggregated primary source data
3. Project cumulative global battery workforce demand through 2035 and 2050
4. Publish an interactive dashboard and accompanying report

## Work Products

- **Report**: Web-viewable white paper following the 6-section outline from the Committee Insights paper
- **Dashboard**: Interactive D3.js dashboard with two coupled views:
  - **View A — Labor Intensity**: Workers/GWh vs. time from factory start, with curve fit
  - **View B — Cumulative Global Jobs**: Projections to 2050 with interactive sensitivity controls

## Identified Sensitivities

These are the key variables that drive total workforce numbers. Each will be researched, quantified, and made adjustable in the dashboard.

| Sensitivity | Description | Status |
|------------|-------------|--------|
| Automation level | Impact of increased automation on direct labor per GWh | Placeholder |
| Energy density | Higher Wh/kg reduces cells needed per GWh | Placeholder |
| Manufacturing productivity | Learning curves, yield improvements, process maturity | Placeholder |
| Regional market share | % of global GWh by US, EU, China, RoW | Placeholder |
| Policy scenarios | Subsidies, tariffs, IRA effects, trade policy | Placeholder |
| Ramp-up vs steady-state | Labor intensity decline curve over factory lifetime | Seed data available |
| Direct/indirect/induced multiplier | Job multiplier beyond direct plant workers | Placeholder |

*Additional sensitivities will be added as primary sources are processed.*

## Primary Source Checklist

Sources identified from the Committee Insights paper. Each must be (a) obtained and (b) processed.

| # | Source | Provided | Processed | Notes |
|---|--------|----------|-----------|-------|
| 1 | McKinsey Research | [x] | [ ] | Tier 4 — "Battery 2035: Building New Advantages" (Jan 2026): 30-40 FTE/GWh, 70-80% scrap rate during early ramp-up (cross-check vs. #39), skills/training emphasis |
| 2 | Ohio Research | [x] | [ ] | Tier 2 — Ohio OWT/OMA "Accelerating Ohio's Auto & Advanced Mobility Workforce" (v2.0, 2023): 25,000+ EV/battery jobs by 2030, Honda/LG (2,200), Ford EV (1,800), SEMCORP (1,200) |
| 3 | C2ES Research | [x] | [ ] | Tier 3 — "Economic Upside of Building the Battery Supply Chain in the Southeast" (C2ES/Greenline, Apr 2026): $102B -> 374k SE jobs |
| 4 | EPI Report | [x] | [ ] | Tier 4 — Barrett & Bivens (EPI, Sept 2021): +150k vs -75k US auto jobs by 2030 depending on domestic-content/market-share policy outcomes |
| 5 | GBA Report (2019) | [x] | [ ] | Tier 3 — WEF/GBA "Sustainable Battery Value Chain in 2030": 10M global battery value-chain jobs by 2030, >50% in emerging economies |
| 6 | Argonne/Li-Bridge CAR Workforce Report | [ ] | [ ] | Funded workforce study |
| 7 | Battery Talent Census | [x] | [ ] | Tier 2 — Volta Foundation survey of 1,000 battery professionals (SSRN, Feb 2026) |
| 8 | Battery Business Directory | [ ] | [ ] | Employee counts by company |
| 9 | Stanford Battery Summit Exec Summary | [ ] | [ ] | Industry outlook |
| 10 | BNEF EV Outlook | [ ] | [ ] | Market demand projections |
| 11 | EV Sales & Charging Infrastructure Through 2035 | [x] | [ ] | Tier 4 — Edison Electric Institute consensus forecast (Oct 2024): 78.5M EVs by 2035 |
| 12 | Battery Report 2025 - Talent Section | [x] | [ ] | Tier 2 — Volta Foundation 2025 Battery Report talent section; overlaps with #7 |
| 13 | Workplace Demand Studies | [ ] | [ ] | Labor market studies |
| 14 | Economic Forecasts | [ ] | [ ] | Macro projections |
| 15 | EV Labor Intensity Study (Andrew's paper) | [x] | [ ] | Tier 3 — Weng (2024) Nature Communications: BEV assembly >10x labor intensity during ramp-up, ~3x after a decade vs ICEV |
| 16 | Committee Insights Paper (PDF outline) | [x] | [x] | Seed data extracted (CATL, LGES, PENA benchmarks) |

### Sources ported from Committee Insights research tracker (2026-06-11)

Catalogued in `data/processed/sources.yaml` with credibility ratings; per-source detail in `data/processed/sources/<id>.md` (see `data/processed/sources/README.md` for the credibility scale).

| # | Source | Provided | Processed | Notes |
|---|--------|----------|-----------|-------|
| 17 | DOE/NETL BWI National Guideline Standards | [x] | [ ] | Tier 1 — occupational skill standards |
| 18 | Federal Reserve Bank of Dallas — Battery Belt (2022) | [ ] | [ ] | Tier 1 — not archived (403); market_share, policy_scenarios |
| 19 | Kentucky CED — BlueOval SK Update (2023) | [x] | [ ] | Tier 1 — 5,000 jobs / 80 GWh |
| 20 | Kentucky CED — BlueOval SK Training Funds (2023) | [x] | [ ] | Tier 1 — $36.4M state training investment |
| 21 | Tennessee HB 1342 (LegiScan) | [x] | [ ] | Tier 1 — chaptered bill text: incentives conditioned on secret-ballot union elections (TCA 4-3-739) |
| 22 | JobsOhio — LG-Honda Workforce Wins | [x] | [ ] | Tier 2 |
| 23 | Upjohn/NAATBatt Workforce Report (2023) | [x] | [x] | Tier 3 — 318.5 jobs/GWh baseline, 310k by 2030, segment/NAICS/occupation/wage breakdown extracted into 4 CSVs under manufacturing_productivity |
| 24 | ICCT — Battery Jobs Working Paper (2024) | [x] | [x] | Tier 4 — jobs/GWh by segment (pack 95, cell components+recycling 49 = ~144 total) extracted into icct_jobs_per_gwh.csv |
| 25 | ResearchGate — Electrode Defects Review | [x] | [ ] | Tier 3 — full review: ~39% of cell-assembly cost traces to electrode-production quality |
| 26 | ScienceDirect — Battery Defects Article | [x] | [ ] | Tier 3 — full article: scrap rates 5-30% by maturity phase, coating is primary defect source |
| 27 | Wiley — Traceability Integration | [x] | [ ] | Tier 3 — full article (Wessel 2022): traceability pilot at Battery LabFactory Braunschweig |
| 28 | Columbia SIPA/CGEP — IRA & US Battery Supply Chain | [x] | [ ] | Tier 3 — policy_scenarios, market_share |
| 29 | Role Composition in Gigafactories (internal doc) | [x] | [ ] | Tier 6 — synthesis, cross-reference primary sources |
| 30 | Ramp-up vs. Steady-state Labor Needs (internal doc) | [x] | [ ] | Tier 6 — core to View A labor intensity curve |
| 31 | Deloitte — Future of Work: Manufacturing | [x] | [ ] | Tier 4 |
| 32 | Manufacturing Dive — Labor Shortage 2033 | [x] | [ ] | Tier 5 |
| 33 | Electrek — US EV Battery Belt (2022) | [x] | [ ] | Tier 5 — market_share |
| 34 | Site Selection Magazine — GA Quick Start | [x] | [ ] | Tier 5 — policy_scenarios |
| 35 | AJC — Georgia Hyundai-SK Incentives | [x] | [ ] | Tier 5 — ~$697M package, 3,750 jobs @ ~$53k, $11M Quick Start training |
| 36 | Tennessee Lookout — BlueOval City | [x] | [ ] | Tier 5 — ~$900M package incl. $40M TCAT Stanton campus, 5,800 jobs target |
| 37 | AmTec — Manufacturing Workforce Report | [x] | [ ] | Tier 7 |
| 38 | Manufacturing Tomorrow — 2M Worker Shortage (2026) | [x] | [ ] | Tier 5 |
| 39 | LinkedIn — Chinese Gigafactory Scrap Rates | [x] | [ ] | Tier 6 — full article: ~70 employees/GWh, scrap-rate gap framed as process-maturity/knowledge problem |
| 40 | P3 Group — Predictive Maintenance Blog | [x] | [ ] | Tier 6 — now incl. supplemental full whitepaper (Kreilinger thesis) |
| 41 | Battery-News.de — Workforce Development (2026) | [x] | [ ] | Tier 5 — policy_scenarios |
| 42 | McKinsey — Hidden Trends in Battery Supply/Demand (regional analysis, Aug 2025) | [x] | [ ] | Tier 4 — regional GWh supply/demand 2025-2030; market_share, policy_scenarios |
| 43 | DOE — 2021-2024 Four-Year Review of Advanced Battery Supply Chains (Dec 2024) | [x] | [ ] | Tier 1 — >$150B investment, >1,100 GWh capacity, 100k+ jobs, workforce constraints |

## Processing Workflow

For each primary source:

1. **Obtain**: Source file placed in `data/raw/`
2. **Review**: Read and identify all quantifiable data points relevant to workforce sizing
3. **Extract**: Pull data into CSVs under `data/processed/sensitivities/<relevant_sensitivity>/`
4. **Document**: Create/update `metadata.yaml` with provenance, assumptions, units, mathematical methods
5. **Integrate**: Run `scripts/generate_dashboard_data.py` to update dashboard JSON
6. **Verify**: Check dashboard reflects new data correctly
7. **Update**: Mark source as processed in this checklist and in `sources.yaml`

## Mathematical Framework

### Labor Intensity Model (View A)

- **Input data**: (factory_name, year, workers_per_gwh, production_gwh, workforce_count, years_since_start)
- **Curve fit**: Exponential decay model — `workers_per_gwh = A * exp(-k * t) + C`
  - `A`: initial excess labor intensity during ramp-up
  - `k`: learning/automation rate constant
  - `C`: asymptotic steady-state labor intensity
  - `t`: years from factory start
- **Output**: Master scaling equation with confidence bands

### Cumulative Jobs Model (View B)

- **Input**: Global GWh demand projections (from BNEF, IEA, etc.)
- **Parameters** (adjustable via dashboard sliders):
  - Regional market share: US%, EU%, China%, RoW%
  - Annual growth rate assumption
  - Labor intensity scenario (from View A curve fit)
  - Policy multiplier (subsidy/tariff effects)
  - Automation trajectory
- **Output**: Cumulative jobs by year (2025-2050) broken down by region

## Task Phases

### Phase 0: Scaffold (Current)
- [x] Repository structure
- [x] CLAUDE.md, README.md, Plan.md
- [x] Skeleton HTML site (report + dashboard with navigation)
- [x] Dummy data and placeholder charts
- [x] GitHub Pages deployment workflow
- [ ] Verify GitHub Pages is live

### Phase 1: Data Collection
- [ ] Compile all primary sources (see checklist above)
- [ ] Prioritize sources by expected data density
- [ ] Begin processing highest-priority sources

### Phase 2: Data Processing & Analysis
- [ ] Process each source through the extraction workflow
- [ ] Populate sensitivity datasets
- [ ] Validate extracted data against original sources
- [ ] Fit labor intensity curve to real data
- [ ] Develop demand projection model

### Phase 3: Dashboard Development
- [ ] Replace dummy data with real datasets
- [ ] Implement interactive sensitivity sliders
- [ ] Add confidence bands and uncertainty visualization
- [ ] Cross-link View A and View B (coupled interactions)

### Phase 4: Report Writing
- [ ] Draft each section of the 6-section report
- [ ] Integrate dashboard findings into narrative
- [ ] Peer review and revision

### Phase 5: Publication
- [ ] Final review of dashboard and report
- [ ] Polish visualizations and styling
- [ ] Publish final version via GitHub Pages
