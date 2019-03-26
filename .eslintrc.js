module.exports = {
  extends: ["@nuxtjs", "prettier", "prettier/@typescript-eslint"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  rules: {
    "no-constant-condition": ["warn", { checkLoops: false }],
    "no-unused-vars": "warn"
  }
}
