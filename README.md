# receptive-resonance

Personal site for Aniketh Ramesh. Built on [AstroPaper](https://github.com/satnaing/astro-paper) with Astro and TailwindCSS.

---

## Maintaining the site

### The golden rule

**Content lives in `src/data/`. Templates live in `src/pages/` and `src/layouts/`.** You should almost never need to edit a `.astro` file to update content.

### Where things are

```
src/
├── data/
│   ├── homepage.ts        ← your name, tagline, and bio paragraphs
│   ├── appearances.ts     ← media coverage, publications links
│   ├── blog/              ← blog posts as markdown files
│   │   └── *.md
│   └── zine/              ← monthly zine issues as markdown files
│       └── YYYY-MM.md
├── pages/
│   ├── index.astro        ← homepage (reads from data/homepage.ts)
│   ├── my-work.astro      ← career/PhD template (do not edit)
│   ├── appearances.astro  ← media page (reads from data/appearances.ts)
│   ├── zine.astro         ← zine page (reads from data/zine/*.md)
│   └── blog/              ← blog routing (do not edit)
├── layouts/
│   ├── Layout.astro       ← base HTML shell
│   ├── AboutLayout.astro  ← layout for markdown pages (my-work.md)
│   └── PostDetails.astro  ← layout for blog posts
├── config.ts              ← site-wide settings (name, URL, author, etc.)
└── constants.ts           ← social links
```

---

### Updating your bio (homepage)

Edit `src/data/homepage.ts`. The `bio` array is a list of paragraphs — add, remove, or reorder them freely.

### Adding a media appearance

Edit `src/data/appearances.ts`. Add an entry to `startupCoverage`, `researchCoverage`, or `publications`.

```ts
{
  title: "Article title",
  href: "https://...",
  description: "One or two sentences about it.",
}
```

### Updating your career/PhD content

Edit `src/data/work/my-work.md`. The file has comments at the top explaining what each markdown element maps to visually (e.g. `h2` → section heading, `h4` → muted subtitle). `my-work.astro` loads this file and applies the styling — you never need to touch it.

### Writing a blog post

Create a new file in `src/data/blog/`. Copy the frontmatter from an existing post.

```md
---
author: Aniketh Ramesh
pubDatetime: 2026-01-01T12:00:00Z
title: Post title
featured: false
draft: false
tags:
  - Tag
description: One sentence description shown in post listings.
---

Your content here.
```

Set `draft: true` to write without publishing. Set `featured: true` to pin to the top of the index.

### Writing a zine issue

Create `src/data/zine/YYYY-MM.md`. The page automatically shows the latest issue based on `sortDate`. Copy `src/data/zine/2026-04.md` as a template — it has comments explaining every field.

Images for the zine go in `public/zine/YYYY-MM/` and are referenced as `/zine/YYYY-MM/filename.jpg`.

### Updating social links

Edit the `SOCIALS` array in `src/constants.ts`.

### Updating site metadata

Edit `src/config.ts` — site title, author name, URL, OG image, etc.

---

## Running locally

```bash
npm install
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build
```

---

## Deployment

Deployed via GitHub Actions to GitHub Pages. Push to `main` to deploy.
