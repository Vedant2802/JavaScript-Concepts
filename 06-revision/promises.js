// const promise = new Promise(function (resolve, reject) {});

// Executor function
// resolve and reject are callbacks give to us by javascript itself

/*
    function (resolve, reject) {}
*/

// states
// pending , fulfilled , rejected

// result -
// undefined : initially when in pending state
// value : when resolved
// error : when rejected

// let promise = new Promise(function (resolve, reject) {
//   resolve("Hey I am done");
// });

// let promise2 = new Promise(function (resolve, reject) {
//   reject("Hey I am not done");
// });

// Handling Promises

// .then()
// const promise = new Promise(function (resolve, reject) {
//   resolve("I have resolved this");
//     reject("I am rejected");
// });

// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.error(error);
//   }
// );
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally called");
//   });
// .catch()
// .finally()

/*
  Some Must remember rules 

  1. Every Resolved Promise gives you a .then() handler , every Rejected Promise gives a .catch() handler

  2. You can mainly do 3 important things from the .then() method , You can return any other promise , 
  (asynchronous) , you can return a resolved value , You can throw an error

  3. unlike .then() and .catch() , the .finally() , handler does not process the result value or error , It just passes the result as is to the next handler

  4. calling a .then() handler multiple times on a single promise is not chaining

*/

// Return a promise from the .then() handler

// let getUser = new Promise(function (resolve, reject) {
//   const user = {
//     name: "John",
//     email: "john.com",
//     password: "john@123",
//   };
//   resolve(user);
// });

// getUser
//   .then((result) => {
//     console.log(`Got user ${result.name}`);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("New Delhi");
//       }, 2000);
//     });
//   })

//   .then((res) => {
//     console.log(`The address is ${res}`);
//   });

// Rule 3 example

// let promiseFinally = new Promise(function (resolve, reject) {
//   resolve("Testing Finally...");
// });

// promiseFinally
//   .finally(() => {
//     console.log("running finally()...");
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Rule 4 example

// let promise = new Promise(function (resolve, reject) {
//   //   this.value = 99;
//   resolve(this);
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise.then((res) => {
//   console.log(res);
// });

// Handle multiple promises

// Promise.all([promises])

const pikachu = "https://pokeapi.co/api/v2/pokemon/pikachu";
const bulbasur = "https://pokeapi.co/api/v2/evolution-chain/1/";
const thunderbolt = "https://pokeapi.co/api/v2/move/thunderbolt";

// const getPikachu = fetch(pikachu);
// getPikachu
//   .then(function (result) {
//     return result.json();
//   })
//   .then((res) => {
//     console.log(res);
//     return res;
//   });

let promise_1 = fetch(pikachu);
let promise_2 = fetch(bulbasur);
let promise_3 = fetch(thunderbolt);

// Promise.all([promise_1, promise_2, promise_3])
//   .then((res) => {
//     console.log(res);
//     // return res.json();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// In Promise.all() , if any of the promises fail , all the other also fails

// Promise.any([promises])

// Promise.any([promise_1, promise_2, promise_3])
//   .then((res) => {
//     console.log(res);
//     // return res.json();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// In this whichever promise if fulfilled first , that is returned

// Promise.allSettled([promises])
// Settling a promise means fulfilling or rejecting

// Promise.allSettled([promise_1, promise_2, promise_3])
//   .then((res) => {
//     console.log(res);
//     // return res.json();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.race[promises]
// Returns the first promise settled , either resolved or rejected

// Promise.race([promise_1, promise_2, promise_3])
//   .then((res) => {
//     console.log(res);
//     // return res.json();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// How to cancel a promise
