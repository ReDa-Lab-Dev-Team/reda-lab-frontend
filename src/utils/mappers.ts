// utils/mappers.ts
import type { Project, ProjectApiStatus, ProjectData } from "@/types";

function toUiStatus(status?: ProjectApiStatus): Project["status"] {
  switch (status) {
    case "completed":
      return "Done";
    case "paused":
      return "On hold";
    case "active":
    case "upcoming":
    default:
      return "On going";
  }
}

export function mapProjectDataToProject(data: ProjectData): Project {
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const contributors = Array.isArray(data.contributors)
    ? data.contributors
    : [];

  const tags = categories
    .map((category) => category?.name)
    .filter((name): name is string => Boolean(name && name.trim()));

  const members = contributors
    .map((contributor) => ({
      name: contributor?.name?.trim() || "Unknown",
      avatar: contributor?.image_url ?? undefined,
    }))
    .filter((member) => member.name.length > 0);

  return {
    id: data.id,
    title: data.title || "Untitled Project",
    description: data.description || "",
    image: data.image_url || "",
    isFeatured: Boolean(data.is_featured),
    tags,
    status: toUiStatus(data.status),
    members,

    additionalCount: 0, // optional logic later
  };
}
