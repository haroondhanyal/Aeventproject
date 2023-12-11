// import {
//     expect
// } from 'chai';
const ImagePageElementsLocators = require('../../PageElements/Media/ImagesMediaPageElements.json')
export class imagesPageActions {
    email(Email) {
        cy.get(ImagePageElementsLocators.ImagesPageLocators.email_text).type(Email);
        return
    }
    passwords(Password) {
        cy.get(ImagePageElementsLocators.ImagesPageLocators.passwords_text).type(Password);
        return

    }
    checkBox() {
        cy.get(ImagePageElementsLocators.ImagesPageLocators.checkBox_text).check();
        return

    }
    loginButton() {
        cy.get(ImagePageElementsLocators.ImagesPageLocators.loginButton_text).click();
        cy.wait(8000)
        return

    }
    dashboardClick() {
        cy.get(ImagePageElementsLocators.ImagesPageLocators.dashboardClick_text).click();
        cy.wait(2000)
        return

    }
    selectMediaDashboard() {
        cy.get(ImagePageElementsLocators.ImagesPageLocators.selectMediaDashboard_text).click();
        cy.wait(4000)
        return

    }
    // uploadMediaButton() {
    //     cy.get(ImagePageElementsLocators.ImagesPageLocators.uploadMediaButton_text).click();
    //     cy.wait(2000)
    //     return

    // }

    // uploadMediaFile() {

    //     const filepath = 'images.jpg'; // file name only from fixturea
    //     cy.get(ImagePageElementsLocators.ImagesPageLocators.uploadMediaFile_text).attachFile(filepath);

    //     // Add your assertions or further actions here
    //     // expect(true).to.be.true;
    //     // expect(cy.get('.custom-file-input').should('be.visible')).to.be.true;

    //     cy.wait(5000);


    // }
    // fileUploadButton() {
    //     cy.get(ImagePageElementsLocators.ImagesPageLocators.fileUploadButton_text).click()
    //     cy.wait(5000);
    //     const actionButtonSelector = '.text-neutral-600 > :nth-child(4) > .flex > :nth-child(1)';

    //     // Click the action button using its ID
    //     cy.get(actionButtonSelector).click();
    //     cy.wait(6000);

    // }

    ////

    actionsBox() {
        cy.get(ImagePageElementsLocators.ImagesPageLocators.actionsBox_text).click()
        cy.wait(2000);

    }

    renameTextField(renameText) {
        cy.get(ImagePageElementsLocators.ImagesPageLocators.renameTextField_text)
            .clear() // Clear the text field
            .type(renameText); // Type the new name
        cy.wait(2000);
    }
    // renameButton() {
    //     cy.get(ImagePageElementsLocators.ImagesPageLocators.renameButton_text).click()
    //     cy.wait(2000);

    // }
    renameButton() {
        const renameButtonSelector = ImagePageElementsLocators.ImagesPageLocators.renameButton_text;

        // Wait for the Rename button to be visible and clickable
        cy.get(renameButtonSelector).should('be.visible').should('be.enabled').click();

        // Wait for the page to stabilize
        cy.wait(3000);
    }

    gridViewImages() {
        cy.xpath('//*[name()="path" and contains(@d, "M17 18.5C1")]').should('be.visible').scrollIntoView()
            .should('be.clickable').click({
                force: true
            })
        cy.wait(3000);

    }


}