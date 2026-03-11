

import {expect, test} from "@playwright/test"
test(`Test to validate button`,async({page})=>
{
    //Navigate
    await page.goto("https://leafground.com/button.xhtml")
    //Write a script to click the button and confirm a title change or any visible response. 
    await page.getByRole('button',{name:'Click'}).click()
    let Pagetitle = await page.title()
    console.log("Page Title is:",Pagetitle) 
    await expect(page).toHaveTitle(/Dashboard/)
    await page.goBack();
    //Assert the disabled state of a button
    await expect(page.getByRole('button',{name:'Disabled'})).toBeDisabled()

})
