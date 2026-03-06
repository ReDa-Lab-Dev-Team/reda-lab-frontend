import { Image } from "../ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function ProjectCard() {
  return (
    <Card className="w-full max-w-4xl rounded-2xl border shadow-sm">
      <CardContent className="flex gap-6 p-6">
        {/* Left Image Section */}
        <div className="w-64 h-40 relative rounded-xl overflow-hidden bg-muted">
          <Image
            src="/project-image.png"
            alt="Khmer Text Summarization"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-between flex-1">
          {/* Top Content */}
          <div>
            <h2 className="text-xl font-semibold">Khmer Text Summarization</h2>

            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Develops a Large Language Model (LLM) approach to condense Khmer
              documents into clear, concise summaries, making information more
              accessible for research, education, and the public.
            </p>

            {/* Badges */}
            <div className="flex gap-2 mt-3">
              <Badge variant="secondary">CV Club</Badge>
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">
                On going
              </Badge>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center gap-3 mt-4">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-background w-8 h-8">
                <AvatarImage src="/user1.jpg" />
                <AvatarFallback>VN</AvatarFallback>
              </Avatar>

              <Avatar className="border-2 border-background w-8 h-8">
                <AvatarImage src="/user2.jpg" />
                <AvatarFallback>TN</AvatarFallback>
              </Avatar>

              <div className="w-8 h-8 flex items-center justify-center text-xs bg-muted rounded-full border-2 border-background">
                +6
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              N. Vanna, N. Tina and 6 others
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
