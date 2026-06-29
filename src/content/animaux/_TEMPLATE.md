---
nom: "Nom commun"
nomLatin: "Genre espèce"
famille: "Famille taxonomique"
groupe: "mammiferes"       # mammiferes / oiseaux / insectes / reptiles / amphibiens / poissons / invertebres
comestible: false          # true uniquement si chassable/pêchable légalement
statutProtection: "commun" # protégé / chassable / pêchable / commun
saison: ["printemps", "été"]  # saison d'observation ou de chasse/pêche
habitat: "Où l'observer (forêts, prairies, rivières...)"
image: "/images/animaux/nom-fichier.jpg"
difficulte: "facile"       # facile / moyenne / experte (identification)
accroche: "Une phrase d'accroche éditoriale pour le hero."
description:
  - "Premier paragraphe (reconnaissance, morphologie)."
  - "Deuxième paragraphe (comportement, particularités)."
callouts:
  - titre: "Critère clé"
    texte: "Description du critère d'identification."
comportement: "Description du comportement, régime alimentaire, mode de vie — en une à deux phrases."
recettes:                  # uniquement si comestible: true
  - titre: "Nom de la recette"
    texte: "Préparation courte. Respecter la réglementation (saison de chasse/pêche)."
precautionTitre: "Titre accrocheur de la section sécurité (optionnel)."
precautionIntro: "Introduction sur le statut légal et les précautions."
confusions:
  - nom: "Nom de l'espèce"
    niveau: "similaire"    # similaire / protégé / venimeux / mortel
    texte: "Comment les distinguer."
regles:
  - "Règle de sécurité ou légale."
  - "En cas de doute sur l'identification, <strong>ne pas capturer ni consommer.</strong>"
bonASavoir:
  - "Anecdote, valeur écologique ou conseil d'observation respectueux."
sources:
  - "Source fiable / ouvrage de référence"
---

Une ligne de corps (le contenu structuré ci-dessus alimente la mise en page).
