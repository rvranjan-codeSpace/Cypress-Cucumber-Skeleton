///<reference types = "Cypress"/>
const LoginElements = require("../PageElements/LoginPageElements.json")

export class LoginPageAction {

    doLogin = () => {
        this.enterUsername()
        this.enterPassword()
        this.clickonLoginButton()
    }

    doLoginIncorrect = (userName, password) => {
        cy.get(LoginElements.LoginPageLocators.username_text).type(userName)
        cy.get(LoginElements.LoginPageLocators.password_text).type(password), { log: false };
        cy.get(LoginElements.LoginPageLocators.login_btn).click()
    }

    clickonLoginButton = () => cy.get(LoginElements.LoginPageLocators.login_btn).click()
    enterUsername = () => cy.get(LoginElements.LoginPageLocators.username_text).type(Cypress.env('username'))
    enterPassword = () => cy.get(LoginElements.LoginPageLocators.password_text).type(Cypress.env('password'), { log: false });


}

