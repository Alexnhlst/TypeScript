// The type number is a primitive type
// like the other types, number must be written in lowercase
// the uppercase Number refers to the wrapper object Number
// in TS, numbers are treated equally, there is no difference between double or integer
const pi = 3.14; // inferred number
const quantity: number = 92; // explicit number
// in cases an exact match to a specific number is needed, number literal types
// only accept values equal to that number
type LowPriority = 5;
type HighPriority = 1;
const y: LowPriority = 5;
// This will generated an error. Type '3' is not assignable to type '1'
// const z: HighPriority = 3;
// When working with large numbers, numeric separators come in handy to make the number more readable
const MILES_FROM_SUN = 93_000_000;
