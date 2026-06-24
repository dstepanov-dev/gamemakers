import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Game Makers Studio | Expert Game Development Services",
  description:
    "Create your dream game with Game Makers Studio. Full-cycle game development, stunning 2D/3D design and animation for mobile, PC and consoles.",
  keywords: [
    "game dev studio",
    "video game development",
    "Unity development",
    "Unreal development",
    "console game development",
    "game porting",
  ],
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    title: "Game Makers Studio | Expert Game Development Services",
    description:
      "Full-cycle game development for mobile, PC and consoles. Your trusted partner for innovative game development solutions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b2227",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
