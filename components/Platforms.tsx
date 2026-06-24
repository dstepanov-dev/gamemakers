"use client";

import Image from "next/image";
import { PLATFORMS } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Platforms() {
  return (
    <section className="container-px relative py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PLATFORMS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-crimson/40">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-crimson/15">
                <Image
                  src={p.icon}
                  alt={`${p.name} game development`}
                  width={32}
                  height={32}
                  className="h-7 w-auto object-contain opacity-90"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {p.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-mist-dim">
                  {p.tag}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
