import { test } from '@playwright/test';

test.describe('order tests', () => {
  test('creates an order', async ({ request }) => {

  });

});

//{
//   "cartKey": "aa8e68c9495c4addb7f01c9e4c8efc86",
//   "paymentInfo": {
//     "type": "vault"
//   },
//   "billingAddressId": 1847582,
//   "shippingAddressId": 1847582,
//   "braintreeSaleNonce": "fake-valid-nonce",
//   "braintreeCVVNonce": "fake-three-digit-cvv-only-nonce",
//   "vaultPaymentToken": "k8jjap4c",
//   "IsOverThreshold": false,
//   "savePaymentMethodToVault": false,
//   "useStoreCredit": false,
//   "sessionId": "string"
// }