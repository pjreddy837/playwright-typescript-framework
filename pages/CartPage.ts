import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly cartItems: Locator;

  constructor(private readonly page: Page) {
    this.cartItems = page.locator('.cart_item');
  }
}
