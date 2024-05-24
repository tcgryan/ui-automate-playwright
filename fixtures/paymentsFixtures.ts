import { test as baseTest } from '@playwright/test';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures>({});

type MyFixtures = {
  cartSetup: void;
}

