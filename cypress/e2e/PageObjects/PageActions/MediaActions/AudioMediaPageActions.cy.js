const AudioPageElementsLocators = require('../../PageElements/Media/AudioMediaPageElements.json')
export class AudioPageActions {
    email(Email) {
        cy.get(AudioPageElementsLocators.AudioPageLocators.email_text).type(Email);
        return
    }
    passwords(Password) {
        cy.get(AudioPageElementsLocators.AudioPageLocators.passwords_text).type(Password);
        return

    }
    checkBox() {
        cy.get(AudioPageElementsLocators.AudioPageLocators.checkBox_text).check();
        return

    }
    loginButton() {
        cy.get(AudioPageElementsLocators.AudioPageLocators.loginButton_text).click();
        cy.wait(8000)
        return

    }
    dashboardClick() {
        cy.get(AudioPageElementsLocators.AudioPageLocators.dashboardClick_text).click();
        cy.wait(2000)
        return

    }
    selectMediaDashboard() {
        cy.get(AudioPageElementsLocators.AudioPageLocators.selectMediaDashboard_text).click();
        cy.wait(4000)
        return

    }
    // uploadMediaButton() {
    //     cy.get(AudioPageElementsLocators.AudioPageLocators.uploadMediaButton_text).click();
    //     cy.wait(2000)
    //     return

    // }

    // uploadMediaFile() {

    //     const filepath = 'images.jpg'; // file name only from fixturea
    //     cy.get(AudioPageElementsLocators.AudioPageLocators.uploadMediaFile_text).attachFile(filepath);

    //     // Add your assertions or further actions here
    //     // expect(true).to.be.true;
    //     // expect(cy.get('.custom-file-input').should('be.visible')).to.be.true;

    //     cy.wait(5000);


    // }
    // fileUploadButton() {
    //     cy.get(AudioPageElementsLocators.AudioPageLocators.fileUploadButton_text).click()
    //     cy.wait(5000);
    //     const actionButtonSelector = '.text-neutral-600 > :nth-child(4) > .flex > :nth-child(1)';

    //     // Click the action button using its ID
    //     cy.get(actionButtonSelector).click();
    //     cy.wait(6000);

    // }

    ////

    actionsBox() {
        cy.get(AudioPageElementsLocators.AudioPageLocators.actionsBox_text).click()
        cy.wait(2000);

    }

    renameTextField(renameText) {
        cy.get(AudioPageElementsLocators.AudioPageLocators.renameTextField_text)
            .clear() // Clear the text field
            .type(renameText); // Type the new name
        cy.wait(2000);
    }
    // renameButton() {
    //     cy.get(AudioPageElementsLocators.AudioPageLocators.renameButton_text).click()
    //     cy.wait(2000);

    // }
    renameButton() {
        const renameButtonSelector = AudioPageElementsLocators.AudioPageLocators.renameButton_text;

        // Wait for the Rename button to be visible and clickable
        cy.get(renameButtonSelector).should('be.visible').should('be.enabled').click();

        // Wait for the page to stabilize
        cy.wait(2000);
    }


}