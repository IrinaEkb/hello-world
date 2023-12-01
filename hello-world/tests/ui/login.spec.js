const { test, expect } = require('../../fixtures/testFixtures');
const LoginPage = require('../../pages/LoginPage');

test.describe('Login Suite @smoke', () => {

  test('E2E: standard_user can login', async ({ page }) => {
    console.log('Test started');

    const loginPage = new LoginPage(page);

    console.log('Opening login page');
    await loginPage.open('/');

    await loginPage.login('standard_user', 'secret_sauce');

    console.log('Checking successful login');
    await expect(page).toHaveURL(/inventory.html/);

    console.log('Test finished successfully');
  });

  test('E2E: locked_out_user cannot login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open('/');
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});