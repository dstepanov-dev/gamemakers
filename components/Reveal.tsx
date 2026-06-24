"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number;
  /** Travel direction of the reveal. */
  direction?: "up" | "down" | "left" | "right";
  className?: string;
};

const OFFSET = 28;

/**
 * Lightweight scroll-triggered reveal. Fades + slides content in once as it
 * enters the viewport, respecting prefers-reduced-motion via Framer Motion.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const offset = {
    up: { y: OFFSET },
    down: { y: -OFFSET },
    left: { x: OFFSET },
    right: { x: -OFFSET },
  }[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
