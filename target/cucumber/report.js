$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkOutFunction.feature");
formatter.feature({
  "line": 2,
  "name": "I create an valid account and buy products on shopping page and verify total prices after checkout",
  "description": "As a valid User\r\nI need to buy 2 products as ramdom\r\nSo that I can see the total prices after my check out.",
  "id": "i-create-an-valid-account-and-buy-products-on-shopping-page-and-verify-total-prices-after-checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ShoppingProducts"
    }
  ]
});
formatter.before({
  "duration": 6255710100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "As a user, I create an valid account and buy products then add to cart and verify total prices after checkout",
  "description": "",
  "id": "i-create-an-valid-account-and-buy-products-on-shopping-page-and-verify-total-prices-after-checkout;as-a-user,-i-create-an-valid-account-and-buy-products-then-add-to-cart-and-verify-total-prices-after-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I want to open the URL with browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Sign in link\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 10
    },
    {
      "cells": [
        "Login-link-class",
        "login"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"email\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator",
        "Value"
      ],
      "line": 13
    },
    {
      "cells": [
        "email-txt-id",
        "email_create",
        "phuongtrantran42@yopmail.com"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Create an account button\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 16
    },
    {
      "cells": [
        "create-btn-id",
        "SubmitCreate"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \"Mrs\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 19
    },
    {
      "cells": [
        "selectGender-option-name",
        "id_gender"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter the valid datas into fields at the register form",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator",
        "Value"
      ],
      "line": 22
    },
    {
      "cells": [
        "firstName-txt-id",
        "customer_firstname",
        "Tran"
      ],
      "line": 23
    },
    {
      "cells": [
        "lastName-txt-id",
        "customer_lastname",
        "Phuong"
      ],
      "line": 24
    },
    {
      "cells": [
        "password-txt-id",
        "passwd",
        "12345678"
      ],
      "line": 25
    },
    {
      "cells": [
        "company-txt-id",
        "company",
        "Sutrix"
      ],
      "line": 26
    },
    {
      "cells": [
        "address-txt-id",
        "address1",
        "District 12"
      ],
      "line": 27
    },
    {
      "cells": [
        "city-txt-id",
        "city",
        "Ho Chi Minh"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select \"the state\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator",
        "value"
      ],
      "line": 30
    },
    {
      "cells": [
        "selectState-option-name",
        "id_state",
        "New York"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter \"postal code\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator",
        "value"
      ],
      "line": 33
    },
    {
      "cells": [
        "postalCode-txt-id",
        "postcode",
        "70000"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select \"the country\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator",
        "value"
      ],
      "line": 36
    },
    {
      "cells": [
        "selectCountry-option-id",
        "id_country",
        "United States"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \"mobile phone\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator",
        "value"
      ],
      "line": 39
    },
    {
      "cells": [
        "mobilePhone-txt-id",
        "phone_mobile",
        "0123456789"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \"the register button\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 42
    },
    {
      "cells": [
        "register-btn-id",
        "submitAccount"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on \"logo to go to the Homepage\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 45
    },
    {
      "cells": [
        "logo-link-id",
        "header_logo"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I move to \"Product 1\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 48
    },
    {
      "cells": [
        "product-1-class",
        "product-container"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I hover on \"the image of product 1\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 51
    },
    {
      "cells": [
        "product-hover-class",
        "product-container"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on \"add to cart product 1\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 54
    },
    {
      "cells": [
        "adToCart-btn-class",
        "ajax_add_to_cart_button"
      ],
      "line": 55
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I wait to see \"continue button\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 57
    },
    {
      "cells": [
        "continue-btn-class",
        "continue"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click on \"continue shopping button\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 60
    },
    {
      "cells": [
        "continue-btn-class",
        "continue"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I hover on \"the image of product 2\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 63
    },
    {
      "cells": [
        "product-hover-xpath",
        "//*[@id\u003d\"homefeatured\"]/li[2]/div"
      ],
      "line": 64
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on \"add to cart product 2\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 66
    },
    {
      "cells": [
        "adToCart-btn-xpath",
        "//*[@id\u003d\"homefeatured\"]/li[2]/div/div[2]/div[2]/a[1]"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I wait to see \"proceed button\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 69
    },
    {
      "cells": [
        "checkout-btn-xpath",
        "//*[@id\u003d\"layer_cart\"]/div[1]/div[2]/div[4]/a"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click on \"Proceed to checkout button at popup\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout-btn-xpath",
        "//*[@id\u003d\"layer_cart\"]/div[1]/div[2]/div[4]/a"
      ],
      "line": 73
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on \"Proceed to checkout at summary page\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 75
    },
    {
      "cells": [
        "checkout-btn-xpath",
        "//*[@id\u003d\"center_column\"]/p[2]/a[1]"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click on \"Proceed to checkout at address page\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 78
    },
    {
      "cells": [
        "checkout-btn-name",
        "processAddress"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I click on \"Terms of service at Shipping page\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 81
    },
    {
      "cells": [
        "tos-btn-id",
        "cgv"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click on \"Proceed to checkout at Shipping page\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 84
    },
    {
      "cells": [
        "checkout-btn-name",
        "processCarrier"
      ],
      "line": 85
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click on \"Pay by bank wire\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 87
    },
    {
      "cells": [
        "bankwire-btn-class",
        "bankwire"
      ],
      "line": 88
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I verify the total price",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator",
        "Expected price"
      ],
      "line": 90
    },
    {
      "cells": [
        "totalPrice-txt-id",
        "amount",
        "$45.515"
      ],
      "line": 91
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "I click on \"I confirm my order button\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 93
    },
    {
      "cells": [
        "confirm-btn-xpath",
        "//*[@id\u003d\"cart_navigation\"]/button"
      ],
      "line": 94
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.i_want_to_open_the_with_browser()"
});
formatter.result({
  "duration": 6493426701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in link",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 2248158200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 9
    }
  ],
  "location": "stepDefinations.i_enter_postal_code_as(String,DataTable)"
});
formatter.result({
  "duration": 142521800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create an account button",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 86712200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 1448809100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_enter_values_into_the_form(DataTable)"
});
formatter.result({
  "duration": 710519900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the state",
      "offset": 10
    }
  ],
  "location": "stepDefinations.i_select_the_state_as(String,DataTable)"
});
formatter.result({
  "duration": 97532500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postal code",
      "offset": 9
    }
  ],
  "location": "stepDefinations.i_enter_postal_code_as(String,DataTable)"
});
formatter.result({
  "duration": 87076199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the country",
      "offset": 10
    }
  ],
  "location": "stepDefinations.i_select_the_state_as(String,DataTable)"
});
formatter.result({
  "duration": 52378400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mobile phone",
      "offset": 9
    }
  ],
  "location": "stepDefinations.i_enter_postal_code_as(String,DataTable)"
});
formatter.result({
  "duration": 110212401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the register button",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 1892707100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logo to go to the Homepage",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 1753379500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 1",
      "offset": 11
    }
  ],
  "location": "stepDefinations.i_move_to(String,DataTable)"
});
formatter.result({
  "duration": 37178701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the image of product 1",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_hover_on(String,DataTable)"
});
formatter.result({
  "duration": 1112476300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add to cart product 1",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 108805399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "continue button",
      "offset": 15
    }
  ],
  "location": "stepDefinations.i_wait_to_see(String,DataTable)"
});
formatter.result({
  "duration": 1095482900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "continue shopping button",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 80078600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the image of product 2",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_hover_on(String,DataTable)"
});
formatter.result({
  "duration": 1044793700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add to cart product 2",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 68788801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proceed button",
      "offset": 15
    }
  ],
  "location": "stepDefinations.i_wait_to_see(String,DataTable)"
});
formatter.result({
  "duration": 1107104001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proceed to checkout button at popup",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 3020937100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proceed to checkout at summary page",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 1459260700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proceed to checkout at address page",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 1272533400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terms of service at Shipping page",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 63226700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proceed to checkout at Shipping page",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 1485394600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pay by bank wire",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 1140155900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_verify_the_total_price(DataTable)"
});
formatter.result({
  "duration": 668283300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I confirm my order button",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 1655386000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1319411701,
  "status": "passed"
});
});