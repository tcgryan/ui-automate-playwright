import { test as base } from '@playwright/test';
import { Snackbar } from 'page-objects';
import { AddressForm } from 'page-objects/components/address-form';
import { AddressModal } from 'page-objects/address-modal';

export const test = base.extend<MyFixtures>({
  snackbar: async ({ page }, use) => {
    const snackbar = new Snackbar(page);
    await use(snackbar);
  },
  addressForm: async ({ page }, use) => {
    const addressForm = new AddressForm(page);
    await use(addressForm);
  },
  addressModal: async ({ page }, use) => {
    const addressModal = new AddressModal(page);
    await use(addressModal);
  }
});

interface MyFixtures {
  snackbar: Snackbar;
  addressForm: AddressForm;
  addressModal: AddressModal;
}