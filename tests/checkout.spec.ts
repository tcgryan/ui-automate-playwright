import { test, expect } from '../fixtures/fixtures';
import { getUserAddresses } from '../helpers/api';

test.describe('authenticated user checkout tests', () => {
  test('domestic user can checkout with credit card from ui', async ({ cartSetup, page, cartPage, reviewPage }, testInfo) => {
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

test.describe('authenticated shipping address tests', () => {
  test('set as default checkbox is disabled when default address is selected', async ({ page, cartSetup, checkoutPage, editAddressForm }) => {
    await checkoutPage.goto();
    await checkoutPage.editShippingAddress();

    await expect(checkoutPage.setDefaultAddressCheckbox).toBeDisabled();
    
    const address = checkoutPage.getAddress(0);
    const address2 = checkoutPage.getAddress(1);

    await address2.selectAddress();
    await expect(checkoutPage.setDefaultAddressCheckbox).toBeEnabled();

    await address.selectAddress();    
    await expect(checkoutPage.setDefaultAddressCheckbox).toBeDisabled();
  });

  test('shipping section displays default address', async ({ page, cartSetup, checkoutPage, request }) => {
    const response = await getUserAddresses(request);
    
  });

  test('address form appears when user has no addresses saved', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('user can add new address when having a default address', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('user can select different existing address when having a default address', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('user can add new address when having no default address', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('user can update default address', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('user can view all addresses when more than 3 are saved', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('all addresses modal displays addresses 10 to a page', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('user can paginate through all addresses modal', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('user can add address through all addresses modal', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('user can edit address through all addresses modal', async ({ page, cartSetup, checkoutPage }) => {

  });

  test('addresses are correctly ordered in all addresses modal', async ({ page, cartSetup, checkoutPage }) => {

  });
});
