export const SITE = {
  website: "https://your-domain.com/", // replace with your deployed domain
  author: "Aniketh Ramesh",
  profile: "https://your-domain.com/",
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
