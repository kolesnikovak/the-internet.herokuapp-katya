import { expect, Locator, Page, test } from '@playwright/test'
export class HomePage {
    forgotPasswordLink: Locator
    title: Locator;
    dropdown: Locator;
    checkboxes: Locator;

    constructor(page: Page) {
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' })
        this.title = page.getByRole('heading', { name: 'Welcome to the-internet' })
        this.dropdown = page.getByRole('link', { name: 'Dropdown' })
        this.checkboxes = page.getByRole('link', { name: 'Checkboxes' })
    }
    async clickingForgotPassword(): Promise<void> {
        await this.forgotPasswordLink.click()
    }
    async clickOnDropdown(): Promise<void> {
        await this.dropdown.click();
    }

    async clickingOnCheckBoxesLink(): Promise<void> {
        await this.checkboxes.click();
    }
}