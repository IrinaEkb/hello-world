const { test, expect } = require('@playwright/test');

class BaseTest {
  constructor(page) {
    this.page = page;
  }
}

module.exports = { BaseTest, test, expect };