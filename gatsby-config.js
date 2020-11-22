/* eslint-disable */
const ts = require("gatsby-plugin-ts-config");

module.exports = ts.generateConfig({
  projectRoot: process.cwd(),
  configDir: "gatsby",
  babel: {
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      [
        "@emotion/babel-plugin-jsx-pragmatic",
        {
          "export": "jsx",
          "import": "__cssprop",
          "module": "@emotion/react"
        }
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          "pragma": "__cssprop",
          "pragmaFrag": "React.Fragment"
        }
      ]
    ]
  }
});

/* eslint-enable */
