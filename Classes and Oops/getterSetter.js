class User {
  constructor(email, pwd) {
    this.email = email;
    this.pwd = pwd;
  }

  // when you write getter and settter for a property it overrides the existing constructor functionality

  // Also when you are writing getters and setters for a property the method name should be same as the property name
  get pwd() {
    // getters will always have a return value
    return this._pwd.toLowerCase();
  }

  set pwd(value) {
    this._pwd = value.toUpperCase();
  }
}

/* 
    what happens behind the scenes
    Exactly! ✅

When you write:

    this.pwd = "secret123";
    JavaScript automatically does this behind the scenes:

    set pwd("secret123") {
        this._pwd = "SECRET123";
    }
So yes — the value "secret123" is automatically passed as an argument to the setter. You don’t have to do it manually.

Think of it like syntactic sugar:
This:

    user.pwd = "secret123";
    Is sugar for something like:

    user.setPwd("secret123"); // if you had a regular method
    Except the setter lets you assign to it like a property, making it feel more natural and clean.

*/

const Akshat = new User("abc.com", "xyxz");

console.log(Akshat.pwd);
