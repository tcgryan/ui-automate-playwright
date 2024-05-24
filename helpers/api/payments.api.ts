import { APIRequestContext } from "@playwright/test";
import { PaymentMethod, PaymentMethodApiResult, PaymentProcessorResponse, VaultPaymentCreateUpdateRequestAuth } from "models/payments";

export async function getPaymentMethods(request: APIRequestContext): Promise<PaymentMethod[]> {
  const response = await request.get(`${process.env.PAYMENTS_API}/v2/VaultPayments`);
  const responseBody = await response.json() as PaymentMethodApiResult;
  return responseBody.results;
}

export async function getPaymentMethod(request: APIRequestContext, token: string): Promise<PaymentMethod> {
  const response = await request.get(`${process.env.PAYMENTS_API}/v2/VaultPayments/${token}`);
  const responseBody = await response.json() as PaymentMethodApiResult;
  const [ paymentMethod ] = responseBody.results;
  return paymentMethod;
}

export async function createPaymentMethod(request: APIRequestContext, body: VaultPaymentCreateUpdateRequestAuth): Promise<PaymentProcessorResponse> {
  const response = await request.post(`${process.env.PAYMENTS_API}/v2/VaultPayments`, {
    data: body
  });
  return await response.json() as PaymentProcessorResponse;
}

export async function updatePaymentMethod(request: APIRequestContext, body: VaultPaymentCreateUpdateRequestAuth): Promise<PaymentProcessorResponse> {
  const response = await request.put(`${process.env.PAYMENTS_API}/v2/VaultPayments`, {
    data: body
  });
  return await response.json() as PaymentProcessorResponse;
}

export async function setDefaultPaymentMethod(request: APIRequestContext, token: string): Promise<PaymentProcessorResponse> {
  const response = await request.post(`${process.env.PAYMENTS_API}/v2/VaultPayments/setDefault/${token}`);
  return await response.json() as PaymentProcessorResponse;
}

export async function verifyCvv(request: APIRequestContext, token: string, cvvOnlyPaymentMethodNonce?: string): Promise<PaymentProcessorResponse> {
  const response = await request.get(`${process.env.PAYMENTS_API}/v2/VaultPayments/verifycvv/${token}`, {
    params: {
      cvvOnlyPaymentMethodNonce: cvvOnlyPaymentMethodNonce
    }
  });
  return await response.json() as PaymentProcessorResponse;
}

export async function deletePaymentMethod(request: APIRequestContext, token: string): Promise<PaymentProcessorResponse> {
  const response = await request.delete(`${process.env.PAYMENTS_API}/v2/VaultPayments/delete/${token}`);
  return await response.json() as PaymentProcessorResponse;
}
