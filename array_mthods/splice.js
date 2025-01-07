// The splice() method changes the contents of an array by removing, replacing, or adding elements.

// Example:

let fruits = ['apple', 'banana', 'orange', 'mango'];
// Remove 1 element at index 1, and add 'grape' and 'kiwi'
let removedElements = fruits.splice(1, 1, 'grape', 'kiwi');
console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'orange', 'mango']
console.log(removedElements); // Output: ['banana']