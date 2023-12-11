/// <reference types="Cypress"/>

import {
    imagesPageActions,

} from "../../PageObjects/PageActions/MediaActions/ImagesMediaPageActions.cy";


const Images_Credentials = new imagesPageActions

describe('Aevent Login', function () {
    it('Login Page', function () {
        cy.viewport("macbook-13");
        cy.visit('https://app.aevent.com/?v=1#/login');
        cy.wait(2000);
        Images_Credentials.email('developer@aevent.com')
        Images_Credentials.passwords('asd~123')
        Images_Credentials.checkBox()
        Images_Credentials.loginButton()

        Images_Credentials.dashboardClick()
        Images_Credentials.selectMediaDashboard({
            force: true
        })
        // Images_Credentials.uploadMediaButton({
        //     force: true
        // });
        // Images_Credentials.uploadMediaFile({
        //     force: true
        // });
        Images_Credentials.actionsBox({
            force: true
        });

        Images_Credentials.renameTextField('updatebytester', {
            force: true
        });


        Images_Credentials.renameButton({
            force: true
        });
        Images_Credentials.gridViewImages({
            force: true
        })


    })
})