module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb-typescript',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/semi': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
  },
}
