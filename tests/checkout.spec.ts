// /* eslint-disable playwright/expect-expect */
// import { createRandomDomesticAddressBook } from 'helpers';
// import { test, expect } from 'fixtures/fixtures';
// import { getDefaultUserAddress } from 'helpers/api';
// import { AddressDetails } from 'page-objects';
import { expect, test } from '@playwright/test';

// // test.describe('authenticated user checkout tests', () => {
// //   test('domestic user can checkout with credit card from ui', async ({ cartSetup, page, cartPage, reviewPage }, testInfo) => {
// //     const cardDetails = {
// //       cardNumber: '4111111111111111',
// //       expMonth: '06 June',
// //       expYear: '2025',
// //       cvv: '123',
// //     };

// //     await cartPage.goto();

// //     await cartPage.checkout();

// //     await reviewPage.selectCardAsPaymentType();
// //     await reviewPage.enterCardDetails(cardDetails);

// //     await reviewPage.submitOrder();
// //   });

// //   test('international user can checkout with credit card from ui', {
// //     annotation: {
// //       type: 'international',
// //       description: 'This test is for international users'
// //     }
// //   }, async ({ cartSetup, page, cartPage, reviewPage }) => {
// //     const cardDetails = {
// //       cardNumber: '4111111111111111',
// //       expMonth: '06 June',
// //       expYear: '2025',
// //       cvv: '123',
// //     };

// //     await cartPage.goto();

// //     await cartPage.checkout();

// //     await reviewPage.selectCardAsPaymentType();
// //     await reviewPage.enterCardDetails(cardDetails);

// //     await reviewPage.submitOrder();
// //   });

// //   // test.use({ storageState: undefined })
// //   test('authed checkout', async ({ cartSetup, cartPage }) => {
// //     await cartPage.goto();
// //   });
// // });

// test.describe('guest user checkout tests', () => {
//   test.use({
//     storageState: undefined
//   });

//   test('domestic user can checkout with credit card from ui', async ({ cartSetup, page, cartPage }) => {
//   });

//   test('international user can checkout with credit card from ui', async ({ cartSetup, page }) => {
//   });

// });

// test.describe('general checkout tests', () => {
//   test('post - 200 from order submission', async ({ page, cartSetup }) => {
//   });

//   test('get - order id exists', async ({ cartSetup, page }) => {
//   });

//   test('order appears in order history', async ({ cartSetup, page }) => {
//   });
// });

// test.describe('authenticated shipping address tests', () => {
//   test.beforeEach(async ({ cartSetup, addressSetup, checkoutPage }) => {
//     await checkoutPage.goto();
//   });

//   test('set as default checkbox is disabled when default address is selected', async ({ checkoutPage, page }) => {
//     console.log(page.url());
//     await checkoutPage.editShippingAddress();

//     await expect(checkoutPage.setDefaultAddressCheckbox).toBeDisabled();

//     const address = checkoutPage.getAddress(0);
//     const address2 = checkoutPage.getAddress(1);

//     await address2.selectAddress();
//     await expect(checkoutPage.setDefaultAddressCheckbox).toBeEnabled();

//     await address.selectAddress();
//     await expect(checkoutPage.setDefaultAddressCheckbox).toBeDisabled();
//   });

//   test('shipping section displays default address', async ({ checkoutPage, request }) => {
//     const defaultAddress = await getDefaultUserAddress(request);

//     const selectedAddress = await checkoutPage.getSelectedAddress();
//     expect(selectedAddress).toContain(`${defaultAddress.addressLine1} ${defaultAddress.city}, ${defaultAddress.stateProvinceRegion}`);
//   });

//   test('user can add new address when having a default address', async ({ checkoutPage, addressForm }) => {
//     const addressBook = createRandomDomesticAddressBook();
//     const { firstName, lastName, addressLine1: address, city, stateProvinceRegion: state, zipCode: zip } = addressBook;
//     const addressDetails: AddressDetails = { firstName, lastName, address, city, state, zip, country: 'United States' };

//     await checkoutPage.editShippingAddress();
//     await checkoutPage.addNewAddress();
//     await addressForm.fillAddress(addressDetails);
//   });

//   test('user can select different existing address when having a default address', async ({ checkoutPage }) => {
//     await checkoutPage.editShippingAddress();
//     const address = checkoutPage.getAddress(1);
//     await address.selectAddress();
//     const formattedAddress = await address.formattedAddress();

//     await checkoutPage.useThisAddress();
//     const selectedAddress = await checkoutPage.getSelectedAddress();
//     expect(selectedAddress).toContain(formattedAddress);
//   });

//   test('user can select address when having no default address', async ({ checkoutPage, noDefaultAddressSetup }) => {
//     await expect(checkoutPage.setDefaultAddressCheckbox).toBeEnabled();
//     const address = checkoutPage.getAddress(0);
//     await expect(address.addressSelector).not.toHaveClass('selected');
//     await address.selectAddress();
//     const formattedAddress = await address.formattedAddress();

//     await checkoutPage.useThisAddress();
//     const selectedAddress = await checkoutPage.getSelectedAddress();
//     expect(selectedAddress).toContain(formattedAddress);
//   });

//   test('user can select a new default address', async ({ checkoutPage }) => {
//     await checkoutPage.editShippingAddress();
//     const address = checkoutPage.getAddress(1);
//     await address.selectAddress();
//     const formattedAddress = await address.formattedAddress();
//     await checkoutPage.setAsDefaultAddress();

//     await checkoutPage.useThisAddress();
//     const selectedAddress = await checkoutPage.getSelectedAddress();
//     expect(selectedAddress).toContain(formattedAddress);

//     await checkoutPage.editShippingAddress();
//     await expect(checkoutPage.setDefaultAddressCheckbox).toBeDisabled();
//   });

//   test('user can view all addresses when more than 3 are saved', async ({ checkoutPage }) => {

//   });

//   test('all addresses modal displays addresses 10 to a page', async ({ checkoutPage }) => {

//   });

//   test('user can paginate through all addresses modal', async ({ checkoutPage }) => {

//   });

//   test('user can add address through all addresses modal', async ({ checkoutPage }) => {

//   });

//   test('user can edit address through all addresses modal', async ({ checkoutPage }) => {

//   });

//   test('addresses are correctly ordered in all addresses modal', async ({ checkoutPage }) => {

//   });

  
//   test('address form appears when user has no addresses saved', async ({ checkoutPage }) => {

//   });

// });

test('this test will pass', async ({ page }) => {
  await page.goto('http://playwright.dev');
  expect(page.url()).toBe('https://playwright.dev/');
});