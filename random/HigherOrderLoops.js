// for of loop

// these are array specific loops

// const arr = [1, 2, 3, 3, 5];
// for (const element of arr) {
//   console.log(element);
// }

// normal for loop , this gives you the index of the arrays , but for of give you the values of each index
// for (index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// for of can be used on strings or objects also
// const code = "Hello World";
// for (const index of code) {
//   console.log(index);
// }

// Maps data type

// const myMap = new Map();
// myMap.set("In", "India");
// myMap.set("fr", "France");

// for (const [key, value] of myMap) {
//   console.log(key, value);
// }

// Object data type

// const myObj = {
//   game: "GTA",
//   name: "Gta5",
// };

// objects are not iterable using for of loop

// To iterate on Object you can use the for in loop
const myObj = {
  game: "GTA",
  name: "Gta5",
  game2: "NFS",
};

for (const key in myObj) {
  console.log(`the values are ${myObj[key]}`);
}

// You can use for in loop for arrays also

// Maps data type is not iterable , so you can not use the for of or the for in
