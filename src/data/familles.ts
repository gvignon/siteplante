// Familles botaniques les plus représentatives de la flore de France continentale.
// "nom" doit correspondre exactement au champ `famille` des fiches plantes (pour le regroupement).
export interface Famille {
  slug: string;
  nom: string;
  latin: string;
  resume: string;
  caracteristiques: string[];
  risque?: boolean; // famille comportant des espèces dangereuses (prudence accrue)
}

export const familles: Famille[] = [
  {
    slug: 'asteracees',
    nom: 'Astéracées',
    latin: 'Asteraceae',
    resume: "L'une des plus vastes familles de plantes à fleurs. Ce qu'on prend pour une fleur est en réalité un capitule : des dizaines de minuscules fleurs serrées sur un même réceptacle.",
    caracteristiques: [
      "« Fleur » composée (capitule), souvent jaune ou blanche, parfois ligulée comme le pissenlit.",
      "Feuilles très variables, souvent en rosette à la base.",
      "Beaucoup d'espèces comestibles (pissenlit, salsifis, chicorée), mais quelques-unes amères ou irritantes.",
    ],
  },
  {
    slug: 'rosacees',
    nom: 'Rosacées',
    latin: 'Rosaceae',
    resume: "La grande famille des fruits sauvages et cultivés. Fleurs régulières à cinq pétales et nombreuses étamines, souvent blanches ou rosées.",
    caracteristiques: [
      "Fleur typique à 5 pétales et 5 sépales, étamines nombreuses.",
      "Réunit ronce, fraisier, aubépine, prunellier, églantier, pommier.",
      "Très riche en fruits comestibles ; peu de confusions dangereuses.",
    ],
  },
  {
    slug: 'lamiacees',
    nom: 'Lamiacées',
    latin: 'Lamiaceae',
    resume: "Les « labiées », famille reine des aromatiques. Reconnaissables à leur tige carrée et leurs feuilles opposées, souvent très parfumées au froissement.",
    caracteristiques: [
      "Tige de section carrée, feuilles opposées (deux par deux).",
      "Fleur en deux lèvres ; arôme prononcé (menthe, thym, sauge, romarin, lamier).",
      "Nombreuses plantes condimentaires et médicinales.",
    ],
  },
  {
    slug: 'apiacees',
    nom: 'Apiacées',
    latin: 'Apiaceae',
    resume: "Les ombellifères, à la fois généreuses et redoutables. Fleurs minuscules réunies en ombelles (comme des parasols). Famille à aborder avec la plus grande prudence.",
    caracteristiques: [
      "Fleurs en ombelles, tiges souvent creuses et cannelées.",
      "Comestibles renommées : carotte, fenouil, persil, cerfeuil.",
      "Mais aussi des espèces mortelles (grande ciguë, œnanthe) : ne jamais consommer sans identification certaine.",
    ],
    risque: true,
  },
  {
    slug: 'amaryllidacees',
    nom: 'Amaryllidacées',
    latin: 'Amaryllidaceae',
    resume: "Plantes à bulbe du genre Allium et apparentés. Souvent trahies par leur odeur d'ail ou d'oignon, et leurs fleurs réunies en ombelle.",
    caracteristiques: [
      "Plantes à bulbe, feuilles allongées partant de la base.",
      "Fleurs en ombelle ; odeur d'ail/oignon chez les Allium (ail des ours).",
      "Prudence : des ornementales de la famille (narcisse) sont toxiques.",
    ],
  },
  {
    slug: 'urticacees',
    nom: 'Urticacées',
    latin: 'Urticaceae',
    resume: "La famille de l'ortie : des plantes humbles, souvent urticantes, mais remarquablement nutritives une fois cuites.",
    caracteristiques: [
      "Poils urticants chez l'ortie (la cuisson les neutralise).",
      "Tige souvent carrée, fleurs verdâtres discrètes en grappes.",
      "Riches en fer, protéines et minéraux.",
    ],
  },
  {
    slug: 'plantaginacees',
    nom: 'Plantaginacées',
    latin: 'Plantaginaceae',
    resume: "La famille des plantains, omniprésents sur les chemins. Faciles à reconnaître à leurs feuilles nervurées en rosette.",
    caracteristiques: [
      "Feuilles en rosette à nervures parallèles bien marquées.",
      "Épi de fleurs au bout d'une tige nue.",
      "Communes, sans confusion dangereuse connue.",
    ],
  },
  {
    slug: 'adoxacees',
    nom: 'Adoxacées',
    latin: 'Adoxaceae',
    resume: "Arbustes de haies et lisières, comme le sureau et la viorne. Feuilles composées et grandes inflorescences en ombelles ou panicules.",
    caracteristiques: [
      "Arbustes à feuilles souvent composées.",
      "Fleurs nombreuses en larges ombelles ; baies en grappes.",
      "Fleurs et fruits cuisinés (sureau noir), mais gare aux espèces et parties toxiques.",
    ],
    risque: true,
  },
];
