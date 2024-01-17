Feature: Login to orange HRM page

    This features describes the tests to be done on Login on Orange HRM page

    Scenario: Login Scenario
        Given I am on Orange HRM login page
        When I enter the user name and password and click on login
        Then I am redirected to Orange HRM home page

    Scenario: Login Scenario using data table
        Given User enters the following incorrect details
            | username   | password           |
            | randomUser | incorrect password |
        And user clicks on the Login button
        Then "Invalid credentials" is displayed on the screen

