const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Base URL for your application
    supportFile: "cypress/support/index.js", // Path to your support file
    fixturesFolder: "cypress/fixtures", // Directory for test fixtures
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Test file pattern
    screenshotsFolder: "cypress/screenshots", // Where to save screenshots
    videosFolder: "cypress/videos", // Where to save videos
    defaultCommandTimeout: 4000, // Timeout for commands (in milliseconds)
    pageLoadTimeout: 60000, // Timeout for page loads (in milliseconds)
  },
});