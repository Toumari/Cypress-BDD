import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage.js");
const productListPage = require("../../pages/ProductListPage.js");

Given("A user opens the Saucelabs website", () => {
  cy.visit("/");
});

When("A user logs in successfully", () => {
  loginPage.typeUsername("standard_user");
  loginPage.typePassword("secret_sauce");
  loginPage.clickLogin();
});

And("A user is shown the product page", () => {
  cy.url().should("contains", "/inventory.html");
});

And("A user is shown a list of products", () => {
  productListPage.productList.should("have.length", 6);
});

And("A user clicks on the first product in the list", () => {
  productListPage.firstProduct.click();
});

Then("A user is shown the product page for the first product", () => {
  cy.url().should("contains", "/inventory-item.html?id=4");
});
