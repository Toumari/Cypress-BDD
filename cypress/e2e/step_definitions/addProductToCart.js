import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { login } from "../../pages/LoginPage.js";
const loginPage = require("../../pages/LoginPage.js");
const productListPage = require("../../pages/ProductListPage.js");

beforeEach("login", () => {
  cy.visit("/");
  loginPage.typeUsername("standard_user");
  loginPage.typePassword("secret_sauce");
  loginPage.clickLogin();
});

And("A user clicks on the add to cart button", () => {
  productListPage.addToCartButton.click();
});

When("A user clicks on the remove from cart button", () => {
  productListPage.addToCartButton.click();
});

Then("The product is added to the shopping cart", () => {
  cy.get(".shopping_cart_link").find("span").should("have.text", "1");
});

Then("The product is removed from the shopping cart", () => {
  cy.get(".shopping_cart_link").find("span").should("not.exist");
});
