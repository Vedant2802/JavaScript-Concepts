/* If you do not want to give the access of all the methods of the 
    class to the intances you can use static
*/

class User {
  constructor(name, pwd, id) {
    this.name = name;
    this.pwd = pwd;
    this.id = id;
  }

  // once you add static keyword here and then try to access the method
  // you will get an error that storeId is not a function
  storeId() {
    return `The id is ${this.id}`;
  }
}

class Teacher extends User {
  constructor(name, subject, grade, pwd, id) {
    // super constructor must be called first before the derived class "this"
    super(name, pwd, id);
    this.subject = subject;
    this.grade = grade;
  }
}

// newUser = new User("Akshat", "xyz", "123");
// console.log(newUser);
// console.log(newUser.storeId());

const teacher = new Teacher("Akshat", "Maths", 10, "xxx", "acc");
console.log(teacher);
console.log(teacher.storeId());
