/**
 * Achievement definitions — gamification for explorers.
 * Tracked in localStorage; no server, no accounts.
 */

export interface AchievementDef {
  id: string;
  name: string;
  description: string;
  icon: string; // SVG path (24x24)
  /** Optional threshold for count-based achievements */
  threshold?: number;
}

const ICON_COMPASS = '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>';
const ICON_PYRAMID = '<path d="M12 3 3 20h18L12 3Z"/><path d="M12 3v17"/>';
const ICON_BOOK = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>';
const ICON_MAP = '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>';
const ICON_GLOBE = '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>';
const ICON_CLOCK = '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>';
const ICON_BOX_3D = '<path d="m21 16-9 5-9-5V8l9-5 9 5z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><line x1="12" y1="22.08" x2="12" y2="12"/>';
const ICON_KEY = '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>';
const ICON_AR = '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="10" height="10" rx="1"/>';

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: 'first-visit',     name: 'Explorer',         description: 'Visited LesArch for the first time.',    icon: ICON_COMPASS },
  { id: 'site-curator',    name: 'Curator',          description: 'Visited 3 archaeological site pages.',   icon: ICON_BOOK, threshold: 3 },
  { id: 'archivist',       name: 'Archivist',        description: 'Visited every catalogued site.',          icon: ICON_BOX_3D, threshold: 7 },
  { id: 'cartographer',    name: 'Cartographer',     description: 'Explored the interactive atlas.',         icon: ICON_MAP },
  { id: 'chronomancer',    name: 'Chronomancer',     description: 'Ran the time-lapse on the atlas.',        icon: ICON_CLOCK },
  { id: 'world-traveller', name: 'World Traveller',  description: 'Visited sites from 3 different regions.', icon: ICON_GLOBE, threshold: 3 },
  { id: 'modeler',         name: '3D Modeler',       description: 'Loaded a 3D reconstruction.',             icon: ICON_PYRAMID },
  { id: 'ar-explorer',     name: 'AR Explorer',      description: 'Viewed a model in augmented reality.',    icon: ICON_AR },
  { id: 'secret-keeper',   name: 'Secret Keeper',    description: '↑ ↑ ↓ ↓ ← → ← → B A',                     icon: ICON_KEY },
];

export function getAchievement(id: string) {
  return ACHIEVEMENTS.find((a) => a.id === id);
}
