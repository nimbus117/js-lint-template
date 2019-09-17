module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:angular/johnpapa',
    'plugin:node/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react', 'angular', 'node'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': ['off']
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    Object.assign(
      {
        files: ['**/*.test.js'],
        env: { jest: true },
        plugins: ['jest']
      },
      require('eslint-plugin-jest').configs.recommended
    )
  ]
};
