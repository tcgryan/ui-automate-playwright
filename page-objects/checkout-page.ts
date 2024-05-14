import { Locator, Page } from "@playwright/test";
import { CheckoutAddress } from "./components/checkout-address";

export class CheckoutPage {
  readonly page: Page;
  readonly editShippingAddressButton: Locator;
  readonly setDefaultAddressCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editShippingAddressButton = page.getByTestId('checkout-card-action-btn');
    this.setDefaultAddressCheckbox = page.getByText('Set as default address');
  }

  async goto() {
    await this.page.goto(process.env.CHECKOUT_URL!);
  }

  async editShippingAddress() {
    await this.editShippingAddressButton.click();
  }

  getAddress(n: number): CheckoutAddress {
    const root = this.page.locator('.address-selection-option').nth(n);
    return new CheckoutAddress(root);
  }
}