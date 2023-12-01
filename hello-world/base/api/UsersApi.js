class UsersApi {
  constructor(apiContext) {
    this.apiContext = apiContext;
  }

  async getUsers(page = 2) {
    return await this.apiContext.get(`/users?page=${page}`);
  }
}

module.exports = UsersApi;