// function User(email, password) {
//   this._email = email;
//   this._password = password;

//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value;
//     },
//   });

//   Object.defineProperty(this, "password", {
//     get: function () {
//       return this._password.toUpperCase();
//     },
//     set: function (value) {
//       this._password = value;
//     },
//   });
// }

// const akshat = new User("abc.com", "xyxz");

// console.log(akshat.email);

/* here if try to console the value you will get an error ,  the reason 
    🔧 The key difference:
Feature	class syntax	Object.defineProperty in constructor
When getter/setter is set	Before constructor runs	During constructor, in the middle of setup
this.pwd = "abc"	Calls set pwd(...)	Fails unless setter already defined

✅ Final takeaway:
In class syntax, JavaScript sets up everything (get, set, prototype) before your constructor executes — that’s why it just works.

In function constructor with Object.defineProperty, you control when the descriptor is added, so you need to define the property before you use it.

*/

// Object_get_set

const User = {
  _email: "Akshat",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

akshat = Object.create(User);
console.log(akshat._email);
