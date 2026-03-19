import type { ProjectApiData } from "@/types";
const projects: ProjectApiData[] = [
  {
    id: 1,
    title: "NLP API for Text Summarization",
    description: "Integrate generative AI capabilities into your own systems.",
    is_featured: true,
    status: "active",
    categories: [],
    contributors: [],
  },
  {
    id: 2,
    title: "Khmer Text Sumarization",
    description:
      "Develops a Large Language Model (LLM) approach to condense Khmer documents into clear, concise summaries, making information more accessible for research, education, and the public.",
    status: "active",
    categories: [{ name: "CV Club" }],
    contributors: [
      { name: "N. Vanna" },
      { name: "N. Tina" },
      { name: "Others" },
    ],
  },
  {
    id: 3,
    title: "FINTECH Project Management",
    description: "",
    status: "completed",
    categories: [{ name: "Business Club" }],
    contributors: [{ name: "N. Vanna" }, { name: "S. Rachana" }],
  },
  {
    id: 4,
    title: "FINTECH Project Management",
    description: "",
    status: "completed",
    categories: [{ name: "Business Club" }],
    contributors: [{ name: "N. Vanna" }, { name: "S. Rachana" }],
  },
  {
    id: 5,
    title: "CAMTour Chatbot",
    description: "",
    status: "active",
    categories: [{ name: "CV Club" }],
    contributors: [
      { name: "N. Tina" },
      { name: "S. Rachana" },
      { name: "Others" },
    ],
  },
  {
    id: 6,
    title: "CAMTour Chatbot",
    description: "",
    status: "active",
    categories: [{ name: "CV Club" }],
    contributors: [
      { name: "N. Tina" },
      { name: "S. Rachana" },
      { name: "Others" },
    ],
  },
];

export default projects;
