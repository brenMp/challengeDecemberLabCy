class austin {
    elements = {
        scheduleBtn: () => cy.contains("Schedule free consultation"),
        popUpSchedule: () => cy.get(".flexbox  flexbox--column"),
        closePopUpBtn: () => cy.get(".btn-close-modal")
    }

    openSchedulePopUp () {
        this.elements.scheduleBtn().click()
    }
}

export const austinPage = new austin()