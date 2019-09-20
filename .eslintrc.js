module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:angular/johnpapa',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
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
    // sourceType: 'script'
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
