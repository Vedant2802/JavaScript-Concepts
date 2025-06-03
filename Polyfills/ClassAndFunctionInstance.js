// let name = {
//   firstName: "Akshat",
//   lastName: "Vedant",
//   printFullName: function () {
//     console.log("The full name is ", `${this.firstName} ${this.lastName}`);
//   },
// };

// class Name {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   static printFullName() {
//     console.log("The Full Name is", `${this.firstName} ${this.lastName}`);
//   }
// }

// class Teacher extends Name {
//   constructor(firstName, lastName, subject) {
//     super(firstName, lastName);
//     // Name.call(this, ...arguments);
//     this.subject = subject;
//   }
// }

// teacher1 = new Teacher("Maths", "Akshat", "Vedant");
// console.log(teacher1);
// instance1 = new Name("Akshat", "Vedant");
// instance1.printFullName();
// console.log(instance1 === instance1);

function Name(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.printFullName = function () {
    console.log("The Full Name is ", `${this.firstName} ${this.lastName}`);
  };
}

function Teacher(firstName, lastName, subject) {
  Name.call(this, ...arguments);
  this.subject = subject;
}

Teacher.prototype.printTeacherName = function () {
  console.log("The full name is "`${this.firstName} ${this.lastName}`);
};

const teacher1 = new Teacher("Akshat", "Vedant", "Maths");

// console.log(teacher1.__proto__);
console.log(Teacher.prototype === teacher1.__proto__);

const teacher2 = Object.create(Teacher.prototype);
Teacher.call(teacher2, "Akshat", "Vedant", "Maths");
