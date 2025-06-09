// function x() {
//   //   var i = 10;
//   function y() {
//     for (var i = 1; i <= 5; i++) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//       // console.log("Akshat Vedant");
//     }
//   }
//   y();
// }

// x();

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }

//     close(i);
//   }
// }

// a();

// function x() {
//   function y() {
//     for (var i = 1; i <= 5; i++) {
//       (function (i) {
//         setTimeout(function () {
//           console.log(i);
//         }, i * 1000);
//       })(i);
//     }
//   }
//   y();
// }

// x();

// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }

// // var z = outer();
// // console.log(z);
// // outer()();
// outer();

/*
    Suppose i pass a parameter in the outer function , it will still form a closure with its parent*/

function outer(b) {
  let a = 10;
  function inner() {
    console.log(a, b);
  }
  inner();
}

// var z = outer();
// console.log(z);
// outer()();
outer("hello world");
