import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "poe-map": "url('/img/map.png')",
        "atlas-map": "url('/img/atlas.webp')",
      },
      colors: {
        'unique-map': '#af6025',
        'white-map': '#f8f9fa',
        'yellow-map': '#ffc107',
        'red-map': '#dc3545',
      },
    },
  },
  plugins: [],
};
export default config;