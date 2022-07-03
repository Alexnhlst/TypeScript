// union types allows to represent types that are one among a set of types
// the | character is used to denote an "OR" relationship between two or more types
type UserID = string | number;
let id: UserID;
id = "test1";
id = 2000000;
// when unions are applied over primitives and literals, the union is exclusive
// the value being assigned to the union type cannot be two primitives or two literals at the same time

// unions over objects are inclusive, meaning an object may match multiple types in the union
type Student = {
  name: string;
  age: number;
  major: string;
};
type Professor = {
  name: string;
  age: number;
  classes: string[];
};
type SchoolMember = Student | Professor;

let member: SchoolMember;
// this object is valid, but is this a student or a professor?
member = {
  name: "Ciara",
  age: 26,
  major: "Computer Science",
  classes: ["algorithms", "data structures"],
};
