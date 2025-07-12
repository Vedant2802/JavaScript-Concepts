// function multiply(x, y) {
//   console.log(x * y);
// }

// this is currying using bind method
// let multiplyByTwo = multiply.bind(this, 2);
// let multiplyByThree = multiply.bind(this, 3);

// multiplyByTwo(5);

// Currying using function closures

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

multiply(2)(3);
