import { defineCollection, z } from 'astro:content';

// Décrit les champs autorisés dans chaque fiche plante (frontmatter).
const plantes = defineCollection({
  type: 'content',
  schema: z.object({
    nom: z.string(),
    nomLatin: z.string(),
    type: z.enum(['sauvage', 'cultivée']),
    comestible: z.boolean(),
    partiesComestibles: z.array(z.string()),
    saison: z.array(z.enum(['printemps', 'été', 'automne', 'hiver'])),
    habitat: z.string(),
    image: z.string().optional(),
    difficulte: z.enum(['facile', 'moyenne', 'experte']).default('facile'),
    sources: z.array(z.string()).default([]),
    famille: z.string().optional(),
    accroche: z.string().optional(),
    specimen: z.string().optional(),
    description: z.array(z.string()).default([]),
    callouts: z.array(z.object({ titre: z.string(), texte: z.string() })).default([]),
    usages: z.string().optional(),
    recettes: z.array(z.object({ titre: z.string(), texte: z.string(), image: z.string().optional() })).default([]),
    precautionTitre: z.string().optional(),
    precautionIntro: z.string().optional(),
    confusions: z.array(z.object({ nom: z.string(), niveau: z.enum(['comestible', 'mortel', 'toxique', 'irritant']), texte: z.string() })).default([]),
    regles: z.array(z.string()).default([]),
    bonASavoir: z.array(z.string()).default([]),
  }),
});

export const collections = { plantes };
