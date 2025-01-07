// Boolean methods and operators are commonly used in conditional statements and loops to control the flow of a program.

// Example use case in a conditional statement
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome, user!");
} else {
    console.log("Please log in.");
}

// Example use case in a loop
let count = 1;

while (count < 5) {
    if(count % 2 === 0) {
        console.log("Even numbers: " + count);
    }else{
        console.log("Odd numbers: " + count);
    }
    count++;
}