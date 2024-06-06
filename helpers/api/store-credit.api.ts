import { APIRequestContext } from "@playwright/test";
import { DecimalApiResult, StoreCreditQueue, StoreCreditQueueApiResult, StringApiResult } from "models/store-credit";


// Gift Card
export async function redeemGiftCard(request: APIRequestContext, giftCardNumber: string): Promise<string> {
  try {
    const response = await request.get(`${process.env.STORE_CREDIT_API}/v1/GiftCard/Redeem`, {
      params: {
        giftCardNumber: giftCardNumber
      }
    });
  
    const { results: [result] } = await response.json() as  StringApiResult;
    return result;
    
  } catch (error) {
    
  }
}

// Store Credit

export async function useStoreCredit(request: APIRequestContext, amount: number): Promise<StoreCreditQueue> {
  const response = await request.post(`${process.env.STORE_CREDIT_API}/v1/StoreCredit/Authorize`, {
    data: {
      amount: amount
    }
  });

  const { results: [result] } = await response.json() as StoreCreditQueueApiResult;
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
  const { results: [result] } = await response.json() as DecimalApiResult;
  return result;
}