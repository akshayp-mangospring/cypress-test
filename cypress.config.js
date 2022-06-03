const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    // Change this URL when we want to switch our domain of testing
    baseUrl: 'https://riadomain.mangopulse.com',
    env: {
      qa: {
        user_email: 'admin@riadomain.com',
        user_pass: 'Mango@123',
      },
      google: {
        query: 'Hello World!',
      }
    },
  },
});
