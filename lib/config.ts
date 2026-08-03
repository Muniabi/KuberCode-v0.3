export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

/** Server-side fetch inside Docker (http://api:4000). Falls back to public API URL. */
export const INTERNAL_API_URL =
  process.env.INTERNAL_API_URL ?? API_URL;
