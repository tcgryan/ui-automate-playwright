import { mergeTests } from "@playwright/test";
import { test as authTest } from "./authFixtures";
import { test as cartTest } from "./cartFixtures";
import { test as pageTest } from "./pageFixtures";

export const test = mergeTests(authTest, cartTest, pageTest);
export * from '@playwright/test';