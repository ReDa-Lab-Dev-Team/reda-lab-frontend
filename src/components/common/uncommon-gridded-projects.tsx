import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// fetching and applying
import { fetchProjects } from "@/services/project.service";
import { mapProject } from "@/utils/mappers";
import type { Project } from "@/types/project";
import ProjectCard from "./project-card";
import GeneralCarousel from "./general-carousel";

// project card filter
import { countWords } from "@/utils/string";

export default function UncommonProjectListSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const rawProjects = await fetchProjects();
        const mappedProjects = rawProjects.map(mapProject);
        setProjects(mappedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
      {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!projects.length) return <div>No projects found</div>;

  // uncommon gridded logic
  const qualifyingFeaturedProject = projects.find(
    (p) => p.isFeatured && countWords(p.description ?? "") >= 70,
  );

  // keep only non-featured cards
  const regularProjects = qualifyingFeaturedProject
    ? projects.filter((p) => p.id !== qualifyingFeaturedProject.id).slice(0, 4)
    : [];

  const shouldUseUncommonGrid =
    Boolean(qualifyingFeaturedProject) && regularProjects.length === 4;

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Most Recent projects
        </h2>

        {/* Desktop */}
        {shouldUseUncommonGrid ? (
          <div className="hidden md:grid grid-cols-12 gap-6">
            <div className="col-span-5">
              <ProjectCard
                project={qualifyingFeaturedProject!}
                variant="featured"
              />
            </div>

            {/* Secondary Cards */}
            <div className="col-span-7 grid grid-cols-2 gap-6">
              {regularProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant="default"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="hidden md:block">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <ProjectCard project={project} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        )}

        {/* Mobile */}
        <div className="md:hidden">
          <GeneralCarousel
            items={projects}
            renderItem={(project) => <ProjectCard project={project} />}
            itemKey={(project) => project.id}
          />
        </div>
      </div>
    </section>
  );
}
