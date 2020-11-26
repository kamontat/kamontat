// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

/* eslint-disable */

// TODO upgrade tailwindcss to version 2
// const colors = require("tailwindcss/colors")

// TODO modified configuration to related personal
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
}

/* eslint-enable */
