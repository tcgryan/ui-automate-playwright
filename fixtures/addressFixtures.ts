import { test as baseTest } from '@playwright/test';
import { addAddress, deleteAddress, deleteAllAddresses, getUserAddresses, getUserInfo } from 'helpers/api';
import { createRandomDomesticAddressBook } from 'helpers';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  addressSetup: async ({ request }, use) => {
    const externalUserId = (await getUserInfo(request)).externalUserId;
    let addresses = await getUserAddresses(request);

    if (addresses.length === 25) {
      const { id } = addresses.find(address => !address.isDefaultAddress);
      await deleteAddress(request, id);
    }
    
    while (addresses.length < 10) {
      const address = createRandomDomesticAddressBook();
      address.externalUserId = externalUserId;
      await addAddress(request, address);
      addresses = (await getUserAddresses(request));
    }

    const defaultAddress = addresses.find(address => address.isDefaultAddress);
    if (!defaultAddress) {
      const address = createRandomDomesticAddressBook(true);
      address.externalUserId = externalUserId;
      await addAddress(request, address);
    }

    await use();
  },
  maxAddressSetup: async ({ request }, use) => {
    const externalUserId = (await getUserInfo(request)).externalUserId;
    let addresses = await getUserAddresses(request);
    
    while (addresses.length < 10) {
      const address = createRandomDomesticAddressBook();
      address.externalUserId = externalUserId;
      await addAddress(request, address);
      addresses = (await getUserAddresses(request));
    }

    await use();
  },
  noDefaultAddressSetup: async ({ request }, use) => {
    const addresses = await getUserAddresses(request);
    
    const defaultAddress = addresses.find(address => address.isDefaultAddress);

    await deleteAddress(request, defaultAddress.id);

    await use();
  },
  noAddressSetup: async ({ request }, use) => {
    await deleteAllAddresses(request);
    
    await use();
  }
  
});

interface MyFixtures {
  addressSetup: void;
  maxAddressSetup: void;
  noDefaultAddressSetup: void;
  noAddressSetup: void;
}

interface MyWorkerFixtures {
}