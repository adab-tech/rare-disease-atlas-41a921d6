// Cross-reference identifiers harmonized to RARe-SOURCE-style standards.
// OMIM IDs match the atlas records; Orphanet, MeSH (used by CTD) and NCBI Gene (bioDBnet input) IDs are
// provided for demo harmonization and should be re-verified against each source before reuse.
export type XRef = { system: 'OMIM' | 'Orphanet' | 'CTD' | 'bioDBnet' | 'GARD'; id: string; url: string };
const omim = (id: string): XRef => ({ system: 'OMIM', id: `OMIM:${id}`, url: `https://omim.org/entry/${id}` });
const orpha = (id: string): XRef => ({ system: 'Orphanet', id: `ORPHA:${id}`, url: `https://www.orpha.net/en/disease/detail/${id}` });
const ctdDisease = (mesh: string): XRef => ({ system: 'CTD', id: `MESH:${mesh}`, url: `https://ctdbase.org/detail.go?type=disease&acc=MESH:${mesh}` });
const ctdGene = (gene: string, entrez: string): XRef => ({ system: 'CTD', id: `Gene:${gene}`, url: `https://ctdbase.org/detail.go?type=gene&acc=${entrez}` });
const biodb = (entrez: string): XRef => ({ system: 'bioDBnet', id: `GeneID:${entrez}`, url: `https://biodbnet-abcc.ncifcrf.gov/db/db2db.php` });

export const xrefs: Record<string, XRef[]> = {
  npc: [omim('257220'), orpha('646'), ctdDisease('D052556')],
  gaucher: [omim('230800'), orpha('355'), ctdDisease('D005776')],
  fabry: [omim('301500'), orpha('324'), ctdDisease('D000795')],
  dravet: [omim('607208'), orpha('33069'), ctdDisease('D004831')],
  'scn2a-d': [omim('613721'), orpha('140927')],
  'scn8a-d': [omim('614558'), orpha('306558')],
  'kcnq2-d': [omim('613720'), orpha('439218')],
  npc1: [omim('607623'), ctdGene('NPC1', '4864'), biodb('4864')],
  npc2: [omim('601015'), ctdGene('NPC2', '10577'), biodb('10577')],
  gba1: [omim('606463'), ctdGene('GBA1', '2629'), biodb('2629')],
  gla: [omim('300644'), ctdGene('GLA', '2717'), biodb('2717')],
  scn1a: [omim('182389'), ctdGene('SCN1A', '6323'), biodb('6323')],
  scn2a: [omim('182390'), ctdGene('SCN2A', '6326'), biodb('6326')],
  scn8a: [omim('600702'), ctdGene('SCN8A', '6334'), biodb('6334')],
  kcnq2: [omim('602235'), ctdGene('KCNQ2', '3785'), biodb('3785')],
};

export const gaps = [
  { n: 1, title: 'Literature co-occurrence → mechanistic causality', from: 'RARe-SOURCE mines Medline abstracts for disease–gene co-mentions.', to: 'Constellation adds directed gene → variant → pathway → phenotype links, each marked observed or inferred with a confidence score.' },
  { n: 2, title: 'Harmonized aggregation → contradiction resolution', from: 'Aggregated evidence is summarized as counts and harmonized records.', to: 'Constellation flags conflicts such as gain- vs loss-of-function variants and proposes the experiment that would resolve each one.' },
  { n: 3, title: 'Structured querying → zero-friction clinical intake', from: 'Queries assume the user already knows the disease or identifier.', to: 'Constellation pulls HPO terms from pasted notes or discharge summaries, locally in the browser, and ranks overlapping clusters.' },
  { n: 4, title: 'Flat identifier exports → multi-stakeholder action dossiers', from: 'Results export as CSV tables of identifiers.', to: 'Constellation produces a 12-section IRB/grant briefing with hypotheses, investigators, studies, conflicts and citations.' },
];
