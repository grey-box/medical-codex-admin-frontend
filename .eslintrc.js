module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  rules: { "react/react-in-jsx-scope": "off" },
  settings: {
    react: {
      version: "detect",
    },
  },
};