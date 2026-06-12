# International Energy Agency — Global EV Outlook 2025

- **URL**: https://www.iea.org/reports/global-ev-outlook-2025
- **Type**: International government agency report
- **Accessed**: 2026-06-12
- **Raw file**: not archived: catalogued from Stage 2-5 research package
- **Credibility**: Tier 1 — International Energy Agency official publication
- **Linked sensitivities**: market_share
- **Linked claims (from Stage 5)**: SCEN-GLOBAL-WF, DEMAND-01

## Extracted Quotes / Claims

> "STEPS global demand scenario for global battery demand, 2025-2050; includes regional allocation"

> "Ceiling scenario for market_share/demand_band.csv: 2030-2035 ~5,273 GWh"

## Notes

**Scope and significance:**
- IEA's 2025 Global EV Outlook
- Provides GWh demand projections by region and scenario (unlike iea_wee_2025 which only provides employment without denominator)
- STEPS scenario (Stated Policies) is the central baseline
- Critical input to market_share/demand_band.csv ceiling scenario

**Key data points:**
- Global battery demand projections through 2050
- Regional allocation (China, EU, US, Rest of World) across scenarios
- Used in Stage-5 claim DEMAND-01 and SCEN-GLOBAL-WF for demand-driven workforce modeling

**Cross-references:**
- Demand band ceiling: ~5,273 GWh (2030-2035) per Stage-5 research
- Compare to mckinsey_demand_outlook_2025 floor case (~3,300 GWh) to frame the demand uncertainty band
- Use with iea_wee_2025 employment data to develop regional employment projections

**Scenarios and sensitivity:**
- STEPS (stated policies) = baseline
- Requires scenario-dependent workforce calculations
- Different regional labor intensities (China ~50 vs US ~315 w/GWh) mean global workforce varies with regional mix

**Limitations:**
- Demand projections inherently uncertain (subject to policy shifts, EV adoption rates, battery technology changes)
- Does not include employment figures directly; pair with iea_wee_2025 for workforce estimates
