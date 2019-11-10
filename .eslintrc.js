module.exports = {
  root: true,
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-extra-semi": ["error"],
    semi: ["error", "never"],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
}
