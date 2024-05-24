import { test as baseTest } from '@playwright/test';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures>({
  paymentSetup: async ({}, use) => {
    
   
    // Setup code here
    await use();
    // Teardown code here
  }

});

type MyFixtures = {
  paymentSetup: void;
}
