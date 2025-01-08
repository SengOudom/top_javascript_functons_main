// Example 1: Merging Objects
// You can use Object.assign() to merge multiple objects into one.

const defaults = { a: 1, b: 2 };
const options = { b: 3, c: 4 };

const settings = Object.assign({}, defaults, options);

console.log('With Object.assign()',settings); // { a: 1, b: 3, c: 4 }

// The spread operator is a modern and concise way to copy properties from one or more source objects to a target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const combined = { ...target, ...source };

console.log('With Spread Operator', combined); // { a: 1, b: 4, c: 5 }

console.log('===========================================');

// Example 2: Creating an Object with a Specific Prototype
// You can use Object.create() to create an object that inherits from a specific prototype.

const animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = Object.create(animal);
dog.name = 'Rover';
dog.speak(); // Rover makes a noise.