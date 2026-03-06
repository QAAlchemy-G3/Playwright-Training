

import {test} from "@playwright/test"
test(`Test to validate button`,async({page})=>
{
    await page.goto("https://leafground.com/button.xhtml")
    
})