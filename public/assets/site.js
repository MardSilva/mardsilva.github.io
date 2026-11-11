const esCopy = {
  'pt-PT': {
    navProjects: 'Projetos', navAbout: 'Sobre', navContact: 'Contacto', contactUs: 'Falar connosco',
    cEyebrow: 'ES APPZ / CRIAÇÕES INDEPENDENTES',
    cHero1: 'Uma casa para', cHero2: 'ideias digitais.',
    cIntro: 'Apps que ajudam. Jogos que divertem. Criamos experiências para diferentes momentos, numa única marca.',
    cExplore: 'Ver projetos', cMore: 'Explorar a ES Appz',
    cPlayChip: 'JOGOS / PUZZLES', cAppsChip: 'APPS / PESSOAS', cCommunityTag: 'COMUNIDADE / CONGREGA',
    cozyMotto: 'Descontrai, uma seta de cada vez.',
    cProjects: 'OS NOSSOS UNIVERSOS', cProjectsTitle: 'Feitos para momentos diferentes.',
    cozyType: 'JOGO · PUZZLE', cozyDesc: 'Um puzzle de setas, formas e descobertas para descontrair ao teu ritmo.',
    cozyAction: 'Pedir acesso aos testes',
    congregaType: 'APLICAÇÃO · COMUNIDADE', congregaDesc: 'Uma plataforma para igrejas, com agenda, conteúdos, academia e Bíblia.',
    congregaAction: 'Visitar o Congrega',
    cStudio: 'APPS + JOGOS', cStudioTitle: 'Sempre a criar.', cStudioText: 'O próximo projeto também terá lugar aqui.',
    cContactTitle: 'Uma ideia começa com uma conversa.',
    footer: 'Apps, jogos e experiências digitais.', adsStatement: 'Declaração de anúncios'
  },
  'pt-BR': {
    navProjects: 'Projetos', navAbout: 'Sobre', navContact: 'Contato', contactUs: 'Fale com a gente',
    cEyebrow: 'ES APPZ / CRIAÇÕES INDEPENDENTES',
    cHero1: 'Uma casa para', cHero2: 'ideias digitais.',
    cIntro: 'Apps que ajudam. Jogos que divertem. Criamos experiências para momentos diferentes, em uma só marca.',
    cExplore: 'Ver projetos', cMore: 'Conheça a ES Appz',
    cPlayChip: 'JOGOS / PUZZLES', cAppsChip: 'APPS / PESSOAS', cCommunityTag: 'COMUNIDADE / CONGREGA',
    cozyMotto: 'Relaxe, uma seta de cada vez.',
    cProjects: 'NOSSOS UNIVERSOS', cProjectsTitle: 'Feitos para momentos diferentes.',
    cozyType: 'JOGO · PUZZLE', cozyDesc: 'Um puzzle de setas, formas e descobertas para relaxar no seu ritmo.',
    cozyAction: 'Pedir acesso aos testes',
    congregaType: 'APLICATIVO · COMUNIDADE', congregaDesc: 'Uma plataforma para igrejas, com agenda, conteúdos, cursos e Bíblia.',
    congregaAction: 'Conhecer o Congrega',
    cStudio: 'APPS + JOGOS', cStudioTitle: 'Sempre criando.', cStudioText: 'O próximo projeto também terá lugar aqui.',
    cContactTitle: 'Uma ideia começa com uma conversa.',
    footer: 'Aplicativos, jogos e experiências digitais.', adsStatement: 'Declaração de anúncios'
  },
  'en-US': {
    navProjects: 'Projects', navAbout: 'About', navContact: 'Contact', contactUs: 'Get in touch',
    cEyebrow: 'ES APPZ / INDEPENDENT CREATIONS',
    cHero1: 'A home for', cHero2: 'digital ideas.',
    cIntro: 'Apps that help. Games that make you smile. Experiences for different moments, under one brand.',
    cExplore: 'See projects', cMore: 'Explore ES Appz',
    cPlayChip: 'GAMES / PUZZLES', cAppsChip: 'APPS / PEOPLE', cCommunityTag: 'COMMUNITY / CONGREGA',
    cozyMotto: 'Unwind, one arrow at a time.',
    cProjects: 'OUR WORLDS', cProjectsTitle: 'Made for different moments.',
    cozyType: 'GAME · PUZZLE', cozyDesc: 'An arrow-and-shape puzzle full of little discoveries, made for unwinding at your own pace.',
    cozyAction: 'Request test access',
    congregaType: 'APP · COMMUNITY', congregaDesc: 'A platform for churches with schedules, content, learning, and the Bible.',
    congregaAction: 'Visit Congrega',
    cStudio: 'APPS + GAMES', cStudioTitle: 'Always creating.', cStudioText: 'The next project will find its home here, too.',
    cContactTitle: 'A new idea starts with a conversation.',
    footer: 'Apps, games, and digital experiences.', adsStatement: 'Advertising disclosure'
  }
};

const esThemeLabels = {
  'pt-PT': { light: 'Mudar para o modo claro', dark: 'Mudar para o modo escuro' },
  'pt-BR': { light: 'Mudar para o modo claro', dark: 'Mudar para o modo escuro' },
  'en-US': { light: 'Switch to light mode', dark: 'Switch to dark mode' }
};

const esThemeToggle = document.querySelector('[data-theme-toggle]');
const esLocaleButtons = document.querySelectorAll('[data-locale]');

function esUpdateThemeLabel() {
  const lang = esCopy[document.documentElement.lang] ? document.documentElement.lang : 'pt-PT';
  const isLight = document.documentElement.dataset.theme === 'light';
  const label = esThemeLabels[lang][isLight ? 'dark' : 'light'];
  esThemeToggle.setAttribute('aria-label', label);
  esThemeToggle.title = label;
  esThemeToggle.setAttribute('aria-pressed', String(isLight));
}

function esApplyTheme(theme, persist = true) {
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  document.querySelector('meta[name="theme-color"]').content = nextTheme === 'light' ? '#f3f8f7' : '#0b1c25';
  esUpdateThemeLabel();
  if (persist) {
    try { localStorage.setItem('esappz-theme', nextTheme); } catch (_) {}
  }
}

function esSetLanguage(locale, persist = true) {
  const lang = esCopy[locale] ? locale : 'pt-PT';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = esCopy[lang][element.dataset.i18n];
    if (typeof translation === 'string') element.textContent = translation;
  });
  esLocaleButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.locale === lang));
  });
  esUpdateThemeLabel();
  if (persist) {
    try { localStorage.setItem('esappz-locale', lang); } catch (_) {}
  }
}

esLocaleButtons.forEach(button => {
  button.addEventListener('click', () => esSetLanguage(button.dataset.locale));
});

esThemeToggle.addEventListener('click', () => {
  esApplyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
});

let esInitialLocale = null;
try { esInitialLocale = localStorage.getItem('esappz-locale'); } catch (_) {}
const esBrowserLocale = navigator.language || '';
const esFallbackLocale = /^pt-BR/i.test(esBrowserLocale) ? 'pt-BR' : /^en/i.test(esBrowserLocale) ? 'en-US' : 'pt-PT';
esSetLanguage(esInitialLocale || esFallbackLocale, false);
esApplyTheme(document.documentElement.dataset.theme || 'dark', false);
document.getElementById('year').textContent = new Date().getFullYear();
