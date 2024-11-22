/// <reference types = "cypress" />

export default class Page {

    public openFirstResource(path: string) {
        return cy.visit(`http://uitestingplayground.com/${path}`)
    }

    public openSecondResource(path: string) {
        return cy.visit(`https://demoqa.com/${path}`)
    }
}