"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, MessageCircle, Code2 } from "lucide-react";
import { APP_URL } from "@/lib/app-url";

/**
 * Mentors hub — public stub.
 *
 * FUTURE:
 * - Fetch mentors list from API (GET /v1/mentors)
 * - Mentor profile cards with real avatars / specialties
 * - Booking / request session flow
 * - Filters by track (JS, Go, …)
 */
export function MentorsPageContent() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden py-16 sm:py-24">
      {/* Soft backdrop blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[var(--purple)]/15 blur-[100px]" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[var(--lime)]/10 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(137,72,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(137,72,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--purple)]/20 bg-[var(--purple)]/10 px-3 py-1 text-xs font-medium text-[var(--purple)] dark:border-[var(--lime)]/20 dark:bg-[var(--lime)]/10 dark:text-[var(--lime)]">
            <Users className="h-3.5 w-3.5" />
            Менторы
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Скоро здесь появятся{" "}
            <span className="text-[var(--purple)] dark:text-[var(--lime)]">
              живые менторы
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-white/45">
            Разбор кода, карьерные советы и code review один-на-один. Раздел в
            разработке — пока лови атмосферу.
          </p>
        </motion.div>

        {/* Skeleton mentor cards — pulse placeholders for future list */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <MentorSkeletonCard key={i} delay={i * 0.08} />
          ))}
        </div>

        {/* Feature teaser chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="mb-12 flex flex-wrap gap-3"
        >
          <TeaserChip icon={<Code2 className="h-4 w-4" />} text="Code review" />
          <TeaserChip
            icon={<MessageCircle className="h-4 w-4" />}
            text="Созвоны 1:1"
          />
          <TeaserChip
            icon={<Sparkles className="h-4 w-4" />}
            text="Подбор под трек"
          />
        </motion.div>

        {/* CTA + decorative mascot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-[var(--purple)]/10 via-white to-[var(--lime)]/10 p-8 dark:border-white/10 dark:from-[var(--purple)]/20 dark:via-[#141416] dark:to-[var(--lime)]/5 sm:p-10"
        >
          <img
            src="/mascots/capy-ducks-pool.png"
            alt=""
            className="pointer-events-none absolute -right-6 -top-4 h-40 w-40 opacity-80 sm:h-52 sm:w-52"
          />
          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Хочешь быть первым в очереди?
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-white/45">
              Заведи аккаунт — когда менторы появятся, ты уже будешь внутри.
            </p>
            <a
              href={`${APP_URL}/register`}
              className="mt-6 inline-flex h-11 items-center rounded-2xl bg-[var(--purple)] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-[var(--lime)] dark:text-black"
            >
              Создать аккаунт
            </a>
          </div>
        </motion.div>

        {/* FUTURE: mentors grid mounts here */}
        <div
          id="mentors-list-root"
          data-slot="mentors-list"
          aria-hidden
          className="hidden"
        />
      </div>
    </section>
  );
}

function MentorSkeletonCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
      className="rounded-3xl border border-gray-100 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="h-14 w-14 animate-pulse rounded-2xl bg-gray-200 dark:bg-white/10" />
        <div className="flex-1 space-y-2">
          <div className="h-3.5 w-2/3 animate-pulse rounded-full bg-gray-200 dark:bg-white/10" />
          <div className="h-3 w-1/2 animate-pulse rounded-full bg-gray-100 dark:bg-white/[0.06]" />
        </div>
      </div>
      <div className="mb-4 space-y-2">
        <div className="h-3 w-full animate-pulse rounded-full bg-gray-100 dark:bg-white/[0.06]" />
        <div className="h-3 w-5/6 animate-pulse rounded-full bg-gray-100 dark:bg-white/[0.06]" />
        <div className="h-3 w-4/6 animate-pulse rounded-full bg-gray-100 dark:bg-white/[0.06]" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-16 animate-pulse rounded-full bg-gray-100 dark:bg-white/[0.06]" />
        <div className="h-6 w-20 animate-pulse rounded-full bg-gray-100 dark:bg-white/[0.06]" />
      </div>
      <p className="mt-5 text-center text-xs text-gray-400 dark:text-white/25">
        Скоро
      </p>
    </motion.div>
  );
}

function TeaserChip({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3.5 py-1.5 text-sm text-gray-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/60">
      <span className="text-[var(--purple)] dark:text-[var(--lime)]">{icon}</span>
      {text}
    </span>
  );
}
