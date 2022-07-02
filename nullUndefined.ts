// by default, null and undefined types are assignable to all types
const a: number = null; // OK
const b: string = null; // OK
const c: undefined = null; // OK

const x: number = undefined; // OK
const y: string = undefined; // OK
const z: null = undefined; // OK
