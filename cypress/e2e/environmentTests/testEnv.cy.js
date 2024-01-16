const path = require('path');
require("dotenv").config({ path: path.resolve('__dirname', '../../.env') })

describe('Test the env', () => {
    it('Visit the application based on the config file', () => {
        console.log(process.env.LOGIN_ORANGE_HRM)
        // visit is coming from the config file prodConfig.js or stageConfig.js or cypress.config.js
        cy.visit('')
        cy.log(Cypress.env('username'))
        cy.log(path.resolve('__dirname', '../.env'))
        cy.log(process.env.LOGIN_ORANGE_HR || 'abc')

        //using fixures for username
        // this is not the best way
        cy.fixture("orangehrm").then((data) => {
            cy.log(data.username)
        })
    })

})