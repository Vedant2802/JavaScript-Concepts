let name1 = {
  firstName: "Akshat",
  lastName: "Vedant",
  //   printFullName: function () {
  //     console.log("The full name is ", `${this.firstName}${this.lastName}`);
  //   },
};

function printFullName(hometown) {
  console.log(
    "The full name is",
    `${this.firstName}  ${this.lastName} ${hometown}`
  );
  console.log(this);
}

printFullName.apply(name1, ["Delhi"]);

// let name2 = {
//   firstName: "Sachin",
//   lastName: "Tendu",
//   //   printFullName: function () {
//   //     console.log("The full name is ", `${this.firstName}${this.lastName}`);
//   //   },
// };

// name1.printFullName.call(name2);
// console.log(value);

// The Only difference between call and Apply is the way you pass the arguments

// The difference between call and bind is , instead of directlt invoking the method , bind gives us copy/reference to that method which can be invoked later

let name = {
  firstName: "akshat",
  lastName: "vedant",
};

function printFullName(address) {
  console.log(
    "the full name is ",
    `${this.firstName} ${this.lastName} ${address}`
  );
}

Function.prototype.customBind = function (context, ...boundArgs) {
  const originalFunction = this;
  return function (...callArgs) {
    return originalFunction.apply(context, [...boundArgs, ...callArgs]);
  };
};

// function customBind(obj, fn) {
//   return function () {
//     this.fn.call(obj);
//   };
// }

const variable = printFullName.customBind();
