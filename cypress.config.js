const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://coconela.cl",
    watchForFileChanges:false,
    chromeWebSecurity:false, //error cors
    env:{
      "VAR_ENV_FILE_CONFIG":"variable desde archivo config"
    }
  },
});
