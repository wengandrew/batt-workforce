# McKinsey — Battery Demand Outlook 2025

- **URL**: https://www.mckinsey.com/industries/automotive-and-assembly/our-insights
- **Type**: Management consultancy research article
- **Accessed**: 2026-06-12
- **Raw file**: not archived: catalogued from Stage 2-5 research package
- **Credibility**: Tier 4 — McKinsey Automotive Practice; scenario modeling with transparent assumptions
- **Linked sensitivities**: market_share
- **Linked claims (from Stage 5)**: DEMAND-01, SCEN-02

## Extracted Quotes / Claims

> "McKinsey fading-momentum scenario: global battery demand floors at ~3,300 GWh by 2030-2035"

> "Assumes policy rollback, slowing EV adoption, or supply-chain constraints limit upside"

## Notes

**Scope and significance:**
- McKinsey 2025 demand scenario modeling
- Distinct from mckinsey_research (Battery 2035 product/manufacturing benchmarks) and mckinsey_hidden_trends_regional_analysis
- Provides conservative downside scenario for global battery demand
- Critical input to market_share/demand_band.csv floor scenario

**Scenario definition - Fading Momentum:**
- "Fading momentum" case assumes:
  - EV adoption slows from policy saturation or cost sensitivity
  - Battery demand growth moderates post-2030
  - Supply chain constraints or materials bottlenecks limit expansion
  - Policy support (IRA, EU Green Deal) plateau or partially reverse

**Demand projections:**
- 2030-2035 floor: ~3,300 GWh (conservative case)
- Published October 2025, reflecting post-OBBBA policy uncertainty
- Provides downside anchor for demand band uncertainty (floor 3,300 GWh; ceiling ~5,273 GWh per iea_gevo_2025)

**Implications for workforce modeling:**
- Demand band width: 3,300 to 5,273 GWh (2030-2035) = 60% variance
- At steady-state 82 workers/GWh: 270k-432k workers (direct cell manufacturing)
- Uncertainty in demand translates directly to workforce uncertainty without policy mitigation

**Cross-references:**
- Floor (3,300 GWh) vs. ceiling (iea_gevo_2025 ~5,273 GWh) frames demand uncertainty
- Used alongside iea_gevo_2025 STEPS scenario to model baseline and upside cases
- SCEN-02 claim documents policy scenarios (IRA continuation vs. rollback) that drive demand divergence

**Caveats:**
- McKinsey's assumptions about policy and adoption rates may prove incorrect
- October 2025 publication date; subsequent policy changes (e.g., OBBBA further impacts) may shift outlook
- Regional demand varies significantly (China stable, US/EU more volatile)

**Methodology:**
- McKinsey's modeling approach combines:
  - Vehicle sales forecasts by region (based on government targets, OEM announcements)
  - Battery capacity per vehicle (evolving with energy density improvements)
  - Regional supply-chain capacity tracking
  - Policy scenario modeling (e.g., subsidy phase-outs, tariff impacts)

**Follow-up:**
- Compare to BNEF EV Outlook (June 2025) which showed -8% downward revision
- Assess whether fading momentum case aligns with 2026 H1 market data
- Track McKinsey's updated outlook (typically published annually)
