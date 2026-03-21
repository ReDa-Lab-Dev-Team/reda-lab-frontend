const API_BASE = import.meta.env.VITE_API_URL as string | undefined;

export default async function apiFetch<T>(
  endpoint: string,
  fallback: T,
): Promise<T> {
  if (!API_BASE) {
    // No API configured → use static data directly (instant, no latency)
    return fallback;
  }

  try {
    const res = await fetch(`${API_BASE}${endpoint}`);

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
