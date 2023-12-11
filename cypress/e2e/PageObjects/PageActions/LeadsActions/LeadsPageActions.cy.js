const LeadsPageElementsLocator = require('../../PageElements/Leads/LeadsPageElements.json')

export class leadsPageActions {
    banAction() {

        cy.get(LeadsPageElementsLocator.LeadsPageLocators.banAction_text).click()

        return
    }
    banButton() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.banButton_text).click()
        return
    }


    actionBan2() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.actionBan2_text).click()

        return
    }
    cancelButton() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.cancelButton_text).click()

        return
    }
    banEmailButton() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.banEmailButton_text).click()
        return
    }
    banButtonSearchField(provideEmail) {

        cy.get(LeadsPageElementsLocator.LeadsPageLocators.banButtonSearchField_text).type(provideEmail)
        return
    }
    banButtonOFMainBan() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.banButtonOFMainBan_text).click()
        return
    }
    actionDelete() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.actionDelete_text).click()
        return
    }
    popupDelete() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.popupDelete_text).click()

        return
    }
    // searchButton(searchEmail) {
    //     cy.get(LeadsPageElementsLocator.LeadsPageLocators.searchButton_text).should('contain', 'test@example.com').type(searchEmail)
    //     return
    // }

    searchButton(searchEmail) {
        const searchInput = cy.get(LeadsPageElementsLocator.LeadsPageLocators.searchButton_text);

        searchInput.should('be.visible').type(searchEmail);

        // Adding a small delay to allow the application to process the input
        cy.wait(3000);

        // Log the input value for debugging
        cy.log('Search input value:', searchEmail);

        // Trigger the search action, such as pressing Enter key
        searchInput.type('{enter}');

        // Optionally, you can log or assert the search results here if applicable

        return;
    }

    /////Search Fields

    clearSearchField() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.clearSearchField_text).clear();
        cy.wait(2000)
        return
    }
    checkFieldEmpty() {
        cy.get(LeadsPageElementsLocator.LeadsPageLocators.checkFieldEmpty_text).should('have.value', '');
        return
    }



}