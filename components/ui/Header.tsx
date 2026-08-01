"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { APP_URL } from "@/lib/app-url";

const NAV_ITEMS = [
    { href: "/", label: "Главная", kind: "route" as const },
    { href: "#tracks", label: "Треки", kind: "anchor" as const },
    { href: "#", label: "Менторы", kind: "soon" as const },
];

interface Props {
    className?: string;
}

function isNavActive(
    pathname: string,
    item: (typeof NAV_ITEMS)[number],
): boolean {
    if (item.kind !== "route") return false;
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export const Header: React.FC<Props> = ({ className }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSoonClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
    ) => {
        event.preventDefault();
    };

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
                    <Link href="/" className="shrink-0">
                        <Logo className="gap-2.5" />
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = isNavActive(pathname, item);
                            const className = cn(
                                "px-3.5 py-2 rounded-xl text-sm font-medium transition-all",
                                isActive
                                    ? "text-[var(--purple)] bg-[var(--purple)]/10 dark:text-[var(--lime)] dark:bg-[var(--lime)]/10"
                                    : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5",
                            );

                            if (item.kind === "soon") {
                                return (
                                    <a
                                        key={item.label}
                                        href="#"
                                        title="Скоро"
                                        aria-disabled="true"
                                        onClick={handleSoonClick}
                                        className={className}
                                    >
                                        {item.label}
                                    </a>
                                );
                            }

                            if (item.kind === "anchor") {
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={className}
                                    >
                                        {item.label}
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={className}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-2">
                            <Button
                                asChild
                                className="text-[var(--purple)] bg-[var(--purple)]/20 dark:text-[var(--lime)] dark:bg-[var(--lime)]/20"
                            >
                                <a href={`${APP_URL}/login`}>Вход</a>
                            </Button>
                            <ThemeToggle />
                        </div>
                        <div className="md:hidden">
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
                                <ThemeToggle />
                                <SheetContent
                                    side="right"
                                    className="w-[280px] bg-white dark:bg-[#0c0c0e] border-gray-100 dark:border-white/5 p-0"
                                >
                                    <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-white/5">
                                        <Link
                                            href="/"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Logo
                                                className="gap-2"
                                                iconClassName="w-5 h-5"
                                            />
                                        </Link>
                                    </div>

                                    <nav className="flex flex-col p-4 gap-1">
                                        {NAV_ITEMS.map((item) => {
                                            const isActive = isNavActive(
                                                pathname,
                                                item,
                                            );
                                            const className = cn(
                                                "px-4 py-3 rounded-xl text-base font-medium transition-all",
                                                isActive
                                                    ? "text-[var(--purple)] bg-[var(--purple)]/10 dark:text-[var(--lime)] dark:bg-[var(--lime)]/10"
                                                    : "text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/5",
                                            );

                                            if (item.kind === "soon") {
                                                return (
                                                    <a
                                                        key={item.label}
                                                        href="#"
                                                        title="Скоро"
                                                        aria-disabled="true"
                                                        onClick={(event) => {
                                                            handleSoonClick(
                                                                event,
                                                            );
                                                            setIsOpen(false);
                                                        }}
                                                        className={className}
                                                    >
                                                        {item.label}
                                                    </a>
                                                );
                                            }

                                            if (item.kind === "anchor") {
                                                return (
                                                    <a
                                                        key={item.label}
                                                        href={item.href}
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                        className={className}
                                                    >
                                                        {item.label}
                                                    </a>
                                                );
                                            }

                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                    className={className}
                                                >
                                                    {item.label}
                                                </Link>
                                            );
                                        })}
                                    </nav>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-white/5 space-y-2">
                                        <a href={`${APP_URL}/login`}>
                                            <Button
                                                variant="outline"
                                                className="w-full rounded-xl"
                                            >
                                                Вход
                                            </Button>
                                        </a>
                                        <a href={`${APP_URL}/register`}>
                                            <Button className="w-full rounded-xl bg-[var(--purple)] dark:bg-[var(--lime)] text-white dark:text-black hover:opacity-90">
                                                Начать обучение
                                            </Button>
                                        </a>
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
