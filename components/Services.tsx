"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="grid-overlay" />
      <div className="container-px relative">
        <SectionHeading
          kicker="What We Do"
          title="Game Development"
          accent="Services"
          description="Full-cycle production across every platform. We plug into your pipeline or own it end to end — whatever ships the best game."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <article className="glass group h-full overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glass-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-display text-xs font-semibold text-white backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold leading-snug text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-dim">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-crimson-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
