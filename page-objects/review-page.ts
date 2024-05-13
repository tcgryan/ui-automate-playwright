import { Locator, Page } from "@playwright/test";

export class ReviewPage {
  readonly page: Page;
  readonly creditOrDebitRadio: Locator;
  readonly cardNumber: Locator;
  readonly expMonth: Locator;
  readonly expYear: Locator;
  readonly cvv: Locator;
  readonly saveCard: Locator;
  readonly submitOrderTop: Locator;

  /**
   *
   */
  constructor(page: Page) {
    this.page = page;
    this.creditOrDebitRadio = page.getByRole('radio', { name: 'Credit or Debit' });
    this.cardNumber = page.frameLocator('#braintree-hosted-field-number').getByPlaceholder('Enter Card Number*');
    this.expMonth = page.frameLocator('#braintree-hosted-field-expirationMonth').getByRole('combobox');
    this.expYear = page.frameLocator('#braintree-hosted-field-expirationYear').getByRole('combobox');
    this.cvv = page.frameLocator('#braintree-hosted-field-cvv').getByLabel('CVV');
    this.saveCard = page.getByLabel('Select this to save card.');
    this.submitOrderTop = page.locator('#SubmitOrderTop');
  }

  async selectCardAsPaymentType() {
    await this.creditOrDebitRadio.click();
  }

  async enterCardDetails(cardDetails: CardDetails) {
    await this.cardNumber.fill(cardDetails.cardNumber);
    await this.expMonth.selectOption('06 June');
    await this.expYear.selectOption('2025');
    await this.cvv.fill('123');
    await this.saveCard.uncheck();
  }

  async submitOrder() {
    await this.submitOrderTop.click();
  }
}

interface CardDetails {
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
}