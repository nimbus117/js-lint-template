## Eslint / Prettier

Template/examples for editorconfig, eslint and prettier

### initialise
npm init
git init

### eslint, prettier and plugins to make eslint and prettier work together
npm install --save-dev prettier eslint eslint-config-prettier eslint-plugin-prettier

### for typescript
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

### optional plugins for node, angular, jest, etc
npm install --save-dev eslint-plugin-node eslint-plugin-angular eslint-plugin-jest eslint-plugin-react

### add prettier to create-react-app
npm install --save-dev prettier eslint-plugin-prettier

``` javascript
// eslintrc.js in root
module.exports = {
  extends: ['react-app'],
  plugins: ['prettier'],
  rules: {
  'prettier/prettier': 'warn',
  },
};
```

### support experimental js features
npm install --save-dev babel-eslint

### run eslint/prettier using git pre-commit hooks
npm install --save-dev lint-staged husky@^2.7.0

### editor setup
Install editorconfig, elsint and prettier pluggins for your editor

This was all tested using ALE in vim but should work with any text editor

vscode settings (untested)

"files.autoSave": "off",
"eslint.autoFixOnSave": false,
"editor.formatOnSave": false,
"[javascript]": {
  "eslint.autoFixOnSave": true
},
"[html]": {
  "editor.formatOnSave": true,
},
"[css]": {
  "editor.formatOnSave": true,
},
"[scss]": {
  "editor.formatOnSave": true,
},
