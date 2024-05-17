import { APIRequestContext, APIResponse } from "@playwright/test";
import { UserAddressBook, UserAddressBookApiResult, UserAddressBookListApiResult } from "models";

export async function getUserAddresses(request: APIRequestContext): Promise<UserAddressBook[]> {
   const response = await request.get(`${process.env.ADDRESS_API}/v2/UserAddressBooks`);
   const responseBody = await response.json() as UserAddressBookListApiResult;
   const [addresses] = responseBody.results;
   return addresses;
}

export async function getUserAddress(request: APIRequestContext, addressBookId: number): Promise<UserAddressBook> {
   const response = await request.get(`${process.env.ADDRESS_API}/v2/UserAddressBooks/userAddressBook`, {
      params: {
         addressBookId: addressBookId
      }
   });
   const responseBody = await response.json() as UserAddressBookApiResult;
   const [address] = responseBody.results;

   return address;
}

export async function getDefaultUserAddress(request: APIRequestContext): Promise<UserAddressBook> {
   const response = await request.get(`${process.env.ADDRESS_API}/v2/UserAddressBooks/userAddressBook`, {
      params: {
         default: true
      }
   });
   const responseBody = await response.json() as UserAddressBookApiResult;
   const [defaultAddress] = responseBody.results;

   return defaultAddress;
}

export async function addAddress(request: APIRequestContext, address: UserAddressBook): Promise<void> {
   await request.post(`${process.env.ADDRESS_API}/v2/UserAddressBooks/add`, {
      data: address,
      params: {
         ignoreCorrections: true
      }
   });
}

export async function deleteAddress(request: APIRequestContext, addressBookId: number): Promise<void> {
   await request.delete(`${process.env.ADDRESS_API}/v2/UserAddressBooks/delete/${addressBookId}`);
}

export async function deleteAllAddresses(request: APIRequestContext): Promise<void> {
   const addresses = getUserAddresses(request);

   for (const address of await addresses) {
      await deleteAddress(request, address.id);
   }
   
}