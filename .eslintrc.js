module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended', // ESLint 推荐规则
    'plugin:prettier/recommended', // 集成 Prettier
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Prettier 问题作为错误显示
    'no-unused-vars': 'warn', // 示例规则，可自定义
  },
};
