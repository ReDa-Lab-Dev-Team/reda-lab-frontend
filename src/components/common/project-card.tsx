// import { Image } from "../ui/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import type { ProjectData } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import CustomBadge from "../ui/custom-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

// export function ProjectCard() {
//   return (
//     <Card className="w-full max-w-4xl rounded-2xl border shadow-sm">
//       <CardContent className="flex gap-6 p-6">
//         {/* Left Image Section */}
//         <div className="w-64 h-40 relative rounded-xl overflow-hidden bg-muted">
//           <Image
//             src="/project-image.png"
//             alt="Khmer Text Summarization"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Right Content Section */}
//         <div className="flex flex-col justify-between flex-1">
//           {/* Top Content */}
//           <div>
//             <h2 className="text-xl font-semibold">Khmer Text Summarization</h2>

//             <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
//               Develops a Large Language Model (LLM) approach to condense Khmer
//               documents into clear, concise summaries, making information more
//               accessible for research, education, and the public.
//             </p>

//             {/* Badges */}
//             <div className="flex gap-2 mt-3">
//               <Badge variant="secondary">CV Club</Badge>
//               <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">
//                 On going
//               </Badge>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="flex items-center gap-3 mt-4">
//             {/* Avatar Group */}
//             <div className="flex -space-x-2">
//               <Avatar className="border-2 border-background w-8 h-8">
//                 <AvatarImage src="/user1.jpg" />
//                 <AvatarFallback>VN</AvatarFallback>
//               </Avatar>

//               <Avatar className="border-2 border-background w-8 h-8">
//                 <AvatarImage src="/user2.jpg" />
//                 <AvatarFallback>TN</AvatarFallback>
//               </Avatar>

//               <div className="w-8 h-8 flex items-center justify-center text-xs bg-muted rounded-full border-2 border-background">
//                 +6
//               </div>
//             </div>

//             <p className="text-xs text-muted-foreground">
//               N. Vanna, N. Tina and 6 others
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

const ProjectCard = ({ project }: { project: ProjectData }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image / Header Area */}
      <div
        className={`relative h-40 w-full ${project.imageColor} flex items-center justify-center overflow-hidden`}
      >
        {/* Simulating Image Content */}
        {project.isFeatured ? (
          <div className="text-center p-4">
            <div className="flex justify-between items-start mb-4">
              <span className="font-bold text-xs tracking-wider bg-white/50 px-2 py-1 rounded">
                {project.logo}
              </span>
              <ArrowUpRight className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h3>
          </div>
        ) : (
          <div
            className="w-full h-full opacity-80 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://placehold.co/600x400/2dd4bf/ffffff?text=${project.title.split(" ")[0]}')`,
            }}
          ></div>
        )}

        {/* Overlay Gradient for non-featured cards to make text readable if we put text there, 
            but here titles are below. Keeping it simple. */}
      </div>

      <CardHeader className="pb-2">
        {!project.isFeatured && (
          <>
            <CardTitle className="text-lg font-bold text-gray-900">
              {project.title}
            </CardTitle>
            {project.description && (
              <CardDescription className="text-gray-600 line-clamp-3 mt-2">
                {project.description}
              </CardDescription>
            )}
          </>
        )}
        {project.isFeatured && (
          <CardDescription className="text-gray-700 font-medium mt-2">
            {project.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-grow pt-0">
        {/* Tags Container */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, idx) => (
            <CustomBadge key={idx} {...tag} />
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t border-gray-100 mt-auto bg-gray-50/50">
        {project.authors.length > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              {project.authors.slice(0, 3).map((author, i) => (
                <Avatar key={i} className="border-2 border-white w-8 h-8">
                  <AvatarImage src={author.avatarUrl} alt={author.name} />
                  <AvatarFallback className="text-xs bg-indigo-100 text-indigo-700 font-semibold">
                    {author.initials}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium ml-1">
              {project.authors.map((a) => a.name).join(", ")}
              {project.authors.some((a) => a.initials.includes("+")) &&
                " and others"}
            </span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
