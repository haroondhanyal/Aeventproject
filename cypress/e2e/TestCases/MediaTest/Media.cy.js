/// <reference types="Cypress"/>

import {
    mediaPageActions
} from "../../PageObjects/PageActions/MediaActions/MediaPageActions.cy";





const Meida_Credentials = new mediaPageActions

describe('Aevent Login', function () {
    it('Login Page', function () {
        cy.viewport("macbook-13");
        cy.visit('https://app.aevent.com/?v=1#/login');
        cy.wait(2000);
        Meida_Credentials.email('developer@aevent.com')
        Meida_Credentials.passwords('asd~123')
        Meida_Credentials.checkBox()
        Meida_Credentials.loginButton()

        Meida_Credentials.dashboardClick({
            force: true
        })
        Meida_Credentials.selectMediaDashboard({
            force: true
        })
        Meida_Credentials.uploadMediaButton({
            force: true
        })
        const filePath = 'cypress/fixtures/screenshot.png';
        const cssSelector = '.custom-file-input'; // Your CSS selector here
        Meida_Credentials.uploadMediaFile(cssSelector, filePath);


    })
})