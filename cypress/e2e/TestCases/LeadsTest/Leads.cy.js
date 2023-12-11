/// <reference types="Cypress"/>

import {
    leadsPageActions
} from "../../PageObjects/PageActions/LeadsActions/LeadsPageActions.cy";



const Leads_PageActions = new leadsPageActions
describe('Leads Action Performed', function () {


    it('Leads Page Actions', function () {
        cy.viewport("macbook-13");

        cy.visit('https://aeventrevamp.vercel.app/login');

        cy.wait(4000);
        cy.get(':nth-child(1) > .flex-col > .rounded-md').type('developer+2@aevent.com', {
            force: true
        });
        cy.get('.relative > .px-4').type('password', {
            force: true
        });
        cy.get('.justify-between > div.flex > .flex > input').check({
            force: true
        });
        cy.get('.opacity-100').click({
            force: true
        });
        cy.wait(8000);
        cy.get('.absolute > .transition-all').click();
        cy.wait(3000);
        cy.get(':nth-child(5) > .gap-2').click();

        // cy.get('.table').should('be.visible');
        cy.wait(2000);
        // Leads Credentials
        Leads_PageActions.banAction({
            force: true
        })
        Leads_PageActions.banButton({
            force: true
        })
        Leads_PageActions.actionBan2({
            force: true
        })
        Leads_PageActions.cancelButton({
            force: true
        })
        cy.wait(3000)
        Leads_PageActions.banEmailButton({
            force: true
        })
        cy.wait(3000)
        Leads_PageActions.banButtonSearchField('test@example.com')
        cy.wait(1000)
        Leads_PageActions.banButtonOFMainBan({
            force: true
        })
        cy.wait(1000)



        Leads_PageActions.actionDelete({
            force: true
        })
        Leads_PageActions.popupDelete({
            force: true
        })

        Leads_PageActions.searchButton('developer+1685123630@aevent.com')
        cy.debug();
        cy.wait(4000)
        Leads_PageActions.clearSearchField({
            force: true
        })
        Leads_PageActions.checkFieldEmpty({
            force: true
        })


        cy.url().should('include', '/leads');

    })
})