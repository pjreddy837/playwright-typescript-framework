import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

test.describe('Login scenarios', () => {
  test('standard user can log in', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.standardUser.username, users.standardUser.password);
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('invalid credentials display an error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.invalidUser.username, users.invalidUser.password);
    await expect(login.errorMessage).toBeVisible();
    await expect(login.errorMessage).toContainText('Username and password do not match');
  });

  test('locked user is prevented from logging in', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(users.lockedUser.username, users.lockedUser.password);
    await expect(login.errorMessage).toBeVisible();
    await expect(login.errorMessage).toContainText('locked out');
  });
});
