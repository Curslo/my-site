import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script']
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#010101',
          100 : "#16181d",
          200: "#0f1115",
        }
      },
    },
  },
  plugins: [],
};
export default config;
