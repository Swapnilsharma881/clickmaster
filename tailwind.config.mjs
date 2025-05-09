import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
import { hover } from "motion";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '5000': '1500ms', // 5 seconds
      },
      fontSize: {
        base: "16px",
        sm: "18px",
      },
      colors: {
        primary : "#311514",
        hover: "#8B2634",
        backGround: "#FAF2EB",
        border : "#160403",
        h1: "#BF8A46",
        white:"#FFFFFF",
        black:"#000000",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1020px",
        xl: "1200px",
      },
      fontFamily: {
        primary: ["var(--font-Lexend)", "sans"],
        display: ["var(--font-Domaine)", "serif"],
        secondary: ["var(--font-Lato)", "sans-serif"],
        display_secondary: ["var(--font-MadeMirage)", "sans-serif"],
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
      fontWeight: {
        hairline: "100",
        light: "300",
        bold: "700",
      },
      spacing: {
        custom: "var(--custom-spacing)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
