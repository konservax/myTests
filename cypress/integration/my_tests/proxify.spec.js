/// <reference types="cypress" />

describe('Check the main page of epicentr site', () => {
    beforeEach(() => {
        cy.visit('https://proxify.io/')
    })

    it.skip('Check the header elements of main page', () => {
        cy.get('Виберіть регіон і ваш магазин').should('be.visible')

    })
    it('check logo proxify', () =>{
        cy.get('div.logo').should('be.visible')
    })
})