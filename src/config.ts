// Site-wide settings. Update `website`, `author`, `desc`, and `title` when deploying.
// `ogImage` is the fallback social share image (lives in /public/).
export const SITE = {
  website: "https://anikethramesh.github.io/",
  author: "Aniketh Ramesh",
  profile: "https://anikethramesh.github.io/",
  desc: "Your personal site.",
  title: "Aniketh Ramesh",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Kolkata",
} as const;
