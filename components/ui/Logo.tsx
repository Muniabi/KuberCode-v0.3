import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    iconClassName?: string;
    showWordmark?: boolean;
}

export function Logo({
    className,
    iconClassName,
    showWordmark = true,
}: LogoProps) {
    return (
        <span className={cn("inline-flex items-center gap-2.5", className)}>
            <span className={cn("w-7 h-7 shrink-0", iconClassName)}>
                <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-[var(--purple)]"
                    aria-hidden
                >
                    <rect x="4" y="2" width="6" height="28" fill="currentColor" />
                    <rect x="10" y="12" width="6" height="6" fill="currentColor" />
                    <rect x="15" y="7" width="6" height="6" fill="currentColor" />
                    <rect x="20" y="2" width="6" height="6" fill="currentColor" />
                    <rect x="10" y="14" width="6" height="6" fill="currentColor" />
                    <rect x="15" y="19" width="6" height="6" fill="currentColor" />
                    <rect x="20" y="24" width="6" height="6" fill="currentColor" />
                </svg>
            </span>
            {showWordmark ? (
                <span className="font-semibold text-gray-900 dark:text-white font-neopixel tracking-tight">
                    KuberCode
                </span>
            ) : null}
        </span>
    );
}
