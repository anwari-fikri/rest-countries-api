/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
      // - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
      // - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
      // - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
      // - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
      // - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
      colors: {
        "dark-blue": {
          dark: "hsl(209, 23%, 22%)",
        },
        "very-dark-blue": {
          dark: "hsl(207, 26%, 17%)",
          light: "hsl(200, 15%, 8%)",
        },
        "dark-gray": {
          light: "hsl(0, 0%, 52%)",
        },
        "very-light-gray": {
          light: "hsl(0, 0%, 98%)",
        },
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        "homepage-items": "14px",
        "detail-page": "16px",
      },
      fontFamily: {
        "sans": ["Nunito Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
