/// <reference types="Cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"; 

// ...
When('I view account summary', () => {
    cy.contains('Account Summary').click()
})

Then('I should see account summary', () => {
    cy.url().should('include', '/account-summary.html')
    cy.get('#account_summary_tab').should('be.visible')
})

When('I view account detail', () => {
    cy.contains('Account Activity').click()
})

Then('I should see account detail', () => {
    cy.url().should('include', '/account-activity.html')
    cy.get('#account_activity_tab').should('be.visible')
})

When('I view transactions', () => {
    cy.contains('Account Activity').click()
    cy.contains('Find Transactions').click()
})

Then('I should see transactions', () => {
    cy.url().should('include', '/find-transaction.html')
    cy.get('#find_transactions_tab').should('be.visible')
})
// ...
