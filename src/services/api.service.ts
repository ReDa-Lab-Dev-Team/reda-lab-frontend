const API_BASE = import.meta.env.VITE_API_URL as string | undefined;

export default async function apiFetch<T>(
  endpoint: string,
  fallback: T,
): Promise<T> {
  if (!API_BASE) {
    // No API configured → use static data directly (instant, no latency)
    return fallback;
  }

  // Normalize base and endpoint to avoid double slashes
  const baseUrl = API_BASE.replace(/\/$/, "");
  const cleanEndpoint = endpoint.replace(/^\//, "");
  const url = `${baseUrl}/${cleanEndpoint}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.warn(
        `[apiService] ${endpoint} -> HTTP ${res.status}. Falling back to static data.`,
      );
      return fallback;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.warn(
      `[apiService] ${endpoint} -> fetch failed. Falling back to static data.`,
      err,
    );
    return fallback;
  }
}
