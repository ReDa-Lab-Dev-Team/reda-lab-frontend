import ProjectCard from "./project-card";
import GeneralCarousel from "./general-carousel";

import type { Project } from "@/types/project";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Previous projects</h2>
      </div>

      {/* Mobile Carousel */}
      <GeneralCarousel
        items={projects}
        itemKey={(project) => project.id}
        renderItem={(project) => <ProjectCard project={project} />}
      />

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
