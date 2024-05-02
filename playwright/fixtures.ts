import { test as baseTest, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export * from '@playwright/test';

const viewport = {
  width: 1440,
  height: 900
};

export const test = baseTest.extend<{}, { workerStorageState: string }>({
  storageState: ({ workerStorageState }, use) => use(workerStorageState),
  workerStorageState: [async ({ browser }, use) => {
    const id = test.info().parallelIndex;
    const fileName = path.resolve(test.info().project.testDir, `.auth/${id}.json`)

    if (fs.existsSync(fileName)) {
      // Reuse existing authentication state if any.
      await use(fileName);
      return;
    }

    // Important: make sure we authenticate in a clean environment by unsetting storage state.
    const page = await browser.newPage({ storageState: undefined, viewport: viewport });

    // Acquire a unique account, for example create a new one.
    // Alternatively, you can have a list of precreated accounts for testing.
    // Make sure that accounts are unique, so that multiple team members
    // can run tests at the same time without interference.
    const account = await acquireAccount(id);
    console.log('sup nerdos from fixture')
    console.log(`${account.username}`)

    await page.goto('https://www.tcgplayer-qa.com');
    await page.locator('.account-actions__sign-in').click();  
    await page.getByLabel('Email').fill(account.username);
    await page.getByLabel('Password', { exact: true }).fill(account.password);  
    await page.getByText('Sign In', { exact: true }).click();  
    await expect(page.locator('.account-actions')).toBeVisible();

    await page.context().storageState({ path: fileName });
    await page.close();
    await use(fileName);
  }, { scope : 'worker' }]
});

async function acquireAccount(id: number): Promise<Account>{
  const accounts: Account[] = [
    {
      username: 'snackbars@auto.com',
      password: 'P@ssw0rd!' 
    },
    {
      username: 'qa.admin@tcgplayer.com',
      password: 'P@ssw0rd!' 
    }
  ]

  return accounts[id]
}

interface Account {
  username: string,
  password: string
}