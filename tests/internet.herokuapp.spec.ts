import {test} from '@playwright/test'
import { HomePage } from '../../pages/home-page'
import { StatusCodesPage } from '../../pages/status-codes-page'
import { TyposPage } from '../../pages/typos-page'

test('internet herokuapp tests', async ({page}) => {
    let homePage = new HomePage(page)
    await homePage.validateTitle()

    let typosPage = new TyposPage(page)
    await typosPage.validateTyposMainText("Sometimes you'll see a typo, other times you won't.")

})