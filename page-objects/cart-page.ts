import { Locator, Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkOutButton: Locator;
  readonly clearCartButton: Locator;

  /**
   *
   */
  constructor(page: Page) {
    this.page = page;
    this.checkOutButton = page.getByText('Check Out');
    this.clearCartButton = page.getByText('Clear Cart');
  }

  async goto() {
    await this.page.goto('https://www.tcgplayer-stg.com/cart');
  }

  async checkout() {
    await this.checkOutButton.click();
    await this.page.waitForTimeout(3000);
    await this.page.reload();
  }

  async clearCart() {
    await this.clearCartButton.click();
  }
}
