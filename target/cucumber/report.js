$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkOutFunction.feature");
formatter.feature({
  "line": 2,
  "name": "I create an valid account and buy products on shopping page and verify total prices after checkout",
  "description": "As a valid User\nI need to buy 2 products as ramdom\nSo that I can see the total prices after my check out.",
  "id": "i-create-an-valid-account-and-buy-products-on-shopping-page-and-verify-total-prices-after-checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ShoppingProducts"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "As a user, I create an valid account and buy products then add to cart and verify total prices after checkout",
  "description": "",
  "id": "i-create-an-valid-account-and-buy-products-on-shopping-page-and-verify-total-prices-after-checkout;as-a-user,-i-create-an-valid-account-and-buy-products-then-add-to-cart-and-verify-total-prices-after-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I want to open the URL with browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to \"Product 1\"",
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
        "product-1-class",
        "product-container"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I hover on \"the image of product 1\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 13
    },
    {
      "cells": [
        "product-hover-class",
        "product-container"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"add to cart product 1\"",
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
        "adToCart-btn-class",
        "ajax_add_to_cart_button"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I wait to see \"continue button\"",
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
        "continue-btn-class",
        "continue"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on \"continue shopping button\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 22
    },
    {
      "cells": [
        "continue-btn-class",
        "continue"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I hover on \"the image of product 2\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 25
    },
    {
      "cells": [
        "product-hover-xpath",
        "//*[@id\u003d\"homefeatured\"]/li[2]/div"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \"add to cart product 2\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 28
    },
    {
      "cells": [
        "adToCart-btn-xpath",
        "//*[@id\u003d\"homefeatured\"]/li[2]/div/div[2]/div[2]/a[1]"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I wait to see \"proceed button\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 31
    },
    {
      "cells": [
        "checkout-btn-xpath",
        "//*[@id\u003d\"layer_cart\"]/div[1]/div[2]/div[4]/a"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on \"Proceed to checkout\"",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator"
      ],
      "line": 34
    },
    {
      "cells": [
        "checkout-btn-xpath",
        "//*[@id\u003d\"layer_cart\"]/div[1]/div[2]/div[4]/a"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify the total price",
  "rows": [
    {
      "cells": [
        "eName",
        "eLocator",
        "Expected price"
      ],
      "line": 37
    },
    {
      "cells": [
        "totalPrice-txt-id",
        "total_price",
        "$165.55"
      ],
      "line": 38
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.i_want_to_open_the_with_browser()"
});
formatter.result({
  "duration": 17933621388,
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
  "duration": 1072635745,
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
  "duration": 1187913263,
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
  "duration": 81100739,
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
  "duration": 1120375300,
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
  "duration": 62490590,
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
  "duration": 1046502621,
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
  "duration": 67135237,
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
  "duration": 1079674508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proceed to checkout",
      "offset": 12
    }
  ],
  "location": "stepDefinations.i_click_on(String,DataTable)"
});
formatter.result({
  "duration": 2015950900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_verify_the_total_price(DataTable)"
});
formatter.result({
  "duration": 2401924784,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.i_close_the_browser()"
});
formatter.result({
  "duration": 137005343,
  "status": "passed"
});
});