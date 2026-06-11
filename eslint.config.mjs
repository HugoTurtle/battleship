import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
]);
