// let value = {
//   name: "Akshat",
//   age: 40,
// };

// if you have a special character in the key you have to explicitly bind it arround double quotes
// ex:
// value = {
//   "is True": true,
// };

// to access such key , you have to use this [] subuscript notation , you can not use it using the '.'
// console.log(value["is True"]);

/*
    Deleting a Value
*/

// delete value.name;
// console.log(value);

/* How to assign dynamic keys in an object */

// let car = prompt("enter the name of the car");

// let favCar = {
//   [car]: "5",
// };

/* Declaring object using the Object constructor */

// TO iterate over any Object , you can use a for in loop

newObject = {
  myName: "Akshat",
  city: "Delhi",
  age: 25,
  next: {
    myName: "Akshat",
    city: "Delhi",
    age: 25,
    next: {
      myName: "Akshat",
      city: "Delhi",
      age: 25,
    },
  },
};

// for (const key in newObject) {
//   console.log(newObject[key]);
// }

// Another method , Object.keys() , gives all the keys inside an array

// const value = Object.keys(newObject);
// console.log(value);
// const currentValue = value.map((item) => {
//   console.log(newObject[item]);
// });

let fruit = { name1: "Mango" };
const oneMoreFruit = { name: "Mango" };
// This will give me false because they are pointing to different memory locations.
// console.log(fruit === oneMoreFruit);
// But now when i do this , they are pointing to the same memory location ,
// Objects are compared by their refernces not value , now the memory refrence for both is same
fruit = oneMoreFruit;
console.log(fruit.name1);
// fruit.name1 = "Apple";
// So this is going to give me true
// console.log(fruit === oneMoreFruit);

// console.log(fruit);
