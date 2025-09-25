import { expect, Locator, Page } from '@playwright/test'

export class TyposPage {
    typosMainText: Locator

    constructor(page: Page) {
        this.typosMainText = page.locator('getByText("Sometimes you\'ll see a typo,")')
    }

    async validateTyposMainText(expectedText: string): Promise<void> {
        await expect(this.typosMainText).toHaveText(expectedText)
    }
}