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

// structural typing (or duck typing) means that the structure of an object's type determines its assignability
// in other languages, such as C++ or Java, nominal typing uses the name of an object's type to determine its assignability
// the duck test states "If it walks like a duck and it quacks like a duck, then it must be a duck"
type Phone = {
  name: string;
  id: string;
  rating: number;
};

let iPhone: Phone;
iPhone = {
  name: "iPhone",
  id: "uniqueID123",
  rating: 10,
};
// the shape of the literal has to exactly match the shape that is defined in the Phone type
/* the following example will produce an error since the name field is missing
and two excess fields are present
iPhone = {
  title: "iPhone",
  id: "uniqueID123",
  rating: 3,
  // excess fields
  randomField: "Hi mom!", 
  anotherRandomField: 2, 
};
*/
const android = {
  title: "Android",
  name: "Android",
  id: "uniqueID123",
  rating: 3,
  randomField: "Hi dad!",
  anotherRandomField: 10000,
};
// when assigning it to an existing object, only the missing field will produce an error
iPhone = android;
// object literals undergo what is known as excess property checking
// it ensures that only properties defined in the object type are present

// properties in the objects are not alwats required
// to mark properties as oprional, the ? character is used
type Student = {
  id: string;
  name: string;
  age?: number;
  isEnrolled?: boolean;
};
