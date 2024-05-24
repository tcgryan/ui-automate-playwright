import { test as baseTest } from '@playwright/test';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures>({
  storeCreditSetup: async ({}, use) => {
    
   
    // Setup code here
    await use();
    // Teardown code here
  }

});

type MyFixtures = {
  storeCreditSetup: void;
}

