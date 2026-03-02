import { Button } from "@/components/ui/button";
import { ProjectCard, type ProjectCardProps } from "./project-card";
import CenteredTitle from "@/components/common/centered-title";

const projectData: ProjectCardProps[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coreTheme: "AI Research",
    leaders: ["Alice", "Bob", "Charlie"],
    imageUrl: "/project-img.png",
  },
  {
    title: "Project 2",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    coreTheme: "Data Science",
    leaders: ["David", "Eve", "Frank"],
    imageUrl: "/project-img.png",
  },
];

const FeaturedProjects = () => {
  return (
    // <section className="py-20 bg-[#e6f0f8]">
    <section className="py-20 bg-gradient-to-b from-[var(--primary)] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CenteredTitle title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
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
