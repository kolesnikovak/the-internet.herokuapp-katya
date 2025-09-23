import { expect, Locator, Page } from '@playwright/test'

export class HomePage {

    welcomeTitle : Locator
   
    constructor(page: Page) {
        this.welcomeTitle = page.locator('h1[class="hero-title "] span')
    }

    async validateTitleMessage(expectedTitleMessage: string): Promise<void> {
        await expect(this.welcomeTitle).toHaveText(expectedTitleMessage)
    }
}