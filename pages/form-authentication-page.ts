import { expect, Locator, Page, test } from '@playwright/test'
export class FormAuthenticationPage {

   private usernameField: Locator
   private passwordField: Locator
   private loginButton: Locator
   private logoutButton: Locator
   private greenBannerLoginMessage: Locator
   private greenBannerLogoutMessage: Locator

    constructor(page: Page) {
        this.usernameField = page.getByRole('textbox', { name: 'Username' })
        this.passwordField = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.logoutButton = page.getByRole('link', { name: 'Logout' })
        this.greenBannerLoginMessage = page.getByText('You logged into a secure area')
        this.greenBannerLogoutMessage = page.getByText('You logged out of the secure')
    }

    async loginFunction(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }

    async validateSuccessfulLoginMessage(): Promise<void> {
        await expect(this.greenBannerLoginMessage).toBeVisible()
    }
    async clickOnLogoutButton(): Promise<void> {
        await this.logoutButton.click()
    }
    async validateSuccessfulLogoutMessage(): Promise<void> {
        await expect(this.greenBannerLogoutMessage).toBeVisible()
    }

}