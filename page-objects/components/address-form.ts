import { Locator, Page } from "@playwright/test";
import getState from "helpers/state-abbr";

export class AddressForm {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly countryInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipInput: Locator;
  readonly phoneInput: Locator;
  readonly setDefaultAddressCheckbox: Locator;
  readonly cancelButton: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId('addressFormFirstName');
    this.lastNameInput = page.getByTestId('addressFormLastName');
    this.countryInput = page.getByTestId('addressFormCountry');
    this.addressInput = page.getByTestId('addressFormAddrLine1');
    this.cityInput = page.getByTestId('addressFormCity');
    this.stateInput = page.getByTestId('addressFormStateProvinceRegion');
    this.zipInput = page.getByTestId('addressFormZip');
    this.phoneInput = page.getByTestId('addressFormPhone');
    this.setDefaultAddressCheckbox = page.getByTestId('addressFormDefaultAddrCheckbox').locator('span').nth(1);
    this.cancelButton = page.getByTestId('addressFormCancelBtn');
    this.saveButton = page.getByTestId('addressFormSubmitBtn');
  }

  async fillAddress(address: AddressDetails) {
    const stateName = getState(address.state);
    await this.firstNameInput.fill(address.firstName);
    await this.lastNameInput.fill(address.lastName);
    await this.addressInput.fill(address.address);
    await this.cityInput.fill(address.city);
    await this.zipInput.fill(address.zip);
    await this.stateInput.fill('');
    await this.stateInput.pressSequentially(stateName, { timeout: 1000 });
    await this.page.getByText(stateName).click({ timeout: 1000 });
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }
}

export interface AddressDetails {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}