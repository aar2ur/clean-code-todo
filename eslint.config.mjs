import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
    ignores: ["node_modules/", ".github/"]
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        rules: {
            "no-var": "error",
            "prefer-const": "error",
            "no-console": "warn",
        },
    },
    {
        files: ["**/*.js"],
        languageOptions: { sourceType: "script" },
    },
]);
