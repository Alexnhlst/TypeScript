// Intersection types allow to express "AND" relationships between types
// they are relevant for object types, but not for primitives
// intersections can be used to extend object types, allowing to create new types that
// build off of existing ones
// Optional properties can be used in intersection types
// any properties that are shared in the types being intersected become intersections themselves
type Product = {
  title: string;
  price?: number;
  meta: {
    inStock: number;
  };
};
type Food = {
  calories: number;
  ingredients?: string[];
  meta: {
    expirationDate: Date;
  };
};
// The oreder of the types is irrelevan: Product & Food is the same
type FoodProduct = Food & Product;
const burrito: FoodProduct = {
  title: "Chicken Burrito",
  ingredients: ["chicken", "tortilla", "salsa"],
  calories: 300,
  meta: {
    inStock: 200,
    expirationDate: new Date("March 23, 2019"),
  },
}; // OK
