import {test} from '@playwright/test'
import { ForgotPasswordPage } from '../pages/forgot-password'
test('forgot password page test', async ({page}) => {
    let forgotPasswordPage = new ForgotPasswordPage(page)
    await page.goto('https://the-internet.herokuapp.com/forgot_password')
    await forgotPasswordPage.retrievePasswordFunction("katya@bugbeat.com")
    await forgotPasswordPage.getInternalServerErrorMessage()
})