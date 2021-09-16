const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["./src/**/*.ts", "./src/**/*.tsx"],
    safelist: [
      "col-span-1",
      "col-span-2",
      "col-span-3",
      "col-span-4",
      "col-span-5",
      "col-span-6",
      "col-span-7",
      "col-span-8",
      "col-span-9",
      "col-span-10",
      "col-span-11",
      "col-span-12",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        layout: {
          background: '#1A1A1F',
          main: '#7F7FE6',
          inactive: '#43434E',
          stroke: '#ABABAB',
          important: '#7F7FE6 !important',
          white: '#FFFFFF'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
