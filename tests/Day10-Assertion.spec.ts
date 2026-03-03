

import{expect, test}from "@playwright/test"

test('Test to create a lead', async({page})=>{

    await page.goto("https://leafground.com/input.xhtml")
    //Part 2: Validate a Disabled Textbox
    await expect(page.locator(`//input[@disabled="disabled"]`)).toBeDisabled()
    //Part 3: Validate an Enabled Textbox
    await expect(page.locator(`//input[contains(@class,'city')]`)).toBeEditable()
    //Type your name into the textbox.
    await page.locator(`//input[contains(@class,'city')]`).fill("Coimbatore")
    // Part 4: Soft Assertion Practice
    await expect.soft (page.locator(`//input[contains(@class,'city')]`)).toBeDisabled()
    //Part 5: Fill Data
    await page.getByPlaceholder(`Your email and tab`).fill(" ")
    await page.waitForTimeout(2000)
    await page.getByPlaceholder(`Your email and tab`).fill("Playwright Learning ")
})
    