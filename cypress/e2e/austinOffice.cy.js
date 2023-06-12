import { homePage } from "../pages/homePage";
import { austinPage } from "../pages/austinPage"

describe ("Navidate to Austin Office", () => {
    before(() => {
        cy.visit("https://inhouse.decemberlabs.com/")
        //Verify URL and title
        cy.url().should('eq', 'https://inhouse.decemberlabs.com/');
        cy.title().should('eq', 'December Labs: UX/UI Design and Mobile App & Web Development');
    })

    it("Austin Office verification", () => {
        //Go to Austin Office page
        homePage.goToAustinOffice()

        //Verify title and URL
        cy.url().should('eq', 'https://inhouse.decemberlabs.com/locations/austin/');
        cy.title().should('eq', 'Austin Web & App Developers | December Labs');

        //Open Schedule free consultation
        austinPage.openSchedulePopUp()

        //Verify calendar in popup
        cy.get('.start-project-form > div > iframe').eq(0).should("be.visible")
        //Close popup
        cy.get(".dl-modal-content").eq(0).within((el)=> {
            cy.get(el).find(".btn-close-modal").click()
        }).then(() => {
            cy.get(".dl-modal-content").should("not.be.visible")
        })

    })
})
