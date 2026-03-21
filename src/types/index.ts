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

export interface ProjectCategoryData {
  id?: number;
  name: string;
  description?: string | null;
}

export interface ProjectContributorData {
  id?: number;
  name: string;
  image_url?: string | null;
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
export type EventKind = "Bootcamp" | "Workshop" | "Conference" | "Seminar";

export interface EventType {
  id: string;
  title: string;
  type: EventKind;
  date: string;
  attendees: number;
  imageUrl: string;
}
export type EventData = EventType;
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