// Appearances page content — add entries to the relevant array below.
// `startupCoverage` → industry/startup press
// `researchCoverage` → academic/research coverage
// `publications`     → papers and scholar links

interface AppearanceItem {
  title: string;
  href: string;
  description: string;
  linkLabel?: string;
}

export const startupCoverage: AppearanceItem[] = [
  {
    title: "Occam raises €3M for autonomous drones in Ukraine",
    href: "https://pathfounders.com/p/occam-raises-3m-autonomous-drones-ukraine-frontline",
    description:
      "Coverage of Occam's AI pilot technology and deployment strategy for GPS-denied, contested environments.",
  },
  {
    title: "Defence Tech Hackathon Coverage",
    href: "https://www.youtube.com/watch?v=QSNI72GDpbk",
    description:
      "Featured as part of European defence innovation efforts, highlighting rapid prototyping and applied autonomy in high-stakes environments.",
  },
];

export const researchCoverage: AppearanceItem[] = [
  {
    title: "ITV News — Robotic Disassembly of EV Batteries",
    href: "https://www.youtube.com/watch?v=0CcxK7U-tmY",
    description:
      "Featured work from the Extreme Robotics Lab, demonstrating autonomous systems operating in hazardous, real-world environments.",
  },
  {
    title: "Robot Lab Live — Human–Robot Teaming in Dangerous Environments",
    href: "https://www.youtube.com/watch?v=Yg_lKP31soA&list=PLOCYdyFqxhGLbt6C2Rqj6qwzzCwpEIwnM",
    description:
      "Invited talk on how robots and humans can coordinate effectively under uncertainty, with a focus on autonomy, trust, and operator interaction.",
  },
];

export const publications: AppearanceItem[] = [
  {
    title: "Google Scholar — Aniketh Ramesh",
    href: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=cuatGVUAAAAJ",
    description:
      "Full list of publications covering robot health, variable autonomy, and human–multi-robot teaming.",
  },
];
