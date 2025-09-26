import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { FormAuthenticationPage } from '../pages/form-authentication-page'

test.beforeEach(async ({page}) => {
    let homePage = new HomePage(page)
    await page.goto('https://the-internet.herokuapp.com/')
    await homePage.clickingOnFormAuthenticationLink(); 
})

test ('Validating Form Authentication page - happy path', async ({page}) => {
    let formAuthenticationPage = new FormAuthenticationPage(page);
    await formAuthenticationPage.loginFunction('tomsmith', 'SuperSecretPassword!');
    await formAuthenticationPage.validateSuccessfulLoginMessage();
    await formAuthenticationPage.clickOnLogoutButton();
    await formAuthenticationPage.validateSuccessfulLogoutMessage();
})

test ('Validating Form Authentication page - invalid username', async ({page}) => {
    let formAuthenticationPage = new FormAuthenticationPage(page);
    await formAuthenticationPage.loginWithInvalidUsername('invalidUser', 'SuperSecretPassword!');
    await formAuthenticationPage.validateInvalidUsernameMessage();
})

test ('Validating Form Authentication page - invalid password', async ({page}) => {
    let formAuthenticationPage = new FormAuthenticationPage(page);
    await formAuthenticationPage.loginWithInvalidPassword('tomsmith', 'invalidPassword');
    await formAuthenticationPage.validateInvalidPasswordMessage();
})