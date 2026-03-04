/**
 * dataService.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Single data-access layer for the entire frontend.
 *
 * Behaviour
 * ─────────
 * • Development  – VITE_API_URL is not set → static data files are returned as
 *                  resolved Promises (zero extra latency, no network needed).
 * • Production   – VITE_API_URL is set → real HTTP API is called; static data
 *                  are used only as fallback if the request fails.
 *
 * Usage in components
 * ───────────────────
 *   const { data: events } = useQuery({ queryKey: ["events"], queryFn: fetchEvents });
 *   // or with the built-in hook helpers below.
 */

import type {
  ValueData,
  ResearchUnitData,
  ProjectData,
  TrainingData,
  EventData,
  ResearcherData,
  PartnerData,
  AboutSlideData,
  PillarData,
} from "@/types";

// ── Static data imports (used in dev or as fallback) ─────────────────────────
import staticValues from "@/data/values";
import staticResearchUnits from "@/data/researchUnits";
import staticProjects from "@/data/projects";
import staticTrainings from "@/data/trainings";
import staticEvents from "@/data/events";
import staticResearchers from "@/data/researchers";
import staticPartners from "@/data/partners";
import {
  aboutSlides as staticSlides,
  pillars as staticPillars,
} from "@/data/about";

// ── Environment ───────────────────────────────────────────────────────────────
const API_BASE = import.meta.env.VITE_API_URL as string | undefined;

// ── Generic fetch helper ──────────────────────────────────────────────────────
/**
 * Tries to GET `${API_BASE}${endpoint}`.
 * Falls back to `fallback` data if the API is unavailable or not configured.
 */
async function apiFetch<T>(endpoint: string, fallback: T): Promise<T> {
  if (!API_BASE) {
    // No API configured → use static data directly (instant, no latency)
    return fallback;
  }

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      console.warn(
        `[dataService] ${endpoint} -> HTTP ${res.status}. Falling back to static data.`,
      );
      return fallback;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.warn(
      `[dataService] ${endpoint} -> fetch failed. Falling back to static data.`,
      err,
    );
    return fallback;
  }
}

// ── Public API ────────────────────────────────────────────────────────────────

/** Core values shown in the home hero section. */
export const fetchValues = (): Promise<ValueData[]> =>
  apiFetch("/api/v1/values", staticValues);

/** Research unit cards. */
export const fetchResearchUnits = (): Promise<ResearchUnitData[]> =>
  apiFetch("/api/v1/research-units", staticResearchUnits);

/** Featured projects. */
export const fetchProjects = (): Promise<ProjectData[]> =>
  apiFetch("/api/v1/projects", staticProjects);

/** Training / short-course catalogue. */
export const fetchTrainings = (): Promise<TrainingData[]> =>
  apiFetch("/api/v1/trainings", staticTrainings);

/** Upcoming & past events. */
export const fetchEvents = (): Promise<EventData[]> =>
  apiFetch("/api/v1/events", staticEvents);

/** Team / researcher profiles. */
export const fetchResearchers = (): Promise<ResearcherData[]> =>
  apiFetch("/api/v1/researchers", staticResearchers);

/** Partner / sponsor logos. */
export const fetchPartners = (): Promise<PartnerData[]> =>
  apiFetch("/api/v1/partners", staticPartners);

/** About-page carousel slides. */
export const fetchAboutSlides = (): Promise<AboutSlideData[]> =>
  apiFetch("/api/v1/about/slides", staticSlides);

/** Mission / Vision / Values pillars. */
export const fetchPillars = (): Promise<PillarData[]> =>
  apiFetch("/api/v1/about/pillars", staticPillars);
