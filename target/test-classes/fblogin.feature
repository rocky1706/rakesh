@Feature1
Feature: To validate login functionality for facebook application

Background:
Given To launch the browser and maximize the window

@Regression
Scenario: To validate login with invalid username and valid password
When To launch the url page of facebook application
And To pass the username in email feild
And To pass the password in password feild
And To click the button
Then To close the browser

@Smoke
Scenario Outline: To validate the positive and negative combination of login
When User has to launch the url page of facebook application
And User has to pass the data "<emaildatas>" in email feild
And User has to pass the data "<passworddatas>" in password feild 
And User has to click the button
Then User has to close the browser

Examples:
|emaildatas              |passworddatas|
|rakeshanand123@gmail.com|6472363      |
|sanjaisandy@gmail.com   |teethone     |
|bobbalaji@gmail.com     |574637       |
|vikramnova@gmail.com    |73388873     |
|sridhar32@gmail.com     |balaji       |
|kuttikunjan12@gmail.com |kutti        |

