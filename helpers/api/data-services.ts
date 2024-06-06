import { APIRequestContext } from "@playwright/test";
import { V1ProductSearch, V1SearchResponse } from "models/data-services";

export async function productSearch(request: APIRequestContext, body: V1ProductSearch): Promise<V1SearchResponse> {
   const response = await request.post(`www.right-endpoint.com/v2/product/search`, {
      data: {
          body: body
      }
   });

  return await response.json() as V1SearchResponse;
}