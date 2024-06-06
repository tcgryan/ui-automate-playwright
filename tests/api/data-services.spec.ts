const body: V1ProductSearch = {
  "session-id": "1ee31cac-03f0-4032-a0fd-5a7e336bce32",
  "explain": false,
  "algorithm": "sales_stem",
  "use-default-aggregations": true,
  "filters": {
    "term": {
      "product-status-id": [
        "1",
        "20"
      ],
      "channel-visibility": [
        "0"
      ]
    }
  },
  "settings": {
    "useFuzzySearch": true,
  },
  "size": 24,
  "from": 0,
  "return-custom-attributes": true,
  "context": {
    "shippingCountry": "US",
    "userProfile": {
      "productLineAffinity": "Magic: The Gathering",
    }
  },
  "selective-aggregations": true,
  "sort": {},
  "aggregations": [ "rarityName" ]
};

import { test, expect } from '@playwright/test';
import { productSearch } from 'helpers/api/data-services';
import { V1ProductSearch } from 'models/data-services';

test('API Post Request', async ({ request }) => {
  const response = await productSearch(request, body);

  expect(response.algorithm).toBe('sales_stem');

});