# Source Catalog

This directory contains one markdown file per primary source cited in the
research, documenting its citation details, credibility rating, and the
specific quotes/claims it supports.

## Credibility Scale

Each source is rated on a 7-tier scale (1 = most credible, 7 = least
credible), recorded in `sources.yaml` as `credibility: {tier, rationale}`:

1. Government agencies, national labs, statistical agencies, regulatory filings, official datasets
2. Company primary sources (investor presentations, SEC filings, earnings calls, press releases, official project pages, technical docs)
3. Peer-reviewed literature, academic reports, technical standards
4. Reputable industry research organizations and market-intelligence firms
5. High-quality trade press and business journalism with named sources and specific data
6. Expert commentary, conference presentations, practitioner sources
7. Blogs, opinion pieces, promotional materials, unsourced claims

The tier reflects the *type* of source, not the correctness of any
individual claim — a tier 1 source can still be wrong, and a tier 6 source
can still report something true. Use the tier as a prior when weighing
conflicting numbers.

## File Format

Each `<source_id>.md` follows this structure:

```markdown
# <Name>

- **URL**: ...
- **Type**: ...
- **Accessed**: <date>
- **Raw file**: data/raw/<file> (or "not archived: <reason>")
- **Credibility**: Tier N — <rationale>
- **Linked sensitivities**: ...
- **Linked claims (from Committee Insights sheet)**: <claim section>, researcher: <name>

## Extracted Quotes / Claims
> "<verbatim quote from sheet>"

## Notes
<any caveats, paywall status, follow-up extraction ideas>
```

The `<source_id>` matches the `id` field for the same source in
`../sources.yaml`.
