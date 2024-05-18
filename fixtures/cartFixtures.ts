import { test as baseTest } from '@playwright/test';
import { bulkAddToCart, clearCart, createAnonymousCart, createUserCart, getUserInfo } from 'helpers/api';
import { BulkAddItemsRequest, BulkAddItemsRequest_ItemRequest } from 'models';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  cartSetup: async ({ request }, use) => {
    const userInfo = await getUserInfo(request);
    let { cartKey } = userInfo; 
    const { externalUserId, userName } = userInfo;

    if (userName === '') {
      const response = await createAnonymousCart(request);

      cartKey = response.cartKey!;
    }

    if (!cartKey) 
    {
      const response = await createUserCart(request, externalUserId ?? '');

      cartKey = response.cartKey!;
    }

    await clearCart(request, cartKey);

    const cartItems = new BulkAddItemsRequest_ItemRequest(      {
      sku: 3449313,
      sellerId: 28955,
      requestedQuantity: 1,
      price: 3.30,
      isDirect: false,
      channelId: 0,
      customListingKey: undefined
    });


    const addItemsRequest = new BulkAddItemsRequest({
      items: [cartItems],
      countryCode: 'US'
    });

    await bulkAddToCart(request, cartKey, addItemsRequest);

    await use();
  },
});

interface MyFixtures {
  cartSetup: void;
}

interface MyWorkerFixtures {
}