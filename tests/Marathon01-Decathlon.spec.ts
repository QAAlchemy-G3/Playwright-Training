

import {expect, test} from "@playwright/test"
test('test to shop in decathlon', async({page})=>{
    await page.goto("https://www.decathlon.in/")
    await expect(page).toHaveTitle(/Sporting Goods/)
    //Searching "Shoes" in the search box
    await page.locator(`(//span[@class="!mr-1"])[1]`).click()
    await page.locator('//input[@placeholder="Search For 60+ Sports and 6000+ Products"]').fill("Shoes")
    await page.keyboard.press("Enter");
    //Selecting checkbox 
    await page.locator("//input[@type = 'checkbox']/following::span[contains(text(), 'Men')]").click()
    await page.locator("//input[@type = 'checkbox']/following::span[contains(text(), 'Uk 10.5')]").click()
    await page.locator("//div[@class='ais-Panel']/following::span[contains(text(),'Running')]").click()
    //Sorting the result and adding item to cart
    await page.getByAltText('Sorting').nth(1).click()
    await page.getByText('Price: Low to High').click()
    await page.getByRole('button',{name:'addToCart'}).nth(1).click()
    await page.getByText("UK 10.5 - EU 45").nth(2).click()
    await page.getByRole('button',{name:'ADD TO CART'}).click()
    //Navigating to cart and printing the total amount
    await page.locator('//a[@aria-label="cart"]').click();
    let TotalAmount = page.locator('//*[@data-test-id="cart:cart-checkout-total-cart-value"]');
    console.log("Total cart value is:",await TotalAmount.innerText())
})