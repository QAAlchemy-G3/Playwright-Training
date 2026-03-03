
import{test}from "@playwright/test"

test('Test to create a lead', async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Entering Username and password
        await page.locator('//input[@id="username"]').fill("Demosalesmanager")
        await page.locator('//input[@id="password"]').fill("crmsfa")
        await page.locator('//input[@class="decorativeSubmit"]').click()
        //await page.waitForTimeout(4000)
    //after login, creating lead
        await page.locator("//a[contains(text(),'CRM/SFA')]").click()
        await page.locator("//a[contains(text(),'Leads')]").click()     
        await page.locator("//a[contains(text(),'Create Lead')]").click()         
    //Entering lead details
        await page.locator('//input[@id="createLeadForm_companyName"]').fill("ADIB")
        await page.locator('//input[@id="createLeadForm_firstName"]').fill("Brad")
        await page.locator('//input[@id="createLeadForm_lastName"]').fill("Pitt")
        await page.locator('//input[@id="createLeadForm_personalTitle"]').fill("Mr.")
        await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill("Senior Developer")
        await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill("1800000")
        await page.locator('//input[@id="createLeadForm_departmentName"]').fill("Information Technology")
        await page.selectOption('//select[@name="currencyUomId"]',{value:"AED"})
        await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill("+919789078653")
    //Create lead button
        await page.locator('//input[@class="smallSubmit"]').click()
})