import {test, expect} from '@playwright/test';

// /product/search

test('API Post Request', async({request}) => {
//To verify use case of SEARCH-1130, New algorithms, sales-stem, should return aggregations

    const response = await request.post('https://data.tcgplayer-qa.com/product/search?q=skull%20clamp',{
        data:{
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
              },
              "range": {},
              "exclude": {},
              "match": {}
            },
            "settings": {
              "use-fuzzy-search": true,
              "did-you-mean": {}
            },
            "size": 24,
            "from": 0,
            "return-custom-attributes": true,
            "context": {
              "shipping-country": "US",
              "user-profile": {
                "product-line-affinity": "Magic: The Gathering"
              }
            },
            "selective-aggregations": true,
            "sort": {},
            "aggregations": [ "rarityName" ]
          }

        })

        expect (response.status()).toBe(200)

        const text = await response.text();
        console.log(text)
        expect(text).toContain('{"algorithm":"sales_stem",')
})

