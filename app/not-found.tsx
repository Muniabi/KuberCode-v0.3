"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-md"
            >
                {/* Number */}
                <div className="relative inline-block mb-6">
                    <div className="text-[240px] sm:text-[180px] font-black leading-none text-gray-100 dark:text-white/30 select-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--purple)]/10 dark:bg-[var(--lime)]/10 flex items-center justify-center">
                            <Search className="w-7 h-7 text-[var(--purple)] dark:text-[var(--lime)] animate-search-pulse" />
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Страница не найдена
                </h1>
                <p className="text-gray-500 dark:text-white/40 mb-8 leading-relaxed">
                    Страница, которую вы ищете, не существует или была
                    перемещена. Проверьте адрес или вернитесь на главную.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/">
                        <Button className="w-full sm:w-auto rounded-xl bg-[var(--purple)] dark:bg-[var(--lime)] text-white dark:text-black hover:opacity-90 gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            На главную
                        </Button>
                    </Link>
                    <Link href="/tracks">
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto rounded-xl border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5"
                        >
                            Смотреть треки
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
