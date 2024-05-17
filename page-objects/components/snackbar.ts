import { Locator, Page } from "@playwright/test";

export class Snackbar {
  readonly page: Page;
  readonly snackbar: Locator;
  readonly message: Locator;
  readonly dismissButton: Locator;
  readonly undoButton: Locator;
  readonly hotkeys: Locator;

  constructor(page: Page) {
    this.page = page;
    this.snackbar = page.locator('.tcg-snackbar');
    this.message = page.locator('.tcg-snackbar__message');
    this.dismissButton = page.locator('.tcg-snackbar__dismiss-button');
    this.undoButton = page.locator('.tcg-snackbar__action-button');
    this.hotkeys = page.locator('.snackbar-hotkeys');
  }

  async dismissSnackbarWithMouse() {
    await this.dismissButton.click();
  }
}

