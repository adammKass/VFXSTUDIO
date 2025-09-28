/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lexend: ['"Lexend"', "sans-serif"],
      lexendGiga: ['"Lexend Giga"', "sans-serif"],
    },
    colors: {
      PWhite: "rgba(var(--primary))",
      PBlack: "rgba(var(--secondary))",
      PGrey: "rgba(var(--primaryLight))",
      PGreyDark: "rgba(var(--primaryDark))",
    },
  },
  plugins: [],
};
