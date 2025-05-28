import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8811",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents() {
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
