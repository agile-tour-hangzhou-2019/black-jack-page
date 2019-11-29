import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const url = "/"

When('I open game hall page', () => {
    cy.visit(url)
})

Then(`I can see text {string}`, (text) => {
    cy.get('#app').should('contain', text);
})

When(`I start game`, (text) => {
    cy.get('button').contains('Start').click();
})

Given(`server response data {string} {string}`, (url, json) => {
    cy.fixture('dynamic').then((data) => {
        cy.server()
        data = json;
        cy.route('GET', url, data);
    });
})

Then(`I can see {string} button`, (text) => {
    cy.get('button').contains(text).should('exist');
})

Then(`I can see cards {string}`, (text) => {
    cy.get('.card').should( ($card) => {
       expect($card.text()).to.deep.eq(text);
    });
})
