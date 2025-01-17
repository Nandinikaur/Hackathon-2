import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage:{
        Sec6bgImg: "url('/Rectangle 17.png')",
        Sec1image : "url('/Rectangle 1.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
