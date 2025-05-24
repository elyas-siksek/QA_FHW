import { test, expect } from '@playwright/test';
import { LoginPageClass } from '../pages/loginPage';
import * as dotenv from 'dotenv';

dotenv.config();    
test('Test Sort From High to Low',async({page})=>{
const loginPage=new LoginPageClass(page); 

await page.goto('https://www.saucedemo.com/v1/index.html');
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
await page.waitForTimeout(1000);
await page.getByRole('combobox').selectOption('Price (high to low)')



  const prices = await page.locator('.inventory_item_price').allTextContents();
  
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  for (let i = 0; i < numericPrices.length - 1; i++) {
    expect(numericPrices[i]).toBeGreaterThanOrEqual(numericPrices[i + 1]);
  }


}
)
test('Test Sort From A to Z',async({page})=>{
const loginPage=new LoginPageClass(page); 

await page.goto('https://www.saucedemo.com/v1/index.html');
await loginPage.login(process.env.USERNAME1!,process.env.PASSWORD!)
expect(page.url()).toContain('inventory.html')
await page.waitForTimeout(1000);
await page.getByRole('combobox').selectOption('Name (A to Z)')

const productNames = await page.locator('.inventory_item_name').allTextContents();
  
const sortedNames = [...productNames].sort();
  expect(productNames).toEqual(sortedNames);

  


}
)