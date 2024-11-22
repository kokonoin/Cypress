/// <reference types="cypress" />
import DynamicButtonPage from '../../pages/uitestingplayground/dynamicButtonPage.po'

describe('first resource testing', () => {
    beforeEach(() => {
        DynamicButtonPage.opendynamicButtonPage();
    })

    it('Check dynamic ID in button', () => {
        DynamicButtonPage.getButtonID()
        cy.reload()
        DynamicButtonPage.getButtonID()
    })
})