import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./project-card";
import { fetchPublicProjects } from "@/services/dataService";
import type { ProjectData } from "@/types";
import { mapProjectDataToProject } from "@/utils/mappers";

export default function UncommonProjectListSection() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const mappedProjects = projects.map(mapProjectDataToProject);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchPublicProjects();
        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch public projects:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!mappedProjects.length) return <div>No projects found</div>;

  const featuredProject =
    mappedProjects.find((p) => p.isFeatured) || mappedProjects[0];
  const regularProjects = mappedProjects.filter(
    (p) => p.id !== featuredProject.id,
  );
  const useDesktopCarousel = mappedProjects.length < 4;

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Most Recent projects
        </h2>

        {/* Desktop */}
        {useDesktopCarousel ? (
          <div className="hidden md:block">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {mappedProjects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <ProjectCard
                        project={project}
                        variant={
                          project.id === featuredProject.id
                            ? "featured"
                            : "default"
                        }
                        uniformHeight
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        ) : (
          <div className="hidden md:grid grid-cols-12 gap-6">
            <div className="col-span-5">
              <ProjectCard project={featuredProject} variant="featured" />
            </div>

            {/* Secondary Cards */}
            <div className="col-span-7 grid grid-cols-2 gap-6">
              {regularProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Mobile */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {mappedProjects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <ProjectCard
                      project={project}
                      variant="default"
                      uniformHeight
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
