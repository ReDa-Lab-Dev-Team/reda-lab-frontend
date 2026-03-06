import type { ProjectData } from "@/types";

const projects: ProjectData[] = [
  {
    id: "project-1",
    title: "Khmer NLP Toolkit",
    description:
      "Building foundational NLP tools for the Khmer language including tokenisers, POS taggers, and a pre-trained language model corpus to accelerate Khmer AI research.",
    coreTheme: "NLP · Khmer Language · AI",
    leaders: ["Ngen Tina", "Phat Soma Nita"],
    imageUrl: "/project-img.png",
  },
  {
    id: "project-2",
    title: "Smart Agriculture Dashboard",
    description:
      "An IoT-integrated data platform that collects sensor data from rice paddies, applies predictive models for yield forecasting, and delivers actionable insights to farmers.",
    coreTheme: "IoT · Data Science · Agriculture",
    leaders: ["Dr. PHAUK Sokkhey", "Chan Dara", "Leang Sothea"],
    imageUrl: "/project-img.png",
  },
  {
    id: "project-3",
    title: "Healthcare Analytics Platform",
    description:
      "A data-driven platform leveraging electronic health records to identify disease patterns and support clinical decision-making in Cambodian hospitals.",
    coreTheme: "Healthcare · Machine Learning · Visualisation",
    leaders: ["Hy Chanraksmey", "Alice Meas"],
    imageUrl: "/project-img.png",
  },
  {
    id: "project-4",
    title: "Open Education Data Portal",
    description:
      "Aggregating and visualising national education statistics to inform policy decisions and identify learning-outcome gaps across provinces.",
    coreTheme: "Education · Open Data · Policy",
    leaders: ["Prof. Aldous Kan", "Leomord Vong"],
    imageUrl: "/project-img.png",
  },
];

export default projects;
