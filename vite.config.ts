import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), stylelint()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
