import { APIRequestContext } from "@playwright/test";
import { SignInData, SignInResult, UserInfo, UserInfoApiResult } from "models/marketplace";

export async function getUserInfo(request: APIRequestContext): Promise<UserInfo> {
  const response = await request.get(`${process.env.MARKETPLACE_API}/v2/user?isGuest=false`);
  const responseBody = await response.json() as UserInfoApiResult;
  const [userInfo] = responseBody.results;
  return userInfo;
}

export async function login(request: APIRequestContext, data: SignInData): Promise<SignInResult> {
  const response = await request.post(`${process.env.MARKETPLACE_API}/v3/login/signin`, {
    data: data
  });
  console.log(response);
  const responseBody = await response.json() as SignInResult;
  return responseBody;
}
