import { APIRequestContext, APIResponse } from "@playwright/test";

export async function getUserInfo(request: APIRequestContext): Promise<APIResponse> {
  return await request.get('https://mpapi.tcgplayer-stg.com/v2/user?isGuest=false');
}

export async function login(request: APIRequestContext, data: LoginRequest) {
  await request.post('https://mpapi.tcgplayer-stg.com/v3/login/signin', {
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