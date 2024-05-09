import { BulkAddItemsRequest, CartClient, CreateCartRequest } from "./clients/cart-api";

const _client = new CartClient('https://capi-awsqa.tcgplayer-qa.com');

export async function getCartKey(externalUserId: string) {
  let response = await _client.getCartKey(externalUserId, undefined);

  if (response.results) {
    return response.results[0];
  }

  await _client.createUserCart({ externalUserId: externalUserId } as CreateCartRequest);

  response = await _client.getCartKey(externalUserId, undefined);
  return response.results![0];
}

export async function seedCart(cartKey: string, addItemsRequest: BulkAddItemsRequest) {
  await _client.bulkAddItems(cartKey, addItemsRequest);
}

export async function clearCart(cartKey: string) {
  await _client.deleteAllItems(cartKey);
}