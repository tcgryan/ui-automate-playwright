import { test, expect } from '../fixtures/fixtures';

test.describe('authenticated user checkout tests', () => {
  test('domestic user can checkout with credit card from ui', { annotation: {
    type: 'domestic',
    description: 'This test is for domestic users'
  } }, async ({ cartSetup, page, cartPage, reviewPage }, testInfo) => {
    const cardDetails = {
      cardNumber: '4111111111111111',
      expMonth: '06 June',
      expYear: '2025',
      cvv: '123',
    }

    await cartPage.goto();

    await cartPage.checkout();

    await reviewPage.selectCardAsPaymentType();
    await reviewPage.enterCardDetails(cardDetails);

    await reviewPage.submitOrder();
  });

  test('international user can checkout with credit card from ui', { annotation: {
    type: 'international',
    description: 'This test is for international users'
  } }, async ({ cartSetup, page, cartPage, reviewPage }) => {
    const cardDetails = {
      cardNumber: '4111111111111111',
      expMonth: '06 June',
      expYear: '2025',
      cvv: '123',
    }

    await cartPage.goto();

    await cartPage.checkout();

    await reviewPage.selectCardAsPaymentType();
    await reviewPage.enterCardDetails(cardDetails);

    await reviewPage.submitOrder();
  });

  // test.use({ storageState: undefined })
  test('authed checkout', async ({ cartSetup, cartPage}) => {
    await cartPage.goto()
  })
});

test.describe.skip('guest user checkout tests', () => {
  test.use({
    storageState: undefined
  });

  test('domestic user can checkout with credit card from ui', async ({ cartSetup, page, cartPage }) => {
  });

  test('international user can checkout with credit card from ui', async ({ cartSetup, page }) => {
  });

});

test.describe.skip('general checkout tests', () => {
  test('post - 200 from order submission', async ({ page, cartSetup }) => {
  });

  test('get - order id exists', async ({ cartSetup, page }) => {
  });

  test('order appears in order history', async ({ cartSetup, page }) => {
  });
});

test.describe.skip('shipping address tests', () => {
  test('', async () => {
    
  });
});
