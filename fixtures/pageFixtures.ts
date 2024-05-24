import { test as base } from '@playwright/test';
import { CartPage } from '../page-objects';
import { ReviewPage } from '../page-objects';
import { CheckoutPage } from '../page-objects';

export const test = base.extend<MyFixtures>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  reviewPage: async ({ page }, use) => {
    const reviewPage = new ReviewPage(page);
    await use(reviewPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  }
});

type MyFixtures = {
  cartPage: CartPage;
  reviewPage: ReviewPage;
  checkoutPage: CheckoutPage;
}