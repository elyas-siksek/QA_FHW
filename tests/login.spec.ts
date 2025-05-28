import { test, expect } from '@playwright/test';
import { LoginPageClass } from '../pages/loginPage';
import * as dotenv from 'dotenv';
dotenv.config();

test('Test Login With Valid Username and Password',async({page})=>{
    
const loginPage=new LoginPageClass(page); 
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
}
)   

test('Test Login With Valid Username and Invalid Password' ,async({page})=>{
const loginPage=new LoginPageClass(page); 
const errorLoginPage=new LoginPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,'secret')
await errorLoginPage.errorLogin();
}
)
test('Test Login With Invalid Username and Valid Password' ,async({page})=>{
const loginPage=new LoginPageClass(page); 
const errorLoginPage=new LoginPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login('problem',process.env.PASSWORD!)
await errorLoginPage.errorLogin();
}
)
test('Test Login With Invalid Username and Password' ,async({page})=>{
const loginPage=new LoginPageClass(page); 
const errorLoginPage=new LoginPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login('problem','secret')
await errorLoginPage.errorLogin();

}
)
test('Test Login With Empty Username and Password' ,async({page})=>{
const loginPage=new LoginPageClass(page); 
await page.goto(process.env.BASE_URL!);
await loginPage.login('','')
await expect (page.locator('[data-test="error"]')).toBeVisible()
await expect (page.locator('[data-test="error"]')).toContainText('Username is required')
}
)
test('Test Login With Empty Username' ,async({page})=>{
const loginPage=new LoginPageClass(page); 
await page.goto(process.env.BASE_URL!);
await loginPage.login('',process.env.PASSWORD!)
await expect (page.locator('[data-test="error"]')).toBeVisible()
await expect (page.locator('[data-test="error"]')).toContainText('Username is required')

}
)
test('Test Login With Empty Password' ,async({page})=>{
const loginPage=new LoginPageClass(page); 
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,'')
await expect (page.locator('[data-test="error"]')).toBeVisible()
await expect (page.locator('[data-test="error"]')).toContainText('Password is required')
}
)