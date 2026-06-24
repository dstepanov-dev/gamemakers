"use client";

import { Reveal } from "./Reveal";
import { useModal } from "./ModalContext";

export function ContactCTA() {
  const { open } = useModal();

  return (
    <section id="contact" className="container-px relative py-24 sm:py-28">
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20">
          {/* Ambient glow inside the panel */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-crimson/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal/15 blur-[100px]" />

          <div className="relative">
            <span className="kicker justify-center">
              <span className="h-px w-8 bg-teal-soft/60" />
              Let&apos;s Build
            </span>
            <h2 className="heading mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Have a game in mind? <span className="text-gradient">Let&apos;s make it.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist-dim">
              Tell us about your project and our team will get back to you within
              one business day. No obligations, just a conversation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button type="button" onClick={open} className="btn-primary">
                Contact Us
              </button>
              <a
                href="mailto:hello@gamemakers.studio"
                className="btn-ghost"
              >
                hello@gamemakers.studio
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
