// Verify the "Welcome to Mass Entry" title, "Use this tool" text, Product Line drop down, and Mass Entry Preferences section displayed
//Verify page title is mass entry
//Verify text on the page
//verify productlinedropdown is present
//verify massentry preferences exist
//could combine the verification of checkboxes is present

import { test, expect } from '@playwright/test';
import { assert } from 'console';

test.describe('Mass Entry UI Tests', () => {
    test.beforeEach('', async ({page}) =>{
        await page.goto('https://www.tcgplayer-stg.com/massentry');
    });
    test('has title', async ({ page }) => {
      
        // Expect a title to contain mass entry title.
        await expect(page).toHaveTitle('TCGplayer Mass Entry: Easily Build Your Cart');

    });

    test('expected text on mass entry page', async ({ page }) => {
        //expect the text on the page to be present
        await expect(page.getByText('Welcome to Mass Entry')).toBeVisible();
        await expect(page.getByText('Use this tool to quickly build a deck list to send to your cart.')).toBeVisible();
    });

    test('has expected product line dropdown', async ({ page }) => {
        //expect the set dropdown to be present
        expect(page.locator('.tcg-input-autocomplete__combobox-container'));
    });

    test('Magic is defaulted placeholder', async ({ page }) => {
        const dropdown = page.getByPlaceholder('Select');
        await expect(dropdown).toHaveValue('Magic: The Gathering');
        // expect(page.getByLabel('Magic: The Gathering').getByText('Magic: The Gathering')).toBeVisible();
        // expect(page.getByRole('button', { name: 'Show Set/Series Codes' }).click({button:'middle'}));
        await dropdown.fill('');
        await dropdown.fill('Magic: The Gathering');
        await dropdown.click();
        const dropdownOption = page.getByLabel('Magic: The Gathering')
        // const dropdownOption = page.getByRole('listitem').filter({ hasText: 'Magic: The Gathering'});
        await dropdownOption.click();
        // expect(page.getByText('Tap a set to copy its code.')).toBeVisible();
        // expect(page.getByRole('button', { name: 'Close' }).click({button:'middle'}));
    });

    test('has expected condition Printings', async ({ page }) => {
        //expect the preferences sections to be present
        expect(page.locator('label').filter({ hasText: 'Normal' }).locator('span').nth(1));
        await expect(page.getByLabel('Near Mint')).toBeVisible();
    });
    test('has expected condition preferences', async ({ page }) => {
        //expect the preferences sections to be present
        expect(page.locator('xpath=//div[@class=box preferences]'));
        await expect(page.getByLabel('Near Mint')).toBeVisible();
        //Get all productline names from drop down-TBD
        //How do I make sure MAGIC is selected?

        //shareable link: getByText('Create a Shareable Link')

    });

});
