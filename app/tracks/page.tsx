import type { Metadata } from "next";
import { TracksPageContent } from "@/components/ui/shared/tracks-page";

export const metadata: Metadata = {
  title: "Треки обучения",
  description:
    "Выбери направление: JavaScript, TypeScript, Go, Python, React, Docker, Kubernetes, SQL.",
};

export default function TracksPage() {
  return (
    <main>
      <TracksPageContent />
    </main>
  );
}
