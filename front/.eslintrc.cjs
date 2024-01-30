module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:preact/recommended"],
  plugins: ["preact"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Add your custom rules here
    // For example:
    // 'preact/jsx-uses-vars': 'error',
    // 'preact/jsx-uses-react': 'error',
    //
  "no-unused-vars": ["error", { varsIgnorePattern: "React" }],
  },

};
