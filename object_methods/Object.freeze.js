// The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.

const obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = 33; // This will have no effect
delete obj.prop; // This will also have no effect

console.log(obj.prop); // 42