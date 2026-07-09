import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
  }),
});

export const collections = { posts };
