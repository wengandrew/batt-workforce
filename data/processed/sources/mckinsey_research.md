# McKinsey — Battery 2035: Building New Advantages

- **URL**: https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/battery-2035-building-new-advantages
- **Type**: Management consultancy research / Industry insights article
- **Accessed**: 2026-06-12
- **Raw file**: data/raw/mckinsey_research.pdf (17 pages)
- **Credibility**: Tier 4 — Major management consultancy (McKinsey) with established Battery Accelerator Team; deep industry expertise in automotive and battery manufacturing, but claims reflect consulting perspectives rather than independent primary research
- **Linked sensitivities**: manufacturing_productivity, automation, policy_scenarios, market_share
- **Dashboard linkage**: provides the global GWh demand curve in `site/data/global_jobs.json` (`global_gwh_demand`) that drives View B (Cumulative Global Battery Workforce)
- **Linked claims (from Committee Insights sheet)**: "Key Insights and Findings — Maintenance, quality, and technical support roles may become increasingly important", researcher: Rati Mehta

## Extracted Quotes / Claims

### Global Battery Demand Outlook (drives View B demand curve)
> "Demand for Li-ion batteries crossed the milestone threshold of 1.0 terawatt-hours (TWh) in 2024 and likely reached nearly 1.6 TWh in 2025."

> "McKinsey Battery Insights expects a global battery market size of 4.2 TWh in 2030 and 6.8 TWh by 2035, with more than 85 percent of this demand driven by Li-ion batteries, primarily due to the strong demand for battery electric vehicles (EVs) and energy storage."

> "This 2030 demand projection is lower than our 2023 estimate of 4.7 TWh ... but still well above a 2019 estimate of 2.6 TWh."

**Demand anchors used in the dashboard** (total global battery demand, GWh):

| Year | McKinsey figure | GWh | Provenance |
|------|-----------------|-----|------------|
| 2024 | "crossed 1.0 TWh" | 1,000 | McKinsey (reported) |
| 2025 | "nearly 1.6 TWh" | 1,600 | McKinsey (reported) |
| 2030 | "4.2 TWh" | 4,200 | McKinsey (forecast) |
| 2035 | "6.8 TWh" | 6,800 | McKinsey (forecast) |

Implied growth: ~21%/yr CAGR 2025→2030, decelerating to ~10%/yr 2030→2035. Intermediate years (2026–2029, 2032) in `global_gwh_demand` are CAGR interpolations between these anchors. **2040/2045/2050 (9,500 / 12,200 / 14,800 GWh) are extrapolated beyond McKinsey's published horizon** (~7%/5%/4% decelerating CAGR) and are an analyst assumption, not a McKinsey figure.

### Scrap Rates and Yield
> "Scrap rates during a facility's early ramp-up period can reach 70 or 80 percent, and disposal of hazardous waste can be costly."

> "As a production line matures, producers typically see the percentage of usable battery cells produced rise while scrap rates fall."

> "The ability to increase a line's first-pass yield and accelerate battery cell formation and testing is a major profit lever. This is partly because cost savings achieved through scrap reduction usually exceed any savings realized by negotiating lower raw material prices."

### Technical Talent and Workforce Requirements
> "In battery factories, production process stability and product quality are tightly linked. Operators' skills are crucial for bolstering productivity and ensuring quality consistency. The ability to attract the right technical talent can be decisive, and many battery start-ups have failed due to skills deficits."

> "Producers should define skill models and prioritize structured systems for training and evaluating factory worker competencies. Real-time production line monitoring and inspection (inline metrology), manufacturing execution systems, and statistical process control (SPC) tools for critical steps—such as slurry, calendaring density, and electrolyte fill—can all improve cell productivity and quality."

### Labor Productivity Benchmark
> "Target benchmarks: thirty to 40 full-time employees per GWh"

### Manufacturing Yields and Operational Excellence
> "The ability to accelerate ramp-up time to a 95 percent yield rate, for example, will set industry leaders apart."

> "Producers should target best-in-class OEE goals during ramp-up, reaching yields above 95 percent and OEE of at least 85 percent within 18 months after the first cell is produced."

> "Battery factories are likely to become significantly more efficient and productive in the coming years. We expect dry electrode coating to reduce capital expenditures and energy use, high-speed stacking to improve throughput and precision, and advanced battery-formation approaches to save time and improve cell consistency. Greater integration of digital twins and inline analytics can improve quality control. Taken altogether, these manufacturing advances have the potential to improve yields up to as much as 95 percent."

## Notes

**Full PDF text now available** — sourced directly from McKinsey publication (January 2026).

**Key workforce findings**:
- **Labor intensity benchmark**: 30–40 FTE per GWh (aligned with manufacturing_productivity sensitivity)
- **Scrap rates and yield**: Early ramp-up yields can be as low as 20–30% (inverse of 70–80% scrap rate), improving significantly as lines mature. Scrap reduction is identified as a top profit lever—cost savings exceed raw material negotiation benefits.
- **Technical talent emphasis**: Skills deficits have caused startup failures; operators' technical competency critical to productivity and quality consistency. Highlights need for structured training in:
  - Inline metrology (real-time production monitoring)
  - Manufacturing execution systems (MES)
  - Statistical process control (SPC)
  - Process-critical steps: slurry preparation, calendaring density, electrolyte fill
- **Automation and digitalization**: Digital twins, inline analytics, dry electrode coating, high-speed stacking identified as productivity levers. Suggests increasing role for technical/maintenance staff in systems monitoring vs. manual assembly.

**Scrap rate claim verification**: 
The extracted PDF text reports scrap rates of 70–80% during early ramp-up (inverse yield ~20–30%), not the 20–40% cited in placeholder. The 20–40% figure may refer to a different manufacturing stage or metric definition (e.g., mid-ramp vs. start-of-production). This should be cross-checked against linkedin_chinese_gigafactory_scrap and other sources for consistency.

**Sensitivity mappings expanded**:
- **manufacturing_productivity**: Labor intensity (30–40 FTE/GWh), scrap reduction economics, yield curves during ramp-up
- **automation**: Emphasis on digital twins, inline analytics, automated process control; reduces manual labor needs but increases technical/diagnostic roles
- **policy_scenarios**: References IRA Section 45X tax credit ($35/kWh), CRMA, and EU CRMA as cost drivers; workforce demands tied to regional localization requirements and capex phases

**Follow-up extraction ideas**:
- Detailed ramp-up curves (timeline from SOP to 95% yield) could refine labor-intensity learning curves
- Capital expenditure phasing ($50–80M per GWh) could be mapped to employment phases (construction vs. operations)
- Regional cost comparisons (US vs. EU vs. Asia) may reveal labor cost drivers in localization decisions
- Workforce skill requirements by manufacturing stage (formation, testing, assembly, quality) vs. generic 30–40 FTE figure
