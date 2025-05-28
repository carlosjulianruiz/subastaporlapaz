import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(_on, _config) {
      // Puedes agregar tareas si es necesario
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
