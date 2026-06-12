# FEV Consulting — Battery Manufacturing Labor Analysis (2023)

- **URL**: https://theicct.org/wp-content/uploads/2024/12/ID-255-%E2%80%93-Battery-jobs_working-paper_final.pdf
- **Type**: Consulting firm analysis (cited in peer-reviewed publication)
- **Accessed**: 2026-06-12
- **Raw file**: not archived: catalogued from Stage 2-5 research package
- **Credibility**: Tier 3 — Consulting firm technical analysis; cited via ICCT peer-reviewed working paper
- **Linked sensitivities**: manufacturing_productivity
- **Linked claims (from Stage 5)**: QUANT-MATURITY-CURVE

## Extracted Quotes / Claims

> "FEV Consulting (2023) bottom-up labor analysis: ~64 workers per GWh for cell manufacturing"

> "Includes process step-by-step labor costing from cell coating through pack assembly"

## Notes

**Scope and significance:**
- FEV (Forschungsgesellschaft für Energiewirtschaft und Antriebstechnik) is a major automotive consulting firm
- 2023 analysis represents more recent than Argonne BatPAC (2019)
- Bottom-up labor costing based on detailed manufacturing process steps
- Cited in ICCT 2024 battery jobs working paper as one of three comparable estimates

**Methodology:**
- Engineering-based labor costing from primary process steps in cell manufacturing
- Includes assumptions about cycle times, equipment automation level, operator requirements
- Output: labor hours per GWh for cell tier only

**Key comparison:**
- FEV 64 w/GWh is slightly lower than Argonne BatPAC 68 w/GWh
- Both are below empirical steady-state average (82 median in cell_labor_intensity_dataset_2026)
- Suggests engineering models may systematically underestimate real-world labor needs

**What the gap means:**
- Empirical 82 vs. modeled 64-68 gap (~20-25%) likely reflects:
  - Scrap and rework labor (coating defects, electrical testing failures)
  - Unplanned maintenance and equipment troubleshooting
  - Quality assurance overhead beyond in-process testing
  - Learning curve effects (new operators less efficient than model assumes)
  - Indirect support labor (logistics, material handling, data entry)

**Cross-references:**
- FEV's 2023 date makes it more current than Argonne BatPAC (2019)
- Compare to Cotterman & Fuchs (14-22 labor-hours/GWh) for cross-check
- Compare to empirical facility data in cell_labor_intensity_dataset_2026 (steady-state 72-87, ramp 125-188)

**Limitations and caveats:**
- Consulting firm analysis: may reflect client proprietary processes or aspirational efficiency targets
- 2023 data may not account for subsequent automation deployment (2024+)
- Does not address regional labor cost differences (model is likely US/Western European context)

**Follow-up:**
- Obtain detailed process-step breakdown from FEV analysis to identify where empirical vs. modeled diverges
- Assess how FEV labor estimates change with: (1) automation level, (2) facility maturity, (3) scrap rate assumptions
- Cross-reference with facility visits or primary company data post-FEV analysis date
