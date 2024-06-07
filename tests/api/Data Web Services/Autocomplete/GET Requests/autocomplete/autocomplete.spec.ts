import {test, expect} from '@playwright/test';

// autocomplete happy path
test('API GET REQUEST', async({request}) => {
    const response = await request.get('https://data.tcgplayer-qa.com/autocomplete?q=pikachu')

    expect (response.status()).toBe(200)

    const expectedText = await response.text();
    expect(expectedText).toContain('Battle Academy')

    console.log(await response.json());
})