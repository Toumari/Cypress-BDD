Feature: Add Item to Cart

    Feature adds an item to the cart.

    Scenario: User adds product to shopping cart
        Given A user is shown the product page
        And A user clicks on the first product in the list
        And A user clicks on the add to cart button
        Then The product is added to the shopping cart

    Scenario: User removes product from shopping cart
        Given A user is shown the product page
        And A user clicks on the first product in the list
        And A user clicks on the add to cart button
        Then The product is added to the shopping cart
        When A user clicks on the remove from cart button
        Then The product is removed from the shopping cart