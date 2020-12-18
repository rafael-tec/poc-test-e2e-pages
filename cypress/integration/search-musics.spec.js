/// <reference types="cypress" />

context('Search artist of brazilian rap', () => {

    it('Sabotage', () => {
        cy.visit('https://google.com.br')
        cy.get('.gLFyf').type('Sabotage').type('{enter}')
        cy.get('bla').should('have.text', 'bla')
    })

    it('Snj', () => {
        cy.visit('https://google.com.br')
        cy.get('.gLFyf').type('Snj').type('{enter}')
    })

})
