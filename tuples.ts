// Similar to array types, tuples types represent sequential collections of data
// tuples convey the length and order of the elements in the array
type RGB = [number, number, number];
let color: RGB = [200, 200, 200];
// methods like Array.push() and Array.shift() sidestep type-checking by allowing
// any value to be added or removed from the arrau
// to avoid unexpected runtime errors is better to use index notation
// to make an element optional in a tuple, a ? can be appended to the optional value
type RGBA = [number, number, number, number?];
let color2: RGBA = [255, 255, 255];
let color3: RGBA = [255, 255, 255, 0.5];
