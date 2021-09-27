import MainPage from '../pages/main_page';

const loginpage = new MainPage()

describe('Login to cabinet with correct creds', () =>{
    before(() =>{
        cy.visit('https://my.epicentrk.ua/login')
    })

    it('input login', () =>{
        loginpage.inputForLogin().type('MYEMAIL') //HERE SHOULD BE VALID EMAIL
        .should('have.value', 'MYEMAIL') //HERE SHOULD BE VALID EMAIL
    })

    it('input pass', () =>{
        loginpage.inputForPass().type('PASS') //HERE SHOULD BE MY PASS
    })

    it('click on button Enter', () =>{
        loginpage.buttonEnterInCabinet().click()
    })
})
