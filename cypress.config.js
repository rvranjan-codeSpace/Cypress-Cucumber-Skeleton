const { defineConfig } = require("cypress");
//the below reqire is required for cucumber implemeantation
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    projectId: "7eo6dc",
    video: true,
    baseUrl: "http://www.amazon.com",
    supportFile: false,
    env: {
      envName: 'prod'
    },
    async setupNodeEvents(on, config) {
      // 2.the below is required so that cypress chooses feature files ano not *test.cy.js
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    //3. the below spec pattern is required for cypress feature file to get excuted
    specPattern: "cypress/e2e/features/*.feature"
  },
});

