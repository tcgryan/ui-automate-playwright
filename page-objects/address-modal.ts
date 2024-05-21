import { Locator, Page } from "@playwright/test";
import { CheckoutAddress } from "./components/checkout-address";

export class AddressModal {
  readonly page: Page;
  readonly newAddressButton: Locator;
  readonly previousPage: Locator;
  readonly nextPage: Locator;
  readonly setAsDefaultAddressCheckbox: Locator;
  readonly cancelButton: Locator;
  readonly useThisAddressButton: Locator;
  readonly currentPage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.newAddressButton = page.getByLabel('All Addresses').getByRole('button', { name: 'New Address' });
    this.previousPage = page.getByLabel('All Addresses').getByRole('button', { name: 'Previous' });
    this.nextPage = page.getByLabel('All Addresses').getByRole('button', { name: 'Next' });
    this.setAsDefaultAddressCheckbox = page.getByLabel('All Addresses').getByText('Set as default address');
    this.cancelButton = page.getByLabel('All Addresses').getByRole('button', { name: 'Cancel' });
    this.useThisAddressButton = page.getByLabel('All Addresses').getByRole('button', { name: 'Use This Address' });
    this.currentPage = page.getByLabel('All Addresses').locator('.tcg-standard-button--priority').getByText(/\d/);
  }

  getAddress(n: number): CheckoutAddress {
    const root = this.page.getByLabel('All Addresses').locator('.address-selection-option').nth(n);
    return new CheckoutAddress(root);
  }

  getLocatorForAddresses(): Locator {
    return this.page.getByLabel('All Addresses').locator('.address-selection-option');
  }

  async goBackOnePage() {
    await this.previousPage.click();
  }

  async goForwardOnePage() {
    await this.nextPage.click();
  }

  async addNewAddress() {
    await this.newAddressButton.click();
  }
}