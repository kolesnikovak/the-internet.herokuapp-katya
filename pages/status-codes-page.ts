import { expect, Locator, Page } from '@playwright/test'

export class StatusCodesPage {

    statusCodesButton : Locator
    code202Button : Locator
    code301Button : Locator
    code404Button : Locator
    code500Button : Locator 

   
    constructor(page: Page) {
        this.statusCodesButton = page.locator('a[href="/status_codes"]')
        this.code202Button = page.locator('a[href="/status_codes/202"]')
        this.code301Button = page.locator('a[href="/status_codes/301"]')
        this.code404Button = page.locator('a[href="/status_codes/404"]')
        this.code500Button = page.locator('a[href="/status_codes/500"]')
       
    }

    async verifyHTTPResponse(): Promise<void> {
        await this.statusCodesButton.click()
        
    }

}