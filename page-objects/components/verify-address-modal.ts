import { Locator, Page } from "@playwright/test";

export class VerifyAddressModal {
  readonly page: Page;
  readonly modalBody: Locator;
  readonly useProvidedButton: Locator;
  readonly editAddressButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modalBody = page.getByTestId('addrVerificationModalBody');
    this.useProvidedButton = page.getByText('Use What I Provided');
    this.editAddressButton = page.getByText('Edit Address');
  }

  async useProvidedAddress() {
    await this.useProvidedButton.click();
  }
}