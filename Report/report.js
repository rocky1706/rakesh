$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/fblogin.feature");
formatter.feature({
  "name": "To validate login functionality for facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the url page of facebook application",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data \"\u003cemaildatas\u003e\" in email feild",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass the data \"\u003cpassworddatas\u003e\" in password feild",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click the button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "rakeshanand123@gmail.com",
        "6472363"
      ]
    },
    {
      "cells": [
        "sanjaisandy@gmail.com",
        "teethone"
      ]
    },
    {
      "cells": [
        "bobbalaji@gmail.com",
        "574637"
      ]
    },
    {
      "cells": [
        "vikramnova@gmail.com",
        "73388873"
      ]
    },
    {
      "cells": [
        "sridhar32@gmail.com",
        "balaji"
      ]
    },
    {
      "cells": [
        "kuttikunjan12@gmail.com",
        "kutti"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fbLogin.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the url page of facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "fbLogin.user_has_to_launch_the_url_page_of_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"rakeshanand123@gmail.com\" in email feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_email_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"6472363\" in password feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_password_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the button",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_click_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fbLogin.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the url page of facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "fbLogin.user_has_to_launch_the_url_page_of_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"sanjaisandy@gmail.com\" in email feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_email_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"teethone\" in password feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_password_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the button",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_click_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fbLogin.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the url page of facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "fbLogin.user_has_to_launch_the_url_page_of_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"bobbalaji@gmail.com\" in email feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_email_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"574637\" in password feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_password_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the button",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_click_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fbLogin.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the url page of facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "fbLogin.user_has_to_launch_the_url_page_of_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"vikramnova@gmail.com\" in email feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_email_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"73388873\" in password feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_password_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the button",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_click_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fbLogin.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the url page of facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "fbLogin.user_has_to_launch_the_url_page_of_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"sridhar32@gmail.com\" in email feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_email_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"balaji\" in password feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_password_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the button",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_click_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fbLogin.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the url page of facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "fbLogin.user_has_to_launch_the_url_page_of_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"kuttikunjan12@gmail.com\" in email feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_email_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"kutti\" in password feild",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_pass_the_data_in_password_feild(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the button",
  "keyword": "And "
});
formatter.match({
  "location": "fbLogin.user_has_to_click_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fbLogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});