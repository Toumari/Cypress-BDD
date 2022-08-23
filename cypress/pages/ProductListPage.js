class ProductListPage {
  get productList() {
    return cy.get(".inventory_list").children();
  }

  get firstProduct() {
    return this.productList.find(".inventory_item_img").first();
  }

  get addToCartButton() {
    return cy.get(".btn_inventory");
  }
}

module.exports = new ProductListPage();
