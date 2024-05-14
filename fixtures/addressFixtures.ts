import { test as baseTest } from '@playwright/test';
import { getUserAddresses } from '../helpers/api';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  addressSetup: async ({ request }, use) => {
    const response = await getUserAddresses(request);
    const addresses = (await response.json()).results[0];

    if (addresses.length < 1) {
      
    }
    await use(await response.json());
  }
});

interface MyFixtures {
  addressSetup: string;
}

interface MyWorkerFixtures {
}