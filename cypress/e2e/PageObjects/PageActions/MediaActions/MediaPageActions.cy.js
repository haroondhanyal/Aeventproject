const MediaPAgeElementsLocators = require('../../PageElements/Media/MediaPageElements.json')
export class mediaPageActions {
    email(Email) {
        cy.get(MediaPAgeElementsLocators.MediaPageLocators.email_text).type(Email);
        return
    }
    passwords(Password) {
        cy.get(MediaPAgeElementsLocators.MediaPageLocators.passwords_text).type(Password);
        return

    }
    checkBox() {
        cy.get(MediaPAgeElementsLocators.MediaPageLocators.checkBox_text).check();
        return

    }
    loginButton() {
        cy.get(MediaPAgeElementsLocators.MediaPageLocators.loginButton_text).click();
        cy.wait(8000)
        return

    }
    dashboardClick() {
        cy.get(MediaPAgeElementsLocators.MediaPageLocators.dashboardClick_text).click();
        cy.wait(2000)
        return

    }
    selectMediaDashboard() {
        cy.get(MediaPAgeElementsLocators.MediaPageLocators.selectMediaDashboard_text).click();
        cy.wait(2000)
        return

    }
    uploadMediaButton() {
        cy.get(MediaPAgeElementsLocators.MediaPageLocators.uploadMediaButton_text).click();
        cy.wait(2000)
        return

    }

    uploadMediaFile() {
        const filePath = '/Users/sofiakaif/Desktop/Alpha Squad Projects/AEvent/cypress/fixtures/screenshot.png'
        cy.get(MediaPAgeElementsLocators.MediaPageLocators.uploadMediaFile_text).click();
        cy.get('.custom-file-input').attachFile(filePath);
        cy.wait(2000)
        return


    }



}