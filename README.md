# Game Makers Studio — Premium Redesign

A modern, minimalist and gaming-infused landing page for **Game Makers Studio**,
rebuilt from the ground up with a premium glassmorphic design system.

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** (App Router)
- **TypeScript** (strict mode)
- **[Tailwind CSS](https://tailwindcss.com/)** — custom mid-tone design tokens
- **[Framer Motion](https://www.framer.com/motion/)** — scroll reveals & modal transitions
- **Static Export** (`output: 'export'`) — deploys to any static host (Apache/Nginx, Vercel, Netlify, GitHub Pages)

## Design System

| Token | Value | Role |
| --- | --- | --- |
| Crimson | `#dd163b` | Brand highlight (from source site) |
| Gunmetal | `#1b2227` → `#262f36` | Mid-tone canvas |
| Teal | `#22a2b1` | Secondary gaming accent |
| Display font | Orbitron | Headings |
| Body font | Inter | Body copy |

Glassmorphism (`backdrop-blur`, low-opacity borders, layered shadows), ambient
blur spheres, a faint blueprint grid and minimalist bounding-box accents give the
spacious layout a polished, pro-studio feel. Fully responsive and pixel-perfect
down to 320px.

## Sections

Header (sticky glass) · Hero · Platforms · Services · Technologies · Portfolio
(lightbox) · Philosophy · Contact CTA · Footer — plus a center-aligned
glassmorphic **Contact modal** with an animated submit → "Successfully Sent"
transition (simulated client-side, no page refresh).

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production Build (Static Export)

```bash
npm run build      # generates the standalone ./out folder
```

Upload the contents of `out/` to any static web server — no Node.js runtime
required.

## Deploy to Vercel

Import the repository in Vercel; it auto-detects Next.js. No extra config needed.
```
