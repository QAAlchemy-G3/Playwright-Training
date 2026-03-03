



import {test}from "@playwright/test"
test('Test to Edit lead', async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Entering Username and password
        await page.locator('//input[@id="username"]').fill("Demosalesmanager")
        await page.locator('//input[@id="password"]').fill("crmsfa")
        await page.locator('//input[@class="decorativeSubmit"]').click()
    //Navigate to edit lead
        await page.locator("//a[contains(text(),'CRM/SFA')]").click()
        await page.locator("//a[contains(text(),'Leads')]").click()     
        await page.locator("//a[contains(text(),'Find Leads')]").click()     
    //Entering details for search
        await page.locator('(//input[@name="firstName"])[3]').fill("Brad")
        await page.locator("//button[contains(text(),'Find Leads')]").click()
        await page.waitForTimeout(2000)
    //selecting first result result id
        await page.locator("//button[contains(text(),'Find Leads')]").click()
        await page.locator('//a[contains(@href,"viewLead?partyId=")]').first().click();
        await page.getByRole(`link`,{name: 'Edit' }).click()
        await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill("EmiratesNBD")
        await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill("3000000")
        await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill("Information Technology")
        await page.locator(`#updateLeadForm_description`).fill("Testing")
        await page.getByRole('button', { name: 'Update' }).click()
})