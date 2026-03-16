

import { test } from "@playwright/test";
import path from "path";
test("Learn File Download",async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
    const filePromise = page.waitForEvent("filechooser")
    await page.locator(`[id="drag-drop-upload"]`).click();
    const fileUpload = await filePromise
     await fileUpload.setFiles([
        path.join(__dirname, '../Data/TestLeafLogo.png'),
        path.join(__dirname, '../Data/WDFeb26.png')
    ])
})