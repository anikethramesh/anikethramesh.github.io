// Defines the schema for content collections.
// `blog` — posts in src/data/blog/*.md
// `zine` — monthly issues in src/data/zine/*.md
// Adding a field here makes it available (and validated) in frontmatter.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const ZINE_PATH = "src/data/zine";
export const WORK_PATH = "src/data/work";

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

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${WORK_PATH}` }),
  schema: z.object({}),
});

export const collections = { blog, zine, work };
