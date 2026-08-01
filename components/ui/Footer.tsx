"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";

const LEARN_LINKS = [
    { href: "/tracks", label: "Треки обучения", kind: "route" as const },
    { href: "#", label: "Менторы", kind: "soon" as const },
    {
        href: "/#how-it-works",
        label: "Как это работает",
        kind: "anchor" as const,
    },
];

const PLATFORM_LINKS = [
    { href: "#", label: "Частые вопросы", kind: "soon" as const },
    { href: "#", label: "Условия использования", kind: "soon" as const },
    { href: "#", label: "Конфиденциальность", kind: "soon" as const },
    { href: "#", label: "Обратная связь", kind: "soon" as const },
];

export function Footer() {
    const handleSoonClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
    ) => {
        event.preventDefault();
    };

    const renderLink = (link: {
        href: string;
        label: string;
        kind: "anchor" | "soon" | "route";
    }) => {
        const className =
            "text-sm text-gray-600 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors";

        if (link.kind === "soon") {
            return (
                <a
                    href="#"
                    title="Скоро"
                    aria-disabled="true"
                    onClick={handleSoonClick}
                    className={className}
                >
                    {link.label}
                </a>
            );
        }

        if (link.kind === "route") {
            return (
                <Link href={link.href} className={className}>
                    {link.label}
                </Link>
            );
        }

        return (
            <a href={link.href} className={className}>
                {link.label}
            </a>
        );
    };

    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-100 dark:border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
                    <div className="sm:col-span-1">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <Logo
                                className="gap-2"
                                iconClassName="w-6 h-6"
                            />
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed max-w-xs mb-5">
                            Платформа практического обучения программированию.
                            Учись через решение реальных задач.
                        </p>
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

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/30 mb-4">
                            Обучение
                        </h3>
                        <ul className="space-y-2.5">
                            {LEARN_LINKS.map((link) => (
                                <li key={link.label}>{renderLink(link)}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/30 mb-4">
                            Платформа
                        </h3>
                        <ul className="space-y-2.5">
                            {PLATFORM_LINKS.map((link) => (
                                <li key={link.label}>{renderLink(link)}</li>
                            ))}
                        </ul>
                    </div>
                </div>

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
