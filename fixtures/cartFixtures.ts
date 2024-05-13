import { test as baseTest } from '@playwright/test';
import { bulkAddToCart, clearCart, createAnonymousCart, createUserCart, getUserInfo } from '../helpers/api';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  cartSetup: async ({ request }, use) => {
    const response = await getUserInfo(request);
    let { cartKey, externalUserId, username } = (await response.json()).results[0];

    if (username === '') {
      const response = await createAnonymousCart(request);

      cartKey = (await response.json()).results[0].cartKey;
    }

    if (!cartKey) 
    {
      const response = await createUserCart(request, externalUserId);

      cartKey = (await response.json()).results[0].cartKey;
    }

    await clearCart(request, cartKey);

    const cartItems = [
      {
        sku: 3449313,
        sellerId: 28955,
        requestedQuantity: 1,
        price: 3.30,
        isDirect: false
      }
    ];

    const addItemsRequest = {
      items: cartItems,
      countryCode: 'US'
    };

    await bulkAddToCart(request, cartKey, addItemsRequest);

    await use(await response.json());
  },
});

interface MyFixtures {
  cartSetup: string;
  dbSetup: string;
}

interface MyWorkerFixtures {
  workerStorageState: string;
}