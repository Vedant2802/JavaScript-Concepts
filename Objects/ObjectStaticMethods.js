// Object.assign() , copies the property of the target Object

let target = {
  a: 1,
  q: 2,
  r: 3,
};

let source = {
  a: 3,
  b: 4,
};

// const returnObj = Object.assign(source, target);

// console.log(returnObj);

// Nested cloning(Deep Cloning) using Object.structuredClone()

const obj2 = {
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2,
    c: {
      a: 1,
      b: 2,
    },
  },
};

const obj3 = structuredClone(obj2);
// If you do a shallow copy here , then new reference will not be created , it will simply start pointing to the old reference of the nested object
// obj3.c.c.a = 3;

// console.log(obj3);
// console.log(obj2);

// Create an Array from an Object , Object.entries()

// const myArr = Object.entries(obj2);
// console.log(myArr);
// const myArr1 = Object.entries(source);
// console.log(myArr1);

// Output
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', { a: 1, b: 2, c: [Object] } ] ]
// [ [ 'a', 3 ], [ 'b', 4 ] ]

// Create Object from an Array using Object.fromEntries()

// Making object immutable using , Object.freeze()

const freezedObj = Object.freeze(obj3);

// TO check if the object is frozen? , using Object.frozen() -> gives a boolean value

// IF you want to modify the existing properties , but keep the object immutable , then we can use the , "Object.ceil()" , method

// How to check if an Object has a property or not? we can use Object.hasOwn(obj , property) -> will give a boolean value of True or False

// Object Destructuring
