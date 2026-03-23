import GeneralList from "@/components/common/general-list";
import ProjectCard from "@/components/common/project-card";
import type { Project } from "@/types/project";

// Main Component
const PreviousProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <GeneralList<Project>
      items={projects}
      itemKey={(project) => project.id}
      renderItem={(project) => <ProjectCard project={project} />}
      title="Previous Projects"
    />
  );
};

export default PreviousProjects;
