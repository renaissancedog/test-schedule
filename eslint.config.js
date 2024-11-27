import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        $: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
