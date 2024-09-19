import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ungu: {
          DEFAULT: "#7862FF",
        },
      },
      fontFamily: {
        sans: ['"Roboto Mono Variable"', ...defaultTheme.fontFamily.mono],
        display: ['"Roboto Mono Variable"', ...defaultTheme.fontFamily.mono],
        body: ['"Roboto Mono Variable"', ...defaultTheme.fontFamily.mono],
      },
      screens: {
        xs: "340px",
      },
      container: {
        center: true,
      },
    },
  },
};
