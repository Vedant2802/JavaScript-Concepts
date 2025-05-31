// function SetUsername(username) {
//   //complex DB calls
//   this.username = username;
//   console.log("called");
// }

// function createUser(username, email, password) {
//   SetUsername.call(this, username);

//   this.email = email;
//   this.password = password;
// }

// const chai = new createUser("chai", "chai@fb.com", "123");
// console.log(chai);

function SetUserName(username) {
  //complex calculation
  this.my_username = username;
}

function createUser(username, email, password) {
  this.email = email;
  this.password = password;
  // this.username = username;
  SetUserName.call(this, username);
}

const akshat = new createUser("Akshat", "ab.com", "xyz");
console.log(akshat.email);
console.log(akshat.password);
console.log(akshat.my_username);
console.log(akshat);
