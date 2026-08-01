"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Easter eggs on marketing: capybara + duck in free space.
 * Click → reveal companion / fun message with animation.
 */
export function MascotEasterEggs() {
  const [capyOpen, setCapyOpen] = useState(false);
  const [duckOpen, setDuckOpen] = useState(false);

  return (
    <>
      {/* Left side — peeking duck */}
      <div className="pointer-events-none fixed bottom-6 left-0 z-40 hidden lg:block">
        <button
          type="button"
          aria-label="Пасхалка: утка"
          onClick={() => setDuckOpen((v) => !v)}
          className="pointer-events-auto group relative -translate-x-6 hover:translate-x-2 transition-transform duration-500 ease-out focus:outline-none"
        >
          <img
            src="/mascots/duck-peek.png"
            alt=""
            className="h-28 w-28 object-contain drop-shadow-lg group-hover:rotate-[-6deg] transition-transform"
          />
        </button>

        <AnimatePresence>
          {duckOpen && (
            <motion.div
              initial={{ opacity: 0, x: -24, scale: 0.9 }}
              animate={{ opacity: 1, x: 12, scale: 1 }}
              exit={{ opacity: 0, x: -16, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="pointer-events-auto absolute bottom-32 left-4 w-56 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-[#141416]"
            >
              <img
                src="/mascots/duck-glow.png"
                alt=""
                className="mx-auto mb-2 h-24 w-24 object-contain"
              />
              <p className="text-center text-xs text-gray-600 dark:text-white/60">
                Rubber duck debugging: объясни баг утке. Она молчит — значит, ты
                уже почти понял.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right side — chill capybara */}
      <div className="pointer-events-none fixed bottom-8 right-0 z-40 hidden lg:block">
        <button
          type="button"
          aria-label="Пасхалка: капибара"
          onClick={() => setCapyOpen((v) => !v)}
          className="pointer-events-auto group relative translate-x-8 hover:translate-x-0 transition-transform duration-500 ease-out focus:outline-none"
        >
          <img
            src="/mascots/capy-orange.png"
            alt=""
            className="h-32 w-32 object-contain drop-shadow-lg group-hover:rotate-[4deg] transition-transform"
          />
        </button>

        <AnimatePresence>
          {capyOpen && (
            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.9 }}
              animate={{ opacity: 1, x: -8, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="pointer-events-auto absolute bottom-36 right-4 w-64 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-[#141416]"
            >
              <img
                src="/mascots/capy-ducks-pool.png"
                alt=""
                className="mb-2 h-36 w-full rounded-xl object-cover"
              />
              <p className="text-center text-xs text-gray-600 dark:text-white/60">
                Капибара в онсене говорит: дедлайн подождёт. Сначала — один
                зелёный тест.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
