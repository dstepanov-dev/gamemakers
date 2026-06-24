/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static `out/` folder (pure HTML/CSS/JS) for shared hosting
  // (Apache/Nginx) with no Node.js runtime required.
  output: "export",
  // next/image optimization requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },
  // Emit `path/index.html` so links resolve cleanly on static hosts.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
