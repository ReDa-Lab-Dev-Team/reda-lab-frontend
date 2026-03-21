export type ProjectStatus = "active" | "completed" | "upcoming" | "paused";

export type EventType = "workshop" | "seminar" | "conference" | "meeting";

export type PaperType =
  | "journal"
  | "conference"
  | "workshop"
  | "book_chapter"
  | "thesis"
  | "technical_report"
  | "preprint"
  | "poster";

// --- Category ---
export interface CategoryApi {
  id: number;
  name: string;
  description?: string | null;
}

// --- Team Members ---
export interface TeamMemberApi {
  id: number;
  name: string;
  position?: string | null;
  bio?: string | null;
  email?: string | null;
  is_active: boolean;
  image_url?: string | null;
}

// --- Research Projects ---
export interface ResearchProjectApi {
  id: number;
  title: string;
  slug?: string | null;
  description?: string | null;
  image_url?: string | null;
  is_featured: boolean;
  start_date?: string | null; // datetime → string
  end_date?: string | null;
  status: ProjectStatus;
  funding_source?: string | null;
  budget?: string | null; // Decimal → string
  created_at: string;
  updated_at: string;

  contributors: TeamMemberApi[];
  categories: CategoryApi[];
}

// --- Research Club ---
export interface ResearchClubApi {
  id: number;
  name: string;
  slug?: string | null;
  description?: string | null;
  core_theme?: string | null;
  leaders?: string | null;
  image_url?: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// --- Research Papers ---
export interface ResearchPaperApi {
  id: number;
  title: string;
  slug?: string | null;
  abstract?: string | null;
  authors?: string | null;
  published_date?: string | null;
  paper_type: PaperType;
  pdf_url?: string | null;
  online_url?: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

// --- Events ---
export interface EventApi {
  id: number;
  title: string;
  slug?: string | null;
  description?: string | null;
  image_url?: string | null;
  start_datetime: string;
  end_datetime?: string | null;
  location?: string | null;
  event_type: EventType;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// --- News ---
export interface NewsApi {
  id: number;
  title: string;
  slug?: string | null;
  summary?: string | null;
  content: string;
  image_url?: string | null;
  is_published: boolean;
  published_date: string;
  created_at: string;
  updated_at: string;
}

// --- Advisory Board Members ---
export interface AdvisoryBoardMemberApi {
  id: number;
  name: string;
  position?: string | null;
  institution?: string | null;
  expertise?: string | null;
  bio?: string | null;
  image_url?: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// --- 