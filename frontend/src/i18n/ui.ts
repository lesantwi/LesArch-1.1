/**
 * i18n strings.
 * Default = English (full).
 * Other locales currently mirror English; replace strings to translate.
 * Site content (descriptions, etc.) lives in /src/data/sites.ts.
 */

export type Locale = 'en' | 'fr' | 'ar' | 'ja';

export const LOCALES: Locale[] = ['en', 'fr', 'ar', 'ja'];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
  ja: '日本語',
};

export const LOCALE_DIR: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  fr: 'ltr',
  ar: 'rtl',
  ja: 'ltr',
};

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.map': 'Explore Map',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact & Submit',
    'hero.title': 'Discover Ancient Worlds in 3D',
    'hero.subtitle': 'Immersive explorations of archaeological sites',
    'hero.cta': 'Explore Sites',
    'home.welcome.title': 'A Gateway to Global Heritage',
    'home.welcome.body':
      'LesArch is an open-research platform for exploring archaeological sites through interactive maps, citable 3D reconstructions, and rigorous scholarship.',
    'home.projects.title': 'Our Archaeological Projects',
    'home.projects.cta': 'View all projects',
    'home.fact.title': 'Did You Know?',
    'map.title': 'The Atlas',
    'map.subtitle': 'Pan, zoom, and filter ancient sites across time and place.',
    'map.search': 'Search a site, country, or era…',
    'map.filter.era': 'Era',
    'map.filter.status': 'Status',
    'map.filter.all': 'All',
    'map.timeline': 'Timeline',
    'projects.title': 'Projects',
    'projects.subtitle': 'Ongoing and planned digital reconstructions.',
    'about.title': 'About LesArch',
    'about.subtitle': 'Preserving and sharing history through technology.',
    'contact.title': 'Get in Touch & Contribute',
    'contact.subtitle': "We'd love to hear from you or receive your archaeological submissions.",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send via GitHub Issue',
    'contact.form.note':
      'Submissions open a pre-filled GitHub issue. You can review before posting.',
    'submit.title': 'Submit a 3D Model',
    'submit.modelName': 'Model name',
    'submit.modelLink': 'Repository link (Zenodo / iDAI.repo / Google Drive)',
    'submit.notes': 'Notes & licensing',
    'submit.send': 'Open submission on GitHub',
    'status.completed': 'Completed',
    'status.in-progress': 'In progress',
    'status.planned': 'Planned',
    'site.cite': 'Cite this model',
    'site.viewModel': 'View 3D model',
    'site.viewDetails': 'View details',
    'site.viewAR': 'View in your space (AR)',
    'site.references': 'References',
    'footer.tagline':
      'Bringing history to life through immersive 3D reconstructions and open research.',
    'footer.rights': 'All rights reserved.',
  },
  fr: {} as Record<string, string>,
  ar: {} as Record<string, string>,
  ja: {} as Record<string, string>,
} as const;

// Minimal French overlay (community translations welcome)
ui.fr = {
  ...ui.en,
  'nav.home': 'Accueil',
  'nav.map': 'Explorer la carte',
  'nav.projects': 'Projets',
  'nav.about': 'À propos',
  'nav.contact': 'Contact & contribuer',
  'hero.title': 'Découvrez les mondes anciens en 3D',
  'hero.subtitle': 'Explorations immersives de sites archéologiques',
  'hero.cta': 'Explorer les sites',
  'home.welcome.title': 'Une porte vers le patrimoine mondial',
  'map.title': "L'Atlas",
  'projects.title': 'Projets',
  'about.title': 'À propos de LesArch',
  'contact.title': 'Nous contacter & contribuer',
  'status.completed': 'Terminé',
  'status.in-progress': 'En cours',
  'status.planned': 'Prévu',
};

// Minimal Arabic overlay
ui.ar = {
  ...ui.en,
  'nav.home': 'الرئيسية',
  'nav.map': 'استكشف الخريطة',
  'nav.projects': 'المشاريع',
  'nav.about': 'حول',
  'nav.contact': 'اتصل وأرسل',
  'hero.title': 'اكتشف العوالم القديمة بأبعاد ثلاثية',
  'hero.subtitle': 'استكشافات غامرة للمواقع الأثرية',
  'hero.cta': 'استكشف المواقع',
  'home.welcome.title': 'بوابتك إلى التراث العالمي',
  'map.title': 'الأطلس',
  'projects.title': 'المشاريع',
  'about.title': 'حول ليس آرك',
  'contact.title': 'تواصل وساهم',
  'status.completed': 'مكتمل',
  'status.in-progress': 'قيد التنفيذ',
  'status.planned': 'مخطط',
};

// Minimal Japanese overlay
ui.ja = {
  ...ui.en,
  'nav.home': 'ホーム',
  'nav.map': '地図を探す',
  'nav.projects': 'プロジェクト',
  'nav.about': '私たちについて',
  'nav.contact': 'お問い合わせ・投稿',
  'hero.title': '古代世界を3Dで発見',
  'hero.subtitle': '考古学遺跡の没入型探索',
  'hero.cta': '遺跡を探す',
  'home.welcome.title': '世界遺産への入り口',
  'map.title': 'アトラス',
  'projects.title': 'プロジェクト',
  'about.title': 'LesArchについて',
  'contact.title': 'お問い合わせ・貢献',
  'status.completed': '完了',
  'status.in-progress': '進行中',
  'status.planned': '計画中',
};

export function t(locale: Locale, key: string): string {
  const dict = ui[locale] as Record<string, string>;
  const fallback = ui.en as Record<string, string>;
  return dict[key] ?? fallback[key] ?? key;
}
