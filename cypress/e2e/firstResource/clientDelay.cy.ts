/// <reference types="cypress"/>

import ClientDelayPage from "../../pages/uitestingplayground/clientDelayPage.po";

describe('Calculate client delay', () => {
    beforeEach(() => {
        ClientDelayPage.openClientDelayPage()
    })

    it('Calculate delay time', () => {
        ClientDelayPage.clickDilayTriggerButton()
        ClientDelayPage.calculateClientDelayTime()
    })
})