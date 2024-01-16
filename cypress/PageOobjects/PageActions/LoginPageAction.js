///<reference types = "Cypress"/>
const LoginElements = require("../PageElements/LoginPageElements.json")

export class LoginPageAction {

    doLogin = () => {
        cy.get(LoginElements.LoginPageLocators.username_text).type(Cypress.env('username'))
        cy.get(LoginElements.LoginPageLocators.password_text).type(Cypress.env('password'), { log: false });
        cy.get(LoginElements.LoginPageLocators.login_btn).click()
    }


}

