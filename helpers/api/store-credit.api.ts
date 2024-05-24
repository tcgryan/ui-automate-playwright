import { APIRequestContext } from "@playwright/test";
import { DecimalApiResult, StoreCreditQueue, StoreCreditQueueApiResult, StringApiResult } from "models/store-credit";


// Gift Card
export async function redeemGiftCard(request: APIRequestContext, giftCardNumber: string): Promise<string> {
  const response = await request.get(`${process.env.STORE_CREDIT_API}/v1/GiftCard/Redeem`, {
    params: {
      giftCardNumber: giftCardNumber
    }
  });

  const responseBody = await response.json() as StringApiResult;
  const [result] = responseBody.results;
  return result;
}

// Store Credit

export async function useStoreCredit(request: APIRequestContext, amount: number): Promise<StoreCreditQueue> {
  const response = await request.post(`${process.env.STORE_CREDIT_API}/v1/StoreCredit/Authorize`, {
    data: {
      amount: amount
    }
  });

  const responseBody = await response.json() as StoreCreditQueueApiResult;
  const [result] = responseBody.results;
  return result;
}

export async function getStoreCredit(request: APIRequestContext): Promise<number> {
  const response = await request.get(`${process.env.STORE_CREDIT_API}/v1/StoreCredit/Balance`);
  const responseBody = await response.json() as DecimalApiResult;
  const [result] = responseBody.results;
  return result;
}

export async function getStoreCreditByExternalUserId(request: APIRequestContext, externalUserId: string): Promise<number> {
  const response = await request.get(`${process.env.STORE_CREDIT_API}/v1/StoreCredit/BalanceByExternalUserId`, {
    params: {
      externalUserId: externalUserId
    }
  
  });
  const responseBody = await response.json() as DecimalApiResult;
  const [result] = responseBody.results;
  return result;
}