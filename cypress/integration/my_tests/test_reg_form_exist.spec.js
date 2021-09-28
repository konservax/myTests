import LoginPage from "../pages/login_page";

const registrationPage = new LoginPage()

describe('Check registration exist', () =>{
    before(() =>{
        cy.visit('https://my.epicentrk.ua/registration')
    })

    it('check email field exist', () =>{
        registrationPage.emailFieldForReg().should('be.visible')
    })

    it('check pass field exist', () =>{
        registrationPage.passFieldForReg().should('be.visible')
    })

    it('check img for registration Page', () =>{
        registrationPage.checkboxForRegistrationPage().should('be.visible')
    })
})