

import{test}from "@playwright/test"

test('Test to create a lead', async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Entering Username and password
        await page.locator(`[id="username"]`).fill("Demosalesmanager")
        await page.locator(`#password`).fill("crmsfa")
        await page.locator(`.decorativeSubmit`).click()
        await page.waitForTimeout(2000)
    //after login, creating lead
        await page.getByText(`CRM/SFA`).click() 
        await page.getByRole(`link`,{name: 'Leads' }).click()
        await page.locator(`[href="/crmsfa/control/createLeadForm"]`).click() 
    //After clicking, Create lead
        await page.locator(`[id="createLeadForm_companyName"]`).fill("Testleaf")
        await page.locator(`[id="createLeadForm_firstName"]`).fill("Gayathri")
        await page.locator(`[id="createLeadForm_lastName"]`).fill("Nagaraj")
        await page.fill(`#createLeadForm_personalTitle`,'Ms')
        await page.fill(`#createLeadForm_generalProfTitle`,"Test Engineer")
        await page.fill(`#createLeadForm_annualRevenue`,"2000000")
        await page.fill(`#createLeadForm_departmentName`,"IT")
        await page.fill(`#createLeadForm_primaryPhoneNumber`,"9597765078")
    //Create lead button
        await page.locator(`.smallSubmit`).click()
})