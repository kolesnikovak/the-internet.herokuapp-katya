import { expect, Locator, Page } from '@playwright/test'
export class NotificationMessagePage{

        notificationMessagesLink: Locator
        clickHereLink: Locator
        blueBannerMessage: Locator

    constructor(page: Page) {
        this.notificationMessagesLink = page.getByRole('link', { name: 'Notification Messages' })
        this.clickHereLink = page.getByRole('link', { name: 'Click here' })
        this.blueBannerMessage = page.locator('.flash.success')
    }

    async clickOnNotificationMessagesLink(): Promise<void> {
        await this.notificationMessagesLink.click()
    }

    async clickOnClickHereLink(): Promise<void> {
        await this.clickHereLink.click()
    }

    async getBlueBannerMessage(expectedMessage: string[]): Promise<void> {
      
    }

} 