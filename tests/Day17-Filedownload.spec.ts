

import { test } from "@playwright/test";
import path from "path";
test("Learn File Download",async ({page}) => {
    await page.goto("https://leafground.com/file.xhtml");
    const filePromise = page.waitForEvent("download")
    await page.getByText("Download",{exact:true}).click();
    const fDown = await filePromise
  //Option1 : Relative Path
    await fDown.saveAs("Data/WDFeb26.png")
    //await fDown.saveAs(`Data/${fDown.suggestedFilename()}`)
  //Option2 : Absolute Path --> Recommended method
    //await fDown.saveAs(path.join(__dirname,`../../../Data/Absolute.png`))
     await fDown.saveAs(path.join(__dirname,`../../../Data/${fDown.suggestedFilename()}`))
/* Note:
../ => control moves outof Day1 folder
../ => control moves outof Week5 folder
../ => control moves outof tests folder
/Data => Enter root directory and choose Data folder
/Absolute.png => File saved under the folder "Data" */
    await page.waitForTimeout(3000)
})