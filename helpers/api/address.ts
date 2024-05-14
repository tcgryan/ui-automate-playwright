import { APIRequestContext, APIResponse } from "@playwright/test";

export async function getUserAddresses(request: APIRequestContext): Promise<APIResponse> {
   return await request.get(`${process.env.ADDRESS_API}/v2/UserAddressBooks`);
}