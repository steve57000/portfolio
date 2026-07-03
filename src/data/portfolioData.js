import cardImage from '../assets/images/cardImage.png';
import groupomaniaImage from '../assets/images/groupomania.PNG';
import kasaImage from '../assets/images/kasa.PNG';
import fishEyeImage from '../assets/images/fishEye.PNG';
import kanapImage from '../assets/images/kanap.png';
import reserviaImage from '../assets/images/reservia.png';
import ohMyFoodImage from '../assets/images/oh-my-food.png';
import gameonImage from '../assets/images/gameon.PNG';
import petitsPlatsImage from '../assets/images/lespetitsplats.PNG';
import billedImage from '../assets/images/billed.PNG';
import learnHomeImage from '../assets/images/learnhome.PNG';
import btImage from '../assets/images/bt-accueil.webp';

export const profile = {
  name: 'Steve Bell',
  title: 'Développeur fullstack Java / Angular & Data Analyst junior',
  location: 'Ars-sur-Moselle / Metz',
  email: 'steve.bell57000@gmail.com',
  summary: "Je conçois des applications métier et des analyses de données exploitables, avec une attention forte portée à la qualité, à la clarté et à l'usage réel.",
  value: 'Applications métier, API sécurisées, SQL, dashboards et données propres pour prendre de meilleures décisions.',
  links: {
    github: 'https://github.com/steve57000',
    linkedin: 'https://www.linkedin.com/in/steve-bell57',
    portfolio: 'https://steve57000.github.io/portfolio/'
  }
};

export const projectCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'data-bi', label: 'Data / BI' },
  { id: 'frontend', label: 'Front-end' },
  { id: 'tools', label: 'Outils' },
  { id: 'archives', label: 'Archives' }
];

export const capabilities = [
  { title: 'Applications métier', text: 'Transformer un besoin terrain en parcours utilisateur, règles métier et écrans utiles.' },
  { title: 'APIs sécurisées', text: 'Structurer des backends Java/Spring Boot, authentification JWT, rôles et modèles relationnels.' },
  { title: 'Données propres', text: 'Nettoyer, consolider, contrôler et documenter des jeux de données exploitables.' },
  { title: 'Restitution décisionnelle', text: 'Construire des indicateurs, dashboards et analyses orientés action.' }
];

export const skills = [
  { group: 'Fullstack', items: ['Angular', 'React', 'Vue', 'Spring Boot', 'REST API', 'SSR'] },
  { group: 'Backend', items: ['Java 17', 'Node.js', 'Express', 'JWT', 'PostgreSQL', 'MySQL'] },
  { group: 'Frontend', items: ['TypeScript', 'JavaScript', 'HTML/CSS', 'SCSS', 'Styled-components', 'Accessibilité'] },
  { group: 'Data / BI', items: ['SQL', 'Python', 'pandas', 'numpy', 'Jupyter', 'matplotlib', 'seaborn', 'Excel'] },
  { group: 'Qualité / méthode', items: ['Modélisation', 'RGPD', 'Documentation', 'Contrôle qualité', 'Responsive', 'Git'] },
  { group: 'Outils', items: ['Docker', 'GitHub Pages', 'localStorage', 'CSV', 'scripts de vérification', 'veille technique'] }
];

export const journey = [
  { period: 'Aujourd’hui', title: 'Fullstack Java / Angular & Data / BI', text: "Positionnement centré sur les applications métier, la donnée exploitable, SQL, les dashboards et l'architecture front/back." },
  { period: 'Formation data / BI', title: 'Analyse de données et modélisation', text: 'Projets de nettoyage, anonymisation RGPD, bases relationnelles PostgreSQL et analyses métier.' },
  { period: 'OpenClassrooms', title: 'Développement web', text: 'Socle front-end puis fullstack : React, Vue, Node.js, Express, MySQL, accessibilité, tests et documentation.' },
  { period: 'Parcours terrain', title: 'Culture technique et usage réel', text: 'Expérience pratique issue de domaines techniques, utile pour comprendre les contraintes concrètes et les besoins opérationnels.' }
];

const imageFallback = cardImage;

export const projects = [
  {
    id: 'jlh-autopam', title: 'JLH AutoPam', shortTitle: 'Garage connecté', category: 'fullstack', featured: true,
    status: 'En cours / projet vitrine', period: '2026', role: 'Développeur fullstack', image: imageFallback, accent: '#2d7f82',
    stack: ['Angular 20', 'Angular SSR', 'TypeScript', 'SCSS', 'Spring Boot 3.5', 'Java 17', 'PostgreSQL', 'JWT', 'Docker'],
    skills: ['Architecture front/back', 'API REST', 'Authentification', 'Rôles', 'Workflow métier'],
    summary: 'Application métier complète pour un garage automobile, avec espace client, administration, demandes, devis et rendez-vous.',
    problem: 'Centraliser les demandes clients, les services, les rendez-vous et la gestion administrative dans une application unique.',
    solution: 'Frontend Angular SSR, API Spring Boot sécurisée, rôles client/admin, calendrier, documents, promotions et dashboard.',
    impact: 'Projet le plus représentatif de mon profil fullstack actuel : conception applicative, sécurité, données et expérience utilisateur.',
    highlights: ['Authentification JWT', 'Espace client', 'Back-office manager', 'Devis et rendez-vous', 'Dashboard', 'Docker'],
    metrics: ['Angular SSR', 'Spring Boot 3.5', 'API REST sécurisée'],
    links: { repo: 'https://github.com/steve57000/jlh' }
  },
  {
    id: 'bottleneck', title: 'BottleNeck — nettoyage et analyse des stocks', shortTitle: 'Stocks & CA', category: 'data-bi', featured: true,
    status: 'Projet data analyst', period: 'Formation data', role: 'Data analyst junior', image: imageFallback, accent: '#b66b33',
    stack: ['Python', 'pandas', 'numpy', 'Jupyter Notebook', 'Excel', 'matplotlib', 'seaborn'], skills: ['Nettoyage', 'Jointures', 'Outliers', 'Analyse commerciale'],
    summary: 'Consolidation de fichiers ERP, web et liaison pour analyser les produits, ventes, stocks et anomalies.',
    problem: 'Rendre cohérentes plusieurs sources de données avant de produire des indicateurs fiables.',
    solution: 'Contrôles de qualité, jointures, calcul du chiffre d’affaires, analyse stock/rotation/marge et détection des prix atypiques.',
    impact: 'Démontre la capacité à passer de fichiers bruts à une analyse lisible et actionnable.',
    highlights: ['Consolidation ERP/web', 'CA par produit', 'CA total', 'Stock et rotation', 'Outliers prix'], metrics: ['pandas', 'Notebook documenté', 'Recommandations ERP'],
    links: { repo: 'https://github.com/steve57000/p6' }
  },
  {
    id: 'assurance-data', title: 'Assurance habitation — SQL et modélisation', shortTitle: 'SQL assurance', category: 'data-bi', featured: true,
    status: 'Projet data / SQL', period: 'Formation data', role: 'Concepteur base de données', image: imageFallback, accent: '#235a70',
    stack: ['SQL', 'PostgreSQL', 'CSV', 'Modélisation relationnelle'], skills: ['Normalisation', 'Import CSV', 'Contrôle qualité', 'Analyse géographique'],
    summary: 'Transformation de fichiers CSV bruts en base relationnelle exploitable pour analyser des contrats d’assurance habitation.',
    problem: 'Structurer des données brutes et hétérogènes dans un modèle robuste.',
    solution: 'Modèle REGION / DEPARTEMENT / COMMUNE / CONTRAT, tables temporaires, contrôles qualité et requêtes analytiques.',
    impact: 'Met en avant une approche solide de modélisation et d’analyse SQL.',
    highlights: ['Modèle normalisé', 'Tables temporaires', 'Segmentation', 'Analyses géographiques'], metrics: ['PostgreSQL', 'CSV contrôlés', 'Requêtes métier'],
    links: { repo: 'https://github.com/steve57000/assurance_data' }
  },
  {
    id: 'rgpd-dev-immediat', title: "RGPD Dev'Immédiat", shortTitle: 'Anonymisation CRM', category: 'data-bi', featured: true,
    status: 'Livrable data', period: 'Formation data', role: 'Data analyst junior', image: imageFallback, accent: '#56616f',
    stack: ['CSV', 'Analyse de données', 'Documentation RGPD', 'Minimisation', 'Anonymisation'], skills: ['RGPD', 'Quasi-identifiants', 'Documentation', 'Qualité données'],
    summary: "Mise en conformité RGPD d'un CRM en conservant un dataset exploitable pour l'analyse.",
    problem: 'Réduire l’exposition des données personnelles sans supprimer la valeur analytique du fichier.',
    solution: 'Suppression des identifiants directs, transformation des quasi-identifiants, anonymisation et documentation des choix.',
    impact: 'Montre une sensibilité à la protection des données et aux compromis métier.',
    highlights: ['Identifiants directs supprimés', 'Quasi-identifiants transformés', 'Dataset final exploitable'], metrics: ['Logique RGPD', 'Minimisation', 'Traçabilité'],
    links: {}
  },
  {
    id: 'sportdatapulse', title: 'SportDataPulse', shortTitle: 'Football BI', category: 'data-bi', featured: true,
    status: 'Projet SQL / BI', period: 'Formation data', role: 'Data analyst SQL', image: imageFallback, accent: '#1d6f56',
    stack: ['PostgreSQL', 'SQL', 'Data analysis', 'Présentation métier'], skills: ['Indicateurs', 'Shortlist', 'Requêtes métier', 'Décisionnel'],
    summary: 'Base sportive et analyses SQL autour des performances football pour éclairer recrutement et suivi joueurs/équipes.',
    problem: 'Transformer des données sportives en indicateurs compréhensibles pour décider.',
    solution: 'Requêtes SQL métier, indicateurs joueurs/équipes, shortlist et restitution orientée décision.',
    impact: 'Illustre le pont entre SQL, analyse et présentation métier.',
    highlights: ['Indicateurs joueurs', 'Comparaison équipes', 'Recrutement', 'Shortlist'], metrics: ['PostgreSQL', 'SQL analytique', 'Restitution métier'],
    links: {}
  },
  {
    id: 'guide-investissement', title: 'Guide Investissement', shortTitle: 'Outils finance perso', category: 'tools', featured: false, status: 'Projet personnel', period: '2026', role: 'Développeur front', image: imageFallback, accent: '#8a6b2f',
    stack: ['Astro', 'TypeScript', 'localStorage', 'GitHub Pages'], skills: ['SEO', 'Privacy-first', 'Scripts de vérification'], summary: 'Site éducatif statique avec outils interactifs, journal et dashboard personnel stockés localement.', problem: 'Proposer un outil simple et privé pour suivre une démarche d’investissement personnelle.', solution: 'Architecture statique, données locales, contenus pédagogiques et contrôles automatisés.', impact: 'Démontre une approche produit, SEO et respect de la confidentialité.', highlights: ['Journal', 'Dashboard', 'localStorage', 'SEO'], metrics: ['GitHub Pages', 'Privacy-first'], links: { repo: 'https://github.com/steve57000/guide-investissement' }
  },
  {
    id: 'recettes', title: 'Recettes', shortTitle: 'Livre de cuisine', category: 'tools', featured: false, status: 'Projet personnel', period: '2026', role: 'Développeur front', image: imageFallback, accent: '#a65a42', stack: ['JavaScript', 'HTML/CSS', 'localStorage', 'JSON'], skills: ['CRUD', 'Export/import', 'UX utilitaire'], summary: 'Application statique de recettes avec portions dynamiques, liste de courses et sauvegarde JSON.', problem: 'Organiser des recettes et courses sans backend obligatoire.', solution: 'CRUD local, calcul des portions, export/import et synchronisation JSON possible.', impact: 'Projet utile, concret et orienté usage quotidien.', highlights: ['CRUD', 'Portions dynamiques', 'Liste de courses', 'JSON'], metrics: ['localStorage', 'Application statique'], links: { repo: 'https://github.com/steve57000/recettes' }
  },
  { id: 'bt-carrelage', title: 'BT Carrelage', shortTitle: 'Site entreprise', category: 'fullstack', featured: false, status: 'Projet web', period: 'Projet existant', role: 'Développeur fullstack', image: btImage, accent: '#6f5848', stack: ['React', 'Next.js', 'MongoDB'], skills: ['Cahier des charges', 'Guide technique', 'Site fullstack'], summary: 'Site pour une entreprise de carrelage, rénovation et aménagement intérieur.', problem: 'Présenter clairement une offre artisanale et ses services.', solution: 'Site web structuré autour des prestations, du savoir-faire et de la prise de contact.', impact: 'Expérience de conception et réalisation pour un contexte professionnel concret.', highlights: ['Cahier des charges', 'Guide technique', 'Responsive'], metrics: ['Site fullstack'], links: { demo: 'https://bt-carrelage.fr' } },
  { id: 'groupomania', title: 'Groupomania', shortTitle: 'Réseau social interne', category: 'fullstack', featured: false, status: 'Projet OpenClassrooms', period: 'Formation web', role: 'Développeur fullstack', image: groupomaniaImage, accent: '#c84b45', stack: ['Vue', 'Node.js', 'Express', 'MySQL', 'Sass'], skills: ['Auth', 'CRUD', 'Modération'], summary: "Réseau social d'entreprise avec posts, commentaires, likes, profil et modération admin.", problem: 'Créer un espace interne d’échange sécurisé.', solution: 'Frontend Vue, API Express, base MySQL et rôles de modération.', impact: 'Projet fondateur sur le fullstack JavaScript.', highlights: ['Authentification', 'Posts', 'Commentaires', 'Likes', 'Admin'], metrics: ['API REST', 'MySQL'], links: { repo: 'https://github.com/steve57000/Groupomania' } },
  { id: 'sportsee', title: 'SportSee', shortTitle: 'Dashboard sportif', category: 'frontend', featured: false, status: 'Projet OpenClassrooms', period: 'Formation web', role: 'Développeur front', image: imageFallback, accent: '#d35445', stack: ['React', 'D3', 'Axios'], skills: ['Dataviz', 'Composants', 'API'], summary: 'Dashboard sportif avec graphiques et indicateurs utilisateur.', problem: 'Rendre des données sportives lisibles sous forme de tableaux de bord.', solution: 'Composants React, intégration API et visualisations D3.', impact: 'Bon pont entre front-end et data visualisation.', highlights: ['Graphiques', 'KPI utilisateur', 'API'], metrics: ['React', 'D3'], links: { repo: 'https://github.com/steve57000/SportSee' } },
  { id: 'kasa', title: 'Kasa', shortTitle: 'Location immobilière', category: 'frontend', featured: false, status: 'Projet OpenClassrooms', period: 'Formation web', role: 'Développeur React', image: kasaImage, accent: '#ff6f61', stack: ['React', 'React Router', 'Composants'], skills: ['Routing', 'Composants', 'Responsive'], summary: 'Application de location avec pages logement, galeries, accordéons et routing.', problem: 'Construire une SPA structurée à partir de données logements.', solution: 'React Router, composants réutilisables et interface responsive.', impact: 'Renforce les bases React et architecture de composants.', highlights: ['Routing', 'Galleries', 'Accordions'], metrics: ['SPA React'], links: { repo: 'https://github.com/steve57000/kasa' } },
  { id: 'fisheye', title: 'FishEye', shortTitle: 'Accessibilité', category: 'frontend', featured: false, status: 'Projet OpenClassrooms', period: 'Formation web', role: 'Développeur front', image: fishEyeImage, accent: '#8f5e2d', stack: ['JavaScript vanilla', 'HTML/CSS', 'Accessibilité'], skills: ['A11y', 'Lightbox', 'Clavier', 'Patterns'], summary: 'Plateforme de photographes avec navigation clavier, lightbox et patterns factory/adapter.', problem: 'Créer une interface riche sans framework en respectant l’accessibilité.', solution: 'JavaScript modulaire, gestion clavier, lightbox et composants accessibles.', impact: 'Projet important pour la rigueur front-end et l’accessibilité.', highlights: ['Navigation clavier', 'Lightbox', 'Factory pattern', 'Adapter pattern'], metrics: ['Vanilla JS', 'A11y'], links: { repo: 'https://github.com/steve57000/front-end-FishEye' } },
  { id: 'kanap', title: 'Kanap', shortTitle: 'E-commerce', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur front', image: kanapImage, accent: '#3d6f87', stack: ['JavaScript', 'API', 'localStorage'], skills: ['Panier', 'DOM', 'API'], summary: 'Parcours e-commerce avec panier, fiche produit et confirmation de commande.', problem: 'Connecter une interface statique à une API et gérer un panier.', solution: 'Appels API, stockage local et manipulation DOM.', impact: 'Étape clé dans la progression JavaScript.', highlights: ['Panier', 'Fiche produit', 'Confirmation'], metrics: ['JavaScript'], links: {} },
  { id: 'les-petits-plats', title: 'Les Petits Plats', shortTitle: 'Recherche recettes', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur front', image: petitsPlatsImage, accent: '#d1972c', stack: ['JavaScript', 'Algorithmes', 'HTML/CSS'], skills: ['Recherche', 'Filtres', 'Performance'], summary: 'Moteur de recherche et filtres pour une base de recettes.', problem: 'Rendre la recherche fluide sur plusieurs critères.', solution: 'Algorithmes de filtrage et interface de tags.', impact: 'Travail utile sur la logique de recherche.', highlights: ['Filtres', 'Tags', 'Recherche'], metrics: ['JavaScript'], links: {} },
  { id: 'gameon', title: 'GameOn', shortTitle: 'Formulaire', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur front', image: gameonImage, accent: '#c33c54', stack: ['JavaScript', 'HTML/CSS'], skills: ['Formulaire', 'Validation', 'DOM'], summary: 'Landing page événementielle avec formulaire d’inscription et validations.', problem: 'Fiabiliser une modale de formulaire.', solution: 'Contrôles JavaScript, feedback utilisateur et responsive.', impact: 'Exercice structurant sur les interactions front.', highlights: ['Modal', 'Validation', 'Responsive'], metrics: ['Vanilla JS'], links: {} },
  { id: 'reservia', title: 'Réservia', shortTitle: 'Intégration responsive', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Intégrateur web', image: reserviaImage, accent: '#0065fc', stack: ['HTML', 'CSS'], skills: ['Responsive', 'Sémantique', 'Maquette'], summary: 'Intégration responsive d’une maquette de réservation.', problem: 'Transformer une maquette desktop/tablette/mobile en HTML/CSS.', solution: 'Structure sémantique, flexbox et media queries.', impact: 'Base solide d’intégration web.', highlights: ['Responsive', 'Flexbox', 'Sémantique'], metrics: ['HTML/CSS'], links: { demo: 'https://steve57000.github.io/BellSteve_P2_27072021/' } },
  { id: 'ohmyfood', title: 'OhMyFood', shortTitle: 'Animations CSS', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Intégrateur web', image: ohMyFoodImage, accent: '#9356dc', stack: ['HTML', 'CSS', 'Sass'], skills: ['Animations', 'Mobile first', 'UI'], summary: 'Site mobile first avec animations CSS et pages de menus.', problem: 'Créer une expérience animée sans JavaScript.', solution: 'Animations CSS, loader, transitions et approche mobile first.', impact: 'Travail sur la finition visuelle et les micro-interactions.', highlights: ['Loader', 'Animations', 'Mobile first'], metrics: ['CSS/Sass'], links: { demo: 'https://steve57000.github.io/Bell_steve_P3_04082021/index.html' } },
  { id: 'billed', title: 'Billed', shortTitle: 'Tests et debug', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur front', image: billedImage, accent: '#0e8f88', stack: ['JavaScript', 'Jest', 'Testing Library'], skills: ['Tests', 'Debug', 'Qualité'], summary: 'Correction et tests d’un parcours de notes de frais.', problem: 'Stabiliser une application existante.', solution: 'Tests unitaires/intégration et corrections ciblées.', impact: 'Approche qualité et maintenance.', highlights: ['Tests', 'Debug', 'Parcours utilisateur'], metrics: ['Jest'], links: {} },
  { id: 'learnhome', title: 'Learn@Home', shortTitle: 'Conception', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Concepteur application', image: learnHomeImage, accent: '#5d6d7e', stack: ['Figma', 'User stories', 'Kanban'], skills: ['Conception', 'Maquettes', 'Gestion projet'], summary: 'Préparation fonctionnelle d’une application de soutien scolaire.', problem: 'Clarifier le besoin avant développement.', solution: 'Maquettes, user stories, parcours et découpage Kanban.', impact: 'Renforce la conception et la documentation produit.', highlights: ['User stories', 'Wireframes', 'Kanban'], metrics: ['Documentation'], links: {} }
];

export const featuredProjects = projects.filter((project) => project.featured);
