import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { TRACKS } from "@/data/tracks";

const DIFFICULTY_LABEL: Record<string, string> = {
    beginner: "Начальный",
    intermediate: "Средний",
    advanced: "Продвинутый",
};

const DIFFICULTY_COLOR: Record<string, string> = {
    beginner: "text-green-400 bg-green-400/10 border-green-400/20",
    intermediate: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    advanced: "text-red-400 bg-red-400/10 border-red-400/20",
};

export function TracksPreview() {
    return (
        <section className="py-24 dark:bg-[color:var(--bg-color-dark)]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--purple)/0.1] text-[color:var(--purple)] dark:text-[color:var(--lime)] dark:bg-[color:var(--lime)/0.1] text-xs font-medium mb-3 border border-[color:var(--purple)/0.2] dark:border-[color:var(--lime)/0.2]">
                            <Layers className="w-3 h-3" />
                            Треки обучения
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                            Выбери своё направление
                        </h2>
                        <p className="text-gray-500 dark:text-white/40 mt-2">
                            Структурированные пути от основ до продвинутых тем
                        </p>
                    </div>
                    <Link
                        href="/tracks"
                        className="flex items-center gap-2 text-[color:var(--purple)] dark:text-[color:var(--lime)] font-medium hover:gap-3 transition-all text-sm shrink-0"
                    >
                        Все треки
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {TRACKS.map((track, i) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <Link href={`/tracks/${track.slug}`}>
                                <div className="group relative h-full rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:border-[color:var(--purple)/0.3] dark:hover:border-[color:var(--lime)/0.2] hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all duration-200 p-5 cursor-pointer overflow-hidden">
                                    {/* Gradient overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-10 h-10 mb-4">
                                            <img
                                                src={track.icon}
                                                alt={track.title}
                                                className="w-10 h-10 object-contain"
                                                onError={(e) => {
                                                    (
                                                        e.target as HTMLImageElement
                                                    ).style.display = "none";
                                                }}
                                            />
                                        </div>

                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                                            {track.title}
                                        </h3>

                                        <p className="text-xs text-gray-500 dark:text-white/40 leading-relaxed mb-4 line-clamp-2">
                                            {track.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-400 dark:text-white/30">
                                                {track.exerciseCount} упражнений
                                            </span>
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-full border ${DIFFICULTY_COLOR[track.difficulty]}`}
                                            >
                                                {
                                                    DIFFICULTY_LABEL[
                                                        track.difficulty
                                                    ]
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
