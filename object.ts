// object types allow to descrive the structure of the application's data
// object types include a type that represents any non-primitive,
// or a type that conveys the keys and values of an object
// the built-in object type is assignable to non-primitives
let x: object;
// object is used when an object key/value pairs are irrelevant
// a value with type object can still access methods and properties that are available to all JS objects
// such as toString() and valueOf(), inherited from Object.prototype
x = { random: true };
// when using object as a type of a function's parameter, the function's body
// and return type should not make any assumptions about the properties of the given object
let numKey = (obj: object): number => {
  return Object.keys(obj).length;
};
const products = {
  id1: "Toilet paper",
  id2: "Water",
  id3: "Keyboard",
};
const numProducts = numKey(products);
console.log(numProducts);
// Object refers to an interface that defines properties and methods that are shared by all objects
// {} refers to the empty object type, which in practice behaves the same as Object
// they are misleading as they are assignable to primitives in addition to objects
// object requires a type that is only assignable to non-primitives
