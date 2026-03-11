
import { webkit,chromium,test } from "@playwright/test"

    test('Test to launch a webkit browser', async() => {

        const browser = await  webkit.launch()
        const context = await browser.newContext()
        const page =  await context.newPage()

        await page.goto("https://www.redbus.in")
        const Pagetitle = await page.title()
        console.log("Page title is: ", Pagetitle)
        console.log("Page url is: ", page.url())
    }) 
     test('Test to launch a chrome browser', async() => {
    
        const browser = await  chromium.launch({channel:"msedge"})
        const context = await browser.newContext()
        const page =  await context.newPage()
    
        await page.goto("https://www.flipkart.com")
        const Pagetitle = await page.title()
        console.log("Page title is: ", Pagetitle)
        console.log("Page url is: ", page.url())
        })  