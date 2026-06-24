"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  // Close lightbox on Escape.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="portfolio" className="relative py-24 sm:py-28">
      <div className="grid-overlay" />
      <div className="container-px relative">
        <SectionHeading
          kicker="Showcase"
          title="Game Art"
          accent="Portfolio"
          description="A glimpse into the worlds, characters and environments our artists bring to life."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.07}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="glass group relative block w-full overflow-hidden rounded-2xl"
                aria-label={`Open ${item.alt}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.thumb}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-300 group-hover:bg-ink-900/40" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="glass-strong relative z-10 max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <Image
                  src={GALLERY[active].src}
                  alt={GALLERY[active].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition-colors hover:bg-crimson"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
