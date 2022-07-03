// TS has the concept of Modules, which encapsulate related code
// TS modules allow to divide the code into several files
// runtime declarations (classes, variables, functions) and compile-time declaration (type aliases and infterfaces) can be exported
// named exports are used to export multiple declaration from one file
export const MAX_NUMBER = Infinity;
export function getMax(numbers: number[]): number {
  return Math.max(...numbers);
}
export function getMin(numbers: number[]): number {
  return Math.min(...numbers);
}
// to import named exports in another file, an import statement is used
// import { getMax, getMin, MAX_NUMBER } from "./numberUtils";
// Default exports are used when a file containss only one import
