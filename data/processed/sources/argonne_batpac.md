# Argonne National Laboratory — BatPAC Model (cited via ICCT)

- **URL**: https://theicct.org/wp-content/uploads/2024/12/ID-255-%E2%80%93-Battery-jobs_working-paper_final.pdf
- **Type**: National laboratory technical model (cited in peer-reviewed publication)
- **Accessed**: 2026-06-12
- **Raw file**: not archived: catalogued from Stage 2-5 research package
- **Credibility**: Tier 3 — Argonne National Laboratory official technical model; cited via ICCT peer-reviewed analysis
- **Linked sensitivities**: manufacturing_productivity
- **Linked claims (from Stage 5)**: QUANT-MATURITY-CURVE

## Extracted Quotes / Claims

> "Argonne BatPAC model (2019): ~68 workers per GWh for cell manufacturing only"

> "Used as one of three bottom-up labor-hour estimates in ICCT battery jobs analysis"

## Notes

**Scope and significance:**
- Argonne National Laboratory's BatPAC (Battery Manufacturing and Recycling Process Analysis) model
- Original development: 2019; cited in ICCT 2024 working paper
- Provides bottom-up labor-hour accounting based on detailed process steps in battery cell production
- Represents engineering-based (not empirical facility data) labor estimate

**Methodology:**
- Bottom-up costing model that breaks down cell manufacturing into discrete process steps
- Labor hours estimated based on equipment specifications, cycle times, and operator requirements
- Output: cost and labor intensity per unit produced
- Limited to cell tier (not module/pack assembly)

**Key limitation - publication date:**
- Original BatPAC model from 2019; may not reflect automation improvements or process changes 2019-2024
- Stage-5 explicitly flags this as "2019" to note staleness
- Technology evolution (dry electrode, increased automation, AI-driven quality control) likely reduced labor hours since original estimate

**Cross-references:**
- Compared in ICCT working paper to FEV Consulting (64 w/GWh, 2023) and Cotterman & Fuchs (14-22 labor-hours/GWh)
- 68 w/GWh is in the middle of the three bottom-up estimates in ICCT analysis
- Distinct from cell_labor_intensity_dataset_2026 which uses empirical facility data (ranges 72-188 w/GWh depending on maturity)

**Implications:**
- BatPAC ~68 is lower than steady-state empirical average (82 median in dataset), suggesting engineering models underestimate real-world labor due to:
  - Learning curve not captured in step-by-step analysis
  - Scrap/rework labor not explicitly modeled
  - Unscheduled maintenance and troubleshooting
  - Quality control overhead

**Follow-up:**
- Obtain Argonne's updated BatPAC model if available (post-2019)
- Request detailed labor breakdown by process step to identify where actual vs. modeled diverges
- Compare to ICCT's recent site visits or facility data if available
