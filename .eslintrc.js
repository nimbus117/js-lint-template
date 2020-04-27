module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'airbnb',
    'plugin:angular/johnpapa',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    angular: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
    // sourceType: 'script'
  },
  plugins: ['prettier', 'react', 'angular', 'node', '@typescript-eslint', 'react'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx']  }],
    "node/no-extraneous-require": ["error", {
      "allowModules": ["aws-sdk"]
    }],
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
