import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const ZINE_PATH = "src/data/zine";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      password: z.string().optional(),
      passwordHint: z.string().optional(),
    }),
});

const zine = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${ZINE_PATH}` }),
  schema: z.object({
    issueLabel: z.string(),
    issueDate: z.string(),
    sortDate: z.date(),
    subtitle: z.string(),
    reading: z.object({
      title: z.string().optional(),
      meta: z.string().optional(),
      description: z.string().optional(),
      href: z.string().optional(),
      image: z
        .object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
        .optional(),
    }),
    worthReading: z.object({
      title: z.string().optional(),
      meta: z.string().optional(),
      description: z.string().optional(),
      href: z.string().optional(),
      linkLabel: z.string().optional(),
      image: z
        .object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
        .optional(),
    }),
    thought: z.object({
      quote: z.string(),
      attribution: z.string(),
    }),
    listening: z.object({
      title: z.string().optional(),
      meta: z.string().optional(),
      description: z.string().optional(),
      href: z.string().optional(),
      spotifyUrl: z.string().optional(),
      image: z
        .object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
        .optional(),
    }),
    local: z.object({
      description: z.string().optional(),
      image: z
        .object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
        .optional(),
    }),
  }),
});

export const collections = { blog, zine };
