import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    chromeWebSecurity: true,
    experimentalWebKitSupport: true,
    specPattern: "cypress/e2e/**/*.js",
    experimentalRunAllSpecs: true,
    video:false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
