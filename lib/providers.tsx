"use client";

import React from "react";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/lib/theme-provider";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            <NextTopLoader />
        </>
    );
};
