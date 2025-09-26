import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { FormAuthenticationPage } from '../pages/form-authentication-page'

test.beforeEach(async ({page}) => {
    let homePage = new HomePage(page)
    await page.goto('https://the-internet.herokuapp.com/')
    await homePage.clickingOnFormAuthenticationLink(); 
})

test ('Validating Form Authentication page', async ({page}) => {
    let formAuthenticationPage = new FormAuthenticationPage(page);
    await formAuthenticationPage.loginFunction('tomsmith', 'SuperSecretPassword!');
    await formAuthenticationPage.validateSuccessfulLoginMessage();
    await formAuthenticationPage.validateSuccessfulLogoutMessage();
})