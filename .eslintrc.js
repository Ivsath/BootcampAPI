module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  parser: "babel-eslint",
  env: {
    node: true,
  },
  extends: [
    "standard",
    "prettier",
    "prettier/standard",
    "plugin:import/errors",
  ],
  plugins: ["prettier"],
  rules: {
    "promise/catch-or-return": "error",
  },
};
