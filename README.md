# Portfolio — Steve Bell

Portfolio statique publié sur GitHub Pages : <https://steve57000.github.io/portfolio/>.

## Stack

- Astro avec rendu statique pré-généré.
- TypeScript pour les données du portfolio.
- CSS natif structuré dans `src/styles/global.css`.
- JavaScript natif léger dans `public/scripts/main.js` pour la navigation mobile, les filtres projets et les détails en dialogue.
- Aucun runtime React n'est embarqué.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Déploiement GitHub Pages

La configuration Astro est définie dans `astro.config.mjs` avec :

- `site: 'https://steve57000.github.io'`
- `base: '/portfolio'`

Le workflow `.github/workflows/pages.yml` utilise Node 24, installe les dépendances avec `npm ci`, construit le site avec `npm run build`, puis publie le dossier `dist` via GitHub Pages.

Dans **Settings → Pages**, la source de publication doit être réglée sur **GitHub Actions**. Si la source reste sur **Deploy from a branch**, GitHub Pages sert la racine du dépôt au lieu de l’artifact Astro généré, ce qui peut afficher une page 404 même lorsque le build réussit.

## Données portfolio

Le contenu éditorial principal est centralisé dans `src/data/portfolioData.ts` : profil, liens, catégories, compétences, parcours, projets et projets vedettes.

Le portfolio conserve 22 projets, dont 5 projets vedettes : JLH AutoPam, BottleNeck, Assurance Data, RGPD Dev’Immédiat et SportDataPulse.

## Règle stricte sur les fichiers binaires

Aucun fichier binaire ne doit être créé, généré, modifié, déplacé, renommé ou supprimé automatiquement dans ce repository.

Cela inclut notamment : PNG, JPG, WEBP, PDF, vidéos, polices, captures d’écran et assets générés. Les assets binaires existants restent à leur emplacement actuel. Les images manquantes doivent être documentées uniquement dans `TODO_ASSETS.md` et continuer à utiliser le visuel de repli `cardImage.png` tant qu’elles ne sont pas ajoutées manuellement.

Le dossier de build `dist` ne doit pas être commité.
