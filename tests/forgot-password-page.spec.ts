import {test} from '@playwright/test'
import { ForgotPasswordPage } from '../pages/forgot-password'
import { InternalServerErrorPage } from '../pages/internal-server-error-page'
import { HomePage } from '../pages/home-page'
test('forgot password page test', async ({page}) => {

    let homePage = new HomePage(page)
    await homePage.forgotPasswordLink.click()
    
    let forgotPasswordPage = new ForgotPasswordPage(page)
    await forgotPasswordPage.retrievePasswordFunction("katya@bugbeat.com")

    let internalServerErrorPage = new InternalServerErrorPage(page)
    await internalServerErrorPage.getInternalServerErrorMessage()
})