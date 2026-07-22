import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#111111", tomato: "#d9272e", cream: "#fff8ed", gold: "#f6b83f" } } },
  plugins: []
} satisfies Config;
