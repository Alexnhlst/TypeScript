// functions are the backbone of code reusability
// TS makes it painless to add type annotations to functions
// typing functions consist of typing the parameters and typing the return value
// the line that defines the input types and return type is known as the function signature
const toNumber = (str: string | number): number => {
  return Number(str);
};
// is common sense for some of a function's parameters to be optional
// optional parameters must come after any and all required parameteres
const formatMoney = (
  amount: number,
  prefix?: string,
  decimalPlaces?: number
): string => {
  let formattedMoney = String(amount);
  if (decimalPlaces !== undefined) {
    formattedMoney = amount.toFixed(decimalPlaces);
  }
  if (prefix) {
    formattedMoney = `${prefix}${formattedMoney}`;
  }
  return formattedMoney;
};

// Default parameters allow to set default values for parameters that are not provided
const getTip = (
  bill: number,
  percentage: number = 20,
  minimum: number
): number => {
  const calculatedTip = (percentage / 100) * bill;
  return Math.max(calculatedTip, minimum);
};

// rest parameters allow to defune an indeterminate number of function parameters
// this is useful for functions that have unbounded input
const sum = (...nums: number[]): number => {
  const startingValue = 0;
  const add = (prev: number, curr: number) => prev + curr;
  // Array.reduce() iterates over each value, adding the current value to the previous one
  // returning the result of the sum at each iteration
  // the returned sum becomes the prev in the nex iteration
  return nums.reduce(add, startingValue);
};

// Overloading allows to define multiple functions signatures for one function
// it's like as pattern matcching based on the input types that a function is called with
/*const prefix = (pre: string, word: string | string[]): string | string[] => {
  if (typeof word === "string") {
    return `${pre}${word}`;
  }
  return word.map((w) => `${pre}${w}`);
};*/
// an error is risen when the return value is used as either a string or an array
/*const book = prefix("fullstack ", "TypeScript");
book.substring(10);
const books = prefix("fullstack ", ["TypeScript", "React"]);
books.push("fullstack Vue");*/
// union return types are not dynamic
// to fix this problem, overloads are created to specify dynamic return types based on the input
// the order of overloads is important
// the matching runs from top to bottom, the most specific overloads must be placed first
// overload 1: if word is type string, return a string
function prefix(pre: string, word: string): string;
// overload 2: if word is type string[], return a string[]
function prefix(pre: string, word: string[]): string[];
// function implementation
function prefix(pre: string, word: string | string[]): string | string[] {
  if (typeof word === "string") return `${pre}${word}`;
  return word.map((w) => `${pre}${w}`);
}
