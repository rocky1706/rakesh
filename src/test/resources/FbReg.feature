@Feature2
Feature: To validate the account creation of facebook application
@Sanity
Scenario: To create new account
Given To launch the browser and maxmize the window
When To launch the url of facebook application 
And To click the create new account button
And To pass the firstname in firstname text box
|firstname1|rakesh|
|firstname2|sanjai|
|firstname3|balaji|
And To pass the surename in surename text box
And To pass the email in email feild
|email1                  |email2               |email3             |
|rakeshanand342@gmail.com|sandysanjai@gmail.com|bobbalaji@gmail.com|
|kakashi1000@gmail.com   |vikramnova@gmail.com |srirs@gmail.com    |
And To create new password in password feild
Then To close the browser
