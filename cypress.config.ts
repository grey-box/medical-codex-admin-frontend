import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, config) {
      // implement node event listeners here
      // We've replaced 'on' with '_on' to indicate it's intentionally unused
      return config;
    },
  },
});