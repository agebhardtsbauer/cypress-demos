const {defineConfig} = require('cypress');

module.exports = defineConfig({
  baseUrl: 'https://www.saucedemo.com/',
  projectId: 'testers',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
