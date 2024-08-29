import { expect, Page } from "@playwright/test";
import { createRandomDomesticAddressBook, createRandomDomesticAddressBookWithOptions, createRandomEmail } from "helpers";

export async function helloFlow(page: Page) {
  await page.goto('/');
  await page.getByTestId('search-bar__spyglass').click();
  await expect(page.getByText('in All Products')).toBeVisible({ timeout: 60000 });
}

export async function authCheckoutFlow(page: Page) {
  await page.goto('/');
  await page.getByTestId('search-bar__spyglass').click();
  await page.getByTestId('list-view-btn').click();
  await page.getByTestId('add-to-cart__submit--2874398-10d11996').click();
  await page.getByLabel('Perform snackbar action').click();
  await page.getByTestId('checkout-btn').click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('automation.one@auto.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('P@ssw0rd!');
  await page.getByRole('button', { name: 'Sign In and Check Out' }).click();
  await page.getByTestId('place-order-btn').click();
}

export async function guestCheckoutFlow(page: Page) {
  await page.goto('https://www.tcgplayer-qa.com/');
  await page.getByTestId('autocomplete-input').click();
  await page.getByTestId('search-bar__spyglass').click();
  await page.getByTestId('list-view-btn').click();
  await page.getByTestId('add-to-cart__submit--5488258-c9972084').click();
  await page.getByLabel('Perform snackbar action').click();
  await page.getByTestId('checkout-btn').click();
  await page.getByLabel('Email for Order & Delivery').click();
  await page.getByLabel('Email for Order & Delivery').fill('asdf@asdf.com');
  await page.locator('#guestCheckoutLoginForm span').first().click();
  await page.getByTestId('guestCheckoutSubmitBtn').click();
}



export async function createAccountAndCheckout(page: Page) {
  const address = createRandomDomesticAddressBookWithOptions({ isAbbreviated: false });

  await page.goto('/');
  await page.getByTestId('account-actions__tcg-user').click();
  await page.getByLabel('Create a new account').click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(createRandomEmail());
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('P@ssw0rd!');
  await page.getByText('I agree to the TCGplayer').click();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByTestId('autocomplete-input').click();
  await page.getByTestId('autocomplete-input').fill('mewtwo');
  await page.locator('a').filter({ hasText: 'Mega Mewtwo Collection [Mega Mewtwo X] - Special Presalein Pokemon' }).click();
  await page.getByTestId('add-to-cart__submit--spotlight-FS_5488258-c9972084').click({timeout: 60000});
  await expect(page.getByRole('alert')).toContainText('1 items added to cart.');
  await page.getByLabel('view your shopping cart').click();
  await page.getByTestId('btnCheckout').click();
  await page.getByTestId('addressFormFirstName').click();
  await page.getByTestId('addressFormFirstName').fill(address.firstName);
  await page.getByTestId('addressFormFirstName').press('Tab');
  await page.getByTestId('addressFormLastName').fill(address.lastName);
  await page.getByTestId('addressFormLastName').press('Tab');
  await page.getByTestId('addressFormCountry').press('Tab');
  await page.getByTestId('addressFormAddrLine1').fill(address.addressLine1);
  await page.getByTestId('addressFormAddrLine1').press('Tab');
  await page.getByTestId('addressFormAddrLine2').press('Tab');
  await page.getByTestId('addressFormCity').fill(address.city);
  await page.getByTestId('addressFormCity').press('Tab');
  await page.getByTestId('addressFormStateProvinceRegion').fill(address.stateProvinceRegion);
  await page.getByText(address.stateProvinceRegion).click();
  await page.getByTestId('addressFormZip').click();
  await page.getByTestId('addressFormZip').fill(address.zipCode);
  await page.getByTestId('checkout-ship-addr-save-btn').click();
  await page.getByText('Use What I Provided').click();
  await page.getByTestId('pmt-option-Card').locator('div').click();
  await page.getByTestId('checkout-use-pmt-method-btn').click();
  await page.locator('iframe[name="braintree-hosted-field-cardholderName"]').type(`${address.firstName} ${address.lastName}`);
  await page.locator('iframe[name="braintree-hosted-field-number"]').type('4111111111111111');
  await page.locator('iframe[name="braintree-hosted-field-expirationDate"]').type('1225');
  await page.locator('iframe[name="braintree-hosted-field-cvv"]').type('123');
  await page.getByTestId('paymentFormSubmitBtn').click();
}