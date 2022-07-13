module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    service: true,
    message: true,
  },
  extends: [
    './.eslintrc-auto-import.json',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: false },
    ],
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
