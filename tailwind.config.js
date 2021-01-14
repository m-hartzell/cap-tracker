const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "white",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      orange: colors.orange,
      green: colors.green,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
