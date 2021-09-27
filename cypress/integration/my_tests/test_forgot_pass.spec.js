import LoginPage from "../pages/login_page";

const loginPage = new LoginPage()

describe('Check Pass recovery flow', () =>{
    before(() =>{
        cy.visit('https://my.epicentrk.ua/login')
    })

    it('clicks on button Forgot pass?', () =>{
        loginPage.forgotPassBtn().click()
    })

    it('typing email into email field', () =>{
        loginPage.emailFieldForRecoveryPass()
        .type('simpleexample1995+020@gmail.com')
        .should('have.value', 'simpleexample1995+020@gmail.com')
    })

    it('clicks on confirm button to send Email', () =>{
        loginPage.buttonRecoverPass().click()
    })

    it('check if correct img displayed for passRecovery page', () =>{
        loginPage.imgPassResent().should('be.visible')
    })
})