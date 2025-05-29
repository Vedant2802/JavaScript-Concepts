// ES6 syntactical sugar

class User {
  constructor(username, email, password) {
    this.my_username = username;
    this.my_email = email;
    this.my_password = password;
  }

  encryptPassword() {
    return `${this.my_password}abc`;
  }
}

// const my_user = new User("Akshat", "abc", "xyz");
// console.log(my_user);
// console.log(my_user.encryptPassword());

//

class Teacher extends User {
  constructor(username, school, dpt) {
    super(username);
    this.school = school;
    this.dept = dpt;
  }
}

const teacher1 = new Teacher("Akshat", "DAV", "HGA");
console.log(teacher1);
