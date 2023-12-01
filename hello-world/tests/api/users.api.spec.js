const { test, expect } = require('../../fixtures/testFixtures');
const UsersApi = require('../../base/api/UsersApi');

test.describe('Users API @api', () => {

  test('GET users returns 200', async ({ apiContext }) => {
    console.log('➡️ Sending GET /users request');

    const usersApi = new UsersApi(apiContext);
    const response = await usersApi.getUsers(2);

    console.log(`⬅️ Status: ${response.status()}`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);

    console.log('✅ Users API test passed');
  });

});