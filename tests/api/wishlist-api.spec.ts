/* eslint-disable playwright/expect-expect */
import { test, expect } from '@playwright/test';

const items = [
{
  Sku: 15322,
  Quantity: 1
},
{
  Sku: 364268,
  Quantity: 1
}
];

test.describe('create wishlist tests', () => {

  test('creates an anonymous wishlist', async ({ request }) => {
  
  });
  
  test('creates a user wishlist', async ({ request }) => {
  
  });
});


test.describe('wishlist item tests', () => {

  test('adds an item to a wishlist', async ({ request }) => {
  
  });
  
  test('updates an item in a wishlist', async ({ request }) => {
  
  });
  
  test('removes an item from a wishlist', async ({ request }) => {
  
  });
});


test.describe('wishlist items tests', () => {

  test('gets items from a wishlist', async ({ request }) => {
  
  });
  
  test('updates items in a wishlist', async ({ request }) => {
  
  });
  
  test('removes items from a wishlist', async ({ request }) => {
  
  });
  
  test('clears wishlist', async ({ request }) => {
  
  });
});


test.describe('moving items from wishlist to cart tests', () => {

  test('adds an item to a cart from a wishlist', async ({ request }) => {
  
  });
  
  test('adds items to a cart from a wishlist', async ({ request }) => {
  
  });
  
  test('adds all items to a cart from a wishlist', async ({ request }) => {
  
  });
});

