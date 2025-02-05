const myObj = {
  name: "akshat",
  age: 24,
  email: "akshat.vedant@google.com",
  home: "Muz",
};

// Methods to access an object

console.log(myObj["name"]);

// 2nd method

console.log(myObj.name);

// how to add a symbol to an object

const newSymbol = Symbol("key");

const myObj2 = {
  name: "akshat",
  age: 24,
  email: "akshat.vedant@google.com",
  home: "Muz",
  [newSymbol]: 24,
};

console.log(typeof myObj2[newSymbol]);

// using this you can not modify the values of the objects
Object.freeze(myObj2);
