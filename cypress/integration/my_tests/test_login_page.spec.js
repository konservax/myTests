import MainPage from '../pages/main_page';

const loginpage = new MainPage()

describe('Login to cabinet with correct creds', () =>{
    before(() =>{
        cy.visit('https://my.epicentrk.ua/login')
    })

    it('input login', () =>{
        loginpage.inputForLogin().type('simpleexample1995+020@gmail.com')
        .should('have.value', 'simpleexample1995+020@gmail.com')
    })

    it('input pass', () =>{
        loginpage.inputForPass().type('123456')
    })

    it('click on button Enter', () =>{
        loginpage.buttonEnterInCabinet().click()
    })
})
