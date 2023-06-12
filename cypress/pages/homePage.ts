class home {
    elements = {
        austinLink: () => cy.contains("Austin")
    }

    goToAustinOffice () {
        this.elements.austinLink().click({force: true})
    }

    
}

export const homePage = new home();