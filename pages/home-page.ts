import { expect, Locator, Page } from '@playwright/test'

export class HomePage {

    welcomeTitle : Locator
   
    constructor(page: Page) {
        
    }

    async validateTitleMessage(expectedTitleMessage: string): Promise<void> {
        
    }
}