import { expect, Locator, Page } from '@playwright/test'
export class ForgotPasswordPage {

    emailField: Locator
    retrievePasswordButton: Locator
    internalServerErrorMessage: Locator

    constructor(page: Page) {
        
        this.emailField = page.getByRole('textbox', { name: 'E-mail' })
        this.retrievePasswordButton = page.getByRole('button', { name: 'Retrieve password' })
        this.internalServerErrorMessage = page.locator('h1')

    }

   async retrievePasswordFunction(email: string): Promise<void> {
       await this.emailField.fill(email)
       await this.retrievePasswordButton.click()
   }
}