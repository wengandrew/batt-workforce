# Battery Manufacturing Workforce Outlook

**Quantifying Workforce Demand Through 2050**

A collaborative research project by the Volta Foundation Workforce Committee to answer: *How many workers are needed for battery manufacturing?*

## About This Project

The battery industry does not have a factory workforce problem — it has a full industrial workforce problem. Current workforce estimates focus narrowly on direct plant jobs, but the true workforce required per GWh of battery production spans direct, indirect, induced, and upstream roles across the entire value chain.

This repository houses the data, analysis, and interactive tools behind the Volta Foundation's 2026 State of Industry workforce report. Our goal is to produce:

1. **A comprehensive report** quantifying total workforce demand per GWh and projecting global battery workforce needs through 2035 and 2050
2. **An interactive dashboard** that lets stakeholders explore workforce projections under different assumptions about automation, market share, growth rates, and policy scenarios

## Live Dashboard & Report

The report and dashboard are deployed via GitHub Pages:

**[View the Dashboard & Report](https://wengandrew.github.io/batt-workforce/)**

## Key Findings (In Progress)

- Battery cell manufacturing **labor intensity peaks during production ramp-up**, often exceeding 400 workers per GWh
- At steady-state production, best-in-class plants approach **80 workers per GWh**
- Key benchmarks from publicly available data:
  - CATL (Global): 143 workers/GWh
  - LGES (Michigan, US): 108 workers/GWh
  - PENA (Nevada, US): 137 workers/GWh
  - LGES (Wroclaw, Poland): 81 workers/GWh (steady-state), 464 workers/GWh (ramp-up)

## Major Uncertainties

- **Automation**: How much will increased automation reduce direct labor needs?
- **Energy density improvements**: Higher Wh/kg means fewer cells (and workers) per GWh
- **Manufacturing productivity**: Learning curves and process maturity
- **Regional market share**: What fraction of global production will the US, EU, and China each capture?
- **Policy scenarios**: Subsidies, tariffs, and industrial policy effects on workforce distribution

## Repository Structure

| Directory | Purpose |
|-----------|---------|
| `data/raw/` | Primary research source files (PDFs, spreadsheets) |
| `data/processed/` | Structured data extracted from sources, organized by sensitivity |
| `site/` | Combined HTML report + interactive D3.js dashboard |
| `scripts/` | Python scripts for data processing and dashboard generation |
| `Plan.md` | Living project roadmap and task checklist |

See [CLAUDE.md](CLAUDE.md) for detailed development instructions.

## Contributing

This is a collaborative research effort. To contribute:

1. Provide primary source documents (place in `data/raw/`)
2. Help extract and validate quantitative data
3. Review assumptions and sensitivity parameters
4. Suggest additional data sources or analytical approaches

## References

Based on the Committee Insights paper: *"2026 State of Industry: How Many Workers Are Needed for Battery Manufacturing?"* — Volta Foundation Workforce Committee.
