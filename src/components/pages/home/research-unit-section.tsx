import { type ResearchUnitProps, ResearchUnitCard } from "./research-unit-card"; // Importing the type for props

// --- Mock Data (Based on your image) ---
const unitData: ResearchUnitProps = {
  title: "LLM Application & Research Club",
  description:
    "Explore cutting-edge technologies in large language models (LLMs) and apply them to real-world challenges, from AI assistants to Khmer NLP and model optimization.",
  coreTheme:
    "LLM fine-tuning, architecture optimization, applied LLMs, Khmer NLP.",
  leaders: [
    "Ngen Tina",
    "Phat Soma Nita",
    "Yeng Kheang",
    "Som Channreaksa",
    "Som Channreaksmey",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop", // Placeholder AI image
};

// --- Component ---
// const ResearchUnitCollection= ({
// ) => {
//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
//           Our Research Units
//         </h2>
//         <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto rounded-full opacity-80" />
//       </div>

//       {/* Main Card Container */}
//       <ResearchUnitCard
//         title={title}
//         description={description}
//         coreTheme={coreTheme}
//         leaders={leaders}
//         imageUrl={imageUrl}
//       />
//     </div>
//   );
// };

const ResearchUnitCollection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
          Our Research Units
        </h2>
        <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto rounded-full opacity-80" />
      </div>

      {/* Main Card Container */}
      <ResearchUnitCard {...unitData} />
    </div>
  );
};

export default ResearchUnitCollection;