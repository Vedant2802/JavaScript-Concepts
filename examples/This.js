// "use strict";

// // This in Global Space represent the global object
// console.log(this); //Global Oject

/*
  In case of browser the global object is window
*/

/*
   This inside function
*/
// function x() {
//   console.log(this);
// }

// // x();

/*  
   This value also dependes on how it is called
*/
// x();

/*
   depends on how the function is called
*/
// window.x();

// // const arr = [1, 2, 3, 45, 67];
// // // const data = arr.filter((x) => x > 10);
// // const data = arr.filter(function (x) {
// //   if (x < 10) return x;
// // });
// // console.log(data);

/*  
   This keyword inside an object method
*/

// const obj = {
//   a: 10,
//   b: 20,
//   c: 30,
//   x: function () {
//     console.log(this.a);
//   },
// };

// // in this case the value of "This" keyword becomes the object
// obj.x();
// // prints 10

// let obj = {
//   name: "Akshat",
//   age: 34,
// };
// console.log(this);
// function x() {
//   console.log(this);
// }
// // obj.x();
// x();

/* 
  This inside Arrow functions
*/
// Arrow functions do not have a this binding of their own,
// it reatains the this value of its enclosing lexical context.

// let obj = {
//   name: "akshat",
//   age: 10,
//   printAge: function () {
//     const y = () => {
//       console.log(this.name);
//     };
//     y();
//   },
// };

// this consoles the name Akshat

let obj2 = {
  name: "akshat",
  age: 10,
  printAge: () => {
    console.log(this);
  },
};

obj2.printAge();

// this consoles the window object
