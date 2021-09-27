/// <reference types="cypress" />
import MainPage from '../pages/main_page'

const mainpage = new MainPage()

describe('Check the main page of dou site', () => {
    beforeEach(() => {
        cy.visit('https://dou.ua')
    })

    it.skip('Check the header elements of main page', () => {
        cy.get('li.logo').should('be.visible')

    })
    it('check the search input', () =>{
        mainpage.searchInputFieldInHeader().should('be.visible');
    })
})