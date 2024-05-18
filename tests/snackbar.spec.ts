import { test, expect } from '../fixtures/fixtures';

test('snackbar appears when cart is cleared', async ({ cartSetup, cartPage, snackbar }) => {
  console.log(cartSetup);
  await cartPage.goto();
  await cartPage.clearCart();
  await expect(snackbar.snackbar).toBeVisible();
});

test('other test', async ({ page }) => {
  await page.goto('');
  expect(true).toBe(true);
});

test('yet another test', async ({ page }) => {
  await page.goto('');
  expect(true).toBe(true);
});
