/// <reference types="cypress"/>
import ProgressBarPage from '../../pages/uitestingplayground/progressBarPage.po'

describe('Progress bar testting', () => {
    beforeEach(() => {
        ProgressBarPage.openProgressBarPage()
    })

    it('Check progress bar in 75% percent', () => {
      ProgressBarPage.checkProgressBar()
    })
})