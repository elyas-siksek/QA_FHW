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


test('Remove From cart Product 3',async({page})=>{
const loginPage=new LoginPageClass(page); 
const addToCartPage=new AddToCartPageClass(page);
const removeFromCartPage=new RemoveFromCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
 await addToCartPage.addToCart('sauce-labs-bolt-t-shirt')
await page.waitForTimeout(1000)
await removeFromCartPage.removeFromCart('sauce-labs-bolt-t-shirt')
}
)
test('Remove From cart Product 4',async({page})=>{
const loginPage=new LoginPageClass(page); 
const addToCartPage=new AddToCartPageClass(page);
const removeFromCartPage=new RemoveFromCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
 await addToCartPage.addToCart('sauce-labs-fleece-jacket')
await page.waitForTimeout(1000)
await removeFromCartPage.removeFromCart('sauce-labs-bolt-t-shirt')
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
test('Remove From cart Product 6',async({page})=>{
const loginPage=new LoginPageClass(page); 
const addToCartPage=new AddToCartPageClass(page);
const removeFromCartPage=new RemoveFromCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
 await addToCartPage.addToCart('test\\.allthethings\\(\\)-t-shirt-\\(red\\)')
await page.waitForTimeout(1000)
await removeFromCartPage.removeFromCart('test\\.allthethings\\(\\)-t-shirt-\\(red\\)')
}
)
