// Get all Condition checkbox list and verify they are correct

import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('has expected Condition Checkbox List', async ({ page }) => {
    await page.goto('https://www.tcgplayer-stg.com/massentry');
    //TODO: Make sure MAGIC is selected
    //Verify MAGIC Conditions are as expected

});