// Type aliases are used to statically enforce that only valid values are passed to a constructor
// they use the type keyword to assign a name to the result of a type expression
// the type MOnth ensures that only values between 1 and 12 can be used
type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export default Month;
