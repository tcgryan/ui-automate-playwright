import { APIRequestContext } from "@playwright/test";
import { SubmitOrderRequest, SubmitOrderResponse, SubmitOrderResponseApiResult } from "models/checkout";

export async function submitOrder(request: APIRequestContext, body: SubmitOrderRequest): Promise<SubmitOrderResponse> {
  const response = await request.post(`${process.env.CHECKOUT_API}/v1/submit`, {
    data: body
  });
  const responseBody = await response.json() as SubmitOrderResponseApiResult;
  const [ submitOrderResponse ] = responseBody.results;
  return submitOrderResponse;

}