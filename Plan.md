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
| 1 | McKinsey Research | [ ] | [ ] | Industry workforce benchmarks |
| 2 | Ohio Research | [ ] | [ ] | Regional workforce study |
| 3 | C2ES Research | [ ] | [ ] | Climate/energy workforce analysis |
| 4 | EPI Report | [ ] | [ ] | Economic Policy Institute labor data |
| 5 | GBA Report (2019) | [ ] | [ ] | Global Battery Alliance workforce data |
| 6 | Argonne/Li-Bridge CAR Workforce Report | [ ] | [ ] | Funded workforce study |
| 7 | Battery Talent Census | [ ] | [ ] | Talent pipeline data |
| 8 | Battery Business Directory | [ ] | [ ] | Employee counts by company |
| 9 | Stanford Battery Summit Exec Summary | [ ] | [ ] | Industry outlook |
| 10 | BNEF EV Outlook | [ ] | [ ] | Market demand projections |
| 11 | EV Sales & Charging Infrastructure Through 2035 | [ ] | [ ] | Demand planning baseline |
| 12 | Battery Report 2025 - Talent Section | [ ] | [ ] | Recent talent/workforce data |
| 13 | Workplace Demand Studies | [ ] | [ ] | Labor market studies |
| 14 | Economic Forecasts | [ ] | [ ] | Macro projections |
| 15 | EV Labor Intensity Study (Andrew's paper) | [ ] | [ ] | Primary labor intensity research |
| 16 | Committee Insights Paper (PDF outline) | [x] | [x] | Seed data extracted (CATL, LGES, PENA benchmarks) |

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
