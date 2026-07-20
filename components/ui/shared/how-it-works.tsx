import { motion } from "framer-motion";
import { BookOpen, Code2, TrendingUp } from "lucide-react";

const STEPS = [
    {
        icon: BookOpen,
        step: "01",
        title: "Теория",
        description:
            "Короткий концептуальный блок — только самое необходимое. Без воды, без лишних видео.",
        color: "text-[var(--purple)]",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
    },
    {
        icon: Code2,
        step: "02",
        title: "Практика",
        description:
            "Пишешь реальный код прямо в браузере. Задания основаны на типичных задачах из работы разработчика.",
        color: "text-[var(--lime)]",
        bg: "bg-lime-400/10",
        border: "border-lime-400/20",
    },
    {
        icon: TrendingUp,
        step: "03",
        title: "Прогресс",
        description:
            "Мгновенный фидбек по тестам, разбор ошибок и наглядный трекер продвижения по треку.",
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        border: "border-orange-400/20",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-black/40">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Как это работает
                    </h2>
                    <p className="text-gray-500 dark:text-white/40 text-lg max-w-lg mx-auto">
                        Простая система, которая действительно помогает
                        усваивать новые навыки
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div
                                className={`relative h-full rounded-3xl border ${step.border} ${step.bg} p-8 dark:bg-white/[0.02] dark:border-white/5 bg-white border-gray-100`}
                            >
                                {/* Step number */}
                                <div className="absolute top-6 right-6 text-5xl font-black text-gray-100 dark:text-white/50  select-none">
                                    {step.step}
                                </div>

                                <div
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${step.bg} border ${step.border}`}
                                >
                                    <step.icon
                                        className={`w-6 h-6 ${step.color}`}
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 dark:text-white/50 leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Connector arrow (only for first two) */}
                                {i < 2 && (
                                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-white dark:bg-[#101011] border border-gray-100 dark:border-white/10 text-gray-400 dark:text-white/30 text-sm">
                                        →
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
