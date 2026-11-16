import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        accent: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        caramel: {
          DEFAULT: "#C88A4B",
          light: "#DDB07D",
          dark: "#A66D33",
        },
        flour: {
          DEFAULT: "#FAF6F0",
          warm: "#F3ECE1",
          muted: "#E6DEC8",
        },
        oven: {
          DEFAULT: "#1E1612",
          deep: "#140E0B",
          charcoal: "#2A1F1A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
