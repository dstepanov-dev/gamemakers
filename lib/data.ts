// Central content source — extracted from gamemakers.studio so copy stays
// editable in one place. Strict typing keeps the section components honest.

export type NavLink = {
  label: string;
  href: string;
};

export type Platform = {
  name: string;
  tag: string;
  icon: string;
};

export type Service = {
  title: string;
  description: string;
  image: string;
};

export type Technology = {
  title: string;
  description: string;
  image: string;
};

export type GalleryItem = {
  src: string;
  thumb: string;
  alt: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  /** Official brand glyph, drawn as a single filled path on a 24×24 canvas. */
  path: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Studio", href: "#studio" },
];

export const PLATFORMS: Platform[] = [
  { name: "PC", tag: "Steam / Epic", icon: "/images/icon-mouse.png" },
  { name: "PlayStation", tag: "PS4 / PS5", icon: "/images/icon-gamepad.png" },
  { name: "Xbox", tag: "Series X|S", icon: "/images/icon-gamepad-2.png" },
];

export const SERVICES: Service[] = [
  {
    title: "Game Development Outsourcing",
    description:
      "Expand your team with our skilled developers. We provide flexible outsourcing solutions to accelerate your game development process.",
    image: "/images/post-1.jpg",
  },
  {
    title: "Mobile Game Development",
    description:
      "Create engaging mobile games for iOS and Android. We deliver optimized, user-friendly experiences for global audiences.",
    image: "/images/post-2.jpg",
  },
  {
    title: "Console Game Development",
    description:
      "Develop high-performance games for PlayStation, Xbox, and more. Our team ensures immersive gameplay for console players.",
    image: "/images/post-3.jpg",
  },
  {
    title: "Game Porting",
    description:
      "Seamlessly port your game to new platforms. We optimize performance while preserving your game’s core experience.",
    image: "/images/post-4.jpg",
  },
  {
    title: "Game Testing",
    description:
      "Ensure flawless gameplay with rigorous testing. We identify bugs and optimize performance for a smooth launch.",
    image: "/images/post-5.jpg",
  },
  {
    title: "3D Game Development",
    description:
      "Build immersive 3D games with stunning visuals. We use advanced tools to create lifelike worlds and characters.",
    image: "/images/post-6.jpg",
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    title: "Unity Development",
    description:
      "Versatile 2D and 3D games with seamless cross-platform support.",
    image: "/images/post-5-mid.jpg",
  },
  {
    title: "Unreal Development",
    description:
      "Photorealistic graphics and high-performance tools for immersive games.",
    image: "/images/post-6-mid.jpg",
  },
];

export const GALLERY: GalleryItem[] = [
  { src: "/images/gallery-1.jpg", thumb: "/images/gallery-1-thumb.jpg", alt: "Game art concept 1" },
  { src: "/images/gallery-2.jpg", thumb: "/images/gallery-2-thumb.jpg", alt: "Game art concept 2" },
  { src: "/images/gallery-3.jpg", thumb: "/images/gallery-3-thumb.jpg", alt: "Game art concept 3" },
  { src: "/images/gallery-4.jpg", thumb: "/images/gallery-4-thumb.jpg", alt: "Game art concept 4" },
  { src: "/images/gallery-5.jpg", thumb: "/images/gallery-5-thumb.jpg", alt: "Game art concept 5" },
  { src: "/images/gallery-6.jpg", thumb: "/images/gallery-6-thumb.jpg", alt: "Game art concept 6" },
];

// Official brand marks (Simple Icons paths) so each network is recognisable at
// 18px instead of a generic outline.
//
// NOTE: the `href` values below point at the studio's placeholder profiles —
// swap them for the real account URLs before launch.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "X",
    href: "https://x.com/gamemakersstudio",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gamemakersstudio",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gamemakersstudio",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Twitch",
    href: "https://www.twitch.tv/gamemakersstudio",
    path: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z",
  },
];

export const STATS: Stat[] = [
  { value: "12+", label: "Years crafting games" },
  { value: "80+", label: "Titles shipped" },
  { value: "3", label: "Core platforms" },
  { value: "100%", label: "Full-cycle delivery" },
];
