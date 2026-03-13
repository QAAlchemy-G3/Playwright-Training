

import { test } from "@playwright/test";
test(`Learn window handling concurrent approach`, async ({ page, context }) => {
await page.goto(`https://www.flipkart.com/`);
const searchBox = page.locator("[placeholder='Search for Products, Brands and More']").first();
await searchBox.fill("Phone");
await searchBox.press("Enter");
const [childPage] = await Promise.all([context.waitForEvent("page"),page.locator(`//div[text()="CMF by Nothing Phone 2 Pro (Light Green, 256 GB)"]`).click()])
await childPage.waitForLoadState("domcontentloaded")
console.log(await childPage.title()); // child page title
console.log(await page.title()); // parent page title title
await page.bringToFront()
await page.locator(`//span[text()="Electronics"]`).click()
await childPage.bringToFront()
})