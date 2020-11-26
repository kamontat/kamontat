/* eslint-disable */

const ts = require("gatsby-plugin-ts-config")
const isDev = process.env.NODE_ENV === "development"

module.exports = ts.generateConfig({
  projectRoot: process.cwd(),
  configDir: "gatsby",
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      [
        "@emotion",
        {
          cssPropOptimization: true,
          sourceMap: isDev,
          autoLabel: "dev-only",
          labelFormat: "[filename]-[local]",
        },
      ],
      [
        "@emotion/babel-plugin-jsx-pragmatic",
        {
          export: "jsx",
          import: "__cssprop",
          module: "@emotion/react",
        },
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          pragma: "__cssprop",
          pragmaFrag: "React.Fragment",
        },
      ],
    ],
  },
})

/* eslint-enable */
