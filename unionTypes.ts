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

// discriminated unions, also referred to as tagged unions or disjoint unions, allow to discriminate the types that comprise a union
// a discriminant (or tag) must be added to both types and will serve as a differentiator for that type
type StudentDiscriminant = {
  role: "student";
  name: string;
  age: number;
  major: string;
};
type ProfessorDiscriminant = {
  role: "professor";
  name: string;
  age: number;
  classes: string[];
};
type SchoolMemberDiscriminant = StudentDiscriminant | ProfessorDiscriminant;

// as soon as a function that consumes a SchoolMember is created, TypeScript does not allow to access
// unique properties of Student or Professor
let memberDiscriminant: SchoolMemberDiscriminant;

const logMember = (memberDiscriminant: SchoolMemberDiscriminant) => {
  console.log(memberDiscriminant.role);
  console.log(memberDiscriminant.name);
  console.log(memberDiscriminant.age);
  // these will genereate an error
  // console.log(memberDiscriminant.major)
  // console.log(memberDiscriminant.classes)
  // type guards are conditional checks that can use the discriminants at runtime to determine
  // the type of a union in a given scope
  if (memberDiscriminant.role === "student") {
    console.log(memberDiscriminant.major);
  }
  if (memberDiscriminant.role === "professor") {
    console.log(memberDiscriminant.classes);
  }
};
