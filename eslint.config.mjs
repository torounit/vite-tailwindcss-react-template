import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import globals from "globals";
import eslintPluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  perfectionist.configs["recommended-natural"],
  jsxA11y.flatConfigs.recommended,
  eslintPluginReact.configs.flat.recommended,
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
  eslintConfigPrettier,
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
    rules: {
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
);
