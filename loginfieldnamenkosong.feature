Feature: Signup Feature on 99.co
Scenario: Show error message when a name field is empty
  Given the user is on the 99.co signup page
  When the user not input spesific field "name"
  And the user enters a valid email "fanycoba@yopmail.com"
  And the user enters a valid phone number "089666058913"
  And the user enters a valid password "SecurePass123!"
  And the user clicks the sign-up button
  Then the user should see an error message "Please enter your name"