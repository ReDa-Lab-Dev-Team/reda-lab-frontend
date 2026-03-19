import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";

// Types
interface Project {
  id: string;
  title: string;
  description?: string;
  image: string;
  tags: string[];
  status: "On going" | "Done" | "Completed";
  members: Array<{
    name: string;
    avatar?: string;
  }>;
  additionalCount?: number;
  isFeatured?: boolean;
}

// Mock Data
const projects: Project[] = [
  {
    id: "1",
    title: "Khmer Text Sumarization",
    description:
      "Develops a Large Language Model (LLM) approach to condense Khmer documents into clear, concise summaries, making information more accessible for research, education, and the public.",
    image: "/api/placeholder/600/400",
    tags: ["CV Club"],
    status: "On going",
    isFeatured: true,
    members: [
      { name: "N. Vanna", avatar: "/avatars/vanna.jpg" },
      { name: "N. Tina", avatar: "/avatars/tina.jpg" },
    ],
    additionalCount: 6,
  },
  {
    id: "2",
    title: "FINTECH Project Management",
    image: "/api/placeholder/400/300",
    tags: ["Business Club"],
    status: "Done",
    members: [
      { name: "N. Vanna", avatar: "/avatars/vanna.jpg" },
      { name: "S. Rachana", avatar: "/avatars/rachana.jpg" },
    ],
  },
  {
    id: "3",
    title: "FINTECH Project Management",
    image: "/api/placeholder/400/300",
    tags: ["Business Club"],
    status: "Done",
    members: [
      { name: "N. Vanna", avatar: "/avatars/vanna.jpg" },
      { name: "S. Rachana", avatar: "/avatars/rachana.jpg" },
    ],
  },
  {
    id: "4",
    title: "CAMTour Chatbot",
    image: "/api/placeholder/400/300",
    tags: ["CV Club"],
    status: "On going",
    members: [
      { name: "N. Tina", avatar: "/avatars/tina.jpg" },
      { name: "S. Rachana", avatar: "/avatars/rachana.jpg" },
    ],
    additionalCount: 3,
  },
  {
    id: "5",
    title: "CAMTour Chatbot",
    image: "/api/placeholder/400/300",
    tags: ["CV Club"],
    status: "On going",
    members: [
      { name: "N. Tina", avatar: "/avatars/tina.jpg" },
      { name: "S. Rachana", avatar: "/avatars/rachana.jpg" },
    ],
    additionalCount: 3,
  },
];

// Project Card Component
interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "default";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant = "default" }) => {
  const isFeatured = variant === "featured" || project.isFeatured;

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isFeatured ? "h-full" : ""
      }`}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className={`relative overflow-hidden ${isFeatured ? "h-64" : "h-40"}`}>
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600"
            style={{
              background: isFeatured
                ? "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)"
                : "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
            }}
          >
            {/* Placeholder for actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/50 text-6xl font-bold">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
          
          {/* Arrow Icon for featured */}
          {isFeatured && (
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className={`p-5 ${isFeatured ? "" : ""}`}>
          {isFeatured && (
            <>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-gray-600">text.cortex</span>
              </div>
              <Badge variant="secondary" className="mb-3 bg-black text-white hover:bg-black/90">
                NLP API for Text Summarization
              </Badge>
            </>
          )}

          <h3 className={`font-bold text-gray-900 mb-2 ${isFeatured ? "text-xl" : "text-base"}`}>
            {project.title}
          </h3>

          {isFeatured && project.description && (
            <p className="text-gray-600 text-xl mb-4 line-clamp-4">
              {project.description}
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

          {/* Members */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {project.members.map((member, index) => (
                <Avatar
                  key={index}
                  className="w-8 h-8 border-2 border-white"
                >
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
              {project.additionalCount && ` and ${project.additionalCount} others`}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Component
export default function UncommonProjectListSection() {
  const featuredProject = projects.find((p) => p.isFeatured) || projects[0];
  const regularProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Most Recent projects</h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {/* Featured Project - Spans 5 columns */}
          <div className="col-span-5">
            <ProjectCard project={featuredProject} variant="featured" />
          </div>

          {/* Regular Projects - Grid of 2 columns */}
          <div className="col-span-7 grid grid-cols-2 gap-6">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2">
                  <div className="p-1">
                    <ProjectCard
                      project={project}
                      variant={project.isFeatured ? "featured" : "default"}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}