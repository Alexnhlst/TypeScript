// Enums are used to represent sets of named constants. they can be used as both
// type expressions and runtime expressions
// all enums have a value associated, by default is zero indexed
// TS allows to provide a new starting value for the list of incrementing numbers
// for example HTTP.Success = 200, HTTP.NotFound = 201, HTTP.ServerError = 202
// it is possible to provde number or string values to enums
// when using string it is necessary to initialize them all, since they no longer are auto-incrementing
enum HTTP {
  success = 200,
  NotFound = 404,
  ServerError = 500,
}

// const logStatus = (status: HTTP) => {
//   switch (status) {
//     case HTTP.success:
//       console.log("200");
//       break;
//     case HTTP.NotFound:
//       console.log("404");
//       break;
//     case HTTP.ServerError:
//       console.log("500");
//       break;
//   }
// };
// the code above can be refactored as
const logStatus = (status: HTTP) => {
  console.log(status);
};
