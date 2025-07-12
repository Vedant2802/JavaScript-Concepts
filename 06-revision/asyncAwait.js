// async function foo() {
//   //   return 101;
//   return Promise.resolve(101);
// }

// let value = foo();
// console.log(value);

// value.then((result) => {
//   console.log(result);
// });

// const prm = new Promise((resolve, reject) => {
//   // resolve("Akshat");
//   reject("Vedant");
// })
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((x) => {
//     console.log(x);
//   });

/*
  When you write async keyword behind a function , it means that it is going to return a promise
*/

// async function foo(params) {
//   return Promise.resolve("101");
// }

// const result = await foo();
// console.log(result);

// const myPromise = new Promise((resolve, reject) => {
//   reject("This is incorrect");
// });

// async function foo() {
//   try {
//     const data = await myPromise;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// foo();

const pikachu = "https://pokeapi.co/api/v2/pokemon/pikachu";
const bulbasur = "https://pokeapi.co/api/v2/evolution-chain/1/";
const thunderbolt = "https://pokeapi.co/api/v2/move/thunderbolt";

async function resolvePromises() {
  const data = await Promise.allSettled([
    fetch(pikachu).then((result) => {
      return result.json();
    }),
    fetch(bulbasur).then((result) => {
      return result.json();
    }),
    fetch(thunderbolt).then((result) => {
      return result.json();
    }),
  ]);

  console.log(data);
}

resolvePromises();
