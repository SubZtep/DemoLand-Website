module.exports = {
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/$1",
  //   "^~/(.*)$": "<rootDir>/$1",
  //   "^vue$": "vue/dist/vue.common.js"
  // },
  // moduleFileExtensions: ["js", "vue", "json"],
  // transform: {
  //   "^.+\\.js$": "babel-jest",
  //   ".*\\.(vue)$": "vue-jest"
  // },
  // collectCoverage: true,
  // collectCoverageFrom: ["<rootDir>/components/**/*.vue", "<rootDir>/pages/**/*.vue"]
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    //"\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    "\\.(ts|tsx)$": "ts-jest"
  },
  testRegex: "/__tests__/.*\\.(ts|tsx|js)$"
}
