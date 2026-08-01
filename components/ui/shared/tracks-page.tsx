"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useEffect, useState } from "react";
import type { Track } from "@/data/tracks";
import { DifficultyLights } from "@/components/ui/DifficultyLights";
import { APP_URL } from "@/lib/app-url";
import { fetchTracks } from "@/lib/tracks-api";

export function TracksPageContent() {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        void fetchTracks().then(setTracks);
    }, []);

    return (
        <section className="py-16 sm:py-24 min-h-[70vh]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="mb-12 max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--purple)]/10 text-[var(--purple)] dark:text-[var(--lime)] dark:bg-[var(--lime)]/10 text-xs font-medium mb-3 border border-[var(--purple)]/20 dark:border-[var(--lime)]/20">
                        <Layers className="w-3 h-3" />
                        Все направления
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Выбери своё направление
                    </h1>
                    <p className="text-gray-500 dark:text-white/40 mt-3 text-lg">
                        Те же треки, что на главной — только крупнее. Огоньки
                        Flame (только обводка) показывают сложность.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                    {tracks.map((track, i) => (
                        <motion.a
                            key={track.id}
                            href={`${APP_URL}/register`}
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.04 }}
                            className={`group relative block rounded-3xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/[0.03] ${track.border} p-7 sm:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--purple)]/5 dark:hover:shadow-[var(--lime)]/5`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
                            />
                            <div className="relative z-10 flex flex-col h-full min-h-[200px]">
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-black/30 border border-gray-100 dark:border-white/10 flex items-center justify-center p-2.5 shadow-sm">
                                        <img
                                            src={track.icon}
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <DifficultyLights
                                        difficulty={track.difficulty}
                                        size="lg"
                                    />
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {track.title}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-white/45 leading-relaxed flex-1 mb-6">
                                    {track.description}
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-400 dark:text-white/35">
                                    <span>
                                        {track.exerciseCount} упражнений
                                    </span>
                                    <span className="font-medium text-[var(--purple)] dark:text-[var(--lime)] opacity-0 group-hover:opacity-100 transition-opacity">
                                        Начать →
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
