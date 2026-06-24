"use client";

import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";

const SOCIALS = [
  { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Twitter", href: "#", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
  { label: "Discord", href: "#", path: "M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 5h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3l1 2-4-2H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container-px">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="Game Makers Studio"
              width={199}
              height={40}
              className="mx-auto h-9 w-auto md:mx-0"
            />
            <p className="mt-4 text-sm leading-relaxed text-mist-dim">
              Your trusted partner for innovative game development solutions.
              Full-cycle development for mobile, PC and consoles.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-mist transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm text-mist transition-colors hover:text-white"
            >
              Contact
            </a>
          </nav>

          <ul className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-mist transition-all hover:-translate-y-0.5 hover:text-crimson-soft"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-mist-dim sm:flex-row">
          <p>© {year} Game Makers Studio. All rights reserved.</p>
          <p className="tracking-wide">Crafted with passion for games.</p>
        </div>
      </div>
    </footer>
  );
}
