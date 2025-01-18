let obj1 = {
  firstName: "Akshat",
  lastName: "Vedant",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// name.printFullName();

let name2 = {
  firstName: "Vedant",
  lastName: "Akshat",
  //   printFullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
};

// function borrowing

// name.printFullName.call(name2);
// console.log(this.firstName);

function printName(hometown, state) {
  console.log(this.firstName + "" + this.lastName + hometown + state);
}

printName.call(obj1, "Delhi");

printName.apply(obj1, ["Delhi", "Bihar"]);

printName.bind(obj1, "Delhi", "Bihar");

console.log(printName);
