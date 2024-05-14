import { test as baseTest, request } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { login } from '../helpers/api';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  storageState: ({ workerStorageState }, use) => use(workerStorageState),
  workerStorageState: [async ({ account }, use) => {
    const id = test.info().parallelIndex;
    const role = test.info().annotations[0]?.type ?? 'domestic';
    const fileName = path.resolve(process.cwd(), `data/auth/${process.env.TEST_ENV}/${role}/${id}.json`);

    if (fs.existsSync(fileName)) {
      // Reuse existing authentication state if any.
      await use(fileName);
      return;
    };

    // Important: make sure we authenticate in a clean environment by unsetting storage state.
    const context = await request.newContext({ storageState: undefined });

    const loginRequest = {
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
    };

    await login(context, loginRequest);

    await context.storageState({ path: fileName });
    await context.dispose();
    await use(fileName);
  }, { scope : 'worker' }],
  account: [async ({}, use) => {
    const id = test.info().parallelIndex;
    const role = test.info().annotations[0]?.type ?? 'domestic';
    const account = await acquireAccount(id, role);
    await use(account);
  }, { scope: 'worker' }],
});

async function acquireAccount(id: number, role: string): Promise<Account>{
  const fileName = path.join(process.cwd(), `/data/${role}-users.json`);
  const data = fs.readFileSync(fileName, 'utf8');
  const accounts: Account[] = JSON.parse(data);
  return accounts[id]
}

interface Account {
  username: string;
  password: string;
}

interface MyFixtures {
}

interface MyWorkerFixtures {
  workerStorageState: string;
  account: Account;
}