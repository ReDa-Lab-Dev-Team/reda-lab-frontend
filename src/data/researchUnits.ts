import type { ResearchUnitData } from "@/types";

const researchUnits: ResearchUnitData[] = [
  {
    id: "unit-1",
    title: "LLM Application & Research Club",
    description:
      "Explore cutting-edge technologies in large language models (LLMs) and apply them to real-world challenges, from AI assistants to Khmer NLP and model optimization.",
    coreTheme:
      "LLM fine-tuning, architecture optimization, applied LLMs, Khmer NLP.",
    leaders: ["Ngen Tina", "Phat Soma Nita"],
    imageUrl: "/meymey_siv_aquared.png",
  },
  {
    id: "unit-2",
    title: "Data Science & Analytics Unit",
    description:
      "Applying statistical modelling, machine learning, and data visualisation to solve complex business and societal problems across multiple sectors.",
    coreTheme:
      "Statistical modelling, predictive analytics, business intelligence, data visualisation.",
    leaders: ["Dr. PHAUK Sokkhey", "Chan Dara"],
    imageUrl: "/b_sl_o.jpg",
  },
  {
    id: "unit-3",
    title: "Computer Vision & Imaging Lab",
    description:
      "Research in image recognition, object detection, and visual AI solutions tailored for real-world Cambodian environments.",
    coreTheme:
      "Image recognition, object detection, deep learning, medical imaging.",
    leaders: ["Leang Sothea", "Hy Chanraksmey"],
    imageUrl: "/project-image-01.png",
  },
];

export default researchUnits;
