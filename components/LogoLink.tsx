"use client";

import Image from "next/image";
import type { MouseEvent } from "react";

type LogoLinkProps = {
  /** Classes for the anchor itself. */
  className?: string;
  /** Classes for the logo image. */
  imageClassName?: string;
  priority?: boolean;
  /** Runs before the scroll — used by the mobile drawer to close itself. */
  onNavigate?: () => void;
};

/**
 * The site logo, always pointing at the homepage. Shared by the header and the
 * footer so both behave identically.
 *
 * On a plain left-click we stay on the page and scroll to the top instead of
 * reloading — but unlike an `#top` anchor this leaves no fragment behind in the
 * address bar. Modified clicks (new tab/window) fall through to the browser.
 */
export function LogoLink({
  className = "",
  imageClassName = "",
  priority = false,
  onNavigate,
}: LogoLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigate?.();

    // Drop any lingering hash (e.g. after clicking a nav anchor) so the URL is
    // clean, without pushing a new history entry.
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      aria-label="Game Makers Studio — home"
      className={`rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson/70 ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt="Game Makers Studio"
        width={199}
        height={40}
        priority={priority}
        className={imageClassName}
      />
    </a>
  );
}
