module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/named': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
  },
};
