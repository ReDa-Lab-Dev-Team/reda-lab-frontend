import PreviousProjects from "./previous-projects";
import MostRecentProjects from "./most-recent-projects";
import { useProjects } from "@/hooks/projects.hook";

export const Projects = () => {
  const { data: projects, loading, error } = useProjects();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load projects</div>;
  if (!projects.length) return <div>No projects found</div>;

  return (
    <>
      <MostRecentProjects projects={projects} />
      <PreviousProjects projects={projects} />
    </>
  );
};
