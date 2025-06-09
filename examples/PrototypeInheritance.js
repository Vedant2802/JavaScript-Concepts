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
