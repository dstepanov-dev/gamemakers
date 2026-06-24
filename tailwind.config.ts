import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mid-tone gunmetal canvas — neither pitch black nor pure white.
        ink: {
          900: "#171e22",
          800: "#1d242a",
          700: "#232b31",
          600: "#2a333a",
          500: "#303e47",
          400: "#3b4853",
        },
        // Studio crimson — the signature brand highlight extracted from source.
        crimson: {
          DEFAULT: "#dd163b",
          soft: "#ff3355",
          deep: "#a50f2b",
        },
        // Secondary gaming accent (teal) pulled from the template palette.
        teal: {
          DEFAULT: "#22a2b1",
          soft: "#44cbdb",
        },
        amber: {
          DEFAULT: "#ef9e2b",
        },
        mist: {
          DEFAULT: "#c7d0d8",
          dim: "#8c98a2",
        },
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 40px -12px rgba(0,0,0,0.55)",
        "glass-lg": "0 24px 80px -20px rgba(0,0,0,0.65)",
        glow: "0 0 40px -4px rgba(221,22,59,0.45)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "pulse-slow": "pulse-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
