import {expect, Page} from '@playwright/test';
export class RemoveFromCartPageClass
{
    private page : Page;
    constructor(page : Page){
    this.page=page;
    }   


async removeFromCart(product:string){
    await this.page.locator(`[data-test="shopping-cart-link"]`).click()
    await expect (this.page.locator(`[data-test="remove-${product}"]`)).toContainText('Remove')
    await expect (this.page.url()).toContain('cart.html')
    await this.page.waitForTimeout(2000)
    await this.page.locator(`[data-test="remove-${product}"]`).click()
    
    }
}