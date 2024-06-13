import { defineConfig, devices } from '@playwright/test';
import * as dotenv from "dotenv";

const env = process.env.NODE_ENV;
dotenv.config({ path: `.env.${env}`});

const viewport = { 
  width: 1920,
  height: 1080
};

export default defineConfig({
  // globalSetup: require.resolve('./setup/global-setup.ts'),
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // viewport can be set here when using a generic browser name
    viewport: viewport
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chromium',
      use: { 
        browserName: 'chromium',
        // viewport can be set here when using a specific device that comes with a viewport
        // viewport: viewport
      },
    },
    {
      name: 'Firefox',
      use: { 
        browserName: 'firefox',
        // viewport can be set here when using a specific device that comes with a viewport
        // viewport: viewport
      },
      timeout: 60000
    },
    {
      name: 'Safari',
      use: { 
        browserName: 'webkit',
        // viewport can be set here when using a specific device that comes with a viewport
        // viewport: viewport
      },
    },
    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Firefox',
      use: { ...devices['Pixel 5'] , browserName: 'firefox'},
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ]
});
