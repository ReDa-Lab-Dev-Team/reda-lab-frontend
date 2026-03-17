import type { ProjectData } from "@/types";
const projects: ProjectData[] = [
  {
    id: 1,
    title: "NLP API for Text Summarization",
    description: "Integrate generative AI capabilities into your own systems.", // Placeholder for the illustration
    isFeatured: true,
    logo: "TEXT-CORTEX",
    tags: [],
    authors: [], // No authors listed visibly on the main banner usually
  },
  {
    id: 2,
    title: "Khmer Text Sumarization",
    description:
      "Develops a Large Language Model (LLM) approach to condense Khmer documents into clear, concise summaries, making information more accessible for research, education, and the public.",
    imageColor: "bg-white",
    tags: [
      { label: "CV Club", variant: "secondary" },
      { label: "On going", variant: "default" }, // Using default for yellow/orange look
    ],
    authors: [
      { name: "N. Vanna", initials: "NV" },
      { name: "N. Tina", initials: "NT" },
      { name: "Others", initials: "+6" },
    ],
  },
  {
    id: 3,
    title: "FINTECH Project Management",
    description: "",
    imageColor: "bg-teal-700", // Placeholder for the cityscape image
    tags: [
      { label: "Business Club", variant: "secondary" },
      { label: "Done", variant: "success" },
    ],
    authors: [
      { name: "N. Vanna", initials: "NV" },
      { name: "S. Rachana", initials: "SR" },
    ],
  },
  {
    id: 4,
    title: "FINTECH Project Management",
    description: "",
    imageColor: "bg-teal-700",
    tags: [
      { label: "Business Club", variant: "secondary" },
      { label: "Done", variant: "success" },
    ],
    authors: [
      { name: "N. Vanna", initials: "NV" },
      { name: "S. Rachana", initials: "SR" },
    ],
  },
  {
    id: 5,
    title: "CAMTour Chatbot",
    description: "",
    imageColor: "bg-blue-400", // Placeholder for the isometric illustration
    tags: [
      { label: "CV Club", variant: "secondary" },
      { label: "On going", variant: "default" },
    ],
    authors: [
      { name: "N. Tina", initials: "NT" },
      { name: "S. Rachana", initials: "SR" },
      { name: "Others", initials: "+3" },
    ],
  },
  {
    id: 6,
    title: "CAMTour Chatbot",
    description: "",
    imageColor: "bg-blue-400",
    tags: [
      { label: "CV Club", variant: "secondary" },
      { label: "On going", variant: "default" },
    ],
    authors: [
      { name: "N. Tina", initials: "NT" },
      { name: "S. Rachana", initials: "SR" },
      { name: "Others", initials: "+3" },
    ],
  },
];

export default projects;
