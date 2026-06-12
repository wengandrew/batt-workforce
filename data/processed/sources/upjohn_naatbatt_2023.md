# W.E. Upjohn Institute / NAATBatt — U.S. Lithium-Ion Battery Supply Chain Workforce Report (2023)

- **URL**: https://research.upjohn.org/cgi/viewcontent.cgi?article=1308&context=reports
- **Type**: Academic research institute / industry association joint report
- **Accessed**: 2026-06-11
- **Raw file**: data/raw/upjohn_naatbatt_2023.pdf
- **Credibility**: Tier 3 — Peer-reviewed academic research institute (Upjohn) partnering with industry association (NAATBatt); 27-page technical report with detailed methodology
- **Linked sensitivities**: manufacturing_productivity, automation, energy_density, market_share
- **Linked claims (from Committee Insights sheet)**: "Defining Workforce — Workforce Across the Battery Value Chain (Upstream vs. midstream vs. downstream workforce differences)", researcher: Priyanka Mohanty; "Current State Estimates", researcher: Jordan Elkins; "Current State Estimates", researcher: Andrew Weng

## Extracted Quotes / Claims

> "In 2023, NAATBatt estimated that producing 200 gigawatt-hours of lithium-ion batteries in the United States supported approximately 63,700 jobs across the battery supply chain."

> "Employment was concentrated in the downstream manufacturing and deployment segments of the industry. The largest source of jobs was module and pack assembly, which accounted for about 13,900 jobs (21.8%), followed by electrode and cell manufacturing with roughly 10,600 jobs (16.6%) and service and repair activities with about 9,800 jobs (15.4%). Together, these three segments represented more than half of all supply-chain employment."

> "Other significant employment categories included other battery component materials manufacturing (6,700 jobs, 10.6%), research and development (6,200 jobs, 9.7%), and battery-grade materials production (4,700 jobs, 7.4%). The equipment manufacturing segment supported approximately 4,200 jobs (6.6%). By contrast, the most upstream portions of the supply chain employed relatively fewer workers. Raw materials extraction and processing accounted for only about 1,800 jobs (2.9%), while end-of-life and recycling activities supported roughly 3,000 jobs (4.7%)."

> "The largest share of jobs forecasted are for assemblers and fabricators, SOC 51-2000... Median earnings for this occupation range from $37,280 to $50,850 in 2022, with typical entry-level education being a high school diploma or equivalent... Skills beneficial to prospective workers in this industry include industrial mechatronics and PLC programming, electrical and chemical safe-handling, detail-orientation, and ability to follow complex processes."

> "Looking at all of the detailed occupations that make up the 2030 estimate of 310,000 employees, we examine the education needed to enter these occupations and the kinds of training generally received after hire. Overall, 32 percent of employees were in occupations requiring a bachelor's degree or higher, and 68 percent were in occupations generally requiring an associate degree, a postsecondary nondegree award, a high school diploma, or no formal education to enter."

> "Growth of the lithium-ion battery manufacturing industry in the United States is also expected to bring significant job demand for Engineering occupations, SOC 17-2000... Median U.S. wages in 2022 ranged from $92,459 to $112,978, with entry-level education of a bachelor's degree required for most engineering occupations."

> "Metal and Plastic Workers, SOC 51-4000... Median pay for this occupation was $41,060 in 2022, with a typical education of an associate degree or high school diploma and moderate-term on-the-job training... Familiarity with CAD, CAM, CNC and/or PLC industrial control applications is often required."

> "Lithium-ion batteries are regulated as a hazardous material by the U.S. Department of Transportation... Material moving workers are required to understand and implement the appropriate safety precautions when handling these batteries... The median annual wages vary from $34,000 to $59,000."

> "This report projects major workforce growth in the U.S. lithium-ion battery supply chain as domestic battery production expands to support the electric vehicle transition. It estimates the industry will employ 310,000 workers by 2030."

## Notes

**HIGH-PRIORITY SOURCE FOR EXTRACTION.** This is the most comprehensive quantitative source in the collection. Critical metrics for sensitivity modeling:

- 2023 baseline: 63,700 jobs / 200 GWh = **318.5 jobs/GWh (value-chain-wide)** — use this to anchor manufacturing_productivity sensitivity
- 2030 projection: 310,000 jobs (4.9x growth in 7 years)
- Segment breakdown provides detailed labor intensity by supply chain position (pack assembly 21.8%, cell/electrode 16.6%, service 15.4%)
- Education distribution: 32% bachelor's+, 68% sub-bachelor (critical for training infrastructure assumption)
- Wage ranges by occupation (assemblers $37-51k, engineers $92-113k, material handlers $34-59k)

The report includes occupational SOC codes, entry education requirements, and on-the-job training duration—enabling detailed workforce composition modeling. Appendix referenced but not fully extracted; recommend deep read of full PDF to extract segment-by-segment labor intensity tables and 2030 projections by occupational category. This source should drive the master labor_intensity.json curve and 2030 forecasts.
