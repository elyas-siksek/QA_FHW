import {expect, Page} from '@playwright/test';
export class CheckOutPageClass
   

{
    private First;
    private Last;
    private Code;
   
    constructor(private page : Page){
      

    this.First=this.page.locator('[data-test="firstName"]')
    this.Last=this.page.locator('[data-test="lastName"]')
    this.Code=this.page.locator('[data-test="postalCode"]')
    
    }
    

    async addToForm(){
        await this.First.fill(process.env.First_Name!)
        await this.Last.fill(process.env.Last_Name!)
        await this.Code.fill(process.env.Postal_Code!)
       
}

    

}