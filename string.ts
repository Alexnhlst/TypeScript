// String in TS can be represented in single 'quotes', "double quotes" or using template `literals`
const firstName = "Pam"; // inferred string
const greeting: string = `Hi ${firstName}`; //explicit string
// Like number, a string literal type can be used to ensure that only a specific string is accepted
// for example, to model all days of the week, a union of strin literal types can be used
type WeekDay =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";
// This will generate an error ype '"Satday"' is not assignable to type 'WeekDay'. Did you mean '"Saturday"'?
// const dayTypo: WeekDay = "Satday";
