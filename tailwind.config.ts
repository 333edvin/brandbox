import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   appear: {
      //     from: {
      //       opacity: "0",
      //       backgroundColor: "#060606", // Correct usage
      //     },
      //     to: {
      //       opacity: "1",
      //     },
      //   },
      //   slide: {
      //     from: {
      //       transform: "translateY(100%)", // Correct transform syntax
      //     },
      //     to: {
      //       transform: "translateY(0%)",
      //     },
      //   },
      // },
      // animation: {
      //   appear: "appear 1s ease-in-out", // Fade-in animation
      //   slide: "slide 750ms ease-in-out", // Slide-in animation
      // },
    },
  },
  
  plugins: [],
} satisfies Config;
