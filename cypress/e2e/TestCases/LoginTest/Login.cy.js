/// <reference types="Cypress"/>

import {
    loginPageActions
} from "../../PageObjects/PageActions/LoginAction/LoginPageActions.cy";


const Login_Credentials = new loginPageActions

describe('POM Login', function () {
    it('Login Page', function () {
        cy.viewport("macbook-13");
        cy.visit('https://aeventrevamp.vercel.app/login');
        cy.wait(2000);
        Login_Credentials.email('developer+2@aevent.com')
        Login_Credentials.password('password')
        Login_Credentials.CheckBox()
        Login_Credentials.LoginButton()

    })
})