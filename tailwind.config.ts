import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0e14",
        panel: "#121620",
        accent: "#5b8cff",
      },
    },
  },
  plugins: [],
};

export default config;
