

import {expect,test} from "@playwright/test"
test(`To interact with windows`, async({page, context})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Login
    await page.locator(`#username`).fill("demosalesmanager")
    await page.locator(`#password`).fill("crmsfa")
    await page.locator(`.decorativeSubmit`).click()
    //Selecting CRM/SFA
    await page.getByRole(`link`,{name:"CRM/SFA"}).click()
    //Merge lead
    await page.getByRole(`link`,{name:"Leads"}).click()
    await page.getByRole(`link`,{name:"Merge Leads"}).click()
    //From Lead widget
    const [newform]=await Promise.all([context.waitForEvent("page"),await page.getByAltText("Lookup").first().click()])
    await newform.waitForLoadState()
    await newform.getByRole('link', { name: '10054'}).click()
    //To Lead widget
    const [newform1]=await Promise.all([context.waitForEvent("page"),await page.getByAltText("Lookup").nth(1).click()])
    await newform1.waitForLoadState()
    await newform1.getByRole('link', { name: '10055'}).click()
    //Alert
    page.on("dialog",async(alert)=>{
        const message=alert.message()
        console.log("Alert is:",message )
        await alert.accept()
    })
    await page.locator(`.buttonDangerous`).click()
    await expect(page).toHaveTitle(/View Lead/)
})