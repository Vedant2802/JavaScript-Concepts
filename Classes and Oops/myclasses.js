// // ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// // behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tea", "tea@gmail.com", "123");

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

class User {
  constructor(username, email, pwd) {
    this.username = username;
    this.email = email;
    this.password = pwd;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeusername() {
    this.my_username = this.username.toUpperCase();
    return this.my_username;
  }
}

/* What javascript is doing behind the scenes

  Every class in JS has a .prototype object.

  Every instance of a class has an internal reference to that prototype via [[Prototype]] (accessible with Object.getPrototypeOf(instance) or __proto__).

  This is how inheritance works in JS.
*/

const my_name = new User("Akshat", "abc.com", "xyz");

// console.log(my_name);
// console.log(my_name.changeusername());
