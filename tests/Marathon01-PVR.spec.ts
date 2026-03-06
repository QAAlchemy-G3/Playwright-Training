

import {test} from "@playwright/test"
test('test to book online ticket in PVR cinemas', async({page})=>{

    await page.goto("https://www.pvrcinemas.com/")
    //select city
    await page.locator(`[@class="cities-placed"]`)
    await page.getByPlaceholder(`Search for city`).fill("Chennai")
    await page.locator(`//ul[@id="city_list"]/li`).click()
    //select cinema
    await page.locator(`//div[@class="date-show"]/span[@class="cinemas-inactive"]`).click()
    //selecting theatre
    await page.locator('#cinema').click()
    await page.locator(`//ul[@class="p-dropdown-items"]/li`,{hasText:'INOX National,Virugambakkam Chennai'}).click()
    //select date
    await page.locator('//li/span[contains(text(),"Today")]').click()
    //select movie
    await page.locator('//li/span[text()="OH BUTTERFLY"]').click()
    //select time
    await page.locator(`//ul[@class="p-dropdown-items"]/li`).first().click()
    //booking
    await page.getByLabel('Submit').click();
    //popup accept
    await page.getByRole('button',{name:"Accept"}).click();
    await page.locator(`//div[@class="accpet-btn-flow-seat"]/button`, {hasText:'Accept'}).click()
    //selecting B4 seat
    await page.locator('[id*="B:4"]').click();
    //Getting seat number and total amount after seat selection
    let seatname= page.locator(`.select-seat-number`)
    console.log("Selected seat is: ",await seatname.innerText())
    const Grandtoal=  page.locator('.grand-prices')
    console.log("Selected seat is: ",await Grandtoal.innerText())
})