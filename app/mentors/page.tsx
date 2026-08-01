import type { Metadata } from "next";
import { MentorsPageContent } from "@/components/ui/shared/mentors-page";

export const metadata: Metadata = {
  title: "Менторы",
  description:
    "Живые менторы KuberCode — скоро. Code review, созвоны и разбор кода.",
};

export default function MentorsPage() {
  return (
    <main>
      <MentorsPageContent />
    </main>
  );
}
