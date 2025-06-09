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
  this.print = function () {
    console.log(this);
  };
  return this;
}
console.log(this);
const userOne = new User("Akshat", true);
console.log(userOne.print());
