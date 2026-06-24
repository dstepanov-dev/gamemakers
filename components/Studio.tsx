"use client";

import { Reveal } from "./Reveal";

const PRINCIPLES = [
  {
    title: "Players First",
    body: "Every decision is measured against one question — does it make the game more fun to play?",
  },
  {
    title: "Craft & Polish",
    body: "We sweat the details: frame-perfect feel, clean code and art that holds up under a magnifying glass.",
  },
  {
    title: "True Partners",
    body: "Transparent communication and full-cycle ownership. Your roadmap becomes our roadmap.",
  },
];

export function Studio() {
  return (
    <section id="studio" className="relative py-24 sm:py-28">
      <div className="container-px relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <span className="kicker">
            <span className="h-px w-8 bg-teal-soft/60" />
            Our Philosophy
          </span>
          <h2 className="heading mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Built by players,
            <br />
            for <span className="text-gradient">players</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist-dim">
            Game Makers Studio is a tight-knit team of engineers, artists and
            designers who treat every project like our own flagship title. We
            move fast, communicate openly and never ship anything we wouldn&apos;t
            be proud to play.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Unity", "Unreal", "C#", "C++", "Blender", "Live-Ops"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-mist"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </Reveal>

        <div className="grid gap-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} direction="left">
              <div className="glass group flex gap-5 rounded-2xl p-6 transition-all duration-300 hover:border-white/20">
                <span className="font-display text-3xl font-bold text-crimson/70 transition-colors group-hover:text-crimson">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
