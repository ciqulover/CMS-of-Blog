module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'html'
  ],
  extends: 'standard',
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-return-assign': 0,
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    'no-multi-spaces': 0,
    'no-extend-native': 1
  }
}
