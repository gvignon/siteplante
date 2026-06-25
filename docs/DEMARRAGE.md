# 🚀 Guide de démarrage — pas à pas

Suis ces étapes dans l'ordre. Chaque commande peut être lancée **par Claude Code** :
tu n'as qu'à dire « fais l'étape X ». Coche au fur et à mesure.

---

## Étape 0 — Installer les outils (une seule fois)
Tu en as besoin sur ton ordinateur :

1. **Node.js** (moteur d'Astro) → https://nodejs.org (version « LTS »).
2. **Visual Studio Code** (l'éditeur) → https://code.visualstudio.com
3. **Git** (suivi des versions) → https://git-scm.com
4. **Un compte GitHub** (gratuit) → https://github.com

> Astuce débutant : installe tout, puis redémarre l'ordinateur pour que les commandes
> soient reconnues.

---

## Étape 1 — Créer le projet Astro
Ouvre VS Code sur le dossier `D:\siteplante`, puis dans le terminal de VS Code
(`Terminal > Nouveau terminal`) demande à Claude Code :

> « Initialise un projet Astro minimal dans ce dossier, sans écraser mes fichiers
> existants (CLAUDE.md, docs, src/content). »

En pratique Claude lancera quelque chose comme :
```bash
npm create astro@latest . -- --template minimal --no-install --no-git
npm install
```
Puis pour voir le site :
```bash
npm run dev
```
Ouvre http://localhost:4321 dans ton navigateur. Tu verras le site en direct.

---

## Étape 2 — Construire les pages
Demande à Claude Code, dans l'ordre :
1. « Crée un layout commun (en-tête, pied de page, avertissement sécurité). »
2. « Crée la page d'accueil : présentation du site + lien vers la liste des plantes. »
3. « Crée la page liste qui affiche toutes les fiches de `src/content/plantes/`. »
4. « Crée la page de fiche qui affiche une plante (photo, infos, précautions). »

Le contenu vient des fichiers Markdown : **tu ajoutes une plante = une nouvelle page
apparaît automatiquement.** C'est ça, l'automatisation.

---

## Étape 3 — Ajouter des plantes
Deux façons :
- **Avec la skill** : dis « crée une fiche pour l'ail des ours » → Claude génère le
  fichier dans `src/content/plantes/` en respectant le template et les règles de sécurité.
- **À la main** : copie `_TEMPLATE.md`, renomme-le, remplis-le.

N'oublie pas de déposer la photo dans `public/images/` (même nom que le `slug`).

---

## Étape 4 — Mettre en ligne (gratuit + automatique)
1. Crée un dépôt vide sur GitHub (ex. `siteplante`).
2. Dans le terminal, relie ton dossier à GitHub (Claude Code peut le faire) :
```bash
git init
git add .
git commit -m "Premier commit : structure du site"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/siteplante.git
git push -u origin main
```
3. **Déploiement automatique** — choisis l'une des deux options :
   - **Netlify** (le plus simple) : va sur https://netlify.com, « Import from GitHub »,
     sélectionne le dépôt. Netlify détecte Astro, build = `npm run build`, dossier = `dist`.
   - **GitHub Pages** : Claude Code peut ajouter un fichier d'action GitHub qui publie le
     site à chaque `git push`.

Ensuite, **à chaque modification** : `git add . && git commit -m "..." && git push` →
le site se met à jour tout seul en ligne. 🎉

---

## Qui fait quoi entre Cowork et Claude Code ?
- **Claude Cowork (ici)** : réfléchir, rédiger du contenu, générer des fiches/images,
  préparer des documents. Idéal pour le contenu et l'organisation.
- **Claude Code (dans VS Code)** : créer/modifier le code du site, lancer les commandes
  (`npm`, `git`), déployer. Idéal pour construire et publier.

Tu peux faire les deux : rédiger une fiche ici, puis demander à Claude Code de l'intégrer.

---

## Mémo des commandes
| Action | Commande |
|---|---|
| Voir le site en local | `npm run dev` |
| Construire le site final | `npm run build` |
| Enregistrer une version | `git add . && git commit -m "message"` |
| Envoyer en ligne | `git push` |
