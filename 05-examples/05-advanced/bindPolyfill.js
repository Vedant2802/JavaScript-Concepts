let obj = {
  name: "akshat",
  age: 24,
};

let myname = function (hometown, state, country) {
  console.log(this.name + "" + hometown + this.age + state + country);
  // console.log(this);
};
myname();
// let printMyName = myname.bind(obj, "patna", "Bihar");

// printMyName();
Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = myname.mybind(name, "Delhi", "Bihar");
printMyName2("India");
