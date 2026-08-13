"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { LogoLink } from "./LogoLink";
import { useModal } from "./ModalContext";

export function Header() {
  const { open } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* `relative z-50` keeps the bar — logo and burger — painted above the
          mobile drawer below, which is a positioned sibling inside this same
          stacking context and would otherwise cover it. */}
      <div className="container-px relative z-50 pt-3 sm:pt-4">
        <nav
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "glass shadow-glass"
              : "border border-transparent bg-transparent"
          }`}
        >
          <LogoLink
            priority
            className="flex shrink-0 items-center"
            imageClassName="h-8 w-auto sm:h-9"
            onNavigate={() => setMenuOpen(false)}
          />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium tracking-wide text-mist transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-crimson transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => open()}
              className="btn-primary hidden px-6 py-2.5 text-xs sm:inline-flex"
            >
              Contact Us
            </button>

            {/* Mobile burger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="glass flex h-10 w-10 items-center justify-center rounded-xl lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-white transition-all duration-300 ${
                    menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-white transition-all duration-300 ${
                    menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            {/* `overflow-y-auto` keeps every item reachable when the viewport is
                short — e.g. a tablet or phone in landscape. `overscroll-contain`
                stops the scroll chaining through to the locked page behind it. */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="glass-strong absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col gap-2 overflow-y-auto overscroll-contain p-6 pb-10 pt-20 sm:pt-24"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="shrink-0 rounded-xl px-4 py-3 text-base font-medium text-mist transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  open();
                }}
                className="btn-primary mt-4 w-full shrink-0"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
