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

    emailFieldForReg() {
        return cy.get('#mat-input-0')
    }

    passFieldForReg() {
        return cy.get('#mat-input-1')
    }

    checkboxForRegistrationPage() {
        return cy.get('#mat-checkbox-1-input')
    }

}

export default LoginPage