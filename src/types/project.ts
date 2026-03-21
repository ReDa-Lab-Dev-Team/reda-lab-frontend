export interface Project {
  id: number;
  title: string;
  description?: string;
  image: string;
  tags: string[];
  status: "On going" | "Done" | "On hold";
  members: Array<{
    name: string;
    avatar?: string;
  }>;
  additionalCount?: number;
  isFeatured?: boolean;
}
