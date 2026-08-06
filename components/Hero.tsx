"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import { useModal } from "./ModalContext";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const { open } = useModal();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32"
    >
      <div className="container-px grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6"
        >
          <motion.div variants={item}>
            <span className="kicker">
              <span className="h-px w-8 bg-teal-soft/60" />
              Full-Cycle Game Development Studio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="heading mt-6 text-[2.7rem] leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            We Are
            <br />
            Game <span className="text-gradient">Makers</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-mist-dim sm:text-lg"
          >
            Your trusted partner for innovative game development solutions. From
            concept to launch, we craft immersive worlds for mobile, PC and
            consoles.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <button type="button" onClick={() => open()} className="btn-primary">
              Contact Us
            </button>
            <a href="#portfolio" className="btn-ghost">
              View Portfolio
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mt-12 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-4 lg:max-w-xl"
          >
            {STATS.map((s) => (
              <div key={s.label} className="bg-ink-800/40 px-4 py-4">
                <dt className="font-display text-2xl font-bold text-white">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[0.7rem] uppercase tracking-wider text-mist-dim">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          className="relative lg:col-span-6"
        >
          {/* Full-bleed inside its column: no max-width cap, so the visual
              always matches the width of the copy/stats beside or above it
              instead of floating in empty space on wide tablets. */}
          <div className="relative w-full">
            {/* Decorative bounding-box corners */}
            <span className="absolute -left-3 -top-3 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-crimson/70" />
            <span className="absolute -bottom-3 -right-3 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-teal/70" />

            <div className="glass overflow-hidden rounded-3xl p-2 shadow-glass-lg">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                <Image
                  src="/images/slide-1.jpg"
                  alt="Game Makers Studio showcase"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

                {/* Floating glass chip */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-strong absolute bottom-4 left-4 rounded-xl px-4 py-3"
                >
                  <p className="text-[0.65rem] uppercase tracking-widest text-teal-soft">
                    Now crafting
                  </p>
                  <p className="font-display text-sm font-semibold text-white">
                    Next-gen worlds
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="block h-1.5 w-1 rounded-full bg-mist"
          />
        </div>
      </motion.div>
    </section>
  );
}
