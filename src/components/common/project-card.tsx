import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { truncateByWords } from "@/utils/string";
import type { Project } from "@/types";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "default";
  uniformHeight?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = "default",
  uniformHeight = false,
}) => {
  const isFeatured = variant === "featured" || project.isFeatured;

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
        uniformHeight ? "h-full" : isFeatured ? "h-full" : ""
      }`}
    >
      <CardContent className="p-0 h-full flex flex-col">
        {/* Image Container - Fixed height for uniformity */}
        <div
          className={`relative overflow-hidden ${
            uniformHeight ? "h-48" : isFeatured ? "h-64" : "h-40"
          }`}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600"
            style={{
              background:
                isFeatured && !uniformHeight
                  ? "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)"
                  : "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/50 text-6xl font-bold">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>

          {isFeatured && !uniformHeight && (
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>

        {/* Content */}
        <div
          className={`p-5 flex flex-col flex-grow ${uniformHeight ? "" : ""}`}
        >
          <h3
            className={`font-bold text-gray-900 mb-2 ${
              uniformHeight
                ? "text-base"
                : isFeatured
                  ? "text-3xl"
                  : "text-base"
            }`}
          >
            {project.title}
          </h3>

          {isFeatured && project.description && !uniformHeight && (
            <p className="text-gray-600 text-lg mb-4 line-clamp-8">
              {truncateByWords(project.description, 45)}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
              >
                {tag}
              </Badge>
            ))}
            <Badge
              variant="outline"
              className={`${
                project.status === "On going"
                  ? "bg-yellow-400 border-yellow-400 text-black"
                  : "bg-green-500 border-green-500 text-white"
              }`}
            >
              {project.status}
            </Badge>
          </div>

          {/* Members - Push to bottom */}
          <div className="flex items-center gap-2 mt-auto">
            <div className="flex -space-x-2">
              {project.members.map((member, index) => (
                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-indigo-500 text-white text-xs">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {project.members.map((m) => m.name).join(", ")}
              {project.additionalCount &&
                ` and ${project.additionalCount} others`}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
