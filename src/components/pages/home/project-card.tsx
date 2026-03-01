import { Image } from "@/components/ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type ProjectCardProps = {
  title: string;
  description: string;
  coreTheme: string;
  leaders: string[];
  imageUrl?: string;
};

function ProjectCard({
  title,
  description,
  coreTheme,
  leaders,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-4xl rounded-2xl border shadow-sm">
      <CardContent className="flex gap-6 p-6">
        {/* Left Image Section */}
        <div className="w-64 h-40 relative rounded-xl overflow-hidden bg-muted">
          <Image
            src={imageUrl || "/project-image.png"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-between flex-1">
          {/* Top Content */}
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>

            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {description}
            </p>

            {/* Badges */}
            <div className="flex gap-2 mt-3">
              <Badge variant="secondary">{coreTheme}</Badge>
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">
                On going
              </Badge>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center gap-3 mt-4">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
              {leaders.map((leader, idx) => (
                <Avatar
                  key={idx}
                  className="border-2 border-background w-8 h-8"
                >
                  <AvatarImage src={`/user${idx + 1}.jpg`} />
                  <AvatarFallback>{leader.substring(0, 2)}</AvatarFallback>
                </Avatar>
              ))}
              <div className="w-8 h-8 flex items-center justify-center text-xs bg-muted rounded-full border-2 border-background">
                +{leaders.length - 2}
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              {leaders[0]}, {leaders[1]} and 6 others
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { ProjectCard, type ProjectCardProps };
