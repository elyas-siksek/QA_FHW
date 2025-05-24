import {expect, Page} from '@playwright/test';
export class AddToCartPageClass
{
    private page : Page;
    constructor(page : Page){
    this.page=page;
    }   

async addToCart(product:string){
    await this.page.locator(`[data-test="add-to-cart-${product}"]`).click()
    await expect (this.page.locator(`[data-test="remove-${product}"]`)).toContainText('Remove')

    }
}