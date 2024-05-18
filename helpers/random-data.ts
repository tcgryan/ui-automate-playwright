import { faker, fakerEN_CA, fakerJA } from '@faker-js/faker';
import { UserAddressBook } from 'models';

export function createRandomDomesticAddressBook(isDefault: boolean = false): UserAddressBook {
  return new UserAddressBook({
    id: faker.number.int({ max: 500000 }),
    externalUserId: '',
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    addressLine1: faker.location.streetAddress(),
    addressLine2: undefined,
    city: faker.location.city(),
    stateProvinceRegion: faker.location.state({abbreviated: true}),
    zipCode: faker.location.zipCode(),
    countryCode: 'US',
    phone: undefined,
    createdAt: new Date(),
    lastUsedAt: undefined,
    isEasyPostVerified: false,
    easyPostShippingAddressId: undefined,
    isDefaultAddress: isDefault,
  });
}

export function createRandomInternationalAddressBook(): UserAddressBook {
  let addressLine1: string;
  let city: string;
  let stateProvinceRegion: string;
  let zipCode: string;
  const countryCode = faker.helpers.arrayElement(['CA', 'JP']);

  if (countryCode === 'CA') { 
    addressLine1 = fakerEN_CA.location.streetAddress();
    city = fakerEN_CA.location.city();
    stateProvinceRegion = fakerEN_CA.location.state();
    zipCode = fakerEN_CA.location.zipCode();
  } else {
    addressLine1 = faker.location.streetAddress();
    city = faker.location.city();
    stateProvinceRegion = faker.location.state();
    zipCode = fakerJA.location.zipCode();
  }

  return new UserAddressBook({
    id: faker.number.int({ max: 5000000 }),
    externalUserId: '',
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    addressLine1,
    addressLine2: undefined,
    city,
    stateProvinceRegion,
    zipCode,
    countryCode,
    phone: undefined,
    createdAt: new Date(),
    lastUsedAt: undefined,
    isEasyPostVerified: false,
    easyPostShippingAddressId: undefined,
    isDefaultAddress: false,
  });
}