import { APIRequestContext } from "@playwright/test";
import { AddListoResult, AddListoResultApiResult, BulkAddItemsRequest, BulkAddItemsResponseApiResult, BulkAddItemsResponse_ItemResult, CartItemResponse, CartItemResponseListApiResult, CreatedCartKey, CreatedCartKeyApiResult } from "models";

// CartCreate

export async function createUserCart(request: APIRequestContext, externalUserId: string): Promise<CreatedCartKey> {
  const response = await request.post(`${process.env.CART_API}/v1/create/usercart`, {
    data: {
      externalUserId: externalUserId
    }
  });
  const responseBody = await response.json() as CreatedCartKeyApiResult;
  const [ cartKey ] = responseBody.results; 
  return cartKey;
}

export async function createAnonymousCart(request: APIRequestContext): Promise<CreatedCartKey> {
  const response = await request.post(`${process.env.CART_API}/v1/create/anonymouscart`);
  const responseBody = await response.json() as CreatedCartKeyApiResult;
  const [ cartKey ] = responseBody.results;
  return cartKey;
}

// CartItem

// CartItems

export async function getCartItems(request: APIRequestContext, cartKey: string): Promise<CartItemResponse[]> {
  const response = await request.get(`${process.env.CART_API}/v1/${cartKey}/items`);
  const responseBody = await response.json() as CartItemResponseListApiResult;

  const [ cartItems ] = responseBody.results;
  return cartItems;
}

export async function bulkAddToCart(request: APIRequestContext, cartKey: string, addItemsRequest: BulkAddItemsRequest): Promise<BulkAddItemsResponse_ItemResult[]> {
  const response = await request.post(`${process.env.CART_API}/v1/${cartKey}/items/bulkadd`, {
    data: addItemsRequest
  });
  const responseBody = await response.json() as BulkAddItemsResponseApiResult;
  const [ bulkItemResponse ] = responseBody.results;
  const cartItems = bulkItemResponse.items;
  return cartItems;
}

export async function clearCart(request: APIRequestContext, cartKey: string): Promise<void> {
  await request.delete(`${process.env.CART_API}/v1/${cartKey}/items/all`);
}

// CartListo

export async function addListo(request: APIRequestContext, cartKey: string): Promise<AddListoResult> {
  const response = await request.post(`${process.env.CART_API}/v1/${cartKey}/listo/add`);
  const responseBody = await response.json() as AddListoResultApiResult;
  const [ result ] = responseBody.results;
  return result;
}

// CartShipping

// CartSummary

// GiftCard

// MassEntry