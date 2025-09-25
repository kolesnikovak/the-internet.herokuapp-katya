import { expect, Locator, Page, test } from '@playwright/test'
export class CheckBoxesPage {

    checkbox1: Locator
    checkbox2: Locator

    constructor(page: Page) {
        this.checkbox1 = page.getByRole('checkbox').first()
        this.checkbox2 = page.getByRole('checkbox').nth(1)
    }
 
    
    async validateCheckbox1IsNotChecked(): Promise<void> {
        await expect(this.checkbox1).not.toBeChecked()
    }
    async validateCheckbox2IsChecked(): Promise<void> {
        await expect(this.checkbox2).toBeChecked()
    }

    async clickOnCheckbox1(): Promise<void> {
        await this.checkbox1.click()
    }


}