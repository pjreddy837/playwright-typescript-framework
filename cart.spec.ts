import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import users from '../test-data/users.json';

test('user can add an item and see it in the cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.open();
  await login.login(users.standardUser.username, users.standardUser.password);
  await expect(inventory.inventoryItems).toHaveCount(6);

  await inventory.addFirstItemToCart();
  await inventory.openCart();

  await expect(cart.cartItems).toHaveCount(1);
});
