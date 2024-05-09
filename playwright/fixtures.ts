import { test as baseTest, request } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { clearCart, getCartKey, seedCart } from '../helpers/cart';
import { BulkAddItemsRequest, BulkAddItemsRequest_ItemRequest } from '../helpers/clients/cart-api';

export * from '@playwright/test';

export const test = baseTest.extend<{}, { workerStorageState: string, cartSetup: any }>({
  storageState: ({ workerStorageState }, use) => use(workerStorageState),
  workerStorageState: [async ({}, use) => {
    const id = test.info().parallelIndex;
    const fileName = path.resolve(test.info().project.testDir, `.auth/${id}.json`)

    if (fs.existsSync(fileName)) {
      // Reuse existing authentication state if any.
      await use(fileName);
      return;
    };

    // Important: make sure we authenticate in a clean environment by unsetting storage state.
    const context = await request.newContext({ storageState: undefined });

    // Acquire a unique account, for example create a new one.
    // Alternatively, you can have a list of precreated accounts for testing.
    // Make sure that accounts are unique, so that multiple team members
    // can run tests at the same time without interference.
    const account = await acquireAccount(id);
    console.log('sup nerdos from fixture');
    console.log(`${account.username}`);

    await context.post('https://mpapi.tcgplayer-qa.com/v3/login/signin', {
      data: {
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
      }
    });

    await context.storageState({ path: fileName });
    await context.dispose();
    await use(fileName);
  }, { scope : 'worker' }],
  cartSetup: [async ({}, use) => {
    const context = await request.newContext();
    const response = await context.get('https://mpapi.tcgplayer-qa.com/v2/user?isGuest=false');
    console.log(await response.json());
    let { cartKey, externalUserId } = (await response.json() as APIResponse).results[0];
    
    if (!cartKey) { 
      cartKey = await getCartKey(externalUserId);
    }

    clearCart(cartKey);

    const cartItems: BulkAddItemsRequest_ItemRequest[] = [
      {
        sku: 3449313,
        sellerId: 28955,
        requestedQuantity: 1,
        price: 3.30,
        isDirect: false
      } as BulkAddItemsRequest_ItemRequest
    ];

    const addItemsRequest: BulkAddItemsRequest = {
      items: cartItems,
      countryCode: 'US'
    } as BulkAddItemsRequest;
    
    seedCart(cartKey, addItemsRequest);    

    await use();
  }, { scope : 'worker' }]
});

async function acquireAccount(id: number): Promise<Account>{
  const accounts: Account[] = [
    {
      username: 'snackbars@auto.com',
      password: 'P@ssw0rd!' 
    },
    {
      username: 'vueMyAccount@auto.com',
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

interface APIResponse {
  errors: any[],
  results: UserInfo[]
}

interface UserInfo {
  externalUserId: string
  cartKey: string
}