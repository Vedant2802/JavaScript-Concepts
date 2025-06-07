// Revision about "this" keyword
// Based on where the 'this' keyword has been used , its value changes

// Example 1 , Inside of an Object - Implicit Binding

const emp = {
  id: 1234,
  name: "Akshat",
  greet: function () {
    // console.log(`hello this is ${this.name}`);
    return this;
  },
};

// const { greet } = emp;

// console.log(emp.greet());

// Example 2 , 'this' keyword inside a function

function sayName() {
  console.log("this inside a function", this);
}
// In the node env , it will point to the Global Object ,  in the browser environment it is going to point to the window object
// sayName();

/*
    Output
    this inside a function <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/

// Inside a nested function

function outer(a) {
  console.log("this is from the outer function", this);
  return function inner(b) {
    // console.log("this", this.b);
    console.log("this is from the inner function", this);
  };
  //   inner();
}

// const outerResult = outer(5);
// outerResult(3);

// here iside the inner function also the 'this' will point to the GLobal or Window object itself , not the scope of outer Function
// Imp if you are using the struct mode then , the this will be undefined , if you use 'this' , inside a standalone js function

// Example 3 , Inside the Arrow Function

const getFood = () => this;
console.log("this inside Arrow function", getFood());

// Since Arrow functions do not have their own this , its value is always determined by where it is being used(Lexical Scope) and its surrounding
// the this inside the Arrow functions point to the parent of the lexical scope on which it is declared
// Demo

// function normalFunction() {
//   //   this.name = "Akshat";
//   const demoArrow = () => {
//     console.log(
//       `the this inside Arrow function refers to its surroundings and scope ${this}`
//     );
//   };

//   demoArrow();
// }

// normalFunction();

const newObj = {
  name: "Akshat",
  age: 25,

  name2: {
    fullname: () => {
      console.log(`the full name is ${this.name}`);
    },
  },
};

const {
  name2: { fullname },
} = newObj;

// console.log(fullname());

// Explicit Binding : Call , Apply and Bind

function greetings() {
  console.log(this);
  console.log(`hello ${this.name} belongs to ${this.address}`);
}
// greetings();

const user = {
  name: "Akshat",
  address: "Muzaffarpur",
};

// How to call the Greetings function in the context of the user Object

// greetings.call({
//   name: "ram",
//   address: "shyam",
// });

greetings.call(user);

// user.greetings();

// bind() , bind does not immediately execute the function , instead it returns a new function reference , that can be executed at a later point of time

Function.prototype.customBind = function (context, args) {
  const originalFunction = this;
  return function (callargs) {
    return originalFunction.apply(context, [...args, ...callargs]);
  };
};
