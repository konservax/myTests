class LoginPage {
    forgotPassBtn() {
        return cy.get('a.forgot-password ') 
    }

    emailFieldForRecoveryPass() {
        return cy.get('#mat-input-2')
    }

    buttonRecoverPass() {
        return cy.get('span.mat-button-wrapper')
    }

    imgPassResent() {
        return cy.get('h2.title')
    }

}

export default LoginPage