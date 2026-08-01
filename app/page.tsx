import { HeroNew } from "@/components/ui/shared/Hero";
import { HowItWorks } from "@/components/ui/shared/how-it-works";
import { TracksPreview } from "@/components/ui/shared/tracks-preview";
import { ExercisePreview } from "@/components/ui/shared/exercise-preview";
import { SocialProof } from "@/components/ui/shared/social-proof";
import { LandingCTA } from "@/components/ui/shared/landing-cta";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { MascotEasterEggs } from "@/components/ui/MascotEasterEggs";

export default function Home() {
    return (
        <main>
            <HeroNew />
            <HowItWorks />
            <TracksPreview />
            <ExercisePreview />
            <SocialProof />
            <LandingCTA />
            <CookieConsent />
            <MascotEasterEggs />
        </main>
    );
}
