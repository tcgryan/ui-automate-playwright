import { Locator, Page } from "@playwright/test";
import { CheckoutAddress } from "./components/checkout-address";

export class CheckoutPage {
  readonly page: Page;
  readonly editShippingAddressButton: Locator;
  readonly setDefaultAddressCheckbox: Locator;
  readonly selectedAddress: Locator;
  readonly newAddressButton: Locator;
  readonly useThisAddressButton: Locator;
  readonly viewAllAddressesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editShippingAddressButton = page.getByLabel('Edit', { exact: true }).or(page.getByLabel('Edit Shipping Address'));
    this.setDefaultAddressCheckbox = page.getByText('Set as default address');
    this.selectedAddress = page.getByTestId('checkout-ship-addr-selected');
    this.newAddressButton = page.getByText('New Address');
    this.useThisAddressButton = page.getByText('Use This Address');
    this.viewAllAddressesButton = page.getByText(/All \d Addresses/);
  }

  async goto() {
    await this.page.goto(process.env.CHECKOUT_URL);
  }

  async editShippingAddress() {
    await this.editShippingAddressButton.click();
  }

  async getSelectedAddress() { 
    return await this.selectedAddress.textContent();
  }

  async addNewAddress() {
    await this.newAddressButton.click();
  }

  async useThisAddress() {
    await this.useThisAddressButton.click();
  }

  async setAsDefaultAddress() {
    await this.setDefaultAddressCheckbox.click();
  }

  async viewAllAddresses() { 
    await this.viewAllAddressesButton.click();
  }

  getAddress(n: number): CheckoutAddress {
    const root = this.page.locator('.address-selection-option').nth(n);
    return new CheckoutAddress(root);
  }
}