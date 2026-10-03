# Constellation

An exploratory rare-disease knowledge atlas built for the 7th Global AI Hackathon, Challenge 05: **AI Atlas for the World's Rare Diseases**.

> Five thousand scattered points of light. One map to see the constellations.

## Run locally

Requires Bun (or a compatible Node.js package manager).

```sh
bun install
bun run dev
```

Open the local URL printed by Vite. `bun run build` produces a production build.

## Prototype architecture

- **TanStack Start / React / TypeScript:** the home route contains search, a context-sensitive evidence inspector, and Maria, Devon, Priya, and Dr. Osei views.
- **SVG + d3-force:** the interactive map lays out nodes with a force simulation; users can select nodes or relationships, drag to pan, scroll or use controls to zoom, and switch pathway focus.
- **Local typed data:** `src/lib/atlas-data.ts` defines every node, edge, synonym, source reference, confidence estimate, evidence status, and caveat. Search normalizes case, punctuation, and accents and matches labels and aliases. No external service or database is needed.
- **Styling:** semantic color tokens live in `src/styles.css`. The two pathway colors distinguish clusters; confidence and uncertainty use separate signals.

## Reproduce the dataset

The shipped dataset is deterministic: `nodes` and `edges` in `src/lib/atlas-data.ts` are the complete source. There are two manually curated demonstration clusters: lysosomal lipid clearance (Niemann–Pick type C, Gaucher, Fabry) and neuronal excitability (Dravet/SCN1A, SCN2A, SCN8A, KCNQ2). It contains genes, illustrative variant classes, phenotypes, studies, patient groups, registries/models, and named researchers. Change those arrays to add or remove records; every edge references its endpoint IDs.

Some OMIM and HPO identifiers refer to established disease/gene/phenotype concepts. **All PMID and NCT identifiers marked “(demo)” are illustrative placeholders, not verified records.** Research assets and organizational ownership links labeled illustrative/inferred have not been verified. Confidence scores are editorial demo estimates, not model-derived probabilities or clinical evidence grades. Named researchers are examples, with no implied involvement or availability. The graph is not medical advice, a treatment recommendation, or a live registry of active trials.

## What is not connected yet

No live APIs, AI extraction, persistent search history, authenticated contribution, or automated evidence reconciliation. Before using the atlas for real decisions, replace illustrative references with verified source records, verify each study’s status and eligibility, review contradictory literature, and confirm data reuse and researcher participation with their owners.
