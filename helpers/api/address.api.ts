import { APIRequestContext } from "@playwright/test";
import { UserAddressBook, UserAddressBookApiResult, UserAddressBookListApiResult } from "models/address";

export async function getUserAddresses(request: APIRequestContext): Promise<UserAddressBook[]> {
   const response = await request.get(`https://addressbook-api.tcgplayer-stg.com/v2/UserAddressBooks`);
   const responseBody = await response.json() as UserAddressBookListApiResult;
   const [addresses] = responseBody.results;
   return addresses;
}

export async function getUserAddress(request: APIRequestContext, addressBookId: number): Promise<UserAddressBook> {
   const response = await request.get(`https://addressbook-api.tcgplayer-stg.com/v2/UserAddressBooks/userAddressBook`, {
      params: {
         addressBookId: addressBookId
      }
   });
   const responseBody = await response.json() as UserAddressBookApiResult;
   const [address] = responseBody.results;

   return address;
}

export async function getDefaultUserAddress(request: APIRequestContext): Promise<UserAddressBook> {
   const response = await request.get(`https://addressbook-api.tcgplayer-stg.com/v2/UserAddressBooks/userAddressBook`, {
      params: {
         default: true
      }
   });
   const responseBody = await response.json() as UserAddressBookApiResult;
   const [defaultAddress] = responseBody.results;

   return defaultAddress;
}

export async function addAddress(request: APIRequestContext, address: UserAddressBook): Promise<void> {
   await request.post(`https://addressbook-api.tcgplayer-stg.com/v2/UserAddressBooks/add`, {
      data: address,
      params: {
         ignoreCorrections: true
      }
   });
}

export async function deleteAddress(request: APIRequestContext, addressBookId: number): Promise<void> {
   await request.delete(`https://addressbook-api.tcgplayer-stg.com/v2/UserAddressBooks/delete/${addressBookId}`);
}

export async function deleteAllAddresses(request: APIRequestContext): Promise<void> {
   let addresses = await getUserAddresses(request);

   while (addresses.length > 0) {
      for (const address of addresses) {
         await deleteAddress(request, address.id);
      }

      addresses = await getUserAddresses(request);
   }
   
}