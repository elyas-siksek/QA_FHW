import { test, expect } from '@playwright/test';
import { AddToCartPageClass } from '../pages/addToCartPage';
import { LoginPageClass } from '../pages/loginPage';
import { RemoveFromCartPageClass } from '../pages/removeFromCartPage';
import * as dotenv from 'dotenv';
dotenv.config();

test('Remove From cart Product 1',async({page})=>{

const loginPage=new LoginPageClass(page); 
const addToCartPage=new AddToCartPageClass(page);
const removeFromCartPage=new RemoveFromCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')

 await addToCartPage.addToCart('sauce-labs-backpack')

await page.waitForTimeout(1000)
await removeFromCartPage.removeFromCart('sauce-labs-backpack')



}
)
test('Remove From cart Product 2',async({page})=>{
const loginPage=new LoginPageClass(page); 
const addToCartPage=new AddToCartPageClass(page);
const removeFromCartPage=new RemoveFromCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')

 await addToCartPage.addToCart('sauce-labs-bike-light')

await page.waitForTimeout(1000)
await removeFromCartPage.removeFromCart('sauce-labs-bike-light')

}
)
test('Remove From cart Product 5',async({page})=>{
const loginPage=new LoginPageClass(page); 
const addToCartPage=new AddToCartPageClass(page);
const removeFromCartPage=new RemoveFromCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
 await addToCartPage.addToCart('sauce-labs-onesie')
await page.waitForTimeout(1000)
await removeFromCartPage.removeFromCart('sauce-labs-onesie')
}
)

// test('Remove From cart 3',async({page})=>{

// await page.goto('https://www.saucedemo.com/');
// await page.locator('[data-test="username"]').fill('problem_user')
// await page.locator('[data-test="password"]').fill('secret_sauce')
// await page.click('#login-button')
// expect(page.url()).toContain('inventory.html')
// await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
// await expect (page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toContainText('Remove')
// await page.locator('[data-test="shopping-cart-link"]').click()
// expect(page.url()).toContain('cart.html')
// await page.waitForTimeout(2000)
// await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()

// }
// )