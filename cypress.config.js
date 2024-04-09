const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1800,    // Ancho en píxeles
  viewportHeight: 1000,
  reporter: 'cypress-mochawesome-reporter',
  
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    
  },
});
