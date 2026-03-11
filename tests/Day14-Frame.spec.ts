

import{expect, test} from "@playwright/test"
test('To test inside frame', async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    const frameurl= page.frameLocator(`[src="default.xhtml"]`)
    await frameurl?.locator(`#Click`).click()
    await expect(frameurl.locator(`#Click`)).toHaveText("Hurray! You Clicked Me.")
    //to get count
    const allframes=page.frames()
    console.log("Number of frames in this page is:", allframes.length)
    //nested frame
    //const nestedurl= page.frame({url:"https://leafground.com/page.xhtml"})
    const frame1= page.frameLocator(`[src="page.xhtml"]`)
    const frame2= frame1.frameLocator(`[src="framebutton.xhtml"]`)
    await frame2.locator("#Click").click()
    await expect(frame2.locator(`#Click`)).toHaveText("Hurray! You Clicked Me.")
})