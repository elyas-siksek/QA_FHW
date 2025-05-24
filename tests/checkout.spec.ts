import { test, expect } from '@playwright/test';
import { LoginPageClass } from '../pages/loginPage';
import * as dotenv from 'dotenv';
import { CheckOutPageClass } from '../pages/checkOutPage';
import { AddToCartPageClass } from '../pages/addToCartPage';
dotenv.config();

test('Test Check Out Product 1',async({page})=>{

const loginPage=new LoginPageClass(page); 
const checkOutPage=new CheckOutPageClass(page); 
const AddToCartPage=new AddToCartPageClass(page);

await page.goto('https://www.saucedemo.com/v1/index.html');
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)

expect(page.url()).toContain('inventory.html')
await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click()
await page.getByRole('link', { name: '1' }).click()

expect(page.url()).toContain('cart.html')
 await page.waitForTimeout(1000)
 
await page.getByRole('link', { name: 'CHECKOUT' }).click()
expect(page.url()).toContain('checkout-step-one.html')
await checkOutPage.addToForm()
 await page.waitForTimeout(1000)

await page.getByRole('button', { name: 'CONTINUE' }).click()
expect(page.url()).toContain('checkout-step-two.html')
 await page.waitForTimeout(1000)

await page.getByRole('link', { name: 'FINISH' }).click()
expect(page.url()).toContain('checkout-complete.html')
await expect (page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toContainText('THANK YOU FOR YOUR ORDER')

}
)
test('Test Check Out Product 2',async({page})=>{

const loginPage=new LoginPageClass(page); 
const checkOutPage=new CheckOutPageClass(page); 
const AddToCartPage=new AddToCartPageClass(page);

await page.goto('https://www.saucedemo.com/v1/index.html');
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)

expect(page.url()).toContain('inventory.html')
await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click()
await page.getByRole('link', { name: '1' }).click()

expect(page.url()).toContain('cart.html')
 await page.waitForTimeout(1000)
 
await page.getByRole('link', { name: 'CHECKOUT' }).click()
expect(page.url()).toContain('checkout-step-one.html')
await checkOutPage.addToForm()
 await page.waitForTimeout(1000)

await page.getByRole('button', { name: 'CONTINUE' }).click()
expect(page.url()).toContain('checkout-step-two.html')
 await page.waitForTimeout(1000)

await page.getByRole('link', { name: 'FINISH' }).click()
expect(page.url()).toContain('checkout-complete.html')
await expect (page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toContainText('THANK YOU FOR YOUR ORDER')

}
)