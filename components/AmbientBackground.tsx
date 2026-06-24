/**
 * Fixed, non-interactive ambient layer: blurred brand-colour spheres + a faint
 * blueprint grid. Sits behind all content to give the spacious layout depth
 * without stealing focus. Pure CSS — no JS, safe for static export.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Faint blueprint grid, masked to fade at the edges */}
      <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Crimson ambient sphere — top right */}
      <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-crimson/20 blur-[140px] animate-pulse-slow" />

      {/* Teal ambient sphere — bottom left */}
      <div className="absolute -bottom-48 -left-32 h-[32rem] w-[32rem] rounded-full bg-teal/15 blur-[150px] animate-pulse-slow [animation-delay:2s]" />

      {/* Subtle amber glow — center drift */}
      <div className="absolute left-1/2 top-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-amber/[0.06] blur-[160px]" />

      {/* Top + bottom vignette for the mid-tone "breathing" feel */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
