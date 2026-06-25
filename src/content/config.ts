import { defineCollection, z } from 'astro:content';

// Décrit les champs autorisés dans chaque fiche plante (frontmatter).
// Astro vérifie automatiquement que chaque fiche respecte ce format.
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
  }),
});

export const collections = { plantes };
