const os = require('os');

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb'],
  ignorePatterns: [
    'node_modules/',
    'build/',
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'jsx-a11y/anchor-is-valid': ['error', {
      aspects: ['noHref', 'invalidHref', 'preferButton'],
      components: ['Link'],
      specialLink: ['to', 'hrefLeft', 'hrefRight'],
    }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': ['error', {
      allow: ['warn', 'error', 'info'],
    }],
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx'],
    }],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': ['error', {
      assignment: true,
      declaration: true,
      return: true,
    }],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
  },
};
