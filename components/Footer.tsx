"use client";

import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import { LogoLink } from "./LogoLink";
import { useModal } from "./ModalContext";

export function Footer() {
  const { open } = useModal();
  const year = 2026;

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container-px">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <LogoLink
              className="inline-flex"
              imageClassName="mx-auto h-9 w-auto md:mx-0"
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
            {/* The contact section sits directly above the footer, so scrolling
                to it reads as "nothing happened" — open the form instead. */}
            <button
              type="button"
              onClick={() => open()}
              className="text-sm text-mist transition-colors hover:text-white"
            >
              Contact
            </button>
          </nav>

          <ul className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Game Makers Studio on ${s.label}`}
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-mist transition-all hover:-translate-y-0.5 hover:text-crimson-soft"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
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
