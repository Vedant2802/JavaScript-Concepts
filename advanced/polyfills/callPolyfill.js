let obj = {
  name: "Akshat",
};

function printname() {
  console.log(this.name);
}

// printname.call(obj);

Function.prototype.customCall = function (context, ...args) {
  return this.apply(context, args);
};

printname.customCall(obj);
