import { TRACKS, type Track } from "@/data/tracks";
import { INTERNAL_API_URL } from "@/lib/config";

type ApiTrack = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  border: string;
  difficulty: Track["difficulty"];
  tags?: string[];
  hoursLabel: string;
  modulesCount?: number;
  exerciseCount?: number;
};

function mapTrack(t: ApiTrack): Track {
  return {
    id: t.id || t.slug,
    slug: t.slug,
    title: t.title,
    description: t.description,
    icon: t.icon,
    color: t.color,
    border: t.border,
    difficulty: t.difficulty,
    tags: t.tags ?? [],
    hoursLabel: t.hoursLabel,
    exerciseCount: t.exerciseCount ?? 0,
    modules: t.modulesCount ?? 0,
  };
}

export async function fetchTracks(): Promise<Track[]> {
  try {
    const res = await fetch(`${INTERNAL_API_URL}/v1/tracks`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) throw new Error("failed");
    const data = (await res.json()) as { items: ApiTrack[] };
    const items = (data.items ?? []).map(mapTrack);
    return items.length > 0 ? items : TRACKS;
  } catch {
    if (process.env.NODE_ENV === "development") return TRACKS;
    return [];
  }
}
