import { test as base } from '@playwright/test';
import { CartPage } from '../page-objects';
import { ReviewPage } from '../page-objects';
import { Snackbar } from '../page-objects';

export const test = base.extend<MyFixtures>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  reviewPage: async ({ page }, use) => {
    const reviewPage = new ReviewPage(page);
    await use(reviewPage);
  },
  snackbar: async ({ page }, use) => {
    const snackbar = new Snackbar(page);
    await use(snackbar);
  }
});

interface MyFixtures {
  cartPage: CartPage;
  reviewPage: ReviewPage;
  snackbar: Snackbar;
}