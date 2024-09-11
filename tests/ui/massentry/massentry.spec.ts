//This is Liz's test

import test, { expect } from "@playwright/test";

test('this test will pass', async ({ page }) => {
    await page.goto('http://playwright.dev');
    expect(page.url()).toBe('https://playwright.dev/');
  });