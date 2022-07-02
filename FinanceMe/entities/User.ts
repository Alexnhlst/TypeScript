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

import TrackedMonth from "./TrackedMonth";
import genUniqueId from "../utils/genUniqueId";
import Month from "../types/Month";

class User {
  // Private class properties
  private name: string;
  private id: string;
  private trackedMonths: TrackedMonth[];
  constructor(name: string, trackedMonths: TrackedMonth[]) {
    this.updateName(name);
    this.trackedMonths = trackedMonths;
    this.id = genUniqueId();
  }
  // Getters - methods to retrieve properties
  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  updateName(name: string) {
    this.name = name;
  }
  getTrackedMonths(): TrackedMonth[] {
    return this.trackedMonths;
  }
  getTrackedMonthByDate(month: Month, year: number): TrackedMonth {
    return this.getTrackedMonths().find(
      (trackedMonth) =>
        trackedMonth.getMonth() === month && trackedMonth.getYear() === year
    );
  }
}

export default User;
