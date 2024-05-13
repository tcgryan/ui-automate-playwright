import { test, expect } from '../fixtures/fixtures';

test('snackbar appears when cart is cleared', async ({ page, cartSetup, cartPage, snackbar }) => {
  await cartPage.goto();
  await cartPage.clearCart();
  await expect(snackbar.snackbar).toBeVisible();
})

test.skip('other test', async ({ page }) => {
})

test.skip('yet another test', async ({ page }) => {
})
