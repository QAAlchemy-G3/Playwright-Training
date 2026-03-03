

import{chromium,webkit,test} from "@playwright/test"
    test('Test to launch a chrome browser', async() => {
    const browser = await chromium.launch({channel:"msedge"})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.redbus.in")
    await page.waitForTimeout(3000)
    console.log('Title is ',await page.title())
    console.log("Current URL is", await page.url())
 })
 test('Test to launch a webkit browser', async() => {
    const browser = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.flipkart.com")
    await page.waitForTimeout(3000)
    console.log('Title is ',await page.title())
    console.log("Current URL is", await page.url())
})