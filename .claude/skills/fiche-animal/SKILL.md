# Génération de fiche animal

Tu crées une fiche d'animal sauvage cohérente avec le site, sûre, légalement correcte et bien documentée.

## Étapes
1. **Vérifier l'identité de l'animal.** Demande le nom si ambigu. Recherche le nom latin,
   le groupe taxonomique, le statut de protection légale (France), la saison d'observation,
   l'habitat, le comportement et les **confusions possibles**. Ne jamais affirmer la
   comestibilité ou l'innocuité sans source.
2. **Respecter le template** `src/content/animaux/_TEMPLATE.md` : mêmes champs frontmatter,
   mêmes sections, dans le même ordre.
3. **Nom de fichier** : slug en minuscules, sans accents ni espaces (ex. renard-roux.md).
   L'enregistrer dans `src/content/animaux/`.
4. **Statut légal (obligatoire).** Le champ `statutProtection` doit être exact :
   - `protégé` → espèce intégralement protégée (ne pas capturer, blesser, déranger)
   - `chassable` → gibier chassable avec permis et en saison
   - `pêchable` → espèce pêchable avec permis et hors période de fermeture
   - `commun` → pas de protection spéciale, ni chassable ni pêchable
   Toujours mentionner la réglementation applicable dans les règles de sécurité.
5. **Précautions (obligatoires).** La section précautions doit mentionner :
   - Le statut légal et les sanctions encourues si protégée
   - Les risques de confusion avec d'autres espèces
   - Les dangers éventuels (venin, morsure, zoonoses)
   - Terminer par : *En cas de doute sur l'identification, ne pas capturer ni consommer.*
6. **Confusions** : utiliser les niveaux adaptés :
   - `similaire` → espèce ressemblante sans danger
   - `protégé` → espèce protégée qu'on pourrait confondre (risque légal)
   - `venimeux` → espèce venimeuse ou dangereuse
   - `mortel` → confusion potentiellement fatale
7. **Image** : indiquer `/images/animaux/<slug>.jpg` et rappeler à l'utilisateur
   d'ajouter la photo dans `public/images/animaux/`.
8. **Recettes** : uniquement si `comestible: true` (gibier ou pêche légale).
   Toujours rappeler la réglementation (permis, saison).
9. **Sources** : citer au moins une référence fiable (INPN, guide de terrain, ONCFS/OFB).

## Groupes disponibles
- `mammiferes` — Mammalia
- `oiseaux` — Aves
- `insectes` — Insecta
- `reptiles` — Reptilia
- `amphibiens` — Amphibia
- `poissons` — Actinopterygii
- `invertebres` — Invertebrata

## Style
- Phrases courtes, ton pédagogique, prudent et respectueux de la nature.
- Pas de promesse médicale. Pas d'incitation à capturer une espèce protégée.
- Toujours encourager l'observation plutôt que la capture.
- Cohérent avec les fiches existantes et le design « Recette Sauvage ».

## Format structuré
Les fiches utilisent des **données structurées** en frontmatter
(voir `src/content/animaux/_TEMPLATE.md`). Le gabarit Astro
`src/pages/faune/[slug].astro` met tout en page automatiquement.
Remplir les champs plutôt qu'écrire un long corps Markdown.

## Après génération
Indiquer : le fichier créé, la photo à ajouter (`public/images/animaux/<slug>.jpg`),
le statut légal de l'espèce, et les éventuelles confusions dangereuses à signaler.
