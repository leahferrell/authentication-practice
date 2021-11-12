module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13
  },
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'no-tabs': 2,
    quotes: [
      'error',
      'single'
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    semi: [
      'error',
      'never'
    ]
  }
}
