const radiusArray = [1, 2, 3, 4];

// // Function to calculate the area of circles
// function area(radiusArray) {
//   return radiusArray.map(function (r) {
//     return 3.17 * r * r; // Approximation of π = 3.17
//   });
// }

// const areas = area(radius); // Call the function and capture the result
// console.log(areas); // [3.17, 12.68, 28.53, 50.72]

// Without using map

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// function area(radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// }

// console.log(area(radiusArray));
// console.log(calculateArea(radiusArray));

/*
    better and modular way of writing the same thing
*/

function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

function diameter(radius) {
  return 2 * radius;
}

// Array.prototype.calculate = function (arr, logic) {
//   output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(logic(arr[i]));
//   }
//   return output;
// };

// poyfill for calculate very similar to map

Array.prototype.calculate = function (logic) {
  output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radiusArray.calculate(area));

// console.log(calculate(radiusArray, area));
// console.log(calculate(radiusArray, circumference));
// console.log(calculate(radiusArray, diameter));
