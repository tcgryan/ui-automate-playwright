import { test, expect } from '../playwright/fixtures';

test.use({
  testIdAttribute: 'data-testid'
});

test('cart loads', async ({ page }) => {
  console.log('sup nerdos from test')
  await page.goto('https://www.tcgplayer-qa.com/cart')
  await expect(page.getByTestId('areaPackageContainer')).toBeVisible();
})

test('other test', async ({ page }) => {
  console.log('sup nerdos from other test')
  await page.goto('https://www.tcgplayer-qa.com/account/addresses')
  await expect(page.getByTestId('account-page-content')).toBeVisible();
})