const BasePage = require('../base/BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // locators
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async openLoginPage() {
    await this.open('/'); // from playwright.config.js
  }

  async login(username, password) {
    console.log(`➡️ Logging in as: ${username}`);
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}

module.exports = LoginPage;