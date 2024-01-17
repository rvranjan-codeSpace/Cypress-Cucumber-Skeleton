/// <reference types= "cypress"/>

import { LoginPageAction } from '../../PageOobjects/PageActions/LoginPageAction';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let login_import = new LoginPageAction();
Given("I am on Orange HRM login page", function () {
    cy.log("I am in given")
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

});
When("I enter the user name and password and click on login", function () {
    cy.log("I am in When")

    login_import.doLogin()
});
Then("I am redirected to Orange HRM home page", function () {

});

Given("User enters the following incorrect details", function (dataTable) {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.log(dataTable.hashes())
});

Given(`user clicks on the Login button`, () => {
    login_import.clickonLoginButton()
});

Then(`{string} is displayed on the screen`, (expectedHeading) => {
    cy.log("expectedHeading=" + expectedHeading)
});

