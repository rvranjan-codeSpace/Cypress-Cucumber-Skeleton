const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        projectId: "7eo6dc",
        video: true,
        baseUrl: "http://www.amaon.com",
        env: {
            envName: 'prod'
        },
        setupNodeEvents(on, config) {

        },
    },
});