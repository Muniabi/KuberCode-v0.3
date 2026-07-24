import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/tracks";

export function SocialProof() {
    return (
        <section className="py-24 bg-white dark:bg-[var(--bg-color-dark)]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Что говорят ученики
                    </h2>
                    <p className="text-gray-500 dark:text-white/40">
                        Реальные отзывы людей, которые уже прошли путь от
                        новичка до специалиста
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <div className="h-full rounded-3xl border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] p-7 flex flex-col">
                                {/* Stars */}
                                <div className="flex gap-1 mb-5">
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <Star
                                            key={s}
                                            className="w-4 h-4 fill-[var(--purple)] text-[var(--purple)] dark:fill-[var(--lime)] dark:text-[var(--lime)]"
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed flex-1 mb-6">
                                    "{t.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[var(--purple)]/20 dark:bg-[var(--lime)]/10 flex items-center justify-center text-xs font-bold text-[var(--purple)] dark:text-[var(--lime)]">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                            {t.name}
                                        </div>
                                        <div className="text-xs text-gray-400 dark:text-white/30">
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
