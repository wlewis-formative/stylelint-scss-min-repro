"use strict";

module.exports = {
  files: ["*.tsx"],
  customSyntax: require.resolve("postcss-styled-syntax"),
  plugins: ["stylelint-scss"],
  rules: {
    "scss/percent-placeholder-pattern": [
      "^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: "Expected placeholder to be kebab-case",
      },
    ],
  },
};
