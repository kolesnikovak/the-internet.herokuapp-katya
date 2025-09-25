import { expect, Locator, Page } from '@playwright/test'

export class HomePage {

    pageTitle: Locator

    constructor(page: Page) {
        this.pageTitle = page.locator("getByRole('heading', { name: 'Welcome to the-internet' })")
    }

    async validateTitle(): Promise<void> {
        await expect(this.pageTitle).toHaveText('Welcome to the-internet')
    }
}