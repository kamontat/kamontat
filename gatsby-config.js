/* eslint-disable */

const ts = require("gatsby-plugin-ts-config")
const isDev = process.env.NODE_ENV === "development"

module.exports = ts.generateConfig({
  projectRoot: process.cwd(),
  configDir: "gatsby",
})

/* eslint-enable */
