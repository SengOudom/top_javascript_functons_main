// The Object.getOwnPropertyDescriptor() method returns a property descriptor for a named property on an object.

const obj = {
    property1: 42
};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'property1');

console.log(descriptor);
// Output:
// {
//   value: 42,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }