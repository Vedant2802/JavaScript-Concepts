// const User = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getFullName = function () {
//     console.log(`the full name is ${this.firstName}${this.lastName} `);
//   };
// };

// console.log(User);

// const Akshat = User("Akshat", "Vedant");
// const Vedant = User("Vedant", "Sharma");
// console.log(Akshat);
// console.log(Vedant);

// function User(name, age) {
//   if (typeof age == Number) {
//     this.my_name = name;
//     this.my_age = age;
//   } else {
//     this.my_age = "Age is not a number";
//     this.my_name = name;
//   }
// }
// User.prototype.concatenate_inputs = function () {
//   return this.name + String(this.age);
// };

// const user1 = new User("Akshat", "shanky");
// console.log(user1.my_age);
// console.log(User.__proto__);
// console.log(user1.concatenate_inputs());

function User(name, age) {
  if (typeof age === "number") {
    this.my_name = name;
    this.my_age = age;
  } else {
    this.my_age = "Age is not a number";
    this.my_name = name;
  }
  this.concatenate_inputs = function () {
    return this.my_name + " " + String(this.my_age);
  };
}

// User.prototype.concatenate_inputs = function () {
//   return this.my_name + String(this.my_age);
// };

const user1 = new User("Akshat", 25);

console.log(user1.my_age); // "Age is not a number"
console.log(Object.getPrototypeOf(user1)); // User.prototype
console.log(user1.concatenate_inputs()); // "AkshatAge is not a number"

////////// * Prototype Explanation * ///////

Object.prototype.true_length = function () {
  // `this` is the string instance the method is called on
  const trimmed = this.trim();
  return trimmed.length;
};

const my_name = "Akshat  ";
console.log(my_name.true_length()); // 6
