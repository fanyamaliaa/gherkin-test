
   Feature: Signup Feature on 99.co
    Scenario: Show error message when a required field is empty
    Given the user is on the 99.co signup page
    When the user not input spesific field "password"
    And the user enters a valid name "Fany Amalia"
    And the user enters a valid email "fanycoba@yopmail.com"
    And the user enters a valid phone number "089666058913"
    And the user clicks the sign-up button
    Then the user should see an error message "Please enter your password"

 Scenario: Show user must be at least 8 characters long
    Given the user is on the 99.co signup page
    When the user enters a valid name "Fany Amalia"
    And the user enters a valid email "fanycoba@yopmail.com"
    And the user enters a valid phone number "+6289666058913"
    And the user enters a valid password "fan123!"
    And the user clicks the sign-up button
    Then the user should see an error message "Password must be at least 8 characters long"


# Scenario: Show user must be at least 8 characters long
#     Given the user is on the 99.co signup page
#     When the user not input spesific field "password"
#     And the user enters a valid name "Fany Amalia"
#     And the user enters a valid email "fanycoba@yopmail.com"
#     And the user enters a valid phone number "089666058913"
#     And the user enters a valid password "fan123!"
#     And the user clicks the sign-up button
#     Then the user should see an error message "Password must contain at least one uppercase letter"