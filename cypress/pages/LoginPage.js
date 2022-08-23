class homeSaucePage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  login() {
    cy.visit("/");
    loginPage.typeUsername("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.clickLogin();
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }
}

module.exports = new homeSaucePage();
