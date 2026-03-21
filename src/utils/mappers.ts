// ---------- Project Mappers ----------
import type { ResearchProjectApi, ProjectStatus } from "@/types/api";
import type { Project } from "@/types/project";

// const
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL as string | undefined;
export const DEFAULT_IMAGE_URL = "https://placehold.net/default.png";
const DEFAULT_MAN_AVATAR_URL = "man-avatar-placeholder.jpeg";
const DEFAULT_AVATAR_URL = DEFAULT_MAN_AVATAR_URL;

// map status
function mapStatus(status: ProjectStatus): "On going" | "Done" | "On hold" {
  switch (status) {
    case "active":
    case "upcoming":
      return "On going";
    case "completed":
      return "Done";
    case "paused":
      return "On hold";
    default:
      return "On hold";
  }
}

// map project
export function mapProject(api: ResearchProjectApi): Project {
  return {
    id: api.id,
    title: api.title,
    description: api.description || "No description available",
    image: api.image_url ? `${IMAGE_BASE_URL}/${api.image_url}` : DEFAULT_IMAGE_URL,
    tags: Array.isArray(api.categories)
      ? api.categories.map((cat) => cat.name)
      : [],
    status: mapStatus(api.status),
    members: Array.isArray(api.contributors)
      ? api.contributors.map((contributor) => ({
          name: contributor.name,
          avatar: contributor.image_url ?? DEFAULT_AVATAR_URL,
        }))
      : [],
    additionalCount: 0,
    isFeatured: api.is_featured,
  };
}
