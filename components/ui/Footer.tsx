import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

const LEARN_LINKS = [
    { href: "/tracks", label: "Треки обучения" },
    { href: "/mentors", label: "Менторы" },
    { href: "/tracks#faq", label: "Как это работает" },
];

const PLATFORM_LINKS = [
    { href: "/faq", label: "Частые вопросы" },
    { href: "/terms", label: "Условия использования" },
    { href: "/privacy", label: "Конфиденциальность" },
    { href: "/contact", label: "Обратная связь" },
];

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-100 dark:border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-1">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <div className="w-6 h-6">
                                <svg
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full text-[--purple]"
                                >
                                    <rect
                                        x="4"
                                        y="2"
                                        width="6"
                                        height="28"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="10"
                                        y="12"
                                        width="6"
                                        height="6"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="15"
                                        y="7"
                                        width="6"
                                        height="6"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="20"
                                        y="2"
                                        width="6"
                                        height="6"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="10"
                                        y="14"
                                        width="6"
                                        height="6"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="15"
                                        y="19"
                                        width="6"
                                        height="6"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="20"
                                        y="24"
                                        width="6"
                                        height="6"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-white font-neopixel">
                                KuberCode
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed max-w-xs mb-5">
                            Платформа практического обучения программированию.
                            Учись через выполнение реальных задач.
                        </p>
                        {/* Social */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/Muniabi/KuberCode-v0.3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg flex items-center justify-center border hover:bg-gray-200 dark:bg-[var(--bg-color-light)] dark:hover:bg-[var(--bg-color-light)]/80 border-gray-200 dark:border-white/10 text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition-all"
                                aria-label="GitHub"
                            >
                                <Image
                                    src="https://thesvg.org/icons/github/default.svg"
                                    alt="GitHub"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a
                                href="https://t.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg flex items-center justify-center border hover:bg-gray-200 dark:bg-[var(--bg-color-light)] dark:hover:bg-[var(--bg-color-light)]/80 border-gray-200 dark:border-white/10 text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition-all"
                                aria-label="Telegram"
                            >
                                <Image
                                    src="https://thesvg.org/icons/telegram/mono.svg"
                                    alt="Telegram"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Learning */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/30 mb-4">
                            Обучение
                        </h3>
                        <ul className="space-y-2.5">
                            {LEARN_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/30 mb-4">
                            Платформа
                        </h3>
                        <ul className="space-y-2.5">
                            {PLATFORM_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-m text-gray-400 dark:text-white/25">
                        © {new Date().getFullYear()} KuberCode. Все права
                        защищены.
                    </p>
                    <p className="text-m text-gray-400 dark:text-white/25">
                        info@kubercode.ru
                    </p>
                </div>
            </div>
        </footer>
    );
}
