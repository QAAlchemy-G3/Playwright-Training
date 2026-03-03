


import{test}from "@playwright/test"

test('Test to login salesforce application', async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator(`[id="username"]`).fill("dilipkumar.rajendran@testleaf.com")
    await page.locator(`[class="input r4 wide mb16 mt8 password"]`).fill("TestLeaf@2025")
    await page.locator(`#Login`).click()
    await page.waitForTimeout(2000)
})