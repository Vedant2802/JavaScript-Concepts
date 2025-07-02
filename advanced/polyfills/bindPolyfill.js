let obj = {
  firstname: "Akshat",
  lastname: "Vedant",
};

let printName = function () {
  console.log(this.firstname + " " + this.lastname);
};

// printName();

// let printMyName = printName.mybind(obj);

// printMyName();

// Function.prototype.mybind = function (context, ...args) {
//   let obj = this;
//   return function () {
//     return obj.apply(context, ...args);
//   };
// };

Function.prototype.mybind = function (context, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
};

let printMyName = printName.mybind(obj);

printMyName();
