// Example 1: Validating User Input

// When accepting user input for numerical fields, you can use Number.isFinite() to ensure the input is a valid number.

function validateInput(input) {
    if (Number.isFinite(Number(input))) {
      console.log("Valid number");
    } else {
      console.log("Invalid number");
    }
  }
  
  validateInput("123"); // Valid number
  validateInput("abc"); // Invalid number

console.log('===========================================');

// Example 2: Formatting Prices

// You can use toFixed() to format prices to two decimal places.

let price = 19.99399;
console.log("Price: $" + price.toFixed(2)); // Price: $19.99

console.log('===========================================');

// Example 3: Scientific Calculations

// Use toExponential() for scientific calculations and displaying large numbers in a readable format.

let largeNum = 123456789;
console.log(largeNum.toExponential(3)); // "1.235e+8"

