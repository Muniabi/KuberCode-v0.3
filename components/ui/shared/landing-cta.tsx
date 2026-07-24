import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useAuthGate } from "@/hooks/useAuthGate";

export function LandingCTA() {
    // const [, navigate] = useLocation();
    // const isAuth = useAuthGate();

    return (
        <section className="py-24 bg-gray-50 dark:bg-black/40">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Glow */}
                    <div className="relative inline-block mb-8">
                        <div className="absolute inset-0 bg-[var(--purple)]/20 dark:bg-[var(--lime)]/10 rounded-full blur-3xl scale-150" />
                        <div className="relative w-16 h-16 rounded-2xl bg-[var(--purple)] dark:bg-[var(--lime)] flex items-center justify-center mx-auto">
                            <Sparkles className="w-7 h-7 text-white dark:text-black" />
                        </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Начни учиться
                        <br />
                        <span className="text-[var(--purple)] dark:text-[var(--lime)]">
                            прямо сейчас
                        </span>
                    </h2>

                    <p className="text-gray-500 dark:text-white/40 text-lg mb-10 max-w-lg mx-auto">
                        Выбери трек, выполни первое упражнение и убедись, что
                        практика — лучший способ обучения.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            // onClick={() =>
                            //     navigate(isAuth ? "/account" : "/login")
                            // }
                            className="h-14 px-10 rounded-2xl bg-[var(--purple)] hover:bg-[var(--purple)]/90 dark:bg-[var(--lime)] dark:text-black dark:hover:bg-[var(--lime)]/90 text-white text-base font-semibold gap-2 w-full sm:w-auto"
                        >
                            {/* {isAuth
                                ? "Продолжить обучение"
                                : "Начать бесплатно"} */}
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            // onClick={() => navigate("/tracks")}
                            className="h-14 px-10 rounded-2xl border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 text-base w-full sm:w-auto"
                        >
                            Смотреть все треки
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
