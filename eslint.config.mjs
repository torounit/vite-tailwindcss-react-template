import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  {
    ignores: ["eslint.config.mjs"],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
);
