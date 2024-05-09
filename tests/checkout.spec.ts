import { test, expect } from '../playwright/fixtures';

test.describe('Checkout', () => {
  test('post - 200 from order submission', () => {
    //
  });

  test('get - order id exists', () => {

  });

  test('domestic authenticated user can checkout with credit card from ui', () => {});

  test('international authenticated user can checkout with credit card from ui', () => {});

  test('domestic guest user can checkout with credit card from ui', () => {});

  test('international guest user can checkout with credit card from ui', () => {});

  test('order appears in order history', () => {});
});


test('domestic authenticated user can checkout with credit card', async ({ page, cartSetup }) => {
  // Reset seller inventory
  // Clear cart
  // Login
  // Add to cart
  // click checkout
  // verifications?
  // click checkout
  // more verifications?
  // checkout?
  // where is the assertion??
  // console.log(await seedCart);
  console.log('sup nerdos from test');
  await page.goto('https://www.tcgplayer-qa.com/cart');
})

// test('international authenticated user can checkout with credit card', async ({ page, cartSetup }) => {
//   // Reset seller inventory
//   // Clear cart
//   // Login
//   // Add to cart
//   // click checkout
//   // verifications?
//   // click checkout
//   // more verifications?
//   // checkout?
//   // where is the assertion??
//   // console.log(await seedCart);
//   console.log('sup nerdos from international test');
//   await page.goto('https://www.tcgplayer-qa.com/cart');
// })

// test('domestic guest user can checkout with credit card', async ({ page, cartSetup }) => {
//   // Reset seller inventory
//   // Clear cart
//   // Login
//   // Add to cart
//   // click checkout
//   // verifications?
//   // click checkout
//   // more verifications?
//   // checkout?
//   // where is the assertion??
//   // console.log(await seedCart);
//   console.log('sup nerdos from guest test');
//   await page.goto('https://www.tcgplayer-qa.com/cart');
// })