/* eslint-disable playwright/expect-expect */
import { createRandomDomesticAddressBook } from 'helpers';
import { test, expect } from 'fixtures/fixtures';
import { getDefaultUserAddress, getUserAddresses } from 'helpers/api';
import { AddressDetails } from 'page-objects';
import { UserAddressBook } from 'models';

// test.describe('authenticated user checkout tests', () => {
//   test('domestic user can checkout with credit card from ui', async ({ cartSetup, page, cartPage, reviewPage }, testInfo) => {
//     const cardDetails = {
//       cardNumber: '4111111111111111',
//       expMonth: '06 June',
//       expYear: '2025',
//       cvv: '123',
//     };

//     await cartPage.goto();

//     await cartPage.checkout();

//     await reviewPage.selectCardAsPaymentType();
//     await reviewPage.enterCardDetails(cardDetails);

//     await reviewPage.submitOrder();
//   });

//   test('international user can checkout with credit card from ui', {
//     annotation: {
//       type: 'international',
//       description: 'This test is for international users'
//     }
//   }, async ({ cartSetup, page, cartPage, reviewPage }) => {
//     const cardDetails = {
//       cardNumber: '4111111111111111',
//       expMonth: '06 June',
//       expYear: '2025',
//       cvv: '123',
//     };

//     await cartPage.goto();

//     await cartPage.checkout();

//     await reviewPage.selectCardAsPaymentType();
//     await reviewPage.enterCardDetails(cardDetails);

//     await reviewPage.submitOrder();
//   });

//   // test.use({ storageState: undefined })
//   test('authed checkout', async ({ cartSetup, cartPage }) => {
//     await cartPage.goto();
//   });
// });

test.describe('guest user checkout tests', () => {
  test.use({
    storageState: undefined
  });

  test('domestic user can checkout with credit card from ui', async ({ cartSetup, page, cartPage }) => {
  });

  test('international user can checkout with credit card from ui', async ({ cartSetup, page }) => {
  });

});

test.describe('general checkout tests', () => {
  test('post - 200 from order submission', async ({ page, cartSetup }) => {
  });

  test('get - order id exists', async ({ cartSetup, page }) => {
  });

  test('order appears in order history', async ({ cartSetup, page }) => {
  });
});

test.describe('authenticated shipping address tests', () => {
  test.beforeEach(async ({ cartSetup, addressSetup, checkoutPage }) => {
    await checkoutPage.goto();
  });

  test('set as default checkbox is disabled when default address is selected', async ({ checkoutPage, page }) => {
    await checkoutPage.editShippingAddress();

    await expect(checkoutPage.setDefaultAddressCheckbox).toBeDisabled();

    const address = checkoutPage.getAddress(0);
    const address2 = checkoutPage.getAddress(1);

    await address2.selectAddress();
    await expect(checkoutPage.setDefaultAddressCheckbox).toBeEnabled();

    await address.selectAddress();
    await expect(checkoutPage.setDefaultAddressCheckbox).toBeDisabled();
  });

  test('shipping section displays default address', async ({ checkoutPage, request }) => {
    const defaultAddress = await getDefaultUserAddress(request);

    const selectedAddress = await checkoutPage.getSelectedAddress();
    expect(selectedAddress).toContain(`${defaultAddress.addressLine1} ${defaultAddress.city}, ${defaultAddress.stateProvinceRegion}`);
  });

  test('user can add new address when having a default address', async ({ checkoutPage, addressForm }) => {
    const addressBook = createRandomDomesticAddressBook();
    const { firstName, lastName, addressLine1: address, city, stateProvinceRegion: state, zipCode: zip } = addressBook;
    const addressDetails: AddressDetails = { firstName, lastName, address, city, state, zip, country: 'United States' };

    await checkoutPage.editShippingAddress();
    await checkoutPage.addNewAddress();
    await addressForm.fillAddress(addressDetails);
  });

  test('user can select different existing address when having a default address', async ({ checkoutPage }) => {
    await checkoutPage.editShippingAddress();
    const address = checkoutPage.getAddress(1);
    await address.selectAddress();
    const formattedAddress = await address.formattedAddress();

    await checkoutPage.useThisAddress();
    const selectedAddress = await checkoutPage.getSelectedAddress();
    expect(formattedAddress).toContain(selectedAddress);
  });

  test('user can select existing address when having no default address', async ({ checkoutPage, noDefaultAddressSetup }) => {
    await expect(checkoutPage.setDefaultAddressCheckbox).toBeEnabled();
    const address = checkoutPage.getAddress(0);
    await expect(address.addressSelector).not.toHaveClass('selected');
    await address.selectAddress();
    const formattedAddress = await address.formattedAddress();

    await checkoutPage.useThisAddress();
    const selectedAddress = await checkoutPage.getSelectedAddress();
    expect(formattedAddress).toContain(selectedAddress);
  });

  test('user can select a new default address', async ({ checkoutPage }) => {
    await checkoutPage.editShippingAddress();
    const address = checkoutPage.getAddress(1);
    await address.selectAddress();
    const formattedAddress = await address.formattedAddress();
    await checkoutPage.setAsDefaultAddress();

    await checkoutPage.useThisAddress();
    const selectedAddress = await checkoutPage.getSelectedAddress();
    expect(formattedAddress).toContain(selectedAddress);

    await checkoutPage.editShippingAddress();
    await expect(checkoutPage.setDefaultAddressCheckbox).toBeDisabled();
  });

  test('user can view all addresses when more than 3 are saved', async ({ checkoutPage, addressModal }) => {
    await checkoutPage.goto();
    await checkoutPage.editShippingAddress();
    await checkoutPage.viewAllAddresses();

    await expect(addressModal.newAddressButton).toBeVisible();

  });

  test('all addresses modal displays addresses 10 to a page', async ({ checkoutPage, addressModal, maxAddressSetup }) => {
    await checkoutPage.goto();
    await checkoutPage.editShippingAddress();
    await checkoutPage.viewAllAddresses();

    await expect(addressModal.getLocatorForAddresses()).toHaveCount(10);
  });

  test('user can paginate through all addresses modal', async ({ checkoutPage, addressModal }) => {
    await checkoutPage.goto();
    await checkoutPage.editShippingAddress();
    await checkoutPage.viewAllAddresses();

    await expect(addressModal.currentPage).toHaveText('1');
    await expect(addressModal.previousPage).toBeDisabled();
    await expect(addressModal.nextPage).toBeEnabled();

    await addressModal.goForwardOnePage();
    await expect(addressModal.currentPage).toHaveText('2');
    await expect(addressModal.previousPage).toBeEnabled();
    await expect(addressModal.nextPage).toBeDisabled();
  });

  test('user can add address through all addresses modal', async ({ checkoutPage, addressModal, addressForm, verifyAddressModal }) => {
    await checkoutPage.goto();
    await checkoutPage.editShippingAddress();
    await checkoutPage.viewAllAddresses();

    await addressModal.addNewAddress();

    const addressBook = createRandomDomesticAddressBook();
    const { firstName, lastName, addressLine1: address, city, stateProvinceRegion: state, zipCode: zip } = addressBook;
    const addressDetails = { firstName, lastName, address, city, state, zip, country: 'United States' };
    await addressForm.fillAddress(addressDetails);
    await addressForm.save();

    await verifyAddressModal.useProvidedAddress();

    const selectedAddress = await checkoutPage.getSelectedAddress();
    expect(selectedAddress).toContain(`${address} ${city}, ${state}`);
  });

  test('user can edit address through all addresses modal', async ({ checkoutPage, addressModal, addressForm, verifyAddressModal }) => {
    await checkoutPage.goto();
    await checkoutPage.editShippingAddress();
    await checkoutPage.viewAllAddresses();

    const addressFromModal = addressModal.getAddress(0);
    await addressFromModal.editAddress();

    const addressBook = createRandomDomesticAddressBook();
    const { firstName, lastName, addressLine1: address, city, stateProvinceRegion: state, zipCode: zip } = addressBook;
    const addressDetails = { firstName, lastName, address, city, state, zip, country: 'United States' };
    await addressForm.fillAddress(addressDetails);
    await addressForm.save();

    await verifyAddressModal.useProvidedAddress();

    const selectedAddress = await checkoutPage.getSelectedAddress();
    expect(selectedAddress).toContain(`${address} ${city}, ${state}`);
  });

  test('addresses are correctly ordered in all addresses modal', async ({ request, checkoutPage, addressModal }) => {
    const sortedAddresses: UserAddressBook[] = [];
    const unsortedAddresses = await getUserAddresses(request);
    const defaultAddressIndex = unsortedAddresses.findIndex((address) => address.isDefaultAddress);
    const defaultAddress = unsortedAddresses.splice(defaultAddressIndex, 1)[0];
    sortedAddresses.push(defaultAddress);
    unsortedAddresses.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
    sortedAddresses.push(...unsortedAddresses);

    await checkoutPage.goto();
    await checkoutPage.editShippingAddress();
    await checkoutPage.viewAllAddresses();

    const address1 = addressModal.getAddress(0);
    const address2 = addressModal.getAddress(1);
    const address3 = addressModal.getAddress(2);

    await expect(address1.addressLine1).toContainText(sortedAddresses[0].addressLine1);
    await expect(address2.addressLine1).toContainText(sortedAddresses[1].addressLine1);
    await expect(address3.addressLine1).toContainText(sortedAddresses[2].addressLine1);
  });

  
  test('address form appears when user has no addresses saved', async ({ checkoutPage, noAddressSetup, addressForm }) => {
    await checkoutPage.goto();
    await expect(addressForm.firstNameInput).toBeVisible();
  });

});

