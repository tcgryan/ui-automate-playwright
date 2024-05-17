import { test as baseTest } from '@playwright/test';
import { addAddress, getUserAddresses } from 'helpers/api';
import { createRandomDomesticAddressBook } from 'helpers';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  addressSetup: async ({ request }, use) => {
    const addresses = await getUserAddresses(request);

    await addAddress(request, createRandomDomesticAddressBook());
    if (addresses.length < 11) {
      
    }
  },
});

interface MyFixtures {
  addressSetup: string;
}

interface MyWorkerFixtures {
}