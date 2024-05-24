import { test as baseTest, request } from '@playwright/test';
import * as fs  from 'fs';
import * as path from 'path';
import { login } from '../helpers/api';
import { SignInData } from 'models/marketplace';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  storageState: ({ workerStorageState }, use) => use(workerStorageState),
  workerStorageState: [async ({ account }, use) => {
    const id = test.info().parallelIndex;
    const fileName = path.resolve(process.cwd(), `data/auth/${process.env.NODE_ENV}/${id}.json`);
    // const fileName = path.resolve(process.cwd(), `data/auth/staging/${role}/${id}.json`);

    if (fs.existsSync(fileName)) {
      // Reuse existing authentication state if any.
      await use(fileName);
      return;
    };

    // Important: make sure we authenticate in a clean environment by unsetting storage state.
    const context = await request.newContext({ storageState: undefined });

    const loginRequest = new SignInData({
      username: account.username,
      password: account.password,
      captchaToken: '20000000-aaaa-bbbb-cccc-000000000002',
      termsOfServiceAccepted: true,
      antiforgeryToken: 'string',
      validation: false,
      key: 'null',
      isRevalidation: false,
      isLongTermRevalidation: false,
      isMobileAppLogin: false
    });

    // send request
    await login(context, loginRequest);

    // save storage state
    await context.storageState({ path: fileName });
    await context.dispose();
    await use(fileName);
  }, { scope : 'worker' }],
  account: [async ({}, use) => {
    const id = test.info().parallelIndex;
    const account = acquireAccount(id);
    await use(account);
  }, { scope: 'worker' }],
  guestLogin: async () => {
    
  },
});

function acquireAccount(id: number): Account {
  const fileName = path.join(process.cwd(), `/data/users.json`);
  const data = fs.readFileSync(fileName, 'utf8');
  const accounts: Account[] = JSON.parse(data) as Account[];
  return accounts[id];
}

type Account = {
  username: string;
  password: string;
}

type MyFixtures = {
  guestLogin: void;
}

type MyWorkerFixtures = {
  workerStorageState: string;
  account: Account;
}