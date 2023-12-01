const { test: base, expect, request } = require('@playwright/test');
const path = require('path');

const test = base.extend({
  page: async ({ page }, use, testInfo) => {
    await use(page);

    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshotPath = path.join(
        'reports',
        `${testInfo.title.replace(/\s+/g, '_')}.png`
      );
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`📸 Screenshot saved: ${screenshotPath}`);
    }
  },

  apiContext: async ({}, use) => {
    const api = await request.newContext({
      baseURL: 'https://reqres.in/api',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        'User-Agent': 'Playwright API tests'
      }
    });

    await use(api);
       await api.dispose();
  }
});

module.exports = { test, expect };