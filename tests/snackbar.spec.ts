import { test, expect } from '@playwright/test';

// test('login', async ({ request }) => {
//   const response = await request.post("https://mpapi.tcgplayer-qa.com/v3/login/signin", {
//     data: {
//       "username": "postmanAutomation@gmail.com",
//       "password": "P@ssw0rd!",
//       "captchaToken": "20000000-aaaa-bbbb-cccc-000000000002",
//       "termsOfServiceAccepted": true,
//       "antiforgeryToken": "string",
//       "validation": false,
//       "key": "null",
//       "isRevalidation": false,
//       "isLongTermRevalidation": false,
//       "isMobileAppLogin": false
//     }
//   });

//   await request.storageState({path: "user.json"});
// });

test('cart loads', async ({ page }) => {
  await page.goto('https://www.tcgplayer-qa.com/cart')
  await expect(page.getByTestId('areaPackageContainer')).toBeVisible();
})

test('other test', async ({ page }) => {
  await page.goto('https://www.tcgplayer-qa.com/account/addresses')
  await expect(page.getByTestId('account-page-content')).toBeVisible();
})