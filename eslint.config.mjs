import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";
import perfectionist from 'eslint-plugin-perfectionist'
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  jsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  {
    ignores: ["eslint.config.mjs"],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: { perfectionist: perfectionist }
  },
  {
    rules: {
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
    },
  },
);
