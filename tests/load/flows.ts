import { expect, Page, request } from "@playwright/test";
import { createRandomDomesticAddressBookWithOptions } from "helpers";
import { addAddress, bulkAddToCart, clearCart, createAnonymousCart, createPaymentMethod, createUserCart, deleteAllAddresses, getUserInfo, login } from "helpers/api";
import { BulkAddItemsRequest, BulkAddItemsRequest_ItemRequest } from "models/cart";
import { SignInData } from "models/marketplace";
import { SavePaymentMethodInfo, VaultPaymentCreateUpdateRequestAuth } from "models/payments";
import { createClient } from "redis";

export async function CheckoutFlow(page: Page, vuContext) {  
  const redis = await createClient({
    url: "redis://@redis.tcgplayer-stg.com:6379",
  })
  .on("error", (error) => console.log('Redis Client Error:', error))
  .connect();
  
  // get unique user from redis
  const user = (await redis.sPop('LoadTestingUsers')).toString();
  // const userstr = await redis.lPop('LoadTestingUsers');
  await redis.disconnect();
  if (user.length === 0) {
    console.error('No users found in Redis');
    throw new Error('No users available');
  }

  const client = await request.newContext();
  // login  
  const loginRequest = new SignInData({
    username: user.replaceAll("\"", ""),
    password: 'P@ssw0rd!',
    captchaToken: '20000000-aaaa-bbbb-cccc-000000000002',
    termsOfServiceAccepted: true,
    antiforgeryToken: 'string',
    validation: false,
    key: 'null',
    isRevalidation: false,
    isLongTermRevalidation: false,
    isMobileAppLogin: false
  });

  await login(client, loginRequest);

  const userInfo = await getUserInfo(client);

  // seed cart
  let { cartKey } = userInfo; 
  const { externalUserId, userName } = userInfo;

  if (userName === '') {
    const response = await createAnonymousCart(client);

    cartKey = response.cartKey;
  }

  if (!cartKey) 
  {
    const response = await createUserCart(client, externalUserId);

    cartKey = response.cartKey;
  }

  await clearCart(client, cartKey);

  const cartItems = new BulkAddItemsRequest_ItemRequest({
    sku: vuContext.vars.sku,
    sellerId: vuContext.vars.sellerKey,
    requestedQuantity: vuContext.vars.quantity,
    price: vuContext.vars.price,
    isDirect: false,
    channelId: 0,
  });

  const addItemsRequest = new BulkAddItemsRequest({
    items: [cartItems],
    countryCode: 'US'
  });

  await bulkAddToCart(client, cartKey, addItemsRequest);

  // generate address
  const address = createRandomDomesticAddressBookWithOptions({ isAbbreviated: true });
  address.externalUserId = externalUserId;
  await deleteAllAddresses(client);
  // seed address
  await addAddress(client, address);
  // generate payment
  const payment = new VaultPaymentCreateUpdateRequestAuth({
    sessionId: 'string',
    savePaymentMethodInfo: new SavePaymentMethodInfo({
      paymentMethodNonce: 'fake-valid-no-billing-address-nonce',
      paymentType: 0,
      isDefault: false,
      billingAddress: address
    })
  });
  // seed payment
  await createPaymentMethod(client, payment);

  // set cookies for each browser
  const storageState = await client.storageState();
  const context = page.context();
  await context.addCookies(storageState.cookies);

  // navigate to checkout page
  await page.goto('/checkout');

  // place order
  await page.getByTestId('place-order-btn').click();
  await page.frameLocator('#braintree-hosted-field-cvv').getByLabel('cvv').fill('123');
  await page.getByTestId('place-order-btn').click();
  await expect(page.getByText('Here are the details:')).toBeVisible({ timeout: 60000 });
}