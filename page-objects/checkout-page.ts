import { Locator, Page } from "@playwright/test";
import { CheckoutAddress } from "./components/checkout-address";

export class CheckoutPage {
  readonly page: Page;
  // Shipping Address
  readonly editShippingAddressButton: Locator;
  readonly setDefaultAddressCheckbox: Locator;
  readonly selectedAddress: Locator;
  readonly newAddressButton: Locator;
  readonly useThisAddressButton: Locator;
  readonly viewAllAddressesButton: Locator;
  readonly addressCheckmark: Locator;
  readonly selectShippingAddressButton: Locator;

  // Payment Method
  readonly editPaymentMethodButton: Locator;
  readonly paymentCheckmark: Locator;

  constructor(page: Page) {
    this.page = page;

    // Shipping Address
    this.editShippingAddressButton = page.getByText('Shipping Address').getByLabel('Edit').or(page.getByLabel('Edit Shipping Address'));
    this.setDefaultAddressCheckbox = page.getByText('Set as default address');
    this.selectedAddress = page.getByTestId('checkout-ship-addr-selected').or(page.locator('.summary-addr-line1'));
    this.newAddressButton = page.getByRole('button', { name: 'New Address' });
    this.useThisAddressButton = page.getByText('Use This Address');
    this.viewAllAddressesButton = page.getByText(/All \d+ Addresses/);
    this.addressCheckmark = page.getByText('Shipping Address').locator('.greencheck');
    this.selectShippingAddressButton = page.getByRole('button', { name: 'Select Shipping Address' });

    // Payment Method
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

  async selectShippingAddress() { 
    await this.selectShippingAddressButton.click();
  }

  getAddress(n: number): CheckoutAddress {
    const root = this.page.locator('.address-selection-option').nth(n);
    return new CheckoutAddress(root);
  }
}