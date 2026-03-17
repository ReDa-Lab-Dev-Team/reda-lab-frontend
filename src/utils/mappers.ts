// utils/mappers.ts
import type { Project, ProjectData } from "@/types";

export function mapProjectDataToProject(data: ProjectData): Project {
  return {
    id: data.id,
    title: data.title,
    description: data.description || "",
    image: data.imageUrl || "",
    isFeatured: data.isFeatured,

    // convert tags
    tags: data.tags.map((t) => t.label),

    // fake status (or derive from tag)
    status:
      data.tags.find((t) => t.label === "Done") ? "Done" : "On going",

    // convert authors → members
    members: data.authors.map((a) => ({
      name: a.name,
      avatar: a.avatarUrl,
    })),

    additionalCount: 0, // optional logic later
  };
}