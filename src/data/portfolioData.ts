import type { ImageMetadata } from 'astro';

export type ProjectCategory = 'all' | 'fullstack' | 'data-bi' | 'frontend' | 'tools' | 'archives';

export type ProjectLink = {
  demo?: string;
  repo?: string;
};

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  featured: boolean;
  status: string;
  period: string;
  role: string;
  image: ImageMetadata;
  imageAlt: string;
  accent: string;
  stack: string[];
  skills: string[];
  summary: string;
  context?: string;
  problem: string;
  solution: string;
  deliverables?: string[];
  decisions?: string[];
  learned?: string;
  impact: string;
  highlights: string[];
  metrics: string[];
  links: ProjectLink;
};

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
import laChouetteImage from '../assets/images/la-chouette-agence.png';
import qrCodeImage from '../assets/images/QrCodeLogo.png';
import piquanteImage from '../assets/images/piiquante.png';

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

export const projectCategories: { id: ProjectCategory; label: string }[] = [
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

export const projects: Project[] = [
  {
    id: 'jlh-autopam', title: 'JLH AutoPam', shortTitle: 'Garage connecté', category: 'fullstack', featured: true,
    status: 'En cours / projet vitrine', period: '2026', role: 'Développeur fullstack', image: imageFallback, imageAlt: 'Visuel temporaire pour le dashboard JLH AutoPam', accent: '#2d7f82',
    stack: ['Angular 20', 'Angular SSR', 'TypeScript', 'SCSS', 'Spring Boot 3.5', 'Java 17', 'PostgreSQL', 'JWT', 'Docker'],
    skills: ['Architecture front/back', 'API REST', 'Authentification', 'Rôles', 'Workflow métier'],
    summary: 'Application métier complète pour un garage automobile, avec espace client, administration, demandes, devis et rendez-vous.',
    context: 'Projet vitrine orienté garage automobile : l’objectif est de relier les besoins client, le suivi administratif et le pilotage interne dans une même application web.',
    problem: 'Centraliser les demandes clients, les services, les rendez-vous et la gestion administrative dans une application unique.',
    solution: 'Frontend Angular SSR, API Spring Boot sécurisée, rôles client/admin, calendrier, documents, promotions et dashboard.',
    deliverables: ['Espace client', 'Back-office manager', 'API REST sécurisée', 'Modèle PostgreSQL', 'Parcours demandes / devis / rendez-vous'],
    decisions: ['Angular SSR pour une base front moderne et performante', 'Spring Boot 3.5 / Java 17 pour structurer les règles métier', 'JWT et rôles pour séparer les usages client et administration', 'Docker pour faciliter l’exécution locale'],
    learned: 'Renforcement de la conception fullstack : découpage front/back, sécurité, workflow métier et restitution claire pour un utilisateur non technique.',
    impact: 'Projet le plus représentatif de mon profil fullstack actuel : conception applicative, sécurité, données et expérience utilisateur.',
    highlights: ['Authentification JWT', 'Espace client', 'Back-office manager', 'Devis et rendez-vous', 'Dashboard', 'Docker'],
    metrics: ['Angular SSR', 'Spring Boot 3.5', 'API REST sécurisée'],
    links: { repo: 'https://github.com/steve57000/jlh' }
  },
  {
    id: 'bottleneck', title: 'BottleNeck — nettoyage et analyse des stocks', shortTitle: 'Stocks & CA', category: 'data-bi', featured: true,
    status: 'Projet data analyst', period: 'Formation data', role: 'Data analyst junior', image: imageFallback, imageAlt: 'Visuel temporaire pour le notebook BottleNeck', accent: '#b66b33',
    stack: ['Python', 'pandas', 'numpy', 'Jupyter Notebook', 'Excel', 'matplotlib', 'seaborn'], skills: ['Nettoyage', 'Jointures', 'Outliers', 'Analyse commerciale'],
    summary: 'Consolidation de fichiers ERP, web et liaison pour analyser les produits, ventes, stocks et anomalies.',
    context: 'Analyse d’un catalogue de vins à partir de sources ERP, web et fichier de liaison, avec un besoin de fiabiliser les rapprochements avant toute lecture commerciale.',
    problem: 'Rendre cohérentes plusieurs sources de données avant de produire des indicateurs fiables.',
    solution: 'Contrôles de qualité, jointures, calcul du chiffre d’affaires, analyse stock/rotation/marge et détection des prix atypiques.',
    deliverables: ['Notebook Python documenté', 'Jeux de données nettoyés', 'Contrôles de jointure ERP / web / liaison', 'Analyse CA, stock, marges et outliers prix', 'Recommandations de fiabilisation ERP'],
    decisions: ['Séparer les contrôles qualité des analyses métier', 'Tracer les anomalies plutôt que les masquer', 'Utiliser pandas pour consolider les sources et documenter chaque transformation'],
    learned: 'Passage de fichiers bruts à une lecture décisionnelle : qualité des données, cohérence des clés, anomalies et restitution exploitable.',
    impact: 'Démontre la capacité à passer de fichiers bruts à une analyse lisible et actionnable.',
    highlights: ['Consolidation ERP/web', 'CA par produit', 'CA total', 'Stock et rotation', 'Outliers prix'], metrics: ['pandas', 'Notebook documenté', 'Recommandations ERP'],
    links: { repo: 'https://github.com/steve57000/p6' }
  },
  {
    id: 'assurance-data', title: 'Assurance habitation — SQL et modélisation', shortTitle: 'SQL assurance', category: 'data-bi', featured: true,
    status: 'Projet data / SQL', period: 'Formation data', role: 'Concepteur base de données', image: imageFallback, imageAlt: 'Visuel temporaire pour le schéma SQL assurance habitation', accent: '#235a70',
    stack: ['SQL', 'PostgreSQL', 'CSV', 'Modélisation relationnelle'], skills: ['Normalisation', 'Import CSV', 'Contrôle qualité', 'Analyse géographique'],
    summary: 'Transformation de fichiers CSV bruts en base relationnelle exploitable pour analyser des contrats d’assurance habitation.',
    context: 'Projet SQL construit à partir de CSV bruts liés à l’assurance habitation, avec un enjeu de normalisation géographique et de requêtes métier fiables.',
    problem: 'Structurer des données brutes et hétérogènes dans un modèle robuste.',
    solution: 'Modèle REGION / DEPARTEMENT / COMMUNE / CONTRAT, tables temporaires, contrôles qualité et requêtes analytiques.',
    deliverables: ['Schéma relationnel PostgreSQL', 'Tables REGION / DEPARTEMENT / COMMUNE / CONTRAT', 'Scripts d’import CSV', 'Contrôles qualité', 'Requêtes métier d’analyse géographique'],
    decisions: ['Normaliser les dimensions géographiques', 'Passer par des tables temporaires pour contrôler les imports', 'Documenter les règles de transformation et les contrôles SQL'],
    learned: 'Modélisation relationnelle, import de données, contrôles de cohérence et SQL orienté analyse métier.',
    impact: 'Met en avant une approche solide de modélisation et d’analyse SQL.',
    highlights: ['Modèle normalisé', 'Tables temporaires', 'Segmentation', 'Analyses géographiques'], metrics: ['PostgreSQL', 'CSV contrôlés', 'Requêtes métier'],
    links: { repo: 'https://github.com/steve57000/assurance_data' }
  },
  {
    id: 'rgpd-dev-immediat', title: "RGPD Dev'Immédiat", shortTitle: 'Anonymisation CRM', category: 'data-bi', featured: true,
    status: 'Livrable data', period: 'Formation data', role: 'Data analyst junior', image: imageFallback, imageAlt: 'Visuel temporaire pour le dataset anonymisé RGPD', accent: '#56616f',
    stack: ['CSV', 'Analyse de données', 'Documentation RGPD', 'Minimisation', 'Anonymisation'], skills: ['RGPD', 'Quasi-identifiants', 'Documentation', 'Qualité données'],
    summary: "Mise en conformité RGPD d'un CRM en conservant un dataset exploitable pour l'analyse.",
    context: 'Travail sur un jeu de données CRM à partager ou analyser en limitant l’exposition des données personnelles.',
    problem: 'Réduire l’exposition des données personnelles sans supprimer la valeur analytique du fichier.',
    solution: 'Suppression des identifiants directs, transformation des quasi-identifiants, anonymisation et documentation des choix.',
    deliverables: ['Dataset anonymisé exploitable', 'Liste des identifiants directs supprimés', 'Traitement des quasi-identifiants', 'Documentation des choix de minimisation'],
    decisions: ['Conserver uniquement les champs utiles à l’analyse', 'Réduire le risque de ré-identification', 'Documenter les compromis entre conformité et valeur analytique'],
    learned: 'Approche RGPD pragmatique : minimisation, anonymisation, qualité de donnée et traçabilité des traitements.',
    impact: 'Montre une sensibilité à la protection des données et aux compromis métier.',
    highlights: ['Identifiants directs supprimés', 'Quasi-identifiants transformés', 'Dataset final exploitable'], metrics: ['Logique RGPD', 'Minimisation', 'Traçabilité'],
    links: {}
  },
  {
    id: 'sportdatapulse', title: 'SportDataPulse', shortTitle: 'Football BI', category: 'data-bi', featured: true,
    status: 'Projet SQL / BI', period: 'Formation data', role: 'Data analyst SQL', image: imageFallback, imageAlt: 'Visuel temporaire pour les requêtes SQL SportDataPulse', accent: '#1d6f56',
    stack: ['PostgreSQL', 'SQL', 'Data analysis', 'Présentation métier'], skills: ['Indicateurs', 'Shortlist', 'Requêtes métier', 'Décisionnel'],
    summary: 'Base sportive et analyses SQL autour des performances football pour éclairer recrutement et suivi joueurs/équipes.',
    context: 'Projet BI football centré sur la transformation de données sportives en indicateurs lisibles pour un besoin de suivi et de recrutement.',
    problem: 'Transformer des données sportives en indicateurs compréhensibles pour décider.',
    solution: 'Requêtes SQL métier, indicateurs joueurs/équipes, shortlist et restitution orientée décision.',
    deliverables: ['Requêtes SQL analytiques', 'Indicateurs joueurs et équipes', 'Shortlist recrutement', 'Restitution métier synthétique'],
    decisions: ['Construire des indicateurs comparables', 'Séparer les requêtes exploratoires des requêtes de restitution', 'Présenter les résultats sous un angle décisionnel'],
    learned: 'SQL analytique, construction de KPI sportifs et communication des résultats pour un public métier.',
    impact: 'Illustre le pont entre SQL, analyse et présentation métier.',
    highlights: ['Indicateurs joueurs', 'Comparaison équipes', 'Recrutement', 'Shortlist'], metrics: ['PostgreSQL', 'SQL analytique', 'Restitution métier'],
    links: {}
  },
  {
    id: 'guide-investissement', title: 'Guide Investissement', shortTitle: 'Outils finance perso', category: 'tools', featured: false, status: 'Projet personnel', period: '2026', role: 'Développeur front', image: imageFallback, imageAlt: 'Visuel temporaire pour le dashboard Guide Investissement', accent: '#8a6b2f',
    stack: ['Astro', 'TypeScript', 'localStorage', 'GitHub Pages'], skills: ['SEO', 'Privacy-first', 'Scripts de vérification'], summary: 'Site éducatif statique avec outils interactifs, journal et dashboard personnel stockés localement.', context: 'Projet personnel orienté pédagogie financière et suivi local, sans collecte serveur ni compte utilisateur.', problem: 'Proposer un outil simple et privé pour suivre une démarche d’investissement personnelle.', solution: 'Architecture statique, données locales, contenus pédagogiques et contrôles automatisés.', deliverables: ['Site statique éducatif', 'Journal local', 'Dashboard personnel', 'Scripts de vérification'], decisions: ['Stocker les données dans le navigateur pour préserver la confidentialité', 'Favoriser des pages statiques compatibles GitHub Pages', 'Documenter les contrôles utiles avant publication'], learned: 'Structuration d’un outil privacy-first avec une attention SEO, contenu et vérification automatisée.', impact: 'Démontre une approche produit, SEO et respect de la confidentialité.', highlights: ['Journal', 'Dashboard', 'localStorage', 'SEO'], metrics: ['GitHub Pages', 'Privacy-first'], links: { repo: 'https://github.com/steve57000/guide-investissement' }
  },
  {
    id: 'recettes', title: 'Recettes', shortTitle: 'Livre de cuisine', category: 'tools', featured: false, status: 'Projet personnel', period: '2026', role: 'Développeur front', image: imageFallback, imageAlt: 'Visuel temporaire pour l’application Recettes', accent: '#a65a42', stack: ['JavaScript', 'HTML/CSS', 'localStorage', 'JSON'], skills: ['CRUD', 'Export/import', 'UX utilitaire'], summary: 'Application statique de recettes avec portions dynamiques, liste de courses et sauvegarde JSON.', context: 'Projet personnel conçu pour gérer des recettes du quotidien dans une application simple, portable et sans backend obligatoire.', problem: 'Organiser des recettes et courses sans backend obligatoire.', solution: 'CRUD local, calcul des portions, export/import et synchronisation JSON possible.', deliverables: ['Catalogue de recettes', 'Calcul des portions', 'Liste de courses', 'Export/import JSON'], decisions: ['Garder une application statique pour faciliter l’hébergement', 'Utiliser le stockage local et un format JSON lisible', 'Prioriser les actions utiles en cuisine plutôt qu’une interface complexe'], learned: 'Conception d’un outil utilitaire centré sur les usages réels : données locales, édition rapide et portabilité.', impact: 'Projet utile, concret et orienté usage quotidien.', highlights: ['CRUD', 'Portions dynamiques', 'Liste de courses', 'JSON'], metrics: ['localStorage', 'Application statique'], links: { repo: 'https://github.com/steve57000/recettes' }
  },
  { id: 'bt-carrelage', title: 'BT Carrelage', shortTitle: 'Site entreprise', category: 'fullstack', featured: false, status: 'Projet web', period: 'Projet existant', role: 'Développeur fullstack', image: btImage, imageAlt: 'Capture du site BT Carrelage', accent: '#6f5848', stack: ['React', 'Next.js', 'MongoDB'], skills: ['Cahier des charges', 'Guide technique', 'Site fullstack'], summary: 'Site pour une entreprise de carrelage, rénovation et aménagement intérieur.', problem: 'Présenter clairement une offre artisanale et ses services.', solution: 'Site web structuré autour des prestations, du savoir-faire et de la prise de contact.', impact: 'Expérience de conception et réalisation pour un contexte professionnel concret.', highlights: ['Cahier des charges', 'Guide technique', 'Responsive'], metrics: ['Site fullstack'], links: { demo: 'https://bt-carrelage.fr' } },
  { id: 'groupomania', title: 'Groupomania', shortTitle: 'Réseau social interne', category: 'fullstack', featured: false, status: 'Projet OpenClassrooms', period: 'Formation web', role: 'Développeur fullstack', image: groupomaniaImage, imageAlt: 'Capture du réseau social interne Groupomania', accent: '#c84b45', stack: ['Vue', 'Node.js', 'Express', 'MySQL', 'Sass'], skills: ['Auth', 'CRUD', 'Modération'], summary: "Réseau social d'entreprise avec posts, commentaires, likes, profil et modération admin.", problem: 'Créer un espace interne d’échange sécurisé.', solution: 'Frontend Vue, API Express, base MySQL et rôles de modération.', impact: 'Projet fondateur sur le fullstack JavaScript.', highlights: ['Authentification', 'Posts', 'Commentaires', 'Likes', 'Admin'], metrics: ['API REST', 'MySQL'], links: { repo: 'https://github.com/steve57000/Groupomania' } },
  { id: 'sportsee', title: 'SportSee', shortTitle: 'Dashboard sportif', category: 'frontend', featured: false, status: 'Projet OpenClassrooms', period: 'Formation web', role: 'Développeur front', image: imageFallback, imageAlt: 'Visuel temporaire pour le dashboard SportSee', accent: '#d35445', stack: ['React', 'D3', 'Axios'], skills: ['Dataviz', 'Composants', 'API'], summary: 'Dashboard sportif avec graphiques et indicateurs utilisateur.', problem: 'Rendre des données sportives lisibles sous forme de tableaux de bord.', solution: 'Composants React, intégration API et visualisations D3.', impact: 'Bon pont entre front-end et data visualisation.', highlights: ['Graphiques', 'KPI utilisateur', 'API'], metrics: ['React', 'D3'], links: { repo: 'https://github.com/steve57000/SportSee' } },
  { id: 'kasa', title: 'Kasa', shortTitle: 'Location immobilière', category: 'frontend', featured: false, status: 'Projet OpenClassrooms', period: 'Formation web', role: 'Développeur React', image: kasaImage, imageAlt: 'Capture de l’application de location Kasa', accent: '#ff6f61', stack: ['React', 'React Router', 'Composants'], skills: ['Routing', 'Composants', 'Responsive'], summary: 'Application de location avec pages logement, galeries, accordéons et routing.', problem: 'Construire une SPA structurée à partir de données logements.', solution: 'React Router, composants réutilisables et interface responsive.', impact: 'Renforce les bases React et architecture de composants.', highlights: ['Routing', 'Galleries', 'Accordions'], metrics: ['SPA React'], links: { repo: 'https://github.com/steve57000/kasa' } },
  { id: 'fisheye', title: 'FishEye', shortTitle: 'Accessibilité', category: 'frontend', featured: false, status: 'Projet OpenClassrooms', period: 'Formation web', role: 'Développeur front', image: fishEyeImage, imageAlt: 'Capture de la plateforme de photographes FishEye', accent: '#8f5e2d', stack: ['JavaScript vanilla', 'HTML/CSS', 'Accessibilité'], skills: ['A11y', 'Lightbox', 'Clavier', 'Patterns'], summary: 'Plateforme de photographes avec navigation clavier, lightbox et patterns factory/adapter.', problem: 'Créer une interface riche sans framework en respectant l’accessibilité.', solution: 'JavaScript modulaire, gestion clavier, lightbox et composants accessibles.', impact: 'Projet important pour la rigueur front-end et l’accessibilité.', highlights: ['Navigation clavier', 'Lightbox', 'Factory pattern', 'Adapter pattern'], metrics: ['Vanilla JS', 'A11y'], links: { repo: 'https://github.com/steve57000/front-end-FishEye' } },
  { id: 'kanap', title: 'Kanap', shortTitle: 'E-commerce', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur front', image: kanapImage, imageAlt: 'Capture du parcours e-commerce Kanap', accent: '#3d6f87', stack: ['JavaScript', 'API', 'localStorage'], skills: ['Panier', 'DOM', 'API'], summary: 'Parcours e-commerce avec panier, fiche produit et confirmation de commande.', problem: 'Connecter une interface statique à une API et gérer un panier.', solution: 'Appels API, stockage local et manipulation DOM.', impact: 'Étape clé dans la progression JavaScript.', highlights: ['Panier', 'Fiche produit', 'Confirmation'], metrics: ['JavaScript'], links: {} },
  { id: 'les-petits-plats', title: 'Les Petits Plats', shortTitle: 'Recherche recettes', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur front', image: petitsPlatsImage, imageAlt: 'Capture du moteur de recherche Les Petits Plats', accent: '#d1972c', stack: ['JavaScript', 'Algorithmes', 'HTML/CSS'], skills: ['Recherche', 'Filtres', 'Performance'], summary: 'Moteur de recherche et filtres pour une base de recettes.', problem: 'Rendre la recherche fluide sur plusieurs critères.', solution: 'Algorithmes de filtrage et interface de tags.', impact: 'Travail utile sur la logique de recherche.', highlights: ['Filtres', 'Tags', 'Recherche'], metrics: ['JavaScript'], links: {} },
  { id: 'gameon', title: 'GameOn', shortTitle: 'Formulaire', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur front', image: gameonImage, imageAlt: 'Capture de la landing page GameOn', accent: '#c33c54', stack: ['JavaScript', 'HTML/CSS'], skills: ['Formulaire', 'Validation', 'DOM'], summary: 'Landing page événementielle avec formulaire d’inscription et validations.', problem: 'Fiabiliser une modale de formulaire.', solution: 'Contrôles JavaScript, feedback utilisateur et responsive.', impact: 'Exercice structurant sur les interactions front.', highlights: ['Modal', 'Validation', 'Responsive'], metrics: ['Vanilla JS'], links: {} },
  { id: 'reservia', title: 'Réservia', shortTitle: 'Intégration responsive', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Intégrateur web', image: reserviaImage, imageAlt: 'Capture de l’intégration responsive Réservia', accent: '#0065fc', stack: ['HTML', 'CSS'], skills: ['Responsive', 'Sémantique', 'Maquette'], summary: 'Intégration responsive d’une maquette de réservation.', problem: 'Transformer une maquette desktop/tablette/mobile en HTML/CSS.', solution: 'Structure sémantique, flexbox et media queries.', impact: 'Base solide d’intégration web.', highlights: ['Responsive', 'Flexbox', 'Sémantique'], metrics: ['HTML/CSS'], links: { demo: 'https://steve57000.github.io/BellSteve_P2_27072021/' } },
  { id: 'ohmyfood', title: 'OhMyFood', shortTitle: 'Animations CSS', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Intégrateur web', image: ohMyFoodImage, imageAlt: 'Capture du site mobile OhMyFood', accent: '#9356dc', stack: ['HTML', 'CSS', 'Sass'], skills: ['Animations', 'Mobile first', 'UI'], summary: 'Site mobile first avec animations CSS et pages de menus.', problem: 'Créer une expérience animée sans JavaScript.', solution: 'Animations CSS, loader, transitions et approche mobile first.', impact: 'Travail sur la finition visuelle et les micro-interactions.', highlights: ['Loader', 'Animations', 'Mobile first'], metrics: ['CSS/Sass'], links: { demo: 'https://steve57000.github.io/Bell_steve_P3_04082021/index.html' } },

  { id: 'la-chouette-agence', title: 'La Chouette Agence', shortTitle: 'SEO & accessibilité', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Intégrateur / audit SEO', image: laChouetteImage, imageAlt: 'Capture du site La Chouette Agence', accent: '#7f5d9b', stack: ['HTML', 'CSS', 'SEO', 'Accessibilité'], skills: ['Audit', 'Performance', 'WCAG', 'Optimisation'], summary: 'Optimisation d’un site existant pour améliorer référencement, performance et accessibilité.', problem: 'Le site manquait de visibilité et présentait des freins SEO, accessibilité et performance.', solution: 'Audit, corrections HTML/CSS, amélioration des contrastes, nettoyage du code et rapport d’optimisation.', impact: 'Archive utile pour montrer la sensibilité qualité web : accessibilité, maintenabilité et référencement.', highlights: ['Audit SEO', 'Contrastes WCAG', 'Performance', 'Code maintenable'], metrics: ['Rapport d’audit', 'HTML/CSS'], links: { demo: 'https://steve57000.github.io/P4_10092021_site_corrig-/' } },
  { id: 'piquante', title: 'Piiquante', shortTitle: 'API sécurisée', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur backend', image: piquanteImage, imageAlt: 'Capture du projet Piiquante', accent: '#a7432f', stack: ['Node.js', 'Express', 'MongoDB', 'Multer', 'JWT'], skills: ['API REST', 'Sécurité', 'CRUD', 'Upload'], summary: 'API sécurisée pour une application de sauces avec authentification, CRUD, upload d’images et likes.', problem: 'Créer un backend fiable pour gérer comptes, sauces, images et votes sans exposer les données utilisateurs.', solution: 'Routes Express, authentification JWT, hachage de mot de passe, modèle MongoDB et gestion d’upload avec Multer.', impact: 'Archive backend importante dans la progression vers les APIs sécurisées.', highlights: ['JWT', 'Hash mot de passe', 'CRUD sauces', 'Upload images'], metrics: ['Node/Express', 'MongoDB'], links: {} },
  { id: 'billed', title: 'Billed', shortTitle: 'Tests et debug', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Développeur front', image: billedImage, imageAlt: 'Capture de l’application Billed', accent: '#0e8f88', stack: ['JavaScript', 'Jest', 'Testing Library'], skills: ['Tests', 'Debug', 'Qualité'], summary: 'Correction et tests d’un parcours de notes de frais.', problem: 'Stabiliser une application existante.', solution: 'Tests unitaires/intégration et corrections ciblées.', impact: 'Approche qualité et maintenance.', highlights: ['Tests', 'Debug', 'Parcours utilisateur'], metrics: ['Jest'], links: {} },
  { id: 'learnhome', title: 'Learn@Home', shortTitle: 'Conception', category: 'archives', featured: false, status: 'Archive / progression', period: 'Formation web', role: 'Concepteur application', image: learnHomeImage, imageAlt: 'Capture des maquettes Learn@Home', accent: '#5d6d7e', stack: ['Figma', 'User stories', 'Kanban'], skills: ['Conception', 'Maquettes', 'Gestion projet'], summary: 'Préparation fonctionnelle d’une application de soutien scolaire avec cas d’usage, user stories, maquettes et Kanban.', problem: 'Clarifier le besoin d’une association de soutien scolaire avant le développement.', solution: 'Maquettes, user stories, parcours, tableau de bord, chat, calendrier et découpage Kanban.', impact: 'Renforce la conception produit, la documentation fonctionnelle et la préparation agile.', highlights: ['User stories', 'Wireframes', 'Kanban', 'Parcours utilisateurs'], metrics: ['Documentation'], links: {} },

  { id: 'qrcode', title: 'QR Code', shortTitle: 'Générateur QR', category: 'archives', featured: false, status: 'Archive / progression', period: 'Projet personnel', role: 'Développeur front', image: qrCodeImage, imageAlt: 'Logo du générateur de QR Code', accent: '#2d6cdf', stack: ['HTML', 'CSS', 'JavaScript', 'Qrious'], skills: ['Canvas', 'Paramétrage UI', 'Librairie JS'], summary: 'Générateur de QR codes personnalisés avec réglage d’URL, couleurs, opacité et correction d’erreur.', problem: 'Créer un outil simple pour produire rapidement un QR code personnalisable.', solution: 'Interface statique, intégration de la bibliothèque Qrious et options de personnalisation.', impact: 'Petit outil personnel montrant la capacité à livrer une fonctionnalité ciblée et utilisable.', highlights: ['QR code', 'Couleurs', 'Correction d’erreur', 'Outil statique'], metrics: ['JavaScript'], links: { demo: 'https://steve57000.github.io/GenerateQrCode/' } }

];

export const featuredProjects: Project[] = projects.filter((project) => project.featured);
