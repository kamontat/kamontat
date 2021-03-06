// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// const colors = require("tailwindcss/colors")

module.exports = {
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["JetBrains Mono", "ui-monospace"],
    },
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        popup: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      zIndex: {
        1: 1,
        2: 2,
        5: 5,
      },
      rotate: {
        135: "135deg",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
    },
  },
}
