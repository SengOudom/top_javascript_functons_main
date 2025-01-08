// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

const obj = {
    prop: 'exists'
};

console.log(obj.hasOwnProperty('prop')); // true
console.log(obj.hasOwnProperty('toString')); // false
console.log(obj.hasOwnProperty('hasOwnProperty')); // false