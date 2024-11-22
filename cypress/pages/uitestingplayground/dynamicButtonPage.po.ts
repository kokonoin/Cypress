/// <reference types="cypress" />
import { dynamicButtonPageSelectors } from '../uitestingplayground/selecors/dynamicPageSelectors'
import Page from '../page'

class DynamicButtonPage extends Page {
    public opendynamicButtonPage() {
        return super.openFirstResource('dynamicid')
    }

    public get dynamicButtonId() {
        return cy.get(dynamicButtonPageSelectors.dynamicButton)
    }

    getButtonID(): void {
        this.dynamicButtonId
        .should('have.text', dynamicButtonPageSelectors.dynamicButtonText)
        .invoke('attr', 'id')
        .should('exist')
    }
}

export default new DynamicButtonPage();