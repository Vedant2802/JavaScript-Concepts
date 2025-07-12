/*
    In a map the key can be if any type , also it remembers the order in which the keys are
    inserted like arrays
*/

let map = new Map();

// method to set the values of a map
map.set([], 25);

// console.log(map);

// In map one thing to remember , if you use the same key to add the values , it will update
// or replace the previous values

// method to get the values of a map
map.get([]);
// console.log(map);

// Map keys

const funMap = new Map();

funMap.set(560, "Akshat");
funMap.set(true, "Vedant");

const obj = {
  name: "Akshat Vedant",
};

funMap.set(obj, 100);

// console.log(funMap.size);

/*
     Map propertiers and methods
*/

// console.log(funMap.has(560));

// funMap.delete(560);
// console.log(funMap);

/*
    How to iterate over Maps
    keys() , values() , entries()
*/

/*
    forEach() , is going to give the values of the map
*/

// funMap.forEach(function (item) {
//   console.log(item);
// });

// console.log(funMap);

// for (let [key, values] of funMap) {
//   const actualKey = typeof key === "object" ? JSON.stringify(key) : key;
//   console.log(`the key is ${actualKey} and value is ${values}`);
// }

// const object = {};

// console.log(typeof object);

/*
    conversions
*/

// Object to a Map
// new Map(Object.entries(object))

// Map to an object
// new Object(Object.fromEntries(object))

// Map to an Array

// Array.from(map) , [...map]

/*
    Unique element in an array using sets
*/

let arr = [1, 2, 3, 4, 3, 3, 4, 5, , 5, 5, 6, , , 6];

// let set = new Set();

// arr.forEach((item) => {
//   set.add(item);
//   console.log(set);
//   return set;
// });

// console.log(set);

/*
    removing undefined values , due to trailing commas
    
*/
// const uniqueEl = new Set(arr.flat());
const uniqueEl = new Set(arr.filter((v) => v !== undefined));
console.log(uniqueEl);
