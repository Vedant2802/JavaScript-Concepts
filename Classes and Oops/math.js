// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);

// console.log(descriptor);

const my_name = {
  name: "Akshat",
  age: "25",
  isAvailable: false,
};

console.log(Object.getOwnPropertyDescriptor(my_name, "name"));

Object.defineProperty(my_name, "name", {
  writable: false,
  enumerable: false,
});
