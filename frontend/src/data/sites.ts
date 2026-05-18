/**
 * SITE DATA — Single source of truth for all archaeological sites.
 * Add a new site here and it automatically appears on:
 *   • the map (with marker, popup, era filter)
 *   • the projects page
 *   • the homepage carousel
 *   • a dedicated /sites/[slug] detail page
 *   • the sitemap and structured data
 */

export type SiteStatus = 'completed' | 'in-progress' | 'planned';
export type Era =
  | 'prehistoric'
  | 'ancient-egypt'
  | 'classical-antiquity'
  | 'roman'
  | 'medieval'
  | 'early-modern';

export interface ArchSite {
  slug: string;
  name: string;
  country: string;
  region: string;
  era: Era;
  eraLabel: string;       // human-readable era for the timeline
  yearStart: number;      // negative = BCE, used for timeline slider
  yearEnd: number;
  type: string;           // "Aqueduct", "Temple", "Mosque", ...
  status: SiteStatus;
  coords: [number, number]; // [lat, lng]
  thumbnail: string;        // card image (relative to /public)
  hero: string;             // hero image
  shortDescription: string;
  longDescription: string;
  researchRelevance: string;
  modelUrl?: string;        // .glb path (relative to /public)
  modelAvailable: boolean;
  doi?: string;             // Zenodo / iDAI.repo DOI
  iiifManifest?: string;    // optional IIIF manifest URL for deep-zoom imagery
  references?: { label: string; url: string }[];
}

export const SITES: ArchSite[] = [
  {
    slug: 'pont-du-gard',
    name: 'Pont du Gard',
    country: 'France',
    region: 'Europe',
    era: 'roman',
    eraLabel: 'Roman, 1st century AD',
    yearStart: 40,
    yearEnd: 60,
    type: 'Aqueduct Bridge',
    status: 'completed',
    coords: [43.9478, 4.5357],
    thumbnail: 'assets/project_thumb_point_du_gard.webp',
    hero: 'assets/site_hero_pont_du_gard.webp',
    shortDescription:
      'A monumental Roman aqueduct bridge, part of a 50 km system that supplied water to ancient Nemausus (Nîmes).',
    longDescription:
      'The Pont du Gard is a UNESCO-listed Roman aqueduct bridge in southern France. Built in the 1st century AD without the use of mortar, its three tiers of arches stand 48.8 m high and span the Gardon River. The aqueduct it carried delivered an estimated 40,000 m³ of fresh water per day to the Roman city of Nemausus (modern Nîmes), nearly 50 km away. It is one of the best-preserved examples of Roman hydraulic engineering and remains a masterpiece of structural design.',
    researchRelevance:
      'The model supports research into Roman hydraulic engineering, structural analysis, and the urban water economy of Roman Gaul. As a citable digital twin, it enables non-invasive study and public outreach.',
    modelUrl: 'models/le_pont_du_gard.glb',
    modelAvailable: true,
    doi: '10.5281/zenodo.15873327',
    references: [
      { label: 'UNESCO World Heritage', url: 'https://whc.unesco.org/en/list/344/' },
      { label: 'Zenodo dataset (DOI)', url: 'https://doi.org/10.5281/zenodo.15873327' },
    ],
  },
  {
    slug: 'asuka-dera',
    name: 'Asuka-dera Temple',
    country: 'Japan',
    region: 'Asia',
    era: 'medieval',
    eraLabel: 'Asuka period, 6th century AD',
    yearStart: 588,
    yearEnd: 596,
    type: 'Buddhist Temple',
    status: 'in-progress',
    coords: [34.468, 135.827],
    thumbnail: 'assets/asuka-dera-view.jpg',
    hero: 'assets/asuka-dera-full.webp',
    shortDescription:
      "Japan's first full-fledged Buddhist temple, a pivotal site for early Japanese Buddhism and continental cultural exchange.",
    longDescription:
      "Asuka-dera (also known as Hōkō-ji) was founded in 588 AD under the patronage of the Soga clan and completed in 596 AD. It marks the formal introduction of Buddhism to Japan and was Japan's earliest temple built in continental Asian style. Our reconstruction aims to visualize the original grand complex — long since lost — based on archaeological foundations and contemporary records, providing a tool to study early Japanese religious architecture and its Korean and Chinese antecedents.",
    researchRelevance:
      'Contributes to studies of cultural diffusion across East Asia, the evolution of Buddhist temple architecture, and the political-religious history of the Asuka period.',
    modelAvailable: false,
  },
  {
    slug: 'larabanga-mosque',
    name: 'Larabanga Mosque',
    country: 'Ghana',
    region: 'Africa',
    era: 'medieval',
    eraLabel: 'Sudano-Sahelian, 15th century AD',
    yearStart: 1421,
    yearEnd: 1421,
    type: 'Mosque',
    status: 'planned',
    coords: [9.2189, -1.8531],
    thumbnail: 'assets/larabanga.jpg',
    hero: 'assets/larabanga-aerial.webp',
    shortDescription:
      "One of Ghana's oldest mosques and a striking example of the Sudano-Sahelian architectural tradition in West Africa.",
    longDescription:
      "Built around 1421 AD, the Larabanga Mosque is one of the oldest mosques in West Africa and a defining example of Sudano-Sahelian earthen architecture. Constructed from mud, sticks and reeds, it features the characteristic pyramidal towers and protruding wooden beams (toron) of the style. The mosque has been listed on the World Monuments Fund's Watch list due to ongoing conservation challenges from weather and inappropriate previous restorations. This planned project will involve on-site documentation to produce a research-grade 3D record of the structure.",
    researchRelevance:
      'Provides urgent digital preservation for a threatened West African heritage site, supports architectural analysis of Sudano-Sahelian construction, and serves as a case study for community-based heritage documentation.',
    modelAvailable: false,
  },
  {
    slug: 'petra-treasury',
    name: 'Petra: Al-Khazneh (The Treasury)',
    country: 'Jordan',
    region: 'Middle East',
    era: 'classical-antiquity',
    eraLabel: 'Nabataean, 1st century BC – 1st century AD',
    yearStart: -100,
    yearEnd: 100,
    type: 'Rock-Cut Monument',
    status: 'planned',
    coords: [30.3285, 35.4444],
    thumbnail: 'assets/project_thumb_upcoming1.webp',
    hero: 'assets/project_thumb_upcoming1.webp',
    shortDescription:
      'The iconic rock-cut facade of the Nabataean capital Petra — likely a royal mausoleum from the 1st century BCE/CE.',
    longDescription:
      'Al-Khazneh ("The Treasury") is the most famous monument of Petra, carved directly into the sandstone cliff face. Combining Hellenistic, Egyptian and Mesopotamian motifs, its 40-meter facade likely served as a royal tomb of a Nabataean king. This planned project will offer an immersive 3D walkthrough that contextualizes the Treasury within the urban layout of Petra and the broader Nabataean trade-network archaeology.',
    researchRelevance:
      'Supports research on Nabataean art and architecture, Hellenistic-Near Eastern cultural blending, and the impact of tourism on rock-cut heritage.',
    modelAvailable: false,
  },
  {
    slug: 'great-pyramid-giza',
    name: 'Great Pyramid of Giza',
    country: 'Egypt',
    region: 'Africa',
    era: 'ancient-egypt',
    eraLabel: 'Old Kingdom, c. 2580–2560 BCE',
    yearStart: -2580,
    yearEnd: -2560,
    type: 'Pyramid',
    status: 'planned',
    coords: [29.9792, 31.1342],
    thumbnail: 'assets/pyramid_of_giza.webp',
    hero: 'assets/pyramid_of_giza.webp',
    shortDescription:
      "The oldest of the Seven Wonders of the Ancient World — Pharaoh Khufu's monumental tomb and one of humanity's greatest engineering feats.",
    longDescription:
      "Built for Pharaoh Khufu c. 2560 BCE, the Great Pyramid of Giza was the tallest human-made structure on Earth for over 3,800 years. It originally rose 146.6 m and was clad in polished Tura limestone. Our future 3D reconstruction will detail both the present-day state and a theorized original appearance, while visualizing the internal chamber system based on current archaeological consensus.",
    researchRelevance:
      'Aids in the study of Old Kingdom construction techniques, funerary architecture, and the cultural significance of monumental tombs.',
    modelAvailable: false,
  },
  {
    slug: 'colosseum',
    name: 'Roman Colosseum',
    country: 'Italy',
    region: 'Europe',
    era: 'roman',
    eraLabel: 'Roman, 70–80 AD',
    yearStart: 70,
    yearEnd: 80,
    type: 'Amphitheatre',
    status: 'planned',
    coords: [41.8902, 12.4922],
    thumbnail: 'assets/project_thumb_accomplished1.jpg',
    hero: 'assets/project_thumb_accomplished1.jpg',
    shortDescription:
      'The largest amphitheatre ever built — a stage for Imperial Rome\'s most public, brutal, and architecturally ambitious spectacles.',
    longDescription:
      'Commissioned under Emperor Vespasian and inaugurated by Titus in 80 AD, the Flavian Amphitheatre (Colosseum) could seat over 50,000 spectators. Its hypogeum — the multi-level network of tunnels and elevators beneath the arena floor — is among the most sophisticated examples of Roman engineering. This planned reconstruction will visualize both the structure in its imperial prime and the present ruined state, side-by-side.',
    researchRelevance:
      'Supports research on Roman spectacle architecture, urban planning, and stratigraphic restoration histories.',
    modelAvailable: false,
  },
  {
    slug: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    region: 'South America',
    era: 'early-modern',
    eraLabel: 'Inca Empire, c. 1450 AD',
    yearStart: 1438,
    yearEnd: 1472,
    type: 'Citadel',
    status: 'planned',
    coords: [-13.1631, -72.545],
    thumbnail: 'assets/site_south_america.webp',
    hero: 'assets/site_south_america.webp',
    shortDescription:
      'A 15th-century Inca citadel perched 2,430 m above sea level in the Andes — astronomical, agricultural and ceremonial.',
    longDescription:
      'Built around 1450 AD under the Inca emperor Pachacuti and abandoned roughly a century later during the Spanish conquest, Machu Picchu was unknown to the outside world until 1911. Its ashlar masonry — stones fitted together so tightly no mortar was needed — has survived centuries of earthquakes. The planned reconstruction will explore the citadel\'s astronomical alignments, agricultural terraces, and ceremonial complexes.',
    researchRelevance:
      'Supports research on Inca engineering, astronomy, and the Andean cultural landscape; serves digital preservation in a high-tourism context.',
    modelAvailable: false,
  },
];

export const ERAS: { value: Era; label: string }[] = [
  { value: 'prehistoric', label: 'Prehistoric' },
  { value: 'ancient-egypt', label: 'Ancient Egypt' },
  { value: 'classical-antiquity', label: 'Classical Antiquity' },
  { value: 'roman', label: 'Roman' },
  { value: 'medieval', label: 'Medieval' },
  { value: 'early-modern', label: 'Early Modern' },
];

export const DID_YOU_KNOW: string[] = [
  'The Pont du Gard carried an estimated 40,000 m³ of fresh water daily — without a single drop of mortar in its 49 m height.',
  'Asuka-dera (588 AD) was modelled on Korean Baekje temple architecture and brought continental Buddhist building traditions to Japan.',
  'The Great Pyramid of Giza held the record as the tallest human-made structure for over 3,800 years.',
  'Petra was carved into living rock — its hydraulics could trap and store rare desert rainfall for an entire year.',
  "Larabanga Mosque's wooden 'toron' beams aren't just decorative — they're permanent scaffolding for re-plastering after the rains.",
  "Machu Picchu's stones fit together so precisely that a knife blade cannot slip between them.",
  'Roman concrete (opus caementicium) used volcanic ash — modern scientists are still studying how it self-heals over centuries.',
];
