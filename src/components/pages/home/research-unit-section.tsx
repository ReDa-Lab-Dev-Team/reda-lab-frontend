// import { type ResearchUnitProps, ResearchUnitCard } from "./research-unit-card"; // Importing the type for props

import { Lightbulb, Users } from "lucide-react";

// // --- Mock Data (Based on your image) ---
// const unitData: ResearchUnitProps = {
//   title: "LLM Application & Research Club",
//   description:
//     "Explore cutting-edge technologies in large language models (LLMs) and apply them to real-world challenges, from AI assistants to Khmer NLP and model optimization.",
//   coreTheme:
//     "LLM fine-tuning, architecture optimization, applied LLMs, Khmer NLP.",
//   leaders: [
//     "Ngen Tina",
//     "Phat Soma Nita",
//     "Yeng Kheang",
//     "Som Channreaksa",
//     "Som Channreaksmey",
//   ],
//   imageUrl:
//     "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop", // Placeholder AI image
// };

// // --- Component ---
// // const ResearchUnitCollection= ({
// // ) => {
// //   return (
// //     <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
// //       {/* Section Header */}
// //       <div className="text-center mb-12">
// //         <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
// //           Our Research Units
// //         </h2>
// //         <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto rounded-full opacity-80" />
// //       </div>

// //       {/* Main Card Container */}
// //       <ResearchUnitCard
// //         title={title}
// //         description={description}
// //         coreTheme={coreTheme}
// //         leaders={leaders}
// //         imageUrl={imageUrl}
// //       />
// //     </div>
// //   );
// // };

// const ResearchUnitCollection = () => {
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
//       <ResearchUnitCard {...unitData} />
//     </div>
//   );
// };

// export default ResearchUnitCollection;

const ResearchUnit = () => {
  return (
    <section id="research" className="py-20 bg-[#0f3a5d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Research Units</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="bg-[#164771] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-1/2 h-64 lg:h-auto relative">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                {/* Placeholder for the LLM Graphic */}
                <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                        <span className="text-4xl">🤖</span>
                    </div>
                    <p className="text-blue-200 font-mono">LLM Research Division</p>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">LLM Application & Research Club</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Explore cutting-edge technologies in large language models (LLMs) and apply them to real-world challenges, from AI assistants to Khmer NLP and model optimization.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-800 p-2 rounded text-yellow-400 mt-1">
                  <Lightbulb size={16} />
                </div>
                <div>
                  <span className="text-white font-semibold block">Core Theme:</span>
                  <span className="text-blue-300 text-sm">LLM fine-tuning, architecture optimization, applied LLMs, Khmer NLP.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-800 p-2 rounded text-yellow-400 mt-1">
                  <Users size={16} />
                </div>
                <div>
                  <span className="text-white font-semibold block">Leaders:</span>
                  <span className="text-blue-300 text-sm">Dr. HAS Sothea, Dr. PHAUK Sokhhey, Mr. DIN Sokheng, Mr. PEN Chentra.</span>
                </div>
              </div>
            </div>

            <button className="self-start bg-white text-[#0f3a5d] px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchUnit;