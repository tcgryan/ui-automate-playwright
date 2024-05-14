import { APIRequestContext, APIResponse } from "@playwright/test";

export async function createUserCart(request: APIRequestContext, externalUserId: string): Promise<APIResponse> {
  return request.post(`${process.env.CART_API}/v1/create/usercart`, {
    data: {
      externalUserId: externalUserId
    }
  });
}

export async function createAnonymousCart(request: APIRequestContext): Promise<APIResponse> {
  return request.post(`${process.env.CART_API}/v1/create/anonymouscart`);
}

export async function clearCart(request: APIRequestContext, cartKey: string): Promise<void> {
  await request.delete(`${process.env.CART_API}/v1/${cartKey}/items/all`);
}

export async function bulkAddToCart(request: APIRequestContext, cartKey: string, addItemsRequest: BulkAddItemsRequest): Promise<void> {
  await request.post(`${process.env.CART_API}/v1/${cartKey}/items/bulkadd`, {
    data: addItemsRequest
  }); 
}

interface BulkAddItemsRequest {
  items: BulkAddItemsRequest_Items[];
  countryCode: string;
}

interface BulkAddItemsRequest_Items {
  sku: number;
  sellerId: number;
  requestedQuantity: number;
  price: number;
  isDirect: boolean;
}