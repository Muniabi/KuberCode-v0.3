import { motion } from "framer-motion";
import { CheckCircle2, Circle, Play, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExercisePreview() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-black/40">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Как выглядит упражнение
                    </h2>
                    <p className="text-gray-500 dark:text-white/40 text-lg">
                        Задание + редактор + тесты — всё в одном окне
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-xl dark:shadow-none bg-white dark:bg-[#0c0c0e]"
                >
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-white/40">
                            <BookOpen className="w-4 h-4" />
                            <span>JavaScript · Замыкания</span>
                            <span className="text-gray-300 dark:text-white/10">
                                |
                            </span>
                            <span>Задание 3 из 12</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i < 2 ? "bg-[var(--purple)] dark:bg-[var(--lime)]" : "bg-gray-300 dark:bg-white/30"}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Task description */}
                        <div className="p-7 border-r border-gray-100 dark:border-white/5">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Счётчик вызовов
                            </h3>
                            <p className="text-gray-500 dark:text-white/50 text-sm mb-6 leading-relaxed">
                                Напиши функцию{" "}
                                <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 font-mono text-[var(--purple)] dark:text-[var(--lime)]">
                                    createCounter
                                </code>
                                , которая возвращает функцию-счётчик. Каждый
                                вызов счётчика должен увеличивать внутреннее
                                значение на 1 и возвращать его.
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-white/30">
                                    Пример
                                </div>
                                <pre className="rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 p-4 text-sm font-mono overflow-x-auto">
                                    <code>
                                        <span className="text-blue-500 dark:text-blue-400">
                                            const
                                        </span>
                                        <span className="text-gray-800 dark:text-white">
                                            {" "}
                                            count{" "}
                                        </span>
                                        <span className="text-gray-500 dark:text-white/50">
                                            = createCounter();
                                        </span>
                                        {"\n"}
                                        <span className="text-gray-500 dark:text-white/50">
                                            count();{" "}
                                        </span>
                                        <span className="text-green-500 dark:text-green-400">
                                            // → 1
                                        </span>
                                        {"\n"}
                                        <span className="text-gray-500 dark:text-white/50">
                                            count();{" "}
                                        </span>
                                        <span className="text-green-500 dark:text-green-400">
                                            // → 2
                                        </span>
                                        {"\n"}
                                        <span className="text-gray-500 dark:text-white/50">
                                            count();{" "}
                                        </span>
                                        <span className="text-green-500 dark:text-green-400">
                                            // → 3
                                        </span>
                                    </code>
                                </pre>
                            </div>

                            {/* Test results */}
                            <div className="space-y-2">
                                <div className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-white/30 mb-3">
                                    Тесты
                                </div>
                                {[
                                    {
                                        label: "первый вызов возвращает 1",
                                        passed: true,
                                    },
                                    {
                                        label: "второй вызов возвращает 2",
                                        passed: true,
                                    },
                                    {
                                        label: "независимые счётчики",
                                        passed: false,
                                    },
                                ].map((t) => (
                                    <div
                                        key={t.label}
                                        className="flex items-center gap-3 text-sm"
                                    >
                                        {t.passed ? (
                                            <CheckCircle2 className="w-4 h-4 text-[var(--lime)] shrink-0" />
                                        ) : (
                                            <Circle className="w-4 h-4 text-gray-300 dark:text-white/20 shrink-0" />
                                        )}
                                        <span
                                            className={
                                                t.passed
                                                    ? "text-gray-700 dark:text-white/70"
                                                    : "text-gray-400 dark:text-white/30"
                                            }
                                        >
                                            {t.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Code editor */}
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
                                <span className="text-xs font-mono text-gray-400 dark:text-white/30">
                                    solution.js
                                </span>
                                <Button
                                    size="sm"
                                    className="h-7 px-3 rounded-lg text-xs bg-[var(--purple)] dark:bg-[var(--lime)] dark:text-black text-white hover:opacity-90 gap-1.5"
                                >
                                    <Play className="w-3 h-3" />
                                    Запустить
                                </Button>
                            </div>
                            <pre className="flex-1 p-6 text-sm font-mono leading-relaxed bg-white dark:bg-[#0c0c0e] overflow-x-auto">
                                <code>
                                    <span className="text-blue-500 dark:text-blue-400">
                                        function
                                    </span>
                                    <span className="text-yellow-600 dark:text-yellow-300">
                                        {" "}
                                        createCounter
                                    </span>
                                    <span className="text-gray-700 dark:text-white">
                                        () {"{"}
                                    </span>
                                    {"\n"}
                                    <span className="text-gray-400 dark:text-white/30">
                                        {" "}
                                    </span>
                                    <span className="text-gray-400 dark:text-white/30">
                                        // Твой код здесь
                                    </span>
                                    {"\n"}
                                    <span className="text-blue-500 dark:text-blue-400">
                                        {" "}
                                        let
                                    </span>
                                    <span className="text-gray-700 dark:text-white">
                                        {" "}
                                        count = 0;
                                    </span>
                                    {"\n\n"}
                                    <span className="text-blue-500 dark:text-blue-400">
                                        {" "}
                                        return
                                    </span>
                                    <span className="text-blue-500 dark:text-blue-400">
                                        {" "}
                                        function
                                    </span>
                                    <span className="text-gray-700 dark:text-white">
                                        () {"{"}
                                    </span>
                                    {"\n"}
                                    <span className="text-gray-700 dark:text-white">
                                        {" "}
                                        count
                                    </span>
                                    <span className="text-gray-500 dark:text-white/60">
                                        ++;
                                    </span>
                                    {"\n"}
                                    <span className="text-blue-500 dark:text-blue-400">
                                        {" "}
                                        return
                                    </span>
                                    <span className="text-gray-700 dark:text-white">
                                        {" "}
                                        count;
                                    </span>
                                    {"\n"}
                                    <span className="text-gray-700 dark:text-white">
                                        {" "}
                                        {"}"};
                                    </span>
                                    {"\n"}
                                    <span className="text-gray-700 dark:text-white">
                                        {"}"}
                                    </span>
                                    {"\n\n"}
                                    <span className="text-gray-400 dark:text-white/20">
                                        // ▋
                                    </span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
