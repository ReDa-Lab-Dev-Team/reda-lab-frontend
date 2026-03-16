// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ProjectCard, type ProjectCardProps } from "./project-card";
// import PrimarySectionHeader from "@/components/common/primary-section-header";
// import { fetchProjects } from "@/services/dataService";
// import type { ProjectData } from "@/types";

import ProjectCard from "@/components/common/project-card";

// const toCardProps = (d: ProjectData): ProjectCardProps => ({
//   title: d.title,
//   description: d.description,
//   coreTheme: d.coreTheme,
//   leaders: d.leaders,
//   imageUrl: d.imageUrl,
// });

// const FeaturedProjects = () => {
//   const [projects, setProjects] = useState<ProjectData[]>([]);

//   useEffect(() => {
//     fetchProjects().then(setProjects);
//   }, []);

//   return (
//     // <section className="py-20 bg-[#e6f0f8]">
//     <section className="py-20 bg-gradient-to-b from-[var(--primary)] to-[#ffffff]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <PrimarySectionHeader
//           title="Featured Projects"
//           className="text-white"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} {...toCardProps(project)} />
//           ))}
//         </div>

//         <div className="text-center">
//           <Button className="bg-[#0f3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#164771] transition shadow-lg hover:shadow-xl">
//             See all Projects
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;


export default function ProjectsSection() {
  // Splitting data to match the layout: 
  // Left Column: Featured + Khmer Text
  // Right Column: The 2x2 grid
  const leftColumnProjects = projects.filter(p => [1, 2].includes(p.id));
  const rightColumnProjects = projects.filter(p => [3, 4, 5, 6].includes(p.id));

  return (
    <section className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN (Takes up roughly 5/12 on large screens) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {leftColumnProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* RIGHT COLUMN (Takes up roughly 7/12 on large screens) */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}