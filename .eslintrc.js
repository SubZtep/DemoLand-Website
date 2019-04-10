module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: ["@nuxtjs", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off"
  }
}
