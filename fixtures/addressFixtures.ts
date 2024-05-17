import { test as baseTest } from '@playwright/test';
import { addAddress, deleteAddress, deleteAllAddresses, getUserAddresses, getUserInfo } from 'helpers/api';
import { createRandomDomesticAddressBook } from 'helpers';

export * from '@playwright/test';

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  addressSetup: async ({ request }, use) => {
    let addresses = await getUserAddresses(request);
    const [ { externalUserId } ] = addresses;

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

    await use();
  },
  maxAddressSetup: async ({ request }, use) => {
    let addresses = await getUserAddresses(request);
    const [ { externalUserId } ] = addresses;
    
    while (addresses.length < 10) {
      const address = createRandomDomesticAddressBook();
      address.externalUserId = externalUserId;
      await addAddress(request, address);
      addresses = (await getUserAddresses(request));
    }

    await use();
  },
  noDefaultAddressSetup: async ({ request }, use) => {
    //todo 
    const userInfo = await getUserInfo(request);
    const addresses = await getUserAddresses(request);
    const [ { externalUserId } ] = addresses;
    
    await deleteAllAddresses(request); 

    await use();
  },
  
});

interface MyFixtures {
  addressSetup: void;
  maxAddressSetup: void;
  noDefaultAddressSetup: void;
}

interface MyWorkerFixtures {
}