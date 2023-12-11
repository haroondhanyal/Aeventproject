const LoginPageElementsLocators = require('../../PageElements/Login/LoginPageElements.json')

export class loginPageActions {

    email(emails) {
        cy.get(LoginPageElementsLocators.LoginPageLoctors.email_text).type(emails);
        return
    }
    password(passwords) {
        cy.get(LoginPageElementsLocators.LoginPageLoctors.password_text).type(passwords);
        return
    }
    CheckBox() {
        cy.get(LoginPageElementsLocators.LoginPageLoctors.CheckBox_text).check();
        return
    }
    LoginButton() {
        cy.get(LoginPageElementsLocators.LoginPageLoctors.LoginButton_text).click();
        cy.wait(8000);
        return
    }
}