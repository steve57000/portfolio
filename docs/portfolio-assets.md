# Livrables du portfolio

Ce document prépare l'ajout manuel de preuves et de livrables aux projets Data / BI. **Codex ne doit pas créer ni ajouter automatiquement de PDF, PPTX, XLSX, CSV ou notebook binaire.** Un lien ne doit être ajouté à `docs` dans `src/data/portfolioData.ts` qu'après vérification de la présence du fichier dans le dépôt et de son droit de publication.

## Emplacements recommandés

Les futurs fichiers publics seront rangés par projet :

```text
public/docs/data/bottleneck/
public/docs/data/assurance-sql/
public/docs/data/rgpd/
public/docs/data/sportdatapulse/
```

Les dossiers peuvent être créés au moment où un premier document autorisé est ajouté. Il n'est pas nécessaire de conserver des dossiers vides.

## Convention de nommage

- employer des minuscules, des mots séparés par des tirets et aucun espace ni accent ;
- préfixer si utile par le projet : `bottleneck-rapport-analyse.pdf` ;
- ajouter une version ou une date seulement lorsqu'elle apporte une information : `assurance-modele-sql-v1.pdf` ;
- distinguer les données nettoyées des sources : `rgpd-dataset-anonymise.csv` ;
- conserver l'extension d'origine et renseigner le champ `type` correspondant dans `docs`.

Les chemins stockés dans les données doivent rester compatibles avec la base GitHub Pages `/portfolio`. Les composants appliquent la base du site aux chemins locaux.

## Livrables attendus par projet

### BottleNeck

- notebook Python documenté (`.ipynb`) ;
- rapport ou présentation de l'analyse (`.pdf` ou `.pptx`) ;
- dataset nettoyé (`.csv` ou `.xlsx`) uniquement si sa publication est autorisée.

### Assurance habitation

- schéma relationnel et documentation technique (`.pdf`) ;
- scripts de création, d'import et de requêtes (`.sql`) ;
- CSV transformés uniquement si les droits et la confidentialité le permettent.

### RGPD Dev'Immédiat

- documentation de minimisation, anonymisation et traçabilité (`.pdf`) ;
- dataset anonymisé (`.csv` ou `.xlsx`) uniquement après validation du risque de ré-identification et de l'autorisation de publication.

### SportDataPulse

- requêtes SQL analytiques (`.sql` ou export `.pdf`) ;
- rapport ou présentation de la shortlist (`.pdf` ou `.pptx`) ;
- dataset sportif nettoyé uniquement si sa licence autorise la redistribution.

## Procédure d'intégration

1. Vérifier les droits de diffusion, la confidentialité et l'absence de données personnelles ou sous licence restrictive.
2. Ajouter manuellement le fichier dans le dossier du projet.
3. Renseigner `label`, `href`, `type` et, si utile, `description` dans `Project.docs`.
4. Exécuter le build puis vérifier que le lien généré répond bien sous la base `/portfolio`.
5. Conserver une `evidence` textuelle lorsqu'un livrable ne peut pas être publié ; ne jamais créer un lien d'attente vers un fichier absent.
