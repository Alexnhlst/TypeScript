// Type aliases allow to assign names to type expressions
// the right-hand of the = symbol must be a type expression
export type StudentId = string;
// StudentId is just a reassignment of string
// it makes the code more readable and the logic behind the StudentId type is centralized
// if there is a need to change its definition, the change can be made in one location
// type aliases are exportable
const firstStudent: string = "5";
const lastStudent: StudentId = "123";
