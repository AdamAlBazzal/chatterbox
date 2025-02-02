import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["roboto"],
      heading: ["poppins"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#f5f7fb",
          dark: "#1a202c",
        },
        secondary: {
          light: "#000",
          dark: "#fff",
        },
        accent: "#845bf4",
      },
    },
  },
  plugins: [],
} satisfies Config;
