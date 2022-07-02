// arrays are used to represent sequential collections of data
const numbers = [1, 2, 3]; // inferred number[]
const strings = ["a", "b"]; // inferred string[]
const strsOrNums = ["a", 2]; // inferred (number | string)[]
// in TS there are two ways of representing them
// using square-bracket notation
// const numsOrStrs1: (string | number)[] = numbers.concat(strings);
// or using the generic array type, which is preferred
const numsOrStrs2: Array<string | number> = numbers.concat(strings);
// the type of strsOrNums is (number | string)[]
// TS interprets each element as having the same type. whent trying to assign an element
// in the array to a more specific type, an error is raised
// Type 'string | number' is not assignable to type 'number'.
//   Type 'string' is not assignable to type 'number'.
// const myNum: number = strsOrNums[1]
// to fix this there are two possible solutions:
// type the array as a tuple
// use a type assertion
const myNum: number = strsOrNums[1] as number;
