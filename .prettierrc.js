module.exports = {
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  overrides: [
    {
      files: ['package.json'],
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
};
