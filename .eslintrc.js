module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: { version: "detect" },
    "import/ignore": ["node_modules/react-native/index\\.js$"],
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["prettier", "react"],
  rules: {
    "max-len": [
      "error",
      {
        code: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-undef": ["off"],
    "react/prop-types": "off",
    "no-unused-vars": ["warn"],
    "react/react-in-jsx-scope": "off",
    "linebreak-style": ["error", "unix"],
    "object-property-newline": ["error"],
    "object-curly-spacing": ["error", "always"],
    "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
  },
}
