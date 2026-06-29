# 🧭 Guide des outils — à quoi sert quoi

Tu te sens perdu entre tous ces logiciels ? Voici le récap simple. Garde ce fichier
sous la main.

## L'image : publier un livre de cuisine

| Outil | Son rôle | L'image |
|---|---|---|
| **Visual Studio Code** | Éditeur où tu vois et modifies les fichiers du site | Ton **bureau** |
| **Claude Code** | Assistant qui écrit le code et lance les commandes pour toi | Ton **assistant** à côté de toi |
| **Node / Astro** | Transforme tes fichiers en pages web | L'**imprimerie** |
| **Git** | Enregistre des versions de ton travail (historique) | L'**appareil photo** |
| **GitHub** | Range tes versions en ligne (sauvegarde) | Le **coffre-fort en ligne** |
| **Netlify** | Fabrique le site et le publie sur le web | La **maison d'édition** |

## Le processus en 5 temps

1. **Modifier** : tu changes le site (toi + Claude Code) dans VS Code, sur ton ordinateur.
2. **Voir le brouillon** : commande `npm run dev`, puis ouvre http://localhost:4321
   (visible seulement par toi).
3. **Enregistrer une version** : `git commit` (l'« appareil photo »).
4. **Envoyer en ligne** : `git push` → la version part sur GitHub.
5. **Publier** : Netlify voit la nouvelle version sur GitHub, fabrique le site et le met
   en ligne automatiquement, à une vraie adresse web.

## À retenir

- **Fabriquer** = VS Code + Claude Code
- **Sauvegarder / versionner** = Git + GitHub
- **Publier** = Netlify
- GitHub et Netlify ne se configurent **qu'une seule fois**. Ensuite, publier une mise à
  jour = simplement `git commit` puis `git push`, et le site se met à jour tout seul.

## Les commandes du quotidien

| Je veux… | Commande (dans le terminal de VS Code) |
|---|---|
| Voir le site en brouillon | `npm run dev` |
| Enregistrer une version | `git add .` puis `git commit -m "ce que j'ai changé"` |
| Publier en ligne | `git push` |

> Astuce : tu n'as pas besoin de retenir les commandes par cœur — tu peux demander à
> **Claude Code** « enregistre et publie mes changements » et il s'en occupe.

## Qui utiliser pour quoi ?

- **Claude Code** (dans VS Code) : construire le site, lancer les commandes, publier.
- **Claude Cowork** (l'app Claude) : réfléchir, écrire le contenu, créer des fiches ou
  des images, retravailler le design. Les deux lisent le même dossier `D:\siteplante`.
