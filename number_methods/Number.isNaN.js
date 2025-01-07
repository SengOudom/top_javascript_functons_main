// The Number.isNaN() method determines whether the passed value is NaN (Not-a-Number).

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN('10')); // false
console.log(Number.isNaN(Number('abc'))); // true