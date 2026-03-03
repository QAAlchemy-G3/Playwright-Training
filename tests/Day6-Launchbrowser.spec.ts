

import { chromium,test } from "@playwright/test";

//Chrome Browser
    /* test('Test to launch a chrome browser', async() => {

    const browser = await  chromium.launch({channel:"chrome"})
    const context = await browser.newContext()
    const page =  await context.newPage()

    await page.goto("http://leaftaps.com/opentaps/control/main")

    }) */

//Webkit browser
/*     test('Test to launch a webkit browser', async() => {

    const browser = await  webkit.launch({channel:"webkit"})
    const context = await browser.newContext()
    const page =  await context.newPage()

    await page.goto("http://leaftaps.com/opentaps/control/main")

    }) */

//Edge Browser
    test('Test to launch a chrome browser', async() => {

    const browser = await  chromium.launch({channel:"msedge"})
    const context = await browser.newContext()
    const page =  await context.newPage()

    await page.goto("http://leaftaps.com/opentaps/control/main")

    }) 