const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      "VAR_ENV_FILE_CONFIG":"variable desde archivo config"
    }
  },
});
