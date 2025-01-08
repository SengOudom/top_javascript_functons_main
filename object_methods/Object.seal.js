// The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

const obj = {
    prop: 42
};

Object.seal(obj);

obj.prop = 33; // This will work
delete obj.prop; // This will not work

console.log(obj.prop); // 33