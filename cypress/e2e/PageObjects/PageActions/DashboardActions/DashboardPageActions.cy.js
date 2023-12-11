const DashboardPageElementsLocator = require('../../PageElements/Dashboard/DashboardPageElements.json')

export class dashboardPageActions {

    showfulldashboard() {
        console.log('Before cy.get()');
        cy.get(DashboardPageElementsLocator.DashboardPageLoctors.showfulldashboard_text).should('be.visible').click();
        console.log('After cy.get()');
        cy.wait(3000);
        return

    }

    leads() {
        cy.get(DashboardPageElementsLocator.DashboardPageLoctors.leads_text).click();
        cy.wait(2000);
        return

    }
}