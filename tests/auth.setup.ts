import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup.use({
  testIdAttribute: 'data-aid'
});

setup('does stuff', async ({ page }) => {
  
  await page.goto('https://www.tcgplayer-qa.com');

  await page.getByTestId('headerSignIn').click();

  await page.getByLabel('Email').fill('snackbars@auto.com');
  await page.getByLabel('Password', { exact: true }).fill('P@ssw0rd!');

  await page.getByText('Sign In', { exact: true }).click();

  await expect(page.getByTestId('headerUserGreeting')).toBeVisible();

  await page.context().storageState({ path: authFile });
});