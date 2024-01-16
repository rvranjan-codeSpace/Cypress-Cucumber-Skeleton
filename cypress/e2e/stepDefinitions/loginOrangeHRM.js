/// <reference types= "cypress"/>

import { LoginPageAction } from '../../PageOobjects/PageActions/LoginPageAction';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on Orange HRM login page", function () {
    cy.log("I am in given")
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

});
When("I enter the user name and password and click on login", function () {
    cy.log("I am in When")
    let login_import = new LoginPageAction();
    login_import.doLogin()
});
Then("I am redirected to Orange HRM home page", function () {

});