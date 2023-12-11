/// <reference types="Cypress"/>

import {
    dashboardPageActions
}
from "../../PageObjects/PageActions/DashboardActions/DashboardPageActions.cy";


const Dashboard_Credentials = new dashboardPageActions
describe('Dashboard', function () {


    it('Dashboard and Leads', function () {
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
        //// Dashboard Credentials
        Dashboard_Credentials.showfulldashboard()
        Dashboard_Credentials.leads()
        cy.url().should('include', '/leads');

    })
})