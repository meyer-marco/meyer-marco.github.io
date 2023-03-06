const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
//ModernSans-Light
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ModernSansLight", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
