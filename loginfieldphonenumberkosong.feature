      Feature: Signup Feature on 99.co
     Scenario: Show error message when a required field is empty
    Given the user is on the 99.co signup page
    When the user not input spesific field "phone"
    And the user enters a valid name "Fany Amalia"
    And the user enters a valid email "fanycoba@yopmail.com"
    And the user enters a valid password "SecurePass123!"
    And the user clicks the sign-up button
    Then the user should see an error message "Please enter your phone number"