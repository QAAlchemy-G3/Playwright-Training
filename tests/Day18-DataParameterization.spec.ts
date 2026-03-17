

import { test } from "@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"
import  Details  from "../Data/testleaf.json";
test.describe.serial("Test to execute the scripts in serials mode",async () => {
let records : any[] = parse(fs.readFileSync("Data/logintestleaf.csv"),{columns:true,skip_empty_lines:true})
for( let data of records){
test(`Validating Data parameterization ${data.tcid}`, async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`#username`).fill(data.username)
    await page.locator(`#password`).fill(data.password)
    await page.locator(`.decorativeSubmit`).click()
     //Selecting CRM/SFA
    await page.getByRole(`link`,{name:"CRM/SFA"}).click()
    //Merge lead
    await page.getByRole(`link`,{name:"Leads"}).click()
    await page.getByRole(`link`,{name:"Create Lead"}).click()
    //Fill all the mandatory fields such as Company name, First name and Last name  
    await page.locator(`#createLeadForm_companyName`).fill(Details.CompanyName)
    await page.locator(`#createLeadForm_firstName`).fill(Details.FirstName)
    await page.locator(`#createLeadForm_lastName`).fill(Details.LastName)
    //Direct Mail from the Source dropdown using label
    await page.selectOption(`#createLeadForm_dataSourceId`,{value:Details.Source})
    await page.selectOption(`#createLeadForm_marketingCampaignId`,{value:Details.MarketingCampaign})
    //Get the count and print all the values in the Marketing Campaign dropdown
    const Marketingcampaign = page.locator(`#createLeadForm_marketingCampaignId option`)
    console.log("Total no of Marketing Campgin is:",await Marketingcampaign.count())
    console.log("Values in Makerting Campaign is:",await Marketingcampaign.allInnerTexts())
    //Select General Services from the Industry dropdown using index   
    await page.selectOption(`#createLeadForm_industryEnumId`,{value:Details.Indursty})
    //Select INR from the Preferred Currency dropdown  
    await page.selectOption(`#createLeadForm_currencyUomId`,{value:Details.Currency})
    //Select India from the Country dropdown   
    await page.selectOption(`#createLeadForm_generalCountryGeoId`,{value:Details.Country})
    //Select any state from the State dropdown  
    await page.selectOption(`#createLeadForm_generalStateProvinceGeoId`,{value:Details.State})
    // Get the count of all states and print the values in the console 
    const State = page.locator(`#createLeadForm_generalStateProvinceGeoId option`)
    console.log("Total no of Marketing Campgin is:",await State.count())
    console.log("Values in Makerting Campaign is:",await State.allInnerTexts())
    //Click Create Lead 
    await page.locator(`.smallSubmit`).click() 
})
}
})