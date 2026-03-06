

import{test} from "@playwright/test"
test('Test to verify drop down',async({page})=>{

    await page.goto("https://leafground.com/select.xhtml")
    //select your favorite UI automation tool using the different select options
    await page.selectOption(`//select[@class="ui-selectonemenu"]`, {value:"Selenium"})
    //Get the count and print of all the values
    const dropdown =page.locator(`//select[@class="ui-selectonemenu"]/option`)
    const dropdowncount = await dropdown.count()
    for (let index=0; index<dropdowncount; index++)
    {
        console.log(await dropdown.nth(index).innerText())
    }
    //Choose your preferred Country
    await page.locator('[id$=":country"]').click() //$= denotes ends with
    await page.locator('//li [text()="Brazil"]').click()
    await page.waitForTimeout(2000)
    //Confirm Cities belongs to Country is loaded
    const city =page.locator('[id$="city"]')
    const citylist = await city.count()
    for (let index=0; index<dropdowncount; index++)
    {
        console.log("List of cities is",await dropdown.nth(index).innerText())
    }
    city.click()
    await page.locator('//li[text()="Salvador"]').click()
    //Choose any three courses from the dropdown
    await page.getByRole("button",{name:"Show Options"}).click()
    await page.locator('li.ui-autocomplete-item', { hasText: "AWS" }).click()
    await page.locator('li.ui-autocomplete-item', { hasText: "Selenium WebDriver" }).click()
    await page.getByRole("button",{name:"Show Options"}).click()
    await page.locator('li.ui-autocomplete-item', { hasText: "Appium" }).click()
    //Choose a language and print all the values from the dropdown.
    await page.locator('[id$=":lang"]').click() 
    const language =page.locator('[id$=":lang_input"]')
    const languageselect = await language.count()
    for (let index=0; index<languageselect; index++)
    {
        console.log(await language.nth(index).innerText())
    }
    await page.locator('//li[text()="Malayalam"]').click()
    //Select 'Two' irrespective of the language chosen
    await page.locator(`//label[contains(@id,":value_label")]/following::div[contains(@class,"ui-selectonemenu-trigger")]`).click()
    await page.locator('//li[text()="ഒന്ന്"]').click()

})
