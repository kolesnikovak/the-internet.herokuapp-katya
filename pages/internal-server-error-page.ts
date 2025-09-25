import { expect, Locator, Page, test } from '@playwright/test'
export class InternalServerErrorPage {
    internalServerErrorMessage: Locator
    constructor(page: Page) {
        this.internalServerErrorMessage = page.locator('h1')
    }
      async getInternalServerErrorMessage(): Promise<void> {
       await expect(this.internalServerErrorMessage).toHaveText('Internal Server Error')
   }
}