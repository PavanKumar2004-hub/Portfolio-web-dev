import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: "#0f1629",
        "surface-card": "#131c35",
        "surface-card-hover": "#172344",
        primary: {
          DEFAULT: "#3b82f6", // Electric Blue
          foreground: "#ffffff",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        accent: {
          amber: "#f59e0b",
          cyan: "#06b6d4",
          emerald: "#10b981",
        },
        border: "#1e293b",
        muted: "#94a3b8",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow 2.5s ease-in-out infinite alternate",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 15px -3px rgba(59, 130, 246, 0.4)" },
          "100%": { boxShadow: "0 0 28px 4px rgba(59, 130, 246, 0.85)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
