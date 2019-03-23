module.exports = {
  extends: ["@nuxtjs", "prettier"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  rules: {
    "no-unused-vars": "warn"
  }
}
