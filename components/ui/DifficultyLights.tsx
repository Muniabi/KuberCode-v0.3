import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export type Difficulty = "beginner" | "intermediate" | "advanced";

const STROKE: Record<Difficulty, string> = {
    beginner: "#6eff02",
    intermediate: "#fff100",
    advanced: "#FF0424",
};

/** Сложность: Lucide Flame, только обводка (без заливки). */
export function DifficultyLights({
    difficulty,
    size = "md",
    className,
}: {
    difficulty: Difficulty;
    size?: "sm" | "md" | "lg";
    className?: string;
}) {
    const count =
        difficulty === "beginner" ? 1 : difficulty === "intermediate" ? 2 : 3;
    const color = STROKE[difficulty];
    const dim =
        size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-5 w-5" : "h-4 w-4";

    const label =
        difficulty === "beginner"
            ? "Сложность: начальный"
            : difficulty === "intermediate"
              ? "Сложность: средний"
              : "Сложность: продвинутый";

    return (
        <span
            className={cn("inline-flex items-center gap-0.5", className)}
            title={label}
            aria-label={label}
        >
            {Array.from({ length: count }).map((_, i) => (
                <Flame
                    key={i}
                    className={cn(dim, "fill-none")}
                    style={{ color, stroke: color }}
                    strokeWidth={2}
                    aria-hidden
                />
            ))}
        </span>
    );
}
