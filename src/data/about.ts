import type { AboutSlideData, PillarData } from "@/types";

export const aboutSlides: AboutSlideData[] = [
  {
    id: 1,
    src: "/meymey_siv_aquared.png",
    alt: "ReDA Lab team at work",
    backgroundColor: "#f0f0f0",
  },
  {
    id: 2,
    src: "/project-image-01.png",
    alt: "Research collaboration session",
    backgroundColor: "#e0e0e0",
  },
  {
    id: 3,
    src: "/samples/sample-01.png",
    alt: "Data science workshop",
    backgroundColor: "#d8e8f0",
  },
];

export const pillars: PillarData[] = [
  {
    id: "pillar-mission",
    iconName: "Goal",
    title: "Our Mission",
    items: [
      "Advance applied research in data science and AI for Cambodia.",
      "Foster a collaborative research community within academic institutions.",
      "Bridge the gap between research outcomes and real-world applications.",
      "Empower students and researchers with modern skills and tools.",
    ],
  },
  {
    id: "pillar-vision",
    iconName: "Eye",
    title: "Our Vision",
    items: [
      "To be the leading AI and data science research lab in Southeast Asia.",
      "Create an open, inclusive research culture that attracts global talent.",
      "Produce research that directly benefits Cambodian society and economy.",
      "Build sustainable partnerships with industry and government.",
    ],
  },
  {
    id: "pillar-values",
    iconName: "HeartPlus",
    title: "Our Values",
    items: [
      "Integrity — honest and transparent in all research endeavours.",
      "Curiosity — always asking why and seeking deeper understanding.",
      "Collaboration — stronger together than apart.",
      "Impact — measure success by real-world change.",
    ],
  },
];
