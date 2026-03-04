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
  id: string;
  title: string;
  description: string;
  coreTheme: string;
  leaders: string[];
  imageUrl?: string;
}

// ── Projects ─────────────────────────────────────────────────────────────────
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  coreTheme: string;
  leaders: string[];
  imageUrl?: string;
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
  items: string[];
}
