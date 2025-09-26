import {test} from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { CheckBoxesPage } from '../pages/checkboxes-page'
test('Validating Checkboxes page', async ({page}) => {

    let homePage = new HomePage(page)
    await page.goto('https://the-internet.herokuapp.com/')
    await homePage.clickingOnCheckBoxesLink();

    let checkBoxesPage = new CheckBoxesPage(page);
    await checkBoxesPage.validateCheckbox1IsNotChecked();
    await checkBoxesPage.validateCheckbox2IsChecked();
    await checkBoxesPage.clickOnCheckbox1();
    await checkBoxesPage.validateCheckbox1IsChecked();
})