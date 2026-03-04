import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard, type ProjectCardProps } from "./project-card";
import PrimarySectionHeader from "@/components/common/primary-section-header";
import { fetchProjects } from "@/services/dataService";
import type { ProjectData } from "@/types";

const toCardProps = (d: ProjectData): ProjectCardProps => ({
  title: d.title,
  description: d.description,
  coreTheme: d.coreTheme,
  leaders: d.leaders,
  imageUrl: d.imageUrl,
});

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    // <section className="py-20 bg-[#e6f0f8]">
    <section className="py-20 bg-gradient-to-b from-[var(--primary)] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimarySectionHeader
          title="Featured Projects"
          className="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...toCardProps(project)} />
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#0f3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#164771] transition shadow-lg hover:shadow-xl">
            See all Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
