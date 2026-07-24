import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cookie, Settings, Shield, Sparkles, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

type CookieType = "necessary" | "analytics" | "marketing";

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
};

const allAcceptedPreferences: CookiePreferences = {
    necessary: true,
    analytics: true,
    marketing: true,
};

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] =
        useState<CookiePreferences>(defaultPreferences);

    const handleAccept = () => {
        setPreferences(allAcceptedPreferences);
        setIsVisible(false);
        localStorage.setItem("cookieConsent", "accepted");
        localStorage.setItem(
            "cookiePreferences",
            JSON.stringify(allAcceptedPreferences),
        );

        if (allAcceptedPreferences.analytics) {
            // TODO: Включить Google Analytics
        }
    };

    const handleSavePreferences = () => {
        setIsVisible(false);
        localStorage.setItem("cookieConsent", "accepted");
        localStorage.setItem("cookiePreferences", JSON.stringify(preferences));

        if (preferences.analytics) {
            // TODO: Включить Google Analytics
        }
    };

    const handleDecline = () => {
        setIsVisible(false);
        localStorage.setItem("cookieConsent", "declined");
        localStorage.setItem(
            "cookiePreferences",
            JSON.stringify(defaultPreferences),
        );
    };

    const togglePreference = (type: CookieType) => {
        setPreferences((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        const savedPreferences = localStorage.getItem("cookiePreferences");

        if (savedPreferences) {
            try {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setPreferences({
                    ...defaultPreferences,
                    ...JSON.parse(savedPreferences),
                });
            } catch {
                setPreferences(defaultPreferences);
            }
        }

        if (consent === "accepted" || consent === "declined") {
            setIsVisible(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1600);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-4 bottom-4 z-50 sm:left-auto sm:right-4 sm:inset-x-auto"
        >
            <Card className="relative mx-auto max-w-[460px] overflow-hidden rounded-[28px] border border-white/60 bg-white/78 px-0 py-0 shadow-[0_24px_70px_rgba(19,18,27,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-[var(--bg-color-dark)]/75">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(137,72,255,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(206,255,26,0.16),transparent_32%)]" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--purple)]/20 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[var(--lime)]/20 blur-3xl" />

                <CardHeader className="relative flex flex-row items-start justify-between gap-3 px-4 pt-4 sm:px-5 sm:pt-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--purple)]/20 bg-[var(--purple)]/10 text-[var(--purple)] shadow-[0_10px_30px_rgba(137,72,255,0.18)] dark:border-[var(--lime)]/20 dark:bg-[var(--lime)]/10 dark:text-[var(--lime)]">
                            <Cookie className="h-5 w-5" />
                        </div>
                        <div>
                            <Badge
                                variant="outline"
                                className="mb-1 border-[var(--purple)]/20 bg-[var(--purple)]/10 text-[var(--purple)] dark:border-[var(--lime)]/20 dark:bg-[var(--lime)]/10 dark:text-[var(--lime)]"
                            >
                                Privacy
                            </Badge>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Настройки Cookie
                            </h3>
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsVisible(false)}
                        className="h-9 w-9 rounded-full border border-gray-200/80 bg-white/70 text-gray-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>

                <CardContent className="relative space-y-4 px-4 pb-4 sm:px-5 sm:pb-5">
                    <div className="rounded-2xl border border-[var(--purple)]/10 bg-white/45 p-3 text-sm text-gray-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300">
                        Мы используем cookie для улучшения работы сайта, анализа
                        поведения и персонализации опыта. Вы всегда можете
                        настроить предпочтения позже.
                    </div>

                    <AnimatePresence mode="wait">
                        {!showSettings ? (
                            <motion.div
                                key="summary"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-3"
                            >
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Button
                                        variant="outline"
                                        onClick={handleDecline}
                                        className="h-11 rounded-2xl border border-gray-200/80 bg-white/70 text-sm font-medium text-gray-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
                                    >
                                        Отклонить
                                    </Button>
                                    <Button
                                        onClick={handleAccept}
                                        className="h-11 rounded-2xl bg-[var(--purple)] text-sm font-semibold text-white hover:bg-[var(--purple)]/90 dark:bg-[var(--lime)] dark:text-black dark:hover:bg-[var(--lime)]/90"
                                    >
                                        Принять все
                                    </Button>
                                </div>

                                <Button
                                    variant="ghost"
                                    onClick={() => setShowSettings(true)}
                                    className="h-auto gap-2 px-0 text-sm font-medium text-[var(--purple)] hover:bg-transparent hover:text-[var(--purple)]/80 dark:text-[var(--lime)] dark:hover:text-[var(--lime)]/80"
                                >
                                    <Settings className="h-4 w-4" />
                                    Настроить предпочтения
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="settings"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.22 }}
                                className="space-y-3"
                            >
                                <div className="rounded-2xl border border-[var(--purple)]/10 bg-white/50 p-3 dark:border-white/10 dark:bg-white/[0.03]">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--purple)]/10 text-[var(--purple)] dark:bg-[var(--lime)]/10 dark:text-[var(--lime)]">
                                                    <Shield className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <Label className="text-sm font-medium text-gray-900 dark:text-white">
                                                        Необходимые
                                                    </Label>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        Обязательны для работы
                                                        сайта
                                                    </p>
                                                </div>
                                            </div>

                                            <Switch
                                                checked={preferences.necessary}
                                                disabled
                                                className="data-[state=checked]:bg-[var(--purple)] dark:data-[state=checked]:bg-[var(--lime)]"
                                            />
                                        </div>

                                        <Separator className="bg-[var(--purple)]/10 dark:bg-white/10" />

                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--purple)]/10 text-[var(--purple)] dark:bg-[var(--lime)]/10 dark:text-[var(--lime)]">
                                                    <Sparkles className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <Label className="text-sm font-medium text-gray-900 dark:text-white">
                                                        Аналитика
                                                    </Label>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        Для понимания поведения
                                                        пользователей
                                                    </p>
                                                </div>
                                            </div>

                                            <Switch
                                                checked={preferences.analytics}
                                                onCheckedChange={() =>
                                                    togglePreference(
                                                        "analytics",
                                                    )
                                                }
                                                className="data-[state=checked]:bg-[var(--purple)] dark:data-[state=checked]:bg-[var(--lime)]"
                                            />
                                        </div>

                                        <Separator className="bg-[var(--purple)]/10 dark:bg-white/10" />

                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--purple)]/10 text-[var(--purple)] dark:bg-[var(--lime)]/10 dark:text-[var(--lime)]">
                                                    <Cookie className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <Label className="text-sm font-medium text-gray-900 dark:text-white">
                                                        Маркетинг
                                                    </Label>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        Для персонализированных
                                                        рекомендаций
                                                    </p>
                                                </div>
                                            </div>

                                            <Switch
                                                checked={preferences.marketing}
                                                onCheckedChange={() =>
                                                    togglePreference(
                                                        "marketing",
                                                    )
                                                }
                                                className="data-[state=checked]:bg-[var(--purple)] dark:data-[state=checked]:bg-[var(--lime)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => setShowSettings(false)}
                                        className="h-11 rounded-2xl border border-gray-200/80 bg-white/70 text-sm font-medium text-gray-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
                                    >
                                        Назад
                                    </Button>
                                    <Button
                                        onClick={handleSavePreferences}
                                        className="h-11 rounded-2xl bg-[var(--purple)] text-sm font-semibold text-white hover:bg-[var(--purple)]/90 dark:bg-[var(--lime)] dark:text-black dark:hover:bg-[var(--lime)]/90"
                                    >
                                        Сохранить
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>

                <CardFooter className="relative hidden px-4 pb-4 text-xs text-gray-500 dark:text-gray-400 sm:px-5 sm:block">
                    Ваш выбор можно изменить позже в любом месте сайта.
                </CardFooter>
            </Card>
        </motion.div>
    );
};
