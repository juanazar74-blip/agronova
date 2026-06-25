import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta fintech sobria
        navy: {
          50: "#eef2f8",
          100: "#d6e0ef",
          200: "#aec1df",
          300: "#7e9bca",
          400: "#4e72b0",
          500: "#345695",
          600: "#274476",
          700: "#1f3560",
          800: "#152544",
          900: "#0d182e",
          950: "#070f1d",
        },
        risk: {
          low: "#16a34a",
          medium: "#d97706",
          high: "#dc2626",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
