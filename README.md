# 🌿 Site Plantes Comestibles

Site présentant des plantes comestibles, sauvages et cultivées, avec une fiche détaillée
par plante (comestibilité, saison, habitat, usages, avertissements).

## Démarrage rapide
Voir le guide pas-à-pas : [`docs/DEMARRAGE.md`](docs/DEMARRAGE.md)

## Structure
```
siteplante/
├─ CLAUDE.md              ← contexte lu par Claude Code
├─ README.md              ← ce fichier
├─ docs/
│  ├─ DEMARRAGE.md        ← installation + 1ʳᵉ mise en ligne (commence ici)
│  └─ CHARTE.md           ← style, couleurs, ton du site
├─ src/
│  ├─ content/plantes/    ← une fiche Markdown par plante
│  ├─ pages/              ← pages du site
│  └─ layouts/            ← gabarits HTML
├─ public/images/         ← photos
└─ .claude/skills/fiche-plante/  ← skill « génère une fiche plante »
```

## Avertissement
Ce site est informatif. La cueillette comporte des risques. En cas de doute sur
l'identification d'une plante, ne jamais la consommer.
