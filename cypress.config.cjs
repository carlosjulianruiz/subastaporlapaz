const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const port = process.env.PORT ?? "8811";

      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      return {
        ...config,
        baseUrl: `http://localhost:${port}`,
        screenshotOnRunFailure: !process.env.CI,
      };
    },
  },
});
