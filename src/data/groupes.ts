export interface Groupe {
  slug: string;
  nom: string;
  latin: string;
  resume: string;
  caracteristiques: string[];
  risque?: boolean;
}

export const groupes: Groupe[] = [
  {
    slug: 'mammiferes',
    nom: 'Mammifères',
    latin: 'Mammalia',
    resume: "Animaux à sang chaud, à fourrure, qui allaitent leurs petits. De la musaraigne au cerf, ils occupent tous les milieux. Beaucoup sont protégés ou soumis à réglementation de chasse.",
    caracteristiques: [
      "Corps couvert de poils ou fourrure ; sang chaud.",
      "Nombreuses espèces strictement protégées (chauves-souris, loutre, hérisson).",
      "Gibier réglementé : chevreuil, sanglier, lièvre — chasse soumise à permis et saisons.",
    ],
    risque: true,
  },
  {
    slug: 'oiseaux',
    nom: 'Oiseaux',
    latin: 'Aves',
    resume: "Vertébrés à plumes et à bec, les seuls dinosaures encore vivants. La grande majorité des espèces européennes est protégée. Seules quelques espèces de gibier sont chassables.",
    caracteristiques: [
      "Corps couvert de plumes, bec corné, deux ailes.",
      "Quasi-totalité des espèces protégée en France (directive Oiseaux).",
      "Gibier à plumes chassable : faisan, perdrix, canard colvert, bécasse — avec permis.",
    ],
    risque: true,
  },
  {
    slug: 'insectes',
    nom: 'Insectes',
    latin: 'Insecta',
    resume: "Six pattes, trois parties du corps (tête, thorax, abdomen), souvent des ailes. Groupe le plus diversifié du règne animal. Certains sont comestibles, d'autres venimeux ou urticants.",
    caracteristiques: [
      "6 pattes, 3 segments corporels, exosquelette chitineux.",
      "Abeilles, guêpes, frelons : venimeux (piqûres parfois graves).",
      "Chenilles processionnaires : urticantes — ne pas toucher.",
    ],
    risque: true,
  },
  {
    slug: 'reptiles',
    nom: 'Reptiles',
    latin: 'Reptilia',
    resume: "Animaux à sang froid, couverts d'écailles. En France, toutes les espèces de reptiles sont strictement protégées. La vipère aspic et la vipère péliade sont les seuls serpents venimeux indigènes.",
    caracteristiques: [
      "Sang froid, corps couvert d'écailles, œufs à coquille.",
      "Toutes les espèces françaises sont protégées par la loi.",
      "Deux espèces de vipères venimeuses en France : aspic et péliade.",
    ],
    risque: true,
  },
  {
    slug: 'amphibiens',
    nom: 'Amphibiens',
    latin: 'Amphibia',
    resume: "Grenouilles, crapauds, tritons et salamandres. Toutes les espèces françaises sont protégées. Certaines sécrètent des toxines cutanées.",
    caracteristiques: [
      "Peau nue et humide, cycle larve aquatique → adulte terrestre.",
      "Toutes les espèces françaises sont intégralement protégées.",
      "Salamandre tachetée : sécrète des alcaloïdes toxiques par la peau.",
    ],
    risque: true,
  },
  {
    slug: 'poissons',
    nom: 'Poissons',
    latin: 'Actinopterygii',
    resume: "Vertébrés aquatiques à nageoires et branchies. La pêche est réglementée (permis, tailles minimales, périodes de fermeture). De nombreuses espèces d'eau douce sont en déclin.",
    caracteristiques: [
      "Nageoires, branchies, corps souvent couvert d'écailles.",
      "Pêche réglementée : permis obligatoire, périodes de fermeture, tailles minimales.",
      "Certaines espèces protégées (esturgeon, ombre commun, lamproie).",
    ],
  },
  {
    slug: 'arachnides',
    nom: 'Arachnides',
    latin: 'Arachnida',
    resume: "Araignées, scorpions, acariens et opilions. Huit pattes, corps en deux parties. Les araignées indigènes sont quasi toutes inoffensives ; quelques espèces méritent la prudence.",
    caracteristiques: [
      "8 pattes, corps en céphalothorax + abdomen, pas d'antennes.",
      "Araignées indigènes peu dangereuses pour l'homme ; ne mordent que si saisies.",
      "Tiques (acariens) : vecteurs de la maladie de Lyme — inspecter la peau après une sortie en nature.",
    ],
    risque: true,
  },
];
