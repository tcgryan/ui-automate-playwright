import { test as base } from '@playwright/test';
import { Snackbar } from '../page-objects';
import { EditAddressForm } from '../page-objects/components/edit-address-form';

export const test = base.extend<MyFixtures>({
  snackbar: async ({ page }, use) => {
    const snackbar = new Snackbar(page);
    await use(snackbar);
  },
  editAddressForm: async ({ page }, use) => {
    const checkoutPage = new EditAddressForm(page);
    await use(checkoutPage);
  }
});

interface MyFixtures {
  snackbar: Snackbar;
  editAddressForm: EditAddressForm;
}