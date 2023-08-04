/// <reference types="Cypress"/>

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('I open login page',() => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login',() => {
    cy.get('#user_login').type('Username')
    cy.get('#user_password').type('Password')
    cy.get('input[name="submit"]').click()
})

Then('I Failed to login',() => {
    cy.get('h3').should('have.text','Troubles entering the site?')
})

And('Should show an alert for a failed login', () => {
    cy.get('.alert-error').should('be.visible')
})