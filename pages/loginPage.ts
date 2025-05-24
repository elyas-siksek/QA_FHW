import {expect, Page} from '@playwright/test';

export class LoginPageClass
{
    private username;
    private password;
    private loginButton;
    private error;
    constructor(private page : Page){
      

    this.username=this.page.locator('[data-test="username"]')
    this.password=this.page.locator('[data-test="password"]')
    this.loginButton=this.page.locator('#login-button')
    this.error=this.page.locator('[data-test="error"]')
    
    }
    async login(username:string,password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.page.waitForTimeout(1000)
        await this.loginButton.click()
       
}
async errorLogin(){
       await expect(this.error).toBeVisible();
    await expect(this.error).toContainText('Username and password do not match any user in this service');
}

}
