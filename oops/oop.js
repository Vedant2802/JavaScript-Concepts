// const user = {
//   username: "akshat",
//   loginCount: 8,

//   getUserDetails: function () {
//     console.log("get user details from database");
//   },
// };

// console.log(user[0]);
// console.log(user.username);

function User(username, isLoggedIn) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  //   this.print = function () {
  //     console.log(this);
  //   };
  return this;
}
// console.log(this);
const userOne = User("Akshat", true);
// suppose you do this
const userTwo = User("Vedant", false);
// console.log(userOne);
console.log(userTwo);
// This is going to override the values inside the userOne also , because you are mutating the same instance of the function
