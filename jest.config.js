// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

const testPath = path.join("<rootDir>", "test")
const setupPath = path.join(testPath, "setup")
const mockPath = path.join(testPath, "__mocks__")

module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": path.join(setupPath, "jest-preprocess.js"),
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": path.join(
      mockPath,
      "assets.js"
    ),
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`, `cypress`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [path.join(setupPath, "loadershim.js")],
  setupFilesAfterEnv: [path.join(setupPath, "jest-postprocess.js")],
}
