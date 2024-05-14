import { APIRequestContext, APIResponse } from "@playwright/test";

export async function getUserInfo(request: APIRequestContext): Promise<APIResponse> {
  return await request.get(`${process.env.MARKETPLACE_API}/v2/user?isGuest=false`);
}

export async function login(request: APIRequestContext, data: LoginRequest) {
  await request.post(`${process.env.MARKETPLACE_API}/v3/login/signin`, {
    data: data
  });
}

interface LoginRequest {
  username: string;
  password: string;
  captchaToken: string;
  termsOfServiceAccepted: boolean;
  antiforgeryToken: string;
  validation: boolean;
  key: string;
  isRevalidation: boolean;
  isLongTermRevalidation: boolean;
  isMobileAppLogin: boolean;
}