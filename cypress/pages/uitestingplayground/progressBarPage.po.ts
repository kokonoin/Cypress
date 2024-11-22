/// <reference types="cypress"/>

import 'cypress-wait-until'
import { progressBarPageSelectors } from "./selecors/progressBarPageSelectors"
import Page from '../page'

class ProgressBarPage extends Page {
    public openProgressBarPage() {
        return super.openFirstResource('progressbar')
    }

    public get startButton() {
        return cy.get(progressBarPageSelectors.startButton)
    }

    public get stopButton() {
        return cy.get(progressBarPageSelectors.stopButton)
    }

    public get progressBar() {
        return cy.get(progressBarPageSelectors.progressBar)
    }

    clickStartButton(): void {
        this.startButton.click()
    }

    clickStopButton(): void {
        this.stopButton.click()
    }

    checkProgressBar(): void {
        this.clickStartButton()
        cy.waitUntil(() => {
            return this.progressBar.then(($bar) => {
                const percent = $bar.attr('aria-valuenow');
    
                if (percent === '75') {
                    return true;
                }
                return false;
            });
        }, {
            timeout: 20000,
            interval: 100,
        });
        this.clickStopButton();
        this.progressBar.should('have.attr', 'aria-valuenow', '75')
    }
}

export default new ProgressBarPage();