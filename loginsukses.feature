Feature: Signup Feature on 99.co


  Scenario: Successful sign up with valid details
    Given the user is on the 99.co signup page
    When the user enters a valid name "Fany Amalia"
    And the user enters a valid email "fanycoba@yopmail.com"
    And the user enters a valid phone number "+6289666058913"
    And the user enters a valid password "SecurePass123!"
    And the user clicks the sign-up button
    Then the user should see a confirmation message "Welcome to 99.co!"




  






 