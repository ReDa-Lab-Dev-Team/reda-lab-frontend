// utils/mappers.ts
import type {
  Author,
  ProjectApiData,
  ProjectApiStatus,
  ProjectData,
  ProjectTag,
} from "@/types";

function toUiStatus(
  status?: ProjectApiStatus,
): "On going" | "Done" | "On hold" {
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

function toInitials(name: string): string {
  const parts = name
    .split(" ")
    .map((part) => part.trim())
    .filter(Boolean);

  const initials = parts.map((part) => part[0]?.toUpperCase()).join("");
  return initials.slice(0, 2) || "NA";
}

function toCardTags(
  categories: ProjectApiData["categories"],
  statusLabel: "On going" | "Done" | "On hold",
): ProjectTag[] {
  const mappedCategories = (Array.isArray(categories) ? categories : [])
    .map((category) => category?.name?.trim())
    .filter((name): name is string => Boolean(name))
    .map((label) => ({
      label,
      variant: "secondary" as const,
    }));

  return [
    ...mappedCategories,
    {
      label: statusLabel,
      variant:
        statusLabel === "Done"
          ? "success"
          : statusLabel === "On hold"
            ? "outline"
            : "default",
    },
  ];
}

function toCardAuthors(contributors: ProjectApiData["contributors"]): Author[] {
  return (Array.isArray(contributors) ? contributors : [])
    .map((contributor) => {
      const name = contributor?.name?.trim() || "Unknown";
      return {
        name,
        avatarUrl: contributor?.image_url ?? undefined,
        initials: toInitials(name),
      };
    })
    .filter((author) => author.name.length > 0);
}

export function mapProjectDataToProject(data: ProjectApiData): ProjectData {
  const statusLabel = toUiStatus(data.status);
  const tags = toCardTags(data.categories, statusLabel);
  const authors = toCardAuthors(data.contributors);

  const categories = Array.isArray(data.categories) ? data.categories : [];
  const contributors = Array.isArray(data.contributors)
    ? data.contributors
    : [];

  return {
    ...data,
    id: data.id,
    title: data.title || "Untitled Project",
    description: data.description || "",
    image_url: data.image_url || "",
    is_featured: Boolean(data.is_featured),
    isFeatured: Boolean(data.is_featured),
    imageColor: data.is_featured ? "bg-slate-100" : "bg-teal-100",
    logo: categories[0]?.name || "REDA LAB",
    tags,
    status: data.status,
    authors,
    contributors,
    categories,
  };
}
