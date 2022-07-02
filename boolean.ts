// Boolean represents true or false
// a boolean literal type can be used
const w = true; // inferred boolean
const x: boolean = false; // explicit boolean
type Yes = true;
type No = false;
// This will generate an error. Type 'false' is not assignable to type 'true'.
// const z: Yes = false;
