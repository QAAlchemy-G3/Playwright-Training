

import{expect, test} from "@playwright/test"
test('To shop using servicenow', async({page})=>{
    //login servicenow application
    await page.goto("https://dev362917.service-now.com/navpage.do")
    await page.locator(`#user_name`).fill("admin")
    await page.locator(`#user_password`).fill("sm5NFtfI6A%!")
    await page.locator(`#sysverb_login`).click()
    //selecting Service Catalog from menu
    await page.getByText(`All`).click()
    await page.getByRole('link',{name:"Service Catalog"}).click()
    //selecting mobiles option
    const frame1= page.frameLocator(`#gsft_main`)
    await frame1?.getByText('Mobiles').first().click()
    //selecting 2nd product in the list
    await frame1.locator('h3.h2').nth(1).click()
    //selecting mentioned options for replacement
    await frame1.locator('label').filter({ hasText:'Yes'}).first().click()
    await frame1.locator('input[name^="IO"]').nth(2).fill("7337228999");
    await frame1.locator('select[name^="IO"]').selectOption({ value: 'unlimited' })
    await frame1.locator('label').filter({ hasText: 'Sierra Blue' }).first().click()
    await frame1.locator('label').filter({ hasText:'512 GB'}).first().click()
    await frame1.locator('button[name="oi_add_to_cart_button"]').click();
    await frame1.getByRole('button', { name: 'Proceed to Checkout' }).click();
    //await page.waitForTimeout(2000)
    const notification = frame1.getByText("Thank you, your request has been submitted")
    await expect (notification).toBeVisible()
    await page.screenshot({path: "orderConfirmation.png",fullPage: true})   
})