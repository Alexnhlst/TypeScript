// A class is an OOP concept that allow the instatiation of objects
// in TS, the name of the class is the name of the default constructor,
// as well as the name of the type of the objects created by the constructor
// class User {
//   // Public properties with a declared type
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   // Public method
//   printUserInfo() {
//     console.log(`name: ${this.name}, age: ${this.age}`);
//   }
// }
// instance of the class - mike is type User
// let mike: User;
/* error: constructor needs 2 parameters
mike = new User();
error: first parameter must be type string
mike = new User(1, 2);
*/
// mike = new User("Michael", 32);
// mike.printUserInfo();

class User {
  // Private class properties
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // Getters - methods to retrieve properties
  // Setters - not yet implemented, methods to update properties
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  printUserInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

const katie = new User("Katherine", 35);
/* error: these properties are private
katie.name;
katie.getAge;
*/

console.log(katie.getName());
console.log(katie.getAge());
