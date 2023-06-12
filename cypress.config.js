const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  failOnStatusCode: false,
  experimentalSessionAndOrigin: true,
  viewportWidth: 1980,
  viewportHeight: 1080,
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    env: {
      baseUrl: 'https://demo.casino'}
  },
})
