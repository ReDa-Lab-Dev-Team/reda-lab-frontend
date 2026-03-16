import type { ProjectData } from "@/types";

// const projects: ProjectData[] = [
//   {
//     id: "project-1",
//     title: "Khmer NLP Toolkit",
//     description:
//       "Building foundational NLP tools for the Khmer language including tokenisers, POS taggers, and a pre-trained language model corpus to accelerate Khmer AI research.",
//     coreTheme: "NLP · Khmer Language · AI",
//     leaders: ["Ngen Tina", "Phat Soma Nita"],
//     imageUrl: "/project-img.png",
//   },
//   {
//     id: "project-2",
//     title: "Smart Agriculture Dashboard",
//     description:
//       "An IoT-integrated data platform that collects sensor data from rice paddies, applies predictive models for yield forecasting, and delivers actionable insights to farmers.",
//     coreTheme: "IoT · Data Science · Agriculture",
//     leaders: ["Dr. PHAUK Sokkhey", "Chan Dara", "Leang Sothea"],
//     imageUrl: "/project-img.png",
//   },
//   {
//     id: "project-3",
//     title: "Healthcare Analytics Platform",
//     description:
//       "A data-driven platform leveraging electronic health records to identify disease patterns and support clinical decision-making in Cambodian hospitals.",
//     coreTheme: "Healthcare · Machine Learning · Visualisation",
//     leaders: ["Hy Chanraksmey", "Alice Meas"],
//     imageUrl: "/project-img.png",
//   },
//   {
//     id: "project-4",
//     title: "Open Education Data Portal",
//     description:
//       "Aggregating and visualising national education statistics to inform policy decisions and identify learning-outcome gaps across provinces.",
//     coreTheme: "Education · Open Data · Policy",
//     leaders: ["Prof. Aldous Kan", "Leomord Vong"],
//     imageUrl: "/project-img.png",
//   },
// ];

const projects: ProjectData[] = [
  {
    id: 1,
    title: "NLP API for Text Summarization",
    description: "Integrate generative AI capabilities into your own systems.",
    imageColor: "bg-purple-200", // Placeholder for the illustration
    isFeatured: true,
    logo: "TEXT-CORTEX",
    tags: [], 
    authors: [] // No authors listed visibly on the main banner usually
  },
  {
    id: 2,
    title: "Khmer Text Sumarization",
    description: "Develops a Large Language Model (LLM) approach to condense Khmer documents into clear, concise summaries, making information more accessible for research, education, and the public.",
    imageColor: "bg-white",
    tags: [
      { label: "CV Club", variant: "secondary" },
      { label: "On going", variant: "default" } // Using default for yellow/orange look
    ],
    authors: [
      { name: "N. Vanna", initials: "NV" },
      { name: "N. Tina", initials: "NT" },
      { name: "Others", initials: "+6" }
    ]
  },
  {
    id: 3,
    title: "FINTECH Project Management",
    description: "",
    imageColor: "bg-teal-700", // Placeholder for the cityscape image
    tags: [
      { label: "Business Club", variant: "secondary" },
      { label: "Done", variant: "success" }
    ],
    authors: [
      { name: "N. Vanna", initials: "NV" },
      { name: "S. Rachana", initials: "SR" }
    ]
  },
  {
    id: 4,
    title: "FINTECH Project Management",
    description: "",
    imageColor: "bg-teal-700",
    tags: [
      { label: "Business Club", variant: "secondary" },
      { label: "Done", variant: "success" }
    ],
    authors: [
      { name: "N. Vanna", initials: "NV" },
      { name: "S. Rachana", initials: "SR" }
    ]
  },
  {
    id: 5,
    title: "CAMTour Chatbot",
    description: "",
    imageColor: "bg-blue-400", // Placeholder for the isometric illustration
    tags: [
      { label: "CV Club", variant: "secondary" },
      { label: "On going", variant: "default" }
    ],
    authors: [
      { name: "N. Tina", initials: "NT" },
      { name: "S. Rachana", initials: "SR" },
      { name: "Others", initials: "+3" }
    ]
  },
  {
    id: 6,
    title: "CAMTour Chatbot",
    description: "",
    imageColor: "bg-blue-400",
    tags: [
      { label: "CV Club", variant: "secondary" },
      { label: "On going", variant: "default" }
    ],
    authors: [
      { name: "N. Tina", initials: "NT" },
      { name: "S. Rachana", initials: "SR" },
      { name: "Others", initials: "+3" }
    ]
  }
];

export default projects;
