module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    semi: [1, "always"],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
