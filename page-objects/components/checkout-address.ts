import { Locator } from "@playwright/test";

export class CheckoutAddress {
  readonly root: Locator;
  readonly addressSelector: Locator;
  readonly name: Locator;
  readonly addressLine1: Locator;
  readonly addressLine2: Locator;
  readonly editButton: Locator;

  constructor(root: Locator) {
    this.root = root;
    this.addressSelector = root.getByRole('radio');
    this.name = root.locator('.address-block').locator('h4');
    this.addressLine1 = root.locator('.address-block').locator('p').nth(0);
    this.addressLine2 = root.locator('.address-block').locator('p').nth(1);
    this.editButton = root.getByLabel('Edit Payment');
  }

  async formattedAddress() {
    const addressLine1Text =  await this.addressLine1.textContent() ?? '';
    const addressLine2Text =  await this.addressLine2.textContent() ?? '';
    return `${addressLine1Text} ${addressLine2Text.slice(0, -6)}`;
  }

  async selectAddress() {
    await this.addressSelector.click();
  }

  async editAddress() { 
    await this.editButton.click();
  }
}