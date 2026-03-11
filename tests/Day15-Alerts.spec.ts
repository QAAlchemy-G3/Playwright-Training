
import {test} from "@playwright/test"
test('Test to interact with alerts', async({page})=>{

    await page.goto("https://www.canarabank.bank.in/pages/Net-banking")
    page.on("dialog", async (alert) => {
        const message = alert.message(); 
        console.log("Message in the alert is:",message);
         const alertType = alert.type(); 
        console.log("Alert type is:",alertType);
        if (alertType==="confirm") {
            await alert.accept();
        }else{ 
            await alert.dismiss()
        }
    })
    page.locator(`#netbanking-link`).click()
})

