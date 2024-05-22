import { mergeTests } from "@playwright/test";
import { test as authTest } from "./authFixtures";
import { test as cartTest } from "./cartFixtures";
import { test as addressTest } from "./addressFixtures";
import { test as pageTest } from "./pageFixtures";
import { test as componentTest } from "./componentFixtures";

export const test = mergeTests(authTest, cartTest, pageTest, addressTest, componentTest);
export * from '@playwright/test';
// REWORK FOR GUEST