import { test as baseTest } from '@playwright/test';
import { addAddress, deleteAddress, deleteAllAddresses, getUserAddresses, getUserInfo } from 'helpers/api';
import { createRandomDomesticAddressBook } from 'helpers';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  addressSetup: async ({ request }, use) => {
    const externalUserId = (await getUserInfo(request)).externalUserId;
    let addresses = await getUserAddresses(request);

    if (addresses.length === 10) {
      const { id } = addresses[-1];
      await deleteAddress(request, id);
    }
    
    while (addresses.length < 5) {
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
    const externalUserId = (await getUserInfo(request)).externalUserId;
    const addresses = await getUserAddresses(request);
    
    const defaultAddress = addresses.find(address => address.isDefaultAddress);

    await deleteAddress(request, defaultAddress.id);

    await use();

    // await deleteAllAddresses(request);
    // addresses = await getUserAddresses(request);
    // while (addresses.length < 5) {
    //   const address = createRandomDomesticAddressBook();
    //   address.externalUserId = externalUserId;
    //   await addAddress(request, address);
    //   addresses = (await getUserAddresses(request));
    // }

  },
  
});

interface MyFixtures {
  addressSetup: void;
  maxAddressSetup: void;
  noDefaultAddressSetup: void;
}

interface MyWorkerFixtures {
}