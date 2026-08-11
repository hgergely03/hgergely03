import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    previewImgSrc: image().optional(),
    videoSrc: z.string().optional(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      description: z.string(),
    })).optional(),
    gallery: z.array(z.object({
      imgSrc: image(),
      caption: z.string(),
    })).optional(),
    technologies: z.array(z.object({
      name: z.string(),
      iconSrc: image(),
    })).optional(),
    publishDate: z.coerce.date(),
    relatedPosts: z.array(reference("project")).optional(),
  }),
});

export const collections = { projects };
