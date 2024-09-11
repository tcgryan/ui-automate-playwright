/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createClient } from "redis";
import { parse } from 'csv-parse/sync';
import fs from 'fs/promises';

// Configuration
const USERS_COUNT = 500;
const BATCH_SIZE = 10;

const client = await createClient({
  url: "redis://@redis.tcgplayer-stg.com:6379",
})
.on("error", (error) => console.log('Redis Client Error:', error))
.connect();

async function readUsersFromCsv() {
  const results = [];
  try { 
    const csvContent = await fs.readFile('tests\\load\\TestData_SignIn_STG.csv', {encoding: 'utf-8'});
    const records = parse(csvContent, {bom: true, skip_empty_lines: true});

    for (const record of records) {
      console.log(record);
      results.push(record[0]);
    }
  }
  catch (error) {
    console.log('Error:', error);
  }
  return results;
}

async function storeUsersInRedis(users) {
  for (const user of users) {
    if (user) {
      await client.sAdd("LoadTestingUsers", JSON.stringify(user));
    }
  }
}

async function seedRedis() {
  const users = await readUsersFromCsv();
  for (let i = 0; i < USERS_COUNT; i += BATCH_SIZE) {
    const batch = users.slice(i, i + BATCH_SIZE);
    await storeUsersInRedis(batch);
    console.log(batch);
    console.log(`Batch ${i / BATCH_SIZE + 1} completed.`);
  }
  console.log('All users have been seeded and stored in Redis.');
  await client.disconnect();
}

await seedRedis();