import apiFetch from "./api.service";
import type { ResearchProjectApi } from "@/types/api";

export async function fetchProjects(): Promise<ResearchProjectApi[]> {
  const data = await apiFetch<unknown>("/public/projects", []);

  if (Array.isArray(data)) return data as ResearchProjectApi[];

  if (data && typeof data === "object") {
    const wrappedData = (data as { data?: unknown }).data;
    if (Array.isArray(wrappedData)) return wrappedData as ResearchProjectApi[];

    const wrappedItems = (
      data as {
        items?: unknown;
      }
    ).items;
    if (Array.isArray(wrappedItems))
      return wrappedItems as ResearchProjectApi[];
  }

  return [];
}
