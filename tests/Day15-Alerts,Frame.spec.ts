

import{expect, test}from "@playwright/test"
test('Test to interact alerts and frames', async({page})=>{
    //loadind w3 schools
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    const frame=page.frameLocator(`#iframeResult`)
    
    //handle alert
        page.on("dialog",async (alert)  =>{
            const message = alert.message()
            console.log("Message in the alert is:", message)
            await alert .accept()
    })
    await frame.locator('//button[text()="Try it"]').click()
    await expect.soft (frame.locator(`#demo`)).toHaveText("You pressed OK!")
})