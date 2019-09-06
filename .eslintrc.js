module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "react/prop-types": "off"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
