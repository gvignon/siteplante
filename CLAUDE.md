# Site Plantes Comestibles — Contexte du projet

Ce fichier est lu automatiquement par Claude Code à chaque session. Il décrit le projet
pour que Claude travaille de façon cohérente. Garde-le à jour.

## But du site
Site vitrine présentant des **plantes comestibles** (sauvages et cultivées), avec une
**fiche par plante** : photo, nom commun et latin, comestibilité, saison de récolte,
habitat, usages/recettes, et avertissements (confusions possibles, parties toxiques).

Public visé : grand public francophone, débutants en cueillette. Ton : clair, prudent,
pédagogique.

## Stack technique
- **Astro** (générateur de site statique) — chaque fiche est un fichier Markdown,
  Astro génère automatiquement les pages HTML.
- HTML / CSS simple, pas de framework JS lourd.
- Hébergement gratuit via **GitHub Pages** ou **Netlify**, déploiement automatique à
  chaque `git push`.

## Structure des dossiers
- `src/content/plantes/` → une fiche Markdown par plante (la source de contenu)
- `src/pages/` → pages du site (accueil, liste, page de fiche générée)
- `src/layouts/` → gabarits HTML réutilisés
- `public/images/` → photos des plantes
- `docs/` → documentation projet (feuille de route, charte)
- `.claude/skills/fiche-plante/` → skill pour générer une nouvelle fiche

## Règles importantes
1. **Sécurité avant tout.** Pour toute plante, toujours mentionner les confusions
   dangereuses possibles et un avertissement « en cas de doute, ne pas consommer ».
   Ne jamais présenter une plante comme comestible sans réserve.
2. Une fiche = un fichier dans `src/content/plantes/` respectant le template
   (voir `_TEMPLATE.md`). Ne pas inventer de champs.
3. Noms de fichiers en minuscules sans accents ni espaces : `ortie.md`, `ail-des-ours.md`.
4. Citer une source fiable quand on affirme la comestibilité.

## Commandes utiles
- `npm install` — installer les dépendances (une seule fois)
- `npm run dev` — voir le site en local sur http://localhost:4321
- `npm run build` — construire le site final dans `dist/`

## État d'avancement
- [x] Structure et documentation du projet
- [x] Projet Astro initialisé (package.json, astro.config, content/config.ts)
- [x] Page d'accueil + page liste + page fiche
- [x] Première fiche plante (ortie)
- [ ] `npm install` sur la machine de Gilles, puis `npm run dev`
- [ ] Envoi sur GitHub + déploiement Netlify/GitHub Pages
