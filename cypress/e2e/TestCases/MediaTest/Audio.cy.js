/// <reference types="Cypress"/>



const Audio_Credentials = new imagesPageActions

describe('Aevent Login', function () {
    it('Login Page', function () {
        cy.viewport("macbook-13");
        cy.visit('https://app.aevent.com/?v=1#/login');
        cy.wait(2000);
        Audio_Credentials.email('developer@aevent.com')
        Audio_Credentials.passwords('asd~123')
        Audio_Credentials.checkBox()
        Audio_Credentials.loginButton()

        Audio_Credentials.dashboardClick()
        Audio_Credentials.selectMediaDashboard({
            force: true
        })
        // Audio_Credentials.uploadMediaButton({
        //     force: true
        // });
        // Audio_Credentials.uploadMediaFile({
        //     force: true
        // });
        Audio_Credentials.actionsBox({
            force: true
        });

        Audio_Credentials.renameTextField('updatebytester', {
            force: true
        });


        Audio_Credentials.renameButton({
            force: true
        });


    })
})