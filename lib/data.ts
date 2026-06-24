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

export const STATS: Stat[] = [
  { value: "12+", label: "Years crafting games" },
  { value: "80+", label: "Titles shipped" },
  { value: "3", label: "Core platforms" },
  { value: "100%", label: "Full-cycle delivery" },
];
