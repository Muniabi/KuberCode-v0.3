import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/ui/Footer";
import { Providers } from "@/lib/providers";
import { Header } from "@/components/ui/Header";
import { JetBrains_Mono } from "next/font/google";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

const neopixel = localFont({
    src: "./fonts/Neopixel - Templatica.pro.woff2",
    variable: "--font-neopixel",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://kubercode.ru"),
    title: {
        default: "KuberCode | Онлайн-обучение IT профессиям",
        template: "%s | KuberCode",
    },
    description:
        "Начни карьеру в IT вместе с нами. Мы поможем вам освоить востребованные навыки и найти работу мечты в технологической сфере. Более 5000 курсов от ведущих экспертов.",
    keywords: [
        "обучение IT",
        "программирование",
        "курсы разработки",
        "онлайн образование",
        "IT профессии",
        "обучение программированию",
        "курсы программирования",
        "курсы разработки",
        "курсы онлайн",
        "курсы для начинающих",
        "курсы для детей",
        "курсы для взрослых",
        "it курсы",
    ],
    authors: [{ name: "KuberCode Team" }],
    creator: "KuberCode",
    publisher: "KuberCode",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "KuberCode | Онлайн-обучение IT профессиям",
        description:
            "Начни карьеру в IT вместе с нами. Более 5000 курсов от ведущих экспертов.",
        url: "https://kubercode.ru",
        siteName: "KuberCode",
        locale: "ru_RU",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google-site-verification=5neX398Z9s0tAO-HC0fgl60kisf6gyTnwP9BlpivPmw",
        yandex: "9fa408ddedb1f6cf",
        other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
        },
    },
    alternates: {
        canonical: "https://kubercode.ru",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            suppressHydrationWarning
            className={cn("font-mono", jetbrainsMono.variable)}
        >
            <body
                className={cn(
                    geistSans.variable,
                    jetbrainsMono.variable,
                    neopixel.variable,
                )}
            >
                <script
                    dangerouslySetInnerHTML={{
                        __html: `;(function(){try{var k='kc-theme';var v=localStorage.getItem(k);var valid=['dark','light','system'];if(!valid.includes(v)){localStorage.setItem(k,'dark');v='dark';}if(v==='system'){try{var m=window.matchMedia('(prefers-color-scheme: dark)');if(m.matches)document.documentElement.classList.add('dark');}catch(e){}}else if(v==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){} })();`,
                    }}
                />
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
