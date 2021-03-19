/// <reference types="cypress" />

context('search artist of brazilian rap', () => {

    it('sabotage', () => {
        cy.visit('https://google.com.br')
        cy.get('.gLFyf').type('Sabotage').type('{enter}')
        cy.get('bla').should('have.text', 'bla')
        
    })

    it('snj', () => {
        cy.visit('https://google.com.br')
        cy.get('.gLFyf').type('Snj').type('{enter}')
    })

})
