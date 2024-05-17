import { test, expect } from '../fixtures/fixtures';

test('snackbar appears when cart is cleared', async ({ cartSetup, cartPage, snackbar }) => {
  console.log(cartSetup);
  await cartPage.goto();
  await cartPage.clearCart();
  await expect(snackbar.snackbar).toBeVisible();
});

test.skip('other test', async ({}) => {
});

test.skip('yet another test', async ({}) => {
});
