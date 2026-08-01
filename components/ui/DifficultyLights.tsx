export type Difficulty = "beginner" | "intermediate" | "advanced";

/** Светофор сложности: 1 зелёный / 2 оранжевых / 3 красных — без текста. */
export function DifficultyLights({
  difficulty,
  size = "md",
}: {
  difficulty: Difficulty;
  size?: "sm" | "md" | "lg";
}) {
  const count =
    difficulty === "beginner" ? 1 : difficulty === "intermediate" ? 2 : 3;
  const color =
    difficulty === "beginner"
      ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
      : difficulty === "intermediate"
        ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)]"
        : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]";

  const dim =
    size === "sm" ? "h-2 w-2" : size === "lg" ? "h-3.5 w-3.5" : "h-2.5 w-2.5";

  const label =
    difficulty === "beginner"
      ? "Сложность: начальный"
      : difficulty === "intermediate"
        ? "Сложность: средний"
        : "Сложность: продвинутый";

  return (
    <span
      className="inline-flex items-center gap-1"
      title={label}
      aria-label={label}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`${dim} rounded-full ${color}`}
          aria-hidden
        />
      ))}
    </span>
  );
}
