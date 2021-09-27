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
        .type('MYEMAIL') //HERE SHOULD BE VALID EMAIL
        .should('have.value', 'MYEMAIL') //HERE SHOULD BE VALID EMAIL
    })

    it('clicks on confirm button to send Email', () =>{
        loginPage.buttonRecoverPass().click()
    })

    it('check if correct img displayed for passRecovery page', () =>{
        loginPage.imgPassResent().should('be.visible')
    })
})