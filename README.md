# Portfolio Steve Bell

Portfolio React publié sur GitHub Pages : <https://steve57000.github.io/portfolio/>.

## Positionnement

Développeur fullstack Java / Angular & Data Analyst junior, orienté applications métier, APIs sécurisées, SQL, qualité de données, RGPD et dashboards.

## Stack

- React / Create React App
- styled-components
- React Router avec `basename="/portfolio"`
- Déploiement principal GitHub Pages via GitHub Actions Pages (`.github/workflows/pages.yml`)
- Script `gh-pages` conservé comme option manuelle historique

## Scripts

```bash
npm install
npm start
npm run build
npm run deploy
```

## Déploiement

Le déploiement principal se fait via GitHub Actions Pages : le workflow construit l’application avec `npm run build`, puis publie le dossier `build` sur GitHub Pages.

La configuration doit rester compatible avec GitHub Pages : `homepage` pointe vers `/portfolio/`, le routeur utilise `basename="/portfolio"` et les liens internes doivent rester fonctionnels après build.

## Contenu

Les données du portfolio sont centralisées dans `src/data/portfolioData.js` : profil, projets, compétences, parcours, catégories et projets vedettes.

Chaque projet doit au minimum déclarer : `id`, `title`, `shortTitle`, `category`, `status`, `period`, `role`, `image`, `imageAlt`, `accent`, `stack`, `skills`, `summary`, `problem`, `solution`, `impact`, `highlights`, `metrics` et `links`.

## Contraintes assets

Aucun fichier binaire ne doit être généré automatiquement dans ce repository. Ne pas créer automatiquement de PNG, JPG, WEBP, PDF, vidéo, police, screenshot ou asset généré, et ne pas modifier les binaires existants.

Les images manquantes sont documentées uniquement dans `TODO_ASSETS.md`. Les assets doivent être ajoutés manuellement plus tard, puis reliés explicitement dans `src/data/portfolioData.js`.
