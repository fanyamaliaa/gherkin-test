const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert"); // Import assert bawaan Node.js
const phoneRegex = /^\+\d{1,3}\d{7,}$/; // Format harus dengan kode negara

const validateField = (field) => {
  if(field.length == 0){   
    if(field == "phone"){
      return `Please enter your ${field} number`; 
    }
    return `Please enter your ${field}`;
  }else{
    return "Welcome to 99.co!";
  }
}

const validateName = (name) => {
  if(name.length == 0){   
    return "Please enter your name";
  }else{
    return "Welcome to 99.co!";
  }
}

const validateEmail = (email) => {
  if(email.length == 0){
    return "Please enter your email";
  }else{
    return "Welcome to 99.co!";
  }
}

const validatePhoneNumber = (phone) => {
  if(phone.length == 0){
    return "Please enter your phone number";
  }
  if(phone.length > 0){
     return phoneRegex.test(phone) 
    ? "Welcome to 99.co!"
    : "Phone number must include a country code";
  } 
};

const validatePassword = (password) => {
  if(password.length == 0){
    return "Please enter your password";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[\W_]/.test(password)) {
    return "Password must contain at least one symbol";
  }
    return "Welcome to 99.co!";
  
};

var errMessage = {
  name:"",
  phone:"",
  password:"",
  email:""
} ;
//akhir


Given("the user is on the 99.co signup page", function () {
  console.log("-------------------------------------------------------");
  console.log("User navigates to the signup page");
});

When("the user enters a valid name {string}", function (name) {
  console.log(`Entered name: ${name}`);
  errMessage.name = validateName(name);
});

When("the user not input spesific field {string}", function (field) {
  var emptyString = "";
  if(field == "name"){
    errMessage.name = validateName(emptyString);
  }
  if(field == "email"){
    errMessage.email = validateEmail(emptyString);
  }
  if(field == "phone"){
    errMessage.phone = validatePhoneNumber(emptyString);
  }
  if(field == "password"){
    errMessage.password = validatePassword(emptyString);
  }
});

When("the user enters a valid email {string}", function (email) {
  console.log(`Entered email: ${email}`);
  errMessage.email = validateEmail(email);
});

When("the user enters a valid phone number {string}", function (phone) {
  console.log(`Entered phone number: ${phone}`);
  errMessage.phone = validatePhoneNumber(phone);
});

When("the user enters a valid password {string}", function (password) {
  console.log(`Entered password: ${password}`);
  errMessage.password = validatePassword(password);
});

When("the user clicks the sign-up button", function () {
  console.log("Clicked the signup button");  
  // console.log(errMessage);
});

Then("the user should see a confirmation message {string}", function (message) {
  var msgValue = "";
  isFound = false;
  for (var key in errMessage) {
    if(message == errMessage[key]){
      isFound = true;
      msgValue  = errMessage[key];
      break;
    }
  }
  console.log(`Confirmation message expected: "${message}", Got: "${msgValue}"`);
  assert.equal(message, msgValue, "Message tidak sesuai");
  });

  Then("the user should see an error message {string}", function (message) {
    var msgValue = "";
    isFound = false;
    for (var key in errMessage) {
      if(message == errMessage[key]){
        isFound = true;
        msgValue  = errMessage[key];
        break;
      }
    }
    console.log(`Confirmation message expected: "${message}", Got: "${msgValue}"`);
    //console.info(errMessage);
    assert.equal(message, msgValue, "Message tidak sesuai");
    });


Then("the user should be redirected to the homepage", function () {
  console.log("User redirected to homepage");
});

