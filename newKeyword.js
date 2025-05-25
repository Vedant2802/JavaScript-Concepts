let User = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    console.log(`the full name is ${this.firstName}${this.lastName} `);
  };
};

const Akshat = new User("Akshat", "Vedant");
console.log(Akshat);
console.log(Akshat.getFullName());
