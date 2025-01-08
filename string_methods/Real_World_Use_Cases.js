// Example 1: Checking for Substrings
// You can use includes() to check if a string contains a specific substring.

let email = "user@example.com";
if (email.includes("@")) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}

console.log('===========================================');

// Example 2: Extracting Substrings
// You can use slice(), substring(), or substr() to extract parts of a string.

let url = "https://www.example.com";
let domain = url.slice(8);
console.log(domain); // Output: "www.example.com"

console.log('===========================================');

// Example 3: Formatting Text
// You can use toLowerCase() and toUpperCase() to format text.

let name = "John Doe";
let formattedName = name.toUpperCase();
console.log(formattedName); // Output: "JOHN DOE"