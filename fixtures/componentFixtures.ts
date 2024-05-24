import { test as base } from '@playwright/test';
import { Snackbar } from 'page-objects';
import { AddressForm } from 'page-objects/components/address-form';
import { AddressModal } from 'page-objects/address-modal';
import { VerifyAddressModal } from 'page-objects/components/verify-address-modal';

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
  },
  verifyAddressModal: async ({ page }, use) => {
    const verifyAddressModal = new VerifyAddressModal(page);
    await use(verifyAddressModal);
  },
});

type MyFixtures = {
  snackbar: Snackbar;
  addressForm: AddressForm;
  addressModal: AddressModal;
  verifyAddressModal: VerifyAddressModal;
}