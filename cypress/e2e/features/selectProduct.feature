Feature:  Product Page Item

    Feature Product Page Item will select the first product on the product page

    Background:
    Scenario: User Logs in & Accesses product page
        Given A user opens the Saucelabs website
        When A user logs in successfully
        And A user is shown the product page
        And A user is shown a list of products
        And A user clicks on the first product in the list
        Then A user is shown the product page for the first product




