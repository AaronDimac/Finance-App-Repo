const assert = require('assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const { OnSubmit } = require('./scripts.js'); // Import OnSubmit

// Load the HTML file to simulate the DOM
const html = fs.readFileSync('./finance-app.html', 'utf8');

// Create a virtual DOM using JSDOM
const dom = new JSDOM(html, { runScripts: "dangerously" });

// Attach the virtual DOM to the Node.js global object
global.window = dom.window;
global.document = dom.window.document;

// Test functions
function testFirstNameValidation() {
  console.log("Running First Name Validation Test...");

  const errorDiv = document.getElementById("error");
  const firstNameInput = document.getElementById("first_name");

  // Test long first name
  firstNameInput.value = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; // 51 a's

  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("First name must be less than 50 characters."),
    "Long first name validation failed"
  );

  // Test empty first name
  firstNameInput.value = "";
  
  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("First name must be greater than 1 character."),
    "Empty first name validation failed"
  );
  console.log("First Name Validation Test Passed!");
}

function testLastNameValidation() {
  console.log("Running Last Name Validation Test...");

  const errorDiv = document.getElementById("error");
  const lastNameInput = document.getElementById("last_name");

  // Test long last name
  lastNameInput.value = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; // 51 a's
  
  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("Last name must be less than 50 characters."),
    "Long last name validation failed"
  );

  // Test empty last name
  lastNameInput.value = "";
  
  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("Last name must be greater than 1 character."),
    "Empty last name validation failed"
  );

  console.log("Last Name Validation Test Passed!");
}

function testEmailValidation() {
  console.log("Running Email Validation Test...");

  const errorDiv = document.getElementById("error");
  const emailInput = document.getElementById("email");

  // Test invalid email
  emailInput.value = "invalid@email";
  
  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("Invalid email format."),
    "Invalid email format validation failed"
  );

  // Test invalid email
  emailInput.value = "invalid.email";

  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("Invalid email format."),
    "Invalid email format validation failed"
  );

  console.log("Email Validation Test Passed!");
}

function testPasswordValidation(){
  console.log("Running Password Validation Test...");

  const errorDiv = document.getElementById("error");
  const passwordInput = document.getElementById("password");

  // Test long password
  passwordInput.value = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; // 51 a's

  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("Password must be less than 50 characters."),
    "Long password validation failed"
  )

  // Test short password
  passwordInput.value = "aaaaaaa"; // 7 a's

  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("Password must be greater than 7 characters."),
    "Short password validation failed"
  )
}

function testSINValidation() {
  console.log("Running SIN Validation Test...");

  const errorDiv = document.getElementById("error");
  const sinInput = document.getElementById("sin");

  // Test invalid SIN length
  sinInput.value = "123";
  
  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("SIN must be 9 characters."),
    "Invalid SIN length validation failed"
  );

  // Test non-numeric SIN
  sinInput.value = "12345a6789";
  
  OnSubmit();
  assert(
    errorDiv.innerHTML.includes("SIN must be all numbers."),
    "Non-numeric SIN validation failed"
  );

  console.log("SIN Validation Test Passed!");
}

// Run all tests
function runTests() {
  try {
    testFirstNameValidation();
    testLastNameValidation();
    testEmailValidation();
    testSINValidation();
    console.log("All tests passed!");
  } catch (error) {
    console.error("Test failed: ", error.message);
  }
}

runTests();
