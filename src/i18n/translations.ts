export const translations = {
  // Nav
  "nav.home": "Home",
  "nav.articles": "Articles",
  "nav.projects": "Projects",
  "nav.about": "About",
  "nav.openMenu": "Open menu",

  // Home
  "home.subtitle": "Portfolio & Blog",
  "home.description":
    "Passionate web developer. I build tools, write about tech, and share my projects.",
  "home.readArticles": "Read articles",
  "home.downloadCV": "Download my resume",
  "home.featuredProjects": "Featured projects",
  "home.latestArticles": "Latest articles",
  "home.allProjects": "View all projects",
  "home.allArticles": "View all articles",

  // Articles
  "articles.title": "ARTICLES",
  "articles.description": "Tech articles, reviews and devblog by Simon Hazard.",
  "articles.all": "All",
  "articles.noResults": "No articles found.",
  "articles.aiAssisted": "AI-Assisted Writing",
  "articles.aiAssistedDescription": "Content written by hand, reformulated with AI assistance.",

  // Devblog
  "devblog.title": "DEVBLOG",
  "devblog.description": "Development journal of my personal projects.",
  "devblog.subtitle": "Development journal of my ongoing personal projects.",
  "devblog.empty": "No devblog articles yet.",

  // Projects
  "projects.title": "PROJECTS",
  "projects.description": "Personal and open source projects by Simon Hazard.",

  // About
  "about.title": "ABOUT",
  "about.description": "Learn more about Simon Hazard, web developer.",
  "about.bio": "Bio",
  "about.contact": "Contact",
  "about.p1":
    "I'm a web developer passionate about modern technologies and building tools that matter.",
  "about.p2":
    "Specializing in the TypeScript ecosystem, open to working with any modern framework or library. Passionate about front-end development, I stay curious about new technologies and best practices, always striving for clean and high-quality code.",
  "about.p3":
    "This site is my space to document my projects, write technical articles, and share my passion for video games and board games.",

  // Footer
  "footer.copyright": "Simon Hazard",

  // Theme
  "theme.toggle": "Toggle dark/light theme",

  // Meta
  "meta.defaultDescription":
    "Blog & portfolio by Simon Hazard — web developer, personal projects and tech articles.",
} as const;

export type TranslationKey = keyof typeof translations;
