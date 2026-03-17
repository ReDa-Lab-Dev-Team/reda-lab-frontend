// ---------------------------------------------------------------------------
// Shared domain types — serialisable (no JSX / React-node)
// These mirror the shapes a REST API would return.
// ---------------------------------------------------------------------------

// ── Values ──────────────────────────────────────────────────────────────────
export type ValueIconName = "Search" | "Lightbulb" | "Users" | "Target";

export interface ValueData {
  id: string;
  iconName: ValueIconName;
  title: string;
  desc: string;
}

// ── Research Units ───────────────────────────────────────────────────────────
export interface ResearchUnitData {
  id: number;
  title: string;
  description: string;
  coreTheme: string;
  leaders: string[];
  imageUrl?: string;
}

// ── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  id: number;
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

// ── Training services ────────────────────────────────────────────────────────
export interface TrainingData {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  lecturer: string;
}

// ── Events ───────────────────────────────────────────────────────────────────
export type EventType = "Bootcamp" | "Workshop" | "Conference" | "Seminar";

export interface EventData {
  id: string;
  title: string;
  type: EventType;
  date: string;
  attendees: number;
  imageUrl: string;
}

// ── Researchers ───────────────────────────────────────────────────────────────
export interface ResearcherData {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
}

// ── Partners ──────────────────────────────────────────────────────────────────
export interface PartnerData {
  id: string;
  name: string;
  logoUrl: string;
}

// ── About page ────────────────────────────────────────────────────────────────
export interface AboutSlideData {
  id: number;
  src: string;
  alt: string;
  backgroundColor?: string;
}

export type PillarIconName = "Goal" | "Eye" | "HeartPlus";

export interface PillarData {
  id: string;
  iconName: PillarIconName;
  title: string;
  textBullets: string[];
}

// ── Project page ────────────────────────────────────────────────────────────────
export interface Author {
  name: string;
  initials: string;
  avatarUrl?: string;
}

export interface ProjectTag {
  label: string;
  variant?: "default" | "secondary" | "outline" | "destructive" | "success"; // Added custom success variant logic below
}

export interface ProjectData {
  id: number;
  title: string;
  description?: string;
  imageColor?: string; // Simulating images with colored backgrounds for demo
  imageUrl?: string;
  tags: ProjectTag[];
  authors: Author[];
  isFeatured?: boolean;
  logo?: string;
}
