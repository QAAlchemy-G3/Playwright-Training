
import { expect, test } from "@playwright/test";
import path from "path";
import fs from "fs"
    test("Learn File Download",async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com/upload")
        const fileupload=await page.locator(`#file-upload`)
        await fileupload.setInputFiles(path.join(__dirname, '../Data/TestLeafLogo.png'))
            await page.locator(`.button`).click()
            await page.waitForLoadState()
            await expect.soft (page.locator(`//h3[text()="File Uploaded!"]`)).toHaveText("File Uploaded!")
            const filename= await page.locator(`#uploaded-files`).innerText()
            console.log("Uploaded file is:",filename)
    })
   //Download
   test("Learn file download", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")
          const filedownload = page.waitForEvent("download")
          await page.getByText("file.json",{exact:true}).click();
          const fDown = await filedownload
          await fDown.saveAs("Data/file.json")
          expect(fs.existsSync("Data/file.json")).toBeTruthy()
   })
       
