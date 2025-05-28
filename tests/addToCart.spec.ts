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
test('Test Add To Cart Product 3',async({page})=>{
const loginPage=new LoginPageClass(page);
const addToCartPage=new AddToCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
await addToCartPage.addToCart('sauce-labs-bolt-t-shirt')

}
)

test('Test Add To Cart Product 4',async({page})=>{
const loginPage=new LoginPageClass(page);
const addToCartPage=new AddToCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
await addToCartPage.addToCart('sauce-labs-fleece-jacket')
}
)
test('Test Add To Cart Product 5',async({page})=>{
const loginPage=new LoginPageClass(page);
const addToCartPage=new AddToCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
await addToCartPage.addToCart('sauce-labs-onesie')
}
)

test('Test Add To Cart Product 6',async({page})=>{
const loginPage=new LoginPageClass(page);
const addToCartPage=new AddToCartPageClass(page);
await page.goto(process.env.BASE_URL!);
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
await addToCartPage.addToCart('test\\.allthethings\\(\\)-t-shirt-\\(red\\)')
}
)
