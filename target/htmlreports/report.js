$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("forumAutomation.feature");
formatter.feature({
  "line": 1,
  "name": "Digital Point Forum Home page validation",
  "description": "",
  "id": "digital-point-forum-home-page-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Home page should be launced and validtaed",
  "description": "",
  "id": "digital-point-forum-home-page-validation;home-page-should-be-launced-and-validtaed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@regressiontest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Home Page of the forum website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User type home page url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page should be lanucned",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Hometitle is validated",
  "keyword": "And "
});
formatter.match({
  "location": "hpValidation.home_page_of_the_forum_website()"
});
formatter.result({
  "duration": 11383316500,
  "status": "passed"
});
formatter.match({
  "location": "hpValidation.user_type_home_page_url()"
});
formatter.result({
  "duration": 3895408200,
  "status": "passed"
});
formatter.match({
  "location": "hpValidation.home_page_should_be_lanucned()"
});
formatter.result({
  "duration": 231100,
  "status": "passed"
});
formatter.match({
  "location": "hpValidation.hometitle_is_validated()"
});
formatter.result({
  "duration": 24953400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Login page validation",
  "description": "",
  "id": "digital-point-forum-home-page-validation;login-page-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Login Page of the forum website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User type Login page url",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User type the UID \u003cuid\u003e and Password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Login page should be launched",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Login title is validated",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "digital-point-forum-home-page-validation;login-page-validation;",
  "rows": [
    {
      "cells": [
        "uid",
        "password"
      ],
      "line": 18,
      "id": "digital-point-forum-home-page-validation;login-page-validation;;1"
    },
    {
      "cells": [
        "nizam@digital.tech",
        "abcdef*123456"
      ],
      "line": 19,
      "id": "digital-point-forum-home-page-validation;login-page-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Login page validation",
  "description": "",
  "id": "digital-point-forum-home-page-validation;login-page-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Login Page of the forum website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User type Login page url",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User type the UID nizam@digital.tech and Password abcdef*123456",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Login page should be launched",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Login title is validated",
  "keyword": "And "
});
formatter.match({
  "location": "loginValidation.login_page_of_the_forum_website()"
});
formatter.result({
  "duration": 9943761200,
  "status": "passed"
});
formatter.match({
  "location": "loginValidation.user_type_login_page_url()"
});
formatter.result({
  "duration": 2452145300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nizam@digital.tech",
      "offset": 18
    },
    {
      "val": "abcdef*123456",
      "offset": 50
    }
  ],
  "location": "loginValidation.user_type_the_uid_and_password(String,String)"
});
formatter.result({
  "duration": 439839900,
  "status": "passed"
});
formatter.match({
  "location": "loginValidation.user_click_on_login_button()"
});
formatter.result({
  "duration": 944810700,
  "status": "passed"
});
formatter.match({
  "location": "loginValidation.login_page_should_be_launched()"
});
formatter.result({
  "duration": 266400,
  "status": "passed"
});
formatter.match({
  "location": "loginValidation.login_title_is_validated()"
});
formatter.result({
  "duration": 20612400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Course Document Information | Digital Point Forum]\u003e but was:\u003c[Invalid Login Information]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.loginValidation.login_title_is_validated(loginValidation.java:49)\r\n\tat ✽.And Login title is validated(forumAutomation.feature:16)\r\n",
  "status": "failed"
});
});