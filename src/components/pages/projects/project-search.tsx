// import { useState } from "react";

// type Category =
//   | "All"
//   | "Computer Vision"
//   | "Business Analytics"
//   | "Data Science"
//   | "Big Data"
//   | "LLM";

// const CATEGORIES: Category[] = [
//   "All",
//   "Computer Vision",
//   "Business Analytics",
//   "Data Science",
//   "Big Data",
//   "LLM",
// ];

// export default function ProjectSearch() {
//   const [activeCategory, setActiveCategory] = useState<Category>("All");
//   const [search, setSearch] = useState("");

//   return (
//     <div className="flex gap-3 mb-9">
//       <div className="relative flex-1 max-w-xs">
//         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
//           🔍
//         </span>
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search projects..."
//           className="w-full pl-8 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-slate-700 placeholder:text-slate-400"
//         />
//       </div>
//       <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-slate-300 transition-colors">
//         <span>⚙️</span> Filter the list
//       </button>
//     </div>
//   );
// }
