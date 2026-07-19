"use client";

import { HeroNew } from "@/components/ui/shared/Hero";
import { HowItWorks } from "@/components/ui/shared/how-it-works";
import { TracksPreview } from "@/components/ui/shared/tracks-preview";
// import { ExercisePreview } from "@/components/shared/landing/exercise-preview";
// import { SocialProof } from "@/components/shared/landing/social-proof";
// import { LandingCTA } from "@/components/shared/landing/landing-cta";
// import { CookieConsent } from "@/components/shared/CookieConsent";

export default function Home() {
    return (
        <main className="">
            <HeroNew />
            <HowItWorks />
            <TracksPreview />
            {/* <ExercisePreview /> */}
            {/* <SocialProof /> */}
            {/* <LandingCTA /> */}
            {/* <CookieConsent /> */}
        </main>
    );
}
