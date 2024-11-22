/// <reference types="cypress"/>

import 'cypress-wait-until'
import { clientDelayPageSelectors } from "./selecors/clientDelayPageSelectors"
import Page from '../page'

class ClientDelayPage extends Page {

    public openClientDelayPage() {
        return super.openFirstResource('clientdelay')
    }

    public get clientDelayTriggerButton() {
        return cy.get(clientDelayPageSelectors.clientSlideButton)
    }

    public get loadingIndicator() {
        return cy.get(clientDelayPageSelectors.loadingSpiner)
    }

    public get clientDelayMessages() {
        return cy.get(clientDelayPageSelectors.clientDelayMessage)
    }

    clickDilayTriggerButton(): void {
        this.clientDelayTriggerButton.click()
    }

    calculateClientDelayTime(): void {
        let startTime: number = 0
        let endTime: number = 0
        let delayTime: number = 0
    
        this.loadingIndicator.should('be.visible')
    
        cy.then(() => {
            startTime = Date.now()
            cy.log(`Start time: ${startTime}`)
        });
        
        cy.waitUntil(() => {
            return this.clientDelayMessages.should('be.visible');
        }, {
            timeout: 20000,
            interval: 100,
        });
    
        cy.then(() => {
            endTime = Date.now()
            cy.log(`End time: ${endTime}`)

            delayTime = (endTime - startTime) / 1000
            cy.log(`Client delay time: ${delayTime} seconds`)
        })
    }
}

export default new ClientDelayPage();