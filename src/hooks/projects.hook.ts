import { fetchProjects } from "@/services/project.service";
import { mapProject } from "@/utils/mappers";
import type { Project } from "@/types/project";
import { useAsyncList } from "./useAsyncList";

const useProjects = () =>
  useAsyncList({
    fetcher: fetchProjects,
    mapper: mapProject,
    initialData: [],
  }) as { data: Project[]; loading: boolean; error: unknown };

export { useProjects };
