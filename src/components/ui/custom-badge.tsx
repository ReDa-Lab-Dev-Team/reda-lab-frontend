import { Badge } from "lucide-react";

interface ProjectTag {
  label: string;
  variant?: "default" | "secondary" | "outline" | "destructive" | "success";
}

export default function CustomBadge({ label, variant }: ProjectTag) {
  // Mapping variants to approximate colors from image
  let className = "";
  if (variant === "success") {
    className =
      "bg-green-100 text-green-800 hover:bg-green-100 border-green-200";
  } else if (label === "On going") {
    className =
      "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200";
  } else if (variant === "secondary") {
    className = "bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-200";
  }

  return <Badge className={`${className} font-medium border`}>{label}</Badge>;
}
