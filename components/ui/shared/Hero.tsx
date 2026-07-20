import { motion } from "framer-motion";
// import { useLocation } from "wouter";
import { ArrowRight, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { STATS } from "@/data/tracks";
// import { useAuthGate } from "@/hooks/useAuthGate";

export function HeroNew() {
    // const [, navigate] = useLocation();
    // const isAuth = useAuthGate();

    const handleStartLearning = () => {
        // navigate(isAuth ? "/account" : "/login");
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[color:var(--bg-color-light)] dark:bg-[color:var(--bg-color-dark)]">
            {/* Background grid */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(137,72,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(137,72,255,0.5) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:var(--purple)/0.1] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[color:var(--lime)/0.05] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--purple)/0.3] bg-[color:var(--purple)/0.1] text-[color:var(--purple)] dark:text-[color:var(--lime)] text-sm font-medium mb-8">
                        <Zap className="w-3.5 h-3.5" />
                        Учись через практику
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white mb-6">
                        Становись
                        <br />
                        <span className="text-[color:var(--purple)] dark:text-[color:var(--lime)]">
                            разработчиком
                        </span>
                        <br />
                        на практике
                    </h1>

                    <p className="text-lg text-gray-500 dark:text-white/50 max-w-xl leading-relaxed mb-10">
                        Упражнения по JavaScript, TypeScript, Go, Python и
                        другим языкам. Пиши код, получай мгновенный фидбек,
                        отслеживай прогресс.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        <Button
                            size="lg"
                            onClick={handleStartLearning}
                            className="h-14 px-8 rounded-2xl bg-[color:var(--purple)] hover:bg-[color:var(--purple)/0.9] dark:bg-[color:var(--lime)] dark:hover:bg-white dark:text-black dark:hover:text-black  text-white text-base font-semibold gap-2 transition-all duration-400 hover:-translate-y-1"
                        >
                            Начать обучение
                            {/* {isAuth ? "Перейти в кабинет" : "Начать обучение"} */}
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                        <button
                            // onClick={() => navigate("/tracks")}
                            className="h-14 px-8 rounded-2xl border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/5 text-base gap-2 flex items-center  transition-all duration-400 hover:-translate-y-1"
                        >
                            <Code2 className="w-4 h-4" />
                            Смотреть треки
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-100 dark:border-white/5">
                        {/* {STATS.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 dark:text-white/40 mt-0.5">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))} */}
                    </div>
                </motion.div>

                {/* Floating code preview */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="absolute right-4 top-2/3 -translate-y-1/2 hidden xl:block w-[420px]"
                >
                    <div className="rounded-2xl border border-white/5 bg-white/3 dark:bg-white/[0.03] backdrop-blur-sm overflow-hidden shadow-2xl">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-3 text-xs text-white/30 font-mono">
                                main.go
                            </span>
                        </div>
                        <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
                            <code>
                                <span className="text-blue-400">package</span>
                                <span className="text-white"> main</span>
                                {"\n"}
                                <span className="text-blue-400">import</span>
                                <span className="text-white"> (</span>
                                {"\n"}
                                <span className="text-orange-300"> "fmt"</span>
                                {"\n"}
                                <span className="text-white">)</span>
                                {"\n\n"}
                                <span className="text-green-400">
                                    // Упражнение: сумма Фибоначчи
                                </span>
                                {"\n"}
                                <span className="text-blue-400">func</span>
                                <span className="text-yellow-300">
                                    {" "}
                                    fibonacci
                                </span>
                                <span className="text-white">(n </span>
                                <span className="text-blue-300">int</span>
                                <span className="text-white">) </span>
                                <span className="text-blue-300">int</span>
                                <span className="text-white"> {"{"}</span>
                                {"\n"}
                                <span className="text-white"> </span>
                                <span className="text-blue-400">if</span>
                                <span className="text-white">
                                    {" "}
                                    n {"<="} 1 {"{"}
                                </span>
                                {"\n"}
                                <span className="text-white"> </span>
                                <span className="text-blue-400">return</span>
                                <span className="text-white"> n</span>
                                {"\n"}
                                <span className="text-white"> {"}"}</span>
                                {"\n"}
                                <span className="text-white"> </span>
                                <span className="text-blue-400">return</span>
                                <span className="text-white">
                                    {" "}
                                    fibonacci(n-1) + fibonacci(n-2)
                                </span>
                                {"\n"}
                                <span className="text-white">{"}"}</span>
                                {"\n\n"}
                                <span className="text-[#ceff1a]">
                                    ✓ Тест 1 прошёл
                                </span>
                                {"\n"}
                                <span className="text-[#ceff1a]">
                                    ✓ Тест 2 прошёл
                                </span>
                                {"\n"}
                                <span className="text-white/30">
                                    {" "}
                                    Тест 3...
                                </span>
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
