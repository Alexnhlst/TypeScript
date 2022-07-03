// Some of the new features introduced in the ES2015 update are treated in precedent chapters
// template literals, default parameters, rest parameters, arrow functions, es modules
// prior to ES2015, variables were declared using the var keyword
// when using var, variables are not block scoped, meaning variable declarations within if-statements
// and loop are visible outside of those blocks
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// i is 3 is printed immediately and the for statement produces only the value 3
console.log(`i is ${i}`);
// let and const allow to declare block scoped variables
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}
// j is not accessible outside the for loop
// console.log(`j is ${j}`);
// const is used to declare a constant variable
const numberOfItems = 4;
// Cannot assign to 'numberOfItems' because it is a constant.
// numberOfItems = 10;
// when used to declare variables that point to objects, the underlying object can be still be modified
// const does not enforce immutability, only enforce assignability
const weather = {
  temperature: 60,
  windSpeed: 10,
};
weather.temperature = 80;
weather.windSpeed = 20;
