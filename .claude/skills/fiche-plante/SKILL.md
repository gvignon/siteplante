---
name: fiche-plante
description: >
  Génère une fiche complète de plante comestible pour le site, au format Markdown,
  prête à être déposée dans src/content/plantes/. Déclencher quand l'utilisateur dit :
  "crée une fiche pour <plante>", "ajoute la plante <nom>", "fiche plante", "nouvelle
  fiche", ou donne un nom de plante à intégrer au site.
---

# Génération de fiche plante

Tu crées une fiche de plante comestible cohérente avec le site, sûre et bien documentée.

## Étapes
1. **Vérifier l'identité de la plante.** Demande son nom si ambigu. Recherche sur le web
   le nom latin, la comestibilité, la saison, l'habitat et surtout les **confusions
   dangereuses** connues. Ne jamais affirmer la comestibilité sans source.
2. **Respecter le template** src/content/plantes/_TEMPLATE.md : mêmes champs frontmatter,
   mêmes sections, dans le même ordre.
3. **Nom de fichier** : slug en minuscules, sans accents ni espaces (ex. ail-des-ours.md).
   L'enregistrer dans src/content/plantes/.
4. **Sécurité (obligatoire).** La section « Précautions et confusions » doit lister les
   plantes toxiques ressemblantes et se terminer par : *En cas de doute sur
   l'identification, ne pas consommer.* Si la plante a des sosies mortels (ex. ail des ours
   / colchique / muguet), le signaler clairement en haut de la section.
5. **Image** : indiquer le chemin /images/<slug>.jpg dans le frontmatter, et rappeler à
   l'utilisateur d'ajouter la photo dans public/images/.
6. **Sources** : citer au moins une référence fiable (ouvrage ou site reconnu).

## Style
- Phrases courtes, claires, ton prudent et pédagogique.
- Pas de promesse médicale. Pas d'affirmation de comestibilité non sourcée.
- Cohérent avec les fiches existantes (voir ortie.md comme modèle).

## Après génération
Indiquer à l'utilisateur : le fichier créé, la photo à ajouter, et les éventuelles
confusions dangereuses à vérifier avant publication.
