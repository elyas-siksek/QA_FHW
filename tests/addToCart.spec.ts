import { test, expect } from '@playwright/test';
import { LoginPageClass } from '../pages/loginPage';
import { AddToCartPageClass } from '../pages/addToCartPage';
import * as dotenv from 'dotenv';
dotenv.config();



test('Test Add To Cart Product 1',async({page})=>{

const loginPage=new LoginPageClass(page); 
const addToCartPage=new AddToCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)

expect(page.url()).toContain('inventory.html')
await addToCartPage.addToCart('sauce-labs-backpack')


}
)
test('Test Add To Cart Product 2',async({page})=>{
const loginPage=new LoginPageClass(page);
const addToCartPage=new AddToCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
await addToCartPage.addToCart('sauce-labs-bike-light')

}
)
// test('Test Add To Cart Product 3',async({page})=>{
// const loginPage=new LoginPageClass(page);
// await page.goto('https://www.saucedemo.com/v1/index.html');
// // await page.locator('[data-test="username"]').fill('problem_user')
// // await page.locator('[data-test="password"]').fill('secret_sauce')
// // await page.click('#login-button')
// await loginPage.login('problem_user','secret_sauce')

// expect(page.url()).toContain('inventory.html')
// await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
// await expect (page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toContainText('Remove')

// }
// )
// test('Test Add To Cart Product 4',async({page})=>{

// await page.goto('https://www.saucedemo.com/');
// await page.locator('[data-test="username"]').fill('problem_user')
// await page.locator('[data-test="password"]').fill('secret_sauce')
// await page.click('#login-button')
// expect(page.url()).toContain('inventory.html')
// await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
// await expect (page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toContainText('Remove')
// }
// )
test('Test Add To Cart Product 5',async({page})=>{
const loginPage=new LoginPageClass(page);
const addToCartPage=new AddToCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
await addToCartPage.addToCart('sauce-labs-onesie')
}
)

// test('Test Add To Cart Product 6',async({page})=>{

// await page.goto('https://www.saucedemo.com/');
// await page.locator('[data-test="username"]').fill('problem_user')
// await page.locator('[data-test="password"]').fill('secret_sauce')
// await page.click('#login-button')
// expect(page.url()).toContain('inventory.html')
// await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click()
// await expect (page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove')
// }
// )
