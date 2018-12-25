@ShoppingProducts
Feature: I create an valid account and buy products on shopping page and verify total prices after checkout
	As a valid User
	I need to buy 2 products as ramdom
	So that I can see the total prices after my check out.
Scenario: As a user, I create an valid account and buy products then add to cart and verify total prices after checkout
	Given I want to open the URL with browser
	When I click on "Sign in link"	
	|eName				|eLocator	|
	|Login-link-class	|login		|
	And I enter "email"
	|eName				|eLocator		|Value							|
	|email-txt-id		|email_create	|phuongtrantran25@yopmail.com		|
	And I click on "Create an account button"
	|eName			|eLocator		|
	|create-btn-id	|SubmitCreate	|
	And I click on "Mrs"
	|eName						|eLocator	|
	|selectGender-option-name	|id_gender	|
	And I enter the invalid datas into fields at the register form
	|eName				|eLocator				|Value		|
	|firstName-txt-id	|customer_firstname 	|Tran	 	|
	|lastName-txt-id	|customer_lastname		|Phuong	 	|
	|password-txt-id	|passwd					|12345678	|
	|company-txt-id		|company				|Sutrix		|
	|address-txt-id		|address1				|District 12|
	|city-txt-id		|city					|Ho Chi Minh|
	And I select "the state"
	|eName						|eLocator	|value		|
	|selectState-option-name	|id_state	|New York	|
	And I enter "postal code"
	|eName					|eLocator	|value	|
	|postalCode-txt-id		|postcode	|70000	|
	And I select "the country"
	|eName						|eLocator	|value			|
	|selectCountry-option-id	|id_country	|United States	|
	And I enter "mobile phone"
	|eName					|eLocator		|value		|
	|mobilePhone-txt-id		|phone_mobile	|0123456789	|
	And I click on "the register button"
	|eName					|eLocator		|
	|register-btn-id		|submitAccount	|
	And I click on "logo to go to the Homepage"
	|eName				|eLocator		|
	|logo-link-id		|header_logo	|
	And I move to "Product 1"
	|eName				|eLocator			|
	|product-1-class	|product-container	|
	And I hover on "the image of product 1"
	|eName					|eLocator			|
	|product-hover-class	|product-container	|
	And I click on "add to cart product 1"
	|eName					|eLocator					|
	|adToCart-btn-class		|ajax_add_to_cart_button	|
	And I wait to see "continue button"
	|eName					|eLocator|
	|continue-btn-class		|continue|
	And I click on "continue shopping button"
	|eName					|eLocator|
	|continue-btn-class		|continue|
	And I hover on "the image of product 2"
	|eName					|eLocator							|
	|product-hover-xpath	|//*[@id="homefeatured"]/li[2]/div	|
	And I click on "add to cart product 2"
	|eName				|eLocator												|
	|adToCart-btn-xpath	|//*[@id="homefeatured"]/li[2]/div/div[2]/div[2]/a[1]	|
	And I wait to see "proceed button"
	|eName					|eLocator										|
	|checkout-btn-xpath	|//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a		|
	And I click on "Proceed to checkout"
	|eName	|eLocator	|
	|checkout-btn-xpath	|//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a		|
	Then I verify the total price
	|eName				|eLocator				|Expected price	|
	|totalPrice-txt-id	|total_price	|$165.55		|
	And I close the browser
