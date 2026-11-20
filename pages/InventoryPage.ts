import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly inventoryItems: Locator;
  readonly cartLink: Locator;

  constructor(private readonly page: Page) {
    this.inventoryItems = page.locator('.inventory_item');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addFirstItemToCart() {
    await this.inventoryItems.first().locator('button').click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
