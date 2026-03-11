

import {expect, test} from "@playwright/test"
test('Test to validate radio button', async({page})=>{
    await page.goto("https://leafground.com/radio.xhtml")
    //Browser
    const defaultBrowser = page.getByLabel('Safari').nth(1)
    await expect (defaultBrowser).toBeChecked()
    //selecting Browser
    const ChromeBrowser = page.getByText('Chrome').first()
    await ChromeBrowser.click()
    await expect (ChromeBrowser).toBeChecked()
    //city
    const city = page.getByText('Chennai')
    await city.click()
    await expect(city).toBeChecked()
    //Age
    await expect(page.getByLabel('21-40 Years')).toBeChecked()
})