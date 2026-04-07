type ZineImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ZineEntry = {
  sectionTitle: string;
  title?: string;
  meta?: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  image?: ZineImage;
  spotifyUrl?: string;
};

type ZineThought = {
  sectionTitle: string;
  quote: string;
  attribution: string;
};

type ZineIssue = {
  issueLabel: string;
  issueDate: string;
  subtitle: string;
  reading: ZineEntry;
  worthReading: ZineEntry;
  thought: ZineThought;
  listening: ZineEntry;
  local: ZineEntry;
};

// How to update this every month:
// 1. Change the issue label/date and swap the text below.
// 2. For links, add `href: "https://..."` to any section.
// 3. For images, put files in `public/zine/<issue>/...` and reference them as
//    `/zine/<issue>/filename.jpg`.
// 4. For Spotify, paste a normal playlist/album/track URL into `spotifyUrl`.
//    The page will convert it into an embedded card automatically.
// 5. `London right now` can be text only, image only, or both.
//
// Example image usage:
// image: {
//   src: "/zine/2026-04/shock-of-the-old.jpg",
//   alt: "Cover of The Shock of the Old",
//   caption: "My battered paperback copy.",
// },

export const currentZineIssue: ZineIssue = {
  issueLabel: "Issue 04",
  issueDate: "April 2026",
  subtitle: "A snapshot of what's on my mind",
  reading: {
    sectionTitle: "Currently reading",
    title: "The Shock of the Old",
    meta: "David Edgerton · 2006",
    description:
      'A corrective to the standard history of technology — argues that use matters more than invention, and that the twentieth century was defined by things we think of as obsolete. Makes you rethink what "cutting edge" actually means.',
    // href: "https://...",
    // image: {
    //   src: "/zine/2026-04/shock-of-the-old.jpg",
    //   alt: "Cover of The Shock of the Old",
    // },
  },
  worthReading: {
    sectionTitle: "Worth reading",
    title: "The roads not taken in AI alignment",
    meta: "Zvi Mowshowitz · Substack · March 2026",
    description:
      "On the structural reasons why alignment research converges on a narrow set of approaches, and what that means for the diversity of the field. Uncomfortable if you work in autonomy.",
    href: "https://thezvi.substack.com/",
    linkLabel: "Read it →",
  },
  thought: {
    sectionTitle: "A thought",
    quote:
      "The test of a first-rate intelligence is the ability to hold two opposing ideas in mind at the same time and still retain the ability to function.",
    attribution: "F. Scott Fitzgerald",
  },
  listening: {
    sectionTitle: "Listening to",
    title: "Vespertine",
    meta: "Bjork · 2001",
    description:
      "Mid-winter record for a warm April. Every track is a small contained world. The microbeats on Cocoon sound like they were recorded inside a watch.",
    // spotifyUrl: "https://open.spotify.com/album/5vBpIxm8ws6pWyVmTWiGE1",
  },
  local: {
    sectionTitle: "London right now",
    description:
      "The Tate Modern's turbine hall currently has an installation by Mire Lee — enormous hanging structures made from industrial materials and silicone. It looks like the inside of something biological. Free to enter, open until April 28th.",
    // image: {
    //   src: "/zine/2026-04/london-right-now.jpg",
    //   alt: "Installation view from the Tate Modern turbine hall",
    //   caption: "This can be a caption instead of extra body copy if you want.",
    // },
  },
};
