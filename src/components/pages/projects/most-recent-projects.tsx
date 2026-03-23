import UncommonGridLayout from "@/components/common/uncommon-grid-layout";
import ProjectCard from "@/components/common/project-card";
import type { Project } from "@/types/project";
// import { countWords } from "@/utils/string";

export default function MostRecentProjects({
  projects,
}: {
  projects: Project[];
}) {
  const recentProject = projects.slice(0, 5);
  return (
    <UncommonGridLayout
      items={recentProject}
      itemKey={(p) => p.id}
      renderItem={(project) => <ProjectCard project={project} />}
      shouldQualify={
        () => false
        // (p) => p.isFeatured === true && countWords(p.description ?? "") >= 70
      }
      title="Most Recent projects"
    />
  );
}
