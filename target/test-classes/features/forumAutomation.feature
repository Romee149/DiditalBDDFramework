Feature: Digital Point Forum Home page validation
@regressiontest
Scenario: Home page should be launced and validtaed 
Given Home Page of the forum website 
When User type home page url
Then Home page should be lanucned 
And Hometitle is validated 

@smoketest
Scenario Outline: Login page validation 
Given Login Page of the forum website 
When User type Login page url
And User type the UID <uid> and Password <password>
And User click on login button
Then Login page should be launched
And Login title is validated 
Examples:
|uid|password|
|nizam@digital.tech|abcdef*123456|
