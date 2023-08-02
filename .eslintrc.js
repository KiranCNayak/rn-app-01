module.exports = {
  root: true,
  extends: ["prettier", "eslint:recommended", "plugin:promise/recommended"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    allowAllPropertiesOnSameLine: false,
  },
}
