let arr = ["Akshat", "Vedant"];
let object = {};
// console.log(arr.length);

/* when we create an array it has its prototype
 */

// console.log(arr.__proto__);

/* Its protytpe has its pown prototype
 */
// console.log(arr.__proto__.__proto__);

/* its prototypes prototype is actually NULL
 */
// console.log(arr.__proto__.__proto__.__proto__);

// function ABC() {}

/* this functions prototype is function.prototype , and then function.prototype's prototype is actually an object */

Function.prototype.myName = function () {
  console.log("Akshat");
};

function abc() {}

console.log(abc.myName());

class Car {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let object1 = new Car("bnw", 10);

console.log(Object.getPrototypeOf(object1) === Car.prototype);

Object.prototype.getWheels = function () {
  console.log(4);
};

// object1.getWheels();
Car.getWheels();

// Object.setPrototypeOf(object1, Car);

// object1.prototype === Car.prototype;
