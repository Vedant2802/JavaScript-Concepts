// var x = 7;
// function getName() {
//   console.log("Namste");
// }

// getName();
// console.log(x);

// now if we do this

// getName();
// console.log(x);

// var x = 7;
// function getName() {
//   console.log("Namste");
// }

/*
Hoisting works a lot different in case of Let and Const , in fact they are hoisted but they are in a temporal dead zone.
*/
// console.log(a);
// // var a = 10;
// let a = 10;

// If you run this , it will give you an error as "Cannot access 'a' before initialization"

// let a = 10;
// function sum() {
//   let a = 90;
//   console.log(a);
// }
// console.log(a);
// sum();

/*
    Let and const are Block Scoped.
*/
