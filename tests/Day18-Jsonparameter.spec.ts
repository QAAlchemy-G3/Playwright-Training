

import { test } from "@playwright/test";
import  credentials  from "../Data/loginsalesforce.json";
test.describe.serial("Test to execute the scripts in serials mode",async () => {
for( let data of credentials){
test(`Learn to handle JSON data parameterization ${data.TestCaseID}`, async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill(data.Username);
    await page.locator('#password').fill(data.Password);
    await page.locator(`#Login`).click()
    console.log("Username is:",data.Username)
    //console.log("Password is:",data.Password)
})
}
})
