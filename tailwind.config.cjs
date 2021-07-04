module.exports = {
  purge: {
    content: ["./src/**/*.ts", "./src/**/*.tsx"],
    safelist: ["col-span-3", "col-span-6", "col-span-9", "col-span-12"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
