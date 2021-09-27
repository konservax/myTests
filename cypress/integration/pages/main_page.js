class MainPage {
    searchInputFieldInHeader() {
        return cy.get('input#txtGlobalSearch')
    }

    inputForLogin() {
        return cy.get('#mat-input-0')
    }

    inputForPass() {
        return cy.get('#mat-input-1')
    }

    linkToSalaryPage() {
        return cy.get('https://jobs.dou.ua/salaries')
    }

    buttonEnterInCabinet() {
        return cy.get('span.mat-button-wrapper')
    }
}

export default MainPage