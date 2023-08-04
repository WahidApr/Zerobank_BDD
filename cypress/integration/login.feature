Feature: Login to Application

    As a valid and invalid user
    I Want to login into Application

    Scenario: Valid Login
    Given I open login page 
    When I have logged in
    Then I should see home page


    Scenario: Invalid Login
    Given I open login page
    When I submit login
    Then I Failed to login 
    And Should show an alert for a failed login