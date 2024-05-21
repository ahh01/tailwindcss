const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { flexShrink: {
        2: '2'
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ["'Fira Code'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
