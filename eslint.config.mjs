import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";
// import parser from "@typescript-eslint/parser";
// import eslint from '@typescript-eslint/eslint-plugin';


export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
  },
  {
    rules: {
      semi: 'error',
      '@typescript-eslint/no-floating-promises': 'error',
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      }
    }
  }
);