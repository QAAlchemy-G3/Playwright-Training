
import {test}from "@playwright/test"
test('Test to Edit lead', async({page})=>{
    //Login
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Entering Username and password
    await page.locator(`[id="username"]`).fill("Demosalesmanager")
    await page.locator(`#password`).fill("crmsfa")
    await page.locator(`.decorativeSubmit`).click()
    await page.waitForTimeout(2000)
    //Navigate to Edit lead
    await page.getByText(`CRM/SFA`).click() 
    await page.getByRole(`link`,{name: 'Leads' }).click()
    await page.locator(`[href="/crmsfa/control/findLeads"]`).click() 
    //Entering details for search
    await page.locator('[name="firstName"]').nth(2).fill('Gayathri')
    await page.locator('button').nth(6).click()
    await page.waitForTimeout(2000)
    //selecting first result result id
    await page.getByRole('link', { name: '11426' }).click()
    await page.getByRole(`link`,{name: 'Edit' }).click()
    //await page.locator('[href="crmsfa/control/viewLead?partyId=11426"]').click();
    await page.locator(`#updateLeadForm_companyName`).fill("EmiratesNBD")
    await page.locator(`#updateLeadForm_annualRevenue`).fill("3000000")
    await page.locator(`#updateLeadForm_departmentName`).fill("Information Technology")
    await page.locator(`#updateLeadForm_description`).fill("Testing")
    await page.getByRole('button', { name: 'Update' }).click()
})