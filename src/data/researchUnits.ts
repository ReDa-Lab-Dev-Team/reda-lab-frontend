import type { ResearchUnitData } from "@/types";

const researchUnits: ResearchUnitData[] = [
  {
    id: 1,
    title: "LLM Application & Research Club",
    description:
      "Explore cutting-edge technologies in large language models (LLMs) and apply them to real-world challenges, from AI assistants to Khmer NLP and model optimization.",
    coreTheme:
      "LLM fine-tuning, architecture optimization, applied LLMs, Khmer NLP.",
    leaders: ["Ngen Tina", "Phat Soma Nita"],
    imageUrl: "/meymey_siv_aquared.png",
  },
  {
    id: 2,
    title: "Data Science & Analytics Unit",
    description:
      "Applying statistical modelling, machine learning, and data visualisation to solve complex business and societal problems across multiple sectors.",
    coreTheme:
      "Statistical modelling, predictive analytics, business intelligence, data visualisation.",
    leaders: ["Dr. PHAUK Sokkhey", "Chan Dara"],
    imageUrl: "/b_sl_o.jpg",
  },
  {
    id: 3,
    title: "Computer Vision & Imaging Lab",
    description:
      "Research in image recognition, object detection, and visual AI solutions tailored for real-world Cambodian environments.",
    coreTheme:
      "Image recognition, object detection, deep learning, medical imaging.",
    leaders: ["Leang Sothea", "Hy Chanraksmey"],
    imageUrl: "/project-image-01.png",
  },
  {
    id: 4,
    title: "Robotics & IoT Lab",
    description:
      "Developing smart, connected systems and robotic solutions for industrial and consumer applications.",
    coreTheme:
      "Internet of Things, Embedded Systems, Automation, Robotics.",
    leaders: ["Seng Leap", "Kong Sokchea"],
    imageUrl: "/project-image-02.jpg",
  },
  {
    id: 5,
    title: "Software Engineering Unit",
    description:
      "Researching scalable software architectures, modern development methodologies, and reliable systems.",
    coreTheme:
      "System Architecture, DevOps, Cloud Computing, Software Patterns.",
    leaders: ["Meas Panha", "Chea Vanna"],
    imageUrl: "/project-image-03.jpg",
  }
];

export default researchUnits;
