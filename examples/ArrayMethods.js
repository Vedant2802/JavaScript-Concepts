const arr = [1, 2, 3, 4, 5];

// const double = function (x) {
//   return x * 2;
// };

// const output = arr.map(double);

// const calculate = function (ar, logic) {
//   const output = [];
//   for (i = 0; i <= ar.length; i++) {
//     output.push(logic(ar[i]));
//   }
//   return output;
// };

// const total = calculate(arr, double);
// console.log(total);
// // console.log(output);

// We can do this also in JS , We can pass complete functions insied jsavascript , that is why
// it is called higher order functions

// const output = arr.map(function (x) {
//   return x * 2;
// });

// Another method using arrow funcitons

// const output = arr.map((x) => x * 2);

// console.log(output);

/*
    Even if you do not declare i explicitly , JS has something called implicit global variable declaration
    ot declares the variable i globally , but that is not the correct way of doing this.
*/

// function findSum(a) {
//   sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum = sum + a[i];
//   }
//   return sum;
// }

// const output = findSum(arr);
// console.log(output);

// Doing that using reduce function

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);

const array1 = [
  {
    name: "Akshat Vedant",
    age: 24,
  },
  { name: "saddsad Vedant", age: 56 },

  { name: "Aksgergeghat Vedant", age: 25 },
  { name: "Akshatehrtht Vedant", age: 66 },
];

// filter out people with age less than 30

function filter(x) {
  const emptArray = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i].age < 30) {
      emptArray.push(x[i]);
    }
    return emptArray;
  }
}

const main = filter(array1).map((a) => a.name);
console.log(main);
// const output = array1.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// });

// console.log(output);

// const output = array1.filter((x) => {
//   const emptArray = [];
//   if (x.age == x.age) {
//     emptArray.push(x.name);
//   } else {
//     return emptArray;
//   }
//   return emptArray;
// });

// console.log(output);

/*
    key learning here 
    You use bracket notation when the key is dynamic or not a valid JavaScript identifier (e.g., numbers, spaces, special characters, or strings starting with digits).
    Since "24" is a string representation of a number, you must use bracket notation: acc["24"].
*/
