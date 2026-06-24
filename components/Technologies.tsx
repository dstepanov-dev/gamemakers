"use client";

import Image from "next/image";
import { TECHNOLOGIES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Technologies() {
  return (
    <section id="technologies" className="relative py-24 sm:py-28">
      <div className="container-px relative">
        <SectionHeading
          kicker="Engines & Tools"
          title="Game"
          accent="Technologies"
          description="We build on the industry's leading engines, choosing the right toolchain for your vision, platform and budget."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECHNOLOGIES.map((tech, i) => (
            <Reveal key={tech.title} delay={i * 0.1} direction={i === 0 ? "right" : "left"}>
              <article className="glass group relative h-full overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                </div>
                <div className="relative -mt-16 p-7">
                  <span className="kicker mb-3">
                    <span className="h-px w-6 bg-teal-soft/60" />
                    {i === 0 ? "Cross-platform" : "AAA fidelity"}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {tech.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-mist-dim">
                    {tech.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
