// The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

const obj = {};

Object.defineProperty(obj, 'property1', {
    value: 42,
    writable: false
});

obj.property1 = 77; // This will have no effect

console.log(obj.property1); // 42
