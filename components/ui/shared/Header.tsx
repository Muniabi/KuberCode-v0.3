"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
// import { Container, AccountButton } from "./index";
// import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, Code2 } from "lucide-react";

const NAV_ITEMS = [
    { href: "/", label: "Главная" },
    { href: "/tracks", label: "Треки" },
    { href: "/mentors", label: "Менторы" },
];

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // const [pathname] = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-200",
                scrolled
                    ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5 shadow-sm"
                    : "bg-white dark:bg-black border-b border-gray-100 dark:border-white/5",
                className,
            )}
        >
            <Container className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between h-16 px-4 sm:px-6">
                    <div className="flex items-center gap-4 lg:gap-6">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 shrink-0"
                        >
                            <div className="w-7 h-7">
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
                            <span className="text-xl font-semibold text-gray-900 dark:text-white font-neopixel tracking-tight">
                                KuberCode
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {NAV_ITEMS.map((item) => {
                                const isActive = item.href === "/";
                                // ? pathname === "/"
                                // : pathname.startsWith(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "px-3.5 py-2 rounded-xl text-sm font-medium transition-all",
                                            isActive
                                                ? "text-[var(--purple)] bg-[var(--purple)]/10 dark:text-[var(--lime)] dark:bg-[var(--lime)]/10"
                                                : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5",
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Right: Account + Mobile toggle */}
                    <div className="ml-auto flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                type="button"
                                className="text-sm font-medium text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white"
                            >
                                Вход
                            </button>
                            <ThemeToggle />
                        </div>

                        <div className="flex items-center gap-2 md:hidden">
                            <ThemeToggle />
                            {/* <AccountButton /> */}
                            {/* Mobile hamburger */}
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-9 h-9 rounded-xl text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5"
                                    >
                                        <Menu className="h-5 w-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="right"
                                    className="w-[280px] bg-white dark:bg-[#0c0c0e] border-gray-100 dark:border-white/5 p-0"
                                >
                                    {/* Sheet header */}
                                    <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-white/5">
                                        <Link
                                            href="/"
                                            className="flex items-center gap-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Code2 className="w-5 h-5 text-[var(--purple)] dark:text-[var(--lime)]" />
                                            <span className="font-semibold text-gray-900 dark:text-white font-neopixel">
                                                KuberCode
                                            </span>
                                        </Link>
                                    </div>

                                    {/* Nav links */}
                                    <nav className="flex flex-col p-4 gap-1">
                                        {NAV_ITEMS.map((item) => {
                                            const isActive = item.href === "/";
                                            // ? pathname === "/"
                                            // : pathname.startsWith(
                                            //       item.href,
                                            //   );
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                    className={cn(
                                                        "px-4 py-3 rounded-xl text-base font-medium transition-all",
                                                        isActive
                                                            ? "text-[var(--purple)] bg-[var(--purple)]/10 dark:text-[var(--lime)] dark:bg-[var(--lime)]/10"
                                                            : "text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/5",
                                                    )}
                                                >
                                                    {item.label}
                                                </Link>
                                            );
                                        })}
                                    </nav>

                                    {/* Mobile CTA */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-white/5">
                                        <Link
                                            href="/tracks"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Button className="w-full rounded-xl bg-[var(--purple)] dark:bg-[var(--lime)] text-white dark:text-black hover:opacity-90">
                                                Начать обучение
                                            </Button>
                                        </Link>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};
